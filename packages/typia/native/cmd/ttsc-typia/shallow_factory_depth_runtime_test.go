package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "runtime"
  "strings"
  "testing"
)

// TestShallowFactoryDepthRuntime verifies typia.createShallow<T, N>() emits a
// reusable guard that honors the depth budget at runtime.
//
// createShallow shares the depth machinery with the inline shallow form, but it
// is a separate public entry point (GenericTransformer.Factory rather than
// Scalar) and its emitted Write path is otherwise unexercised. The factory must
// produce a standalone `(input) => input is T` whose budget bounds descent and
// recursion exactly like the inline form, so the two surfaces cannot drift.
//
//  1. Transform createShallow<Outer, 1>() and createShallow<Tree, 2>() to JS.
//  2. Run the Outer guard on a value whose deep leaf is wrong: depth 1 accepts
//     it (not descended) while rejecting a near-surface mismatch.
//  3. Run the recursive Tree guard on valid and shallow-invalid trees and assert
//     it terminates with the expected verdicts.
func TestShallowFactoryDepthRuntime(t *testing.T) {
  project := shallowFactoryProject(t)
  js := shallowFactoryTransform(t, project)
  shallowFactoryRun(t, project, js)
}

func shallowFactoryProject(t *testing.T) string {
  t.Helper()
  root := shallowFactoryRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "shallow-factory-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(shallowNestedTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(shallowFactorySource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func shallowFactoryRepoRoot(t *testing.T) string {
  t.Helper()
  _, file, _, ok := runtime.Caller(0)
  if !ok {
    t.Fatal("runtime.Caller failed")
  }
  dir := filepath.Dir(file)
  for {
    if _, err := os.Stat(filepath.Join(dir, "pnpm-workspace.yaml")); err == nil {
      return dir
    }
    next := filepath.Dir(dir)
    if next == dir {
      t.Fatalf("repo root not found from %s", file)
    }
    dir = next
  }
}

func shallowFactoryTransform(t *testing.T, project string) string {
  t.Helper()
  out, errText, code := shallowDepthCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("shallow factory transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

func shallowFactoryRun(t *testing.T, project string, js string) {
  t.Helper()
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  runtimeDir := filepath.Join(project, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  if err := os.WriteFile(filepath.Join(runtimeDir, "typia-stub.cjs"), []byte("module.exports = {};\n"), 0o644); err != nil {
    t.Fatalf("write typia stub: %v", err)
  }
  runtimeJS := strings.ReplaceAll(js, `require("typia")`, `require("./typia-stub.cjs")`)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  if err := os.WriteFile(filepath.Join(runtimeDir, "run.cjs"), []byte(shallowFactoryRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, filepath.Join(runtimeDir, "run.cjs"))
  cmd.Dir = project
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("shallow factory runtime cases failed: %v\n%s", err, output)
  }
}

const shallowFactorySource = `import typia from "typia";

interface Outer {
  kind: "outer";
  inner: {
    value: string;
  };
}

interface Tree {
  value: string;
  children: Tree[];
}

export const outerDepth1 = typia.createShallow<Outer, 1>();

export const treeDepth2 = typia.createShallow<Tree, 2>();
`

const shallowFactoryRunner = `const { outerDepth1, treeDepth2 } = require("./main.cjs");

const outerCases = [
  ["matching outer", { kind: "outer", inner: { value: "x" } }, true],
  ["wrong deep leaf accepted at depth 1", { kind: "outer", inner: { value: 123 } }, true],
  ["wrong discriminant rejected", { kind: "nope", inner: { value: "x" } }, false],
  ["missing inner rejected", { kind: "outer" }, false],
  ["non object rejected", 7, false],
];
for (const [name, input, expected] of outerCases) {
  const actual = outerDepth1(input);
  if (actual !== expected) {
    throw new Error("outer/" + name + ": expected " + expected + " but got " + actual);
  }
}

const deepTree = { value: "root", children: [{ value: "a", children: [{ value: "b", children: [] }] }] };
const shallowWrong = { value: 1, children: [] };
const treeCases = [
  ["valid shallow tree", { value: "x", children: [] }, true],
  ["valid deep tree terminates", deepTree, true],
  ["wrong root value rejected", shallowWrong, false],
  ["non object rejected", "tree", false],
];
for (const [name, input, expected] of treeCases) {
  const actual = treeDepth2(input);
  if (actual !== expected) {
    throw new Error("tree/" + name + ": expected " + expected + " but got " + actual);
  }
}
`
