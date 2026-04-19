import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

/**
 * Smoke for `typia.assert<T>` and `typia.validate<T>`. Assert throws with a
 * `TypeGuardError`-named exception on failure; validate returns a
 * `{ success, data, errors }` record. Phase 0 semantics are simplified
 * (assert error is plain, validate reports a single top-level error) but
 * match the runtime shape users consume.
 */
export async function test_emit_assert_validate(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "assert-validate");
  const dist = path.join(fixture, "dist");
  fs.rmSync(dist, { recursive: true, force: true });

  const result = runTtsc(
    ["build", "--tsconfig=tsconfig.json", "--emit", "--quiet"],
    fixture,
  );
  assert.equal(result.status, 0, `stderr:\n${result.stderr}`);

  const mainPath = path.join(dist, "main.js");
  delete require.cache[require.resolve(mainPath)];
  const mod = require(mainPath) as {
    assert_string: (x: unknown) => string;
    assert_user: (x: unknown) => unknown;
    validate_string: (x: unknown) => {
      success: boolean;
      data: unknown;
      errors: Array<{ path: string; expected: string; value: unknown }>;
    };
    validate_user: (x: unknown) => {
      success: boolean;
      data: unknown;
      errors: Array<{ path: string; expected: string; value: unknown }>;
    };
  };

  // assert: success returns the input.
  assert.equal(mod.assert_string("ok"), "ok");
  assert.throws(() => mod.assert_string(42), (err: Error) => {
    return err.name === "TypeGuardError" && err.message.includes("string");
  }, "assert_string(42) must throw TypeGuardError");

  const validUser = { id: "a", name: "Bob", age: 10 };
  assert.deepEqual(mod.assert_user(validUser), validUser);
  assert.throws(() => mod.assert_user({ id: "a" }));
  assert.throws(() => mod.assert_user({ id: "a", name: "b", age: -1 }), "age < 0 must throw");

  // validate: success
  const ok = mod.validate_string("hello");
  assert.equal(ok.success, true);
  assert.equal(ok.errors.length, 0);

  // validate: failure
  const bad = mod.validate_string(42);
  assert.equal(bad.success, false);
  assert.equal(bad.errors.length, 1);
  assert.equal(bad.errors[0]!.path, "$input");
  assert.ok(bad.errors[0]!.expected.includes("string"));
  assert.equal(bad.errors[0]!.value, 42);

  // validate: user schema
  const userOk = mod.validate_user(validUser);
  assert.equal(userOk.success, true);
  const userBad = mod.validate_user({ id: "a", age: -5 });
  assert.equal(userBad.success, false);
}
