//go:build typia_native_internal
// +build typia_native_internal

package factories

import (
	"math/big"
	"os"
	"path/filepath"
	"strings"
	"testing"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	shimprinter "github.com/microsoft/typescript-go/shim/printer"
	"github.com/samchon/ttsc/packages/ttsc/driver"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
	nativeprotobuf "github.com/samchon/typia/packages/typia/native/core/schemas/protobuf"
)

// TestFactoryUtilityCoverage covers small factory helpers.
//
// Most factory paths are exercised through TypeScript transforms, but simple
// AST helper branches and text-formatting helpers do not need a compiler
// program. This test keeps those deterministic helper checks local to the
// factories package.
//
// 1. Generate numeric range predicates for all supported numeric tags.
// 2. Exercise bigint, object, currying, self-call, and escaped-text helpers.
// 3. Cover comment merging and statement helper branches.
// 4. Verify fallback AST, literal, protobuf, sequence validation, and type-tag factory paths.
// 5. Resolve TypeScript checker-backed type names and synthetic function declarations.
func TestFactoryUtilityCoverage(t *testing.T) {
	emit := shimprinter.NewEmitContext()
	input := expressionFactory_factory.NewIdentifier("input")
	for _, name := range []string{"int32", "uint32", "int64", "uint64", "float", "double", "unknown"} {
		if NumericRangeFactory.Number(name, input) == nil {
			t.Fatalf("number range %s returned nil", name)
		}
	}
	for _, name := range []string{"uint64", "int64"} {
		if NumericRangeFactory.Bigint(name, input) == nil {
			t.Fatalf("bigint range %s returned nil", name)
		}
	}

	if ExpressionFactory.Bigint("123") == nil {
		t.Fatal("bigint expression returned nil")
	}
	if ExpressionFactory.Number(-12) == nil ||
		ExpressionFactory.Number(float32(1.5)) == nil ||
		ExpressionFactory.Number("7") == nil {
		t.Fatal("number expression branch returned nil")
	}
	if ExpressionFactory.IsRequired(input) == nil {
		t.Fatal("required expression returned nil")
	}
	if ExpressionFactory.IsArray(input) == nil ||
		ExpressionFactory.IsObject(ExpressionFactory_IsObjectProps{Input: input, CheckNull: true, CheckArray: true}) == nil ||
		ExpressionFactory.IsInstanceOf("Date", input) == nil ||
		ExpressionFactory.Coalesce(input, expressionFactory_factory.NewIdentifier("fallback")) == nil {
		t.Fatal("basic expression factory branch returned nil")
	}
	if ExpressionFactory.Currying(ExpressionFactory_CurryingProps{
		Function:  expressionFactory_factory.NewIdentifier("fn"),
		Arguments: nil,
	}) == nil {
		t.Fatal("zero-argument currying returned nil")
	}
	if ExpressionFactory.Currying(ExpressionFactory_CurryingProps{
		Function: expressionFactory_factory.NewIdentifier("fn"),
		Arguments: []*shimast.Expression{
			expressionFactory_factory.NewIdentifier("a"),
			expressionFactory_factory.NewIdentifier("b"),
		},
	}) == nil {
		t.Fatal("multi-argument currying returned nil")
	}
	call := expressionFactory_factory.NewCallExpression(
		expressionFactory_factory.NewIdentifier("already"),
		nil,
		nil,
		nil,
		shimast.NodeFlagsNone,
	)
	if ExpressionFactory.SelfCall(emit, call) != call {
		t.Fatal("self-call should return call expressions unchanged")
	}
	if ExpressionFactory.SelfCall(emit, StatementFactory.Block(input), TypeFactory.Keyword("string")) == nil {
		t.Fatal("self-call should wrap non-call bodies")
	}
	if ExpressionFactory.GetEscapedText(ExpressionFactory_GetEscapedTextProps{}) != "" {
		t.Fatal("nil escaped text should be empty")
	}
	if ExpressionFactory.GetEscapedText(ExpressionFactory_GetEscapedTextProps{Input: input}) != "input" {
		t.Fatal("identifier escaped text mismatch")
	}
	if ExpressionFactory.GetEscapedText(ExpressionFactory_GetEscapedTextProps{
		Input: expressionFactory_factory.NewStringLiteral("text", shimast.TokenFlagsNone),
	}) != "text" {
		t.Fatal("string escaped text mismatch")
	}
	access := IdentifierFactory.Access(emit, input, "field")
	if IdentifierFactory.GetName(access) != "input.field" {
		t.Fatalf("property access name mismatch: %s", IdentifierFactory.GetName(access))
	}
	element := IdentifierFactory.Access(emit, input, "not valid")
	if IdentifierFactory.GetName(element) != "input[not valid]" {
		t.Fatalf("element access name mismatch: %s", IdentifierFactory.GetName(element))
	}
	if IdentifierFactory.GetName(nil) != "unknown" {
		t.Fatal("nil identifier name should be unknown")
	}
	if TypeFactory.GetReturnTypeOfClassMethod(TypeFactory_GetReturnTypeOfClassMethodProps{}) != nil {
		t.Fatal("nil checker and class should not produce a return type")
	}
	if TypeFactory.GetFunction(nil) != nil || TypeFactory.GetFunction(&shimchecker.Type{}) != nil {
		t.Fatal("nil or zero types should not produce function declarations")
	}
	if TypeFactory.GetFullName(TypeFactory_GetFullNameProps{}) != "" {
		t.Fatal("nil full name lookup should be empty")
	}
	if typeFactory_get_name(nil) != "__type" {
		t.Fatal("nil type factory internals should use fallback values")
	}
	for _, keyword := range []string{"void", "any", "unknown", "boolean", "number", "bigint", "string"} {
		if TypeFactory.Keyword(keyword) == nil {
			t.Fatalf("keyword %s returned nil", keyword)
		}
	}
	typeDir := t.TempDir()
	if err := os.MkdirAll(filepath.Join(typeDir, "src"), 0o755); err != nil {
		t.Fatalf("mkdir type factory fixture: %v", err)
	}
	if err := os.WriteFile(filepath.Join(typeDir, "tsconfig.json"), []byte(`{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`), 0o644); err != nil {
		t.Fatalf("write type factory tsconfig: %v", err)
	}
	if err := os.WriteFile(filepath.Join(typeDir, "src", "main.ts"), []byte(`
export function declared(): string { return ""; }
export const holder = { assigned: () => "" };
export class Example {
  field = () => "field";
  value = 1;
  method(): number { return 1; }
}
export interface Box<T> { value: T; }
export let example!: Example;
export let box!: Box<string>;
export let promised!: Promise<string>;
export let inter!: { left: string } & { right: number };
export namespace Outer {
  export interface Inner { label: string; }
}
export let inner!: Outer.Inner;
`), 0o644); err != nil {
		t.Fatalf("write type factory source: %v", err)
	}
	prog, diags, err := driver.LoadProgram(typeDir, "tsconfig.json", driver.LoadProgramOptions{})
	if err != nil {
		t.Fatalf("load type factory program: %v", err)
	}
	if len(diags) != 0 {
		t.Fatalf("type factory fixture diagnostics: %+v", diags)
	}
	defer prog.Close()
	source := prog.SourceFile(filepath.Join(typeDir, "src", "main.ts"))
	if source == nil {
		t.Fatal("type factory source file was not loaded")
	}
	statements := source.Statements.Nodes
	if len(statements) < 10 {
		t.Fatalf("type factory fixture expected statements, got %d", len(statements))
	}
	variableType := func(index int) *shimchecker.Type {
		declarations := statements[index].AsVariableStatement().DeclarationList.AsVariableDeclarationList().Declarations.Nodes
		if len(declarations) == 0 {
			t.Fatalf("variable statement %d has no declarations", index)
		}
		return prog.Checker.GetTypeAtLocation(declarations[0])
	}
	if !TypeFactory.IsFunction(prog.Checker.GetTypeAtLocation(statements[0])) {
		t.Fatal("function declaration should be recognized as function-like")
	}
	holderType := variableType(1)
	assignedSymbol := prog.Checker.GetPropertyOfType(holderType, "assigned")
	if assignedSymbol == nil {
		t.Fatal("holder.assigned symbol was not found")
	}
	assignedType := prog.Checker.GetTypeOfSymbolAtLocation(assignedSymbol, assignedSymbol.ValueDeclaration)
	assignedDeclaredType := shimchecker.Checker_getTypeOfSymbol(prog.Checker, assignedSymbol)
	if TypeFactory.GetFunction(assignedDeclaredType) == nil && TypeFactory.GetFunction(assignedType) == nil {
		t.Fatal("property assignment initializer should be recognized as function-like")
	}
	exampleType := variableType(4)
	fieldSymbol := prog.Checker.GetPropertyOfType(exampleType, "field")
	if fieldSymbol == nil {
		t.Fatal("example.field symbol was not found")
	}
	fieldType := prog.Checker.GetTypeOfSymbolAtLocation(fieldSymbol, fieldSymbol.ValueDeclaration)
	fieldDeclaredType := shimchecker.Checker_getTypeOfSymbol(prog.Checker, fieldSymbol)
	if TypeFactory.GetFunction(fieldDeclaredType) == nil && TypeFactory.GetFunction(fieldType) == nil {
		t.Fatal("property declaration initializer should be recognized as function-like")
	}
	if TypeFactory.GetReturnTypeOfClassMethod(TypeFactory_GetReturnTypeOfClassMethodProps{
		Checker:  prog.Checker,
		Class:    exampleType,
		Function: "method",
	}) == nil {
		t.Fatal("class method return type should be resolved")
	}
	if TypeFactory.GetReturnTypeOfClassMethod(TypeFactory_GetReturnTypeOfClassMethodProps{
		Checker:  prog.Checker,
		Class:    exampleType,
		Function: "missing",
	}) != nil || TypeFactory.GetReturnTypeOfClassMethod(TypeFactory_GetReturnTypeOfClassMethodProps{
		Checker:  prog.Checker,
		Class:    exampleType,
		Function: "value",
	}) != nil {
		t.Fatal("missing or non-call class properties should not produce return types")
	}
	for _, tc := range []struct {
		name     string
		index    int
		contains string
	}{
		{name: "generic", index: 5, contains: "Box<string>"},
		{name: "promise", index: 6, contains: "string"},
		{name: "intersection", index: 7, contains: " & "},
		{name: "namespace", index: 9, contains: "Outer.Inner"},
	} {
		fullName := TypeFactory.GetFullName(TypeFactory_GetFullNameProps{
			Checker: prog.Checker,
			Type:    variableType(tc.index),
		})
		if !strings.Contains(fullName, tc.contains) {
			t.Fatalf("%s full name %q did not contain %q", tc.name, fullName, tc.contains)
		}
	}
	if IdentifierFactory.Postfix("field") != "\".field\"" ||
		IdentifierFactory.Postfix("not valid") == "" {
		t.Fatal("identifier postfix formatting mismatch")
	}
	if IdentifierFactory.Parameter("value", nil, nil) == nil ||
		IdentifierFactory.Parameter(input, TypeFactory.Keyword("string"), nil) == nil ||
		IdentifierFactory.Parameter(123, nil, expressionFactory_factory.NewToken(shimast.KindQuestionToken)) == nil {
		t.Fatal("identifier parameter branch returned nil")
	}

	description := CommentFactory.Description(nil)
	if description != nil {
		t.Fatal("description placeholder should stay nil")
	}
	merged := CommentFactory.Merge([]CommentFactory_SymbolDisplayPart{
		{Text: "a\r\n"},
		{Text: "b"},
	})
	if merged != "a\nb" {
		t.Fatalf("comment merge mismatch: %q", merged)
	}
	if StatementFactory.Entry(StatementFactory_EntryProps{Key: "k", Value: "v"}) == nil {
		t.Fatal("entry statement returned nil")
	}
	if StatementFactory.Mut(StatementFactory_MutProps{Name: "mutable"}) == nil ||
		StatementFactory.Constant(StatementFactory_ConstantProps{Name: "constant"}) == nil {
		t.Fatal("variable statement helper returned nil")
	}
	if StatementFactory.Transpile("expr") == nil {
		t.Fatal("transpile statement returned nil")
	}
	if StatementFactory.Block(input) == nil {
		t.Fatal("block statement returned nil")
	}
	if ValueFactory.BOOLEAN(true).Kind != shimast.KindTrueKeyword ||
		ValueFactory.BOOLEAN(false).Kind != shimast.KindFalseKeyword {
		t.Fatal("boolean value factory returned wrong keyword")
	}
	if LiteralFactory.Write(big.NewInt(10)) == nil {
		t.Fatal("bigint literal branch returned nil")
	}
	type literalStruct struct {
		Name string
		Age  int
		skip string
	}
	literalPointer := 11
	if LiteralFactory.Write(nil) == nil ||
		LiteralFactory.Write([]any{"a", 1, true}) == nil ||
		LiteralFactory.Write(map[string]any{"type": "string", "skip": nil}) == nil ||
		LiteralFactory.Write(literalStruct{Name: "sam", Age: 1}) == nil ||
		LiteralFactory.Write(&literalPointer) == nil ||
		LiteralFactory.Write(func() {}) == nil {
		t.Fatal("literal factory branch returned nil")
	}
	if TemplateFactory.Generate([]*shimast.Expression{
		expressionFactory_factory.NewStringLiteral("a", shimast.TokenFlagsNone),
		expressionFactory_factory.NewStringLiteral("b", shimast.TokenFlagsNone),
	}) == nil || TemplateFactory.Generate([]*shimast.Expression{
		expressionFactory_factory.NewStringLiteral("a", shimast.TokenFlagsNone),
		input,
		expressionFactory_factory.NewStringLiteral("b", shimast.TokenFlagsNone),
	}) == nil {
		t.Fatal("template factory branch returned nil")
	}
	importer := factoryUtilityImporter{}
	for _, script := range []string{
		"$input;",
		"$importInternal(\"helper\");",
		"$importInstance(\"Thing\", \"pkg\");",
		"$importNamespace(\"NS\", \"pkg\");",
		"$importDefault(\"Default\", \"pkg\", false);",
	} {
		if ExpressionFactory.Transpile(ExpressionFactory_TranspileProps{
			Importer: importer,
			Script:   script,
		})(input) == nil {
			t.Fatalf("expression transpile returned nil for %s", script)
		}
	}
	if FormatCheatSheet["password"] != "true" ||
		formatCheatSheet_RegexCall("/x/") != "/x/.test($input)" {
		t.Fatal("format cheat sheet helper returned unexpected output")
	}
	if !strings.Contains(expressionFactory_random_format_uuid(), "-") {
		t.Fatal("random uuid should include separators")
	}

	if MetadataTypeTagFactory.Is(nil) {
		t.Fatal("nil object should not be recognized as a typia tag")
	}
	tagShape := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
		Name: "TagShape",
		Properties: []*schemametadata.MetadataProperty{
			schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{Key: factoryUtilityLiteralMetadata("target"), Value: factoryUtilityLiteralMetadata("string")}),
			schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{Key: factoryUtilityLiteralMetadata("kind"), Value: factoryUtilityLiteralMetadata("format")}),
			schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{Key: factoryUtilityLiteralMetadata("value"), Value: factoryUtilityLiteralMetadata("uuid")}),
		},
	})
	tagValue := schemametadata.MetadataSchema_initialize()
	tagValue.Required = false
	tagValue.Optional = true
	tagValue.Objects = append(tagValue.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{Type: tagShape}))
	tagContainer := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
		Name: "Tagged",
		Properties: []*schemametadata.MetadataProperty{
			schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{Key: factoryUtilityLiteralMetadata("typia.tag"), Value: tagValue}),
		},
	})
	if !MetadataTypeTagFactory.Is(tagContainer) {
		t.Fatal("valid typia tag object shape was not recognized")
	}
	typeTagErrors := []MetadataFactory_IError{}
	analyzed := MetadataTypeTagFactory.Analyze(struct {
		Errors  *[]MetadataFactory_IError
		Type    string
		Objects []*schemametadata.MetadataObjectType
		Explore MetadataFactory_IExplore
	}{
		Errors:  &typeTagErrors,
		Type:    "string",
		Objects: []*schemametadata.MetadataObjectType{tagContainer},
	})
	if len(analyzed) != 1 || analyzed[0].Target != "string" || analyzed[0].Kind != "format" || analyzed[0].Value != "uuid" {
		t.Fatal("metadata type tag analysis should produce a valid string format tag")
	}
	validateObject := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
		Name: "ValidateRecord",
		Properties: []*schemametadata.MetadataProperty{
			factoryUtilityTagProperty("string", factoryUtilityLiteralMetadata("return true")),
			factoryUtilityTagProperty("number", factoryUtilityLiteralMetadata("return false")),
		},
	})
	schemaObject := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
		Name: "SchemaRecord",
		Properties: []*schemametadata.MetadataProperty{
			factoryUtilityTagProperty("label", factoryUtilityLiteralMetadata("ok")),
		},
	})
	richTag := factoryUtilityTagContainer("RichTag",
		factoryUtilityTagProperty("target", factoryUtilityStringUnionMetadata("string", "number")),
		factoryUtilityTagProperty("kind", factoryUtilityLiteralMetadata("range")),
		factoryUtilityTagProperty("value", factoryUtilityLiteralMetadata("minimum")),
		factoryUtilityTagProperty("exclusive", factoryUtilityStringTupleMetadata("format")),
		factoryUtilityTagProperty("validate", factoryUtilityObjectMetadata(validateObject)),
		factoryUtilityTagProperty("schema", factoryUtilityObjectMetadata(schemaObject)),
	)
	richAnalyzed := MetadataTypeTagFactory.Analyze(struct {
		Errors  *[]MetadataFactory_IError
		Type    string
		Objects []*schemametadata.MetadataObjectType
		Explore MetadataFactory_IExplore
	}{
		Errors:  &typeTagErrors,
		Type:    "number",
		Objects: []*schemametadata.MetadataObjectType{richTag},
	})
	if len(richAnalyzed) != 1 ||
		richAnalyzed[0].Target != "number" ||
		richAnalyzed[0].Validate != "return false" ||
		richAnalyzed[0].Schema == nil {
		t.Fatal("rich metadata type tag analysis missed validate or schema fields")
	}
	invalidTagErrors := []MetadataFactory_IError{}
	invalidOuter := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{Name: "InvalidOuter"})
	requiredTop := factoryUtilityTagContainer("RequiredTop",
		factoryUtilityTagProperty("target", factoryUtilityLiteralMetadata("string")),
		factoryUtilityTagProperty("kind", factoryUtilityLiteralMetadata("format")),
		factoryUtilityTagProperty("value", factoryUtilityLiteralMetadata("uuid")),
	)
	requiredTop.Properties[0].Value.Required = true
	requiredTop.Properties[0].Value.Optional = false
	missingEssential := factoryUtilityTagContainer("MissingEssential",
		factoryUtilityTagProperty("target", factoryUtilityLiteralMetadata("string")),
	)
	invalidProperty := factoryUtilityTagContainer("InvalidProperty",
		factoryUtilityTagProperty("target", factoryUtilityLiteralMetadata("symbol")),
		factoryUtilityTagProperty("kind", factoryUtilityAtomicMetadata("string")),
		factoryUtilityTagProperty("value", factoryUtilityAtomicMetadata("number")),
		factoryUtilityTagProperty("exclusive", factoryUtilityAtomicMetadata("boolean")),
		factoryUtilityTagProperty("validate", factoryUtilityAtomicMetadata("string")),
		factoryUtilityTagProperty("schema", factoryUtilityAtomicMetadata("string")),
	)
	nilTag := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
		Name: "NilTag",
		Properties: []*schemametadata.MetadataProperty{
			schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{Key: factoryUtilityLiteralMetadata("typia.tag"), Value: schemametadata.MetadataSchema_initialize()}),
		},
	})
	invalidAnalyzed := MetadataTypeTagFactory.Analyze(struct {
		Errors  *[]MetadataFactory_IError
		Type    string
		Objects []*schemametadata.MetadataObjectType
		Explore MetadataFactory_IExplore
	}{
		Errors: &invalidTagErrors,
		Type:   "string",
		Objects: []*schemametadata.MetadataObjectType{
			invalidOuter,
			requiredTop,
			missingEssential,
			invalidProperty,
			nilTag,
			tagContainer,
		},
	})
	if len(invalidAnalyzed) != 0 || len(invalidTagErrors) == 0 {
		t.Fatalf("invalid metadata type tags should be reported and filtered out: analyzed=%d errors=%d", len(invalidAnalyzed), len(invalidTagErrors))
	}
	typeTagReports := []string{}
	typeTagReport := func(next struct {
		Property *string
		Message  string
	}) bool {
		typeTagReports = append(typeTagReports, next.Message)
		return false
	}
	MetadataTypeTagFactory.Validate(struct {
		Report func(struct {
			Property *string
			Message  string
		}) bool
		Type string
		Tags []schemametadata.IMetadataTypeTag
	}{Report: typeTagReport, Type: "string", Tags: []schemametadata.IMetadataTypeTag{{Target: "number", Kind: "format"}}})
	MetadataTypeTagFactory.Validate(struct {
		Report func(struct {
			Property *string
			Message  string
		}) bool
		Type string
		Tags []schemametadata.IMetadataTypeTag
	}{
		Report: typeTagReport,
		Type:   "string",
		Tags: []schemametadata.IMetadataTypeTag{
			{Target: "string", Kind: "format", Name: "uuid", Exclusive: true},
			{Target: "string", Kind: "format", Name: "email", Exclusive: true},
		},
	})
	MetadataTypeTagFactory.Validate(struct {
		Report func(struct {
			Property *string
			Message  string
		}) bool
		Type string
		Tags []schemametadata.IMetadataTypeTag
	}{
		Report: typeTagReport,
		Type:   "string",
		Tags: []schemametadata.IMetadataTypeTag{
			{Target: "string", Kind: "range", Name: "minimum", Exclusive: []string{"maximum"}},
			{Target: "string", Kind: "range", Name: "maximum", Exclusive: []string{"minimum"}},
		},
	})
	invalidExclusiveReports := []string{}
	_ = metadataTypeTagFactory_get_exclusive(struct {
		Report func(struct {
			Property *string
			Message  string
		}) bool
		Key   string
		Value *schemametadata.MetadataSchema
	}{Report: func(next struct {
		Property *string
		Message  string
	}) bool {
		invalidExclusiveReports = append(invalidExclusiveReports, next.Message)
		return false
	}, Key: "exclusive", Value: factoryUtilityStringTupleMetadata("ok", "")})
	if len(typeTagReports) != 3 ||
		len(invalidExclusiveReports) == 0 ||
		metadataTypeTagFactory_property_value(nil) != nil ||
		!metadataTypeTagFactory_some([]string{"a", "b"}, func(value string) bool { return value == "b" }) {
		t.Fatal("metadata type tag validation helper branches were not exercised")
	}
	if !strings.Contains(metadataTypeTagFactory_essentialFieldsMessage(), "'target'") {
		t.Fatal("essential field message should mention target")
	}
	reports := []string{}
	typeTagObject := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
		Name: "TypeTagSchema",
		Properties: []*schemametadata.MetadataProperty{
			schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{Key: factoryUtilityLiteralMetadata("literal"), Value: factoryUtilityLiteralMetadata("value")}),
			schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{Key: factoryUtilityLiteralMetadata("nullable"), Value: func() *schemametadata.MetadataSchema {
				meta := schemametadata.MetadataSchema_initialize()
				meta.Nullable = true
				meta.Required = false
				meta.Optional = true
				return meta
			}()}),
			schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{Key: factoryUtilityLiteralMetadata("tuple"), Value: func() *schemametadata.MetadataSchema {
				meta := schemametadata.MetadataSchema_initialize()
				meta.Tuples = append(meta.Tuples, schemametadata.MetadataTuple_create(schemametadata.MetadataTuple{
					Type: schemametadata.MetadataTupleType_create(schemametadata.MetadataTupleType{
						Name:      "Tuple",
						Elements:  []*schemametadata.MetadataSchema{factoryUtilityLiteralMetadata("a"), factoryUtilityLiteralMetadata("b")},
						Nullables: []bool{},
					}),
				}))
				return meta
			}()}),
			schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{Key: factoryUtilityLiteralMetadata("invalid"), Value: func() *schemametadata.MetadataSchema {
				meta := schemametadata.MetadataSchema_initialize()
				meta.Any = true
				return meta
			}()}),
		},
	})
	if objectSchema := MetadataTypeTagSchemaFactory.Object(struct {
		Report func(msg string) bool
		Object *schemametadata.MetadataObjectType
	}{
		Report: func(msg string) bool {
			reports = append(reports, msg)
			return false
		},
		Object: typeTagObject,
	}); objectSchema["literal"] != "value" || objectSchema["tuple"] == nil || len(reports) == 0 {
		t.Fatal("type tag schema factory returned unexpected output")
	}

	if protobufFactory_getBigintType([]any{uint64(1), "2"}) != "uint64" ||
		protobufFactory_getBigintType([]any{int64(-1)}) != "int64" {
		t.Fatal("protobuf bigint type inference mismatch")
	}
	if protobufFactory_getNumberType([]any{1, int64(2)}) != "int32" ||
		protobufFactory_getNumberType([]any{int64(2147483648)}) != "int64" ||
		protobufFactory_getNumberType([]any{float32(1.5)}) != "double" {
		t.Fatal("protobuf number type inference mismatch")
	}
	if protobufFactory_toFloat("3.5") != 3.5 {
		t.Fatal("protobuf fallback float conversion mismatch")
	}
	if protobufFactory_toFloat(float64(4.5)) != 4.5 ||
		protobufFactory_toFloat(uint64(5)) != 5 {
		t.Fatal("protobuf numeric float conversion mismatch")
	}
	for raw, expected := range map[any]int{
		int64(8):   8,
		float64(9): 9,
		"10":       10,
	} {
		if value := protobufFactory_getSequence([]schemametadata.IMetadataTypeTag{{Kind: "sequence", Schema: map[string]any{"x-protobuf-sequence": raw}}}); value == nil || *value != expected {
			t.Fatalf("protobuf sequence conversion mismatch for %v", raw)
		}
	}
	for _, tags := range [][]schemametadata.IMetadataTypeTag{
		{{Kind: "format"}},
		{{Kind: "sequence", Schema: "invalid"}},
		{{Kind: "sequence", Schema: map[string]any{}}},
		{{Kind: "sequence", Schema: map[string]any{"x-protobuf-sequence": "bad"}}},
	} {
		if protobufFactory_getSequence(tags) != nil {
			t.Fatal("invalid protobuf sequence tag should not resolve")
		}
	}
	if len(protobufFactory_firstTags(nil)) != 0 || protobufFactory_size(nil) != 0 {
		t.Fatal("protobuf empty helper fallback mismatch")
	}

	sequence := 7
	tagged := []*schemametadata.MetadataConstantValue{
		schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{
			Value: int64(-3),
			Tags: [][]schemametadata.IMetadataTypeTag{{
				{Kind: "type", Value: "int64"},
				{Kind: "sequence", Schema: map[string]any{"x-protobuf-sequence": sequence}},
			}},
		}),
		schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{
			Value: uint64(5),
			Tags:  nil,
		}),
	}
	if values := protobufFactory_constantValues(tagged); len(values) != 2 || values[0] != int64(-3) {
		t.Fatal("protobuf constant value extraction mismatch")
	}
	bigints := map[string]*int{}
	protobufFactory_decodeBigint(bigints, tagged, "uint64")
	if bigints["int64"] == nil || *bigints["int64"] != sequence {
		t.Fatal("protobuf bigint tag decoding missed explicit type sequence")
	}
	if _, ok := bigints["uint64"]; !ok {
		t.Fatal("protobuf bigint tag decoding missed fallback type")
	}

	numbers := map[string]*int{}
	protobufFactory_decodeNumber(numbers, []*schemametadata.MetadataConstantValue{
		schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{
			Value: 1.5,
			Tags: [][]schemametadata.IMetadataTypeTag{{
				{Kind: "type", Value: "float"},
				{Kind: "sequence", Schema: map[string]any{"x-protobuf-sequence": sequence}},
			}},
		}),
		schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{
			Value: 3,
			Tags:  nil,
		}),
	}, "double")
	if numbers["float"] == nil || *numbers["float"] != sequence {
		t.Fatal("protobuf number tag decoding missed explicit type sequence")
	}
	if _, ok := numbers["double"]; !ok {
		t.Fatal("protobuf number tag decoding missed fallback type")
	}
	protoMeta := schemametadata.MetadataSchema_initialize()
	protoMeta.Constants = append(protoMeta.Constants,
		schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
			Type: "boolean",
			Values: []*schemametadata.MetadataConstantValue{
				schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: true, Tags: [][]schemametadata.IMetadataTypeTag{{factoryUtilitySequenceTag(11)}}}),
			},
		}),
		schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
			Type:   "bigint",
			Values: tagged,
		}),
		schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
			Type: "number",
			Values: []*schemametadata.MetadataConstantValue{
				schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: 1.5, Tags: [][]schemametadata.IMetadataTypeTag{{{Kind: "type", Value: "float"}, factoryUtilitySequenceTag(12)}}}),
			},
		}),
		schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
			Type: "string",
			Values: []*schemametadata.MetadataConstantValue{
				schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: "literal", Tags: [][]schemametadata.IMetadataTypeTag{{factoryUtilitySequenceTag(13)}}}),
			},
		}),
	)
	protoMeta.Templates = append(protoMeta.Templates, schemametadata.MetadataTemplate_create(schemametadata.MetadataTemplate{
		Row:  []*schemametadata.MetadataSchema{factoryUtilityLiteralMetadata("template")},
		Tags: [][]schemametadata.IMetadataTypeTag{{factoryUtilitySequenceTag(14)}},
	}))
	protoMeta.Atomics = append(protoMeta.Atomics,
		schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "boolean", Tags: [][]schemametadata.IMetadataTypeTag{{factoryUtilitySequenceTag(15)}}}),
		schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "bigint", Tags: [][]schemametadata.IMetadataTypeTag{{{Kind: "type", Value: "uint64"}, factoryUtilitySequenceTag(16)}}}),
		schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "number", Tags: [][]schemametadata.IMetadataTypeTag{{{Kind: "type", Value: "uint32"}, factoryUtilitySequenceTag(17)}}}),
		schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "string", Tags: [][]schemametadata.IMetadataTypeTag{{factoryUtilitySequenceTag(18)}}}),
	)
	if len(protobufFactory_emplaceAtomic(protoMeta)) == 0 ||
		len(protobufFactory_getAtomics(protoMeta)) == 0 ||
		len(protobufFactory_getNumbers(protoMeta)) == 0 ||
		len(protobufFactory_getBigints(protoMeta)) == 0 {
		t.Fatal("protobuf atomic metadata helpers did not read rich metadata")
	}
	bytesMeta := schemametadata.MetadataSchema_initialize()
	bytesMeta.Natives = append(bytesMeta.Natives, schemametadata.MetadataNative_create(schemametadata.MetadataNative{Name: "Uint8Array"}))
	if _, ok := protobufFactory_emplaceSchema(bytesMeta).(nativeprotobuf.IProtobufSchema_IByte); !ok {
		t.Fatal("Uint8Array metadata should emplace as protobuf bytes")
	}
	dynamicObject := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
		Name: "Dynamic",
		Properties: []*schemametadata.MetadataProperty{
			schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
				Key:   factoryUtilityAtomicMetadata("string"),
				Value: factoryUtilityAtomicMetadata("number"),
			}),
		},
	})
	dynamicMeta := schemametadata.MetadataSchema_initialize()
	dynamicMeta.Objects = append(dynamicMeta.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{Type: dynamicObject}))
	if _, ok := protobufFactory_emplaceSchema(dynamicMeta).(nativeprotobuf.IProtobufSchema_IMap); !ok {
		t.Fatal("dynamic object metadata should emplace as protobuf map")
	}
	mapMeta := schemametadata.MetadataSchema_initialize()
	mapMeta.Maps = append(mapMeta.Maps, schemametadata.MetadataMap_create(schemametadata.MetadataMap{
		Key:   factoryUtilityAtomicMetadata("string"),
		Value: factoryUtilityAtomicMetadata("number"),
	}))
	if _, ok := protobufFactory_emplaceSchema(mapMeta).(nativeprotobuf.IProtobufSchema_IMap); !ok {
		t.Fatal("map metadata should emplace as protobuf map")
	}
	factoryUtilityMustPanic(t, func() {
		protobufFactory_emplaceSchema(schemametadata.MetadataSchema_initialize())
	})

	sequenceErrors := []string{}
	seenSequences := map[int]bool{}
	addSequence := func(value int) bool {
		if seenSequences[value] {
			return false
		}
		seenSequences[value] = true
		return true
	}
	protobufFactory_validateInstanceSequence("array", [][]schemametadata.IMetadataTypeTag{
		{factoryUtilitySequenceTag(1)},
		{},
	}, &sequenceErrors, addSequence)
	protobufFactory_validateInstanceSequence("object", [][]schemametadata.IMetadataTypeTag{
		{factoryUtilitySequenceTag(2)},
		{factoryUtilitySequenceTag(3)},
	}, &sequenceErrors, addSequence)
	protobufFactory_validateInstanceSequence("map", [][]schemametadata.IMetadataTypeTag{
		{factoryUtilitySequenceTag(1)},
	}, &sequenceErrors, addSequence)
	protobufFactory_validateUniqueSequence("number type", map[int]bool{4: true, 5: true}, 2, 2, &sequenceErrors, addSequence)
	protobufFactory_validateUniqueSequence("string type", map[int]bool{6: true}, 2, 1, &sequenceErrors, addSequence)
	if len(sequenceErrors) < 4 {
		t.Fatalf("protobuf sequence validation did not report expected errors: %v", sequenceErrors)
	}
	propertyErrors := []string{}
	propertyMeta := schemametadata.MetadataSchema_initialize()
	propertyMeta.Constants = append(propertyMeta.Constants, protoMeta.Constants...)
	propertyMeta.Atomics = append(propertyMeta.Atomics, protoMeta.Atomics...)
	propertyMeta.Arrays = append(propertyMeta.Arrays, schemametadata.MetadataArray_create(schemametadata.MetadataArray{
		Type: schemametadata.MetadataArrayType_create(schemametadata.MetadataArrayType{Name: "Numbers", Value: factoryUtilityAtomicMetadata("number")}),
		Tags: [][]schemametadata.IMetadataTypeTag{{factoryUtilitySequenceTag(11)}},
	}))
	propertyMeta.Objects = append(propertyMeta.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{
		Type: dynamicObject,
		Tags: [][]schemametadata.IMetadataTypeTag{{factoryUtilitySequenceTag(19)}},
	}))
	propertyMeta.Maps = append(propertyMeta.Maps, schemametadata.MetadataMap_create(schemametadata.MetadataMap{
		Key:   factoryUtilityAtomicMetadata("string"),
		Value: factoryUtilityAtomicMetadata("number"),
		Tags:  [][]schemametadata.IMetadataTypeTag{{factoryUtilitySequenceTag(20)}},
	}))
	propertyMeta.Natives = append(propertyMeta.Natives, schemametadata.MetadataNative_create(schemametadata.MetadataNative{
		Name: "Uint8Array",
		Tags: [][]schemametadata.IMetadataTypeTag{{factoryUtilitySequenceTag(21)}},
	}))
	protobufFactory_validateProperty(propertyMeta, &propertyErrors)
	if len(propertyErrors) == 0 {
		t.Fatal("protobuf property validation should detect duplicate sequence rows")
	}
	duplicateObject := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
		Name: "DuplicateSequences",
		Properties: []*schemametadata.MetadataProperty{
			schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
				Key:   factoryUtilityLiteralMetadata("first"),
				Value: factoryUtilitySequenceStringMetadata(30),
			}),
			schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
				Key:   factoryUtilityLiteralMetadata("second"),
				Value: factoryUtilitySequenceStringMetadata(30),
			}),
		},
	})
	protobufFactory_validateObject(duplicateObject, &propertyErrors)
	if len(propertyErrors) < 2 {
		t.Fatal("protobuf object validation should detect duplicated property sequences")
	}
	emplaceObject := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
		Name: "EmplaceObject",
		Properties: []*schemametadata.MetadataProperty{
			schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
				Key:   factoryUtilityLiteralMetadata("fixed"),
				Value: factoryUtilitySequenceStringMetadata(2),
			}),
			schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
				Key:   factoryUtilityLiteralMetadata("floating"),
				Value: factoryUtilityAtomicMetadata("number"),
			}),
		},
	})
	ProtobufFactory.EmplaceObject(emplaceObject)
	if emplaceObject.Properties[1].Of_protobuf_ == nil ||
		emplaceObject.Properties[1].Of_protobuf_.Fixed {
		t.Fatal("protobuf object emplace should assign indexes to non-fixed properties")
	}
	shapeErrors := []string{}
	recordShape := func(msg string) { shapeErrors = append(shapeErrors, msg) }
	protobufFactory_validateShape(factoryUtilityArrayMetadata(factoryUtilityArrayMetadata(factoryUtilityAtomicMetadata("string"))), recordShape)
	optionalArray := factoryUtilityArrayMetadata(factoryUtilityAtomicMetadata("string"))
	optionalArray.Arrays[0].Type.Value.Optional = true
	optionalArray.Arrays[0].Type.Value.Required = false
	protobufFactory_validateShape(optionalArray, recordShape)
	unionArray := factoryUtilityArrayMetadata(factoryUtilityAtomicMetadata("string"))
	unionArray.Arrays[0].Type.Value.Atomics = append(unionArray.Arrays[0].Type.Value.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "number"}))
	protobufFactory_validateShape(unionArray, recordShape)
	mapArray := factoryUtilityArrayMetadata(mapMeta)
	protobufFactory_validateShape(mapArray, recordShape)
	mixedObject := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
		Name: "Mixed",
		Properties: []*schemametadata.MetadataProperty{
			schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{Key: factoryUtilityLiteralMetadata("fixed"), Value: factoryUtilityAtomicMetadata("string")}),
			schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{Key: factoryUtilityAtomicMetadata("string"), Value: factoryUtilityAtomicMetadata("number")}),
			schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{Key: factoryUtilityAtomicMetadata("number"), Value: factoryUtilityAtomicMetadata("boolean")}),
		},
	})
	mixedMeta := schemametadata.MetadataSchema_initialize()
	mixedMeta.Objects = append(mixedMeta.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{Type: mixedObject}))
	protobufFactory_validateShape(mixedMeta, recordShape)
	dynamicArrayObject := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
		Name: "DynamicArray",
		Properties: []*schemametadata.MetadataProperty{
			schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{Key: factoryUtilityAtomicMetadata("string"), Value: factoryUtilityArrayMetadata(factoryUtilityAtomicMetadata("string"))}),
		},
	})
	dynamicArrayMeta := schemametadata.MetadataSchema_initialize()
	dynamicArrayMeta.Objects = append(dynamicArrayMeta.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{Type: dynamicArrayObject}))
	protobufFactory_validateShape(dynamicArrayMeta, recordShape)
	invalidMap := schemametadata.MetadataSchema_initialize()
	invalidMap.Maps = append(invalidMap.Maps, schemametadata.MetadataMap_create(schemametadata.MetadataMap{
		Key:   factoryUtilityArrayMetadata(factoryUtilityAtomicMetadata("string")),
		Value: factoryUtilityArrayMetadata(factoryUtilityAtomicMetadata("number")),
	}))
	protobufFactory_validateShape(invalidMap, recordShape)
	if len(shapeErrors) < 7 {
		t.Fatalf("protobuf shape validation missed branch errors: %v", shapeErrors)
	}
	if protobufFactory_propertyIndex(nil) != nil {
		t.Fatal("unknown protobuf property type should not have an index")
	}
}

