import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

/**
 * Emit test for typia tag intersections (`string & tags.Format<"email">`).
 * Drives the analyzer's brand-type extractor + emitter's format/validate
 * fast-paths end-to-end.
 */
export async function test_emit_tagged(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "tagged");
  const dist = path.join(fixture, "dist");
  fs.rmSync(dist, { recursive: true, force: true });

  const result = runTtsc(
    ["build", "--tsconfig=tsconfig.json", "--emit", "--quiet"],
    fixture,
  );
  assert.equal(result.status, 0, `stderr:\n${result.stderr}`);

  const mainPath = path.join(dist, "main.js");
  assert.ok(fs.existsSync(mainPath));
  delete require.cache[require.resolve(mainPath)];
  const mod = require(mainPath) as {
    is_email: (x: unknown) => boolean;
    is_uuid: (x: unknown) => boolean;
    is_ipv4: (x: unknown) => boolean;
    is_short_name: (x: unknown) => boolean;
    is_positive_int: (x: unknown) => boolean;
    is_even: (x: unknown) => boolean;
    is_pattern: (x: unknown) => boolean;
    is_date_time: (x: unknown) => boolean;
    is_url: (x: unknown) => boolean;
    is_duration: (x: unknown) => boolean;
    is_json_pointer: (x: unknown) => boolean;
  };

  // Format<"email">
  assert.equal(mod.is_email("user@example.com"), true);
  assert.equal(mod.is_email("no at sign"), false);
  assert.equal(mod.is_email(42), false);

  // Format<"uuid">
  assert.equal(mod.is_uuid("550e8400-e29b-41d4-a716-446655440000"), true);
  assert.equal(mod.is_uuid("not a uuid"), false);

  // Format<"ipv4">
  assert.equal(mod.is_ipv4("192.168.1.1"), true);
  assert.equal(mod.is_ipv4("256.0.0.0"), false);

  // MinLength<2> & MaxLength<10>
  assert.equal(mod.is_short_name("Bob"), true);
  assert.equal(mod.is_short_name("A"), false, "shorter than 2");
  assert.equal(mod.is_short_name("ThisNameIsTooLong"), false, "longer than 10");

  // Type<"int32"> & Minimum<1>
  assert.equal(mod.is_positive_int(5), true);
  assert.equal(mod.is_positive_int(0), false, "< 1");
  assert.equal(mod.is_positive_int(2.5), false, "not int");

  // MultipleOf<2>
  assert.equal(mod.is_even(4), true);
  assert.equal(mod.is_even(3), false);

  // Pattern<"^[A-Z][a-z]+$">
  assert.equal(mod.is_pattern("Word"), true);
  assert.equal(mod.is_pattern("lowercase"), false);

  // Format<"date-time"> — Cycle 3 format extension coverage.
  assert.equal(mod.is_date_time("2026-04-19T12:34:56Z"), true);
  assert.equal(mod.is_date_time("2026-04-19"), false, "date alone is not date-time");

  // Format<"url">.
  assert.equal(mod.is_url("https://example.com/path"), true);
  assert.equal(mod.is_url("not a url"), false);

  // Format<"duration">.
  assert.equal(mod.is_duration("P1Y2M3DT4H5M6S"), true);
  assert.equal(mod.is_duration("1 hour"), false);

  // Format<"json-pointer">.
  assert.equal(mod.is_json_pointer("/foo/bar"), true);
  assert.equal(mod.is_json_pointer(""), true, "empty pointer is valid");
  assert.equal(mod.is_json_pointer("no slash"), false);
}
