package ttsc

import (
	"fmt"
	"strings"
	"unicode"

	"github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	shimscanner "github.com/microsoft/typescript-go/shim/scanner"

	"github.com/samchon/typia/packages/core/native/analyzer"
	"github.com/samchon/typia/packages/core/native/emitter"
	"github.com/samchon/typia/packages/core/native/metadata"
)

func AnalyzeType(
	checker *shimchecker.Checker,
	t *shimchecker.Type,
	typeNode *ast.Node,
	sourceFiles []*ast.SourceFile,
) (*metadata.Schema, bool) {
	return AnalyzeTypeWithOptions(
		checker,
		t,
		typeNode,
		sourceFiles,
		analyzer.DefaultOptions(),
	)
}

func AnalyzeTypeWithOptions(
	checker *shimchecker.Checker,
	t *shimchecker.Type,
	typeNode *ast.Node,
	sourceFiles []*ast.SourceFile,
	options analyzer.Options,
) (*metadata.Schema, bool) {
	out, ok := analyzer.New(checker, options, nil).WalkWithTypeNode(t, typeNode)
	if ok && !schemaIsAnyOnly(out) {
		return out, true
	}
	if fallbackNode := resolveQualifiedImportedTypeNode(sourceFiles, typeNode); fallbackNode != nil {
		fallbackType := checker.GetTypeFromTypeNode(fallbackNode)
		if fallbackType == nil {
			fallbackType = checker.GetTypeAtLocation(fallbackNode)
		}
		var (
			fallback *metadata.Schema
			ok       bool
		)
		if fallbackType != nil && fallbackType.Flags()&shimchecker.TypeFlagsAny == 0 {
			fallback, ok = analyzer.New(checker, options, nil).Walk(fallbackType)
		} else {
			fallback, ok = analyzer.New(checker, options, nil).WalkWithTypeNode(fallbackType, fallbackNode)
		}
		if ok && !schemaIsAnyOnly(fallback) {
			return fallback, true
		}
	}
	return out, ok
}

func AnalysisOptions(module string, method string) analyzer.Options {
	options := analyzer.DefaultOptions()
	switch module {
	case "json":
		switch method {
		case "schema", "schemas":
			options.Functional = true
		}
	case "reflect":
		switch method {
		case "metadata", "schema", "schemas":
			options.Functional = true
		}
	case "llm":
		switch method {
		case "application", "controller":
			options.Functional = true
		}
	}
	return options
}

func UnsupportedReason(
	checker *shimchecker.Checker,
	t *shimchecker.Type,
	typeNode *ast.Node,
	configTypeNode *ast.Node,
	module string,
	method string,
) string {
	typeName := analyzer.TypeName(checker, t)
	typeText := strings.TrimSpace(typeName)
	if typeNode != nil {
		if text := strings.TrimSpace(shimscanner.GetTextOfNode(typeNode)); text != "" {
			typeText = text
		}
	}
	switch module {
	case "json":
		if isJsonRuntimeContractMethod(method) {
			if strings.Contains(typeText, "bigint") {
				return "json does not support bigint"
			}
			for _, native := range []string{
				"Map<", "Set<", "WeakMap<", "WeakSet<",
				"Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array",
				"Int8Array", "Int16Array", "Int32Array",
				"Float32Array", "Float64Array",
				"BigInt64Array", "BigUint64Array",
				"ArrayBuffer", "SharedArrayBuffer", "DataView",
				"Blob", "File", "RegExp",
			} {
				if strings.Contains(typeText, native) {
					return "json does not support " + strings.TrimSuffix(native, "<")
				}
			}
		}
	case "module":
		switch method {
		case "random", "createRandom":
			for _, native := range []string{"WeakMap<", "WeakSet<", "Map<", "Set<"} {
				if strings.Contains(typeText, native) {
					return "random does not support " + strings.TrimSuffix(native, "<")
				}
			}
		}
	case "protobuf":
		switch method {
		case "message", "createDecode", "createEncode":
			if strings.Contains(typeText, "any") {
				return "protobuf does not support any type"
			}
			if strings.Contains(typeText, "[]") && strings.Contains(typeText, "|") {
				return "protobuf does not support union type with array type"
			}
			for _, kind := range []string{"int64", "uint64"} {
				token := `Type<"` + kind + `">`
				if strings.Contains(typeText, "number") &&
					strings.Contains(typeText, "bigint") &&
					strings.Contains(typeText, token) {
					return `protobuf tags.Type<"` + kind + `"> cannot be used in both number and bigint types. Recommend to remove from number type`
				}
			}
		}
	case "llm":
		if containsTupleTypeNode(typeNode) {
			return "LLM schema does not support tuple type"
		}
		if llmStrictEnabled(configTypeNode) && strings.Contains(typeText, "Record<") {
			return "Strict mode does not allow dynamic property in object"
		}
	case "http":
		if isParameterMethod(method) {
			if strings.Contains(typeText, "any") {
				return "http parameter does not support any type"
			}
			if containsUnionTypeNode(typeNode) || strings.Contains(typeText, "|") {
				return "http parameter does not support union type"
			}
		}
		if isQueryMethod(method) {
			switch {
			case isGenericReferenceTypeNode(typeNode):
				return "http query generic wrapper type is not yet supported"
			case containsTupleTypeNode(typeNode):
				return "http query does not support tuple type"
			case containsUnionTypeNode(typeNode) || strings.Contains(typeText, "|"):
				return "http query does not support union type in property"
			case containsNestedArrayTypeNode(typeNode):
				return "http query array elements must be atomic or constant"
			case containsNestedGenericTypeReference(typeNode, true):
				return "http query does not support nested object type"
			case containsDynamicTypeReference(checker, typeNode):
				return "http query does not support dynamic property"
			}
		}
		if isHeadersMethod(method) {
			switch {
			case containsTupleTypeNode(typeNode):
				return "http headers does not support tuple type"
			case containsUnionTypeNode(typeNode):
				return "http headers does not support union type in property"
			case containsNestedArrayTypeNode(typeNode):
				return "http headers array elements must be atomic or constant"
			case containsNestedGenericTypeReference(typeNode, true):
				return "http headers does not support nested object type"
			}
		}
	case "misc":
		switch method {
		case "clone", "assertClone", "isClone", "validateClone",
			"createClone", "createAssertClone", "createIsClone", "createValidateClone":
			if strings.Contains(typeText, "WeakMap<") {
				return "misc.clone does not support WeakMap type"
			}
			if strings.Contains(typeText, "WeakSet<") {
				return "misc.clone does not support WeakSet type"
			}
		}
	}
	return ""
}

func isJsonRuntimeContractMethod(method string) bool {
	switch method {
	case "application", "schema", "schemas",
		"stringify", "assertStringify", "isStringify", "validateStringify",
		"createStringify", "createAssertStringify", "createIsStringify", "createValidateStringify",
		"parse", "assertParse", "isParse", "validateParse",
		"createAssertParse", "createIsParse", "createValidateParse":
		return true
	default:
		return false
	}
}

func UnsupportedSchemaReason(
	module string,
	method string,
	schema *metadata.Schema,
	configTypeNode *ast.Node,
	typeNode *ast.Node,
) string {
	if schema == nil {
		return ""
	}
	facts := inspectSchema(schema)
	switch module {
	case "llm":
		if isLlmParametersMethod(method) {
			if reason := llmParametersUnsupportedReason(schema); reason != "" {
				return reason
			}
		}
		if facts.bigint {
			return "LLM schema does not support bigint type"
		}
		if facts.tuple {
			return "LLM schema does not support tuple type"
		}
		if facts.mapType {
			return "LLM schema does not support Map type"
		}
		if facts.setType {
			return "LLM schema does not support Set type"
		}
		if facts.unsupportedLlmNative != "" {
			return "LLM schema does not support " + facts.unsupportedLlmNative + " type"
		}
		if llmStrictEnabled(configTypeNode) && facts.dynamicObject {
			return "Strict mode does not allow dynamic property in object"
		}
		if llmStrictEnabled(configTypeNode) && facts.optionalProperty {
			return "Strict mode does not support optional property in object"
		}
	case "http":
		if isQueryMethod(method) && isEmptyObjectSchema(schema) {
			return "http query does not support dynamic property"
		}
		if isFormDataMethod(method) {
			return formDataUnsupportedReason(schema)
		}
		if isHeadersMethod(method) {
			return headersUnsupportedReason(schema)
		}
	case "misc":
		if isCloneMethod(method) {
			if schemaHasNativeName(schema, "WeakMap") {
				return "misc.clone does not support WeakMap type"
			}
			if schemaHasNativeName(schema, "WeakSet") {
				return "misc.clone does not support WeakSet type"
			}
		}
	case "protobuf":
		if !isProtobufContractMethod(method) {
			return ""
		}
		obj := protobufRootObject(schema)
		if obj == nil {
			return "protobuf target type must be a sole and static object type"
		}
		for _, prop := range obj.Properties {
			if prop == nil || prop.Key == nil || !prop.Key.IsSoleLiteral() {
				return "protobuf target type must be a sole and static object type"
			}
		}
		if facts.any {
			return "protobuf does not support any type"
		}
		if facts.function {
			return "protobuf does not support functional type"
		}
		if facts.emptyObject {
			return "protobuf does not support empty object type"
		}
		if facts.invalidObjectPropertyName {
			return "protobuf does not support object type with non-variable property name"
		}
		if facts.tuple {
			return "protobuf does not support tuple type"
		}
		if facts.setType {
			return "protobuf does not support Set type"
		}
		if facts.dynamicObjectMixed {
			return "protobuf does not support object type with mixed static and dynamic key typed properties. Keep statics or dynamic only."
		}
		if facts.dynamicObjectMultiple {
			return "protobuf does not support object type with multiple dynamic key typed properties. Keep only one."
		}
		if facts.dynamicObjectArrayValue {
			return "protobuf does not support dynamic object with array value type"
		}
		if facts.dynamicObjectUnion {
			return "protobuf does not support union type with dynamic object type"
		}
		if facts.dynamicPropertyUnion {
			return "protobuf does not support union type in dynamic property"
		}
		if facts.multiDimArray {
			return "protobuf does not support over two dimensional array type"
		}
		if facts.arrayOptional {
			return "protobuf does not support optional type in array"
		}
		if facts.arrayValueUnion {
			return "protobuf does not support union type in array"
		}
		if facts.dynamicObjectInArray {
			return "protobuf does not support dynamic object in array"
		}
		if facts.arrayUnion {
			return "protobuf does not support union type with array type"
		}
		if facts.mapKeyUnion {
			return "protobuf does not support union key typed map"
		}
		if facts.mapKeyNonAtomic {
			return "protobuf does not support non-atomic key typed map"
		}
		if facts.mapKeyOptional {
			return "protobuf does not support optional key typed map"
		}
		if facts.mapValueArray {
			return "protobuf does not support map type with array value type"
		}
		if facts.mapUnion {
			return "protobuf does not support union type with map type"
		}
		if facts.mapValueUnion {
			return "protobuf does not support union type in map value type"
		}
		if facts.sequenceDuplicate {
			return "protobuf sequence tag is duplicated"
		}
	}
	return ""
}

