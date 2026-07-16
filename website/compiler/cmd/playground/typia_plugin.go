// typia plugin wiring for the website's playground wasm.
//
// Mirrors the dispatch flow of typia's `cmd/ttsc-typia/{build,transform}.go`,
// but reframes it as a host.Plugin so the playground wasm can run typia's
// real transform inline. Whereas the standalone `ttsc-typia` binary owns
// its own package-level stdout/stderr, here we rely on host.runWithCapturedIO
// to redirect `os.Stdout` / `os.Stderr` for us — the Plugin contract.
//
// Public surface this delegates into (all live under `packages/typia/native/`):
//
//   - `adapter`         — call-site walker and per-feature `PluginOptions`.
//   - `core/context`    — the `ITypiaContext_Extras` diagnostic sink.
//   - `transform`       — the AST-integration node transformer.
//   - `driver`          — Program loader + `EmitWithPluginTransformers`.
//
// The transform is the post-refactor AST path: typia's per-file transformer
// runs inside tsgo's emit pipeline (sharing the EmitContext), returns AST, and
// tsgo's module-transform aliases the injected namespace imports. There is no
// text-splice RewriteSet or cleanup pass anymore.
package main

import (
  "encoding/json"
  "flag"
  "fmt"
  "io"
  "os"
  "path/filepath"
  "regexp"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimcompiler "github.com/microsoft/typescript-go/shim/compiler"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  shimscanner "github.com/microsoft/typescript-go/shim/scanner"

  "github.com/samchon/ttsc/packages/ttsc/driver"
  typiaadapter "github.com/samchon/typia/packages/typia/native/adapter"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativetransform "github.com/samchon/typia/packages/typia/native/transform"
)

type typiaPlugin struct{}

type typiaCompilerDiag struct {
  File        *string `json:"file"`
  Category    string  `json:"category"`
  Code        string  `json:"code"`
  Line        int     `json:"line,omitempty"`
  Character   int     `json:"character,omitempty"`
  MessageText string  `json:"messageText"`
}

type typiaTransformProjectOutput struct {
  Diagnostics []typiaCompilerDiag `json:"diagnostics,omitempty"`
  TypeScript  map[string]string   `json:"typescript"`
}

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

  shouldEmit := !prog.ParsedConfig.ParsedConfig.CompilerOptions.NoEmit.IsTrue()
  transformDiags := []typiaPlaygroundDiag{}
  typiaTransform := newTypiaTransform(prog, cwd, *tsconfigPath, &transformDiags)
  if !*quiet {
    fmt.Fprintf(os.Stdout, "// typia build: tsconfig=%s cwd=%s emit=%v\n", *tsconfigPath, cwd, shouldEmit)
  }
  if shouldEmit {
    emitted := []string{}
    writeFile := shimcompiler.WriteFile(func(fileName, text string, _ *shimcompiler.WriteFileData) error {
      emitted = append(emitted, fileName)
      return driver.DefaultWriteFile(fileName, text)
    })
    eDiags, err := prog.EmitWithPluginTransformers([]driver.PluginTransform{typiaTransform}, writeFile)
    if err != nil {
      fmt.Fprintf(os.Stderr, "typia build: emit failed: %v\n", err)
      return 3
    }
    for _, d := range eDiags {
      fmt.Fprintln(os.Stderr, "  -", d.String())
    }
    if !*quiet {
      fmt.Fprintf(os.Stdout, "// typia build: emitted=%d files\n", len(emitted))
    }
  }
  if len(transformDiags) > 0 {
    writeTypiaPlaygroundDiagnostics(transformDiags, cwd)
    return 3
  }
  return 0
}

