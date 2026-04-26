package emitter

import (
	"errors"
	"fmt"
	"strings"
	"unicode"

	"github.com/samchon/typia/packages/core/native/metadata"
)

// EmitLlmStructuredOutputExpression emits the runtime object returned by
// typia.llm.structuredOutput<T>(). Runtime helper calls are routed through
// typia/lib/internal modules, matching legacy ImportProgrammer.internal output.
func EmitLlmStructuredOutputExpression(schema *metadata.Schema) (string, error) {
	return EmitLlmStructuredOutputExpressionWithEquals(schema, false)
}

func EmitLlmStructuredOutputExpressionWithEquals(schema *metadata.Schema, equals bool) (string, error) {
	return EmitLlmStructuredOutputExpressionWithConfig(schema, equals, false)
}

func EmitLlmStructuredOutputExpressionWithConfig(schema *metadata.Schema, equals bool, strict bool) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	parametersExpr, err := EmitLlmParametersExpressionWithConfig(schema, strict)
	if err != nil {
		return "", err
	}
	validateExpr, err := EmitValidateArrowFunctionWithEquals(schema, equals)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(
		`(() => { const __parameters = %s; return { parameters: __parameters, parse: (input) => %s._parseLlmArguments(input, __parameters), coerce: (input) => %s._coerceLlmArguments(input, __parameters), validate: %s }; })()`,
		parametersExpr,
		parseLlmArgumentsImportAlias,
		coerceLlmArgumentsImportAlias,
		validateExpr,
	), nil
}

func EmitLlmParametersExpression(schema *metadata.Schema) (string, error) {
	return EmitLlmParametersExpressionWithConfig(schema, false)
}

func EmitLlmParametersExpressionWithConfig(schema *metadata.Schema, strict bool) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	schemaExpr, err := EmitJsonSchemaExpression(schema)
	if err != nil {
		return "", err
	}
	return ConvertJsonSchemaExpressionToLlmParametersExpressionWithConfig(schemaExpr, strict)
}

func EmitLlmSchemaArrowFunction(schema *metadata.Schema, rootName string) (string, error) {
	return EmitLlmSchemaArrowFunctionWithConfig(schema, rootName, false)
}

func EmitLlmSchemaArrowFunctionWithConfig(schema *metadata.Schema, rootName string, strict bool) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	schemaExpr, err := EmitJsonSchemaExpression(schema)
	if err != nil {
		return "", err
	}
	schemaTarget := "__schema.schema"
	preface := ""
	if strings.TrimSpace(rootName) != "" {
		preface = fmt.Sprintf(`const __root = %s; __schema.components.schemas ??= {}; if (__schema.components.schemas[__root] === undefined) __schema.components.schemas[__root] = __schema.schema; `, jsonQuote(strings.TrimSpace(rootName)))
		schemaTarget = "{ $ref: `#/components/schemas/${__root}` }"
	}
	return ConvertJsonSchemaExpressionToLlmSchemaArrowFunctionWithConfig(schemaExpr, preface, schemaTarget, strict)
}

func EmitLlmParseArrowFunction(schema *metadata.Schema) (string, error) {
	return EmitLlmParseArrowFunctionWithConfig(schema, false)
}

func EmitLlmParseArrowFunctionWithConfig(schema *metadata.Schema, strict bool) (string, error) {
	parametersExpr, err := EmitLlmParametersExpressionWithConfig(schema, strict)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(`(input) => %s._parseLlmArguments(input, %s)`, parseLlmArgumentsImportAlias, parametersExpr), nil
}

func EmitLlmCoerceArrowFunction(schema *metadata.Schema) (string, error) {
	return EmitLlmCoerceArrowFunctionWithConfig(schema, false)
}

func EmitLlmCoerceArrowFunctionWithConfig(schema *metadata.Schema, strict bool) (string, error) {
	parametersExpr, err := EmitLlmParametersExpressionWithConfig(schema, strict)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(`(input) => %s._coerceLlmArguments(input, %s)`, coerceLlmArgumentsImportAlias, parametersExpr), nil
}

func EmitLlmApplicationArrowFunction(schema *metadata.Schema) (string, error) {
	return EmitLlmApplicationArrowFunctionWithConfig(schema, false)
}

