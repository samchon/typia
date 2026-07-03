package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestShallowDepthArgumentError verifies typia.shallow<T, N> rejects an N that
// is not a non-negative integer literal.
//
// The depth budget N is read off the second type argument at transform time, so
// a non-literal such as `number` or a negative literal such as `-1` cannot be
// lowered into a concrete budget. Each must abort the transform with a
// diagnostic instead of silently defaulting; otherwise a typo like
// `shallow<T, -1>` would emit a surprising guard rather than failing loudly.
// This test only pins the rejection path; transform diagnostic detail is covered
// by the command diagnostics tests.
//
//  1. Transform a call site whose N is the `number` type (not a literal).
//  2. Transform a call site whose N is the negative literal `-1`.
//  3. Assert each fails with the typia transform diagnostic instead of emitting.
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
