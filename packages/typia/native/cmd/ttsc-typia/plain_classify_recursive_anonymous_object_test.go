package main

import (
  "strings"
  "testing"
)

// TestPlainClassifyRecursiveAnonymousObject verifies recursive structural data without binder type references.
//
// Anonymous object type binder names exist only in compiler metadata; recursive structural data must not turn them into runtime constructor references.
//
// 1. A recursive anonymous object pins the cycle/value-reference boundary; named interfaces and concrete classes are checked separately.
// 2. The recursive anonymous-object fixture transforms successfully and emits no __type identity.
//
// @evidence contracts/testing.md#behavioral-verification The recursive anonymous-object fixture transforms successfully and emits no __type identity.
// @evidence contracts/testing.md#independent-expectations Anonymous object type binder names exist only in compiler metadata; recursive structural data must not turn them into runtime constructor references.
// @evidence contracts/testing.md#distinguishing-cases A recursive anonymous object pins the cycle/value-reference boundary; named interfaces and concrete classes are checked separately.
// @evidence contracts/testing.md#execution-ownership The native Go runner executes TestPlainClassifyRecursiveAnonymousObject as a unit test. Captured runTransform calls operate on the isolated fixture project in process; output assertions and cleanup remain owned by these helpers without a compiler or Node subprocess.
func TestPlainClassifyRecursiveAnonymousObject(t *testing.T) {
  project := plainClassifyWriteProject(t, "plain-classify-recanon-", plainClassifyRecAnonSource)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{"--cwd", project, "--tsconfig", "tsconfig.json", "--file", "src/main.ts", "--output", "js"})
  })
  if code != 0 {
    t.Fatalf("recursive-anonymous-object transform failed: code=%d\n%s", code, errText)
  }
  if strings.Contains(out, "__type") {
    t.Fatalf("a recursive anonymous object must NOT leak the binder-internal __type name:\n%s", out)
  }
}