// runTypiaTransform is the port of typia's `cmd/ttsc-typia/transform.go`
// runTransform. The playground only needs the project-wide TS rewrite mode
// (the JSON-shaped output that maps file path → rewritten source); we keep
// the single-file branch so command-line smoke tests stay close to the CLI.
func runTypiaTransform(args []string) int {
  fs := flag.NewFlagSet("transform", flag.ContinueOnError)
  fs.SetOutput(os.Stderr)
  file := fs.String("file", "", "absolute or cwd-relative path of the .ts file to transform")
  tsconfigPath := fs.String("tsconfig", "tsconfig.json", "tsconfig.json owning --file")
  cwdOverride := fs.String("cwd", "", "override the working directory")
  out := fs.String("out", "", "write output to PATH")
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

  transformDiags := []typiaPlaygroundDiag{}
  typiaTransform := newTypiaTransform(prog, cwd, *tsconfigPath, &transformDiags)

  if *file == "" {
    if *out != "" {
      fmt.Fprintln(os.Stderr, "typia transform: --out requires --file")
      return 2
    }
    return runTypiaTransformProject(prog, cwd, typiaTransform, &transformDiags)
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
    text := transformFileToTypeScript(prog, typiaTransform, target)
    if len(transformDiags) > 0 {
      writeTypiaPlaygroundDiagnostics(transformDiags, cwd)
      return 3
    }
    return writeTypiaSingleOutput(text, *out)
  }

  // output == "js": run the emit pipeline so typia's rewrite lands in the
  // emitted JS file.
  var captured string
  found := false
  writeFile := shimcompiler.WriteFile(func(fileName, text string, _ *shimcompiler.WriteFileData) error {
    if sameTypiaSourceStem(absFile, fileName) {
      captured = text
      found = true
    }
    return nil
  })
  if _, err := prog.EmitWithPluginTransformers([]driver.PluginTransform{typiaTransform}, writeFile); err != nil {
    fmt.Fprintf(os.Stderr, "typia transform: emit: %v\n", err)
    return 3
  }
  if len(transformDiags) > 0 {
    writeTypiaPlaygroundDiagnostics(transformDiags, cwd)
    return 3
  }
  if !found {
    fmt.Fprintf(os.Stderr, "typia transform: no output produced for %s\n", absFile)
    return 3
  }
  return writeTypiaSingleOutput(captured, *out)
}

// runTypiaTransformProject walks every non-declaration source file and writes a
// JSON map keyed by cwd-relative path — the same shape the standalone
// `ttsc-typia` binary returns so the playground UI can consume either source.
func runTypiaTransformProject(
  prog *driver.Program,
  cwd string,
  typiaTransform driver.PluginTransform,
  transformDiags *[]typiaPlaygroundDiag,
) int {
  typescript := map[string]string{}
  for _, sf := range prog.SourceFiles() {
    if sf.IsDeclarationFile {
      continue
    }
    key := typiaSourceFileKey(cwd, filepath.ToSlash(sf.FileName()))
    if filepath.IsAbs(key) || key == ".." || strings.HasPrefix(key, "../") {
      continue
    }
    typescript[key] = transformFileToTypeScript(prog, typiaTransform, sf)
  }
  return writeTypiaTransformProjectOutput(os.Stdout, os.Stderr, typescript, *transformDiags)
}

func writeTypiaTransformProjectOutput(
  stdout io.Writer,
  stderr io.Writer,
  typescript map[string]string,
  transformDiags []typiaPlaygroundDiag,
) int {
  res := typiaTransformProjectOutput{TypeScript: typescript}
  for _, diag := range transformDiags {
    var fp *string
    if diag.File != "" {
      normalized := filepath.ToSlash(diag.File)
      fp = &normalized
    }
    res.Diagnostics = append(res.Diagnostics, typiaCompilerDiag{
      File:        fp,
      Category:    "error",
      Code:        diag.Code,
      Line:        diag.Line,
      Character:   diag.Column,
      MessageText: diag.Message,
    })
  }
  if err := json.NewEncoder(stdout).Encode(res); err != nil {
    fmt.Fprintf(stderr, "typia transform: encode output: %v\n", err)
    return 3
  }
  if len(res.Diagnostics) > 0 {
    return 3
  }
  return 0
}

// newTypiaTransform builds the AST-integration plugin transform: typia's per
// file node transformer bound to this program's plugin options, recording any
// transform diagnostics into `sink`.
func newTypiaTransform(
  prog *driver.Program,
  cwd string,
  tsconfigPath string,
  sink *[]typiaPlaygroundDiag,
) driver.PluginTransform {
  transformOptions := readTypiaPluginOptions(cwd, tsconfigPath).TransformOptions()
  extras := nativecontext.ITypiaContext_Extras{
    AddDiagnostic: func(diag *nativecontext.ITypiaDiagnostic) int {
      *sink = append(*sink, typiaPlaygroundDiagFrom(diag))
      return len(*sink)
    },
  }
  return func(ec *shimprinter.EmitContext, sf *shimast.SourceFile) *shimast.SourceFile {
    return nativetransform.Transform(prog, &transformOptions, extras, ec)(sf)
  }
}

