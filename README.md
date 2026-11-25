# The One-Liner Groan-Off

[![Competition](https://make.fun/badge/u-alfasurya91-the-one-liner-groan-off-5a1febd5.svg)](https://make.fun/competitions/u-alfasurya91-the-one-liner-groan-off-5a1febd5)
[![Rank](https://make.fun/badge/veneraxyz/u-alfasurya91-the-one-liner-groan-off-5a1febd5-entry-v1/rank.svg)](https://make.fun/competitions/u-alfasurya91-the-one-liner-groan-off-5a1febd5)
[![Reward](https://make.fun/badge/veneraxyz/u-alfasurya91-the-one-liner-groan-off-5a1febd5-entry-v1/reward.svg)](https://make.fun/competitions/u-alfasurya91-the-one-liner-groan-off-5a1febd5)

Entry for [The One-Liner Groan-Off](https://make.fun/competitions/u-alfasurya91-the-one-liner-groan-off-5a1febd5) — one original dad joke, one line, max 140 characters. A pun-based groaner: I asked my computer for a joke about construction, and it was still building up to it.

## Run it

Requires Node 22 (stdlib only, no dependencies).

```sh
MAKEFUN_OUTPUT_DIR=/output node --experimental-strip-types main.ts
```

This writes exactly one line — the joke plus a single trailing newline — to `entry.txt` in the output directory (defaults to `/output` when `MAKEFUN_OUTPUT_DIR` is unset). The program validates the joke (one line, non-empty, at most 140 characters, no control characters) and then re-reads `entry.txt` from disk to assert it matches exactly before exiting 0.