func EmitLlmApplicationArrowFunctionWithConfig(schema *metadata.Schema, strict bool) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	obj := firstObjectType(schema)
	if obj == nil {
		return "", errors.New("llm.application: target type must be a class/interface object")
	}
	if err := validateLlmCallableObject("llm.application", obj); err != nil {
		return "", err
	}

	methods := make([]string, 0, len(obj.Properties))
	for _, prop := range obj.Properties {
		if prop == nil || prop.Key == nil || prop.Value == nil {
			continue
		}
		if hasAnyJsDocTag(prop.JsDocTags, "hidden", "ignore", "internal") {
			continue
		}
		name, ok := prop.Key.GetSoleLiteral()
		if !ok || len(prop.Value.Functions) == 0 {
			continue
		}
		fn := prop.Value.Functions[0]
		entry, err := emitLlmFunctionEntry(name, prop, fn, strict)
		if err != nil {
			return "", err
		}
		methods = append(methods, entry)
	}
	if len(methods) == 0 {
		return "", errors.New("llm.application: target type must expose at least one callable method")
	}
	return fmt.Sprintf(
		`(config) => %s._llmApplicationFinalize({ functions: [%s] }, config)`,
		llmApplicationFinalizeAlias,
		strings.Join(methods, ", "),
	), nil
}

// EmitLlmControllerArrowFunction emits the function body consumed by the
// original call site's `(name, execute, config)` arguments, producing an
// ILlmController-compatible runtime object.
func EmitLlmControllerArrowFunction(schema *metadata.Schema) (string, error) {
	return EmitLlmControllerArrowFunctionWithConfig(schema, false)
}

func EmitLlmControllerArrowFunctionWithConfig(schema *metadata.Schema, strict bool) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	obj := firstObjectType(schema)
	if obj == nil {
		return "", errors.New("llm.controller: target type must be a class/interface object")
	}
	if err := validateLlmCallableObject("llm.controller", obj); err != nil {
		return "", err
	}

	methods := make([]string, 0, len(obj.Properties))
	for _, prop := range obj.Properties {
		if prop == nil || prop.Key == nil || prop.Value == nil {
			continue
		}
		if hasAnyJsDocTag(prop.JsDocTags, "hidden", "ignore", "internal") {
			continue
		}
		name, ok := prop.Key.GetSoleLiteral()
		if !ok || len(prop.Value.Functions) == 0 {
			continue
		}
		fn := prop.Value.Functions[0]
		entry, err := emitLlmFunctionEntry(name, prop, fn, strict)
		if err != nil {
			return "", err
		}
		methods = append(methods, entry)
	}
	if len(methods) == 0 {
		return "", errors.New("llm.controller: target type must expose at least one callable method")
	}

	return fmt.Sprintf(
		`(name, execute, config) => ({ protocol: "class", name, execute, application: %s._llmApplicationFinalize({ functions: [%s] }, config) })`,
		llmApplicationFinalizeAlias,
		strings.Join(methods, ", "),
	), nil
}

func emitLlmFunctionEntry(name string, prop *metadata.Property, fn *metadata.Function, strict bool) (string, error) {
	parametersExpr, validateExpr, err := emitLlmParameterArtifacts(name, prop, fn, strict)
	if err != nil {
		return "", err
	}
	outputExpr, hasOutput, err := emitLlmOutputArtifacts(name, prop, fn, strict)
	if err != nil {
		return "", err
	}

	parts := []string{
		fmt.Sprintf(`name: %s`, jsonQuote(name)),
		fmt.Sprintf(`parameters: %s`, parametersExpr),
		fmt.Sprintf(`parse: (input) => %s._parseLlmArguments(input, %s)`, parseLlmArgumentsImportAlias, parametersExpr),
		fmt.Sprintf(`coerce: (input) => %s._coerceLlmArguments(input, %s)`, coerceLlmArgumentsImportAlias, parametersExpr),
		fmt.Sprintf(`validate: %s`, validateExpr),
	}
	if description := llmFunctionDescription(name, prop, fn); description != "" {
		parts = append(parts, fmt.Sprintf(`description: %s`, jsonQuote(description)))
	}
	if prop != nil && hasAnyJsDocTag(prop.JsDocTags, "deprecated") {
		parts = append(parts, `deprecated: true`)
	}
	if tags := llmFunctionTags(prop); len(tags) != 0 {
		values := make([]string, 0, len(tags))
		for _, tag := range tags {
			values = append(values, jsonQuote(tag))
		}
		parts = append(parts, `tags: [`+strings.Join(values, ", ")+`]`)
	}
	if hasOutput {
		parts = append(parts, fmt.Sprintf(`output: %s`, outputExpr))
	}
	return "{ " + strings.Join(parts, ", ") + " }", nil
}

