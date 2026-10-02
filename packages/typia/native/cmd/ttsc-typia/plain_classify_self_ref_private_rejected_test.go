package main

import (
  "strings"
  "testing"
)

// TestPlainClassifySelfRefPrivateRejected verifies private-slot rejection through self-referential class data.
//
// Even if the outer constructor can establish private state, recursively field-copied occurrences need their own private slots and cannot be manufactured by prototype attachment.
//
// 1. A recursive occurrence of the same private class tests the nested reconstruction boundary rather than only the top-level strategy.
// 2. The self-referential private class fails with a typia transform diagnostic.
//
// @evidence contracts/testing.md#behavioral-verification The self-referential private class fails with a typia transform diagnostic.
// @evidence contracts/testing.md#independent-expectations Even if the outer constructor can establish private state, recursively field-copied occurrences need their own private slots and cannot be manufactured by prototype attachment.
// @evidence contracts/testing.md#distinguishing-cases A recursive occurrence of the same private class tests the nested reconstruction boundary rather than only the top-level strategy.
// @evidence contracts/testing.md#execution-ownership The native Go runner executes TestPlainClassifySelfRefPrivateRejected as a unit test. Captured runTransform calls operate on the isolated fixture project in process; output assertions and cleanup remain owned by these helpers without a compiler or Node subprocess.
func TestPlainClassifySelfRefPrivateRejected(t *testing.T) {
  project := plainClassifyWriteProject(t, "plain-classify-selfrefpriv-", plainClassifySelfRefPrivateSource)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
    })
  })
  if code == 0 {
    t.Fatalf("a self-referential #private class field-copies its nested occurrences, so it must be rejected; the transform succeeded\nstdout=%s\nstderr=%s", out, errText)
  }
  if !strings.Contains(out, "typia transform error") {
    t.Fatalf("the self-ref #private rejection diagnostic is missing:\nstdout=%s\nstderr=%s", out, errText)
  }
}
