import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

export async function test_build_primitives(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "primitives");
  const dist = path.join(fixture, "dist");
  fs.rmSync(dist, { recursive: true, force: true });
  const result = runTtsc(
    ["--tsconfig=tsconfig.json", "--verbose"],
    fixture,
  );

  assert.equal(
    result.status,
    0,
    `ttsc should build the project; stderr=\n${result.stderr}`,
  );

  assert.ok(
    result.stdout.includes("// ttsc-typia build: emitted=1 files"),
    `expected emitted-files summary in stdout:\n${result.stdout}`,
  );
  assert.ok(
    result.stdout.includes("// ttsc-typia build: recognized=5 total=5 rewrites=5"),
    `expected recognized-sites summary in stdout:\n${result.stdout}`,
  );
  assert.ok(
    fs.existsSync(path.join(dist, "main.js")),
    `expected ${path.join(dist, "main.js")} to exist after build`,
  );
}
