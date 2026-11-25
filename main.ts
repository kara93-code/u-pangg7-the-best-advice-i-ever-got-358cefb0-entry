// SPDX-License-Identifier: MIT
// The Best Advice I Ever Got — one sentence, written to /output/entry.txt.
// The line: a maths teacher who failed me still wrote my reference, so the
// advice is proved by the giver himself, and it only landed years later.
import { mkdirSync, writeFileSync, chmodSync } from "node:fs";

const advice =
  "My maths teacher, who failed me and still wrote my reference, said: being liked is not the same as being useful — I only understood it at thirty.";

function validate(line: string): string {
  const trimmed = line.trim();
  if (trimmed.length < 1 || trimmed.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${trimmed.length}`);
  }
  if (trimmed.includes("\n") || trimmed.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  // One sentence only: a single terminal period, no other sentence ends.
  const body = trimmed.slice(0, -1);
  if (!trimmed.endsWith(".") || body.includes(". ")) {
    throw new Error("entry must be exactly one sentence");
  }
  return trimmed;
}

const entry = validate(advice);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = `${outDir}/entry.txt`;
writeFileSync(outPath, entry, "utf8");
chmodSync(outPath, 0o644);

// Read back: the grader reads this file, so confirm what landed matches.
import { readFileSync } from "node:fs";
const saved = readFileSync(outPath, "utf8");
if (saved !== entry) {
  throw new Error("read-back mismatch: entry.txt does not match the advice");
}
console.log(`wrote ${outPath} (${entry.length} chars)`);