type factoryUtilityImporter struct{}

func (factoryUtilityImporter) Internal(name string) *shimast.Node {
	return expressionFactory_factory.NewIdentifier(name)
}

func factoryUtilitySequenceTag(value int) schemametadata.IMetadataTypeTag {
	return schemametadata.IMetadataTypeTag{
		Kind:   "sequence",
		Schema: map[string]any{"x-protobuf-sequence": value},
	}
}

func factoryUtilityMustPanic(t *testing.T, run func()) {
	t.Helper()
	defer func() {
		if recover() == nil {
			t.Fatal("expected helper to panic")
		}
	}()
	run()
}

func (factoryUtilityImporter) Instance(props ExpressionFactory_IInstance) *shimast.Node {
	return expressionFactory_factory.NewIdentifier(props.Name)
}

func (factoryUtilityImporter) Namespace(props ExpressionFactory_INamespace) *shimast.Node {
	return expressionFactory_factory.NewIdentifier(props.Name)
}

func (factoryUtilityImporter) Default(props ExpressionFactory_IDefault) *shimast.Node {
	return expressionFactory_factory.NewIdentifier(props.Name)
}

func factoryUtilityLiteralMetadata(value string) *schemametadata.MetadataSchema {
	meta := schemametadata.MetadataSchema_initialize()
	meta.Constants = append(meta.Constants, schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
		Type: "string",
		Values: []*schemametadata.MetadataConstantValue{
			schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: value}),
		},
	}))
	return meta
}

