"""Enrich research-data.js items with DeepSeek AI analysis.

Usage:
    python scripts/enrich_research.py [--dry-run] [--max N]

For each item lacking ai_enriched=true, this script:
  1. Fetches the full abstract from PubMed (falling back to item["why"]).
  2. Calls DeepSeek to extract model_organism, method_tags,
     result_direction, and ai_synthesis.
  3. Writes the enriched fields back to research-data.js.

Already-enriched items (ai_enriched=true) are skipped.
"""
from __future__ import annotations

import argparse
import json
import os
import re
import sys
import time
from pathlib import Path

# ---------------------------------------------------------------------------
# Path setup — this script lives in scripts/, repo root is one level up.
# ---------------------------------------------------------------------------
ROOT = Path(__file__).resolve().parents[1]
OUTPUT_PATH = ROOT / "research-data.js"

# Allow running as `python scripts/enrich_research.py` from repo root.
sys.path.insert(0, str(Path(__file__).resolve().parent))

from lib.deepseek_client import call as deepseek_call  # noqa: E402
from lib.pubmed_text import fetch_abstract  # noqa: E402


# ---------------------------------------------------------------------------
# Controlled vocabularies for field validation
# ---------------------------------------------------------------------------
VALID_ORGANISMS = {
    "Toxoplasma gondii", "Plasmodium", "Cryptosporidium", "Leishmania",
    "Trypanosoma", "Mus musculus", "Homo sapiens", "cell line", "in silico", "other",
}
VALID_DIRECTIONS = {"positive", "negative", "mixed", "null"}


# ---------------------------------------------------------------------------
# Prompt
# ---------------------------------------------------------------------------
PROMPT_TEMPLATE = """你是生物医学文献分析助手。基于以下论文摘要，返回严格的 JSON，不要有任何其他文字。

摘要：
{abstract_text}

返回格式：
{{
  "model_organism": "从以下选一个: Toxoplasma gondii, Plasmodium, Cryptosporidium, Leishmania, Trypanosoma, Mus musculus, Homo sapiens, cell line, in silico, other",
  "method_tags": ["从列表选2-4个: CRISPR-Cas9, RNA-seq, scRNA-seq, ChIP-seq, Western blot, qRT-PCR, mass spec, flow cytometry, mouse infection, proteomics, immunofluorescence, bioinformatics, other"],
  "result_direction": "positive 或 negative 或 mixed 或 null（positive=结论明确支持假说，mixed=有重要caveat，negative=推翻假说，null=无显著结果）",
  "ai_synthesis": "2句中文，先说核心发现，再说方法和意义，不超过80字"
}}"""


def build_prompt(abstract_text: str) -> str:
    return PROMPT_TEMPLATE.format(abstract_text=abstract_text.strip())


# ---------------------------------------------------------------------------
# JSON extraction (tolerant of markdown code fences)
# ---------------------------------------------------------------------------
def _extract_json(text: str) -> dict | None:
    """Pull JSON from LLM output, tolerating markdown code fences."""
    text = re.sub(r"^```(?:json)?\s*", "", text.strip(), flags=re.MULTILINE)
    text = re.sub(r"\s*```\s*$", "", text.strip(), flags=re.MULTILINE)

    try:
        return json.loads(text)
    except json.JSONDecodeError:
        pass

    first = text.find("{")
    last = text.rfind("}")
    if first >= 0 and last > first:
        try:
            return json.loads(text[first : last + 1])
        except json.JSONDecodeError:
            pass

    return None


# ---------------------------------------------------------------------------
# Read / write research-data.js
# ---------------------------------------------------------------------------
def load_items() -> list[dict]:
    """Parse window.researchItems = [...] from research-data.js."""
    if not OUTPUT_PATH.exists():
        print(f"[enrich] WARNING: {OUTPUT_PATH} not found — nothing to enrich.", file=sys.stderr)
        return []

    content = OUTPUT_PATH.read_text(encoding="utf-8")
    if not content.strip():
        print(f"[enrich] WARNING: {OUTPUT_PATH} is empty — nothing to enrich.", file=sys.stderr)
        return []

    # Extract the JSON array from  window.researchItems = [...];
    match = re.search(r"window\.researchItems\s*=\s*(\[.*\])\s*;", content, re.DOTALL)
    if not match:
        print(
            f"[enrich] WARNING: Could not find window.researchItems in {OUTPUT_PATH}.",
            file=sys.stderr,
        )
        return []

    try:
        return json.loads(match.group(1))
    except json.JSONDecodeError as exc:
        print(f"[enrich] ERROR: Failed to parse researchItems JSON: {exc}", file=sys.stderr)
        return []


def save_items(items: list[dict]) -> None:
    """Overwrite research-data.js preserving the researchLastUpdated line."""
    content = OUTPUT_PATH.read_text(encoding="utf-8")

    # Preserve the researchLastUpdated line if present.
    last_updated_line = ""
    lu_match = re.search(r'^window\.researchLastUpdated\s*=\s*"[^"]*"\s*;\s*$', content, re.MULTILINE)
    if lu_match:
        last_updated_line = lu_match.group(0).strip() + "\n"

    payload = json.dumps(items, ensure_ascii=False, indent=2)
    new_content = f"{last_updated_line}window.researchItems = {payload};\n"
    OUTPUT_PATH.write_text(new_content, encoding="utf-8")


