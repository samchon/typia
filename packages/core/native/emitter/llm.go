package emitter

import (
	"errors"
	"fmt"
	"strings"

	"github.com/samchon/typia/packages/core/native/metadata"
)

// EmitLlmStructuredOutputExpression emits the runtime object returned by
// typia.llm.structuredOutput<T>(). The heavy JSON-schema-to-LLM conversion is
// delegated to @typia/utils at runtime so the native path can reuse the
// existing, battle-tested converter.
func EmitLlmStructuredOutputExpression(schema *metadata.Schema) (string, error) {
	return EmitLlmStructuredOutputExpressionWithEquals(schema, false)
}

func EmitLlmStructuredOutputExpressionWithEquals(schema *metadata.Schema, equals bool) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	parametersExpr, err := EmitLlmParametersExpression(schema)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(
		`(() => { const __utils = require("@typia/utils"); const __parameters = %s; return __utils.LlmJson.structuredOutput(__parameters, %t); })()`,
		parametersExpr,
		equals,
	), nil
}

func EmitLlmParametersExpression(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	schemaExpr, err := EmitJsonSchemaExpression(schema)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(
		`(() => { const __utils = require("@typia/utils"); const __schema = %s; const __result = __utils.LlmSchemaConverter.parameters({ components: __schema.components, schema: __schema.schema }); if (!__result.success) throw new Error("typia.llm.parameters: failed to convert JSON schema to LLM schema"); return __result.value; })()`,
		schemaExpr,
	), nil
}

func EmitLlmSchemaArrowFunction(schema *metadata.Schema, rootName string) (string, error) {
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
	return fmt.Sprintf(
		`($defs = {}) => { const __utils = require("@typia/utils"); const __schema = %s; %sconst __result = __utils.LlmSchemaConverter.schema({ components: __schema.components, $defs, schema: %s }); if (!__result.success) throw new Error("typia.llm.schema: failed to convert JSON schema to LLM schema"); return __result.value; }`,
		schemaExpr,
		preface,
		schemaTarget,
	), nil
}

func EmitLlmParseArrowFunction(schema *metadata.Schema) (string, error) {
	parametersExpr, err := EmitLlmParametersExpression(schema)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(`(input) => require("@typia/utils").LlmJson.parse(input, %s)`, parametersExpr), nil
}

func EmitLlmCoerceArrowFunction(schema *metadata.Schema) (string, error) {
	parametersExpr, err := EmitLlmParametersExpression(schema)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(`(input) => require("@typia/utils").LlmJson.coerce(input, %s)`, parametersExpr), nil
}

func EmitLlmApplicationArrowFunction(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	obj := firstObjectType(schema)
	if obj == nil {
		return "", errors.New("llm.application: target type must be a class/interface object")
	}

	methods := make([]string, 0, len(obj.Properties))
	for _, prop := range obj.Properties {
		if prop == nil || prop.Key == nil || prop.Value == nil {
			continue
		}
		name, ok := prop.Key.GetSoleLiteral()
		if !ok || len(prop.Value.Functions) == 0 {
			continue
		}
		fn := prop.Value.Functions[0]
		entry, err := emitLlmFunctionEntry(name, fn)
		if err != nil {
			return "", err
		}
		methods = append(methods, entry)
	}
	if len(methods) == 0 {
		return "", errors.New("llm.application: target type must expose at least one callable method")
	}
	return fmt.Sprintf(
		`(config) => { const __hooks = config && typeof config === "object" ? (config.validate ?? null) : null; return { functions: [%s], options: { validate: __hooks } }; }`,
		strings.Join(methods, ", "),
	), nil
}

