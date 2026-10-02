package main

import (
  "strings"
  "testing"
)

// TestPlainClassifyGenericPrivateRejected verifies private-slot rejection on generic class instances.
//
// Instantiating a generic type does not change the runtime requirement for constructor-created private slots; specialization cannot justify prototype field copying.
//
// 1. A generic own-private class complements nongeneric and inherited-private rejections.
// 2. A generic class with instance-private state must fail and produce a typia transform diagnostic.
//
// @evidence contracts/testing.md#behavioral-verification A generic class with instance-private state must fail and produce a typia transform diagnostic.
// @evidence contracts/testing.md#independent-expectations Instantiating a generic type does not change the runtime requirement for constructor-created private slots; specialization cannot justify prototype field copying.
// @evidence contracts/testing.md#distinguishing-cases A generic own-private class complements nongeneric and inherited-private rejections.
// @evidence contracts/testing.md#execution-ownership The native Go runner executes TestPlainClassifyGenericPrivateRejected as a unit test. Captured runTransform calls operate on the isolated fixture project in process; output assertions and cleanup remain owned by these helpers without a compiler or Node subprocess.
func TestPlainClassifyGenericPrivateRejected(t *testing.T) {
  project := plainClassifyWriteProject(t, "plain-classify-genericpriv-", plainClassifyGenericPrivateSource)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{"--cwd", project, "--tsconfig", "tsconfig.json"})
  })
  if code == 0 {
    t.Fatalf("a generic class with its own #private must be rejected; the transform succeeded\nstdout=%s\nstderr=%s", out, errText)
  }
  if !strings.Contains(out, "typia transform error") {
    t.Fatalf("the generic-#private rejection diagnostic is missing:\nstdout=%s\nstderr=%s", out, errText)
  }
}
