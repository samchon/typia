import * as assert from "assert";

import { runTtsc } from "../utils/runTtsc";

export async function test_unknown_command(): Promise<void> {
  const { stderr, status } = runTtsc(["not-a-real-command"]);
  assert.equal(status, 2, "unknown command should exit 2");
  assert.ok(
    stderr.includes("unknown command"),
    `stderr should mention unknown command, got: ${stderr}`,
  );
}
