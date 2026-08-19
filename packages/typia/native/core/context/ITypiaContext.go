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
  // ReportInferredType, when set, is called for each typia call the transform
  // rewrites whose validated type came from the value argument rather than from
  // a written type argument.
  //
  // The distinction leaves no trace in the generated code, but it decides
  // whether the host may declare the file's reported dependency list complete.
  // A written type argument bounds the analysis: every declaration reachable
  // from it is touched and reported. An inferred one does not, because
  // contextual typing puts the deciding annotation in a file the resolved type
  // never names -- `const handler: Handler = (input) => typia.assert(input)`
  // validates whatever `Handler` declares, and `Handler`'s own file appears
  // nowhere in the consulted-declaration set. A host that narrows invalidation
  // leaves such a file undeclared rather than vouch for a list it cannot bound.
  ReportInferredType func()
}

type ITypiaDiagnostic struct {
  File    *shimast.SourceFile
  Start   *int
  Length  *int
  Code    string
  Message string
}
