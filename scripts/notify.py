"""每日新文献推送：读取 research-data.js，挑出本次新增的文献，推送到微信(PushPlus) + 邮箱(Gmail)。

设计要点（与 fetch_research.py 一致：纯标准库、零依赖、防御性）：
- 用 PMID 去重：维护 notified-pmids.json，只推真正新增的文章，不重复刷屏。
- 首次运行（无状态文件）：只把当前文章记为已读，不推送（避免几十篇刷屏）。
- 渠道按 secret 存在与否自动启用：缺 PUSHPLUS_TOKEN 就不发微信，缺 GMAIL_* 就不发邮件。
- 发送失败只打印警告、退出码仍 0：抓取已成功 commit，不该因通知失败让 workflow 变红。

环境变量：PUSHPLUS_TOKEN / GMAIL_ADDRESS / GMAIL_APP_PASSWORD / GMAIL_TO(可选,默认=GMAIL_ADDRESS)
用法：python scripts/notify.py [--dry-run] [--max N]
"""

from __future__ import annotations

import argparse
import json
import os
import re
import smtplib
import ssl
import sys
import urllib.request
from email.mime.text import MIMEText
from email.header import Header
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DATA_PATH = ROOT / "research-data.js"
STATE_PATH = ROOT / "notified-pmids.json"
PUSHPLUS_URL = "https://www.pushplus.plus/send"
MAX_KEEP = 3000  # 状态文件最多保留的 PMID 数，防止无限增长


def load_items() -> list[dict]:
    text = DATA_PATH.read_text(encoding="utf-8")
    m = re.search(r"window\.researchItems\s*=\s*(\[.*\]);", text, re.S)
    if not m:
        return []
    return json.loads(m.group(1))


def load_state() -> list[str] | None:
    """返回已推送 PMID 列表；文件不存在返回 None（首次运行标志）。"""
    if not STATE_PATH.exists():
        return None
    try:
        return json.loads(STATE_PATH.read_text(encoding="utf-8"))
    except (ValueError, OSError):
        return []


def save_state(pmids: list[str]) -> None:
    STATE_PATH.write_text(
        json.dumps(pmids[-MAX_KEEP:], ensure_ascii=False, indent=0),
        encoding="utf-8",
    )


def render(new_items: list[dict], shown: int) -> tuple[str, str, str]:
    """返回 (title, markdown, html)。markdown 给 PushPlus，html 给邮件。"""
    n = len(new_items)
    title = f"🦠 寄生虫文献日报 · {n} 篇新文献"

    md_lines: list[str] = []
    html_lines: list[str] = [
        '<div style="font-family:system-ui,-apple-system,sans-serif;max-width:680px">',
        f"<h2>🦠 寄生虫文献日报</h2><p>本次新增 <b>{n}</b> 篇文献。</p>",
    ]
    for i, it in enumerate(new_items[:shown], 1):
        t = it.get("title", "").strip()
        journal = it.get("journal", "") or "—"
        topics = " · ".join(it.get("topics", []))
        url = it.get("url", "")
        doi = it.get("doi", "")
        doi_md = f" · [DOI](https://doi.org/{doi})" if doi else ""
        doi_html = (
            f' · <a href="https://doi.org/{doi}">DOI</a>' if doi else ""
        )
        md_lines.append(
            f"**{i}. {t}**\n\n{journal} · {topics} · [PubMed]({url}){doi_md}\n\n---"
        )
        html_lines.append(
            f'<p style="margin:14px 0 4px"><b>{i}. {t}</b></p>'
            f'<p style="margin:0;color:#666;font-size:13px">{journal} · {topics} · '
            f'<a href="{url}">PubMed</a>{doi_html}</p>'
        )
    if n > shown:
        more = f"… 还有 {n - shown} 篇，见 https://shzzzayys.github.io/para-prot-signal/"
        md_lines.append(more)
        html_lines.append(
            f'<p style="margin-top:16px;color:#888">{more}</p>'
        )
    html_lines.append("</div>")
    return title, "\n\n".join(md_lines), "\n".join(html_lines)


