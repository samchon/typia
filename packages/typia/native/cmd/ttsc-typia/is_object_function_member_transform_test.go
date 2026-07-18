package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestIsObjectFunctionMemberTransform pins the runtime behaviour of typia.is /
// assert / validate for the global `Object` interface and for `Function`-typed
// members (#2178).
//
// The global TS `Object` interface carries `constructor: Function`. The global
// `Function` interface is declared as an `InterfaceDeclaration`, so before the
// fix typia failed to recognise it as a function type and expanded it
// structurally to `{ prototype, length, arguments, caller, name }`. That made
// the `constructor` member emit `"object" === typeof input.constructor`, which
// is never satisfied by a real constructor (`typeof === "function"`), so
// `is<Object>(x)` was false for every input. The same defect struck any explicit
// `Function`-typed member and any interface that `extends Object`.
//
// After the fix the lib `Function` interface is classified as a function and
// routes through the same lenient member path typia already uses for
// `() => void` members, so `is<Object>` collapses to a non-null-object gate.
// The lowercase `object` keyword and the `{}` type must stay byte-identical
// (they keep their `Array.isArray` guard), and the null / undefined / primitive
// boundaries must stay false.
//
//  1. Transform one fixture that exports is / assert / validate for `Object`, an
//     explicit `{ fn: Function }`, a `Moment extends Object` interface, plus the
//     lowercase `object` and `{}` regression guards.
//  2. Execute the emitted validators in Node against the boundary matrix.
//  3. Require the runner to report the exact executed case count so a runner that
//     silently skipped cases cannot pass as a false green.
func TestIsObjectFunctionMemberTransform(t *testing.T) {
  project := isObjectFunctionMemberProject(t)
  js := isObjectFunctionMemberTransform(t, project)
  isObjectFunctionMemberRunRuntimeCases(t, project, js)
}

func isObjectFunctionMemberProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "is-object-function-member-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(finiteOptionNumberLeafTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(isObjectFunctionMemberSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func isObjectFunctionMemberTransform(t *testing.T, project string) string {
  t.Helper()
  payload := `[{"config":{"transform":"typia/lib/transform"},"name":"typia","stage":"transform"}]`
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
      "--plugins-json", payload,
    })
  })
  if code != 0 {
    t.Fatalf("is<Object> transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

func isObjectFunctionMemberRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(isObjectFunctionMemberRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = project
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("is<Object> runtime cases failed: %v\n%s", err, output)
  }
  const expected = "RAN 27 CASES"
  if !strings.Contains(string(output), expected) {
    t.Fatalf("is<Object> runner did not report %q; got:\n%s", expected, output)
  }
}

const isObjectFunctionMemberSource = `import typia from "typia";

interface Moment extends Object {
  valueOf(): number;
}

export const isObject = typia.createIs<Object>();
export const assertObject = typia.createAssert<Object>();
export const validateObject = typia.createValidate<Object>();

export const isFuncMember = typia.createIs<{ fn: Function }>();
export const isMoment = typia.createIs<Moment>();

export const isLowerObject = typia.createIs<object>();
export const isEmptyObject = typia.createIs<{}>();

// random must produce a sample that its own is accepts (round trip). Object and
// a Function-only member need no numeric generator stub, so they stay hermetic.
export const randomObject = typia.createRandom<Object>();
export const randomFuncOnly = typia.createRandom<{ fn: Function }>();

export const captureThrow = (task: () => void): boolean => {
  try {
    task();
    return false;
  } catch {
    return true;
  }
};
`

const isObjectFunctionMemberRuntimeRunner = `const mod = require("./main.cjs");

let ran = 0;
const eq = (name, actual, expected) => {
  ran += 1;
  if (actual !== expected) {
    throw new Error(name + ": expected " + expected + " but got " + actual);
  }
};

// is<Object>: every non-null object is accepted, including arrays and class
// instances; null / undefined / primitives stay rejected (#2178 core cases).
eq("is<Object>({})", mod.isObject({}), true);
eq("is<Object>({a:1})", mod.isObject({ a: 1 }), true);
eq("is<Object>(new Object())", mod.isObject(new Object()), true);
eq("is<Object>(new Date())", mod.isObject(new Date()), true);
eq("is<Object>([])", mod.isObject([]), true);
eq("is<Object>(null)", mod.isObject(null), false);
eq("is<Object>(undefined)", mod.isObject(undefined), false);
eq("is<Object>(5)", mod.isObject(5), false);
eq("is<Object>('x')", mod.isObject("x"), false);

// validate and assert share the checker object path, so they must agree with is.
eq("validate<Object>({})", mod.validateObject({}).success, true);
eq("validate<Object>({a:1})", mod.validateObject({ a: 1 }).success, true);
eq("validate<Object>(null)", mod.validateObject(null).success, false);
eq("assert<Object>({}) no throw", mod.captureThrow(() => mod.assertObject({})), false);
eq("assert<Object>(null) throws", mod.captureThrow(() => mod.assertObject(null)), true);

// Explicit Function-typed member: the same lenient function path as () => void.
eq("is<{fn:Function}>({fn(){}})", mod.isFuncMember({ fn() {} }), true);
eq("is<{fn:Function}>({fn:()=>{}})", mod.isFuncMember({ fn: () => {} }), true);
eq("is<{fn:Function}>(null)", mod.isFuncMember(null), false);

// interface Moment extends Object: the inherited constructor member no longer
// breaks a real instance.
eq("is<Moment>(real)", mod.isMoment({ valueOf: () => 1 }), true);
eq("is<Moment>(null)", mod.isMoment(null), false);

// lowercase object keeps its Array.isArray guard (byte-identical, unchanged).
eq("is<object>({})", mod.isLowerObject({}), true);
eq("is<object>([])", mod.isLowerObject([]), false);
eq("is<object>(null)", mod.isLowerObject(null), false);

// {} empty object type keeps its Array.isArray guard (byte-identical, unchanged).
eq("is<{}>({})", mod.isEmptyObject({}), true);
eq("is<{}>([])", mod.isEmptyObject([]), false);
eq("is<{}>(null)", mod.isEmptyObject(null), false);

// random <-> is round trip: the generated Object / Function-member sample must
// pass its own is checker.
eq("is<Object>(random<Object>())", mod.isObject(mod.randomObject()), true);
eq("is<{fn:Function}>(random)", mod.isFuncMember(mod.randomFuncOnly()), true);

console.log("RAN " + ran + " CASES");
`
