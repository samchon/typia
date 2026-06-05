package transform

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimcore "github.com/microsoft/typescript-go/shim/core"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  "github.com/samchon/ttsc/packages/ttsc/driver"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

type TransformFactory func(file *shimast.SourceFile) *shimast.SourceFile

// Transform builds typia's per-file AST transformer. When ec is non-nil the
// transformer runs in AST-integration (emit) mode: it injects namespace imports
// built with ec.Factory so tsgo's module-transform aliases the runtime
// references itself. A nil ec keeps the legacy text-emit behavior.
func Transform(program *driver.Program, options *nativecontext.ITransformOptions, extras nativecontext.ITypiaContext_Extras, ec *shimprinter.EmitContext) TransformFactory {
  compilerOptions := transform_compilerOptions(program)
  if transform_strict(compilerOptions) == false && extras.AddDiagnostic != nil {
    extras.AddDiagnostic(&shimast.Diagnostic{})
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
  })(nil))
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
