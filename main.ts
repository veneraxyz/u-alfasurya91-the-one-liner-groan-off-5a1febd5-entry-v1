import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const JOKE =
  "I asked my computer for a joke about construction. It said it was still building up to it.";

const MAX_LENGTH = 140;

function hasControlCharacter(text: string): boolean {
  for (const ch of text) {
    const code = ch.codePointAt(0) ?? 0;
    if (code < 0x20 || code === 0x7f) {
      return true;
    }
  }
  return false;
}

function main(): void {
  // Basic validation: one line, non-empty, within the limit.
  if (JOKE.length === 0 || JOKE.trim().length === 0) {
    throw new Error("Joke must not be empty or whitespace-only.");
  }
  if (JOKE.length > MAX_LENGTH) {
    throw new Error(
      `Joke is ${JOKE.length} characters, over the ${MAX_LENGTH} limit.`,
    );
  }
  if (JOKE.includes("\n") || JOKE.includes("\r")) {
    throw new Error("Joke must be exactly one line.");
  }
  if (hasControlCharacter(JOKE)) {
    throw new Error("Joke must not contain control characters.");
  }

  const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");
  mkdirSync(outputDir, { recursive: true });
  const outputPath = join(outputDir, "entry.txt");
  writeFileSync(outputPath, JOKE + "\n", "utf8");

  // Read-back guard: the file on disk must be exactly the joke
  // plus exactly one trailing newline, nothing more.
  const written = readFileSync(outputPath, "utf8");
  if (written !== JOKE + "\n") {
    throw new Error("Read-back mismatch: entry.txt does not equal the joke.");
  }
  if (!written.endsWith("\n") || written.endsWith("\n\n")) {
    throw new Error("entry.txt must end with exactly one trailing newline.");
  }
  if (hasControlCharacter(written.replace(/\n$/, ""))) {
    throw new Error("entry.txt contains a control character.");
  }
}

main();
