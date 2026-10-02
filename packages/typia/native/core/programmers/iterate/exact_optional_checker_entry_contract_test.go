package iterate

import (
  "fmt"
  shimast "github.com/microsoft/typescript-go/shim/ast"
  "github.com/samchon/ttsc/packages/ttsc/driver"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  factories "github.com/samchon/typia/packages/typia/native/core/factories"
  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  "os"
  "path/filepath"
  "testing"
)

// TestExactOptionalCheckerEntryContract verifies compiler metadata reaches optional guards.
//
// The real Go checker reads optional-only, optional undefined-union and required
// undefined-union properties under unset/false/true exactOptionalPropertyTypes.
// Plugin undefined is independently omitted/false/true. Strict entries must
// remove optional decoding only in the exact=true, undefined=false conjunction,
// then allow an absent key through the object guard without mutating metadata.
//
// @evidence contracts/testing.md#behavioral-verification Loads three real TypeScript compiler contexts in process, analyzes all three property types, builds Feature_object_entries and inspects the resulting check_object AST for each undefined option row.
// @evidence contracts/testing.md#independent-expectations Authored property declarations and literal optional/required tables define the metadata oracle; exact optional-only requires an absence short circuit, while explicit undefined unions remain value-valid.
// @evidence contracts/testing.md#distinguishing-cases Compiler unset/false/true crosses plugin undefined omitted/false/true. Optional-only differs from optional and required explicit unions; only the strict entry changes decoded Optional and adds !in ||, and source metadata must remain unchanged.
// @evidence contracts/testing.md#execution-ownership The native Go runner loads temporary tsconfig/source files with driver.LoadProgram and closes each program. Checker, metadata and emitter calls remain in process, without Node or compiler subprocesses. This metadata/AST case does not claim JavaScript runtime observations.
func TestExactOptionalCheckerEntryContract(t *testing.T) {
  compilerRows := []struct {
    name, setting    string
    optionalRequired bool
  }{
    {"unset", "", false}, {"false", `,"exactOptionalPropertyTypes":false`, false}, {"true", `,"exactOptionalPropertyTypes":true`, true},
  }
  yes, no := true, false
  undefinedRows := []struct {
    name  string
    value *bool
  }{{"omitted", nil}, {"false", &no}, {"true", &yes}}
  expectedOptional := map[string]bool{"optional": true, "optionalUndefined": true, "requiredUndefined": false}
  for _, compiler := range compilerRows {
    t.Run(compiler.name, func(t *testing.T) {
      dir := t.TempDir()
      config := fmt.Sprintf(`{"compilerOptions":{"target":"ES2022","module":"commonjs","moduleResolution":"bundler","ignoreDeprecations":"6.0","strict":true,"skipLibCheck":true%s},"include":["main.ts"]}`, compiler.setting)
      if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(config), 0o644); err != nil {
        t.Fatal(err)
      }
      const sourceText = `interface Example { optional?: string; optionalUndefined?: string | undefined; requiredUndefined: string | undefined; }
let input!: Example;
`
      sourcePath := filepath.Join(dir, "main.ts")
      if err := os.WriteFile(sourcePath, []byte(sourceText), 0o644); err != nil {
        t.Fatal(err)
      }
      program, diagnostics, err := driver.LoadProgram(dir, "tsconfig.json", driver.LoadProgramOptions{})
      if err != nil {
        t.Fatal(err)
      }
      defer program.Close()
      if len(diagnostics) != 0 {
        t.Fatalf("fixture diagnostics: %+v", diagnostics)
      }
      source := program.SourceFile(sourcePath)
      if source == nil || source.Statements == nil || len(source.Statements.Nodes) != 2 {
        t.Fatal("fixture declarations missing")
      }
      declaration := source.Statements.Nodes[1].AsVariableStatement().DeclarationList.AsVariableDeclarationList().Declarations.Nodes[0]
      result := factories.MetadataFactory.Analyze(factories.MetadataFactory_IProps{Checker: program.Checker, Options: factories.MetadataFactory_IOptions{}, Components: metadata.NewMetadataCollection(), Type: program.Checker.GetTypeAtLocation(declaration)})
      if !result.Success || result.Data == nil || len(result.Data.Objects) != 1 {
        t.Fatalf("metadata analysis failed: %+v", result.Errors)
      }
      object := result.Data.Objects[0].Type
      if len(object.Properties) != 3 {
        t.Fatalf("property count=%d", len(object.Properties))
      }
      for _, property := range object.Properties {
        key := property.Key.GetSoleLiteral()
        if key == nil {
          t.Fatal("literal key missing")
        }
        wantRequired := *key == "optional" && compiler.optionalRequired
        if property.Value.Optional != expectedOptional[*key] || property.Value.Required != wantRequired || len(property.Value.Atomics) != 1 || property.Value.Atomics[0].Type != "string" {
          t.Fatalf("%s metadata Optional=%v Required=%v Atomics=%+v", *key, property.Value.Optional, property.Value.Required, property.Value.Atomics)
        }
      }
      factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
      input := factory.NewIdentifier("candidate")
      for _, undefined := range undefinedRows {
        t.Run("undefined="+undefined.name, func(t *testing.T) {
          context := nativecontext.ITypiaContext{Program: program, Checker: program.Checker, CompilerOptions: program.ParsedConfig.ParsedConfig.CompilerOptions, Options: nativecontext.ITransformOptions{Undefined: undefined.value}}
          decoded := map[string]*metadata.MetadataSchema{}
          entries := Feature_object_entries(Feature_object_entriesProps{Context: context, Object: object, Input: input, Config: Feature_object_entriesConfig{Decoder: func(props Feature_object_entriesDecoderProps) *shimast.Node {
            decoded[*props.Key] = props.Metadata
            return factory.NewIdentifier("decoded")
          }}})
          if len(entries) != 3 {
            t.Fatalf("entry count=%d", len(entries))
          }
          for _, entry := range entries {
            key := entry.Key.GetSoleLiteral()
            if key == nil {
              t.Fatal("entry key missing")
            }
            wantExact := compiler.name == "true" && undefined.name == "false" && expectedOptional[*key]
            wantStrict := wantExact && *key == "optional"
            if entry.OptionalProperty != wantExact || entry.StrictOptionalUndefined != wantStrict {
              t.Fatalf("%s entry exact=%v strict=%v", *key, entry.OptionalProperty, entry.StrictOptionalUndefined)
            }
            if entry.Meta.Optional != expectedOptional[*key] || decoded[*key].Optional != (expectedOptional[*key] && !wantStrict) {
              t.Fatalf("%s source or decoder optionality changed incorrectly", *key)
            }
            wrapped := check_object_regular_expression(Check_objectProps{Context: context, Input: input}, entry)
            if !wantStrict {
              if wrapped != entry.Expression {
                t.Fatalf("%s acquired an unrelated presence guard", *key)
              }
              continue
            }
            if wrapped.Kind != shimast.KindBinaryExpression {
              t.Fatal("strict entry missing absence short circuit")
            }
            outer := wrapped.AsBinaryExpression()
            if outer.OperatorToken.Kind != shimast.KindBarBarToken || outer.Right != entry.Expression || outer.Left.Kind != shimast.KindPrefixUnaryExpression {
              t.Fatal("strict entry must be absence || decoded value")
            }
            prefix := outer.Left.AsPrefixUnaryExpression()
            if prefix.Operator != shimast.KindExclamationToken || prefix.Operand.Kind != shimast.KindBinaryExpression {
              t.Fatal("absence must negate key presence")
            }
            presence := prefix.Operand.AsBinaryExpression()
            if presence.OperatorToken.Kind != shimast.KindInKeyword || presence.Right != input || presence.Left.Kind != shimast.KindStringLiteral || shimast.NodeText(presence.Left) != "optional" {
              t.Fatal("presence must test original optional key and input")
            }
          }
        })
      }
    })
  }
}
