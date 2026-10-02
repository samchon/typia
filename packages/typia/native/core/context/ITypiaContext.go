package context

import (
  "sync"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  shimcore "github.com/microsoft/typescript-go/shim/core"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  "github.com/samchon/ttsc/packages/ttsc/driver"
)

// ITypiaContext carries everything a programmer needs while it rewrites one call:
// the program, compiler options and checker, the typia options, the emit context
// and importer, the diagnostic sink and a shared cache.
//
// @evidence contracts/common.md#principled-implementation The context bundles what rewriting one call needs: the driver program, compiler options, checker, typia options, the emit context that tsgo provides, the importer, the host services and a shared map, with the comment on Emit explaining that generated nodes should go through its factory so the printer can recover symbols.
// @evidence contracts/common.md#clear-and-simple-design A flat record of independent services passed by value to programmers; the optional extras are separated into their own record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts It holds references to host objects and does not copy or replace them.
// @evidence contracts/common.md#meaningful-documentation The doc states the contents and the field comment explains the emit context.
type ITypiaContext struct {
  // Program is the host's compiler program for this transformation.
  Program *driver.Program

  // CompilerOptions are the effective options used by the program.
  CompilerOptions *shimcore.CompilerOptions

  // Checker resolves types and declarations in the program.
  Checker *shimchecker.Checker

  // Options are typia's runtime-generation settings.
  Options ITransformOptions

  // Emit is the transform context tsgo passes to the plugin, matching legacy
  // typia's ts.TransformationContext. Nodes created by its factory retain
  // original links so the printer and emit resolver can recover binder symbols
  // (for example, exported namespaces lower to exports.X = X = {}). Generated
  // nodes should go through Emit.Factory whenever it is available.
  Emit *shimprinter.EmitContext

  // Importer collects runtime imports for the current source file.
  Importer *ImportProgrammer

  // Extras are services supplied by the compiler host.
  Extras ITypiaContext_Extras

  // Shared is the transform session's cross-call cache; its host owns lifetime.
  Shared *sync.Map
}

// ITypiaContext_Extras holds the services the host adds to the context: a
// diagnostic callback that returns the number of diagnostics reported so far, and
// a shared cache.
//
// @evidence contracts/common.md#principled-implementation The host's diagnostic callback returns the running count so a caller can tell whether its own report was added, and the shared map is a cache that survives across calls.
// @evidence contracts/common.md#clear-and-simple-design Two fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states both members.
type ITypiaContext_Extras struct {
  // AddDiagnostic reports an error and returns the host's diagnostic count.
  AddDiagnostic func(diag *ITypiaDiagnostic) int

  // Shared optionally supplies the cross-call cache; a nil value lets the file
  // transformer allocate one for its returned transformation session.
  Shared *sync.Map
}

// ITypiaDiagnostic is one diagnostic of the transform, with an optional source
// range, a code and a message.
//
// @evidence contracts/common.md#principled-implementation A diagnostic has an optional source file and start and length, which are pointers because some diagnostics have no location, a code and a message.
// @evidence contracts/common.md#clear-and-simple-design One flat record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states that the range is optional.
type ITypiaDiagnostic struct {
  // File is the optional source file that contains the reported call.
  File *shimast.SourceFile

  // Start is the optional compiler source offset of the reported node.
  Start *int

  // Length is the optional source span length in compiler offset units.
  Length *int

  // Code identifies the typia operation that reported the error.
  Code string

  // Message is the user-facing diagnostic text.
  Message string
}
