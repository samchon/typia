package main

import (
  "strings"
  "testing"
)

// TestPlainClassifyCrossModuleTransform verifies runtime import of a class declared in another module.
//
// Reconstructing an external class needs its runtime value in the consumer; a type-only relationship cannot supply the factory or prototype.
//
// 1. Separate model and consumer sources exercise a module-value boundary, complementing the local from/new strategy case.
// 2. The consumer module transforms successfully and contains a model-module reference. This token check does not establish complete runtime import wiring.
//
// @evidence contracts/testing.md#behavioral-verification The consumer module transforms successfully and contains the authored model-module token; runtime import wiring is not executed or fully established by this token check.
// @evidence contracts/testing.md#independent-expectations Reconstructing an external class needs its runtime value in the consumer; a type-only relationship cannot supply the factory or prototype.
// @evidence contracts/testing.md#distinguishing-cases Separate model and consumer sources exercise a module-value boundary, complementing the local from/new strategy case.
// @evidence contracts/testing.md#execution-ownership The native Go runner executes TestPlainClassifyCrossModuleTransform as a unit test. Captured runTransform calls operate on the isolated fixture project in process; output assertions and cleanup remain owned by these helpers without a compiler or Node subprocess.
func TestPlainClassifyCrossModuleTransform(t *testing.T) {
  project := plainClassifyCrossModuleProject(t)
  transform := func(file string) string {
    out, errText, code := ttscTypiaTestCapture(func() int {
      return runTransform([]string{
        "--cwd", project,
        "--tsconfig", "tsconfig.json",
        "--file", file,
        "--output", "js",
      })
    })
    if code != 0 {
      t.Fatalf("transform %s failed: code=%d stderr=\n%s", file, code, errText)
    }
    return out
  }
  transform("src/model.ts")
  mainJS := transform("src/main.ts")
  if !strings.Contains(mainJS, "model") {
    t.Fatalf("main module should value-import the cross-module class:\n%s", mainJS)
  }
}
