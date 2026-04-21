package emitter

import (
	"fmt"

	"github.com/samchon/typia/packages/ttsc/internal/engine/metadata"
)

// EmitAssertStringifyArrowFunction composes assert + stringify so typia users
// can call `typia.json.assertStringify<T>(v)` and get both runtime validation
// and fast JSON output with one call.
func EmitAssertStringifyArrowFunction(schema *metadata.Schema) (string, error) {
	assertExpr, err := EmitAssertArrowFunction(schema)
	if err != nil {
		return "", err
	}
	stringify, err := EmitJsonStringifyArrowFunction(schema)
	if err != nil {
		return "", err
	}
	// Compose: the assert function throws on mismatch, stringify formats
	// the validated payload.
	return fmt.Sprintf("(input) => (%s)((%s)(input))", stringify, assertExpr), nil
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
		assertFn, err := EmitAssertArrowFunction(schema)
		if err != nil {
			return "", err
		}
		return fmt.Sprintf("(input) => (%s)(JSON.parse(input))", assertFn), nil
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
