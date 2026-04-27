import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

export async function test_emit_noemit_override(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "noemit");
  const outDir = path.join(fixture, "dist");
  fs.rmSync(outDir, { recursive: true, force: true });

  const result = runTtsc(
    ["--tsconfig=tsconfig.json", "--emit", "--quiet"],
    fixture,
  );
  assert.equal(result.status, 0, `stderr:\n${result.stderr}`);

  const emitted = path.join(outDir, "main.js");
  assert.ok(fs.existsSync(emitted), "build --emit must override tsconfig noEmit");

  delete require.cache[require.resolve(emitted)];
  const mod = require(emitted) as { check: (input: unknown) => boolean };
  assert.equal(mod.check("ok"), true);
  assert.equal(mod.check(1), false);
}
