// One Sentence Absurd Invention Pitch
// Entry: one sentence pitching a ridiculous invention that fixes a tiny
// everyday annoyance. Output must be exactly one sentence, 1 to 220 chars.
// The pitch: a toaster with manners, an apology in writing plus a guilt slice.
import { writeFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const sentence =
  "A toaster that files a formal apology every time it burns your bread, then toasts a replacement slice out of guilt.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), sentence, "utf8");
