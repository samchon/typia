package main

import (
  "bytes"
  "os"
  "path/filepath"
  "runtime"
  "strings"
  "testing"
)

// TestShallowDepthLimitTransform checks the authored operation results described below.
//
// Shallow depth limits traversal rather than changing top-level type membership; a zero budget cannot inspect nested fields and a surface budget must stop after its level.
//
// 1. Zero and surface depth fixtures distinguish stopping boundaries while the nested-depth case separately checks budgets one and two.
// 2. Depth zero emits object/non-null checks and excludes the Point discriminant; surface output contains its union discriminant check. Deeper stopping is asserted by the nested-depth case.
//
// @evidence contracts/testing.md#behavioral-verification Depth zero emits object/non-null checks and excludes the Point discriminant; surface output contains its union discriminant check. Deeper stopping is asserted by the nested-depth case.
// @evidence contracts/testing.md#independent-expectations Shallow depth limits traversal rather than changing top-level type membership; a zero budget cannot inspect nested fields and a surface budget must stop after its level.
// @evidence contracts/testing.md#distinguishing-cases Zero and surface depth fixtures distinguish stopping boundaries while the nested-depth case separately checks budgets one and two.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestShallowDepthLimitTransform as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
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

}

func shallowDepthProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "shallow-depth-")
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
