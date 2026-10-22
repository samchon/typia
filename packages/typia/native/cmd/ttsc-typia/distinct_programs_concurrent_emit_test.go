package main

import (
  "crypto/sha256"
  "fmt"
  "os"
  "path/filepath"
  "regexp"
  "strings"
  "sync"
  "testing"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimcompiler "github.com/microsoft/typescript-go/shim/compiler"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  shimtspath "github.com/microsoft/typescript-go/shim/tspath"
  "github.com/samchon/ttsc/packages/ttsc/driver"
  "github.com/samchon/typia/packages/typia/native/adapter"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  "github.com/samchon/typia/packages/typia/native/transform"
)

// TestDistinctProgramsConcurrentEmit verifies independent Programs retain their
// own generated nodes during overlapping emits across programmer families.
//
// NodeFactory arenas are mutable. A helper dropping its emit context used to
// reach a package-global arena even when each worker owned its own Program.
// The serial control proves real validators were emitted before concurrency;
// the race-enabled canonical command additionally detects shared arena access.
//
// 1. Load two isolated Programs over the same type graph and separate markers.
// 2. Emit both serially and require generated assert/is helpers and own markers.
// 3. Emit sixteen times per Program concurrently and require identical bytes.
//
// @evidence contracts/testing.md#behavioral-verification Calls the real transform through EmitWithPluginTransformer with each file's EmitContext. Every output must contain both generated validator helpers and its authored marker; repeated parallel outputs must equal the serial output, and the race detector rejects shared mutable arenas.
// @evidence contracts/testing.md#independent-expectations The authored sources require string, number and array checks and distinct marker literals. The serial comparison only proves repeatability, not semantic correctness; the generated helper checks prevent untransformed stubs from passing, while existing TypeScript execution suites own runtime verdicts.
// @evidence contracts/testing.md#distinguishing-cases Serial controls precede overlapping workers, each owning one Program. Nested arrays, optional objects, unions and validator, JSON, HTTP, protobuf, notation, plain, random and functional producers exercise shared helper paths; foreign marker output and nondeterministic bytes fail independently of race detection.
// @evidence contracts/testing.md#execution-ownership Go's native unit population loads in-process Programs using shared immutable declarations and separate writable fixture roots. It builds no host binary and launches no JavaScript runtime; Program.Close and fixture cleanup release every test-owned resource.
func TestDistinctProgramsConcurrentEmit(t *testing.T) {
  programs := make([]*driver.Program, 2)
  for index := range programs {
    root := ttscTypiaTestFixtureDirectory(t, "concurrent-emit-")
    source := distinctProgramsConcurrentEmitSource + fmt.Sprintf("\nexport const owner = %q;\n", fmt.Sprintf("program-%d", index))
    for name, text := range map[string]string{
      "index.ts": source,
      "tsconfig.json": `{"compilerOptions":{"target":"es2022","module":"nodenext","moduleResolution":"nodenext","strict":true,"skipLibCheck":true,"esModuleInterop":true,"outDir":"out"},"files":["index.ts"]}`,
    } {
      if err := os.WriteFile(filepath.Join(root, name), []byte(text), 0o644); err != nil { t.Fatal(err) }
    }
    program, diagnostics, err := driver.LoadProgram(root, "tsconfig.json", driver.LoadProgramOptions{ForceEmit:true})
    if err != nil || driver.CountErrors(diagnostics) != 0 { t.Fatalf("load: %v; %+v", err, diagnostics) }
    t.Cleanup(func() { if err := program.Close(); err != nil { t.Error(err) } })
    if diagnostics := program.Diagnostics(); driver.CountErrors(diagnostics) != 0 { t.Fatalf("typecheck: %+v", diagnostics) }
    programs[index] = program
  }
  emit := func(index int) (string, error) {
    program := programs[index]
    metadata.MetadataDefaultLibrary_register(program.Checker, func(source *shimast.SourceFile) bool { return source != nil && program.TSProgram.IsLibFile(source) })
    defer metadata.MetadataDefaultLibrary_release(program.Checker)
    options := (adapter.PluginOptions{}).TransformOptions()
    var mu sync.Mutex
    var transformed []*nativecontext.ITypiaDiagnostic
    var javascript string
    extras := nativecontext.ITypiaContext_Extras{Shared:&sync.Map{}, AddDiagnostic:func(d *nativecontext.ITypiaDiagnostic) int { mu.Lock(); defer mu.Unlock(); transformed=append(transformed,d); return len(transformed) }}
    diagnostics, err := program.EmitWithPluginTransformer(func(ec *shimprinter.EmitContext, source *shimast.SourceFile) *shimast.SourceFile {
      return transform.Transform(program, &options, extras, ec)(source)
    }, shimcompiler.WriteFile(func(name shimtspath.RootedFilePath, text string, _ *shimcompiler.WriteFileData) error {
      mu.Lock(); defer mu.Unlock()
      if filepath.Base(string(name)) == "index.js" { javascript = text }
      return nil
    }))
    if err != nil || driver.CountErrors(diagnostics) != 0 || len(transformed) != 0 { return "", fmt.Errorf("emit: %v; %+v; %+v",err,diagnostics,transformed) }
    for _, required := range []string{"const _ao0", "const _io0", "Array.isArray", fmt.Sprintf("program-%d",index)} {
      if !strings.Contains(javascript, required) { return "", fmt.Errorf("missing %q in generated output:\n%s",required,javascript) }
    }
    if !regexp.MustCompile(`(?:"string"\s*===\s*typeof input\.name\b|typeof input\.name\s*===\s*"string")`).MatchString(javascript) {return "",fmt.Errorf("missing name string guard:\n%s",javascript)}
    if strings.Contains(javascript, fmt.Sprintf("program-%d",1-index)) { return "", fmt.Errorf("output carries foreign Program marker") }
    return javascript,nil
  }
  controls:=make([]string,len(programs))
  for index:=range programs { var err error; controls[index],err=emit(index);if err!=nil {t.Fatalf("serial: %v",err)};t.Logf("serial output %d SHA256: %x",index,sha256.Sum256([]byte(controls[index]))) }
  start:=make(chan struct{});failures:=make(chan error,len(programs));var workers sync.WaitGroup
  for index:=range programs {workers.Add(1);go func(){defer workers.Done();<-start;for range 16 {output,err:=emit(index);if err!=nil {failures<-err;return};if output!=controls[index] {failures<-fmt.Errorf("Program %d changed emitted bytes",index);return}}}()}
  close(start);workers.Wait();close(failures)
  for err:=range failures {t.Error(err)}
}

