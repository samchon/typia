import * as assert from "assert";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsx } from "../utils/runTtsx";

export async function test_ttsx_cli_esm(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "runner-esm");
  const entry = path.join(fixture, "src", "main.ts");

  const result = runTtsx(
    ["--project", "tsconfig.json", entry, "--", "alpha", "beta"],
    fixture,
  );
  assert.equal(result.status, 0, `ttsx ESM should exit 0; stderr:\n${result.stderr}`);

  const parsed = JSON.parse(result.stdout.trim()) as {
    argv: string[];
    mode: string;
    ok: boolean;
  };

  assert.deepEqual(parsed.argv, ["alpha", "beta"]);
  assert.equal(parsed.mode, "esm");
  assert.equal(parsed.ok, true);
}
