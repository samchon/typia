package main

import (
  "bytes"
  "os"
  "os/exec"
  "path/filepath"
  "runtime"
  "strings"
  "testing"
)

// TestShallowDepthLimitTransform verifies typia.shallow() bounds how deep the
// emitted checker descends through the depth budget N.
//
// The shallow check powers discrimination rather than full validation: once
// the budget is exhausted a value is accepted as long as it is a non-null
// object, instead of paying for a full structural walk of every leaf. At depth
// 0 a composite
// type must collapse to a bare `typeof input === "object"` guard with a null
// check; at the default depth (2) the near-surface discriminant is still
// checked so the right union branch can be told apart.
//
//  1. Transform one fixture that calls shallow<T, 0> and another that calls
//     shallow<Discriminated> at the default depth.
//  2. Assert the depth-0 emit is only the structural object guard and never
//     reaches the inner property, while the default-depth emit still checks the
//     discriminant property.
//  3. Execute both emitted guards against matching, shallow-wrong, and
//     non-object runtime cases.
func TestShallowDepthLimitTransform(t *testing.T) {
  project := shallowDepthProject(t)

  zero := shallowDepthTransform(t, project, "src/zero.ts", "ts")
  shallowDepthContainsAll(t, zero, []string{
    `input is Point => "object" === typeof input && null !== input`,
  })
  shallowDepthReturnedGuardExcludes(t, zero, []string{
    `input.type`,
    `"point"`,
  })

  surface := shallowDepthTransform(t, project, "src/surface.ts", "ts")
  shallowDepthContainsAll(t, surface, []string{
    `input.type`,
  })

  shallowDepthRunRuntimeCases(
    t,
    project,
    shallowDepthTransform(t, project, "src/zero.ts", "js"),
    shallowDepthTransform(t, project, "src/surface.ts", "js"),
  )
}

func shallowDepthProject(t *testing.T) string {
  t.Helper()
  root := shallowDepthRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "shallow-depth-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(shallowDepthTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "zero.ts"), []byte(shallowDepthZeroSource), 0o644); err != nil {
    t.Fatalf("write zero source: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "surface.ts"), []byte(shallowDepthSurfaceSource), 0o644); err != nil {
    t.Fatalf("write surface source: %v", err)
  }
  return dir
}

func shallowDepthRepoRoot(t *testing.T) string {
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

func shallowDepthCapture(run func() int) (string, string, int) {
  var out bytes.Buffer
  var err bytes.Buffer
  oldStdout := stdout
  oldStderr := stderr
  stdout = &out
  stderr = &err
  defer func() {
    stdout = oldStdout
    stderr = oldStderr
  }()
  code := run()
  return out.String(), err.String(), code
}

func shallowDepthTransform(t *testing.T, project string, file string, output string) string {
  t.Helper()
  out, errText, code := shallowDepthCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", file,
      "--output", output,
    })
  })
  if code != 0 {
    t.Fatalf("shallow transform failed: file=%s output=%s code=%d stderr=\n%s", file, output, code, errText)
  }
  return out
}

func shallowDepthContainsAll(t *testing.T, text string, expected []string) {
  t.Helper()
  for _, needle := range expected {
    if !strings.Contains(text, needle) {
      t.Fatalf("expected transform output to contain %q:\n%s", needle, text)
    }
  }
}

func shallowDepthReturnedGuardExcludes(t *testing.T, text string, forbidden []string) {
  t.Helper()
  guard := ""
  for _, line := range strings.Split(text, "\n") {
    if strings.Contains(line, "input is Point =>") {
      guard = line
      break
    }
  }
  if guard == "" {
    t.Fatalf("returned guard arrow not found in:\n%s", text)
  }
  for _, needle := range forbidden {
    if strings.Contains(guard, needle) {
      t.Fatalf("returned guard must not contain %q: %s", needle, guard)
    }
  }
}

func shallowDepthRunRuntimeCases(t *testing.T, project string, zeroJS string, surfaceJS string) {
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
  stub := func(js string) string {
    return strings.ReplaceAll(js, `require("typia")`, `require("./typia-stub.cjs")`)
  }
  if err := os.WriteFile(filepath.Join(runtimeDir, "zero.cjs"), []byte(stub(zeroJS)), 0o644); err != nil {
    t.Fatalf("write zero runtime module: %v", err)
  }
  if err := os.WriteFile(filepath.Join(runtimeDir, "surface.cjs"), []byte(stub(surfaceJS)), 0o644); err != nil {
    t.Fatalf("write surface runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(shallowDepthRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = project
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("shallow runtime cases failed: %v\n%s", err, output)
  }
}

const shallowDepthTSConfig = `{
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

const shallowDepthZeroSource = `import typia from "typia";

interface Point {
  type: "point";
  x: number;
  y: number;
}

export const shallowZero = (input: unknown): boolean =>
  typia.shallow<Point, 0>(input);
`

const shallowDepthSurfaceSource = `import typia from "typia";

interface Circle {
  type: "circle";
  radius: number;
}
interface Square {
  type: "square";
  side: number;
}
type Shape = Circle | Square;

export const shallowSquare = (input: unknown): boolean =>
  typia.shallow<Square>(input);

export const discriminate = (input: Shape): string =>
  typia.shallow<Circle>(input) ? "circle" : "square";
`

const shallowDepthRuntimeRunner = `const { shallowZero } = require("./zero.cjs");
const { shallowSquare, discriminate } = require("./surface.cjs");

const zeroCases = [
  ["matching object", { type: "point", x: 1, y: 2 }, true],
  ["object with wrong inner fields still passes at depth 0", { anything: true }, true],
  ["null is rejected", null, false],
  ["primitive is rejected", 42, false],
];
for (const [name, input, expected] of zeroCases) {
  const actual = shallowZero(input);
  if (actual !== expected) {
    throw new Error("zero/" + name + ": expected " + expected + " but got " + actual);
  }
}

const surfaceCases = [
  ["matching square", { type: "square", side: 3 }, true],
  ["wrong discriminant", { type: "circle", radius: 3 }, false],
  ["non object", "square", false],
];
for (const [name, input, expected] of surfaceCases) {
  const actual = shallowSquare(input);
  if (actual !== expected) {
    throw new Error("surface/" + name + ": expected " + expected + " but got " + actual);
  }
}

if (discriminate({ type: "circle", radius: 1 }) !== "circle") {
  throw new Error("discriminate: circle branch failed");
}
if (discriminate({ type: "square", side: 1 }) !== "square") {
  throw new Error("discriminate: square branch failed");
}
`