func isLlmParametersMethod(method string) bool {
	switch method {
	case "parameters", "parse", "createParse", "coerce", "createCoerce", "structuredOutput":
		return true
	default:
		return false
	}
}

func llmParametersUnsupportedReason(schema *metadata.Schema) string {
	if schema == nil {
		return "LLM parameters must be an object type."
	}
	target := schema
	for len(target.Aliases) == 1 && target.Size() == 1 && target.Aliases[0] != nil && target.Aliases[0].Type != nil {
		target = target.Aliases[0].Type.Value
		if target == nil {
			return "LLM parameters must be an object type."
		}
	}
	if len(target.Objects) == 0 {
		return "LLM parameters must be an object type."
	}
	if len(target.Objects) != 1 || target.Size() != 1 {
		return "LLM parameters must be a single object type."
	}
	if target.Nullable {
		return "LLM parameters must be a non-nullable object type."
	}
	if !target.IsRequired() {
		return "LLM parameters must be a non-undefined object type."
	}
	obj := target.Objects[0]
	if obj == nil || obj.Type == nil {
		return "LLM parameters must be an object type."
	}
	if len(obj.Type.DynamicProperties) != 0 || obj.Type.AdditionalProperties != nil {
		return "LLM parameters must not have dynamic keys."
	}
	for _, prop := range obj.Type.Properties {
		if prop == nil || prop.Key == nil || !prop.Key.IsSoleLiteral() {
			return "LLM parameters must not have dynamic keys."
		}
	}
	return ""
}

func isFormDataMethod(method string) bool {
	switch method {
	case "formData", "createFormData",
		"assertFormData", "isFormData", "validateFormData",
		"createAssertFormData", "createIsFormData", "createValidateFormData":
		return true
	default:
		return false
	}
}

func isHeadersMethod(method string) bool {
	switch method {
	case "headers", "createHeaders",
		"assertHeaders", "isHeaders", "validateHeaders",
		"createAssertHeaders", "createIsHeaders", "createValidateHeaders":
		return true
	default:
		return false
	}
}

func isParameterMethod(method string) bool {
	switch method {
	case "parameter", "createParameter":
		return true
	default:
		return false
	}
}

func isQueryMethod(method string) bool {
	switch method {
	case "query", "queryObject", "createQuery",
		"assertQuery", "isQuery", "validateQuery",
		"createAssertQuery", "createIsQuery", "createValidateQuery":
		return true
	default:
		return false
	}
}

func isCloneMethod(method string) bool {
	switch method {
	case "clone", "assertClone", "isClone", "validateClone",
		"createClone", "createAssertClone", "createIsClone", "createValidateClone":
		return true
	default:
		return false
	}
}

func isProtobufContractMethod(method string) bool {
	switch method {
	case "message",
		"encode", "createEncode", "assertEncode", "isEncode", "validateEncode",
		"decode", "createDecode", "assertDecode", "isDecode", "validateDecode":
		return true
	default:
		return false
	}
}