func factoryUtilityStringUnionMetadata(values ...string) *schemametadata.MetadataSchema {
	meta := schemametadata.MetadataSchema_initialize()
	constants := make([]*schemametadata.MetadataConstantValue, 0, len(values))
	for _, value := range values {
		constants = append(constants, schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: value}))
	}
	meta.Constants = append(meta.Constants, schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
		Type:   "string",
		Values: constants,
	}))
	return meta
}

func factoryUtilityBooleanMetadata(value bool) *schemametadata.MetadataSchema {
	meta := schemametadata.MetadataSchema_initialize()
	meta.Constants = append(meta.Constants, schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
		Type: "boolean",
		Values: []*schemametadata.MetadataConstantValue{
			schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: value}),
		},
	}))
	return meta
}

func factoryUtilityObjectMetadata(object *schemametadata.MetadataObjectType) *schemametadata.MetadataSchema {
	meta := schemametadata.MetadataSchema_initialize()
	meta.Objects = append(meta.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{Type: object}))
	return meta
}

func factoryUtilityStringTupleMetadata(values ...string) *schemametadata.MetadataSchema {
	meta := schemametadata.MetadataSchema_initialize()
	elements := make([]*schemametadata.MetadataSchema, 0, len(values))
	for _, value := range values {
		if value == "" {
			elements = append(elements, factoryUtilityAtomicMetadata("string"))
		} else {
			elements = append(elements, factoryUtilityLiteralMetadata(value))
		}
	}
	meta.Tuples = append(meta.Tuples, schemametadata.MetadataTuple_create(schemametadata.MetadataTuple{
		Type: schemametadata.MetadataTupleType_create(schemametadata.MetadataTupleType{
			Name:      "ExclusiveTuple",
			Elements:  elements,
			Nullables: []bool{},
		}),
	}))
	return meta
}