def send_pushplus(token: str, title: str, markdown: str) -> bool:
    body = json.dumps(
        {"token": token, "title": title, "content": markdown, "template": "markdown"}
    ).encode("utf-8")
    req = urllib.request.Request(
        PUSHPLUS_URL, data=body, headers={"Content-Type": "application/json"}
    )
    with urllib.request.urlopen(req, timeout=30) as resp:
        result = json.loads(resp.read().decode("utf-8"))
    if result.get("code") != 200:
        raise RuntimeError(f"PushPlus 返回 {result.get('code')}: {result.get('msg')}")
    return True


def send_gmail(addr: str, app_password: str, to: str, title: str, html: str) -> bool:
    msg = MIMEText(html, "html", "utf-8")
    msg["Subject"] = Header(title, "utf-8")
    msg["From"] = addr
    msg["To"] = to
    ctx = ssl.create_default_context()
    with smtplib.SMTP_SSL("smtp.gmail.com", 465, context=ctx, timeout=30) as smtp:
        smtp.login(addr, app_password)
        smtp.sendmail(addr, [to], msg.as_string())
    return True


def _dispatch(title: str, markdown: str, html: str) -> bool:
    """按 secret 存在与否发送到各渠道；单个失败不阻断其余，返回是否至少发出一条。"""
    sent_any = False
    pushplus_token = os.environ.get("PUSHPLUS_TOKEN")
    if pushplus_token:
        try:
            send_pushplus(pushplus_token, title, markdown)
            print("已推送到微信 (PushPlus)。")
            sent_any = True
        except Exception as exc:  # noqa: BLE001
            print(f"[warn] PushPlus 推送失败：{exc}", file=sys.stderr)

    gmail_addr = os.environ.get("GMAIL_ADDRESS")
    gmail_pw = os.environ.get("GMAIL_APP_PASSWORD")
    if gmail_addr and gmail_pw:
        to = os.environ.get("GMAIL_TO") or gmail_addr
        try:
            send_gmail(gmail_addr, gmail_pw, to, title, html)
            print(f"已发送邮件到 {to}。")
            sent_any = True
        except Exception as exc:  # noqa: BLE001
            print(f"[warn] Gmail 发送失败：{exc}", file=sys.stderr)

    if not sent_any and (pushplus_token or gmail_addr):
        print("[warn] 所有渠道发送失败。", file=sys.stderr)
    elif not pushplus_token and not gmail_addr:
        print("未配置任何推送渠道（PUSHPLUS_TOKEN / GMAIL_*），跳过。", file=sys.stderr)
    return sent_any


def main() -> int:
    parser = argparse.ArgumentParser(description="Push new research items to WeChat/Email.")
    parser.add_argument("--dry-run", action="store_true", help="只打印，不发送、不更新状态。")
    parser.add_argument("--max", type=int, default=20, help="单次推送最多列出的文章数。")
    parser.add_argument(
        "--force-latest",
        type=int,
        default=0,
        metavar="N",
        help="测试用：无视去重状态，强制推送最新 N 篇（不更新状态文件）。",
    )
    args = parser.parse_args()

    items = load_items()
    if not items:
        print("没有可读的文献数据，跳过推送。", file=sys.stderr)
        return 0

    # 测试模式：无视状态，强制推送最新 N 篇，用于验证推送通道是否通。
    if args.force_latest > 0:
        new_items = items[: args.force_latest]
        title, markdown, html = render(new_items, args.max)
        if args.dry_run:
            print(f"[dry-run/force] {title}\n{markdown}")
            return 0
        _dispatch(title, markdown, html)
        return 0

    state = load_state()
    current_pmids = [it["pmid"] for it in items if it.get("pmid")]

    # 首次运行：仅播种状态，不推送（避免把存量几十篇全刷出去）
    if state is None:
        if not args.dry_run:
            save_state(current_pmids)
        print(f"首次运行：已记录 {len(current_pmids)} 篇为已读，不推送。", file=sys.stderr)
        return 0

    notified = set(state)
    new_items = [it for it in items if it.get("pmid") and it["pmid"] not in notified]
    if not new_items:
        print("没有新文献，跳过推送。")
        return 0

    title, markdown, html = render(new_items, args.max)

    if args.dry_run:
        print(f"[dry-run] {title}\n")
        print(markdown)
        return 0

    _dispatch(title, markdown, html)

    # 只要尝试过（无论成败）都更新状态：避免发送失败时下次把同一批又算作"新"反复刷屏。
    # 渠道偶发失败可接受漏推一次，胜过持续刷屏。
    save_state(list(notified) + [it["pmid"] for it in new_items])
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