func EmitCall(
	module string,
	method string,
	schema *metadata.Schema,
	typeNode *ast.Node,
	configTypeNode *ast.Node,
) (string, bool, error, bool) {
	httpDecode := func() (string, error) {
		switch method {
		case "parameter", "createParameter":
			return emitter.EmitHttpParameterArrowFunction(schema)
		case "headers", "createHeaders",
			"assertHeaders", "isHeaders", "validateHeaders",
			"createAssertHeaders", "createIsHeaders", "createValidateHeaders":
			return emitter.EmitHttpHeadersObjectArrowFunction(schema)
		case "query", "queryObject", "formData",
			"createQuery", "createFormData",
			"assertQuery", "assertFormData",
			"isQuery", "isFormData",
			"validateQuery", "validateFormData",
			"createAssertQuery", "createAssertFormData",
			"createIsQuery", "createIsFormData",
			"createValidateQuery", "createValidateFormData":
			return emitter.EmitHttpQueryObjectArrowFunction(schema)
		default:
			return "", fmt.Errorf("%w: unsupported http decoder method %q", emitter.ErrUnsupportedSchema, method)
		}
	}
	httpAssert := func() (string, error) {
		decode, err := httpDecode()
		if err != nil {
			return "", err
		}
		assertExpr, err := emitter.EmitAssertArrowFunction(schema)
		if err != nil {
			return "", err
		}
		return fmt.Sprintf(`(input) => (%s)((%s)(input))`, assertExpr, decode), nil
	}
	httpIs := func() (string, error) {
		decode, err := httpDecode()
		if err != nil {
			return "", err
		}
		isExpr, err := emitter.EmitIsArrowFunction(schema)
		if err != nil {
			return "", err
		}
		return fmt.Sprintf(`(input) => { const __decoded = (%s)(input); return ((%s)(__decoded)) ? __decoded : null; }`, decode, isExpr), nil
	}
	httpValidate := func() (string, error) {
		decode, err := httpDecode()
		if err != nil {
			return "", err
		}
		validateExpr, err := emitter.EmitValidateArrowFunction(schema)
		if err != nil {
			return "", err
		}
		return fmt.Sprintf(`(input) => (%s)((%s)(input))`, validateExpr, decode), nil
	}
	switch {
	case module == "module" && (method == "is" || method == "equals"):
		expr, err := emitter.EmitIsArrowFunctionWithEquals(schema, method == "equals")
		return expr, false, err, true
	case module == "module" && (method == "assert" || method == "assertGuard" || method == "assertType" || method == "assertEquals" || method == "assertGuardEquals"):
		assertMethod := "typia.assert"
		equals := false
		switch method {
		case "assertEquals":
			assertMethod = "typia.assertEquals"
			equals = true
		case "assertGuardEquals":
			assertMethod = "typia.assertGuardEquals"
			equals = true
		}
		expr, err := emitter.EmitAssertArrowFunctionWithMethodAndEquals(schema, assertMethod, equals)
		return expr, false, err, true
	case module == "module" && (method == "validate" || method == "validateEquals"):
		expr, err := emitter.EmitValidateArrowFunctionWithEquals(schema, method == "validateEquals")
		return expr, false, err, true
	case module == "module" && (method == "createIs" || method == "createEquals"):
		expr, err := emitter.EmitIsArrowFunctionWithEquals(schema, method == "createEquals")
		return expr, true, err, true
	case module == "module" && (method == "createAssert" || method == "createAssertGuard" || method == "createAssertType" || method == "createAssertEquals" || method == "createAssertGuardEquals"):
		assertMethod := "typia.assert"
		equals := false
		switch method {
		case "createAssertEquals":
			assertMethod = "typia.createAssertEquals"
			equals = true
		case "createAssertGuardEquals":
			assertMethod = "typia.createAssertGuardEquals"
			equals = true
		}
		expr, err := emitter.EmitAssertArrowFunctionWithMethodAndEquals(schema, assertMethod, equals)
		return expr, true, err, true
	case module == "module" && (method == "createValidate" || method == "createValidateEquals"):
		expr, err := emitter.EmitCreateValidateWithStandardSchemaAndEquals(schema, method == "createValidateEquals")
		return expr, true, err, true
	case module == "module" && method == "random":
		expr, err := emitter.EmitRandomArrowFunction(schema)
		return expr, false, err, true
	case module == "module" && method == "createRandom":
		expr, err := emitter.EmitCreateRandomArrowFunction(schema)
		return expr, false, err, true
	case module == "json" && method == "stringify":
		expr, err := emitter.EmitJsonStringifyArrowFunction(schema)
		return expr, false, err, true
	case module == "json" && method == "assertStringify":
		expr, err := emitter.EmitAssertStringifyArrowFunction(schema)
		return expr, false, err, true
	case module == "json" && method == "isStringify":
		expr, err := emitter.EmitIsStringifyArrowFunction(schema)
		return expr, false, err, true
	case module == "json" && method == "validateStringify":
		expr, err := emitter.EmitValidateStringifyArrowFunction(schema)
		return expr, false, err, true
	case module == "json" && (method == "parse" || method == "assertParse" || method == "isParse" || method == "validateParse"):
		expr, err := emitter.EmitJsonParseArrowFunction(schema, method)
		return expr, false, err, true
	case module == "json" && method == "createAssertParse":
		expr, err := emitter.EmitJsonParseArrowFunction(schema, "assertParse")
		return expr, true, err, true
	case module == "json" && method == "createIsParse":
		expr, err := emitter.EmitJsonParseArrowFunction(schema, "isParse")
		return expr, true, err, true
	case module == "json" && method == "createValidateParse":
		expr, err := emitter.EmitJsonParseArrowFunction(schema, "validateParse")
		return expr, true, err, true
	case module == "json" && method == "createStringify":
		expr, err := emitter.EmitJsonStringifyArrowFunction(schema)
		return expr, true, err, true
	case module == "json" && method == "createAssertStringify":
		expr, err := emitter.EmitAssertStringifyArrowFunction(schema)
		return expr, true, err, true
	case module == "json" && method == "createIsStringify":
		expr, err := emitter.EmitIsStringifyArrowFunction(schema)
		return expr, true, err, true
	case module == "json" && method == "createValidateStringify":
		expr, err := emitter.EmitValidateStringifyArrowFunction(schema)
		return expr, true, err, true
	case module == "json" && method == "schema":
		expr, err := emitter.EmitJsonSchemaExpression(schema)
		return expr, true, err, true
	case module == "json" && method == "schemas":
		expr, err := emitter.EmitJsonSchemasExpression(schema)
		return expr, true, err, true
	case module == "misc" && method == "literals":
		expr, err := emitter.EmitMiscLiteralsExpression(schema)
		return expr, true, err, true
	case module == "misc" && method == "clone":
		expr, err := emitter.EmitMiscCloneArrowFunction(schema)
		return expr, false, err, true
	case module == "misc" && method == "assertClone":
		cloneExpr, err := emitter.EmitMiscCloneArrowFunction(schema)
		if err != nil {
			return "", false, err, true
		}
		assertExpr, err := emitter.EmitAssertArrowFunction(schema)
		if err != nil {
			return "", false, err, true
		}
		return fmt.Sprintf(`(input) => (%s)((%s)(input))`, assertExpr, cloneExpr), false, nil, true
	case module == "misc" && method == "isClone":
		cloneExpr, err := emitter.EmitMiscCloneArrowFunction(schema)
		if err != nil {
			return "", false, err, true
		}
		isExpr, err := emitter.EmitIsArrowFunction(schema)
		if err != nil {
			return "", false, err, true
		}
		return fmt.Sprintf(`(input) => { const __clone = (%s)(input); return ((%s)(__clone)) ? __clone : null; }`, cloneExpr, isExpr), false, nil, true
	case module == "misc" && method == "validateClone":
		cloneExpr, err := emitter.EmitMiscCloneArrowFunction(schema)
		if err != nil {
			return "", false, err, true
		}
		validateExpr, err := emitter.EmitValidateArrowFunction(schema)
		if err != nil {
			return "", false, err, true
		}
		return fmt.Sprintf(`(input) => (%s)((%s)(input))`, validateExpr, cloneExpr), false, nil, true
	case module == "misc" && method == "prune":
		expr, err := emitter.EmitMiscPruneArrowFunction(schema)
		return expr, false, err, true
	case module == "misc" && method == "assertPrune":
		pruneExpr, err := emitter.EmitMiscPruneArrowFunction(schema)
		if err != nil {
			return "", false, err, true
		}
		assertExpr, err := emitter.EmitAssertArrowFunction(schema)
		if err != nil {
			return "", false, err, true
		}
		return fmt.Sprintf(`(input) => (%s)((%s)(input))`, assertExpr, pruneExpr), false, nil, true
	case module == "misc" && method == "isPrune":
		pruneExpr, err := emitter.EmitMiscPruneArrowFunction(schema)
		if err != nil {
			return "", false, err, true
		}
		isExpr, err := emitter.EmitIsArrowFunction(schema)
		if err != nil {
			return "", false, err, true
		}
		return fmt.Sprintf(`(input) => { const __pruned = (%s)(input); return ((%s)(__pruned)) ? __pruned : null; }`, pruneExpr, isExpr), false, nil, true
	case module == "misc" && method == "validatePrune":
		pruneExpr, err := emitter.EmitMiscPruneArrowFunction(schema)
		if err != nil {
			return "", false, err, true
		}
		validateExpr, err := emitter.EmitValidateArrowFunction(schema)
		if err != nil {
			return "", false, err, true
		}
		return fmt.Sprintf(`(input) => (%s)((%s)(input))`, validateExpr, pruneExpr), false, nil, true
	case module == "misc" && method == "createClone":
		expr, err := emitter.EmitMiscCloneArrowFunction(schema)
		return expr, true, err, true
	case module == "misc" && method == "createAssertClone":
		cloneExpr, err := emitter.EmitMiscCloneArrowFunction(schema)
		if err != nil {
			return "", true, err, true
		}
		assertExpr, err := emitter.EmitAssertArrowFunction(schema)
		if err != nil {
			return "", true, err, true
		}
		return fmt.Sprintf(`(input) => (%s)((%s)(input))`, assertExpr, cloneExpr), true, nil, true
	case module == "misc" && method == "createIsClone":
		cloneExpr, err := emitter.EmitMiscCloneArrowFunction(schema)
		if err != nil {
			return "", true, err, true
		}
		isExpr, err := emitter.EmitIsArrowFunction(schema)
		if err != nil {
			return "", true, err, true
		}
		return fmt.Sprintf(`(input) => { const __clone = (%s)(input); return ((%s)(__clone)) ? __clone : null; }`, cloneExpr, isExpr), true, nil, true
	case module == "misc" && method == "createValidateClone":
		cloneExpr, err := emitter.EmitMiscCloneArrowFunction(schema)
		if err != nil {
			return "", true, err, true
		}
		validateExpr, err := emitter.EmitValidateArrowFunction(schema)
		if err != nil {
			return "", true, err, true
		}
		return fmt.Sprintf(`(input) => (%s)((%s)(input))`, validateExpr, cloneExpr), true, nil, true
	case module == "misc" && method == "createPrune":
		expr, err := emitter.EmitMiscPruneArrowFunction(schema)
		return expr, true, err, true
	case module == "misc" && method == "createAssertPrune":
		pruneExpr, err := emitter.EmitMiscPruneArrowFunction(schema)
		if err != nil {
			return "", true, err, true
		}
		assertExpr, err := emitter.EmitAssertArrowFunction(schema)
		if err != nil {
			return "", true, err, true
		}
		return fmt.Sprintf(`(input) => (%s)((%s)(input))`, assertExpr, pruneExpr), true, nil, true
	case module == "misc" && method == "createIsPrune":
		pruneExpr, err := emitter.EmitMiscPruneArrowFunction(schema)
		if err != nil {
			return "", true, err, true
		}
		isExpr, err := emitter.EmitIsArrowFunction(schema)
		if err != nil {
			return "", true, err, true
		}
		return fmt.Sprintf(`(input) => { const __pruned = (%s)(input); return ((%s)(__pruned)) ? __pruned : null; }`, pruneExpr, isExpr), true, nil, true
	case module == "misc" && method == "createValidatePrune":
		pruneExpr, err := emitter.EmitMiscPruneArrowFunction(schema)
		if err != nil {
			return "", true, err, true
		}
		validateExpr, err := emitter.EmitValidateArrowFunction(schema)
		if err != nil {
			return "", true, err, true
		}
		return fmt.Sprintf(`(input) => (%s)((%s)(input))`, validateExpr, pruneExpr), true, nil, true
	case module == "notations":
		if kind, mode, create, ok := notationMethod(method); ok {
			notationExpr, err := emitter.EmitNotationArrowFunction(schema, kind)
			if err != nil {
				return "", create, err, true
			}
			switch mode {
			case "plain":
				return notationExpr, create, nil, true
			case "assert":
				assertExpr, err := emitter.EmitAssertArrowFunction(schema)
				if err != nil {
					return "", create, err, true
				}
				return fmt.Sprintf(`(input) => (%s)((%s)(input))`, notationExpr, assertExpr), create, nil, true
			case "is":
				isExpr, err := emitter.EmitIsArrowFunction(schema)
				if err != nil {
					return "", create, err, true
				}
				return fmt.Sprintf(`(input) => ((%s)(input)) ? (%s)(input) : null`, isExpr, notationExpr), create, nil, true
			case "validate":
				validateExpr, err := emitter.EmitValidateArrowFunction(schema)
				if err != nil {
					return "", create, err, true
				}
				return fmt.Sprintf(`(input) => { const __result = (%s)(input); if (__result.success) __result.data = (%s)(input); return __result; }`, validateExpr, notationExpr), create, nil, true
			}
		}
	case module == "reflect" && method == "schema":
		expr, err := emitter.EmitReflectSchemaExpression(schema)
		return expr, true, err, true
	case module == "reflect" && method == "schemas":
		expr, err := emitter.EmitReflectSchemasFromSchema(schema)
		return expr, true, err, true
	case module == "reflect" && method == "name":
		expr, err := emitter.EmitReflectNameExpression(schema)
		return expr, true, err, true
	case module == "http" && (method == "parameter" || method == "query" || method == "queryObject" || method == "headers" || method == "formData"):
		expr, err := httpDecode()
		return expr, false, err, true
	case module == "http" && (method == "assertQuery" || method == "assertHeaders" || method == "assertFormData"):
		expr, err := httpAssert()
		return expr, false, err, true
	case module == "http" && (method == "isQuery" || method == "isHeaders" || method == "isFormData"):
		expr, err := httpIs()
		return expr, false, err, true
	case module == "http" && (method == "validateQuery" || method == "validateHeaders" || method == "validateFormData"):
		expr, err := httpValidate()
		return expr, false, err, true
	case module == "http" && (method == "createParameter" || method == "createQuery" || method == "createHeaders" || method == "createFormData"):
		expr, err := httpDecode()
		return expr, true, err, true
	case module == "http" && (method == "createAssertQuery" || method == "createAssertHeaders" || method == "createAssertFormData"):
		expr, err := httpAssert()
		return expr, true, err, true
	case module == "http" && (method == "createIsQuery" || method == "createIsHeaders" || method == "createIsFormData"):
		expr, err := httpIs()
		return expr, true, err, true
	case module == "http" && (method == "createValidateQuery" || method == "createValidateHeaders" || method == "createValidateFormData"):
		expr, err := httpValidate()
		return expr, true, err, true
	case module == "protobuf" && method == "message":
		expr, err := emitter.EmitProtobufMessageExpression(schema)
		return expr, true, err, true
	case module == "protobuf" && method == "encode":
		expr, err := emitter.EmitProtobufEncodeArrowFunction(schema)
		return expr, false, err, true
	case module == "protobuf" && method == "decode":
		expr, err := emitter.EmitProtobufDecodeArrowFunction(schema)
		return expr, false, err, true
	case module == "protobuf" && method == "createEncode":
		expr, err := emitter.EmitProtobufEncodeArrowFunction(schema)
		return expr, true, err, true
	case module == "protobuf" && method == "createDecode":
		expr, err := emitter.EmitProtobufDecodeArrowFunction(schema)
		return expr, true, err, true
	case module == "protobuf" && method == "assertEncode":
		encodeExpr, err := emitter.EmitProtobufEncodeArrowFunction(schema)
		if err != nil {
			return "", false, err, true
		}
		assertExpr, err := emitter.EmitAssertArrowFunction(schema)
		if err != nil {
			return "", false, err, true
		}
		return fmt.Sprintf(`(input) => (%s)((%s)(input))`, encodeExpr, assertExpr), false, nil, true
	case module == "protobuf" && method == "createAssertEncode":
		encodeExpr, err := emitter.EmitProtobufEncodeArrowFunction(schema)
		if err != nil {
			return "", true, err, true
		}
		assertExpr, err := emitter.EmitAssertArrowFunction(schema)
		if err != nil {
			return "", true, err, true
		}
		return fmt.Sprintf(`(input) => (%s)((%s)(input))`, encodeExpr, assertExpr), true, nil, true
	case module == "protobuf" && method == "isEncode":
		encodeExpr, err := emitter.EmitProtobufEncodeArrowFunction(schema)
		if err != nil {
			return "", false, err, true
		}
		isExpr, err := emitter.EmitIsArrowFunction(schema)
		if err != nil {
			return "", false, err, true
		}
		return fmt.Sprintf(`(input) => ((%s)(input)) ? (%s)(input) : null`, isExpr, encodeExpr), false, nil, true
	case module == "protobuf" && method == "createIsEncode":
		encodeExpr, err := emitter.EmitProtobufEncodeArrowFunction(schema)
		if err != nil {
			return "", true, err, true
		}
		isExpr, err := emitter.EmitIsArrowFunction(schema)
		if err != nil {
			return "", true, err, true
		}
		return fmt.Sprintf(`(input) => ((%s)(input)) ? (%s)(input) : null`, isExpr, encodeExpr), true, nil, true
	case module == "protobuf" && method == "validateEncode":
		encodeExpr, err := emitter.EmitProtobufEncodeArrowFunction(schema)
		if err != nil {
			return "", false, err, true
		}
		validateExpr, err := emitter.EmitValidateArrowFunction(schema)
		if err != nil {
			return "", false, err, true
		}
		return fmt.Sprintf(`(input) => { const __result = (%s)(input); return __result.success ? { success: true, data: (%s)(input) } : __result; }`, validateExpr, encodeExpr), false, nil, true
	case module == "protobuf" && method == "createValidateEncode":
		encodeExpr, err := emitter.EmitProtobufEncodeArrowFunction(schema)
		if err != nil {
			return "", true, err, true
		}
		validateExpr, err := emitter.EmitValidateArrowFunction(schema)
		if err != nil {
			return "", true, err, true
		}
		return fmt.Sprintf(`(input) => { const __result = (%s)(input); return __result.success ? { success: true, data: (%s)(input) } : __result; }`, validateExpr, encodeExpr), true, nil, true
	case module == "protobuf" && method == "assertDecode":
		decodeExpr, err := emitter.EmitProtobufDecodeArrowFunction(schema)
		if err != nil {
			return "", false, err, true
		}
		assertExpr, err := emitter.EmitAssertArrowFunction(schema)
		if err != nil {
			return "", false, err, true
		}
		return fmt.Sprintf(`(input) => (%s)((%s)(input))`, assertExpr, decodeExpr), false, nil, true
	case module == "protobuf" && method == "createAssertDecode":
		decodeExpr, err := emitter.EmitProtobufDecodeArrowFunction(schema)
		if err != nil {
			return "", true, err, true
		}
		assertExpr, err := emitter.EmitAssertArrowFunction(schema)
		if err != nil {
			return "", true, err, true
		}
		return fmt.Sprintf(`(input) => (%s)((%s)(input))`, assertExpr, decodeExpr), true, nil, true
	case module == "protobuf" && method == "isDecode":
		decodeExpr, err := emitter.EmitProtobufDecodeArrowFunction(schema)
		if err != nil {
			return "", false, err, true
		}
		isExpr, err := emitter.EmitIsArrowFunction(schema)
		if err != nil {
			return "", false, err, true
		}
		return fmt.Sprintf(`(input) => { const __decoded = (%s)(input); return ((%s)(__decoded)) ? __decoded : null; }`, decodeExpr, isExpr), false, nil, true
	case module == "protobuf" && method == "createIsDecode":
		decodeExpr, err := emitter.EmitProtobufDecodeArrowFunction(schema)
		if err != nil {
			return "", true, err, true
		}
		isExpr, err := emitter.EmitIsArrowFunction(schema)
		if err != nil {
			return "", true, err, true
		}
		return fmt.Sprintf(`(input) => { const __decoded = (%s)(input); return ((%s)(__decoded)) ? __decoded : null; }`, decodeExpr, isExpr), true, nil, true
	case module == "protobuf" && method == "validateDecode":
		decodeExpr, err := emitter.EmitProtobufDecodeArrowFunction(schema)
		if err != nil {
			return "", false, err, true
		}
		validateExpr, err := emitter.EmitValidateArrowFunction(schema)
		if err != nil {
			return "", false, err, true
		}
		return fmt.Sprintf(`(input) => (%s)((%s)(input))`, validateExpr, decodeExpr), false, nil, true
	case module == "protobuf" && method == "createValidateDecode":
		decodeExpr, err := emitter.EmitProtobufDecodeArrowFunction(schema)
		if err != nil {
			return "", true, err, true
		}
		validateExpr, err := emitter.EmitValidateArrowFunction(schema)
		if err != nil {
			return "", true, err, true
		}
		return fmt.Sprintf(`(input) => (%s)((%s)(input))`, validateExpr, decodeExpr), true, nil, true
	case module == "llm" && method == "application":
		expr, err := emitter.EmitLlmApplicationArrowFunctionWithConfig(schema, llmStrictEnabled(configTypeNode))
		return expr, false, err, true
	case module == "llm" && method == "parameters":
		expr, err := emitter.EmitLlmParametersExpressionWithConfig(schema, llmStrictEnabled(configTypeNode))
		return expr, true, err, true
	case module == "llm" && method == "schema":
		expr, err := emitter.EmitLlmSchemaArrowFunctionWithConfig(schema, rootIdentifier(typeNode), llmStrictEnabled(configTypeNode))
		return expr, false, err, true
	case module == "llm" && method == "parse":
		expr, err := emitter.EmitLlmParseArrowFunctionWithConfig(schema, llmStrictEnabled(configTypeNode))
		return expr, false, err, true
	case module == "llm" && method == "createParse":
		expr, err := emitter.EmitLlmParseArrowFunctionWithConfig(schema, llmStrictEnabled(configTypeNode))
		return expr, true, err, true
	case module == "llm" && method == "coerce":
		expr, err := emitter.EmitLlmCoerceArrowFunctionWithConfig(schema, llmStrictEnabled(configTypeNode))
		return expr, false, err, true
	case module == "llm" && method == "createCoerce":
		expr, err := emitter.EmitLlmCoerceArrowFunctionWithConfig(schema, llmStrictEnabled(configTypeNode))
		return expr, true, err, true
	case module == "llm" && method == "structuredOutput":
		expr, err := emitter.EmitLlmStructuredOutputExpressionWithConfig(schema, llmEqualsEnabled(configTypeNode), llmStrictEnabled(configTypeNode))
		return expr, true, err, true
	case module == "llm" && method == "controller":
		expr, err := emitter.EmitLlmControllerArrowFunctionWithConfig(schema, llmStrictEnabled(configTypeNode))
		return expr, false, err, true
	}
	return "", false, nil, false
}

