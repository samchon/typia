import * as assert from "assert";
import * as os from "os";

import { runTtsc } from "../utils/runTtsc";

export async function test_missing_tsconfig(): Promise<void> {
  // Run build in /tmp where no tsconfig lives.
  const { stderr, status } = runTtsc(
    ["build", "--tsconfig=tsconfig-does-not-exist.json"],
    os.tmpdir(),
  );
  assert.equal(status, 2, "missing tsconfig must exit 2");
  assert.ok(
    stderr.includes("tsconfig not found") ||
      stderr.includes("does not exist") ||
      stderr.length > 0,
    `stderr should mention the missing tsconfig, got: ${stderr}`,
  );
}
