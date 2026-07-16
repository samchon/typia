package main

import (
  "bytes"
  "encoding/json"
  "flag"
  "fmt"
  "os"
  "path/filepath"
  "sort"
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimcompiler "github.com/microsoft/typescript-go/shim/compiler"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  "github.com/samchon/ttsc/packages/ttsc/driver"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  nativetransform "github.com/samchon/typia/packages/typia/native/transform"
)

// runTransform is the source-to-source host the ttsc transform stage and the
// `typia generate` wizard drive. Unlike `build` (which emits .js), it returns
// transformed TypeScript: typia's per-file node transformer runs in an
// EmitContext and the result SourceFile is printed back as TS (no JS script
// transformers), so injected namespace imports stay as ES imports the caller
// can type-strip per file. With no --file it emits a JSON envelope of every
// project source keyed by its cwd-relative path; with --file it prints one file.
func runTransform(args []string) int {
  fs := flag.NewFlagSet("transform", flag.ContinueOnError)
  fs.SetOutput(stderr)
  file := fs.String("file", "", "absolute or cwd-relative path of the .ts file to transform")
  tsconfigPath := fs.String("tsconfig", "tsconfig.json", "tsconfig.json owning the project")
  cwdOverride := fs.String("cwd", "", "override the working directory")
  out := fs.String("out", "", "write single-file output to PATH instead of stdout")
  rewriteMode := fs.String("rewrite-mode", "typia", "native rewrite backend id")
  output := fs.String("output", defaultTransformOutput(), "single-file output kind: js or ts")
  _ = fs.String("plugins-json", "", "ordered ttsc plugin payload")
  if err := fs.Parse(args); err != nil {
    return 2
  }
  if *rewriteMode != "none" && *rewriteMode != "typia" {
    fmt.Fprintf(stderr, "ttsc-typia transform: unknown --rewrite-mode value %q\n", *rewriteMode)
    return 2
  }
  if *output != "js" && *output != "ts" {
    fmt.Fprintf(stderr, "ttsc-typia transform: unknown --output value %q\n", *output)
    return 2
  }
  cwd := *cwdOverride
  if cwd == "" {
    var err error
    cwd, err = os.Getwd()
    if err != nil {
      fmt.Fprintf(stderr, "ttsc-typia transform: cwd: %v\n", err)
      return 2
    }
  }

  prog, diags, err := driver.LoadProgram(cwd, *tsconfigPath, driver.LoadProgramOptions{
    ForceEmit: true,
  })
  if err != nil {
    fmt.Fprintf(stderr, "ttsc-typia transform: %v\n", err)
    return 2
  }
  if len(diags) > 0 {
    driver.WritePrettyDiagnostics(stderr, diags, cwd)
    return 2
  }
  defer prog.Close()

  transformDiags := []typiaTransformDiagnostic{}
  pluginOptions := readTypiaPluginOptions(cwd, *tsconfigPath)
  transformOptions := pluginOptions.TransformOptions()
  extras := nativecontext.ITypiaContext_Extras{
    AddDiagnostic: func(diag *nativecontext.ITypiaDiagnostic) int {
      transformDiags = append(transformDiags, typiaTransformDiagnosticFrom(diag))
      return len(transformDiags)
    },
  }
  typiaTransform := func(ec *shimprinter.EmitContext, sf *shimast.SourceFile) *shimast.SourceFile {
    if *rewriteMode != "typia" {
      return sf
    }
    return nativetransform.Transform(prog, &transformOptions, extras, ec)(sf)
  }

  if *file == "" {
    if *out != "" {
      fmt.Fprintln(stderr, "ttsc-typia transform: --out requires --file")
      return 2
    }
    return runTransformProject(prog, cwd, typiaTransform, &transformDiags)
  }

  absFile := *file
  if !filepath.IsAbs(absFile) {
    absFile = filepath.Join(cwd, absFile)
  }
  absFile = filepath.ToSlash(absFile)
  target := prog.SourceFile(absFile)
  if target == nil {
    fmt.Fprintf(stderr, "ttsc-typia transform: source file is not in program: %s\n", absFile)
    return 2
  }
  if *output == "js" {
    return runTransformSingleJS(prog, typiaTransform, target, absFile, *out)
  }
  text := transformFileToTypeScript(prog, typiaTransform, target)
  return writeSingleOutput(text, *out)
}