def _save_items(items: list[dict], filepath: str) -> None:
    """Checkpoint helper: write items to *filepath* preserving the original JS format.

    Identical behaviour to save_items() but operates on an arbitrary path
    so callers can pass OUTPUT_PATH or a temp path without importing it.
    """
    path = Path(filepath)
    content = path.read_text(encoding="utf-8")

    last_updated_line = ""
    lu_match = re.search(r'^window\.researchLastUpdated\s*=\s*"[^"]*"\s*;\s*$', content, re.MULTILINE)
    if lu_match:
        last_updated_line = lu_match.group(0).strip() + "\n"

    payload = json.dumps(items, ensure_ascii=False, indent=2)
    new_content = f"{last_updated_line}window.researchItems = {payload};\n"
    path.write_text(new_content, encoding="utf-8")


# ---------------------------------------------------------------------------
# Enrichment logic
# ---------------------------------------------------------------------------
def enrich_item(item: dict) -> bool:
    """Enrich a single item in-place. Returns True on success, False on failure."""
    pmid = item.get("pmid", "")
    title = item.get("title", "unknown title")

    # Try PubMed abstract first, fall back to item["why"].
    abstract = ""
    if pmid:
        abstract = fetch_abstract(pmid)

    if not abstract:
        abstract = item.get("why", "")

    if not abstract or abstract == "PubMed 暂无摘要。":
        print(f"[enrich] SKIP (no abstract): PMID {pmid} — {title[:60]}")
        return False

    prompt = build_prompt(abstract)

    try:
        raw = deepseek_call(prompt, max_tokens=1500)
    except Exception as exc:
        print(f"[enrich] WARNING: DeepSeek call failed for PMID {pmid}: {exc}", file=sys.stderr)
        return False

    parsed = _extract_json(raw)
    if parsed is None:
        print(
            f"[enrich] WARNING: Could not parse JSON response for PMID {pmid}. "
            f"Raw (first 200 chars): {raw[:200]}",
            file=sys.stderr,
        )
        return False

    # Validate controlled-vocabulary fields before writing.
    organism = parsed.get("model_organism", "other")
    if organism not in VALID_ORGANISMS:
        organism = "other"
    parsed["model_organism"] = organism

    direction = parsed.get("result_direction", "null")
    if direction not in VALID_DIRECTIONS:
        direction = "null"
    parsed["result_direction"] = direction

    # Write enriched fields.
    item["model_organism"] = parsed["model_organism"]
    item["method_tags"] = parsed.get("method_tags", [])
    item["result_direction"] = parsed["result_direction"]
    item["ai_synthesis"] = parsed.get("ai_synthesis", "")
    item["ai_enriched"] = True

    print(
        f"[enrich] OK: PMID {pmid} — {title[:60]} "
        f"| {item['model_organism']} | {item['result_direction']}"
    )
    return True


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
def main() -> int:
    parser = argparse.ArgumentParser(description="Enrich research-data.js with DeepSeek AI analysis.")
    parser.add_argument("--dry-run", action="store_true", help="Run without writing output.")
    parser.add_argument("--max", type=int, default=None, metavar="N", help="Limit to N items per run.")
    parser.add_argument("--force", action="store_true", help="重新富化已有 ai_enriched 条目")
    args = parser.parse_args()

    if not os.environ.get("DEEPSEEK_API_KEY"):
        print("[enrich] ERROR: DEEPSEEK_API_KEY is not set.", file=sys.stderr)
        return 1

    items = load_items()
    if not items:
        return 0

    # Build list of (original_index, item) pairs that need enrichment.
    pending_indexed = [
        (idx, item)
        for idx, item in enumerate(items)
        if not item.get("ai_enriched") or args.force
    ]
    if args.max is not None:
        pending_indexed = pending_indexed[: args.max]

    print(
        f"[enrich] {len(items)} total items, {len(pending_indexed)} pending enrichment"
        + (" (--force)" if args.force else "")
        + (f" (capped at {args.max})" if args.max else "")
    )

    enriched_count = 0
    skipped_count = 0
    processed = 0
    for processed_pos, (idx, item) in enumerate(pending_indexed):
        success = enrich_item(item)
        items[idx] = item  # item is mutated in-place; keep reference consistent
        if success:
            enriched_count += 1
        else:
            skipped_count += 1
        processed += 1
        time.sleep(0.5)

        # Checkpoint: save every 5 items (skip in dry-run).
        if not args.dry_run and processed % 5 == 0:
            _save_items(items, str(OUTPUT_PATH))
            print(f"[checkpoint] 已保存 {processed} 条", flush=True)

    print(f"[enrich] Done — {enriched_count} enriched, {skipped_count} skipped/failed.")

    if not args.dry_run:
        _save_items(items, str(OUTPUT_PATH))
        print(f"[enrich] Wrote {OUTPUT_PATH}")
    else:
        print("[enrich] Dry-run mode — output NOT written.")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