func llmEqualsEnabled(configTypeNode *ast.Node) bool {
	if configTypeNode == nil {
		return false
	}
	text := strings.TrimSpace(shimscanner.GetTextOfNode(configTypeNode))
	return strings.Contains(text, "equals") && strings.Contains(text, "true")
}

func rootIdentifier(typeNode *ast.Node) string {
	if typeNode == nil {
		return ""
	}
	text := strings.TrimSpace(shimscanner.GetTextOfNode(typeNode))
	if text == "" {
		return ""
	}
	for _, r := range text {
		if !(r == '_' || r == '$' || r == '.' ||
			(r >= '0' && r <= '9') ||
			(r >= 'A' && r <= 'Z') ||
			(r >= 'a' && r <= 'z')) {
			return ""
		}
	}
	switch text {
	case "string", "number", "boolean", "bigint", "null", "undefined", "any":
		return ""
	}
	return text
}

func DemoSchema(name string) (*metadata.Schema, error) {
	switch strings.ToLower(name) {
	case "any":
		s := metadata.NewSchema()
		s.Any = true
		return s, nil
	case "boolean":
		return metadata.NewSchema().AddAtomic(metadata.AtomicBoolean), nil
	case "number":
		return metadata.NewSchema().AddAtomic(metadata.AtomicNumber), nil
	case "bigint":
		return metadata.NewSchema().AddAtomic(metadata.AtomicBigint), nil
	case "string", "":
		return metadata.NewSchema().AddAtomic(metadata.AtomicString), nil
	default:
		return nil, fmt.Errorf("unknown --type value %q (want: string|number|boolean|bigint|any)", name)
	}
}

