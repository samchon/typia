//go:build typia_native_internal
// +build typia_native_internal

package main

import (
  "strings"
  "testing"
)

// TestBuildReportsSemanticDiagnostics checks the authored operation results described below.
//
// TypeScript forbids assigning string to number, independently of any typia rewrite. Build must surface analysis failure rather than accept the fixture.
//
// 1. A deliberate semantic error isolates analysis reporting; the syntactic-error twin and valid builds are owned by neighboring command tests.
// 2. A string assigned to number causes status two and its TypeScript assignability diagnostic.
//
// @evidence contracts/testing.md#behavioral-verification A string assigned to number causes status two and its TypeScript assignability diagnostic.
// @evidence contracts/testing.md#independent-expectations TypeScript forbids assigning string to number, independently of any typia rewrite. Build must surface analysis failure rather than accept the fixture.
// @evidence contracts/testing.md#distinguishing-cases A deliberate semantic error isolates analysis reporting; the syntactic-error twin and valid builds are owned by neighboring command tests.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestBuildReportsSemanticDiagnostics as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestBuildReportsSemanticDiagnostics(t *testing.T) {
  project := transformCoverageProject(t, "build-semantic", "const value: number = \"bad\";\nexport { value };\n")
  _, errText, code := transformCoverageCapture(func() int {
    return runBuild([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--noEmit",
      "--rewrite-mode", "none",
    })
  })
  if code != 2 || !strings.Contains(errText, "Type 'string' is not assignable") {
    t.Fatalf("semantic diagnostics mismatch: code=%d stderr=%s", code, errText)
  }
}
