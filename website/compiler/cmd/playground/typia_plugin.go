// typia plugin wiring for the website's playground wasm.
//
// Mirrors the dispatch flow of typia's `cmd/ttsc-typia/{build,transform}.go`,
// but reframes it as a host.Plugin so the playground wasm can run typia's
// real transform inline. Whereas the standalone `ttsc-typia` binary owns
// its own package-level stdout/stderr, here we rely on host.runWithCapturedIO
// to redirect `os.Stdout` / `os.Stderr` for us — the Plugin contract.
//
// Public surface this delegates into (all live under
// `node_modules/typia/native/`):
//
//   - `adapter`   — call-site walker and `EmitCallWith*` emitters.
//   - `driver`    — Program loader / RewriteSet (re-used from ttsc itself).
package main

import (
  "encoding/json"
  "flag"
  "fmt"
  "os"
  "path/filepath"
  "regexp"
  "sort"
  "strings"

  shimcompiler "github.com/microsoft/typescript-go/shim/compiler"
  shimscanner "github.com/microsoft/typescript-go/shim/scanner"

  "github.com/samchon/ttsc/packages/ttsc/driver"
  typiaadapter "github.com/samchon/typia/packages/typia/native/adapter"
)

type typiaPlugin struct{}

func newTypiaPlugin() typiaPlugin { return typiaPlugin{} }

func (typiaPlugin) Name() string { return "typia" }

// Run dispatches the typia subcommands. The verb defaults to `transform` —
// the playground's TypeScript view is what users see, so an unspecified
// command should return the rewritten TS rather than spawn an emit pass.
func (typiaPlugin) Run(command string, args []string) int {
  if command == "" {
    command = "transform"
  }
  switch command {
  case "build":
    return runTypiaBuild(args)
  case "check":
    // `check` is `build --noEmit` in typia's CLI; mirror that here.
    return runTypiaBuild(append([]string{"--noEmit"}, args...))
  case "transform":
    return runTypiaTransform(args)
  case "-v", "--version", "version":
    fmt.Fprintln(os.Stdout, "typia (playground-wasm bundled)")
    return 0
  default:
    fmt.Fprintf(os.Stderr, "typia: unknown command %q\n", command)
    return 2
  }
}

