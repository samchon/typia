package iterate

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  "github.com/samchon/ttsc/packages/ttsc/driver"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  factories "github.com/samchon/typia/packages/typia/native/core/factories"
  helpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  "os"
  "path/filepath"
  "testing"
)

// TestExactOptionalGraphCloneRandomContract preserves the removed suite's declaration graph.
//
// Root, nested, array-element and discriminated-union declarations retain the
// distinction between absent optional keys and explicitly allowed undefined.
// Clone emits conditional own-property assignments for optional keys; random
// emits both omission and inclusion branches and removes implicit undefined
// from optional-only included values without mutating source metadata.
//
// @evidence contracts/testing.md#behavioral-verification Real checker metadata for both original interface graphs flows through Feature_object_entries, object guard, CloneJoiner.Object and RandomJoiner.Object. Literal guards, assignment keys, branch properties and decoder metadata are inspected in the generated AST.
// @evidence contracts/testing.md#independent-expectations Original field declarations and independent literal key/type/optional tables define expectations. Missing clone keys require empty false branches, explicit undefined unions require key-presence alternatives and required undefined must remain an unconditional own assignment.
// @evidence contracts/testing.md#distinguishing-cases Root/nested/array/union optional-only and explicit-union positions survive. Required string and required undefined are controls; random false/true inclusion produces empty versus own-key assignment branches, with string versus nested number value types retained.
// @evidence contracts/testing.md#execution-ownership The Go runner loads and closes one compiler program in process, then calls actual metadata and emitter operations. It launches no Node or compiler subprocess and does not interpret JavaScript or certify runtime TypeGuardError class identity.
func TestExactOptionalGraphCloneRandomContract(t *testing.T) {
  dir := t.TempDir()
  config := `{"compilerOptions":{"target":"ES2022","module":"commonjs","moduleResolution":"bundler","ignoreDeprecations":"6.0","strict":true,"exactOptionalPropertyTypes":true,"skipLibCheck":true},"include":["main.ts"]}`
  sourceText := `interface IExactOptional { required: string; optional?: string; optionalUndefined?: string | undefined; requiredUndefined: string | undefined; nested?: IExactOptionalNested; array: IExactOptionalNested[]; union: IExactOptionalUnion; }
interface IExactOptionalNested { optional?: number; optionalUndefined?: number | undefined; }
type IExactOptionalUnion = { type: "a"; optional?: string; optionalUndefined?: string | undefined; } | { type: "b"; value: string; };
interface IExactOptionalClone { required: string; optional?: string; optionalUndefined?: string | undefined; requiredUndefined: string | undefined; nested: IExactOptionalCloneNested; array: IExactOptionalCloneNested[]; }
interface IExactOptionalCloneNested { optional?: number; optionalUndefined?: number | undefined; }
let root!: IExactOptional; let clone!: IExactOptionalClone;
`
  for name, text := range map[string]string{"tsconfig.json": config, "main.ts": sourceText} {
    if err := os.WriteFile(filepath.Join(dir, name), []byte(text), 0o644); err != nil {
      t.Fatal(err)
    }
  }
  program, diagnostics, err := driver.LoadProgram(dir, "tsconfig.json", driver.LoadProgramOptions{})
  if err != nil {
    t.Fatal(err)
  }
  defer program.Close()
  if len(diagnostics) != 0 {
    t.Fatalf("fixture diagnostics: %+v", diagnostics)
  }
  source := program.SourceFile(filepath.Join(dir, "main.ts"))
  if source == nil || source.Statements == nil || len(source.Statements.Nodes) != 7 {
    t.Fatal("original fixture graph declarations missing")
  }
  no := false
  context := nativecontext.ITypiaContext{Program: program, Checker: program.Checker, CompilerOptions: program.ParsedConfig.ParsedConfig.CompilerOptions, Options: nativecontext.ITransformOptions{Undefined: &no}}
  factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
  input := factory.NewIdentifier("candidate")
  for _, rootIndex := range []int{5, 6} {
    collection := metadata.NewMetadataCollection()
    declaration := source.Statements.Nodes[rootIndex].AsVariableStatement().DeclarationList.AsVariableDeclarationList().Declarations.Nodes[0]
    result := factories.MetadataFactory.Analyze(factories.MetadataFactory_IProps{Checker: program.Checker, Options: factories.MetadataFactory_IOptions{Constant: true, Absorb: true}, Components: collection, Type: program.Checker.GetTypeAtLocation(declaration)})
    if !result.Success || result.Data == nil || len(result.Data.Objects) != 1 {
      t.Fatalf("graph analysis failed: %+v", result.Errors)
    }
    objects := collection.Objects()
    wantObjects := 4
    if rootIndex == 6 {
      wantObjects = 2
    }
    if len(objects) != wantObjects {
      t.Fatalf("graph object count=%d want %d", len(objects), wantObjects)
    }
    root := result.Data.Objects[0].Type
    properties := map[string]*metadata.MetadataSchema{}
    for _, p := range root.Properties {
      properties[*p.Key.GetSoleLiteral()] = p.Value
    }
    if len(properties["array"].Arrays) != 1 || len(properties["array"].Arrays[0].Type.Value.Objects) != 1 || len(properties["nested"].Objects) != 1 || properties["array"].Arrays[0].Type.Value.Objects[0].Type != properties["nested"].Objects[0].Type {
      t.Fatal("nested and array element must retain the same declared object")
    }
    if rootIndex == 5 && len(properties["union"].Objects) != 2 {
      t.Fatal("both authored union arms must survive")
    }
    for _, object := range objects {
      t.Run(object.Name, func(t *testing.T) {
        originalOptional := map[string]bool{}
        decoded := map[string]*metadata.MetadataSchema{}
        for _, p := range object.Properties {
          key := *p.Key.GetSoleLiteral()
          originalOptional[key] = p.Value.Optional
          if key == "optional" || key == "optionalUndefined" {
            wantRequired := key == "optional"
            if !p.Value.Optional || p.Value.Required != wantRequired || len(p.Value.Atomics) != 1 {
              t.Fatalf("%s optional metadata differs", key)
            }
            wantType := "string"
            if object.Name == "IExactOptionalNested" || object.Name == "IExactOptionalCloneNested" {
              wantType = "number"
            }
            if p.Value.Atomics[0].Type != wantType {
              t.Fatalf("%s must retain %s", key, wantType)
            }
          }
        }
        entries := Feature_object_entries(Feature_object_entriesProps{Context: context, Object: object, Input: input, Config: Feature_object_entriesConfig{Trace: true, Decoder: func(props Feature_object_entriesDecoderProps) *shimast.Node {
          key := *props.Key
          // Explore.Postfix is JavaScript expression text; all authored keys are identifiers.
          // The literal must spell the .key path, including its source quotes.
          if props.Explore.Postfix != `".`+key+`"` {
            t.Fatalf("wrong property diagnostic suffix for %s: %s", key, props.Explore.Postfix)
          }
          decoded[key] = props.Metadata
          return factory.NewIdentifier("decoded_" + key)
        }}})
        for _, entry := range entries {
          key := *entry.Key.GetSoleLiteral()
          wantStrict := key == "optional" || key == "nested" && rootIndex == 5
          if entry.StrictOptionalUndefined != wantStrict || entry.OptionalProperty != originalOptional[key] {
            t.Fatalf("%s optional entry differs", key)
          }
          if entry.Meta.Optional != originalOptional[key] || decoded[key].Optional != (originalOptional[key] && !wantStrict) {
            t.Fatalf("%s decoder/source optionality differs", key)
          }
          guarded := check_object_regular_expression(Check_objectProps{Context: context, Input: input}, entry)
          if wantStrict {
            if guarded.Kind != shimast.KindBinaryExpression || guarded.AsBinaryExpression().OperatorToken.Kind != shimast.KindBarBarToken || guarded.AsBinaryExpression().Right != entry.Expression {
              t.Fatalf("%s strict absence guard missing", key)
            }
          } else if guarded != entry.Expression {
            t.Fatalf("%s unexpected absence guard", key)
          }
          cloned := helpers.CloneJoiner.Object(helpers.CloneJoiner_ObjectProps{Input: input, Entries: []helpers.IExpressionEntry{entry}})
          property := cloned.AsObjectLiteralExpression().Properties.Nodes[0]
          if entry.OptionalProperty {
            if property.Kind != shimast.KindSpreadAssignment {
              t.Fatalf("%s optional clone must conditionally spread own property", key)
            }
            conditional := property.AsSpreadAssignment().Expression.AsParenthesizedExpression().Expression.AsConditionalExpression()
            if len(conditional.WhenFalse.AsObjectLiteralExpression().Properties.Nodes) != 0 || len(conditional.WhenTrue.AsObjectLiteralExpression().Properties.Nodes) != 1 {
              t.Fatalf("%s clone must choose empty or one own property", key)
            }
            assignment := conditional.WhenTrue.AsObjectLiteralExpression().Properties.Nodes[0]
            if assignment.Kind != shimast.KindPropertyAssignment || assignment.Name().Text() != key || assignment.AsPropertyAssignment().Initializer != entry.Expression {
              t.Fatalf("%s clone value/ownership changed", key)
            }
            condition := conditional.Condition.AsBinaryExpression()
            if wantStrict {
              if condition.OperatorToken.Kind != shimast.KindExclamationEqualsEqualsToken {
                t.Fatalf("%s strict clone must reject undefined value", key)
              }
            } else {
              if condition.OperatorToken.Kind != shimast.KindBarBarToken || condition.Right.AsBinaryExpression().OperatorToken.Kind != shimast.KindInKeyword || shimast.NodeText(condition.Right.AsBinaryExpression().Left) != key || condition.Right.AsBinaryExpression().Right != input {
                t.Fatalf("%s explicit undefined must preserve present key", key)
              }
            }
          } else if property.Kind != shimast.KindPropertyAssignment || property.Name().Text() != key || property.AsPropertyAssignment().Initializer != entry.Expression {
            t.Fatalf("%s required clone must assign own value unconditionally", key)
          }
        }
        for _, include := range []bool{false, true} {
          decodeIndex := 0
          generated := helpers.RandomJoiner.Object(helpers.RandomJoiner_ObjectProps{Object: object, OptionalProperty: func(m *metadata.MetadataSchema) bool {
            return helpers.OptionPredicator.ExactOptionalProperty(context, m)
          }, StrictOptionalUndefined: func(m *metadata.MetadataSchema) bool {
            return helpers.OptionPredicator.StrictOptionalUndefined(context, m)
          }, Optional: func() *shimast.Node {
            if include {
              return factory.NewKeywordExpression(shimast.KindTrueKeyword)
            }
            return factory.NewKeywordExpression(shimast.KindFalseKeyword)
          }, Decode: func(m *metadata.MetadataSchema) *shimast.Node {
            if decodeIndex >= len(object.Properties) {
              t.Fatal("unexpected random decoder")
            }
            original := object.Properties[decodeIndex]
            decodeIndex++
            key := *original.Key.GetSoleLiteral()
            strict := key == "optional" || key == "nested" && rootIndex == 5
            if m.Optional != (original.Value.Optional && !strict) || m.Required != original.Value.Required || original.Value.Optional != originalOptional[key] {
              t.Fatalf("%s random included metadata violates optional-only/explicit-undefined distinction", key)
            }
            return factory.NewIdentifier("generated_value")
          }})
          properties := generated.AsObjectLiteralExpression().Properties.Nodes
          if len(properties) != len(object.Properties) {
            t.Fatal("random property population changed")
          }
          for index, property := range properties {
            key := *object.Properties[index].Key.GetSoleLiteral()
            if originalOptional[key] {
              if property.Kind != shimast.KindSpreadAssignment {
                t.Fatalf("%s missing random inclusion branch", key)
              }
              conditional := property.AsSpreadAssignment().Expression.AsParenthesizedExpression().Expression.AsConditionalExpression()
              wantKind := shimast.KindFalseKeyword
              if include {
                wantKind = shimast.KindTrueKeyword
              }
              if conditional.Condition.Kind != wantKind || len(conditional.WhenFalse.AsObjectLiteralExpression().Properties.Nodes) != 0 || conditional.WhenTrue.AsObjectLiteralExpression().Properties.Nodes[0].Name().Text() != key {
                t.Fatalf("%s random inclusion/omission own-key contract changed", key)
              }
            } else if property.Kind != shimast.KindPropertyAssignment || property.Name().Text() != key {
              t.Fatalf("%s random required own-key assignment missing", key)
            }
          }
          if decodeIndex != len(object.Properties) {
            t.Fatal("random decoder population changed")
          }
        }
      })
    }
  }
}
