package main

import (
  "encoding/json"
  "flag"
  "fmt"
  "io"
  "os"
  "path/filepath"
  "sync"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimcompiler "github.com/microsoft/typescript-go/shim/compiler"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  shimtspath "github.com/microsoft/typescript-go/shim/tspath"
  "github.com/samchon/ttsc/packages/ttsc/driver"
  typiaadapter "github.com/samchon/typia/packages/typia/native/adapter"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  nativetransform "github.com/samchon/typia/packages/typia/native/transform"
)

// runBuild stages a project's emit until typia's transformation succeeds.
// Optional private result paths expose the loaded generation's input
// observations and the compiler's provenance for successfully published scripts.
// Failed builds still report observations; buffered or discarded output never
// acquires provenance. Without the private flags, ordinary command behavior is
// unchanged.
//
// An analysis-only run (`check`, `--noEmit` or a noEmit project) loads one
// Program and answers through analyzeTypiaProgram; only an emitting run enters
// the printer.
func runBuild(args []string) (status int) {
  flags, ok := parseBuildFlags("build", args)
  if !ok {
    return 2
  }
  for _, path := range []string{flags.observationsPath, flags.provenancePath} {
    if path != "" && !filepath.IsAbs(path) {
      fmt.Fprintln(stderr, "ttsc-typia build: private result path must be absolute")
      return 2
    }
  }
  var prog *driver.Program
  snapshot := func() map[string][]string { return map[string][]string{} }
  defer func() {
    // Publish while the checker and generation-owned input ledger are live.
    // Even a failed load has an explicit incomplete observation envelope.
    if flags.observationsPath != "" {
      if err := driver.WriteCheckObservationsJSON(flags.observationsPath, prog); err != nil {
        fmt.Fprintf(stderr, "ttsc-typia build: emit observations write failed: %v\n", err)
        if status == 0 {
          status = 3
        }
      }
    }
    if flags.provenancePath != "" {
      if err := driver.WriteEmitProvenanceJSON(flags.provenancePath, snapshot()); err != nil {
        fmt.Fprintf(stderr, "ttsc-typia build: provenance write failed: %v\n", err)
        if status == 0 {
          status = 3
        }
      }
    }
    if prog != nil {
      prog.Close()
    }
  }()
  settings, code := prepareBuild("ttsc-typia build", flags)
  if code != 0 {
    return code
  }
  prog, code = loadTypiaProgram(settings, driver.LoadProgramOptions{
    ForceEmit:   flags.emit,
    ForceNoEmit: flags.noEmit,
    OutDir:      flags.outDir,
  }, stderr)
  if code != 0 {
    return code
  }
  if code = reportTypiaProgramDiagnostics(prog, settings.cwd, stderr); code != 0 {
    return code
  }
  if prog.ParsedConfig.ParsedConfig.CompilerOptions.NoEmit.IsTrue() {
    return analyzeTypiaProgram(prog, settings, stdout, stderr)
  }
  registerTypiaDefaultLibraryClassifier(prog)
  defer schemametadata.MetadataDefaultLibrary_release(prog.Checker)

  transformDiags := []typiaTransformDiagnostic{}
  extras := nativecontext.ITypiaContext_Extras{
    Shared: &sync.Map{},
    AddDiagnostic: func(diag *nativecontext.ITypiaDiagnostic) int {
      transformDiags = append(transformDiags, typiaTransformDiagnosticFrom(diag))
      return len(transformDiags)
    },
  }
  // AST-integration emit: typia's per-file transformer runs inside tsgo's emit
  // pipeline (sharing the EmitContext), so it returns AST and tsgo's module-
  // transform aliases the injected namespace imports. No text-splice RewriteSet.
  typiaTransform := func(ec *shimprinter.EmitContext, sf *shimast.SourceFile) *shimast.SourceFile {
    if settings.rewriteMode != "typia" {
      return sf
    }
    return nativetransform.Transform(prog, &settings.transformOptions, extras, ec)(sf)
  }
  if !settings.quiet {
    writeTypiaBuildSummary(stdout, settings, true)
  }
  emitted := []string{}
  pending := []buildPendingOutput{}
  publish := shimcompiler.WriteFile(func(name shimtspath.RootedFilePath, text string, _ *shimcompiler.WriteFileData) error {
    return driver.DefaultWriteFile(string(name), text)
  })
  if flags.provenancePath != "" {
    recordedWrite, recordedSnapshot, err := prog.NewEmitProvenanceRecorder(publish)
    if err != nil {
      fmt.Fprintf(stderr, "ttsc-typia build: provenance failed: %v\n", err)
      return 3
    }
    publish, snapshot = recordedWrite, recordedSnapshot
  }
  writeFile := shimcompiler.WriteFile(func(name shimtspath.RootedFilePath, text string, data *shimcompiler.WriteFileData) error {
    fileName := string(name)
    emitted = append(emitted, fileName)
    pending = append(pending, buildPendingOutput{FileName: fileName, Text: text, Data: data})
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
    writeTypiaTransformDiagnostics(stderr, transformDiags, settings.cwd)
    return 3
  }
  for _, output := range pending {
    if err := publish(shimtspath.RootedFilePath(output.FileName), output.Text, output.Data); err != nil {
      fmt.Fprintf(stderr, "ttsc-typia build: emit write failed: %v\n", err)
      return 3
    }
  }
  if !settings.quiet {
    fmt.Fprintf(stdout, "// ttsc-typia build: emitted=%d files\n", len(emitted))
    for _, f := range emitted {
      rel := f
      if abs, err := filepath.Rel(settings.cwd, f); err == nil {
        rel = abs
      }
      fmt.Fprintln(stdout, "  +", rel)
    }
  }
  if flags.manifest != "" {
    data, err := json.Marshal(emitted)
    if err != nil {
      fmt.Fprintf(stderr, "ttsc-typia build: manifest marshal failed: %v\n", err)
      return 3
    }
    if err := os.MkdirAll(filepath.Dir(flags.manifest), 0o755); err != nil {
      fmt.Fprintf(stderr, "ttsc-typia build: manifest mkdir failed: %v\n", err)
      return 3
    }
    if err := os.WriteFile(flags.manifest, data, 0o644); err != nil {
      fmt.Fprintf(stderr, "ttsc-typia build: manifest write failed: %v\n", err)
      return 3
    }
  }
  return 0
}

// buildFlags is the command line shared by `build`, `check` and `check-serve`.
type buildFlags struct {
  tsconfig         string
  cwd              string
  quiet            bool
  verbose          bool
  emit             bool
  noEmit           bool
  outDir           string
  manifest         string
  rewriteMode      string
  pluginsJSON      string
  observationsPath string
  provenancePath   string
}

// parseBuildFlags parses the shared command line under the given command name,
// which flag errors and usage print. A parse error has already been reported.
func parseBuildFlags(command string, args []string) (buildFlags, bool) {
  var flags buildFlags
  fs := flag.NewFlagSet(command, flag.ContinueOnError)
  fs.SetOutput(stderr)
  fs.StringVar(&flags.tsconfig, "tsconfig", "tsconfig.json", "path to tsconfig.json")
  fs.StringVar(&flags.cwd, "cwd", "", "override the working directory")
  fs.BoolVar(&flags.quiet, "quiet", true, "suppress the per-call diagnostic summary")
  fs.BoolVar(&flags.verbose, "verbose", false, "print the per-call diagnostic summary")
  fs.BoolVar(&flags.emit, "emit", false, "force emitted .js files")
  fs.BoolVar(&flags.noEmit, "noEmit", false, "force analysis-only run with no file writes")
  fs.StringVar(&flags.outDir, "outDir", "", "override compilerOptions.outDir")
  fs.StringVar(&flags.manifest, "manifest", "", "write emitted file list as JSON")
  fs.StringVar(&flags.rewriteMode, "rewrite-mode", "typia", "native rewrite backend id")
  fs.StringVar(&flags.pluginsJSON, "plugins-json", "", "ordered ttsc plugin payload")
  fs.StringVar(&flags.observationsPath, "emit-observations-json", "", "private absolute build input result path")
  fs.StringVar(&flags.provenancePath, "emit-provenance-json", "", "private absolute emit provenance result path")
  if err := fs.Parse(args); err != nil {
    return flags, false
  }
  return flags, true
}

// buildSettings is what loading and analyzing a project needs from a validated
// command line.
type buildSettings struct {
  // cwd is the project anchor diagnostics are rendered against.
  cwd string

  // tsconfig is the project file as the command line spelled it.
  tsconfig string

  // quiet suppresses the stdout summary.
  quiet bool

  // rewriteMode is "typia", or "none" to skip the transform.
  rewriteMode string

  // transformOptions are typia's options from the plugin payload.
  transformOptions nativecontext.ITransformOptions
}

// prepareBuild validates the flags that do not need a Program and resolves the
// working directory. Messages carry command as their prefix; a failure returns
// status 2.
func prepareBuild(command string, flags buildFlags) (buildSettings, int) {
  settings := buildSettings{
    tsconfig:    flags.tsconfig,
    quiet:       flags.quiet && !flags.verbose,
    rewriteMode: flags.rewriteMode,
  }
  if flags.emit && flags.noEmit {
    fmt.Fprintf(stderr, "%s: --emit and --noEmit are mutually exclusive\n", command)
    return settings, 2
  }
  if flags.rewriteMode != "none" && flags.rewriteMode != "typia" {
    fmt.Fprintf(stderr, "%s: unknown --rewrite-mode value %q\n", command, flags.rewriteMode)
    return settings, 2
  }
  // Resolve the options before loading the program: they come from the payload
  // alone, so an unreadable manifest is a usage error to report now rather than
  // after a full compile has already run under the wrong configuration.
  pluginOptions, err := typiaadapter.ReadPluginOptions(flags.pluginsJSON)
  if err != nil {
    fmt.Fprintf(stderr, "%s: %v\n", command, err)
    return settings, 2
  }
  settings.transformOptions = pluginOptions.TransformOptions()
  settings.cwd = flags.cwd
  if settings.cwd == "" {
    if settings.cwd, err = os.Getwd(); err != nil {
      fmt.Fprintf(stderr, "%s: cwd: %v\n", command, err)
      return settings, 2
    }
  }
  return settings, 0
}

// loadTypiaProgram loads the project. A load or configuration failure is
// written to errOut and returns status 2; the Program is returned whenever the
// driver produced one, so the caller keeps ownership of closing it.
func loadTypiaProgram(settings buildSettings, options driver.LoadProgramOptions, errOut io.Writer) (*driver.Program, int) {
  options.SemanticConfigPath = os.Getenv(driver.SemanticConfigPathEnv)
  prog, diags, err := driver.LoadProgram(settings.cwd, settings.tsconfig, options)
  if err != nil {
    fmt.Fprintf(errOut, "ttsc-typia build: %v\n", err)
    return prog, 2
  }
  if len(diags) > 0 {
    driver.WritePrettyDiagnostics(errOut, diags, settings.cwd)
    return prog, 2
  }
  return prog, 0
}

// reportTypiaProgramDiagnostics writes the Program's complete diagnostic batch
// to errOut and returns status 2 when it holds any diagnostic.
func reportTypiaProgramDiagnostics(prog *driver.Program, cwd string, errOut io.Writer) int {
  if diags := prog.Diagnostics(); len(diags) > 0 {
    driver.WritePrettyDiagnostics(errOut, diags, cwd)
    return 2
  }
  return 0
}

// writeTypiaBuildSummary prints the verbose run header.
func writeTypiaBuildSummary(out io.Writer, settings buildSettings, emit bool) {
  fmt.Fprintf(out, "// ttsc-typia build: tsconfig=%s cwd=%s emit=%v rewrite=%s\n", settings.tsconfig, settings.cwd, emit, settings.rewriteMode)
}

type buildPendingOutput struct {
  FileName string
  Text     string
  Data     *shimcompiler.WriteFileData
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
