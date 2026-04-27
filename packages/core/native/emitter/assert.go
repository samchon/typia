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
		"(input) => { const __errors = %s; return __errors.length === 0 ? { success: true, data: input } : { success: false, data: input, errors: __errors }; }",
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
// runtime — the JS shape is copied in-line so the emitted code has no
// typia-package runtime dependency.
func EmitCreateValidateWithStandardSchema(schema *metadata.Schema) (string, error) {
	return EmitCreateValidateWithStandardSchemaAndEquals(schema, false)
}

func EmitCreateValidateWithStandardSchemaAndEquals(schema *metadata.Schema, equals bool) (string, error) {
	validate, err := EmitValidateArrowFunctionWithEquals(schema, equals)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(`(() => { const __toStandardPath = (path) => { if (!path.startsWith("$input")) throw new Error("Invalid path: " + JSON.stringify(path)); const segments = []; let current = ""; let state = 0; let index = "$input".length - 1; while (index < path.length - 1) { index += 1; const char = path[index]; if (state === 1) { if (char === "." || char === "[") { segments.push({ key: current }); state = 0; } else if (index === path.length - 1) { current += char; segments.push({ key: current }); index += 1; state = 0; } else current += char; } else if (state === 2) { if (char === "\"") { segments.push({ key: JSON.parse(current + char) }); index += 2; state = 0; } else if (char === "\\") { current += path[index]; index += 1; current += path[index]; } else current += char; } else if (state === 3) { if (char === "]") { segments.push({ key: Number.parseInt(current, 10) }); index += 1; state = 0; } else current += char; } if (state === 0 && index < path.length - 1) { const next = path[index]; current = ""; if (next === "[") { if (path[index + 1] === "\"") { state = 2; index += 1; current = "\""; } else state = 3; } else if (next === ".") state = 1; else throw new Error("Unreachable: pointer points invalid character"); } } if (state !== 0) throw new Error("Failed to parse path: " + JSON.stringify(path)); return segments; }; const __fn = %s; __fn["~standard"] = { version: 1, vendor: "typia", validate: (input) => { const r = __fn(input); return r.success ? { value: r.data } : { issues: r.errors.map(e => ({ message: "expected " + e.expected + ", got " + e.value, path: __toStandardPath(e.path) })) }; } }; return __fn; })()`, validate), nil
}

// jsEscape produces a double-quote-safe JS string fragment.
func jsEscape(s string) string {
	// Strip surrounding quotes that jsonQuote would add so we can embed inside
	// a pre-existing quoted literal.
	out := jsonQuote(s)
	return out[1 : len(out)-1]
}
