// Real-Life Patch Notes: The Comedy Changelog, v2 (Node 22, standard
// library only). The entry is one line, at most 160 characters: a software
// patch note for a bug in real life or human biology, in terse release-note
// register. This program writes that line to /output/entry.txt, where the
// gate and the judge read it.
//
// Run outside the grader's container:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "v2.1.0: fixed a bug where the user entered a room and forgot why. Root cause: the doorway buffer clears on entry.";

// Guard: the gate refuses any entry over 160 characters, so fail loudly here
// instead of shipping an invalid line.
if (LINE.length < 1 || LINE.length > 160 || LINE.trim().length === 0) {
  throw new Error(`entry line is ${LINE.length} characters; must be 1-160 and non-blank`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE);
