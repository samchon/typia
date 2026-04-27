package emitter

import (
	"fmt"

	"github.com/samchon/typia/packages/core/native/metadata"
)

// EmitAssertStringifyArrowFunction composes assert + stringify so typia users
// can call `typia.json.assertStringify<T>(v)` and get both runtime validation
// and fast JSON output with one call.
func EmitAssertStringifyArrowFunction(schema *metadata.Schema) (string, error) {
	return EmitAssertStringifyArrowFunctionWithMethod(schema, "typia.json.assertStringify")
}

func EmitAssertStringifyArrowFunctionWithMethod(schema *metadata.Schema, method string) (string, error) {
	assertExpr, err := EmitAssertArrowFunctionWithMethod(schema, method)
	if err != nil {
		return "", err
	}
	stringify, err := EmitJsonStringifyArrowFunction(schema)
	if err != nil {
		return "", err
	}
	// Compose: the assert function throws on mismatch, stringify formats
	// the validated payload.
	return fmt.Sprintf("(input, errorFactory) => (%s)((%s)(input, errorFactory))", stringify, assertExpr), nil
}

func EmitCreateAssertStringifyExpressionWithMethod(schema *metadata.Schema, method string) (string, error) {
	assertExpr, err := EmitAssertArrowFunctionWithMethod(schema, method)
	if err != nil {
		return "", err
	}
	stringify, err := EmitJsonStringifyArrowFunction(schema)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf("(errorFactory) => (input) => (%s)((%s)(input, errorFactory))", stringify, assertExpr), nil
}

// EmitIsStringifyArrowFunction composes `typia.is<T>` with fast stringify.
// Returns `null` when the input fails the type check.
func EmitIsStringifyArrowFunction(schema *metadata.Schema) (string, error) {
	isExpr, err := EmitIsArrowFunction(schema)
	if err != nil {
		return "", err
	}
	stringify, err := EmitJsonStringifyArrowFunction(schema)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf("(input) => ((%s)(input)) ? (%s)(input) : null", isExpr, stringify), nil
}

// EmitValidateStringifyArrowFunction composes `typia.validate<T>` with fast
// stringify so success payloads carry the JSON string, while failures keep the
// original validation errors.
func EmitValidateStringifyArrowFunction(schema *metadata.Schema) (string, error) {
	validateExpr, err := EmitValidateArrowFunction(schema)
	if err != nil {
		return "", err
	}
	stringify, err := EmitJsonStringifyArrowFunction(schema)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(
		"(input) => { const __valid = (%s)(input); return __valid.success ? { success: true, data: (%s)(input) } : __valid; }",
		validateExpr,
		stringify,
	), nil
}

// EmitJsonParseArrowFunction wraps `JSON.parse` with a post-parse validation
// step matching the requested method name.
//
// The overloads:
//
//   - `json.parse<T>(s)`         : parses and casts — returns T (no validation)
//   - `json.assertParse<T>(s)`   : parses, then typia.assert<T>
//   - `json.isParse<T>(s)`       : parses, then returns null unless typia.is<T>
//   - `json.validateParse<T>(s)` : parses, then returns IValidation<T>
func EmitJsonParseArrowFunction(schema *metadata.Schema, method string) (string, error) {
	switch method {
	case "parse":
		return "(input) => JSON.parse(input)", nil
	case "assertParse":
		return EmitJsonAssertParseArrowFunctionWithMethod(schema, "typia.json.assertParse")
	case "isParse":
		is, err := EmitIsArrowFunction(schema)
		if err != nil {
			return "", err
		}
		return fmt.Sprintf(
			"(input) => { const __parsed = JSON.parse(input); return ((%s)(__parsed)) ? __parsed : null; }",
			is,
		), nil
	case "validateParse":
		validate, err := EmitValidateArrowFunction(schema)
		if err != nil {
			return "", err
		}
		return fmt.Sprintf("(input) => (%s)(JSON.parse(input))", validate), nil
	}
	return "", fmt.Errorf("%w: unknown json parse method %q", ErrUnsupportedSchema, method)
}

func EmitJsonAssertParseArrowFunctionWithMethod(schema *metadata.Schema, method string) (string, error) {
	assertFn, err := EmitAssertArrowFunctionWithMethod(schema, method)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf("(input, errorFactory) => (%s)(JSON.parse(input), errorFactory)", assertFn), nil
}

func EmitJsonCreateAssertParseExpressionWithMethod(schema *metadata.Schema, method string) (string, error) {
	assertFn, err := EmitAssertArrowFunctionWithMethod(schema, method)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf("(errorFactory) => (input) => (%s)(JSON.parse(input), errorFactory)", assertFn), nil
}

func emitJsonParseNonAssertArrowFunction(schema *metadata.Schema, method string) (string, error) {
	switch method {
	case "isParse":
		is, err := EmitIsArrowFunction(schema)
		if err != nil {
			return "", err
		}
		return fmt.Sprintf(
			"(input) => { const __parsed = JSON.parse(input); return ((%s)(__parsed)) ? __parsed : null; }",
			is,
		), nil
	case "validateParse":
		validate, err := EmitValidateArrowFunction(schema)
		if err != nil {
			return "", err
		}
		return fmt.Sprintf("(input) => (%s)(JSON.parse(input))", validate), nil
	}
	return "", fmt.Errorf("%w: unknown json parse method %q", ErrUnsupportedSchema, method)
}
