package main

import (
  "encoding/json"
  "flag"
  "fmt"
  "io"
  "os"
  "path/filepath"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimcompiler "github.com/microsoft/typescript-go/shim/compiler"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  "github.com/samchon/ttsc/packages/ttsc/driver"
  typiaadapter "github.com/samchon/typia/packages/typia/native/adapter"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativetransform "github.com/samchon/typia/packages/typia/native/transform"
)

func runBuild(args []string) int {
  fs := flag.NewFlagSet("build", flag.ContinueOnError)
  fs.SetOutput(stderr)
  tsconfigPath := fs.String("tsconfig", "tsconfig.json", "path to tsconfig.json")
  cwdOverride := fs.String("cwd", "", "override the working directory")
  quiet := fs.Bool("quiet", true, "suppress the per-call diagnostic summary")
  verbose := fs.Bool("verbose", false, "print the per-call diagnostic summary")
  emit := fs.Bool("emit", false, "force emitted .js files")
  noEmit := fs.Bool("noEmit", false, "force analysis-only run with no file writes")
  outDir := fs.String("outDir", "", "override compilerOptions.outDir")
  manifestPath := fs.String("manifest", "", "write emitted file list as JSON")
  rewriteMode := fs.String("rewrite-mode", "typia", "native rewrite backend id")
  pluginsJSON := fs.String("plugins-json", "", "ordered ttsc plugin payload")
  if err := fs.Parse(args); err != nil {
    return 2
  }
  if *emit && *noEmit {
    fmt.Fprintln(stderr, "ttsc-typia build: --emit and --noEmit are mutually exclusive")
    return 2
  }
  if *verbose {
    *quiet = false
  }
  if *rewriteMode != "none" && *rewriteMode != "typia" {
    fmt.Fprintf(stderr, "ttsc-typia build: unknown --rewrite-mode value %q\n", *rewriteMode)
    return 2
  }
  // Resolve the options before loading the program: they come from the payload
  // alone, so an unreadable manifest is a usage error to report now rather than
  // after a full compile has already run under the wrong configuration.
  pluginOptions, err := typiaadapter.ReadPluginOptions(*pluginsJSON)
  if err != nil {
    fmt.Fprintf(stderr, "ttsc-typia build: %v\n", err)
    return 2
  }

  cwd := *cwdOverride
  if cwd == "" {
    if cwd, err = os.Getwd(); err != nil {
      fmt.Fprintf(stderr, "ttsc-typia build: cwd: %v\n", err)
      return 2
    }
  }
  loadProgram := func(options driver.LoadProgramOptions, diagnose bool) (*driver.Program, int) {
    prog, diags, err := driver.LoadProgram(cwd, *tsconfigPath, options)
    if err != nil {
      fmt.Fprintf(stderr, "ttsc-typia build: %v\n", err)
      return nil, 2
    }
    if len(diags) > 0 {
      if prog != nil {
        prog.Close()
      }
      driver.WritePrettyDiagnostics(stderr, diags, cwd)
      return nil, 2
    }
    if diagnose {
      if diags := prog.Diagnostics(); len(diags) > 0 {
        prog.Close()
        driver.WritePrettyDiagnostics(stderr, diags, cwd)
        return nil, 2
      }
    }
    return prog, 0
  }
  prog, code := loadProgram(driver.LoadProgramOptions{
    ForceEmit:   *emit,
    ForceNoEmit: *noEmit,
    OutDir:      *outDir,
  }, true)
  if code != 0 {
    return code
  }
  shouldEmit := !prog.ParsedConfig.ParsedConfig.CompilerOptions.NoEmit.IsTrue()
  if !shouldEmit {
    // The plugin transformer is part of tsgo's emit pipeline. Reload with emit
    // enabled so check/noEmit traverses the exact same source set, then discard
    // every generated output below. The original program already proved the
    // project's diagnostics; diagnosing the private reload would reject valid
    // analysis-only options such as allowImportingTsExtensions.
    prog.Close()
    prog, code = loadProgram(driver.LoadProgramOptions{
      ForceEmit: true,
      OutDir:    *outDir,
    }, false)
    if code != 0 {
      return code
    }
  }
  defer prog.Close()

  transformDiags := []typiaTransformDiagnostic{}
  transformOptions := pluginOptions.TransformOptions()
  extras := nativecontext.ITypiaContext_Extras{
    AddDiagnostic: func(diag *nativecontext.ITypiaDiagnostic) int {
      transformDiags = append(transformDiags, typiaTransformDiagnosticFrom(diag))
      return len(transformDiags)
    },
  }
  // AST-integration emit: typia's per-file transformer runs inside tsgo's emit
  // pipeline (sharing the EmitContext), so it returns AST and tsgo's module-
  // transform aliases the injected namespace imports. No text-splice RewriteSet.
  typiaTransform := func(ec *shimprinter.EmitContext, sf *shimast.SourceFile) *shimast.SourceFile {
    if *rewriteMode != "typia" {
      return sf
    }
    return nativetransform.Transform(prog, &transformOptions, extras, ec)(sf)
  }
  if !*quiet {
    fmt.Fprintf(stdout, "// ttsc-typia build: tsconfig=%s cwd=%s emit=%v rewrite=%s\n", *tsconfigPath, cwd, shouldEmit, *rewriteMode)
  }
  emitted := []string{}
  pending := []buildPendingOutput{}
  writeFile := shimcompiler.WriteFile(func(fileName, text string, data *shimcompiler.WriteFileData) error {
    if shouldEmit {
      emitted = append(emitted, fileName)
      pending = append(pending, buildPendingOutput{FileName: fileName, Text: text})
    }
    return nil
  })
  eDiags, err := prog.EmitWithPluginTransformers([]driver.PluginTransform{typiaTransform}, writeFile)
  if err != nil {
    fmt.Fprintf(stderr, "ttsc-typia build: emit failed: %v\n", err)
    return 3
  }
  for _, d := range eDiags {
    fmt.Fprintln(stderr, "  -", d.String())
  }
  if len(transformDiags) > 0 {
    writeTypiaTransformDiagnostics(stderr, transformDiags, cwd)
    return 3
  }
  if shouldEmit {
    for _, output := range pending {
      if err := driver.DefaultWriteFile(output.FileName, output.Text); err != nil {
        fmt.Fprintf(stderr, "ttsc-typia build: emit write failed: %v\n", err)
        return 3
      }
    }
    if !*quiet {
      fmt.Fprintf(stdout, "// ttsc-typia build: emitted=%d files\n", len(emitted))
      for _, f := range emitted {
        rel := f
        if abs, err := filepath.Rel(cwd, f); err == nil {
          rel = abs
        }
        fmt.Fprintln(stdout, "  +", rel)
      }
    }
    if *manifestPath != "" {
      data, err := json.Marshal(emitted)
      if err != nil {
        fmt.Fprintf(stderr, "ttsc-typia build: manifest marshal failed: %v\n", err)
        return 3
      }
      if err := os.MkdirAll(filepath.Dir(*manifestPath), 0o755); err != nil {
        fmt.Fprintf(stderr, "ttsc-typia build: manifest mkdir failed: %v\n", err)
        return 3
      }
      if err := os.WriteFile(*manifestPath, data, 0o644); err != nil {
        fmt.Fprintf(stderr, "ttsc-typia build: manifest write failed: %v\n", err)
        return 3
      }
    }
  }
  return 0
}

type buildPendingOutput struct {
  FileName string
  Text     string
}

type typiaTransformDiagnostic struct {
  File    string
  Line    int
  Column  int
  Code    string
  Message string
}

func writeTypiaTransformDiagnostics(out io.Writer, diagnostics []typiaTransformDiagnostic, cwd string) {
  for _, diag := range diagnostics {
    fmt.Fprintln(out, diag.String(cwd))
  }
}