const distinctProgramsConcurrentEmitSource = `import typia from "typia";
interface RecordType {
  name: string;
  values: { key: string; value: number; enabled: boolean }[];
  optional?: { nested: { label: string; count: number } };
  union: { type: "a"; text: string } | { type: "b"; count: number };
}
export const assertRecord = typia.createAssert<RecordType>();
export const isRecord = typia.createIs<RecordType>();
export const validateRecord = typia.createValidate<RecordType>();
export const stringify = typia.json.createAssertStringify<RecordType>();
export const parse = typia.json.createAssertParse<RecordType>();
export const query = typia.http.createAssertQuery<{ name: string; values: number[] }>();
export const headers = typia.http.createAssertHeaders<{ name: string }>();
export const encode = typia.protobuf.createAssertEncode<RecordType>();
export const decode = typia.protobuf.createAssertDecode<RecordType>();
export const decodeMap = typia.protobuf.createDecode<{ values: Map<string, number> }>();
export const decodeRecord = typia.protobuf.createDecode<{ values: Record<string, number> }>();
export const camel = typia.notations.createCamel<RecordType>();
export const clone = typia.plain.createAssertClone<RecordType>();
export const random = typia.createRandom<RecordType>();
export const functional = typia.functional.assertFunction((input: RecordType): RecordType => input);
`
