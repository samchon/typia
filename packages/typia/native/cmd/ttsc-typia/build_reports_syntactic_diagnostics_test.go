//go:build typia_native_internal
// +build typia_native_internal

package main

import (
  "strings"
  "testing"
)

// TestBuildReportsSyntacticDiagnostics checks the authored operation results described below.
//
// An equals token with no initializer expression is invalid TypeScript syntax; the build cannot treat its parsed recovery tree as a valid program.
//
// 1. A parse error is distinguished from the separate semantic assignment failure and clean build controls.
// 2. An incomplete initializer causes status two and Expression expected.
//
// @evidence contracts/testing.md#behavioral-verification An incomplete initializer causes status two and Expression expected.
// @evidence contracts/testing.md#independent-expectations An equals token with no initializer expression is invalid TypeScript syntax; the build cannot treat its parsed recovery tree as a valid program.
// @evidence contracts/testing.md#distinguishing-cases A parse error is distinguished from the separate semantic assignment failure and clean build controls.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestBuildReportsSyntacticDiagnostics as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestBuildReportsSyntacticDiagnostics(t *testing.T) {
  project := transformCoverageProject(t, "build-syntax", "export const value = ;\n")
  _, errText, code := transformCoverageCapture(func() int {
    return runBuild([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--noEmit",
      "--rewrite-mode", "none",
    })
  })
  if code != 2 || !strings.Contains(errText, "Expression expected") {
    t.Fatalf("syntactic diagnostics mismatch: code=%d stderr=%s", code, errText)
  }
}