func validateLlmCallableObject(prefix string, obj *metadata.ObjectType) error {
	if obj == nil {
		return fmt.Errorf("%s: missing object metadata", prefix)
	}
	found := false
	for _, prop := range obj.Properties {
		if prop == nil || prop.Key == nil || prop.Value == nil || len(prop.Value.Functions) == 0 {
			continue
		}
		if hasAnyJsDocTag(prop.JsDocTags, "hidden", "ignore", "internal") {
			continue
		}
		name, ok := prop.Key.GetSoleLiteral()
		if !ok {
			continue
		}
		found = true
		if description := llmFunctionDescription(name, prop, prop.Value.Functions[0]); description != "" && len(description) > 1024 {
			return fmt.Errorf("%s.%s: function description must not exceed 1024 characters", prefix, name)
		}
		if err := validateLlmFunction(prefix, name, prop.Value.Functions[0]); err != nil {
			return err
		}
	}
	if !found {
		return fmt.Errorf("%s: target type must expose at least one callable method", prefix)
	}
	return nil
}

func validateLlmFunction(prefix, name string, fn *metadata.Function) error {
	if name == "" {
		return fmt.Errorf("%s: function name cannot be empty", prefix)
	}
	if r := rune(name[0]); unicode.IsDigit(r) {
		return fmt.Errorf("%s.%s: function name cannot start with a number", prefix, name)
	}
	for _, r := range name {
		if unicode.IsLetter(r) || unicode.IsDigit(r) || r == '_' || r == '-' {
			continue
		}
		return fmt.Errorf("%s.%s: function name must contain only alphanumeric characters, underscores, or hyphens", prefix, name)
	}
	if len(name) > 64 {
		return fmt.Errorf("%s.%s: function name cannot exceed 64 characters", prefix, name)
	}
	if fn == nil {
		return fmt.Errorf("%s.%s: missing function metadata", prefix, name)
	}
	if len(fn.Parameters) > 1 {
		return fmt.Errorf("%s.%s: function must have exactly one parameter or no parameters", prefix, name)
	}
	if len(fn.Parameters) == 1 {
		param := fn.Parameters[0]
		if param == nil || param.Type == nil {
			return fmt.Errorf("%s.%s: missing parameter type", prefix, name)
		}
		if err := validateLlmObjectSchema(prefix, name, "parameter", param.Type); err != nil {
			return err
		}
	}
	if fn.Output != nil && !fn.Output.Empty() {
		if err := validateLlmObjectSchema(prefix, name, "return type", fn.Output); err != nil {
			return err
		}
	}
	return nil
}

func validateLlmObjectSchema(prefix, name, label string, schema *metadata.Schema) error {
	if schema == nil {
		return fmt.Errorf("%s.%s: %s is missing", prefix, name, label)
	}
	if !schema.IsRequired() {
		return fmt.Errorf("%s.%s: %s cannot be optional", prefix, name, label)
	}
	if schema.Nullable {
		return fmt.Errorf("%s.%s: %s cannot be nullable", prefix, name, label)
	}
	if schema.Size() != 1 || len(schema.Objects) != 1 || schema.Objects[0] == nil || schema.Objects[0].Type == nil {
		return fmt.Errorf("%s.%s: %s must be a single object type", prefix, name, label)
	}
	obj := schema.Objects[0].Type
	if len(obj.DynamicProperties) != 0 || obj.AdditionalProperties != nil {
		return fmt.Errorf("%s.%s: %s cannot have dynamic property keys", prefix, name, label)
	}
	hasRequiredProperty := false
	for _, prop := range obj.Properties {
		if prop == nil || prop.Key == nil || !prop.Key.IsSoleLiteral() {
			return fmt.Errorf("%s.%s: %s cannot have dynamic property keys", prefix, name, label)
		}
		if prop.Value != nil && prop.Value.IsRequired() {
			hasRequiredProperty = true
		}
	}
	if len(obj.Properties) != 0 && !hasRequiredProperty {
		return fmt.Errorf("%s.%s: %s must contain at least one required property", prefix, name, label)
	}
	return nil
}

