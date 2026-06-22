package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "testing"
)

// TestIntersectionAllNeverUnionTransform pins the union-pruning soundness fix of
// issue #1967.
//
// TypeScript distributes `(a | b) & X` into `(a & X) | (b & X)`. When X is a
// real-data object and the bases are non-objects, every distributed member is an
// uninhabited intersection that `is_never` prunes away. The union then contributes
// no type bucket; left as an empty schema it would validate as accept-everything —
// the most dangerous possible outcome (a validator that passes any input).
//
// The fix marks such an all-pruned union not-required so it renders as `never`,
// rejecting every concrete value, exactly like a standalone `never` or the
// TypeScript-collapsed `string & number`. Crucially, a union where SOME member
// survives (narrowing a union down to its object member) is untouched: the
// surviving member contributes a bucket, so the pruning guard does not fire.
//
//  1. All-pruned unions reject every concrete value (never, not accept-everything).
//  2. A union narrowed to its surviving object member still validates that object.
func TestIntersectionAllNeverUnionTransform(t *testing.T) {
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "all-never-union-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() { _ = os.RemoveAll(dir) })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(atomicIntersectionSchemaTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(intersectionAllNeverUnionSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }

  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", dir,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("all-never union transform failed: code=%d stderr=\n%s", code, errText)
  }

  runtimeDir := filepath.Join(dir, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  runtimeJS := ttscTypiaTestRewriteCommonJS(t, out)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(intersectionAllNeverUnionRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("all-never union runtime cases failed: %v\n%s", err, output)
  }
}

const intersectionAllNeverUnionSource = `import typia from "typia";

enum MyEnum { A = "a", B = "b" }

// Every distributed member is a non-object base & a real-data object — all pruned
// to never. The union must validate as never, never as accept-everything.
export const isEnumData = typia.createIs<MyEnum & { data: number }>();
export const isUnionData = typia.createIs<(string | number) & { data: number }>();
export const isUnionNested = typia.createIs<(string | number) & { nested: { a: string } }>();
export const isUnionMulti = typia.createIs<(string | number) & { a: string; b: number }>();

// A union narrowed to its surviving object member keeps validating that object —
// the never-pruning guard must not fire when a member contributes a bucket.
export const isNarrowPrimitive = typia.createIs<(string | { a: number }) & { a: number }>();
export const isNarrowNumber = typia.createIs<(number | { a: number }) & { a: number }>();

// A nullary member (null / undefined) sets a flag without a bucket, so the union
// still reaches the all-pruned guard with empty size. The guard must NOT swallow
// it: 'null | never' is 'null' (accepts only null, rejects undefined); 'undefined
// | never' is 'undefined'; their combination accepts both — never accept-everything.
export const isNullNever = typia.createIs<null | (string & { data: number })>();
export const isUndefinedNever = typia.createIs<undefined | (string & { data: number })>();
export const isNullUndefinedNever = typia.createIs<null | undefined | (string & { data: number })>();
`

const intersectionAllNeverUnionRunner = `const mod = require("./main.cjs");

const check = (label, actual, expected) => {
  if (actual !== expected) {
    throw new Error(label + ": expected " + JSON.stringify(expected) + ", got " + JSON.stringify(actual));
  }
};

// All-pruned unions reject every concrete value (never-render, not accept-everything).
const neverValidators = { isEnumData: mod.isEnumData, isUnionData: mod.isUnionData, isUnionNested: mod.isUnionNested, isUnionMulti: mod.isUnionMulti };
const samples = ["a", "b", 1, 0, true, false, null, {}, [], { data: 1 }, { a: "s", b: 1 }, "x"];
for (const [name, fn] of Object.entries(neverValidators)) {
  for (const value of samples) {
    check(name + "(" + JSON.stringify(value) + ")", fn(value), false);
  }
}

// Narrowing a union to its object member still validates that object.
check("isNarrowPrimitive {a:1}", mod.isNarrowPrimitive({ a: 1 }), true);
check("isNarrowPrimitive 'x'", mod.isNarrowPrimitive("x"), false);
check("isNarrowPrimitive {a:'s'}", mod.isNarrowPrimitive({ a: "s" }), false);
check("isNarrowPrimitive {}", mod.isNarrowPrimitive({}), false);
check("isNarrowNumber {a:1}", mod.isNarrowNumber({ a: 1 }), true);
check("isNarrowNumber 5", mod.isNarrowNumber(5), false);
check("isNarrowNumber {a:'s'}", mod.isNarrowNumber({ a: "s" }), false);

// A nullary member must survive the all-pruned guard: null accepts only null,
// undefined only undefined — and neither accepts a concrete value or each other.
check("isNullNever null", mod.isNullNever(null), true);
check("isNullNever undefined", mod.isNullNever(undefined), false);
check("isNullNever 'x'", mod.isNullNever("x"), false);
check("isNullNever {data:1}", mod.isNullNever({ data: 1 }), false);
check("isUndefinedNever undefined", mod.isUndefinedNever(undefined), true);
check("isUndefinedNever null", mod.isUndefinedNever(null), false);
check("isUndefinedNever 'x'", mod.isUndefinedNever("x"), false);
check("isNullUndefinedNever null", mod.isNullUndefinedNever(null), true);
check("isNullUndefinedNever undefined", mod.isNullUndefinedNever(undefined), true);
check("isNullUndefinedNever 'x'", mod.isNullUndefinedNever("x"), false);
check("isNullUndefinedNever {data:1}", mod.isNullUndefinedNever({ data: 1 }), false);

console.log("ok");
`
