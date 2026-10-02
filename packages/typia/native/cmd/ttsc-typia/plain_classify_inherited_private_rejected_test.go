package main

import (
  "strings"
  "testing"
)

// TestPlainClassifyInheritedPrivateRejected verifies inherited instance-private reconstruction rejection.
//
// A derived prototype does not create the private slots installed by a base constructor, so checking only directly declared private members would admit an invalid field-copy strategy.
//
// 1. Private state is declared on the base rather than the derived reconstruction target, complementing direct-private rejection.
// 2. A class extending a private-bearing base must fail and produce a typia transform diagnostic.
//
// @evidence contracts/testing.md#behavioral-verification A class extending a private-bearing base must fail and produce a typia transform diagnostic.
// @evidence contracts/testing.md#independent-expectations A derived prototype does not create the private slots installed by a base constructor, so checking only directly declared private members would admit an invalid field-copy strategy.
// @evidence contracts/testing.md#distinguishing-cases Private state is declared on the base rather than the derived reconstruction target, complementing direct-private rejection.
// @evidence contracts/testing.md#execution-ownership The native Go runner executes TestPlainClassifyInheritedPrivateRejected as a unit test. Captured runTransform calls operate on the isolated fixture project in process; output assertions and cleanup remain owned by these helpers without a compiler or Node subprocess.
func TestPlainClassifyInheritedPrivateRejected(t *testing.T) {
  project := plainClassifyWriteProject(t, "plain-classify-inheritedpriv-", plainClassifyInheritedPrivateSource)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
    })
  })
  if code == 0 {
    t.Fatalf("a class extending a #private-bearing base must be rejected; the transform succeeded\nstdout=%s\nstderr=%s", out, errText)
  }
  if !strings.Contains(out, "typia transform error") {
    t.Fatalf("the inherited-#private rejection diagnostic is missing:\nstdout=%s\nstderr=%s", out, errText)
  }
}