func DemoArrow(name string) (string, error) {
	schema, err := DemoSchema(name)
	if err != nil {
		return "", err
	}
	return emitter.EmitIsArrowFunction(schema)
}

type schemaFacts struct {
	any                       bool
	bigint                    bool
	dynamicObject             bool
	function                  bool
	arrayUnion                bool
	arrayOptional             bool
	arrayValueUnion           bool
	dynamicObjectInArray      bool
	dynamicObjectArrayValue   bool
	dynamicObjectMixed        bool
	dynamicObjectMultiple     bool
	dynamicObjectUnion        bool
	dynamicPropertyUnion      bool
	emptyObject               bool
	invalidObjectPropertyName bool
	mapKeyNonAtomic           bool
	mapKeyOptional            bool
	mapKeyUnion               bool
	mapUnion                  bool
	mapValueArray             bool
	mapValueUnion             bool
	multiDimArray             bool
	optionalProperty          bool
	sequenceDuplicate         bool
	tuple                     bool
	mapType                   bool
	setType                   bool
	unsupportedLlmNative      string
}

type schemaInspector struct {
	facts   schemaFacts
	schemas map[*metadata.Schema]struct{}
	arrays  map[*metadata.ArrayType]struct{}
	tuples  map[*metadata.TupleType]struct{}
	objects map[*metadata.ObjectType]struct{}
	aliases map[*metadata.AliasType]struct{}
}

func inspectSchema(schema *metadata.Schema) schemaFacts {
	inspector := schemaInspector{
		schemas: make(map[*metadata.Schema]struct{}),
		arrays:  make(map[*metadata.ArrayType]struct{}),
		tuples:  make(map[*metadata.TupleType]struct{}),
		objects: make(map[*metadata.ObjectType]struct{}),
		aliases: make(map[*metadata.AliasType]struct{}),
	}
	inspector.visitSchema(schema)
	return inspector.facts
}

func formDataUnsupportedReason(schema *metadata.Schema) string {
	if schema == nil {
		return ""
	}
	if schema.Size() != 1 || len(schema.Objects) != 1 || !schema.IsRequired() || schema.Nullable {
		return "http formData target type must be a sole object type"
	}
	ref := schema.Objects[0]
	if ref == nil || ref.Type == nil {
		return "http formData target type must be a sole object type"
	}
	obj := ref.Type
	if len(obj.DynamicProperties) != 0 || obj.AdditionalProperties != nil {
		return "http formData does not support dynamic property"
	}
	for _, prop := range obj.Properties {
		if prop == nil || prop.Key == nil || prop.Value == nil {
			continue
		}
		if !prop.Key.IsSoleLiteral() {
			return "http formData does not support dynamic property"
		}
		if reason := formDataValueUnsupportedReason(prop.Value); reason != "" {
			return reason
		}
	}
	return ""
}

func headersUnsupportedReason(schema *metadata.Schema) string {
	if schema == nil {
		return ""
	}
	if schema.Size() != 1 || len(schema.Objects) != 1 || !schema.IsRequired() || schema.Nullable {
		return "http headers target type must be a sole object type"
	}
	ref := schema.Objects[0]
	if ref == nil || ref.Type == nil {
		return ""
	}
	lowercaseKeys := map[string][]string{}
	for _, prop := range ref.Type.Properties {
		if prop == nil || prop.Key == nil {
			return "http headers does not support dynamic property"
		}
		key, ok := prop.Key.GetSoleLiteral()
		if !ok {
			return "http headers does not support dynamic property"
		}
		lowercase := strings.ToLower(key)
		lowercaseKeys[lowercase] = append(lowercaseKeys[lowercase], key)
		if reason := headersPropertyUnsupportedReason(key, prop.Value); reason != "" {
			return reason
		}
	}
	for lowercase, keys := range lowercaseKeys {
		if len(keys) > 1 {
			return "http headers has duplicated keys when converting to lowercase letters: " + strings.Join(keys, ", ") + " -> " + lowercase
		}
	}
	return ""
}

func headersPropertyUnsupportedReason(key string, schema *metadata.Schema) string {
	if schema == nil {
		return ""
	}
	if len(schema.Aliases) == 1 && schema.Size() == 1 && schema.Aliases[0] != nil && schema.Aliases[0].Type != nil {
		return headersPropertyUnsupportedReason(key, schema.Aliases[0].Type.Value)
	}
	if len(schema.Tuples) != 0 {
		return "http headers does not support tuple type"
	}
	if headersPropertyIsUnion(schema) {
		return "http headers does not support union type in property"
	}
	if len(schema.Objects) != 0 || len(schema.Sets) != 0 || len(schema.Maps) != 0 || len(schema.Natives) != 0 {
		return "http headers does not support nested object type"
	}
	if schema.Nullable {
		return "http headers does not support nullable type in property"
	}
	isArray := len(schema.Arrays) != 0
	if isArray {
		if schema.Size() != 1 || len(schema.Arrays) != 1 || schema.Arrays[0] == nil || schema.Arrays[0].Type == nil {
			return "http headers does not support union type in property"
		}
		if reason := headersArrayElementUnsupportedReason(schema.Arrays[0].Type.Value); reason != "" {
			return reason
		}
	}
	lowercase := strings.ToLower(key)
	if lowercase == "set-cookie" && !isArray {
		return "http headers set-cookie property must be array"
	}
	if headerSingularKeys[lowercase] && isArray {
		return "http headers " + key + " property cannot be array"
	}
	return ""
}

func headersPropertyIsUnion(schema *metadata.Schema) bool {
	if schema == nil {
		return false
	}
	atomics := map[string]struct{}{}
	for _, atomic := range schema.Atomics {
		atomics[string(atomic.Type)] = struct{}{}
	}
	for _, constant := range schema.Constants {
		atomics[string(constant.Type)] = struct{}{}
	}
	if len(schema.Templates) != 0 {
		atomics[string(metadata.AtomicString)] = struct{}{}
	}
	return len(atomics)+len(schema.Arrays)+len(schema.Tuples)+len(schema.Natives)+len(schema.Maps)+len(schema.Objects) > 1
}

func protobufRootObject(schema *metadata.Schema) *metadata.ObjectType {
	if schema == nil || !schema.IsRequired() || schema.Nullable {
		return nil
	}
	if len(schema.Objects) == 1 && schema.Size() == 1 && schema.Objects[0] != nil {
		obj := schema.Objects[0].Type
		if obj == nil ||
			len(obj.Properties) == 0 ||
			len(obj.DynamicProperties) != 0 ||
			obj.AdditionalProperties != nil {
			return nil
		}
		return obj
	}
	if len(schema.Aliases) == 1 && schema.Aliases[0] != nil && schema.Aliases[0].Type != nil {
		return protobufRootObject(schema.Aliases[0].Type.Value)
	}
	return nil
}

func headersArrayElementUnsupportedReason(schema *metadata.Schema) string {
	if schema == nil {
		return ""
	}
	if _, ok := schema.IsSoleAtomic(); ok {
		return ""
	}
	if len(schema.Constants) == 1 && len(schema.Constants[0].Values) == 1 {
		return ""
	}
	if len(schema.Templates) == 1 && schema.Size() == 1 {
		return ""
	}
	return "http headers array elements must be atomic or constant"
}

