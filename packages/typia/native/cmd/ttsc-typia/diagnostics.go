package main

import (
  "fmt"
  "path/filepath"

  shimscanner "github.com/microsoft/typescript-go/shim/scanner"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

const typiaTransformDiagnosticFallbackMessage = "typia transform error"

func typiaTransformDiagnosticFrom(diag *nativecontext.ITypiaDiagnostic) typiaTransformDiagnostic {
  out := typiaTransformDiagnostic{Message: typiaTransformDiagnosticFallbackMessage}
  if diag == nil {
    return out
  }
  if diag.Code != "" {
    out.Code = diag.Code
  }
  if diag.Message != "" {
    out.Message = diag.Message
  }
  if diag.File != nil {
    out.File = diag.File.FileName()
    if diag.Start != nil && *diag.Start >= 0 {
      line, column := shimscanner.GetECMALineAndByteOffsetOfPosition(diag.File, *diag.Start)
      out.Line = line + 1
      out.Column = column + 1
    }
  }
  return out
}

func (d typiaTransformDiagnostic) String(cwd string) string {
  code := d.Code
  if code == "" {
    code = "typia"
  }
  if d.File == "" {
    return fmt.Sprintf("error TS(%s): %s", code, d.Message)
  }
  file := d.File
  if rel, err := filepath.Rel(cwd, file); err == nil {
    file = rel
  }
  if d.Line > 0 {
    return fmt.Sprintf("%s:%d:%d - error TS(%s): %s", file, d.Line, d.Column, code, d.Message)
  }
  return fmt.Sprintf("%s - error TS(%s): %s", file, code, d.Message)
}