func factoryUtilityTagProperty(key string, value *schemametadata.MetadataSchema) *schemametadata.MetadataProperty {
	return schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
		Key:   factoryUtilityLiteralMetadata(key),
		Value: value,
	})
}

func factoryUtilityTagContainer(name string, properties ...*schemametadata.MetadataProperty) *schemametadata.MetadataObjectType {
	tagValue := schemametadata.MetadataSchema_initialize()
	tagValue.Required = false
	tagValue.Optional = true
	tagValue.Objects = append(tagValue.Objects, schemametadata.MetadataObject_create(schemametadata.MetadataObject{
		Type: schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
			Name:       name + "Shape",
			Properties: properties,
		}),
	}))
	return schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
		Name: name,
		Properties: []*schemametadata.MetadataProperty{
			schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
				Key:   factoryUtilityLiteralMetadata("typia.tag"),
				Value: tagValue,
			}),
		},
	})
}

func factoryUtilityAtomicMetadata(name string) *schemametadata.MetadataSchema {
	meta := schemametadata.MetadataSchema_initialize()
	meta.Atomics = append(meta.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: name}))
	return meta
}

func factoryUtilityArrayMetadata(value *schemametadata.MetadataSchema) *schemametadata.MetadataSchema {
	meta := schemametadata.MetadataSchema_initialize()
	meta.Arrays = append(meta.Arrays, schemametadata.MetadataArray_create(schemametadata.MetadataArray{
		Type: schemametadata.MetadataArrayType_create(schemametadata.MetadataArrayType{Name: "Array<" + value.GetName() + ">", Value: value}),
	}))
	return meta
}

func factoryUtilitySequenceStringMetadata(sequence int) *schemametadata.MetadataSchema {
	meta := schemametadata.MetadataSchema_initialize()
	meta.Atomics = append(meta.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{
		Type: "string",
		Tags: [][]schemametadata.IMetadataTypeTag{{factoryUtilitySequenceTag(sequence)}},
	}))
	return meta
}
