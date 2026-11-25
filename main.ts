import { mkdirSync, writeFileSync, chmodSync, readFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one sentence about the best advice I ever got, 145 characters.
// A maths teacher who failed me still wrote my reference, and only years
// later did his line about being liked versus being useful finally land.
const ENTRY =
  "My maths teacher, who failed me and still wrote my reference, said: being liked is not the same as being useful — I only understood it at thirty.";

function sentenceCount(text: string): number {
  const terminators = text.match(/[.!?]+/g);
  return terminators ? terminators.length : 0;
}

function validate(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("entry is empty or only whitespace");
  }
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (sentenceCount(text) !== 1) {
    throw new Error(`entry must be exactly one sentence, got ${sentenceCount(text)}`);
  }
}

// The grader reads entry.txt from disk, so verify exactly what landed
// there: byte-identical to the validated entry, and re-validate the
// written bytes themselves (length, single line, one sentence).
function verifyWritten(path: string, expected: string): void {
  const saved = readFileSync(path, "utf8");
  if (saved !== expected) {
    throw new Error("read-back mismatch: entry.txt does not match the validated entry");
  }
  if (saved.length !== expected.length) {
    throw new Error(`read-back length mismatch: got ${saved.length}, expected ${expected.length}`);
  }
  validate(saved);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
validate(ENTRY);
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");
chmodSync(outPath, 0o644);
verifyWritten(outPath, ENTRY);
console.log(`wrote ${outPath} (${ENTRY.length} characters, 1 sentence, read-back verified)`);
