package main

import (
  "path/filepath"
  "strings"
  "testing"
)

// TestTransformSingleFileFailureWritesNoStdout checks the authored operation results described below.
//
// Stdout is an artifact publication channel, so a rejected transform cannot emit a surviving runtime stub or partial file before reporting failure.
//
// 1. Both output formats exercise failure without an --out target, complementing seeded filesystem atomicity checks.
// 2. Rejected TypeScript/JavaScript stdout modes return status three with the typia.is diagnostic and write no artifact bytes.
//
// @evidence contracts/testing.md#behavioral-verification Rejected TypeScript/JavaScript stdout modes return status three with the typia.is diagnostic and write no artifact bytes.
// @evidence contracts/testing.md#independent-expectations Stdout is an artifact publication channel, so a rejected transform cannot emit a surviving runtime stub or partial file before reporting failure.
// @evidence contracts/testing.md#distinguishing-cases Both output formats exercise failure without an --out target, complementing seeded filesystem atomicity checks.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestTransformSingleFileFailureWritesNoStdout as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestTransformSingleFileFailureWritesNoStdout(t *testing.T) {
  for _, output := range []string{"ts", "js"} {
    t.Run(output, func(t *testing.T) {
      project := transformSingleFileProject(t, transformDiagnosticSource)
      outText, errText, code := ttscTypiaTestCapture(func() int {
        return runTransform([]string{
          "--cwd", project,
          "--tsconfig", "tsconfig.json",
          "--file", filepath.Join("src", "main.ts"),
          "--output", output,
        })
      })
      if code != 3 {
        t.Fatalf("invalid single-file transform should fail with code 3, got %d\nstdout=%s\nstderr=%s", code, outText, errText)
      }
      if !strings.Contains(errText, "error TS(typia.is):") {
        t.Fatalf("single-file diagnostic missing from stderr:\n%s", errText)
      }
      // Before the fix this carried the untransformed `typia.is<T>(input)` call.
      if outText != "" {
        t.Fatalf("failed single-file transform published an artifact on stdout:\n%s", outText)
      }
    })
  }
}
