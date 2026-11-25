import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const RANT =
  "The lift's close-door button does nothing. I've pressed it 400 times. It's a button for my feelings, not the door.";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

function writeEntry(dir: string): void {
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "entry.txt"), RANT);
}

writeEntry(OUT_DIR);
