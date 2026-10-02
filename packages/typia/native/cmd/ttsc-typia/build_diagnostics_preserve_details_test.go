package main

import (
  "path/filepath"
  "strings"
  "testing"
)

// TestBuildDiagnosticsPreserveDetails checks the authored operation results described below.
//
// The same transform error must preserve its authored source coordinates and operation through build formatting rather than losing typed diagnostic detail.
//
// 1. Specific call failure contrasts with the forbidden empty-code fallback; project-envelope and global diagnostic representations are tested separately.
// 2. Build status three formats main.ts line three character nine with typia.is and the missing-generic cause, never the swallowed generic fallback.
//
// @evidence contracts/testing.md#behavioral-verification Build status three formats main.ts line three character nine with typia.is and the missing-generic cause, never the swallowed generic fallback.
// @evidence contracts/testing.md#independent-expectations The same transform error must preserve its authored source coordinates and operation through build formatting rather than losing typed diagnostic detail.
// @evidence contracts/testing.md#distinguishing-cases Specific call failure contrasts with the forbidden empty-code fallback; project-envelope and global diagnostic representations are tested separately.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestBuildDiagnosticsPreserveDetails as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestBuildDiagnosticsPreserveDetails(t *testing.T) {
  project := transformDiagnosticProject(t)
  _, errText, code := ttscTypiaTestCapture(func() int {
    return runBuild([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--emit",
      "--outDir", filepath.Join(project, "dist"),
    })
  })
  if code != 3 {
    t.Fatalf("generic build should fail with code 3, got %d\nstderr=%s", code, errText)
  }
  normalized := filepath.ToSlash(errText)
  if !strings.Contains(normalized, "src/main.ts:3:9 - error TS(typia.is):") ||
    !strings.Contains(normalized, "non-specified generic argument") {
    t.Fatalf("build diagnostic did not preserve location/code/message:\n%s", errText)
  }
  if strings.Contains(normalized, "error TS(): typia transform error") {
    t.Fatalf("build diagnostic still looks like the swallowed fallback:\n%s", errText)
  }
}
