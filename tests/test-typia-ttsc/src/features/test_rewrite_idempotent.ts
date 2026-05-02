import * as assert from "assert";
import * as fs from "fs";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

/**
 * Re-emitting an already-rewritten project must be a no-op. tsgonest's
 * "@tsgonest-rewritten" sentinel pattern — we mirror it with "@ttsc-rewritten"
 * so watch-mode / editor loops don't double-rewrite and corrupt earlier
 * output.
 */
export async function test_rewrite_idempotent(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "primitives");
  const dist = path.join(fixture, "dist");
  fs.rmSync(dist, { recursive: true, force: true });

  const first = runTtsc(
    ["--tsconfig=tsconfig.json", "--emit", "--quiet"],
    fixture,
  );
  assert.equal(first.status, 0, `first run failed:\n${first.stderr}`);

  const mainPath = path.join(dist, "main.js");
  const firstText = fs.readFileSync(mainPath, "utf8");
  assert.ok(
    firstText.includes("/* @ttsc-rewritten */"),
    `expected sentinel in first-run output:\n${firstText.slice(0, 200)}`,
  );

  // Second emit into the same tree: the sentinel must short-circuit the
  // rewrite pass and leave the file textually identical.
  const second = runTtsc(
    ["--tsconfig=tsconfig.json", "--emit", "--quiet"],
    fixture,
  );
  assert.equal(second.status, 0, `second run failed:\n${second.stderr}`);

  // tsgo itself re-emits (it regenerates the .js from .ts) so we expect the
  // SAME content as after first rewrite — the post-emit rewrite has to be
  // idempotent over identical input.
  const secondText = fs.readFileSync(mainPath, "utf8");
  assert.equal(
    secondText,
    firstText,
    "second emit must match first emit byte-for-byte",
  );
}
