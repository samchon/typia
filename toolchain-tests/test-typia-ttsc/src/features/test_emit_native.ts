import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

/**
 * Native-class detection: Date / Uint8Array / Map / Set should emit a
 * matching `instanceof` check rather than falling through to a generic object
 * walk.
 */
export async function test_emit_native(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "native");
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
    isDate: (x: unknown) => boolean;
    isUint8: (x: unknown) => boolean;
    isMap: (x: unknown) => boolean;
    isSet: (x: unknown) => boolean;
  };

  assert.equal(mod.isDate(new Date()), true);
  assert.equal(mod.isDate("2020-01-01"), false);
  assert.equal(mod.isUint8(new Uint8Array([1, 2])), true);
  assert.equal(mod.isUint8([1, 2]), false);
  assert.equal(mod.isMap(new Map()), true);
  assert.equal(mod.isMap({}), false);
  assert.equal(mod.isSet(new Set()), true);
  assert.equal(mod.isSet([]), false);
}
