import { spawnSync } from "child_process";
import * as fs from "fs";

import { TestGlobal } from "../TestGlobal";

export interface TtsxResult {
  stdout: string;
  stderr: string;
  status: number;
}

export function runTtsx(args: readonly string[], fixtureDir?: string): TtsxResult {
  if (!fs.existsSync(TestGlobal.TTSX_BINARY)) {
    throw new Error(
      `ttsx binary missing at ${TestGlobal.TTSX_BINARY}. ` +
        `Run \`pnpm run build:packages\` or use the package \`start\` script.`,
    );
  }
  const result = spawnSync(TestGlobal.TTSX_BINARY, args, {
    cwd: fixtureDir,
    encoding: "utf8",
    env: {
      ...process.env,
      TTSC_BINARY: TestGlobal.TTSC_BINARY,
    },
    windowsHide: true,
  });
  if (result.error) throw result.error;
  return {
    stdout: result.stdout ?? "",
    stderr: result.stderr ?? "",
    status: result.status ?? 1,
  };
}
