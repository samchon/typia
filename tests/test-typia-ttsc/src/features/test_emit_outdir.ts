import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

export async function test_emit_outdir(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "outdir");
  const outDir = path.join(fixture, "build");
  fs.rmSync(outDir, { recursive: true, force: true });

  const result = runTtsc(
    ["--tsconfig=tsconfig.json", "--emit", "--quiet"],
    fixture,
  );
  assert.equal(result.status, 0, `stderr:\n${result.stderr}`);

  const emitted = path.join(fixture, "build", "output", "main.js");
  assert.ok(fs.existsSync(emitted), `expected emitted file at ${emitted}`);
  assert.ok(
    !fs.existsSync(path.join(fixture, "src", "main.js")),
    "ttsc must honor outDir and avoid writing beside source files",
  );
  assert.ok(
    !fs.existsSync(path.join(fixture, "dist", "main.js")),
    "ttsc must not silently fall back to dist when tsconfig sets another outDir",
  );

  delete require.cache[require.resolve(emitted)];
  const mod = require(emitted) as { check: (input: unknown) => boolean };
  assert.equal(mod.check("ok"), true);
  assert.equal(mod.check(1), false);
}