// runTransformProject prints every non-declaration project source as transformed
// TypeScript and encodes the JSON envelope the ttsc host expects. Alongside the
// transformed sources it reports, per file, the source files owning the
// declarations the typia analysis consulted (`dependencies`), which the ttsc
// consumer registers with the bundler so persistent caches and watch mode
// invalidate generated validators when a consulted type's file changes.
func runTransformProject(
  prog *driver.Program,
  cwd string,
  typiaTransform driver.PluginTransform,
  transformDiags *[]typiaTransformDiagnostic,
) int {
  out := transformProjectOutput{
    Diagnostics: []transformCompilerDiagnostic{},
    TypeScript:  map[string]string{},
  }
  collector := newTransformDependencyCollector(cwd, func(fileName string) bool {
    sf := prog.SourceFile(fileName)
    return sf != nil && prog.TSProgram.IsLibFile(sf)
  })
  schemametadata.MetadataDependency_listen(prog.Checker, collector.Touch)
  defer schemametadata.MetadataDependency_release(prog.Checker)
  for _, sf := range prog.SourceFiles() {
    if sf.IsDeclarationFile {
      continue
    }
    key := sourceFileKey(cwd, filepath.ToSlash(sf.FileName()))
    if filepath.IsAbs(key) || key == ".." || strings.HasPrefix(key, "../") {
      continue
    }
    collector.Begin(key)
    out.TypeScript[key] = transformFileToTypeScript(prog, typiaTransform, sf)
  }
  out.Dependencies = collector.ToJSON()
  for _, diag := range *transformDiags {
    out.Diagnostics = append(out.Diagnostics, transformDiagnosticToCompilerDiagnostic(diag))
  }
  if err := json.NewEncoder(stdout).Encode(out); err != nil {
    fmt.Fprintf(stderr, "ttsc-typia transform: encode output: %v\n", err)
    return 3
  }
  if len(out.Diagnostics) > 0 {
    return 3
  }
  return 0
}

// transformFileToTypeScript runs typia's node transformer on one source file in
// a fresh EmitContext and prints the result as TypeScript. It deliberately skips
// the JS script transformers (type-erase, module-transform): the caller wants TS.
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

// runTransformSingleJS emits a single file's JS through the full node-path emit
// pipeline and writes it to stdout or --out.
func runTransformSingleJS(
  prog *driver.Program,
  typiaTransform driver.PluginTransform,
  target *shimast.SourceFile,
  absFile string,
  outPath string,
) int {
  var captured string
  found := false
  targetKey := filepath.ToSlash(absFile)
  writeFile := shimcompiler.WriteFile(func(fileName, text string, _ *shimcompiler.WriteFileData) error {
    // The emitted .js maps back to its .ts; match on basename stem.
    if sameSourceStem(targetKey, fileName) {
      captured = text
      found = true
    }
    return nil
  })
  if _, err := prog.EmitWithPluginTransformers([]driver.PluginTransform{typiaTransform}, writeFile); err != nil {
    fmt.Fprintf(stderr, "ttsc-typia transform: emit: %v\n", err)
    return 3
  }
  if !found {
    fmt.Fprintf(stderr, "ttsc-typia transform: no output produced for %s\n", absFile)
    return 3
  }
  return writeSingleOutput(captured, outPath)
}

// sameSourceStem reports whether an emitted .js path corresponds to a .ts source
// path by comparing their extension-stripped values.
func sameSourceStem(tsPath, jsPath string) bool {
  return strings.TrimSuffix(filepath.ToSlash(jsPath), filepath.Ext(jsPath)) ==
    strings.TrimSuffix(tsPath, filepath.Ext(tsPath))
}

func writeSingleOutput(text, outPath string) int {
  if outPath == "" {
    if _, err := bytes.NewReader([]byte(text)).WriteTo(stdout); err != nil {
      fmt.Fprintf(stderr, "ttsc-typia transform: write stdout: %v\n", err)
      return 3
    }
    return 0
  }
  if dir := filepath.Dir(outPath); dir != "" {
    if err := os.MkdirAll(dir, 0o755); err != nil {
      fmt.Fprintf(stderr, "ttsc-typia transform: mkdir: %v\n", err)
      return 3
    }
  }
  if err := os.WriteFile(outPath, []byte(text), 0o644); err != nil {
    fmt.Fprintf(stderr, "ttsc-typia transform: write %s: %v\n", outPath, err)
    return 3
  }
  return 0
}

func defaultTransformOutput() string {
  if os.Getenv("TYPIA_TTSC_TRANSFORM_OUTPUT") == "js" {
    return "js"
  }
  return "ts"
}