func formDataValueUnsupportedReason(schema *metadata.Schema) string {
	if schema == nil {
		return ""
	}
	if len(schema.Aliases) == 1 && schema.Size() == 1 && schema.Aliases[0] != nil && schema.Aliases[0].Type != nil {
		return formDataValueUnsupportedReason(schema.Aliases[0].Type.Value)
	}
	if len(schema.Tuples) != 0 {
		return "http formData does not support tuple type"
	}
	if len(schema.Sets) != 0 {
		return "http formData does not support Set type"
	}
	if len(schema.Maps) != 0 {
		return "http formData does not support Map type"
	}
	if len(schema.Arrays) != 0 {
		if schema.Size() != 1 || len(schema.Arrays) != 1 {
			return "http formData does not support union type in array"
		}
		ref := schema.Arrays[0]
		if ref == nil || ref.Type == nil || ref.Type.Value == nil {
			return "http formData does not support array type"
		}
		elem := ref.Type.Value
		if elem.Size() > 1 {
			return "http formData does not support union type in array"
		}
		if reason := formDataArrayElementUnsupportedReason(elem); reason != "" {
			return reason
		}
		return ""
	}
	if schema.Size() > 1 {
		return "http formData does not support union type in property"
	}
	if len(schema.Objects) != 0 {
		return "http formData does not support nested object type"
	}
	return ""
}

func formDataArrayElementUnsupportedReason(schema *metadata.Schema) string {
	if schema == nil {
		return ""
	}
	if _, ok := schema.IsSoleAtomic(); ok {
		return ""
	}
	if len(schema.Constants) == 1 && len(schema.Constants[0].Values) == 1 {
		return ""
	}
	if len(schema.Templates) == 1 && schema.Size() == 1 {
		return ""
	}
	if len(schema.Natives) == 1 && schema.Size() == 1 {
		switch schema.Natives[0].Name {
		case "Blob", "File":
			return ""
		}
	}
	return "http formData array elements must be atomic, constant, or Blob/File"
}

func (i *schemaInspector) visitSchema(schema *metadata.Schema) {
	if schema == nil {
		return
	}
	if _, ok := i.schemas[schema]; ok {
		return
	}
	i.schemas[schema] = struct{}{}
	i.facts.any = i.facts.any || schema.Any
	i.facts.function = i.facts.function || len(schema.Functions) != 0
	i.facts.mapType = i.facts.mapType || len(schema.Maps) != 0
	i.facts.setType = i.facts.setType || len(schema.Sets) != 0
	if len(schema.Arrays) != 0 && schema.Size() > 1 {
		i.facts.arrayUnion = true
	}
	for _, atomic := range schema.Atomics {
		if atomic.Type == metadata.AtomicBigint {
			i.facts.bigint = true
		}
	}
	for _, constant := range schema.Constants {
		if constant.Type == metadata.AtomicBigint {
			i.facts.bigint = true
		}
	}
	for _, native := range schema.Natives {
		if i.facts.unsupportedLlmNative != "" {
			continue
		}
		switch native.Name {
		case "Date", "Blob", "File":
			continue
		default:
			i.facts.unsupportedLlmNative = native.Name
		}
	}
	for _, array := range schema.Arrays {
		if array == nil || array.Type == nil {
			continue
		}
		if _, ok := i.arrays[array.Type]; ok {
			continue
		}
		i.arrays[array.Type] = struct{}{}
		if array.Type.Value != nil {
			if len(array.Type.Value.Arrays) != 0 {
				i.facts.multiDimArray = true
			}
			if !array.Type.Value.IsRequired() || array.Type.Value.Nullable {
				i.facts.arrayOptional = true
			}
			if arrayValueIsUnion(array.Type.Value) {
				i.facts.arrayValueUnion = true
			}
			if len(array.Type.Value.Maps) != 0 || schemaHasDynamicObject(array.Type.Value) {
				i.facts.dynamicObjectInArray = true
			}
		}
		i.visitSchema(array.Type.Value)
	}
	for _, tuple := range schema.Tuples {
		if tuple == nil || tuple.Type == nil {
			continue
		}
		i.facts.tuple = true
		if _, ok := i.tuples[tuple.Type]; ok {
			continue
		}
		i.tuples[tuple.Type] = struct{}{}
		for _, elem := range tuple.Type.Elements {
			i.visitSchema(elem)
		}
	}
	for _, obj := range schema.Objects {
		if obj == nil || obj.Type == nil {
			continue
		}
		if len(obj.Type.Properties) == 0 &&
			len(obj.Type.DynamicProperties) == 0 &&
			obj.Type.AdditionalProperties == nil {
			i.facts.emptyObject = true
		}
		dynamicCount := 0
		staticCount := 0
		if _, ok := i.objects[obj.Type]; ok {
			continue
		}
		i.objects[obj.Type] = struct{}{}
		for _, prop := range obj.Type.Properties {
			if prop == nil {
				continue
			}
			if prop.Key == nil || !prop.Key.IsSoleLiteral() {
				dynamicCount++
				i.facts.dynamicObject = true
				if prop.Value != nil && len(prop.Value.Arrays) != 0 {
					i.facts.dynamicObjectArrayValue = true
				}
				if prop.Value != nil && prop.Value.Size() > 1 {
					i.facts.dynamicPropertyUnion = true
				}
			} else {
				staticCount++
				if key, ok := prop.Key.GetSoleLiteral(); ok && !isVariableName(key) {
					i.facts.invalidObjectPropertyName = true
				}
			}
			if prop.Value != nil && !prop.Value.IsRequired() {
				i.facts.optionalProperty = true
			}
			i.visitSchema(prop.Key)
			i.visitSchema(prop.Value)
		}
		if obj.Type.AdditionalProperties != nil {
			dynamicCount++
			i.facts.dynamicObject = true
			if len(obj.Type.AdditionalProperties.Arrays) != 0 {
				i.facts.dynamicObjectArrayValue = true
			}
			if obj.Type.AdditionalProperties.Size() > 1 {
				i.facts.dynamicPropertyUnion = true
			}
			i.visitSchema(obj.Type.AdditionalProperties)
		}
		if hasInvalidProtobufSequence(obj.Type) {
			i.facts.sequenceDuplicate = true
		}
		if dynamicCount > 1 {
			i.facts.dynamicObjectMultiple = true
		}
		if dynamicCount > 0 && staticCount > 0 {
			i.facts.dynamicObjectMixed = true
		}
		if dynamicCount > 0 && schema.Size() > 1 {
			i.facts.dynamicObjectUnion = true
		}
	}
	for _, alias := range schema.Aliases {
		if alias == nil || alias.Type == nil {
			continue
		}
		if _, ok := i.aliases[alias.Type]; ok {
			continue
		}
		i.aliases[alias.Type] = struct{}{}
		i.visitSchema(alias.Type.Value)
	}
	for _, setRef := range schema.Sets {
		if setRef != nil {
			i.visitSchema(setRef.Value)
		}
	}
	for _, mapRef := range schema.Maps {
		if mapRef == nil {
			continue
		}
		if mapRef.Key != nil {
			if mapRef.Key.Size() > 1 {
				i.facts.mapKeyUnion = true
			}
			if !mapKeyIsAtomic(mapRef.Key) {
				i.facts.mapKeyNonAtomic = true
			}
			if !mapRef.Key.IsRequired() || mapRef.Key.Nullable {
				i.facts.mapKeyOptional = true
			}
		}
		if mapRef.Value != nil {
			if len(mapRef.Value.Arrays) != 0 {
				i.facts.mapValueArray = true
			}
			if mapRef.Value.Size() > 1 {
				i.facts.mapValueUnion = true
			}
		}
		if schema.Size() > 1 {
			i.facts.mapUnion = true
		}
		i.visitSchema(mapRef.Key)
		i.visitSchema(mapRef.Value)
	}
	if schema.Escaped != nil {
		i.visitSchema(schema.Escaped.Original)
		i.visitSchema(schema.Escaped.Returns)
	}
	if schema.Rest != nil {
		i.visitSchema(schema.Rest)
	}
	for _, fn := range schema.Functions {
		if fn == nil {
			continue
		}
		for _, param := range fn.Parameters {
			if param == nil {
				continue
			}
			i.visitSchema(param.Type)
		}
		i.visitSchema(fn.Output)
	}
}

func llmStrictEnabled(configTypeNode *ast.Node) bool {
	if configTypeNode == nil {
		return false
	}
	text := strings.TrimSpace(shimscanner.GetTextOfNode(configTypeNode))
	return strings.Contains(text, "strict") && strings.Contains(text, "true")
}

func arrayValueIsUnion(schema *metadata.Schema) bool {
	if schema == nil || schema.Size() <= 1 {
		return false
	}
	if len(schema.Constants) == 1 && len(schema.Constants[0].Values) == schema.Size() {
		return false
	}
	return true
}

func schemaHasDynamicObject(schema *metadata.Schema) bool {
	if schema == nil {
		return false
	}
	for _, obj := range schema.Objects {
		if obj == nil || obj.Type == nil {
			continue
		}
		if obj.Type.AdditionalProperties != nil {
			return true
		}
		for _, prop := range obj.Type.Properties {
			if prop == nil || prop.Key == nil || !prop.Key.IsSoleLiteral() {
				return true
			}
		}
	}
	return false
}