func llmFunctionDescription(name string, prop *metadata.Property, fn *metadata.Function) string {
	if prop != nil && prop.Description != nil {
		if text := strings.TrimSpace(*prop.Description); text != "" {
			return text
		}
	}
	if fn != nil && fn.Description != nil {
		if text := strings.TrimSpace(*fn.Description); text != "" {
			return text
		}
	}
	return ""
}

func humanizeFunctionName(name string) string {
	trimmed := strings.TrimSpace(name)
	if trimmed == "" {
		return ""
	}
	var builder strings.Builder
	var prev rune
	for i, r := range trimmed {
		if i > 0 &&
			((unicode.IsLower(prev) && unicode.IsUpper(r)) ||
				((prev == '_' || prev == '-' || prev == ' ') && r != '_' && r != '-' && r != ' ')) {
			builder.WriteByte(' ')
		}
		if r == '_' || r == '-' {
			builder.WriteByte(' ')
		} else {
			builder.WriteRune(r)
		}
		prev = r
	}
	words := strings.Fields(strings.ToLower(builder.String()))
	if len(words) == 0 {
		return ""
	}
	words[0] = strings.ToUpper(words[0][:1]) + words[0][1:]
	return strings.Join(words, " ")
}

func llmWriteDescription(description string, jsDocTexts map[string][]string, kind string) (string, string) {
	title := ""
	for _, value := range jsDocTexts[kind] {
		if text := strings.TrimSpace(value); text != "" {
			title = text
			break
		}
	}
	description = strings.TrimSpace(description)
	if title == "" && description != "" {
		top := description
		if index := strings.Index(top, "\n"); index >= 0 {
			top = top[:index]
		}
		top = strings.TrimSpace(top)
		if strings.HasSuffix(top, ".") {
			title = strings.TrimSpace(strings.TrimSuffix(top, "."))
		}
	}
	return title, description
}

func firstJsDocText(texts map[string][]string, names ...string) string {
	for _, name := range names {
		for _, value := range texts[name] {
			if text := strings.TrimSpace(value); text != "" {
				return text
			}
		}
	}
	return ""
}

func llmParameterDescription(prop *metadata.Property, param *metadata.Parameter) string {
	if param == nil {
		return ""
	}
	if param.Description != nil {
		if text := strings.TrimSpace(*param.Description); text != "" {
			return text
		}
	}
	if text := firstJsDocText(param.JsDocTexts, "description"); text != "" {
		return text
	}
	if prop == nil {
		return ""
	}
	for _, value := range prop.JsDocTexts["param"] {
		text := strings.TrimSpace(value)
		if text == "" {
			continue
		}
		fields := strings.Fields(text)
		if len(fields) == 0 || fields[0] != param.Name {
			continue
		}
		return strings.TrimSpace(strings.TrimPrefix(text, fields[0]))
	}
	if len(prop.JsDocTexts["param"]) == 1 {
		return strings.TrimSpace(prop.JsDocTexts["param"][0])
	}
	return ""
}

func llmParameterRootMetadata(prop *metadata.Property, param *metadata.Parameter) llmRootMetadata {
	description := llmParameterDescription(prop, param)
	title, description := llmWriteDescription(description, propJsDocTexts(prop), "title")
	return llmRootMetadata{
		Title:       title,
		Description: description,
	}
}

func llmOutputRootMetadata(prop *metadata.Property) llmRootMetadata {
	return llmRootMetadata{
		DescriptionFallback: firstJsDocText(propJsDocTexts(prop), "return", "returns"),
	}
}

func propJsDocTexts(prop *metadata.Property) map[string][]string {
	if prop == nil || len(prop.JsDocTexts) == 0 {
		return nil
	}
	return prop.JsDocTexts
}

