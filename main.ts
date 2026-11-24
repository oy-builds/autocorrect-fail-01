// Funniest Autocorrect Fail — make.fun entry
// Writes one single-line autocorrect fail to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt), validates the competition gate, then reads
// the file back and verifies the bytes are identical to what was written.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Final line: a single autocorrect swap, "demo" -> "demon" (one letter added,
// exactly the kind of slip a keyboard makes), with a specific consequence —
// the client now thinks a sacrifice is part of the product launch.
const ENTRY =
  "I asked my agent to text the client 'the demo is ready' — autocorrect sent 'the demon is ready' and now they're asking about the sacrifice.";

const MAX_CHARS = 199;

function validateGate(text: string): void {
  const chars = [...text].length;
  if (chars < 1 || chars > MAX_CHARS) {
    throw new Error(`gate failed: entry is ${chars} characters, must be 1-${MAX_CHARS}`);
  }
  if (text.trim() !== text) {
    throw new Error("gate failed: entry has leading or trailing whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("gate failed: entry must be a single line");
  }
  if (text.trim().length === 0) {
    throw new Error("gate failed: entry is only whitespace");
  }
}

function main(): void {
  validateGate(ENTRY);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(outPath, ENTRY, "utf8");
  const back = readFileSync(outPath, "utf8");
  if (back !== ENTRY) {
    throw new Error("verification failed: entry.txt does not match the entry byte-for-byte");
  }
  console.log(`wrote ${[...ENTRY].length} chars to ${outPath} (verified byte-identical)`);
}

main();
