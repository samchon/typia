package transform

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimcore "github.com/microsoft/typescript-go/shim/core"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  "github.com/samchon/ttsc/packages/ttsc/driver"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

// TransformFactory rewrites one source file and returns the rewritten file.
//
// @evidence contracts/common.md#principled-implementation The factory maps a source file to its rewritten source file, which is the shape the host's emit pipeline calls for each file.
// @evidence contracts/common.md#clear-and-simple-design One function type.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A declaration only.
// @evidence contracts/common.md#meaningful-documentation The doc states the mapping.
type TransformFactory func(file *shimast.SourceFile) *shimast.SourceFile

// Transform builds typia's per-file AST transformer. When ec is non-nil the
// transformer runs in AST-integration (emit) mode: it injects namespace imports
// built with ec.Factory so tsgo's module-transform aliases the runtime
// references itself. A nil ec keeps the legacy text-emit behavior.
//
// Missing strictNullChecks, when the host supplies compiler options and a
// diagnostic sink, is reported through that sink before the factory is returned.
//
// @evidence contracts/common.md#principled-implementation The options default to the zero record, a program without strictNullChecks reports a diagnostic that names the missing option, and the file transformer is built over the program's compiler options and checker; a non-nil emit context selects AST-integration mode and nil keeps the legacy text-splice mode.
// @evidence contracts/common.md#clear-and-simple-design One function over three small private accessors.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Missing program or config yields nil accessors that the file transformer treats as absent and does not fall back to reading files.
// @evidence contracts/common.md#meaningful-documentation The doc states both emit modes.
func Transform(program *driver.Program, options *nativecontext.ITransformOptions, extras nativecontext.ITypiaContext_Extras, ec *shimprinter.EmitContext) TransformFactory {
  compilerOptions := transform_compilerOptions(program)
  if transform_strict(compilerOptions) == false && extras.AddDiagnostic != nil {
    extras.AddDiagnostic(&nativecontext.ITypiaDiagnostic{
      Message: "typia transform error: typia requires `strictNullChecks`; enable it, or `strict`, in the compilerOptions of tsconfig.json.",
    })
  }
  opt := nativecontext.ITransformOptions{}
  if options != nil {
    opt = *options
  }
  return TransformFactory(FileTransformer.Transform(FileTransformer_IEnvironments{
    Program:         program,
    CompilerOptions: compilerOptions,
    Checker:         transform_checker(program),
    Options:         opt,
    Extras:          extras,
    EmitContext:     ec,
  }))
}

func transform_compilerOptions(program *driver.Program) *shimcore.CompilerOptions {
  if program == nil || program.ParsedConfig == nil || program.ParsedConfig.ParsedConfig == nil {
    return nil
  }
  return program.ParsedConfig.ParsedConfig.CompilerOptions
}

func transform_checker(program *driver.Program) any {
  if program == nil {
    return nil
  }
  return program.Checker
}

func transform_strict(options *shimcore.CompilerOptions) bool {
  if options == nil {
    return true
  }
  return options.GetStrictOptionValue(options.StrictNullChecks)
}