// runTypiaBuild is a stripped-down port of typia's `cmd/ttsc-typia/build.go`
// runBuild. Differences from the upstream:
//
//   - writes via os.Stdout / os.Stderr (no package-level writer indirection)
//   - omits the manifest output (the playground has no use for it)
//   - keeps the `--rewrite-mode` flag at typia for parity, but does not
//     surface `none` as a useful mode (the playground is typia-only)
func runTypiaBuild(args []string) int {
  fs := flag.NewFlagSet("build", flag.ContinueOnError)
  fs.SetOutput(os.Stderr)
  tsconfigPath := fs.String("tsconfig", "tsconfig.json", "path to tsconfig.json")
  cwdOverride := fs.String("cwd", "", "override the working directory")
  quiet := fs.Bool("quiet", true, "suppress the per-call diagnostic summary")
  verbose := fs.Bool("verbose", false, "print the per-call diagnostic summary")
  emit := fs.Bool("emit", false, "force emitted .js files")
  noEmit := fs.Bool("noEmit", false, "force analysis-only run with no file writes")
  outDir := fs.String("outDir", "", "override compilerOptions.outDir")
  _ = fs.String("plugins-json", "", "ordered ttsc plugin payload")
  if err := fs.Parse(args); err != nil {
    return 2
  }
  if *emit && *noEmit {
    fmt.Fprintln(os.Stderr, "typia build: --emit and --noEmit are mutually exclusive")
    return 2
  }
  if *verbose {
    *quiet = false
  }

  cwd := *cwdOverride
  if cwd == "" {
    var err error
    cwd, err = os.Getwd()
    if err != nil {
      fmt.Fprintf(os.Stderr, "typia build: cwd: %v\n", err)
      return 2
    }
  }
  prog, diags, err := driver.LoadProgram(cwd, *tsconfigPath, driver.LoadProgramOptions{
    ForceEmit:   *emit,
    ForceNoEmit: *noEmit,
    OutDir:      *outDir,
  })
  if err != nil {
    fmt.Fprintf(os.Stderr, "typia build: %v\n", err)
    return 2
  }
  if len(diags) > 0 {
    driver.WritePrettyDiagnostics(os.Stderr, diags, cwd)
    return 2
  }
  defer prog.Close()
  if pdiags := prog.Diagnostics(); len(pdiags) > 0 {
    driver.WritePrettyDiagnostics(os.Stderr, pdiags, cwd)
    return 2
  }

  rewrites := driver.NewRewriteSet()
  shouldEmit := !prog.ParsedConfig.ParsedConfig.CompilerOptions.NoEmit.IsTrue()
  sites, recognized, transformDiags := collectTypiaRewrites(
    prog,
    cwd,
    shouldEmit,
    *quiet,
    "",
    rewrites,
    readTypiaPluginOptions(cwd, *tsconfigPath),
  )
  if !*quiet {
    fmt.Fprintf(os.Stdout, "// typia build: tsconfig=%s cwd=%s sites=%d emit=%v\n", *tsconfigPath, cwd, sites, shouldEmit)
  }
  if shouldEmit {
    writeFile := shimcompiler.WriteFile(func(fileName, text string, _ *shimcompiler.WriteFileData) error {
      text = typiaadapter.CleanupTransformedText(text)
      return driver.DefaultWriteFile(fileName, text)
    })
    res, eDiags, err := prog.EmitAll(rewrites, writeFile)
    if err != nil {
      fmt.Fprintf(os.Stderr, "typia build: emit failed: %v\n", err)
      return 3
    }
    for _, d := range eDiags {
      fmt.Fprintln(os.Stderr, "  -", d.String())
    }
    if !*quiet {
      fmt.Fprintf(os.Stdout, "// typia build: emitted=%d files\n", len(res.EmittedFiles))
    }
  }
  if len(transformDiags) > 0 {
    writeTypiaTransformDiagnostics(os.Stderr, transformDiags, cwd)
    return 3
  }
  if !*quiet {
    fmt.Fprintf(os.Stdout, "// typia build: recognized=%d total=%d\n", recognized, sites)
  }
  return 0
}

