package emitter

import (
	"fmt"

	"github.com/samchon/typia/packages/core/native/metadata"
)

// EmitAssertArrowFunction returns `(input) => <check> ? input : (() => {
// throw ... })()` — matches the v12 behaviour that `typia.assert<T>(x)` either
// returns `x` typed as `T` or throws. The current native path uses a plain
// `Error`; the full TypeGuardError with path threading can land later.
func EmitAssertArrowFunction(schema *metadata.Schema) (string, error) {
	return EmitAssertArrowFunctionWithMethod(schema, "typia.assert")
}

func EmitAssertArrowFunctionWithMethod(schema *metadata.Schema, method string) (string, error) {
	diagnostics, err := newDiagnosticState().emit(schema)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(`(input) => { const __errors = %s; if (__errors.length === 0) return input; class TypeGuardError extends Error { constructor(props) { super("Error on %s: invalid type" + (props.path ? " on " + props.path : "") + ", expect to be " + props.expected); this.name = "TypeGuardError"; this.method = props.method; this.path = props.path; this.expected = props.expected; this.value = props.value; } } throw new TypeGuardError({ method: %q, path: __errors[0].path, expected: __errors[0].expected, value: __errors[0].value }); }`, diagnostics, method, method), nil
}

// EmitValidateArrowFunction returns `(input) => { success, data, errors }` —
// a drop-in for typia v12's `typia.validate<T>` result shape. The current
// native path emits a single top-level error rather than per-property
// diagnostics; a proper path-threaded implementation can follow later.
func EmitValidateArrowFunction(schema *metadata.Schema) (string, error) {
	diagnostics, err := newDiagnosticState().emit(schema)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(
		"(input) => { const __errors = %s; return __errors.length === 0 ? { success: true, data: input, errors: [] } : { success: false, data: input, errors: __errors }; }",
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
	validate, err := EmitValidateArrowFunction(schema)
	if err != nil {
		return "", err
	}
	return fmt.Sprintf(`(() => { const __fn = %s; __fn["~standard"] = { version: 1, vendor: "typia", validate: (input) => { const r = __fn(input); return r.success ? { value: r.data } : { issues: r.errors.map(e => ({ message: "expected " + e.expected + ", got " + e.value })) }; } }; return __fn; })()`, validate), nil
}

// jsEscape produces a double-quote-safe JS string fragment.
func jsEscape(s string) string {
	// Strip surrounding quotes that jsonQuote would add so we can embed inside
	// a pre-existing quoted literal.
	out := jsonQuote(s)
	return out[1 : len(out)-1]
}