// EmitLlmControllerArrowFunction emits the function body consumed by the
// original call site's `(name, execute, config)` arguments, producing an
// ILlmController-compatible runtime object.
func EmitLlmControllerArrowFunction(schema *metadata.Schema) (string, error) {
	if schema == nil {
		return "", errors.New("emitter: nil schema")
	}
	obj := firstObjectType(schema)
	if obj == nil {
		return "", errors.New("llm.controller: target type must be a class/interface object")
	}

	methods := make([]string, 0, len(obj.Properties))
	for _, prop := range obj.Properties {
		if prop == nil || prop.Key == nil || prop.Value == nil {
			continue
		}
		name, ok := prop.Key.GetSoleLiteral()
		if !ok || len(prop.Value.Functions) == 0 {
			continue
		}
		fn := prop.Value.Functions[0]
		entry, err := emitLlmFunctionEntry(name, fn)
		if err != nil {
			return "", err
		}
		methods = append(methods, entry)
	}
	if len(methods) == 0 {
		return "", errors.New("llm.controller: target type must expose at least one callable method")
	}

	return fmt.Sprintf(
		`(name, execute, config) => { const __hooks = config && typeof config === "object" ? (config.validate ?? null) : null; return { protocol: "class", name, execute, application: { functions: [%s], config: { strict: false, validate: __hooks } } }; }`,
		strings.Join(methods, ", "),
	), nil
}

func emitLlmFunctionEntry(name string, fn *metadata.Function) (string, error) {
	parametersExpr, validateExpr, err := emitLlmParameterArtifacts(name, fn)
	if err != nil {
		return "", err
	}
	outputExpr, hasOutput, err := emitLlmOutputArtifacts(name, fn)
	if err != nil {
		return "", err
	}

	parts := []string{
		fmt.Sprintf(`name: %s`, jsonQuote(name)),
		fmt.Sprintf(`parameters: %s`, parametersExpr),
		fmt.Sprintf(`parse: (input) => require("@typia/utils").LlmJson.parse(input, %s)`, parametersExpr),
		fmt.Sprintf(`coerce: (input) => require("@typia/utils").LlmJson.coerce(input, %s)`, parametersExpr),
		fmt.Sprintf(`validate: (() => { const __hook = __hooks && __hooks[%s]; return typeof __hook === "function" ? __hook : (%s); })()`, jsonQuote(name), validateExpr),
	}
	if fn.Description != nil && strings.TrimSpace(*fn.Description) != "" {
		parts = append(parts, fmt.Sprintf(`description: %s`, jsonQuote(strings.TrimSpace(*fn.Description))))
	}
	if hasOutput {
		parts = append(parts, fmt.Sprintf(`output: %s`, outputExpr))
	}
	return "{ " + strings.Join(parts, ", ") + " }", nil
}

func emitLlmParameterArtifacts(name string, fn *metadata.Function) (string, string, error) {
	if fn == nil {
		return "", "", errors.New("llm.controller: nil function metadata")
	}
	if len(fn.Parameters) > 1 {
		return "", "", fmt.Errorf("llm.controller.%s: only zero or one parameter is supported by the current native emitter", name)
	}
	if len(fn.Parameters) == 0 {
		return emptyLlmParametersExpression(), emptyObjectValidateExpression(), nil
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
	parametersExpr := llmParametersFromUnitExpression(schemaExpr, "typia.llm.controller."+name)
	return parametersExpr, validateExpr, nil
}

func emitLlmOutputArtifacts(name string, fn *metadata.Function) (string, bool, error) {
	if fn == nil || fn.Output == nil || fn.Output.Empty() {
		return "", false, nil
	}
	schemaExpr, err := EmitJsonSchemaExpression(fn.Output)
	if err != nil {
		return "", false, err
	}
	return llmParametersFromUnitExpression(schemaExpr, "typia.llm.controller."+name+".output"), true, nil
}

func llmParametersFromUnitExpression(unitExpr, label string) string {
	return fmt.Sprintf(
		`(() => { const __schema = %s; const __utils = require("@typia/utils"); const __result = __utils.LlmSchemaConverter.parameters({ components: __schema.components, schema: __schema.schema }); if (!__result.success) throw new Error(%s); return __result.value; })()`,
		unitExpr,
		jsonQuote(label+": failed to convert JSON schema to LLM schema"),
	)
}

func emptyLlmParametersExpression() string {
	return `({ type: "object", properties: {}, required: [], additionalProperties: false, $defs: {} })`
}

func emptyObjectValidateExpression() string {
	return `(input) => { const __value = input ?? {}; const __ok = __value !== null && typeof __value === "object" && !Array.isArray(__value) && Object.keys(__value).length === 0; return __ok ? { success: true, data: __value, errors: [] } : { success: false, data: input, errors: [{ path: "$input", expected: "{}", value: input }] }; }`
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
