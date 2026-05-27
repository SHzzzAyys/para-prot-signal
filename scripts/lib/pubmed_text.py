"""Fetch plain-text abstract from NCBI efetch."""
from __future__ import annotations

import urllib.error
import urllib.parse
import urllib.request

_NCBI_BASE = "https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi"
_TOOL = "para-prot-signal"
_EMAIL = "phucvydang30@gmail.com"


def fetch_abstract(pmid: str) -> str:
    """Fetch the plain-text abstract for *pmid* via NCBI efetch.

    Returns the raw text string on success, or an empty string on any failure
    (network error, PMID not found, etc.).  Never raises.
    """
    if not pmid:
        return ""

    params = urllib.parse.urlencode(
        {
            "db": "pubmed",
            "id": pmid,
            "rettype": "abstract",
            "retmode": "text",
            "tool": _TOOL,
            "email": _EMAIL,
        }
    )
    url = f"{_NCBI_BASE}?{params}"

    try:
        with urllib.request.urlopen(url, timeout=30) as resp:
            return resp.read().decode("utf-8").strip()
    except Exception as exc:  # noqa: BLE001
        print(f"[pubmed_text] Failed to fetch PMID {pmid}: {exc}")
        return ""
