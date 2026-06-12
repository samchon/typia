package main

import (
  "os"
  "path/filepath"
  "runtime"
  "strings"
  "testing"
)

// TestIsLikelyNestedDepthTransform verifies typia.isLikely<T, N> stops
// descending once N nesting levels are consumed.
//
// At depth 1 the top-level object properties are still checked, but a nested
// object two levels down must collapse to a bare structural object guard rather
// than a full property walk. This pins the decrementing depth budget: a
// regression that ignored N past the root would emit the deep `inner.value`
// check and behave like a full `is`.
//
//  1. Transform an isLikely<Outer, 1> call site whose type nests an inner
//     object holding a string property.
//  2. Assert the top-level discriminant is checked but the inner string
//     property check never appears.
//  3. Assert the inner object is still guarded structurally.
func TestIsLikelyNestedDepthTransform(t *testing.T) {
  project := isLikelyNestedProject(t)
  out := isLikelyNestedTransform(t, project, "ts")

  depth1 := isLikelyNestedFunctionBlock(t, out, "isLikelyOuterDepth1")
  if !strings.Contains(depth1, "input.kind") {
    t.Fatalf("depth 1 must still check the top-level discriminant:\n%s", depth1)
  }
  if strings.Contains(depth1, "input.inner.value") {
    t.Fatalf("depth 1 must not descend into the inner string property:\n%s", depth1)
  }

  depth2 := isLikelyNestedFunctionBlock(t, out, "isLikelyOuterDepth2")
  if !strings.Contains(depth2, "input.inner.value") {
    t.Fatalf("depth 2 must descend into the inner string property:\n%s", depth2)
  }
}

func isLikelyNestedFunctionBlock(t *testing.T, text string, name string) string {
  t.Helper()
  marker := "export const " + name + " ="
  start := strings.Index(text, marker)
  if start == -1 {
    t.Fatalf("function %q not found in:\n%s", name, text)
  }
  rest := text[start+len(marker):]
  if end := strings.Index(rest, "export const "); end != -1 {
    return rest[:end]
  }
  return rest
}

func isLikelyNestedProject(t *testing.T) string {
  t.Helper()
  root := isLikelyNestedRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "is-likely-nested-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(isLikelyNestedTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(isLikelyNestedSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func isLikelyNestedRepoRoot(t *testing.T) string {
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

func isLikelyNestedTransform(t *testing.T, project string, output string) string {
  t.Helper()
  out, errText, code := isLikelyDepthCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", output,
    })
  })
  if code != 0 {
    t.Fatalf("is-likely nested transform failed: output=%s code=%d stderr=\n%s", output, code, errText)
  }
  return out
}

const isLikelyNestedTSConfig = `{
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

const isLikelyNestedSource = `import typia from "typia";

interface Outer {
  kind: "outer";
  inner: {
    value: string;
  };
}

export const isLikelyOuterDepth1 = (input: unknown): boolean =>
  typia.isLikely<Outer, 1>(input);

export const isLikelyOuterDepth2 = (input: unknown): boolean =>
  typia.isLikely<Outer, 2>(input);
`
