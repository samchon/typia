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
    stringify_point: (x: { x: number; y: number }) => string;
    stringify_member: (x: {
      id: string;
      name: string;
      active: boolean;
    }) => string;
    stringify_array: (x: number[]) => string;
    parse_point: (x: string) => { x: number; y: number };
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

  // Stringify objects — JSON round-trip must match.
  const point = { x: 1, y: 2 };
  assert.deepEqual(JSON.parse(mod.stringify_point(point)), point);
  const member = { id: "a", name: "Bob", active: true };
  assert.deepEqual(JSON.parse(mod.stringify_member(member)), member);

  // Stringify arrays.
  assert.equal(mod.stringify_array([1, 2, 3]), "[1,2,3]");

  // assertParse success + failure.
  assert.deepEqual(mod.parse_point(`{"x":1,"y":2}`), { x: 1, y: 2 });
  assert.throws(() => mod.parse_point(`{"x":"bad"}`));

  // isParse success / failure.
  const good = mod.parse_member_maybe(`{"id":"a","name":"b","active":false}`);
  assert.deepEqual(good, { id: "a", name: "b", active: false });
  const bad = mod.parse_member_maybe(`{"wrong":true}`);
  assert.equal(bad, null);
}
