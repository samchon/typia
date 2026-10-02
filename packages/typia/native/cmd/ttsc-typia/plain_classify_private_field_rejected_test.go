package main

import (
  "strings"
  "testing"
)

// TestPlainClassifyPrivateFieldRejected verifies rejection of nested instance-private reconstruction.
//
// Object.create cannot install JavaScript instance-private slots, so a nested class requiring those slots cannot be reconstructed by public property copying.
//
// 1. A constructor-reachable outer class contains a private-field nested instance; static-private acceptance is owned by its neighboring case.
// 2. The nested private-field fixture must fail and publish a typia transform diagnostic.
//
// @evidence contracts/testing.md#behavioral-verification The nested private-field fixture must fail and publish a typia transform diagnostic.
// @evidence contracts/testing.md#independent-expectations Object.create cannot install JavaScript instance-private slots, so a nested class requiring those slots cannot be reconstructed by public property copying.
// @evidence contracts/testing.md#distinguishing-cases A constructor-reachable outer class contains a private-field nested instance; static-private acceptance is owned by its neighboring case.
// @evidence contracts/testing.md#execution-ownership The native Go runner executes TestPlainClassifyPrivateFieldRejected as a unit test. Captured runTransform calls operate on the isolated fixture project in process; output assertions and cleanup remain owned by these helpers without a compiler or Node subprocess.
func TestPlainClassifyPrivateFieldRejected(t *testing.T) {
  project := plainClassifyPrivateProject(t)
  // Project mode (no --file/--output js): runTransformProject reports typia
  // transform diagnostics and exits non-zero, the established pattern for
  // asserting a transform-time rejection (see compare_equal_cover).
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
    })
  })
  if code == 0 {
    t.Fatalf("a nested #private-field class must be rejected at transform time, but the transform succeeded\nstdout=%s\nstderr=%s", out, errText)
  }
  if !strings.Contains(out, "typia transform error") {
    t.Fatalf("the #private rejection diagnostic is missing:\nstdout=%s\nstderr=%s", out, errText)
  }
}
