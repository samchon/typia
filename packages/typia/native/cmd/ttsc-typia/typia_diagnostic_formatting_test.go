//go:build typia_native_internal

package main

import (
  "bytes"
  "path/filepath"
  "strings"
  "testing"
)

// TestTypiaDiagnosticFormatting verifies the command adapter preserves typia
// diagnostic locations and messages.
//
// The typia-owned conversion must retain source coordinates and global messages
// when presenting plugin errors to compiler consumers.
//
// 1. Format positioned and unpositioned typia diagnostics against a fixture root.
// 2. Convert a positioned plugin diagnostic and check its file and coordinates.
//
// @evidence contracts/testing.md#behavioral-verification writeTypiaTransformDiagnostics preserves the relative file location and unpositioned message; transformDiagnosticToCompilerDiagnostic retains the file, line and character of the typia plugin diagnostic.
// @evidence contracts/testing.md#independent-expectations The diagnostic inputs supply authored file, line, column, code and message values. Formatting and compiler adaptation must preserve those values rather than obtaining expectations from emitted compiler output.
// @evidence contracts/testing.md#distinguishing-cases Positioned and unpositioned typia diagnostics distinguish source-coordinate formatting from the global message path. The compiler conversion separately retains a nonzero source location.
// @evidence contracts/testing.md#execution-ownership The tagged native Go runner discovers this unit case. It directly calls typia-owned diagnostic formatting and conversion without loading a compiler program or running a host; the temporary root only supplies a path base.
func TestTypiaDiagnosticFormatting(t *testing.T) {
  root := t.TempDir()
  var formatted bytes.Buffer
  writeTypiaTransformDiagnostics(&formatted, []typiaTransformDiagnostic{
    {File: filepath.Join(root, "src", "main.ts"), Line: 1, Column: 2, Code: "typia.is", Message: "message"},
    {File: filepath.Join(root, "src", "main.ts"), Code: "typia.assert", Message: "plain"},
  }, root)
  text := filepath.ToSlash(formatted.String())
  if !strings.Contains(text, "src/main.ts:1:2") || !strings.Contains(text, "plain") {
    t.Fatalf("diagnostics were not formatted as expected: %s", text)
  }
  compiler := transformDiagnosticToCompilerDiagnostic(typiaTransformDiagnostic{
    File:    filepath.Join(root, "src", "main.ts"),
    Line:    3,
    Column:  4,
    Code:    "typia.test",
    Message: "compiler",
  })
  if compiler.File == nil || compiler.Line != 3 || compiler.Character != 4 {
    t.Fatalf("compiler diagnostic was not populated: %+v", compiler)
  }
}
