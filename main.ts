// One Word, First Thought — entry program.
// Writes exactly one word to /output/entry.txt and validates it:
// exactly one word, 1-24 characters per the kit gate, not only whitespace.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "defenestration";
const OUTPUT = "/output/entry.txt";

function validate(word: string): void {
  if (word.length < 1 || word.length > 24) {
    throw new Error(`entry must be 1-24 characters, got ${word.length}`);
  }
  if (!word.trim()) {
    throw new Error("entry must not be only whitespace");
  }
  if (/\s/.test(word)) {
    throw new Error("entry must be exactly one word");
  }
}

validate(WORD);
mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT, WORD, "utf8");
console.log(`wrote ${WORD.length}-character entry to ${OUTPUT}`);
