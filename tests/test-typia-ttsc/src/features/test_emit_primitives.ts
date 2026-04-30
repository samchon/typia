import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

/**
 * End-to-end emit test: run `ttsc --emit` on the primitives fixture,
 * then require the generated dist/main.js and assert the compiled validators
 * return the expected booleans for a handful of inputs. This is the core
 * proof that ttsc produces runnable TS7/tsgo output byte-for-byte compatible
 * with typia v12's `is<T>` semantics for primitive types.
 */
export async function test_emit_primitives(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "primitives");
  const dist = path.join(fixture, "dist");
  // Clean slate so we measure this run's output only.
  fs.rmSync(dist, { recursive: true, force: true });

  const result = runTtsc(
    ["--tsconfig=tsconfig.json", "--emit", "--quiet"],
    fixture,
  );
  assert.equal(
    result.status,
    0,
    `ttsc --emit should succeed; stderr=\n${result.stderr}`,
  );

  const mainPath = path.join(dist, "main.js");
  assert.ok(
    fs.existsSync(mainPath),
    `expected ${mainPath} to exist after --emit`,
  );
  const src = fs.readFileSync(mainPath, "utf8");

  // The rewriter must have replaced every typia.is call AND dropped the
  // now-unused default import so the runtime does not try to require typia.
  assert.ok(
    !src.includes(`require("typia")`),
    `typia import should have been removed; file:\n${src}`,
  );
  for (const fragment of [
    `(input) => "string" === typeof input`,
    `(input) => "number" === typeof input`,
    `(input) => "boolean" === typeof input`,
    `(input) => "bigint" === typeof input`,
    `(input) => true`,
  ]) {
    assert.ok(
      src.includes(fragment),
      `expected rewritten fragment ${JSON.stringify(fragment)} in:\n${src}`,
    );
  }

  // Load + run the compiled module. We clear the require cache so repeated
  // test runs always pick up the fresh output.
  delete require.cache[require.resolve(mainPath)];
  const mod = require(mainPath) as {
    check_string: (x: unknown) => boolean;
    check_number: (x: unknown) => boolean;
    check_boolean: (x: unknown) => boolean;
    check_bigint: (x: unknown) => boolean;
    check_any: (x: unknown) => boolean;
  };

  assert.equal(mod.check_string("hello"), true, "check_string('hello')");
  assert.equal(mod.check_string(42), false, "check_string(42)");
  assert.equal(mod.check_number(42), true);
  assert.equal(mod.check_number("x"), false);
  assert.equal(mod.check_boolean(true), true);
  assert.equal(mod.check_boolean(0), false);
  assert.equal(mod.check_bigint(BigInt(42)), true);
  assert.equal(mod.check_bigint(42), false);
  assert.equal(mod.check_any({}), true);
  assert.equal(mod.check_any(undefined), true);
}
