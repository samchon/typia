package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "testing"
)

// TestCompareUnionDiscriminationTransform pins compare.equals over a union of
// object types (issue #2214).
//
// CompareEqualProgrammer.schema assembled an object union as a flat OR of member
// comparators (`_eo0(x,y) || _eo1(x,y) || ...`) with no discrimination. A wrong
// member's comparator matched spuriously: its constant discriminant passed via
// the always-prepended `x.type === y.type` branch (both agree, even when neither
// is that member) and its absent payload keys compared `undefined === undefined`.
// So `equals({type:"a",x:1}, {type:"a",x:2})` was `true` for two distinct
// references. Every other object-union programmer (is/clone/classify/prune/json/
// notations/protobuf) discriminates so a member comparator only runs for the
// member both values actually are. `equals` must do the same: decide which member
// each operand is, return false if they differ, and compare within the one shared
// member — and must agree with `is` on membership.
//
// All fixtures compare DISTINCT references (fresh object literals) so the
// `x === y` identity fast path never hides the flaw.
//
//  1. Transform is + compare.createEquals over discriminated, non-discriminated
//     disjoint, narrower-masks-wider, 3-member, array/union-member, and nested
//     object unions, plus primitive/array-union and non-union controls.
//  2. Require distinct-but-different pairs to compare not-equal, distinct-but-
//     identical pairs to compare equal, and equals to imply is on both operands.
//  3. Require primitive/array unions and non-union objects to be unchanged.
func TestCompareUnionDiscriminationTransform(t *testing.T) {
  project := compareUnionDiscriminationProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("compare union discrimination transform failed: code=%d stderr=\n%s", code, errText)
  }
  compareUnionDiscriminationRunRuntimeCases(t, project, out)
}

func compareUnionDiscriminationProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "compare-union-disc-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() {
    _ = os.RemoveAll(dir)
  })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(compareUnionDiscriminationTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(compareUnionDiscriminationSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func compareUnionDiscriminationRunRuntimeCases(t *testing.T, project string, js string) {
  t.Helper()
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  runtimeDir := filepath.Join(project, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  runtimeJS := ttscTypiaTestRewriteCommonJS(t, js)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(compareUnionDiscriminationRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("compare union discrimination runtime cases failed: %v\n%s", err, output)
  }
}

const compareUnionDiscriminationTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`

const compareUnionDiscriminationSource = `import typia from "typia";

// 1. discriminated union
type Disc = { type: "a"; x: number } | { type: "b"; y: string };
export const isDisc = typia.createIs<Disc>();
export const eqDisc = typia.compare.createEquals<Disc>();

// 2. non-discriminated union with disjoint keys
type Disjoint = { x: number } | { y: string };
export const isDisjoint = typia.createIs<Disjoint>();
export const eqDisjoint = typia.compare.createEquals<Disjoint>();

// 3. narrower-masks-wider
type Mask = { a: number } | { a: number; b: string };
export const isMask = typia.createIs<Mask>();
export const eqMask = typia.compare.createEquals<Mask>();

// 4. three-member discriminated union
type Three =
  | { type: "a"; x: number }
  | { type: "b"; y: string }
  | { type: "c"; z: boolean };
export const isThree = typia.createIs<Three>();
export const eqThree = typia.compare.createEquals<Three>();

// 5. a member whose payload is itself an array / element union
type ArrMember =
  | { kind: "multi"; values: (number | string)[] }
  | { kind: "single"; value: number };
export const isArrMember = typia.createIs<ArrMember>();
export const eqArrMember = typia.compare.createEquals<ArrMember>();

// 6. nested object-union property
type Nested = { wrap: { type: "a"; x: number } | { type: "b"; y: string } };
export const isNested = typia.createIs<Nested>();
export const eqNested = typia.compare.createEquals<Nested>();

// 7. recursive discriminated union (exercises _vctx capture through the IIFE)
type Tree =
  | { type: "leaf"; value: number }
  | { type: "node"; left: Tree; right: Tree };
export const isTree = typia.createIs<Tree>();
export const eqTree = typia.compare.createEquals<Tree>();

// 8. native alongside a discriminated object union (notNatives guard + ladder)
type WithNative = Date | { kind: "a"; x: number } | { kind: "b"; y: string };
export const eqWithNative = typia.compare.createEquals<WithNative>();

// control: a native unioned with a SINGLE object keeps the flat guarded branch
type DateOrStamp = Date | { timestamp: number };
export const eqDateStamp = typia.compare.createEquals<DateOrStamp>();

// controls: primitive union, array union, non-union object
export const eqPrim = typia.compare.createEquals<string | number>();
export const eqArrUnion = typia.compare.createEquals<number[] | string[]>();
export const eqObj = typia.compare.createEquals<{ a: number; b: string }>();
`

const compareUnionDiscriminationRuntimeRunner = `const mod = require("./main.cjs");

let failures = 0;
const expect = (label, actual, expected) => {
  if (actual !== expected) {
    console.log("FAIL " + label + ": expected " + expected + ", got " + actual);
    failures++;
  }
};

// --- 1. discriminated union: {type:"a";x} | {type:"b";y} ---
expect("disc a distinct-different", mod.eqDisc({ type: "a", x: 1 }, { type: "a", x: 2 }), false);
expect("disc b distinct-different", mod.eqDisc({ type: "b", y: "p" }, { type: "b", y: "q" }), false);
expect("disc a distinct-identical", mod.eqDisc({ type: "a", x: 1 }, { type: "a", x: 1 }), true);
expect("disc b distinct-identical", mod.eqDisc({ type: "b", y: "p" }, { type: "b", y: "p" }), true);
expect("disc cross-arm a vs b", mod.eqDisc({ type: "a", x: 1 }, { type: "b", y: "p" }), false);

// --- 2. non-discriminated disjoint keys: {x} | {y} ---
expect("disjoint x distinct-different", mod.eqDisjoint({ x: 1 }, { x: 2 }), false);
expect("disjoint y distinct-different", mod.eqDisjoint({ y: "p" }, { y: "q" }), false);
expect("disjoint x distinct-identical", mod.eqDisjoint({ x: 1 }, { x: 1 }), true);
expect("disjoint cross-arm x vs y", mod.eqDisjoint({ x: 1 }, { y: "p" }), false);

// --- 3. narrower-masks-wider: {a} | {a,b} ---
expect("mask wider distinct-different", mod.eqMask({ a: 1, b: "x" }, { a: 1, b: "y" }), false);
expect("mask narrower distinct-identical", mod.eqMask({ a: 1 }, { a: 1 }), true);
expect("mask wider distinct-identical", mod.eqMask({ a: 1, b: "x" }, { a: 1, b: "x" }), true);
expect("mask narrower vs wider", mod.eqMask({ a: 1 }, { a: 1, b: "x" }), false);

// --- 4. three-member ---
expect("three a-different", mod.eqThree({ type: "a", x: 1 }, { type: "a", x: 2 }), false);
expect("three b-different", mod.eqThree({ type: "b", y: "p" }, { type: "b", y: "q" }), false);
expect("three c-different", mod.eqThree({ type: "c", z: true }, { type: "c", z: false }), false);
expect("three c-identical", mod.eqThree({ type: "c", z: true }, { type: "c", z: true }), true);
expect("three cross a vs c", mod.eqThree({ type: "a", x: 1 }, { type: "c", z: true }), false);

// --- 5. array/element-union member ---
expect("arrmember multi different length", mod.eqArrMember({ kind: "multi", values: [1, 2] }, { kind: "multi", values: [1] }), false);
expect("arrmember multi different elem", mod.eqArrMember({ kind: "multi", values: [1, "a"] }, { kind: "multi", values: [1, "b"] }), false);
expect("arrmember multi identical", mod.eqArrMember({ kind: "multi", values: [1, "a"] }, { kind: "multi", values: [1, "a"] }), true);
expect("arrmember single different", mod.eqArrMember({ kind: "single", value: 1 }, { kind: "single", value: 2 }), false);
expect("arrmember cross multi vs single", mod.eqArrMember({ kind: "multi", values: [1] }, { kind: "single", value: 1 }), false);

// --- 6. nested object-union property ---
expect("nested inner different", mod.eqNested({ wrap: { type: "a", x: 1 } }, { wrap: { type: "a", x: 2 } }), false);
expect("nested inner identical", mod.eqNested({ wrap: { type: "a", x: 1 } }, { wrap: { type: "a", x: 1 } }), true);
expect("nested cross arm", mod.eqNested({ wrap: { type: "a", x: 1 } }, { wrap: { type: "b", y: "p" } }), false);

// --- controls: primitive / array unions, non-union object ---
expect("prim number-different", mod.eqPrim(1, 2), false);
expect("prim string-identical", mod.eqPrim("x", "x"), true);
expect("prim cross string vs number", mod.eqPrim("1", 1), false);
expect("arrunion number-different", mod.eqArrUnion([1, 2], [1, 3]), false);
expect("arrunion number-identical", mod.eqArrUnion([1, 2], [1, 2]), true);
expect("arrunion string-identical", mod.eqArrUnion(["a"], ["a"]), true);
expect("obj different", mod.eqObj({ a: 1, b: "x" }, { a: 1, b: "y" }), false);
expect("obj identical", mod.eqObj({ a: 1, b: "x" }, { a: 1, b: "x" }), true);

// --- recursive discriminated union (distinct references throughout) ---
const mkTree = () => ({ type: "node", left: { type: "leaf", value: 1 }, right: { type: "leaf", value: 2 } });
expect("tree identical", mod.eqTree(mkTree(), mkTree()), true);
expect("tree leaf value differs", mod.eqTree({ type: "leaf", value: 1 }, { type: "leaf", value: 2 }), false);
expect("tree deep differs", mod.eqTree(mkTree(), { type: "node", left: { type: "leaf", value: 1 }, right: { type: "leaf", value: 9 } }), false);
expect("tree leaf vs node", mod.eqTree({ type: "leaf", value: 1 }, mkTree()), false);
expect("tree shape differs", mod.eqTree({ type: "node", left: { type: "leaf", value: 1 }, right: { type: "leaf", value: 2 } }, { type: "node", left: { type: "leaf", value: 1 }, right: { type: "node", left: { type: "leaf", value: 2 }, right: { type: "leaf", value: 3 } } }), false);

// --- native alongside a discriminated object union ---
expect("withnative same date", mod.eqWithNative(new Date(0), new Date(0)), true);
expect("withnative diff date", mod.eqWithNative(new Date(0), new Date(5000)), false);
expect("withnative obj a different", mod.eqWithNative({ kind: "a", x: 1 }, { kind: "a", x: 2 }), false);
expect("withnative obj a identical", mod.eqWithNative({ kind: "a", x: 1 }, { kind: "a", x: 1 }), true);
expect("withnative date vs obj", mod.eqWithNative(new Date(0), { kind: "a", x: 1 }), false);
expect("withnative cross arm", mod.eqWithNative({ kind: "a", x: 1 }, { kind: "b", y: "p" }), false);

// --- native unioned with a single object (control) ---
expect("datestamp same date", mod.eqDateStamp(new Date(0), new Date(0)), true);
expect("datestamp diff date", mod.eqDateStamp(new Date(0), new Date(5000)), false);
expect("datestamp stamp identical", mod.eqDateStamp({ timestamp: 5 }, { timestamp: 5 }), true);
expect("datestamp stamp different", mod.eqDateStamp({ timestamp: 5 }, { timestamp: 9 }), false);
expect("datestamp date vs stamp", mod.eqDateStamp(new Date(0), { timestamp: 0 }), false);

// --- equals must imply is on both operands (agree with is) ---
const discSamples = [
  { type: "a", x: 1 }, { type: "a", x: 2 }, { type: "b", y: "p" }, { type: "b", y: "q" },
];
for (const a of discSamples)
  for (const b of discSamples) {
    // fresh distinct references
    const x = JSON.parse(JSON.stringify(a));
    const y = JSON.parse(JSON.stringify(b));
    if (mod.eqDisc(x, y)) {
      expect("agree-is disc lhs " + JSON.stringify(a), mod.isDisc(x), true);
      expect("agree-is disc rhs " + JSON.stringify(b), mod.isDisc(y), true);
      // equal implies structurally same JSON
      expect("equal implies same json " + JSON.stringify(a) + "|" + JSON.stringify(b), JSON.stringify(x) === JSON.stringify(y), true);
    }
  }

const maskSamples = [{ a: 1 }, { a: 1, b: "x" }, { a: 1, b: "y" }, { a: 2 }];
for (const a of maskSamples)
  for (const b of maskSamples) {
    const x = JSON.parse(JSON.stringify(a));
    const y = JSON.parse(JSON.stringify(b));
    if (mod.eqMask(x, y)) {
      expect("agree-is mask same json " + JSON.stringify(a) + "|" + JSON.stringify(b), JSON.stringify(x) === JSON.stringify(y), true);
    }
  }

if (failures > 0) {
  throw new Error(failures + " assertion(s) failed");
}
console.log("all compare-union-discrimination cases passed");
`