// runTypiaTransform is the port of typia's `cmd/ttsc-typia/transform.go`
// runTransform. The playground only needs the project-wide TS rewrite mode
// (the JSON-shaped output that maps file path → rewritten source); we keep
// the single-file emit branch so command-line smoke tests stay close to the
// CLI flow.
func runTypiaTransform(args []string) int {
  fs := flag.NewFlagSet("transform", flag.ContinueOnError)
  fs.SetOutput(os.Stderr)
  file := fs.String("file", "", "absolute or cwd-relative path of the .ts file to transform")
  tsconfigPath := fs.String("tsconfig", "tsconfig.json", "tsconfig.json owning --file")
  cwdOverride := fs.String("cwd", "", "override the working directory")
  out := fs.String("out", "", "write output JS to PATH")
  output := fs.String("output", "ts", "transform output kind: js or ts")
  _ = fs.String("plugins-json", "", "ordered ttsc plugin payload")
  if err := fs.Parse(args); err != nil {
    return 2
  }
  if *output != "js" && *output != "ts" {
    fmt.Fprintf(os.Stderr, "typia transform: unknown --output value %q\n", *output)
    return 2
  }
  cwd := *cwdOverride
  if cwd == "" {
    var err error
    cwd, err = os.Getwd()
    if err != nil {
      fmt.Fprintf(os.Stderr, "typia transform: cwd: %v\n", err)
      return 2
    }
  }

  prog, diags, err := driver.LoadProgram(cwd, *tsconfigPath, driver.LoadProgramOptions{
    ForceEmit: true,
  })
  if err != nil {
    fmt.Fprintf(os.Stderr, "typia transform: %v\n", err)
    return 2
  }
  if len(diags) > 0 {
    driver.WritePrettyDiagnostics(os.Stderr, diags, cwd)
    return 2
  }
  defer prog.Close()

  if *file == "" {
    if *out != "" {
      fmt.Fprintln(os.Stderr, "typia transform: --out requires --file")
      return 2
    }
    return runTypiaTransformProject(prog, cwd, *tsconfigPath)
  }

  absFile := *file
  if !filepath.IsAbs(absFile) {
    absFile = filepath.Join(cwd, absFile)
  }
  absFile = filepath.ToSlash(absFile)
  target := prog.SourceFile(absFile)
  if target == nil {
    fmt.Fprintf(os.Stderr, "typia transform: source file is not in program: %s\n", absFile)
    return 2
  }

  if *output == "ts" {
    rewrites, tdiags := collectTypiaSourceRewrites(prog, cwd, absFile, readTypiaPluginOptions(cwd, *tsconfigPath))
    if len(tdiags) > 0 {
      writeTypiaTransformDiagnostics(os.Stderr, tdiags, cwd)
      return 3
    }
    source, ok := typiaSourceFileText(target)
    if !ok {
      fmt.Fprintf(os.Stderr, "typia transform: source text unavailable for %s\n", absFile)
      return 3
    }
    transformed, err := applyTypiaSourceRewrites(source, rewrites)
    if err != nil {
      fmt.Fprintf(os.Stderr, "typia transform: source rewrite: %v\n", err)
      return 3
    }
    transformed = typiaadapter.CleanupTypeScriptTransformText(transformed)
    if *out == "" {
      fmt.Fprint(os.Stdout, transformed)
      return 0
    }
    if err := os.WriteFile(*out, []byte(transformed), 0o644); err != nil {
      fmt.Fprintf(os.Stderr, "typia transform: write %s: %v\n", *out, err)
      return 3
    }
    return 0
  }

  // output == "js": run the emit pipeline so typia's rewrite lands in the
  // emitted JS file.
  rewriteSet := driver.NewRewriteSet()
  _, _, tdiags := collectTypiaRewrites(prog, cwd, true, true, absFile, rewriteSet, readTypiaPluginOptions(cwd, *tsconfigPath))
  if len(tdiags) > 0 {
    writeTypiaTransformDiagnostics(os.Stderr, tdiags, cwd)
    return 3
  }
  var captured []byte
  capture := func(name, text string, _ *shimcompiler.WriteFileData) error {
    if !strings.HasSuffix(filepath.ToSlash(name), ".js") {
      return nil
    }
    captured = []byte(typiaadapter.CleanupTransformedText(text))
    return nil
  }
  _, _, err = prog.EmitFile(rewriteSet, target, capture)
  if err != nil {
    fmt.Fprintf(os.Stderr, "typia transform: emit: %v\n", err)
    return 3
  }
  if captured == nil {
    fmt.Fprintf(os.Stderr, "typia transform: no output produced for %s\n", absFile)
    return 3
  }
  if *out == "" {
    os.Stdout.Write(captured)
    return 0
  }
  if err := os.WriteFile(*out, captured, 0o644); err != nil {
    fmt.Fprintf(os.Stderr, "typia transform: write %s: %v\n", *out, err)
    return 3
  }
  return 0
}

// runTypiaTransformProject walks every source file and writes a JSON map
// keyed by cwd-relative path. Same shape the standalone `ttsc-typia`
// binary returns so the playground UI can consume either source.
func runTypiaTransformProject(prog *driver.Program, cwd, tsconfigPath string) int {
  grouped, diagnostics := collectTypiaSourceRewriteMap(prog, readTypiaPluginOptions(cwd, tsconfigPath))
  type compilerDiag struct {
    File        *string `json:"file"`
    Category    string  `json:"category"`
    Code        string  `json:"code"`
    Line        int     `json:"line,omitempty"`
    Character   int     `json:"character,omitempty"`
    MessageText string  `json:"messageText"`
  }
  type out struct {
    Diagnostics []compilerDiag    `json:"diagnostics,omitempty"`
    TypeScript  map[string]string `json:"typescript"`
  }
  res := out{TypeScript: map[string]string{}}
  for _, diag := range diagnostics {
    fp := diag.File
    res.Diagnostics = append(res.Diagnostics, compilerDiag{
      File:        &fp,
      Category:    "error",
      Code:        diag.Code,
      Line:        diag.Line,
      Character:   diag.Column,
      MessageText: diag.Message,
    })
  }
  for _, file := range prog.SourceFiles() {
    filename := filepath.ToSlash(file.FileName())
    source, ok := typiaSourceFileText(file)
    if !ok {
      continue
    }
    transformed, err := applyTypiaSourceRewrites(source, grouped[filename])
    if err != nil {
      continue
    }
    res.TypeScript[typiaSourceFileKey(cwd, filename)] = typiaadapter.CleanupTypeScriptTransformText(transformed)
  }
  if err := json.NewEncoder(os.Stdout).Encode(res); err != nil {
    fmt.Fprintf(os.Stderr, "typia transform: encode output: %v\n", err)
    return 3
  }
  if len(res.Diagnostics) > 0 {
    return 3
  }
  return 0
}

