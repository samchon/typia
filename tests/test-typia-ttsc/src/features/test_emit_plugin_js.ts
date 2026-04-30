import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

export async function test_emit_plugin_js(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "plugin-js");
  const outDir = path.join(fixture, "dist");
  fs.rmSync(outDir, { recursive: true, force: true });

  const result = runTtsc(["--emit", "--tsconfig=tsconfig.json"], fixture);
  assert.equal(result.status, 0, `ttsc should succeed; stderr:\n${result.stderr}`);

  const output = path.join(outDir, "src", "main.js");
  assert.equal(fs.existsSync(output), true, `expected emitted file at ${output}`);
  const text = fs.readFileSync(output, "utf8");
  assert.equal(
    text.startsWith("/* plugin-js */\n"),
    true,
    `expected plugin banner in emitted output:\n${text.slice(0, 200)}`,
  );

  delete require.cache[require.resolve(output)];
  const mod = require(output) as { answer: number };
  assert.equal(mod.answer, 42);

  fs.rmSync(outDir, { recursive: true, force: true });
}