func llmFunctionTags(prop *metadata.Property) []string {
	if prop == nil || len(prop.JsDocTexts) == 0 {
		return nil
	}
	values := prop.JsDocTexts["tag"]
	if len(values) == 0 {
		return nil
	}
	out := make([]string, 0, len(values))
	seen := map[string]bool{}
	for _, value := range values {
		tag := ""
		if fields := strings.Fields(value); len(fields) != 0 {
			tag = fields[0]
		}
		if tag == "" || seen[tag] {
			continue
		}
		seen[tag] = true
		out = append(out, tag)
	}
	return out
}

func emitLlmParameterArtifacts(name string, prop *metadata.Property, fn *metadata.Function, strict bool) (string, string, error) {
	if fn == nil {
		return "", "", errors.New("llm.controller: nil function metadata")
	}
	if len(fn.Parameters) > 1 {
		return "", "", fmt.Errorf("llm.controller.%s: only zero or one parameter is supported by the current native emitter", name)
	}
	if len(fn.Parameters) == 0 {
		return emptyLlmParametersExpression(), anyValidateExpression(), nil
	}
	param := fn.Parameters[0]
	if param == nil || param.Type == nil {
		return "", "", fmt.Errorf("llm.controller.%s: missing parameter type", name)
	}
	schemaExpr, err := EmitJsonSchemaExpression(param.Type)
	if err != nil {
		return "", "", err
	}
	validateExpr, err := EmitValidateArrowFunction(param.Type)
	if err != nil {
		return "", "", err
	}
	if hasAnyJsDocTag(param.JsDocTags, "human") {
		return emptyLlmParametersExpression(), validateExpr, nil
	}
	parametersExpr := llmParametersFromUnitExpressionWithRootMetadata(
		schemaExpr,
		"typia.llm.controller."+name,
		strict,
		llmParameterRootMetadata(prop, param),
	)
	return parametersExpr, validateExpr, nil
}

func emitLlmOutputArtifacts(name string, prop *metadata.Property, fn *metadata.Function, strict bool) (string, bool, error) {
	if fn == nil || fn.Output == nil || fn.Output.Empty() {
		return "", false, nil
	}
	schemaExpr, err := EmitJsonSchemaExpression(fn.Output)
	if err != nil {
		return "", false, err
	}
	return llmParametersFromUnitExpressionWithRootMetadata(
		schemaExpr,
		"typia.llm.controller."+name+".output",
		strict,
		llmOutputRootMetadata(prop),
	), true, nil
}

func llmParametersFromUnitExpression(unitExpr, label string, strict bool) string {
	expr, err := ConvertJsonSchemaExpressionToLlmParametersExpressionWithConfig(unitExpr, strict)
	if err != nil {
		return fmt.Sprintf(`(() => { throw new Error(%s); })()`, jsonQuote(label+": "+err.Error()))
	}
	return expr
}

func llmParametersFromUnitExpressionWithRootMetadata(unitExpr, label string, strict bool, meta llmRootMetadata) string {
	expr, err := ConvertJsonSchemaExpressionToLlmParametersExpressionWithRootMetadata(unitExpr, strict, meta)
	if err != nil {
		return fmt.Sprintf(`(() => { throw new Error(%s); })()`, jsonQuote(label+": "+err.Error()))
	}
	return expr
}

func emptyLlmParametersExpression() string {
	return `({ type: "object", properties: {}, required: [], additionalProperties: false, $defs: {} })`
}

func anyValidateExpression() string {
	return `(input) => ({ success: true, data: input })`
}

func firstObjectType(schema *metadata.Schema) *metadata.ObjectType {
	if schema == nil {
		return nil
	}
	for _, ref := range schema.Objects {
		if ref != nil && ref.Type != nil {
			return ref.Type
		}
	}
	for _, ref := range schema.Aliases {
		if ref != nil && ref.Type != nil && ref.Type.Value != nil {
			if obj := firstObjectType(ref.Type.Value); obj != nil {
				return obj
			}
		}
	}
	return nil
}

func hasAnyJsDocTag(tags []string, names ...string) bool {
	if len(tags) == 0 || len(names) == 0 {
		return false
	}
	for _, tag := range tags {
		normalized := strings.TrimPrefix(strings.ToLower(strings.TrimSpace(tag)), "@")
		for _, name := range names {
			if normalized == strings.TrimPrefix(strings.ToLower(strings.TrimSpace(name)), "@") {
				return true
			}
		}
	}
	return false
}