// typiaTransformDiag mirrors `cmd/ttsc-typia/build.go::typiaTransformDiagnostic`
// for the playground. We can't import the upstream type because it lives in
// `package main`.
type typiaTransformDiag struct {
  File    string
  Line    int
  Column  int
  Code    string
  Message string
}

func (d typiaTransformDiag) String(cwd string) string {
  file := d.File
  if rel, err := filepath.Rel(cwd, file); err == nil {
    file = rel
  }
  if d.Line > 0 {
    return fmt.Sprintf("%s:%d:%d - error TS(%s): %s", file, d.Line, d.Column, d.Code, d.Message)
  }
  return fmt.Sprintf("%s - error TS(%s): %s", file, d.Code, d.Message)
}

type typiaSourceRewrite struct {
  start       int
  end         int
  replacement string
}

func writeTypiaTransformDiagnostics(w *os.File, diagnostics []typiaTransformDiag, cwd string) {
  for _, diag := range diagnostics {
    fmt.Fprintln(w, diag.String(cwd))
  }
}

func newTypiaTransformDiag(site typiaadapter.CallSite, message string) typiaTransformDiag {
  line, column := 0, 0
  if site.File != nil && site.Call != nil {
    pos := site.Call.AsNode().Pos()
    if pos >= 0 {
      l, c := shimscanner.GetECMALineAndByteOffsetOfPosition(site.File, pos)
      line, column = l+1, c+1
    }
  }
  return typiaTransformDiag{
    File:    site.FilePath,
    Line:    line,
    Column:  column,
    Code:    "typia." + site.Module + "." + site.Method,
    Message: message,
  }
}

func collectTypiaRewrites(
  prog *driver.Program,
  cwd string,
  emit bool,
  quiet bool,
  onlyFile string,
  rewrites *driver.RewriteSet,
  pluginOptions typiaadapter.PluginOptions,
) (int, int, []typiaTransformDiag) {
  sites := typiaadapter.CollectCallSites(prog.SourceFiles(), prog.Checker)
  recognized := 0
  diagnostics := []typiaTransformDiag{}
  for _, site := range sites {
    if onlyFile != "" && filepath.ToSlash(site.FilePath) != filepath.ToSlash(onlyFile) {
      continue
    }
    if reason := typiaadapter.UnsupportedReason(site); reason != "" {
      diagnostics = append(diagnostics, newTypiaTransformDiag(site, reason))
      continue
    }
    expr, handled, err := typiaadapter.EmitCallWithOptions(prog, site, pluginOptions)
    if !handled {
      diagnostics = append(diagnostics, newTypiaTransformDiag(site, "method not covered"))
      continue
    }
    if err != nil {
      diagnostics = append(diagnostics, newTypiaTransformDiag(site, err.Error()))
      continue
    }
    rewrites.Add(driver.Rewrite{
      File:          site.File,
      RootName:      site.RootName,
      Namespaces:    site.Namespaces,
      Method:        site.Method,
      Replacement:   expr,
      ConsumeParens: true,
    })
    recognized++
    _ = emit
    _ = quiet
    _ = cwd
  }
  return len(sites), recognized, diagnostics
}

