package context

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  shimcore "github.com/microsoft/typescript-go/shim/core"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  "github.com/samchon/ttsc/packages/ttsc/driver"
)

type ITypiaContext struct {
  Program         *driver.Program
  CompilerOptions *shimcore.CompilerOptions
  Checker         *shimchecker.Checker
  Options         ITransformOptions
  // Emit is the transform context tsgo passes to the plugin, matching legacy
  // typia's ts.TransformationContext. Nodes created by its factory retain
  // original links so the printer and emit resolver can recover binder symbols
  // (for example, exported namespaces lower to exports.X = X = {}). Generated
  // nodes should go through Emit.Factory whenever it is available.
  Emit     *shimprinter.EmitContext
  Importer *ImportProgrammer
  Extras   ITypiaContext_Extras
}

type ITypiaContext_Extras struct {
  AddDiagnostic func(diag *ITypiaDiagnostic) int
}

type ITypiaDiagnostic struct {
  File    *shimast.SourceFile
  Start   *int
  Length  *int
  Code    string
  Message string
}
