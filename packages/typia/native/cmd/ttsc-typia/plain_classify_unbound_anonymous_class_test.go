package main

import (
  "strings"
  "testing"
)

// TestPlainClassifyUnboundAnonymousClass verifies absence of binder-only anonymous constructor references.
//
// An anonymous unbound class has no accessible runtime identifier; the compiler synthetic binder name cannot be used as a constructor value.
//
// 1. An unbound anonymous class is the negative value-reference boundary; bound anonymous/named class expressions are exercised by the class-ref case.
// 2. The anonymous class fixture transforms successfully and emits no __class reference.
//
// @evidence contracts/testing.md#behavioral-verification The anonymous class fixture transforms successfully and emits no __class reference.
// @evidence contracts/testing.md#independent-expectations An anonymous unbound class has no accessible runtime identifier; the compiler synthetic binder name cannot be used as a constructor value.
// @evidence contracts/testing.md#distinguishing-cases An unbound anonymous class is the negative value-reference boundary; bound anonymous/named class expressions are exercised by the class-ref case.
// @evidence contracts/testing.md#execution-ownership The native Go runner executes TestPlainClassifyUnboundAnonymousClass as a unit test. Captured runTransform calls operate on the isolated fixture project in process; output assertions and cleanup remain owned by these helpers without a compiler or Node subprocess.
func TestPlainClassifyUnboundAnonymousClass(t *testing.T) {
  project := plainClassifyWriteProject(t, "plain-classify-anon-", plainClassifyUnboundAnonSource)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("unbound anonymous class transform failed: code=%d\n%s", code, errText)
  }
  if strings.Contains(out, "__class") {
    t.Fatalf("an unbound anonymous class must NOT leak the binder-internal __class name:\n%s", out)
  }
}
