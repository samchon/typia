package emitter

import (
	"fmt"

	"github.com/samchon/typia/packages/core/native/metadata"
)

// EmitAssertArrowFunction returns a v12-compatible assertion arrow. The
// generated code delegates throwing to typia's internal _assertGuard helper so
// custom error factories and exported TypeGuardError identity are preserved.
func EmitAssertArrowFunction(schema *metadata.Schema) (string, error) {
	return EmitAssertArrowFunctionWithMethodAndEquals(schema, "typia.assert", false)
}

func EmitAssertArrowFunctionWithMethod(schema *metadata.Schema, method string) (string, error) {
	return EmitAssertArrowFunctionWithMethodAndEquals(schema, method, false)
}

func EmitAssertArrowFunctionWithMethodAndEquals(schema *metadata.Schema, method string, equals bool) (string, error) {
	return EmitAssertArrowFunctionWithMethodEqualsAndGuard(schema, method, equals, false)
}

func EmitAssertGuardArrowFunctionWithMethodAndEquals(schema *metadata.Schema, method string, equals bool) (string, error) {
	return EmitAssertArrowFunctionWithMethodEqualsAndGuard(schema, method, equals, true)
}

func EmitAssertArrowFunctionWithMethodEqualsAndGuard(schema *metadata.Schema, method string, equals bool, guard bool) (string, error) {
	diagnostics, err := newDiagnosticState(equals).emit(schema)
	if err != nil {
		return "", err
	}
	success := "return input;"
	if guard {
		success = "return;"
	}
	return fmt.Sprintf(`(input, errorFactory) => { const __errors = %s; if (__errors.length === 0) { %s } return %s._assertGuard(true, { method: %q, path: __errors[0].path, expected: __errors[0].expected, value: __errors[0].value }, errorFactory); }`, diagnostics, success, assertGuardImportAlias, method), nil
}

func EmitAssertFactoryExpressionWithMethodEqualsAndGuard(schema *metadata.Schema, method string, equals bool, guard bool) (string, error) {
	arrow, err := EmitAssertArrowFunctionWithMethodEqualsAndGuard(schema, method, equals, guard)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(`(errorFactory) => (input) => (%s)(input, errorFactory)`, arrow), nil
}

// EmitValidateArrowFunction returns `IValidation<T>` matching the interface
// contract: success payloads carry only `{ success: true, data }`, while
// failures keep the full `errors` array.
func EmitValidateArrowFunction(schema *metadata.Schema) (string, error) {
	return EmitValidateArrowFunctionWithEquals(schema, false)
}

func EmitValidateArrowFunctionWithEquals(schema *metadata.Schema, equals bool) (string, error) {
	diagnostics, err := newDiagnosticState(equals).emit(schema)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(
		"(input) => { const errors = []; const _report = %s._validateReport(errors); for (const __error of %s) _report(true, __error); return errors.length === 0 ? { success: true, data: input } : { success: false, data: input, errors }; }",
		validateReportImportAlias,
		diagnostics,
	), nil
}

// EmitCreateValidateWithStandardSchema returns a factory expression whose
// result is both a plain `validate(input)` function AND carries a
// `~standard` property implementing the Standard Schema v1 interface so
// downstream tools (MCP, Next.js Server Actions, Hono, …) can consume typia
// validators transparently.
//
// Matches `packages/typia/src/internal/_createStandardSchema.ts` in the v12
// runtime by delegating to the same helper used by the TypeScript transformer.
func EmitCreateValidateWithStandardSchema(schema *metadata.Schema) (string, error) {
	return EmitCreateValidateWithStandardSchemaAndEquals(schema, false)
}

func EmitCreateValidateWithStandardSchemaAndEquals(schema *metadata.Schema, equals bool) (string, error) {
	validate, err := EmitValidateArrowFunctionWithEquals(schema, equals)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(`%s._createStandardSchema(%s)`, createStandardSchemaAlias, validate), nil
}

// jsEscape produces a double-quote-safe JS string fragment.
func jsEscape(s string) string {
	// Strip surrounding quotes that jsonQuote would add so we can embed inside
	// a pre-existing quoted literal.
	out := jsonQuote(s)
	return out[1 : len(out)-1]
}
