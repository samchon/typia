package main

import (
  "fmt"
  "io"
  "sync"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimcompiler "github.com/microsoft/typescript-go/shim/compiler"
  shimcore "github.com/microsoft/typescript-go/shim/core"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  "github.com/samchon/ttsc/packages/ttsc/driver"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  nativetransform "github.com/samchon/typia/packages/typia/native/transform"
)

// analyzeTypiaProgram answers an analysis-only run over a Program whose own
// diagnostics were clean: the linked program hooks' outcome, then typia's
// transform diagnostics. Its status is 3 when either fails and 0 otherwise.
//
// The emit lane learns the same answer by printing every file. Here typia's
// transformer runs over exactly the files that lane transforms, each in its own
// EmitContext, and its output is discarded unprinted. Neither the builtin script
// transformers, the linked emit transforms nor the printer report a TypeScript
// or typia diagnostic, so skipping them leaves the answer unchanged; the
// linked emit transforms are left out as ttsc's own analysis-only check leaves
// them out.
//
// typia's transformer rebuilds every ancestor of a rewritten call through the
// EmitContext's factory and writes nothing into a node it was given, so the
// Program's parsed ASTs stay as parsed and a resident host may keep the Program
// for its next request. Linked ProgramPlugins are different: ApplyLinkedPlugins
// rewrites those ASTs in place before typia reads them.
//
// The cost is one typia traversal per emitted source file over the Program the
// caller already loaded and diagnosed; the default-library classifier is
// registered for this call only.
func analyzeTypiaProgram(prog *driver.Program, settings buildSettings, out, errOut io.Writer) int {
  registerTypiaDefaultLibraryClassifier(prog)
  defer schemametadata.MetadataDefaultLibrary_release(prog.Checker)
  if !settings.quiet {
    writeTypiaBuildSummary(out, settings, false)
  }
  // The emit lane reports a hook failure through the emit funnel, so its text
  // stays the same here.
  if err := prog.ApplyLinkedPlugins(); err != nil {
    fmt.Fprintf(errOut, "ttsc-typia build: emit failed: %v\n", err)
    return 3
  }
  if settings.rewriteMode != "typia" {
    return 0
  }
  diagnostics := []typiaTransformDiagnostic{}
  extras := nativecontext.ITypiaContext_Extras{
    Shared: &sync.Map{},
    AddDiagnostic: func(diag *nativecontext.ITypiaDiagnostic) int {
      diagnostics = append(diagnostics, typiaTransformDiagnosticFrom(diag))
      return len(diagnostics)
    },
  }
  for _, file := range typiaAnalysisFiles(prog) {
    nativetransform.Transform(prog, &settings.transformOptions, extras, shimprinter.NewEmitContext())(file)
  }
  if len(diagnostics) > 0 {
    writeTypiaTransformDiagnostics(errOut, diagnostics, settings.cwd)
    return 3
  }
  return 0
}

// typiaAnalysisFiles lists, in Program order, the files whose JavaScript the
// emit lane passes through typia's transformer: the compiler's emit selection
// with a JavaScript output path.
//
// The emit lane runs on a Program loaded with emitDeclarationOnly cleared, so
// the paths are computed with it cleared too; noEmit itself does not enter the
// selection. The lane's outDir containment guard is not repeated: an output can
// leave outDir only for a source outside rootDir, which TypeScript reports as
// TS6059, and this lane runs only on a Program without diagnostics.
func typiaAnalysisFiles(prog *driver.Program) []*shimast.SourceFile {
  program := prog.TSProgram
  options := program.Options().Clone()
  options.EmitDeclarationOnly = shimcore.TSFalse
  files := []*shimast.SourceFile{}
  for _, file := range shimcompiler.SourceFilesToEmit(program) {
    if shimcompiler.OutputPathsFor(file, options, program).JsFilePath() != "" {
      files = append(files, file)
    }
  }
  return files
}