func collectTypiaSourceRewrites(
  prog *driver.Program,
  cwd string,
  onlyFile string,
  pluginOptions typiaadapter.PluginOptions,
) ([]typiaSourceRewrite, []typiaTransformDiag) {
  sites := typiaadapter.CollectCallSites(prog.SourceFiles(), prog.Checker)
  rewrites := []typiaSourceRewrite{}
  diagnostics := []typiaTransformDiag{}
  for _, site := range sites {
    if filepath.ToSlash(site.FilePath) != filepath.ToSlash(onlyFile) {
      continue
    }
    if reason := typiaadapter.UnsupportedReason(site); reason != "" {
      diagnostics = append(diagnostics, newTypiaTransformDiag(site, reason))
      continue
    }
    expr, handled, err := typiaadapter.EmitCallWithOptionsPreservingTypes(prog, site, pluginOptions)
    if !handled {
      diagnostics = append(diagnostics, newTypiaTransformDiag(site, "method not covered"))
      continue
    }
    if err != nil {
      diagnostics = append(diagnostics, newTypiaTransformDiag(site, err.Error()))
      continue
    }
    node := site.Call.AsNode()
    rewrites = append(rewrites, typiaSourceRewrite{
      start:       node.Pos(),
      end:         node.End(),
      replacement: expr,
    })
    _ = cwd
  }
  return rewrites, diagnostics
}

func collectTypiaSourceRewriteMap(
  prog *driver.Program,
  pluginOptions typiaadapter.PluginOptions,
) (map[string][]typiaSourceRewrite, []typiaTransformDiag) {
  sites := typiaadapter.CollectCallSites(prog.SourceFiles(), prog.Checker)
  rewrites := map[string][]typiaSourceRewrite{}
  diagnostics := []typiaTransformDiag{}
  for _, site := range sites {
    file := filepath.ToSlash(site.FilePath)
    if reason := typiaadapter.UnsupportedReason(site); reason != "" {
      diagnostics = append(diagnostics, newTypiaTransformDiag(site, reason))
      continue
    }
    expr, handled, err := typiaadapter.EmitCallWithOptionsPreservingTypes(prog, site, pluginOptions)
    if !handled {
      diagnostics = append(diagnostics, newTypiaTransformDiag(site, "method not covered"))
      continue
    }
    if err != nil {
      diagnostics = append(diagnostics, newTypiaTransformDiag(site, err.Error()))
      continue
    }
    node := site.Call.AsNode()
    rewrites[file] = append(rewrites[file], typiaSourceRewrite{
      start:       node.Pos(),
      end:         node.End(),
      replacement: expr,
    })
  }
  return rewrites, diagnostics
}

func applyTypiaSourceRewrites(source string, rewrites []typiaSourceRewrite) (string, error) {
  sort.SliceStable(rewrites, func(i, j int) bool {
    return rewrites[i].start > rewrites[j].start
  })
  output := source
  for _, rewrite := range rewrites {
    if rewrite.start < 0 || rewrite.end < rewrite.start || rewrite.end > len(output) {
      return "", fmt.Errorf("invalid rewrite range [%d,%d)", rewrite.start, rewrite.end)
    }
    output = output[:rewrite.start] + rewrite.replacement + output[rewrite.end:]
  }
  return output, nil
}

func typiaSourceFileText(target any) (string, bool) {
  type sourceText interface {
    Text() string
  }
  if file, ok := target.(sourceText); ok {
    return file.Text(), true
  }
  return "", false
}

func typiaSourceFileKey(cwd, file string) string {
  rel, err := filepath.Rel(cwd, filepath.FromSlash(file))
  if err != nil || rel == ".." || strings.HasPrefix(rel, ".."+string(os.PathSeparator)) {
    return filepath.ToSlash(file)
  }
  return filepath.ToSlash(rel)
}

// readTypiaPluginOptions mirrors typia's CLI flag-reading helper: it scans
// tsconfig.json for the typia plugin entry and toggles per-feature options.
// Returns the zero value when the project doesn't list typia/lib/transform.
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
    Undefined:  regexp.MustCompile(`(?s)"undefined"\s*:\s*true`).MatchString(text),
  }
}
