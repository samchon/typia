import * as assert from "assert";
import * as path from "path";

import { TestGlobal } from "../TestGlobal";
import { runTtsc } from "../utils/runTtsc";

export async function test_build_primitives(): Promise<void> {
  const fixture = path.join(TestGlobal.ROOT, "fixtures", "primitives");
  const result = runTtsc(["build", "--tsconfig=tsconfig.json"], fixture);

  assert.equal(
    result.status,
    0,
    `ttsc build should succeed; stderr=\n${result.stderr}`,
  );

  // The build command prints one line per recognised call site. We
  // check the *exact* emit for every primitive — any drift from typia v12's
  // `"string" === typeof input` shape is a regression.
  const checks: ReadonlyArray<{ label: string; fragment: string }> = [
    { label: "string", fragment: `(input) => "string" === typeof input` },
    { label: "number", fragment: `(input) => "number" === typeof input` },
    { label: "boolean", fragment: `(input) => "boolean" === typeof input` },
    { label: "bigint", fragment: `(input) => "bigint" === typeof input` },
    { label: "any", fragment: `(input) => true` },
  ];

  // Stage 1: count — must detect 5 typia.is<T> calls.
  const siteLines = result.stdout
    .split("\n")
    .filter((line) => line.includes("typia.is<T>"));
  assert.equal(
    siteLines.length,
    5,
    `expected 5 typia.is<T> emit lines, got ${siteLines.length}:\n${result.stdout}`,
  );

  // Stage 2: each primitive's emitted code matches the exact expected fragment.
  for (const { label, fragment } of checks) {
    assert.ok(
      result.stdout.includes(fragment),
      `${label}: expected fragment ${JSON.stringify(fragment)} in stdout:\n${result.stdout}`,
    );
  }
}
