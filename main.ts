import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY_TEXT = "I followed ten people on TikTok yesterday. This morning TikTok quietly unfollowed all ten behind my back. I now have zero friends, one follower, and a growing suspicion the app is gaslighting me.";

const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "out";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "entry.txt"), ENTRY_TEXT);
