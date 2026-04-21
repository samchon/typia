import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

/**
 * Compiles a fixture with a wide (50-field) interface, a 5-level-deep nest,
 * and a 20-alternative union array. Proves the emitter scales without
 * hitting stack, regex, or tsgo-memory limits on shapes wider and deeper
 * than the happy-path fixtures.
 */
export async function test_emit_stress(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "stress");
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
    isWide: (x: unknown) => boolean;
    isL1: (x: unknown) => boolean;
    isVariantArr: (x: unknown) => boolean;
  };

  // Build a wide object with every field populated correctly.
  const wide: Record<string, string | number | boolean> = {};
  for (const prefix of ["a", "d", "g", "j"]) {
    for (let i = 1; i <= 5; i++) wide[`${prefix}${i}`] = "x";
  }
  for (const prefix of ["b", "e", "h"]) {
    for (let i = 1; i <= 5; i++) wide[`${prefix}${i}`] = i;
  }
  for (const prefix of ["c", "f", "i"]) {
    for (let i = 1; i <= 5; i++) wide[`${prefix}${i}`] = true;
  }
  assert.equal(mod.isWide(wide), true, "full wide object valid");

  // Drop one field — should fail.
  const damaged = { ...wide };
  delete damaged.a3;
  assert.equal(mod.isWide(damaged), false, "missing field rejected");

  // Deep nest — correct + wrong innermost type.
  assert.equal(
    mod.isL1({ l2: { l3: { l4: { l5: { v: 7 } } } } }),
    true,
  );
  assert.equal(
    mod.isL1({ l2: { l3: { l4: { l5: { v: "not a number" } } } } }),
    false,
  );

  // Array of variants — every listed kind is legal; unseen kind fails.
  const variants = Array.from({ length: 20 }, (_, i) => ({
    k: "abcdefghijklmnopqrst"[i]!,
  }));
  assert.equal(mod.isVariantArr(variants), true, "all 20 variants valid");
  assert.equal(mod.isVariantArr([...variants, { k: "z" }]), false, "unseen kind rejected");
  assert.equal(mod.isVariantArr("not an array"), false);
}
