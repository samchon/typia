package main

import (
  "encoding/json"
  "path/filepath"
  "strings"
  "testing"
)

// TestTransformProjectDiagnosticsPreserveDetails checks the authored operation results described below.
//
// The authored source coordinate and operation establish the diagnostic identity; transforming must not replace that specific error with a generic fallback.
//
// 1. One invalid call pins exact diagnostic cardinality, source identity, position, code and cause.
// 2. The rejected project call returns status three and one diagnostic with main.ts line three character nine, typia.is and the missing-generic cause.
//
// @evidence contracts/testing.md#behavioral-verification The rejected project call returns status three and one diagnostic with main.ts line three character nine, typia.is and the missing-generic cause.
// @evidence contracts/testing.md#independent-expectations The authored source coordinate and operation establish the diagnostic identity; transforming must not replace that specific error with a generic fallback.
// @evidence contracts/testing.md#distinguishing-cases One invalid call pins exact diagnostic cardinality, source identity, position, code and cause.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestTransformProjectDiagnosticsPreserveDetails as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestTransformProjectDiagnosticsPreserveDetails(t *testing.T) {
  project := transformDiagnosticProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
    })
  })
  if code != 3 {
    t.Fatalf("generic transform should fail with code 3, got %d\nstdout=%s\nstderr=%s", code, out, errText)
  }

  var result transformProjectOutput
  if err := json.Unmarshal([]byte(out), &result); err != nil {
    t.Fatalf("decode transform output: %v\n%s", err, out)
  }
  if len(result.Diagnostics) != 1 {
    t.Fatalf("expected one transform diagnostic, got %+v", result.Diagnostics)
  }
  diag := result.Diagnostics[0]
  if diag.File == nil || !strings.HasSuffix(filepath.ToSlash(*diag.File), "src/main.ts") {
    t.Fatalf("diagnostic file was not preserved: %+v", diag)
  }
  if diag.Line != 3 || diag.Character != 9 {
    t.Fatalf("diagnostic location mismatch: %+v", diag)
  }
  if diag.Code != "typia.is" {
    t.Fatalf("diagnostic code mismatch: %+v", diag)
  }
  if diag.MessageText == typiaTransformDiagnosticFallbackMessage ||
    !strings.Contains(diag.MessageText, "non-specified generic argument") {
    t.Fatalf("diagnostic message did not preserve detail: %+v", diag)
  }
}
