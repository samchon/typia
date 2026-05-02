import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

/**
 * Emit test for objects, arrays, tuples, literal-unions, atomic unions and
 * nullable types. Exercises the whole MetadataSchema → emitter pipeline against
 * the `fixtures/objects/src/main.ts` source.
 */
export async function test_emit_objects(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "objects");
  const dist = path.join(fixture, "dist");
  fs.rmSync(dist, { recursive: true, force: true });

  const result = runTtsc(
    ["--tsconfig=tsconfig.json", "--emit", "--quiet"],
    fixture,
  );
  assert.equal(result.status, 0, `stderr:\n${result.stderr}`);

  const mainPath = path.join(dist, "main.js");
  assert.ok(fs.existsSync(mainPath), "dist/main.js must exist");
  delete require.cache[require.resolve(mainPath)];
  const mod = require(mainPath) as {
    check_point: (x: unknown) => boolean;
    check_member: (x: unknown) => boolean;
    check_nested: (x: unknown) => boolean;
    check_string_array: (x: unknown) => boolean;
    check_point_array: (x: unknown) => boolean;
    check_status: (x: unknown) => boolean;
    check_string_or_number: (x: unknown) => boolean;
    check_nullable_string: (x: unknown) => boolean;
    check_tuple: (x: unknown) => boolean;
    check_tree: (x: unknown) => boolean;
  };

  // Objects.
  assert.equal(mod.check_point({ x: 1, y: 2 }), true, "point ok");
  assert.equal(mod.check_point({ x: 1 }), false, "missing y");
  assert.equal(mod.check_point({ x: 1, y: "2" }), false, "wrong y type");
  assert.equal(mod.check_point(null), false, "null point");
  assert.equal(mod.check_point([1, 2]), false, "array is not a point");

  assert.equal(
    mod.check_member({ id: "a", email: "b@c", age: 5, active: true }),
    true,
    "member ok",
  );
  assert.equal(mod.check_member({ id: "a" }), false, "member incomplete");

  assert.equal(
    mod.check_nested({
      point: { x: 0, y: 0 },
      owner: { id: "a", email: "x", age: 1, active: false },
    }),
    true,
    "nested ok",
  );
  assert.equal(
    mod.check_nested({ point: { x: 0, y: 0 }, owner: { id: "a" } }),
    false,
    "nested bad owner",
  );

  // Arrays.
  assert.equal(mod.check_string_array(["a", "b"]), true);
  assert.equal(mod.check_string_array(["a", 42]), false);
  assert.equal(mod.check_string_array("not array"), false);
  assert.equal(mod.check_point_array([{ x: 1, y: 2 }]), true);
  assert.equal(mod.check_point_array([{ x: 1 }]), false);

  // Literal unions.
  assert.equal(mod.check_status("pending"), true);
  assert.equal(mod.check_status("active"), true);
  assert.equal(mod.check_status("archived"), true);
  assert.equal(mod.check_status("something-else"), false);

  // Atomic unions.
  assert.equal(mod.check_string_or_number("hi"), true);
  assert.equal(mod.check_string_or_number(42), true);
  assert.equal(mod.check_string_or_number(true), false);

  // Nullable.
  assert.equal(mod.check_nullable_string(null), true);
  assert.equal(mod.check_nullable_string("hi"), true);
  assert.equal(mod.check_nullable_string(42), false);

  // Tuples.
  assert.equal(mod.check_tuple(["a", 1, true]), true);
  assert.equal(mod.check_tuple(["a", 1]), false, "wrong length");
  assert.equal(mod.check_tuple(["a", "b", true]), false, "wrong type");
  assert.equal(mod.check_tuple("not array"), false);

  // Recursive self-reference.
  assert.equal(mod.check_tree({ value: 1, children: [] }), true, "leaf ok");
  assert.equal(
    mod.check_tree({
      value: 1,
      children: [
        { value: 2, children: [] },
        { value: 3, children: [{ value: 4, children: [] }] },
      ],
    }),
    true,
    "deep tree ok",
  );
  assert.equal(
    mod.check_tree({ value: "bad", children: [] }),
    false,
    "non-number value rejected",
  );
  assert.equal(
    mod.check_tree({ value: 1, children: [{ value: "bad", children: [] }] }),
    false,
    "bad child rejected",
  );
}