type transformProjectOutput struct {
  Diagnostics []transformCompilerDiagnostic `json:"diagnostics,omitempty"`
  TypeScript  map[string]string             `json:"typescript"`
  // Dependencies maps each transformed file (same project-relative keys as
  // TypeScript) to the source files owning the declarations typia's analysis
  // consulted for it. Values are project-relative when the file lives under the
  // project and absolute otherwise; the consumer absolutizes against the
  // project root and drops the file itself. Compiler-owned default library
  // files are excluded (toolchain-versioned, not project inputs);
  // `node_modules` declaration files are included.
  Dependencies map[string][]string `json:"dependencies,omitempty"`
}

// transformDependencyCollector accumulates the consulted-declaration files the
// metadata dependency listener reports while one project file is transformed,
// attributing them to that file's envelope key.
type transformDependencyCollector struct {
  cwd     string
  current string
  files   map[string]map[string]bool
  // isLibraryFile reports the compiler's own classification of a file as a
  // default library. Classification must come from the program, never from a
  // filename pattern: a project's own ambient declaration file may legitimately
  // be named `lib.custom.d.ts`, and dropping it by basename silently loses
  // cache invalidation for the types it declares (samchon/typia#2108).
  isLibraryFile func(fileName string) bool
  // values memoizes fileName -> envelope value ("" for a dropped file): the
  // listener reports the same declaration files repeatedly across call sites.
  values map[string]string
}

func newTransformDependencyCollector(
  cwd string,
  isLibraryFile func(fileName string) bool,
) *transformDependencyCollector {
  return &transformDependencyCollector{
    cwd:           cwd,
    isLibraryFile: isLibraryFile,
    files:         map[string]map[string]bool{},
    values:        map[string]string{},
  }
}

// Begin attributes subsequent touches to the given envelope key.
func (collector *transformDependencyCollector) Begin(key string) {
  collector.current = key
}

// Touch records one consulted declaration file for the current key. Default
// library files, virtual URI sources (e.g. tsgo's `bundled:///` libraries),
// and the transformed file itself are dropped so the envelope carries only
// actionable project inputs.
func (collector *transformDependencyCollector) Touch(fileName string) {
  if collector.current == "" {
    return
  }
  value, memoized := collector.values[fileName]
  if memoized == false {
    value = collector.value(fileName)
    collector.values[fileName] = value
  }
  if value == "" || value == collector.current {
    return
  }
  set := collector.files[collector.current]
  if set == nil {
    set = map[string]bool{}
    collector.files[collector.current] = set
  }
  set[value] = true
}

// value renders one reported file as its envelope value, or "" when the file
// must be dropped: virtual URI sources (e.g. tsgo's `bundled:///` embedded
// libraries) cannot be watched, and files the compiler classifies as default
// libraries (on-disk in `noembed` or `libReplacement` configurations) are
// toolchain inputs, not project inputs.
func (collector *transformDependencyCollector) value(fileName string) string {
  if strings.Contains(fileName, "://") || collector.isLibraryFile(fileName) {
    return ""
  }
  return sourceFileKey(collector.cwd, filepath.ToSlash(fileName))
}

// ToJSON renders the collected sets as the envelope's `dependencies` map with
// deterministically sorted values, or nil when nothing was collected.
func (collector *transformDependencyCollector) ToJSON() map[string][]string {
  if len(collector.files) == 0 {
    return nil
  }
  output := map[string][]string{}
  for key, set := range collector.files {
    if len(set) == 0 {
      continue
    }
    values := make([]string, 0, len(set))
    for value := range set {
      values = append(values, value)
    }
    sort.Strings(values)
    output[key] = values
  }
  if len(output) == 0 {
    return nil
  }
  return output
}

type transformCompilerDiagnostic struct {
  File        *string `json:"file"`
  Category    string  `json:"category"`
  Code        string  `json:"code"`
  Line        int     `json:"line,omitempty"`
  Character   int     `json:"character,omitempty"`
  MessageText string  `json:"messageText"`
}

func sourceFileKey(cwd string, file string) string {
  rel, err := filepath.Rel(cwd, filepath.FromSlash(file))
  if err != nil {
    return filepath.ToSlash(file)
  }
  return filepath.ToSlash(rel)
}

func transformDiagnosticToCompilerDiagnostic(diag typiaTransformDiagnostic) transformCompilerDiagnostic {
  var ptr *string
  if diag.File != "" {
    normalized := filepath.ToSlash(diag.File)
    ptr = &normalized
  }
  return transformCompilerDiagnostic{
    File:        ptr,
    Category:    "error",
    Code:        diag.Code,
    Line:        diag.Line,
    Character:   diag.Column,
    MessageText: diag.Message,
  }
}