func schemaHasNativeName(schema *metadata.Schema, name string) bool {
	return schemaHasNativeNameInternal(schema, name, map[*metadata.Schema]struct{}{})
}

func schemaHasNativeNameInternal(schema *metadata.Schema, name string, visited map[*metadata.Schema]struct{}) bool {
	if schema == nil {
		return false
	}
	if _, exists := visited[schema]; exists {
		return false
	}
	visited[schema] = struct{}{}
	for _, native := range schema.Natives {
		if native.Name == name {
			return true
		}
	}
	for _, array := range schema.Arrays {
		if array != nil && array.Type != nil && schemaHasNativeNameInternal(array.Type.Value, name, visited) {
			return true
		}
	}
	for _, tuple := range schema.Tuples {
		if tuple == nil || tuple.Type == nil {
			continue
		}
		for _, elem := range tuple.Type.Elements {
			if schemaHasNativeNameInternal(elem, name, visited) {
				return true
			}
		}
	}
	for _, obj := range schema.Objects {
		if obj == nil || obj.Type == nil {
			continue
		}
		for _, prop := range obj.Type.Properties {
			if prop != nil && schemaHasNativeNameInternal(prop.Value, name, visited) {
				return true
			}
		}
		if schemaHasNativeNameInternal(obj.Type.AdditionalProperties, name, visited) {
			return true
		}
	}
	for _, alias := range schema.Aliases {
		if alias != nil && alias.Type != nil && schemaHasNativeNameInternal(alias.Type.Value, name, visited) {
			return true
		}
	}
	for _, setRef := range schema.Sets {
		if setRef != nil && schemaHasNativeNameInternal(setRef.Value, name, visited) {
			return true
		}
	}
	for _, mapRef := range schema.Maps {
		if mapRef != nil && (schemaHasNativeNameInternal(mapRef.Key, name, visited) || schemaHasNativeNameInternal(mapRef.Value, name, visited)) {
			return true
		}
	}
	if schemaHasNativeNameInternal(schema.Rest, name, visited) {
		return true
	}
	if schema.Escaped != nil && (schemaHasNativeNameInternal(schema.Escaped.Original, name, visited) || schemaHasNativeNameInternal(schema.Escaped.Returns, name, visited)) {
		return true
	}
	for _, fn := range schema.Functions {
		if fn == nil {
			continue
		}
		for _, param := range fn.Parameters {
			if param != nil && schemaHasNativeNameInternal(param.Type, name, visited) {
				return true
			}
		}
		if schemaHasNativeNameInternal(fn.Output, name, visited) {
			return true
		}
	}
	return false
}

func containsTupleTypeNode(node *ast.Node) bool {
	if node == nil {
		return false
	}
	if node.Kind == ast.KindTupleType || node.Kind == ast.KindNamedTupleMember {
		return true
	}
	found := false
	node.ForEachChild(func(child *ast.Node) bool {
		if containsTupleTypeNode(child) {
			found = true
			return true
		}
		return false
	})
	return found
}

func containsUnionTypeNode(node *ast.Node) bool {
	if node == nil {
		return false
	}
	if node.Kind == ast.KindUnionType {
		return true
	}
	found := false
	node.ForEachChild(func(child *ast.Node) bool {
		if containsUnionTypeNode(child) {
			found = true
			return true
		}
		return false
	})
	return found
}

func containsNestedArrayTypeNode(node *ast.Node) bool {
	if node == nil {
		return false
	}
	if node.Kind == ast.KindArrayType {
		array := node.AsArrayTypeNode()
		if array != nil && array.ElementType != nil &&
			(array.ElementType.Kind == ast.KindArrayType || array.ElementType.Kind == ast.KindTupleType) {
			return true
		}
	}
	found := false
	node.ForEachChild(func(child *ast.Node) bool {
		if containsNestedArrayTypeNode(child) {
			found = true
			return true
		}
		return false
	})
	return found
}

func containsNestedGenericTypeReference(node *ast.Node, root bool) bool {
	if node == nil {
		return false
	}
	if !root && node.Kind == ast.KindTypeReference {
		ref := node.AsTypeReferenceNode()
		if ref != nil && ref.TypeArguments != nil && len(ref.TypeArguments.Nodes) != 0 {
			return true
		}
	}
	found := false
	node.ForEachChild(func(child *ast.Node) bool {
		if containsNestedGenericTypeReference(child, false) {
			found = true
			return true
		}
		return false
	})
	return found
}

func containsDynamicTypeReference(checker *shimchecker.Checker, node *ast.Node) bool {
	if node == nil {
		return false
	}
	switch node.Kind {
	case ast.KindTypeLiteral:
		return declarationHasDynamicProperty(node)
	case ast.KindTypeReference:
		ref := node.AsTypeReferenceNode()
		if ref == nil || ref.TypeName == nil {
			return false
		}
		nameNode := ref.TypeName.AsNode()
		if nameNode == nil || nameNode.Symbol() == nil {
			return false
		}
		for _, decl := range relatedTypeDeclarations(checker, nameNode.Symbol()) {
			if declarationHasDynamicProperty(decl) {
				return true
			}
		}
	}
	return false
}

func isGenericReferenceTypeNode(node *ast.Node) bool {
	if node == nil || node.Kind != ast.KindTypeReference {
		return false
	}
	ref := node.AsTypeReferenceNode()
	return ref != nil && ref.TypeArguments != nil && len(ref.TypeArguments.Nodes) != 0
}

func isEmptyObjectSchema(schema *metadata.Schema) bool {
	if schema == nil || schema.Size() != 1 || len(schema.Objects) != 1 {
		return false
	}
	obj := schema.Objects[0]
	return obj != nil &&
		obj.Type != nil &&
		len(obj.Type.Properties) == 0 &&
		obj.Type.AdditionalProperties == nil
}

func relatedTypeDeclarations(checker *shimchecker.Checker, symbol *ast.Symbol) []*ast.Node {
	if symbol == nil {
		return nil
	}
	out := []*ast.Node{}
	seen := map[*ast.Node]struct{}{}
	appendDecls := func(sym *ast.Symbol) {
		if sym == nil {
			return
		}
		for _, decl := range sym.Declarations {
			if decl == nil {
				continue
			}
			if _, ok := seen[decl]; ok {
				continue
			}
			seen[decl] = struct{}{}
			out = append(out, decl)
		}
	}
	appendDecls(symbol)
	if checker != nil && symbol.Flags&ast.SymbolFlagsAlias != 0 {
		appendDecls(shimchecker.Checker_getAliasedSymbol(checker, symbol))
	}
	return out
}

func declarationHasDynamicProperty(node *ast.Node) bool {
	if node == nil {
		return false
	}
	if node.Kind == ast.KindIndexSignature {
		return true
	}
	text := strings.TrimSpace(shimscanner.GetTextOfNode(node))
	if strings.Contains(text, " in ") && strings.Contains(text, "[") && strings.Contains(text, "]") {
		return true
	}
	found := false
	node.ForEachChild(func(child *ast.Node) bool {
		if declarationHasDynamicProperty(child) {
			found = true
			return true
		}
		return false
	})
	return found
}

func containsTupleType(checker *shimchecker.Checker, t *shimchecker.Type) bool {
	seen := map[*shimchecker.Type]struct{}{}
	var walk func(*shimchecker.Type) bool
	walk = func(current *shimchecker.Type) bool {
		if current == nil {
			return false
		}
		if _, ok := seen[current]; ok {
			return false
		}
		seen[current] = struct{}{}
		if shimchecker.IsTupleType(current) {
			return true
		}
		flags := current.Flags()
		if flags&(shimchecker.TypeFlagsUnion|shimchecker.TypeFlagsIntersection) != 0 {
			for _, child := range current.Types() {
				if walk(child) {
					return true
				}
			}
		}
		if checker != nil {
			for _, sig := range checker.GetSignaturesOfType(current, shimchecker.SignatureKindCall) {
				if sig == nil {
					continue
				}
				for _, param := range sig.Parameters() {
					if param != nil && walk(checker.GetTypeOfSymbol(param)) {
						return true
					}
				}
				if walk(checker.GetReturnTypeOfSignature(sig)) {
					return true
				}
			}
			for _, prop := range shimchecker.Checker_getPropertiesOfType(checker, current) {
				if prop != nil && walk(checker.GetTypeOfSymbol(prop)) {
					return true
				}
			}
		}
		return false
	}
	return walk(t)
}

var headerSingularKeys = map[string]bool{
	"age":                 true,
	"authorization":       true,
	"content-length":      true,
	"content-type":        true,
	"etag":                true,
	"expires":             true,
	"from":                true,
	"host":                true,
	"if-modified-since":   true,
	"if-unmodified-since": true,
	"last-modified":       true,
	"location":            true,
	"max-forwards":        true,
	"proxy-authorization": true,
	"referer":             true,
	"retry-after":         true,
	"server":              true,
	"user-agent":          true,
}

func mapKeyIsAtomic(schema *metadata.Schema) bool {
	if schema == nil || schema.Size() == 0 || schema.Size() > 1 {
		return false
	}
	if _, ok := schema.IsSoleAtomic(); ok {
		return true
	}
	if len(schema.Constants) == 1 && len(schema.Constants[0].Values) == 1 {
		return true
	}
	if len(schema.Templates) == 1 && schema.Size() == 1 {
		return true
	}
	return false
}

