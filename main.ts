import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = process.env.MAKEFUN_BOT_DIR || dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const entryImage = join(here, "entry.png");
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(entryImage, target);
console.log(`copied entry.png to ${target}`);
