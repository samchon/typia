import { spawnSync } from "child_process";
import * as fs from "fs";

import { TestGlobal } from "../TestGlobal";

export interface TtscResult {
  stdout: string;
  stderr: string;
  status: number;
}

/**
 * Invoke the compiled ttsc binary. `fixtureDir` must contain a tsconfig.json.
 *
 * Gives every test a single place to add pre-flight assertions (binary
 * present, etc.) — this is the only entry point used by the DynamicExecutor
 * test harness.
 */
export function runTtsc(args: readonly string[], fixtureDir?: string): TtscResult {
  if (!fs.existsSync(TestGlobal.TTSC_BINARY)) {
    throw new Error(
      `ttsc binary missing at ${TestGlobal.TTSC_BINARY}. ` +
        `Run \`pnpm run build:go\` before the test, or use the top-level \`pnpm test\` script.`,
    );
  }
  if (!fs.existsSync(TestGlobal.TTSC_LAUNCHER)) {
    throw new Error(
      `ttsc launcher missing at ${TestGlobal.TTSC_LAUNCHER}. ` +
        `Run \`pnpm run build:packages\` before the test, or use the package \`start\` script.`,
    );
  }
  const result = spawnSync(TestGlobal.TTSC_LAUNCHER, args, {
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
