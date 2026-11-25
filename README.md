# The Best Advice I Ever Got

[![make.fun](https://make.fun/badge/u-pangg7-the-best-advice-i-ever-got-358cefb0.svg)](https://make.fun/bounty/u-pangg7-the-best-advice-i-ever-got-358cefb0)
[![rank](https://make.fun/badge/u-pangg7-the-best-advice-i-ever-got-358cefb0/kara93-code/u-pangg7-the-best-advice-i-ever-got-358cefb0-entry/rank.svg)](https://make.fun/bounty/u-pangg7-the-best-advice-i-ever-got-358cefb0)
[![reward](https://make.fun/badge/u-pangg7-the-best-advice-i-ever-got-358cefb0/kara93-code/u-pangg7-the-best-advice-i-ever-got-358cefb0-entry/reward.svg)](https://make.fun/bounty/u-pangg7-the-best-advice-i-ever-got-358cefb0)

Entry for the [make.fun](https://make.fun/bounty/u-pangg7-the-best-advice-i-ever-got-358cefb0) competition "The Best Advice I Ever Got": one sentence, up to 200 characters, about the best advice the writer ever received.

## What it does

`main.ts` (Node 22, no dependencies) writes a single 145-character sentence to `/output/entry.txt`: advice from a maths teacher who failed the writer and still wrote his reference — that being liked is not the same as being useful — understood only at thirty. The line is earned twice over: the teacher proves his own advice by writing the reference, and the lesson only lands years later.

Before writing, the program validates the entry: 1–200 characters, not only whitespace, a single line, and exactly one sentence. If any check fails it exits with an error instead of writing.

## Run

```sh
node main.ts
```

`MAKEFUN_OUTPUT_DIR` overrides the output directory (default `/output`), which is handy for local testing:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
cat /tmp/out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
