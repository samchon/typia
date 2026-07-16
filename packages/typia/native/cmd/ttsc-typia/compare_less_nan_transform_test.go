package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestCompareLessNaNTransform verifies NaN-last total ordering.
//
// Relational comparison treats NaN as equal to every value because both `<`
// and `>` return false. The compare contract instead needs a total scalar order
// so its documented two-direction sort comparator never collapses distinct
// numeric or Date values.
//
//  1. Transform direct and factory comparators over scalars and containers.
//  2. Exercise NaN, infinities, signed zero, and invalid Date boundaries.
//  3. Verify antisymmetry and sort composition across nested sibling paths.
func TestCompareLessNaNTransform(t *testing.T) {
  project := compareEqualCoverProject(t, "compare-less-nan-", compareLessNaNSource)
  js := compareEqualCoverTransform(t, project)
  if !strings.Contains(js, "Number") && !strings.Contains(js, "!==") {
    t.Fatalf("NaN-aware output is missing a numeric discriminator:\n%s", js)
  }

  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  runtimeDir := filepath.Join(project, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(ttscTypiaTestRewriteCommonJS(t, js)), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(compareLessNaNRuntime), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  if output, err := cmd.CombinedOutput(); err != nil {
    t.Fatalf("NaN ordering runtime cases failed: %v\n%s", err, output)
  }
}

const compareLessNaNSource = `import typia from "typia";

export const lessNumber = typia.compare.createLess<number>();
export const lessNumberDirect = (x: number, y: number) => typia.compare.less<number>(x, y);
export const lessDate = typia.compare.createLess<Date>();
export const lessArray = typia.compare.createLess<number[]>();
export const lessTuple = typia.compare.createLess<[number, Date]>();
export const lessNested = typia.compare.createLess<{ value: number }>();
export const lessMixed = typia.compare.createLess<number | string>();
`

const compareLessNaNRuntime = `const mod = require("./main.cjs");

const expect = (label, actual, expected) => {
  if (actual !== expected) throw new Error(label + ": expected " + expected + ", got " + actual);
};
const assertPair = (label, less, ordinary, nan) => {
  expect(label + " ordinary < NaN", less(ordinary, nan), true);
  expect(label + " NaN !< ordinary", less(nan, ordinary), false);
  expect(label + " NaN !< NaN", less(nan, nan), false);
};

for (const less of [mod.lessNumber, mod.lessNumberDirect]) {
  assertPair("number", less, 1, Number.NaN);
  expect("-Infinity < finite", less(-Infinity, 0), true);
  expect("finite < Infinity", less(0, Infinity), true);
  expect("signed zero equivalent left", less(-0, 0), false);
  expect("signed zero equivalent right", less(0, -0), false);
}

assertPair("date", mod.lessDate, new Date(0), new Date(Number.NaN));
assertPair("array", mod.lessArray, [1], [Number.NaN]);
assertPair("tuple head", mod.lessTuple, [1, new Date(0)], [Number.NaN, new Date(0)]);
assertPair("tuple date", mod.lessTuple, [1, new Date(0)], [1, new Date(Number.NaN)]);
assertPair("nested", mod.lessNested, { value: 1 }, { value: Number.NaN });
assertPair("mixed numeric arm", mod.lessMixed, 1, Number.NaN);
expect("mixed type rank before numeric rule", mod.lessMixed(Number.NaN, "a"), true);

const values = [Number.NaN, Infinity, -1, -Infinity, 0, Number.NaN];
const comparator = (x, y) => mod.lessNumber(x, y) ? -1 : mod.lessNumber(y, x) ? 1 : 0;
const sorted = values.slice().sort(comparator);
expect("sort first", sorted[0], -Infinity);
expect("sort second", sorted[1], -1);
expect("sort third", sorted[2], 0);
expect("sort fourth", sorted[3], Infinity);
expect("sort NaN tail 1", Number.isNaN(sorted[4]), true);
expect("sort NaN tail 2", Number.isNaN(sorted[5]), true);
`
