import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

/**
 * End-to-end smoke for `typia.json.stringify`, `typia.json.assertParse` and
 * `typia.json.isParse`. Verifies (a) the emit composes tsgo's JSON output
 * inline (no `require("typia")`), (b) the runtime behavior matches typia v12:
 *
 * - Stringify: output is valid JSON and reversible via JSON.parse
 * - AssertParse: returns the parsed value on success, throws TypeGuardError
 *   otherwise
 * - IsParse: returns the parsed value on success, `null` otherwise
 */
export async function test_emit_json(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "json");
  const dist = path.join(fixture, "dist");
  fs.rmSync(dist, { recursive: true, force: true });

  const result = runTtsc(
    ["--tsconfig=tsconfig.json", "--emit", "--quiet"],
    fixture,
  );
  assert.equal(result.status, 0, `stderr:\n${result.stderr}`);

  const mainPath = path.join(dist, "main.js");
  delete require.cache[require.resolve(mainPath)];
  const mod = require(mainPath) as {
    stringify_number: (x: number) => string;
    stringify_string: (x: string) => string;
    stringify_literal: (x: "literal") => string;
    stringify_point: (x: { x: number; y: number }) => string;
    stringify_point_inferred: (x: { x: number; y: number }) => string;
    stringify_member: (x: {
      id: string;
      name: string;
      active: boolean;
    }) => string;
    stringify_array: (x: number[]) => string;
    stringify_date: (x: Date) => string;
    stringify_union: (x: string | number) => string;
    stringify_nullable_string: (x: string | null) => string;
    stringify_tuple: (x: [string, number, ...string[]]) => string;
    stringify_dynamic: (x: {
      fixed_value: string;
      extra_user: { first_name: string };
      ignored?: { first_name: string };
    }) => string;
    parse_point: (x: string) => { x: number; y: number };
    parse_point_custom: (x: string) => { x: number; y: number };
    create_parse_point_custom: (x: string) => { x: number; y: number };
    assert_stringify_point_custom: (x: unknown) => string;
    create_assert_stringify_point_custom: (x: unknown) => string;
    parse_member_maybe: (
      x: string,
    ) => { id: string; name: string; active: boolean } | null;
  };

  // Stringify primitives.
  assert.equal(mod.stringify_number(3.14), "3.14");
  assert.equal(mod.stringify_number(Infinity), "null", "Infinity → null JSON");
  assert.equal(mod.stringify_number(NaN), "null", "NaN → null JSON");
  assert.equal(mod.stringify_string("hello"), `"hello"`);
  assert.equal(mod.stringify_string('quoted "x"'), `"quoted \\"x\\""`);
  assert.equal(mod.stringify_literal("runtime" as "literal"), `"runtime"`);

  // Stringify objects — JSON round-trip must match.
  const point = { x: 1, y: 2 };
  assert.deepEqual(JSON.parse(mod.stringify_point(point)), point);
  assert.deepEqual(JSON.parse(mod.stringify_point_inferred(point)), point);
  const member = { id: "a", name: "Bob", active: true };
  assert.deepEqual(JSON.parse(mod.stringify_member(member)), member);

  // Stringify arrays.
  assert.equal(mod.stringify_array([1, 2, 3]), "[1,2,3]");
  assert.equal(
    mod.stringify_date(new Date("2026-04-27T00:00:00.000Z")),
    `"2026-04-27T00:00:00.000Z"`,
  );
  assert.equal(mod.stringify_union("x"), `"x"`);
  assert.equal(mod.stringify_union(1.5), `1.5`);
  assert.equal(mod.stringify_nullable_string("x"), `"x"`);
  assert.equal(mod.stringify_nullable_string(null), `null`);
  assert.equal(mod.stringify_tuple(["a", 1, "b", "c"]), `["a",1,"b","c"]`);
  assert.equal(mod.stringify_tuple(["a", 1]), `["a",1]`);
  assert.deepEqual(
    JSON.parse(
      mod.stringify_dynamic({
        fixed_value: "fixed",
        extra_user: { first_name: "Jane" },
        ignored: { first_name: "Drop" },
      }),
    ),
    {
      fixed_value: "fixed",
      extra_user: { first_name: "Jane" },
    },
  );

  const emitted = fs.readFileSync(mainPath, "utf8");
  assert.ok(emitted.includes("_jsonStringifyRest"));
  assert.ok(emitted.includes('"string" === typeof input'));
  assert.ok(emitted.includes('"number" === typeof input'));
  assert.ok(emitted.includes('null !== input) ? (__typia_transform_jsonStringifyString._jsonStringifyString(input)) : "null"'));
  assert.ok(emitted.includes("Object.entries(input).map"));
  const dynamicStart = emitted.indexOf("const stringify_dynamic");
  const dynamicEnd = emitted.indexOf("exports.stringify_dynamic", dynamicStart);
  const dynamicSnippet = emitted.slice(dynamicStart, dynamicEnd);
  assert.equal(dynamicSnippet.includes("return JSON.stringify(input)"), false);

  // assertParse success + failure.
  assert.deepEqual(mod.parse_point(`{"x":1,"y":2}`), { x: 1, y: 2 });
  assert.throws(() => mod.parse_point(`{"x":"bad"}`));
  assert.throws(
    () => mod.parse_point_custom(`{"x":"bad"}`),
    (err: Error) =>
      err.name === "JsonCustomError" &&
      err.message.includes("custom-json:typia.json.assertParse:"),
  );
  assert.throws(
    () => mod.create_parse_point_custom(`{"x":"bad"}`),
    (err: Error) =>
      err.name === "JsonCustomError" &&
      err.message.includes("custom-json:typia.json.createAssertParse:"),
  );
  assert.throws(
    () => mod.assert_stringify_point_custom({ x: "bad" }),
    (err: Error) =>
      err.name === "JsonCustomError" &&
      err.message.includes("custom-json:typia.json.assertStringify:"),
  );
  assert.throws(
    () => mod.create_assert_stringify_point_custom({ x: "bad" }),
    (err: Error) =>
      err.name === "JsonCustomError" &&
      err.message.includes("custom-json:typia.json.createAssertStringify:"),
  );

  // isParse success / failure.
  const good = mod.parse_member_maybe(`{"id":"a","name":"b","active":false}`);
  assert.deepEqual(good, { id: "a", name: "b", active: false });
  const bad = mod.parse_member_maybe(`{"wrong":true}`);
  assert.equal(bad, null);
}
