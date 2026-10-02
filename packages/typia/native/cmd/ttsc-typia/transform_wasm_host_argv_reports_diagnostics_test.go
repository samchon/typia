package main

import (
  "path/filepath"
  "strings"
  "testing"
)

// TestTransformWasmHostArgvReportsDiagnostics checks the authored operation results described below.
//
// Wasm-facing argument normalization must preserve the same command diagnostic/publication contract as the ordinary host route.
//
// 1. Wasm host argv spelling exercises the route boundary; direct transform/build diagnostic identities are owned by neighboring cases.
// 2. The in-process host argv route returns status three with the missing-generic diagnostic and no untransformed stdout artifact.
//
// @evidence contracts/testing.md#behavioral-verification The in-process host argv route returns status three with the missing-generic diagnostic and no untransformed stdout artifact.
// @evidence contracts/testing.md#independent-expectations Wasm-facing argument normalization must preserve the same command diagnostic/publication contract as the ordinary host route.
// @evidence contracts/testing.md#distinguishing-cases Wasm host argv spelling exercises the route boundary; direct transform/build diagnostic identities are owned by neighboring cases.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestTransformWasmHostArgvReportsDiagnostics as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestTransformWasmHostArgvReportsDiagnostics(t *testing.T) {
  project := transformSingleFileProject(t, transformDiagnosticSource)
  argv := []string{
    "--cwd=" + project,
    "--tsconfig=tsconfig.json",
    "--file=" + filepath.Join(project, "src", "main.ts"),
    "--output=ts",
  }
  outText, errText, code := ttscTypiaTestCapture(func() int { return runTransform(argv) })
  if code != 3 {
    t.Fatalf("wasm host argv should surface code 3, got %d\nstdout=%s\nstderr=%s", code, outText, errText)
  }
  if !strings.Contains(errText, "non-specified generic argument") {
    t.Fatalf("wasm host argv did not surface the typia diagnostic:\n%s", errText)
  }
  if outText != "" {
    t.Fatalf("wasm host argv returned an untransformed stub as stdout:\n%s", outText)
  }
}
