import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

export async function test_transform_plugin_mixed(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "plugin-mixed");
  const srcFile = path.join(fixture, "src", "main.ts");

  const result = runTtsc(
    ["transform", `--file=${srcFile}`, "--tsconfig=tsconfig.json"],
    fixture,
  );
  assert.equal(result.status, 0, `ttsc transform should succeed; stderr:\n${result.stderr}`);
  assert.equal(
    result.stdout.startsWith("/* mixed-plugin */\n"),
    true,
    `expected banner plugin output:\n${result.stdout.slice(0, 200)}`,
  );
  assert.equal(
    result.stdout.includes(`"string" === typeof input`),
    true,
    `expected typia native rewrite in mixed pipeline:\n${result.stdout.slice(0, 400)}`,
  );
  assert.equal(
    result.stdout.includes("typia_1.default.createIs("),
    false,
    `typia call should be eliminated before JS plugin post-processing:\n${result.stdout.slice(0, 400)}`,
  );

  const tmpDir = path.join(fixture, ".ttsc-transform-tmp");
  fs.rmSync(tmpDir, { recursive: true, force: true });
  fs.mkdirSync(tmpDir, { recursive: true });
  const tmpFile = path.join(tmpDir, "main.js");
  fs.writeFileSync(tmpFile, result.stdout);
  delete require.cache[require.resolve(tmpFile)];
  const mod = require(tmpFile) as { check: (input: unknown) => boolean };
  assert.equal(mod.check("ok"), true);
  assert.equal(mod.check(1), false);
  fs.rmSync(tmpDir, { recursive: true, force: true });
}
