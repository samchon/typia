import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

/**
 * `ttsc transform --file=…` is the bundler-plugin hook: given one .ts file and
 * its tsconfig, the binary emits the rewritten JS to stdout. This test drives
 * the CLI exactly as an unplugin adapter would (spawn + capture stdout) and
 * asserts:
 *
 *   1. Exit code is 0.
 *   2. stdout contains the rewritten `is<T>` body (no `typia.is(` leftovers).
 *   3. The emitted JS evaluates and validates correctly when loaded.
 */
export async function test_transform_subcommand(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "primitives");
  const srcFile = path.join(fixture, "src", "main.ts");

  const result = runTtsc(
    ["transform", `--file=${srcFile}`, "--tsconfig=tsconfig.json"],
    fixture,
  );
  assert.equal(result.status, 0, `ttsc transform should exit 0; stderr:\n${result.stderr}`);
  assert.ok(
    result.stdout.includes(`"string" === typeof input`),
    `expected rewritten is<string> body in stdout:\n${result.stdout.slice(0, 500)}`,
  );
  assert.ok(
    !result.stdout.includes("typia_1.default.is("),
    `rewriter should have replaced typia.is call; stdout head:\n${result.stdout.slice(0, 500)}`,
  );

  // Write the stdout to a temp file and run it as CommonJS to prove the emit
  // is actually executable (not just textually plausible).
  const tmpDir = path.join(fixture, ".ttsc-transform-tmp");
  fs.rmSync(tmpDir, { recursive: true, force: true });
  fs.mkdirSync(tmpDir, { recursive: true });
  const tmpFile = path.join(tmpDir, "transformed.js");
  fs.writeFileSync(tmpFile, result.stdout);
  delete require.cache[require.resolve(tmpFile)];
  const mod = require(tmpFile) as {
    check_string: (x: unknown) => boolean;
    check_number: (x: unknown) => boolean;
  };
  assert.equal(mod.check_string("hi"), true);
  assert.equal(mod.check_string(42), false);
  assert.equal(mod.check_number(42), true);
  assert.equal(mod.check_number("x"), false);

  fs.rmSync(tmpDir, { recursive: true, force: true });
}