func isVariableName(name string) bool {
	if name == "" {
		return false
	}
	for i, r := range name {
		if i == 0 {
			if r != '_' && r != '$' && !unicode.IsLetter(r) {
				return false
			}
			continue
		}
		if r != '_' && r != '$' && !unicode.IsLetter(r) && !unicode.IsDigit(r) {
			return false
		}
	}
	return true
}

func hasInvalidProtobufSequence(obj *metadata.ObjectType) bool {
	if obj == nil {
		return false
	}
	seen := make(map[int]struct{})
	for _, prop := range obj.Properties {
		if prop == nil || prop.Value == nil {
			continue
		}
		local, invalid := protobufPropertySequences(prop.Value)
		if invalid {
			return true
		}
		for value := range local {
			if _, ok := seen[value]; ok {
				return true
			}
			seen[value] = struct{}{}
		}
	}
	return false
}

func protobufPropertySequences(schema *metadata.Schema) (map[int]struct{}, bool) {
	used := make(map[int]struct{})
	add := func(value int) bool {
		if _, ok := used[value]; ok {
			return false
		}
		used[value] = struct{}{}
		return true
	}
	if protobufSequenceCompletenessInvalid(schema) {
		return used, true
	}
	if protobufBooleanSequenceInvalid(schema, add) {
		return used, true
	}
	for _, kind := range []string{"int64", "uint64"} {
		if protobufNumericSequenceInvalid(schema, metadata.AtomicBigint, kind, protobufBigintTypeRow, add) {
			return used, true
		}
	}
	for _, kind := range []string{"double", "float", "int32", "uint32", "int64", "uint64"} {
		if protobufNumericSequenceInvalid(schema, metadata.AtomicNumber, kind, protobufNumberTypeRow, add) {
			return used, true
		}
	}
	if protobufStringSequenceInvalid(schema, add) {
		return used, true
	}
	for _, array := range schema.Arrays {
		if array != nil && protobufInstanceSequenceInvalid(array.Tags, add) {
			return used, true
		}
	}
	for _, obj := range schema.Objects {
		if obj != nil && protobufInstanceSequenceInvalid(obj.Tags, add) {
			return used, true
		}
	}
	for _, mapRef := range schema.Maps {
		if mapRef != nil && protobufInstanceSequenceInvalid(mapRef.Tags, add) {
			return used, true
		}
	}
	for _, native := range schema.Natives {
		if native.Name == "Uint8Array" && protobufInstanceSequenceInvalid(native.Tags, add) {
			return used, true
		}
	}
	return used, false
}

func protobufSequenceCompletenessInvalid(schema *metadata.Schema) bool {
	if schema == nil {
		return false
	}
	total := 0
	sequenced := 0
	countMatrix := func(matrix metadata.TagMatrix) {
		if len(matrix) == 0 {
			total++
			return
		}
		for _, row := range matrix {
			total++
			if _, ok := protobufSequenceValue(row); ok {
				sequenced++
			}
		}
	}
	for _, atomic := range schema.Atomics {
		countMatrix(atomic.Tags)
	}
	for _, constant := range schema.Constants {
		for _, value := range constant.Values {
			countMatrix(value.Tags)
		}
	}
	for _, template := range schema.Templates {
		countMatrix(template.Tags)
	}
	for _, array := range schema.Arrays {
		if array != nil {
			countMatrix(array.Tags)
		}
	}
	for _, obj := range schema.Objects {
		if obj != nil {
			countMatrix(obj.Tags)
		}
	}
	for _, mapRef := range schema.Maps {
		if mapRef != nil {
			countMatrix(mapRef.Tags)
		}
	}
	for _, native := range schema.Natives {
		if native.Name == "Uint8Array" {
			countMatrix(native.Tags)
		}
	}
	return sequenced != 0 && sequenced != total
}

func protobufBooleanSequenceInvalid(schema *metadata.Schema, add func(int) bool) bool {
	var matrices []metadata.TagMatrix
	for _, atomic := range schema.Atomics {
		if atomic.Type == metadata.AtomicBoolean {
			matrices = append(matrices, atomic.Tags)
		}
	}
	for _, constant := range schema.Constants {
		if constant.Type != metadata.AtomicBoolean {
			continue
		}
		for _, value := range constant.Values {
			matrices = append(matrices, value.Tags)
		}
	}
	return protobufSequenceGroupInvalid(matrices, add)
}

func protobufNumericSequenceInvalid(
	schema *metadata.Schema,
	atomicKind metadata.AtomicKind,
	category string,
	typeOf func([]metadata.TypeTag) string,
	add func(int) bool,
) bool {
	var matrices []metadata.TagMatrix
	for _, atomic := range schema.Atomics {
		if atomic.Type != atomicKind {
			continue
		}
		matrices = append(matrices, protobufFilterSequenceCategory(atomic.Tags, category, typeOf))
	}
	for _, constant := range schema.Constants {
		if constant.Type != atomicKind {
			continue
		}
		for _, value := range constant.Values {
			matrices = append(matrices, protobufFilterSequenceCategory(value.Tags, category, typeOf))
		}
	}
	return protobufSequenceGroupInvalid(matrices, add)
}

func protobufStringSequenceInvalid(schema *metadata.Schema, add func(int) bool) bool {
	var matrices []metadata.TagMatrix
	for _, atomic := range schema.Atomics {
		if atomic.Type == metadata.AtomicString {
			matrices = append(matrices, atomic.Tags)
		}
	}
	for _, constant := range schema.Constants {
		if constant.Type != metadata.AtomicString {
			continue
		}
		for _, value := range constant.Values {
			matrices = append(matrices, value.Tags)
		}
	}
	for _, template := range schema.Templates {
		matrices = append(matrices, template.Tags)
	}
	return protobufSequenceGroupInvalid(matrices, add)
}

func protobufSequenceGroupInvalid(matrices []metadata.TagMatrix, add func(int) bool) bool {
	unique := make(map[int]struct{})
	expected := 0
	actual := 0
	for _, matrix := range matrices {
		for _, row := range matrix {
			if value, ok := protobufSequenceValue(row); ok {
				unique[value] = struct{}{}
				actual++
			}
			expected++
		}
	}
	if len(unique) == 0 {
		return false
	}
	if actual != expected || len(unique) > 1 {
		return true
	}
	for value := range unique {
		return !add(value)
	}
	return false
}

func protobufInstanceSequenceInvalid(matrix metadata.TagMatrix, add func(int) bool) bool {
	unique := make(map[int]struct{})
	count := 0
	for _, row := range matrix {
		if value, ok := protobufSequenceValue(row); ok {
			unique[value] = struct{}{}
			count++
		}
	}
	if len(unique) == 0 {
		return false
	}
	if count != len(matrix) || len(unique) > 1 {
		return true
	}
	for value := range unique {
		return !add(value)
	}
	return false
}

func protobufFilterSequenceCategory(
	matrix metadata.TagMatrix,
	category string,
	typeOf func([]metadata.TypeTag) string,
) metadata.TagMatrix {
	out := make(metadata.TagMatrix, 0, len(matrix))
	for _, row := range matrix {
		if typeOf(row) == category {
			out = append(out, row)
		}
	}
	return out
}

func protobufSequenceValue(tags []metadata.TypeTag) (int, bool) {
	for _, tag := range tags {
		if tag.Kind != "sequence" {
			continue
		}
		switch v := tag.Value.(type) {
		case int:
			return v, true
		case int64:
			return int(v), true
		case float64:
			return int(v), true
		}
	}
	return 0, false
}

func protobufNumberTypeRow(tags []metadata.TypeTag) string {
	for _, tag := range tags {
		if tag.Kind != "type" {
			continue
		}
		if value, ok := tag.Value.(string); ok {
			switch value {
			case "int32", "uint32", "int64", "uint64", "float", "double":
				return value
			}
		}
	}
	return "double"
}

func protobufBigintTypeRow(tags []metadata.TypeTag) string {
	for _, tag := range tags {
		if tag.Kind != "type" {
			continue
		}
		if value, ok := tag.Value.(string); ok {
			switch value {
			case "int64", "uint64":
				return value
			}
		}
	}
	return "int64"
}

func notationMethod(method string) (kind string, mode string, create bool, ok bool) {
	switch method {
	case "camel", "createCamel":
		return "camel", "plain", method == "createCamel", true
	case "assertCamel", "createAssertCamel":
		return "camel", "assert", method == "createAssertCamel", true
	case "isCamel", "createIsCamel":
		return "camel", "is", method == "createIsCamel", true
	case "validateCamel", "createValidateCamel":
		return "camel", "validate", method == "createValidateCamel", true
	case "pascal", "createPascal":
		return "pascal", "plain", method == "createPascal", true
	case "assertPascal", "createAssertPascal":
		return "pascal", "assert", method == "createAssertPascal", true
	case "isPascal", "createIsPascal":
		return "pascal", "is", method == "createIsPascal", true
	case "validatePascal", "createValidatePascal":
		return "pascal", "validate", method == "createValidatePascal", true
	case "snake", "createSnake":
		return "snake", "plain", method == "createSnake", true
	case "assertSnake", "createAssertSnake":
		return "snake", "assert", method == "createAssertSnake", true
	case "isSnake", "createIsSnake":
		return "snake", "is", method == "createIsSnake", true
	case "validateSnake", "createValidateSnake":
		return "snake", "validate", method == "createValidateSnake", true
	default:
		return "", "", false, false
	}
}
