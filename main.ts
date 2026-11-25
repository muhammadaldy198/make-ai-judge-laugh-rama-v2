import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE = "I filed my resignation as an expense report. Finance approved it in six minutes — the only claim that ever paid me to leave.";
// One line, one breath: the resignation is the expense, and the approval is the punchline.

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, LINE);
chmodSync(target, 0o644);
