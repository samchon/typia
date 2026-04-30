import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

/**
 * Covers TS-only advanced constructs that the current native path must accept without
 * crashing: discriminated unions, `Partial<T>`, `Pick<T, K>`, readonly
 * arrays, and three-level-deep optional chains. These are the everyday shapes
 * users throw at typia (NestJS DTOs, react-hook-form state, etc.) — if any
 * regress, real projects break silently.
 */
export async function test_emit_advanced(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "advanced");
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
    isShape: (x: unknown) => boolean;
    isPartial: (x: unknown) => boolean;
    isPicked: (x: unknown) => boolean;
    isLevels: (x: unknown) => boolean;
    isDeep: (x: unknown) => boolean;
  };

  // Discriminated union: every valid branch passes; bad discriminant fails.
  assert.equal(mod.isShape({ kind: "circle", radius: 10 }), true);
  assert.equal(mod.isShape({ kind: "square", side: 5 }), true);
  assert.equal(mod.isShape({ kind: "triangle", base: 3, height: 4 }), true);
  assert.equal(mod.isShape({ kind: "hexagon", side: 1 }), false, "unknown kind rejected");
  assert.equal(mod.isShape({ kind: "circle" }), false, "missing radius rejected");

  // Partial<T> — every property optional.
  assert.equal(mod.isPartial({}), true, "empty object allowed for Partial");
  assert.equal(mod.isPartial({ id: "a" }), true);
  assert.equal(mod.isPartial({ id: "a", name: "b", score: 1 }), true);
  assert.equal(mod.isPartial({ id: 42 }), false, "wrong type still rejected");

  // Pick<T, K> — only the selected keys required.
  assert.equal(mod.isPicked({ id: "a", name: "b" }), true);
  assert.equal(mod.isPicked({ id: "a" }), false, "missing picked key rejected");

  // readonly array of literal union.
  assert.equal(mod.isLevels(["low", "high"]), true);
  assert.equal(mod.isLevels(["low", "unknown"]), false);
  assert.equal(mod.isLevels("not an array"), false);

  // Deep optional chain.
  assert.equal(mod.isDeep({}), true, "all levels optional");
  assert.equal(mod.isDeep({ a: {} }), true);
  assert.equal(mod.isDeep({ a: { b: { c: "hi" } } }), true);
  assert.equal(
    mod.isDeep({ a: { b: { c: 42 } } }),
    false,
    "non-string c rejected",
  );
}
