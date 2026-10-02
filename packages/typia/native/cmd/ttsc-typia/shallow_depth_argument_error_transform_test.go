package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestShallowDepthArgumentError checks the authored operation results described below.
//
// A shallow depth budget must be a concrete nonnegative integer so code generation can determine the stopping level; unsupported arguments cannot silently choose a default.
//
// 1. A broad numeric type and negative literal distinguish nonconcreteness from out-of-domain depth; zero/positive depths are accepted by neighboring shallow cases.
// 2. Nonliteral number and negative one depth arguments fail through the typia transform diagnostic path.
//
// @evidence contracts/testing.md#behavioral-verification Nonliteral number and negative one depth arguments fail through the typia transform diagnostic path.
// @evidence contracts/testing.md#independent-expectations A shallow depth budget must be a concrete nonnegative integer so code generation can determine the stopping level; unsupported arguments cannot silently choose a default.
// @evidence contracts/testing.md#distinguishing-cases A broad numeric type and negative literal distinguish nonconcreteness from out-of-domain depth; zero/positive depths are accepted by neighboring shallow cases.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestShallowDepthArgumentError as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestShallowDepthArgumentError(t *testing.T) {
  cases := []struct {
    Name string
    N    string
  }{
    {"non literal", "number"},
    {"negative", "-1"},
  }
  for _, tc := range cases {
    tc := tc
    t.Run(tc.Name, func(t *testing.T) {
      project := shallowDepthArgumentProject(t, tc.N)
      out, errText, code := shallowDepthCapture(func() int {
        return runTransform([]string{
          "--cwd", project,
          "--tsconfig", "tsconfig.json",
        })
      })
      if code == 0 {
        t.Fatalf("shallow<Point, %s> transformed successfully, want failure", tc.N)
      }
      if !strings.Contains(out, "typia transform error") {
        t.Fatalf("shallow<Point, %s> diagnostics missing:\nstdout=%s\nstderr=%s", tc.N, out, errText)
      }
    })
  }
}

func shallowDepthArgumentProject(t *testing.T, n string) string {
  t.Helper()
  root := shallowDepthRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "shallow-arg-")
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
  source := `import typia from "typia";

interface Point {
  type: "point";
  x: number;
  y: number;
}

export const bad = (input: unknown): boolean =>
  typia.shallow<Point, ` + n + `>(input);
`
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(source), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}
