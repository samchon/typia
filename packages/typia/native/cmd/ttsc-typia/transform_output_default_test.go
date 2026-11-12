package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestTransformOutputDefaultFollowsTheRecordedVariable verifies the single-file
// output kind defaults to TYPIA_TTSC_TRANSFORM_OUTPUT read through the loaded
// program, and that an explicit --output still wins.
//
// The default was read with os.Getenv while flags were parsed, before any
// program existed, so nothing recorded it and a host reusing output across
// launches could not tell a changed value (samchon/ttsc#1852). The program's
// Env records the read as an input of the generation.
//
// 1. Transform one annotated declaration with the variable set to js and no
//    --output: the annotation is gone.
// 2. Keep the variable at js and pass --output ts: the annotation stays.
// 3. Unset the variable: the annotation stays.
//
// @evidence contracts/testing.md#behavioral-verification The real transform command runs over a real program; the printed declaration shows which output kind ran.
// @evidence contracts/testing.md#independent-expectations TypeScript output keeps the authored `: number` annotation and JavaScript output drops it, independently of typia's rewriting.
// @evidence contracts/testing.md#distinguishing-cases The variable set, unset, and overridden by an explicit flag separate the default from the flag.
// @evidence contracts/testing.md#execution-ownership The native Go runner owns the temporary fixture and the in-process transform; t.Setenv restores the variable.
func TestTransformOutputDefaultFollowsTheRecordedVariable(t *testing.T) {
  dir := ttscTypiaTestFixtureDirectory(t, "transform-output-default-")
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(atomicIntersectionSchemaTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte("export const answer: number = 42;\n"), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  transform := func(extra ...string) string {
    t.Helper()
    out, errText, code := ttscTypiaTestCapture(func() int {
      return runTransform(append([]string{
        "--cwd", dir,
        "--tsconfig", "tsconfig.json",
        "--file", "src/main.ts",
      }, extra...))
    })
    if code != 0 {
      t.Fatalf("transform failed: code=%d stderr=\n%s", code, errText)
    }
    return out
  }
  annotated := func(out string) bool { return strings.Contains(out, "answer: number") }

  t.Setenv("TYPIA_TTSC_TRANSFORM_OUTPUT", "js")
  if out := transform(); annotated(out) {
    t.Fatalf("the variable selects JavaScript output:\n%s", out)
  }
  if out := transform("--output", "ts"); !annotated(out) {
    t.Fatalf("an explicit --output ts wins over the variable:\n%s", out)
  }
  os.Unsetenv("TYPIA_TTSC_TRANSFORM_OUTPUT")
  if out := transform(); !annotated(out) {
    t.Fatalf("without the variable the output is TypeScript:\n%s", out)
  }
}
