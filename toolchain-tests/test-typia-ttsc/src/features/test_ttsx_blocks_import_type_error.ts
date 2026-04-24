import * as assert from "assert";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsx } from "../utils/runTtsx";

export async function test_ttsx_blocks_import_type_error(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "runner-import-error");
  const entry = path.join(fixture, "src", "main.ts");

  const result = runTtsx(["--project", "tsconfig.json", entry], fixture);
  assert.notEqual(result.status, 0, "ttsx should fail before execution");
  assert.equal(result.stdout.includes("TTSX_IMPORT_SHOULD_NOT_RUN"), false);
  assert.match(result.stderr, /ttsx: project check failed/);
  assert.match(
    result.stderr,
    /Type 'number' is not assignable to type 'string'/,
  );
}
