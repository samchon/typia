import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

/**
 * Covers the factory variants `typia.createIs<T>()` (and friends). Emitting
 * them needs the rewriter to consume the trailing `()` so the factory returns a
 * function rather than invoking it.
 */
export async function test_emit_factory(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "factory");
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
    isStr: (x: unknown) => boolean;
    checkNum: (x: unknown) => boolean;
  };

  assert.equal(typeof mod.isStr, "function");
  assert.equal(typeof mod.checkNum, "function");
  assert.equal(mod.isStr("hi"), true);
  assert.equal(mod.isStr(42), false);
  assert.equal(mod.checkNum(1), true);
  assert.equal(mod.checkNum("x"), false);
}