// transformFileToTypeScript runs typia's node transformer on one source file in
// a fresh EmitContext and prints the result as TypeScript. It deliberately skips
// the JS script transformers (type-erase, module-transform): the caller wants
// TS, so the injected namespace imports stay as ES imports.
func transformFileToTypeScript(
  prog *driver.Program,
  typiaTransform driver.PluginTransform,
  sf *shimast.SourceFile,
) string {
  options := prog.TSProgram.Options()
  ec := shimprinter.NewEmitContext()
  result := sf
  if next := typiaTransform(ec, result); next != nil {
    result = next
  }
  shimast.SetParentInChildrenUnset(result.AsNode())
  writer := shimprinter.NewTextWriter(options.NewLine.GetNewLineCharacter(), 0)
  printer := shimprinter.NewPrinter(shimprinter.PrinterOptions{NewLine: options.NewLine}, shimprinter.PrintHandlers{}, ec)
  printer.Write(result.AsNode(), result, writer, nil)
  return writer.String()
}

func writeTypiaSingleOutput(text, outPath string) int {
  if outPath == "" {
    fmt.Fprint(os.Stdout, text)
    return 0
  }
  if dir := filepath.Dir(outPath); dir != "" {
    if err := os.MkdirAll(dir, 0o755); err != nil {
      fmt.Fprintf(os.Stderr, "typia transform: mkdir: %v\n", err)
      return 3
    }
  }
  if err := os.WriteFile(outPath, []byte(text), 0o644); err != nil {
    fmt.Fprintf(os.Stderr, "typia transform: write %s: %v\n", outPath, err)
    return 3
  }
  return 0
}

// sameTypiaSourceStem reports whether an emitted .js path corresponds to a .ts
// source path by comparing their extension-stripped values.
func sameTypiaSourceStem(tsPath, jsPath string) bool {
  return strings.TrimSuffix(filepath.ToSlash(jsPath), filepath.Ext(jsPath)) ==
    strings.TrimSuffix(filepath.ToSlash(tsPath), filepath.Ext(filepath.ToSlash(tsPath)))
}

// typiaPlaygroundDiag mirrors `cmd/ttsc-typia/build.go::typiaTransformDiagnostic`
// for the playground. We can't import the upstream type because it lives in
// `package main`.
type typiaPlaygroundDiag struct {
  File    string
  Line    int
  Column  int
  Code    string
  Message string
}

func typiaPlaygroundDiagFrom(diag *nativecontext.ITypiaDiagnostic) typiaPlaygroundDiag {
  out := typiaPlaygroundDiag{Message: "typia transform error"}
  if diag == nil {
    return out
  }
  if diag.Code != "" {
    out.Code = diag.Code
  }
  if diag.Message != "" {
    out.Message = diag.Message
  }
  if diag.File != nil {
    out.File = diag.File.FileName()
    if diag.Start != nil && *diag.Start >= 0 {
      line, column := shimscanner.GetECMALineAndByteOffsetOfPosition(diag.File, *diag.Start)
      out.Line = line + 1
      out.Column = column + 1
    }
  }
  return out
}

func (d typiaPlaygroundDiag) String(cwd string) string {
  code := d.Code
  if code == "" {
    code = "typia"
  }
  if d.File == "" {
    return fmt.Sprintf("error TS(%s): %s", code, d.Message)
  }
  file := d.File
  if rel, err := filepath.Rel(cwd, file); err == nil {
    file = rel
  }
  if d.Line > 0 {
    return fmt.Sprintf("%s:%d:%d - error TS(%s): %s", file, d.Line, d.Column, code, d.Message)
  }
  return fmt.Sprintf("%s - error TS(%s): %s", file, code, d.Message)
}

func writeTypiaPlaygroundDiagnostics(diagnostics []typiaPlaygroundDiag, cwd string) {
  for _, diag := range diagnostics {
    fmt.Fprintln(os.Stderr, diag.String(cwd))
  }
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
    Undefined:  readBooleanTypiaPluginOption(text, "undefined"),
  }
}

func readBooleanTypiaPluginOption(text string, name string) *bool {
  matched := regexp.MustCompile(`(?s)"` + regexp.QuoteMeta(name) + `"\s*:\s*(true|false)`).FindStringSubmatch(text)
  if matched == nil {
    return nil
  }
  value := matched[1] == "true"
  return &value
}
