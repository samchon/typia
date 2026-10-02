package main

import (
  "strings"
  "testing"
)

// TestPlainClassifyStaticPrivateAllowed verifies field copying of classes with only static private state.
//
// Static private slots belong to the constructor rather than each instance, so copying public instance data does not need to recreate them.
//
// 1. Static private state is the positive twin of rejected instance-private classes.
// 2. The static-private class transforms successfully and emits Object.create(Counter.prototype).
//
// @evidence contracts/testing.md#behavioral-verification The static-private class transforms successfully and emits Object.create(Counter.prototype).
// @evidence contracts/testing.md#independent-expectations Static private slots belong to the constructor rather than each instance, so copying public instance data does not need to recreate them.
// @evidence contracts/testing.md#distinguishing-cases Static private state is the positive twin of rejected instance-private classes.
// @evidence contracts/testing.md#execution-ownership The native Go runner executes TestPlainClassifyStaticPrivateAllowed as a unit test. Captured runTransform calls operate on the isolated fixture project in process; output assertions and cleanup remain owned by these helpers without a compiler or Node subprocess.
func TestPlainClassifyStaticPrivateAllowed(t *testing.T) {
  project := plainClassifyWriteProject(t, "plain-classify-staticpriv-", plainClassifyStaticPrivateSource)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("a class with only a STATIC #private member must field-copy, not be rejected: code=%d\n%s", code, errText)
  }
  if !strings.Contains(out, "Object.create(Counter.prototype)") {
    t.Fatalf("the static-#private class should field-copy onto Counter.prototype:\n%s", out)
  }
}
