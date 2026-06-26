package main

import (
  "encoding/json"
  "flag"
  "fmt"
  "io"
  "os"
  "path/filepath"
  "regexp"

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
  _ = fs.String("plugins-json", "", "ordered ttsc plugin payload")
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

  cwd := *cwdOverride
  if cwd == "" {
    var err error
    cwd, err = os.Getwd()
    if err != nil {
      fmt.Fprintf(stderr, "ttsc-typia build: cwd: %v\n", err)
      return 2
    }
  }
  prog, diags, err := driver.LoadProgram(cwd, *tsconfigPath, driver.LoadProgramOptions{
    ForceEmit:   *emit,
    ForceNoEmit: *noEmit,
    OutDir:      *outDir,
  })
  if err != nil {
    fmt.Fprintf(stderr, "ttsc-typia build: %v\n", err)
    return 2
  }
  if len(diags) > 0 {
    driver.WritePrettyDiagnostics(stderr, diags, cwd)
    return 2
  }
  defer prog.Close()
  if diags := prog.Diagnostics(); len(diags) > 0 {
    driver.WritePrettyDiagnostics(stderr, diags, cwd)
    return 2
  }

  shouldEmit := !prog.ParsedConfig.ParsedConfig.CompilerOptions.NoEmit.IsTrue()
  transformDiags := []typiaTransformDiagnostic{}
  pluginOptions := readTypiaPluginOptions(cwd, *tsconfigPath)
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
  if shouldEmit {
    emitted := []string{}
    writeFile := shimcompiler.WriteFile(func(fileName, text string, data *shimcompiler.WriteFileData) error {
      emitted = append(emitted, fileName)
      return driver.DefaultWriteFile(fileName, text)
    })
    eDiags, err := prog.EmitWithPluginTransformers([]driver.PluginTransform{typiaTransform}, writeFile)
    if err != nil {
      fmt.Fprintf(stderr, "ttsc-typia build: emit failed: %v\n", err)
      return 3
    }
    for _, d := range eDiags {
      fmt.Fprintln(stderr, "  -", d.String())
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
  if len(transformDiags) > 0 {
    writeTypiaTransformDiagnostics(stderr, transformDiags, cwd)
    return 3
  }
  return 0
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

func readTypiaPluginOptions(cwd, tsconfigPath string) typiaadapter.PluginOptions {
  path := tsconfigPath
  if !filepath.IsAbs(path) {
    path = filepath.Join(cwd, path)
  }
  data, err := os.ReadFile(path)
  if err != nil {
    return typiaadapter.PluginOptions{}
  }
  text := string(data)
  if !regexp.MustCompile(`(?s)"transform"\s*:\s*"typia/lib/transform"`).MatchString(text) {
    return typiaadapter.PluginOptions{}
  }
  return typiaadapter.PluginOptions{
    Functional: regexp.MustCompile(`(?s)"functional"\s*:\s*true`).MatchString(text),
    Numeric:    regexp.MustCompile(`(?s)"numeric"\s*:\s*true`).MatchString(text),
    Finite:     regexp.MustCompile(`(?s)"finite"\s*:\s*true`).MatchString(text),
    Undefined:  readBooleanPluginOption(text, "undefined"),
  }
}

func readBooleanPluginOption(text string, name string) *bool {
  matched := regexp.MustCompile(`(?s)"` + regexp.QuoteMeta(name) + `"\s*:\s*(true|false)`).FindStringSubmatch(text)
  if matched == nil {
    return nil
  }
  value := matched[1] == "true"
  return &value
}
