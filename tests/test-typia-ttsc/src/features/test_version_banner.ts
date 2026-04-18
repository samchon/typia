import * as assert from "assert";

import { runTtsc } from "../utils/runTtsc";

export async function test_version_banner(): Promise<void> {
  const { stdout, status } = runTtsc(["--version"]);
  assert.equal(status, 0, "ttsc --version must exit 0");
  for (const fragment of ["ttsc ", "commit", "go"]) {
    assert.ok(
      stdout.includes(fragment),
      `version banner should include ${JSON.stringify(fragment)}: ${stdout}`,
    );
  }
}
