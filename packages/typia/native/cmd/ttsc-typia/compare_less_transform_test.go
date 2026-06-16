package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "testing"
)

// TestCompareLessTransform verifies type-directed lexicographic ordering.
//
// Issue #1950 adds `typia.compare.less`, a three-way comparator surfaced as a
// boolean "x precedes y" predicate:
//
//  1. Transform direct and factory `less` calls for objects, arrays, tuples,
//     nested objects, strings, and nullable scalars.
//  2. Execute runtime cases asserting first-differing-field semantics, shorter
//     array/tuple ordering, and undefined < null < value ordering.
//  3. Confirm `less` composes into an Array.prototype.sort comparator.
func TestCompareLessTransform(t *testing.T) {
  project := compareLessProject(t)
  js := compareLessTransform(t, project)
  compareLessRunRuntimeCases(t, project, js)
}

func compareLessProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "compare-less-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() { _ = os.RemoveAll(dir) })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(compareLessTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(compareLessSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func compareLessTransform(t *testing.T, project string) string {
  t.Helper()
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("compare less transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

func compareLessRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(compareLessRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("compare less runtime cases failed: %v\n%s", err, output)
  }
}

const compareLessTSConfig = `{
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

const compareLessSource = `import typia from "typia";

interface IPoint {
  x: number;
  y: number;
  label: string;
}
export const lessPoint = typia.compare.createLess<IPoint>();
export const lessPointDirect = (a: IPoint, b: IPoint) => typia.compare.less<IPoint>(a, b);

interface INested {
  head: { rank: number; name: string };
  tags: string[];
}
export const lessNested = typia.compare.createLess<INested>();

export const lessNumbers = typia.compare.createLess<number[]>();
export const lessTuple = typia.compare.createLess<[number, string]>();
export const lessString = typia.compare.createLess<string>();
export const lessNullable = typia.compare.createLess<number | null | undefined>();
`

const compareLessRuntimeRunner = `const mod = require("./main.cjs");

const expect = (label, actual, expected) => {
  if (actual !== expected) {
    throw new Error(label + ": expected " + expected + ", got " + actual);
  }
};

// object: first differing field in declaration order decides
expect("point x decides", mod.lessPoint({ x: 1, y: 9, label: "z" }, { x: 2, y: 0, label: "a" }), true);
expect("point x decides direct", mod.lessPointDirect({ x: 1, y: 9, label: "z" }, { x: 2, y: 0, label: "a" }), true);
expect("point y decides", mod.lessPoint({ x: 2, y: 0, label: "z" }, { x: 2, y: 1, label: "a" }), true);
expect("point label decides", mod.lessPoint({ x: 2, y: 2, label: "a" }, { x: 2, y: 2, label: "b" }), true);
expect("point equal is not less", mod.lessPoint({ x: 2, y: 2, label: "a" }, { x: 2, y: 2, label: "a" }), false);
expect("point greater is not less", mod.lessPoint({ x: 3, y: 0, label: "a" }, { x: 2, y: 9, label: "z" }), false);

// nested object + array tie-break
expect("nested head decides", mod.lessNested({ head: { rank: 1, name: "b" }, tags: ["z"] }, { head: { rank: 2, name: "a" }, tags: ["a"] }), true);
expect("nested tags decide", mod.lessNested({ head: { rank: 1, name: "a" }, tags: ["a"] }, { head: { rank: 1, name: "a" }, tags: ["b"] }), true);

// arrays: lexicographic, shorter prefix precedes
expect("array element", mod.lessNumbers([1, 2, 3], [1, 9]), true);
expect("array shorter prefix", mod.lessNumbers([1, 2], [1, 2, 0]), true);
expect("array equal not less", mod.lessNumbers([1, 2], [1, 2]), false);

// tuple
expect("tuple second", mod.lessTuple([1, "a"], [1, "b"]), true);
expect("tuple first", mod.lessTuple([2, "a"], [1, "z"]), false);

// string
expect("string less", mod.lessString("apple", "banana"), true);
expect("string equal", mod.lessString("apple", "apple"), false);

// nullable: undefined < null < value
expect("undefined < null", mod.lessNullable(undefined, null), true);
expect("null < value", mod.lessNullable(null, 0), true);
expect("value not < null", mod.lessNullable(0, null), false);
expect("value compare", mod.lessNullable(1, 2), true);

// composes into a sort comparator
const cmp = (a, b) => (mod.lessPoint(a, b) ? -1 : mod.lessPoint(b, a) ? 1 : 0);
const sorted = [
  { x: 2, y: 0, label: "a" },
  { x: 1, y: 5, label: "b" },
  { x: 1, y: 2, label: "c" },
].sort(cmp);
expect("sort[0].y", sorted[0].y, 2);
expect("sort[1].y", sorted[1].y, 5);
expect("sort[2].x", sorted[2].x, 2);
`
