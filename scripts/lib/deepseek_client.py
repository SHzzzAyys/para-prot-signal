"""DeepSeek API client using Python stdlib only (no pip deps)."""
from __future__ import annotations

import json
import os
import time
import urllib.error
import urllib.request

DEEPSEEK_API_KEY = os.environ.get("DEEPSEEK_API_KEY", "")
DEEPSEEK_BASE_URL = "https://api.deepseek.com/chat/completions"
DEEPSEEK_MODEL = "deepseek-chat"

_BACKOFF = (1, 3, 8)
_MAX_RETRIES = 3


def call(prompt: str, max_tokens: int = 1500) -> str:
    """Call DeepSeek API. Returns text response or raises on failure.

    Uses urllib.request (stdlib only). Retries up to 3 times on 5xx errors
    with backoff of 1s / 3s / 8s. Does NOT retry on 4xx (client errors).
    """
    api_key = os.environ.get("DEEPSEEK_API_KEY", DEEPSEEK_API_KEY)
    if not api_key:
        raise RuntimeError("DEEPSEEK_API_KEY is not set")

    headers = {
        "Authorization": f"Bearer {api_key}",
        "Content-Type": "application/json",
    }
    body = json.dumps(
        {
            "model": DEEPSEEK_MODEL,
            "messages": [{"role": "user", "content": prompt}],
            "max_tokens": max_tokens,
        },
        ensure_ascii=False,
    ).encode("utf-8")

    last_err: Exception | None = None
    for attempt in range(_MAX_RETRIES):
        req = urllib.request.Request(
            DEEPSEEK_BASE_URL,
            data=body,
            headers=headers,
            method="POST",
        )
        try:
            with urllib.request.urlopen(req, timeout=120) as resp:
                data = json.loads(resp.read().decode("utf-8"))
                text = (
                    data.get("choices", [{}])[0]
                    .get("message", {})
                    .get("content", "")
                    or ""
                ).strip()
                return text
        except urllib.error.HTTPError as exc:
            if exc.code == 429:
                retry_after = int(exc.headers.get("Retry-After", "10"))
                wait = min(retry_after, 60)  # cap at 60 seconds
                print(
                    f"[deepseek_client] 429 限速，等待 {wait}s …",
                    flush=True,
                )
                last_err = exc
                time.sleep(wait)
                continue
            if exc.code < 500:
                raise  # other 4xx — don't retry
            last_err = exc
            wait = _BACKOFF[min(attempt, len(_BACKOFF) - 1)]
            print(
                f"[deepseek_client] HTTP {exc.code} on attempt {attempt + 1}/{_MAX_RETRIES}, "
                f"retrying in {wait}s …"
            )
        except (urllib.error.URLError, TimeoutError, ConnectionError) as exc:
            last_err = exc
            wait = _BACKOFF[min(attempt, len(_BACKOFF) - 1)]
            print(
                f"[deepseek_client] {type(exc).__name__} on attempt {attempt + 1}/{_MAX_RETRIES}, "
                f"retrying in {wait}s …"
            )
        time.sleep(wait)

    raise RuntimeError(
        f"DeepSeek API failed after {_MAX_RETRIES} retries: {last_err}"
    )
