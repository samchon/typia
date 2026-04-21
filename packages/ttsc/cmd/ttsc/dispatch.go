package main

import (
	"github.com/samchon/typia/packages/ttsc/internal/engine/emitter"
	"github.com/samchon/typia/packages/ttsc/internal/engine/metadata"
)

// dispatchEmit returns (expression, factory, ok) for the given (module,
// method, schema) triple. A false `ok` means the call-site isn't recognised
// by the Phase 0 programmer table — callers should log and skip.
//
// Kept as one function with a switch because:
//   - typia v12's Programmer tree is similarly laid out (one decision per
//     method, branching inside the programmer module).
//   - every caller (`build`, `transform`, future `dev`) must stay in lock-step
//     on additions; a single switch is the easiest diff target.
func dispatchEmit(module, method string, schema *metadata.Schema) (string, bool, error, bool) {
	switch {
	case module == "module" && (method == "is" || method == "equals"):
		expr, err := emitter.EmitIsArrowFunction(schema)
		return expr, false, err, true
	case module == "module" && (method == "assert" || method == "assertGuard" || method == "assertType" || method == "assertEquals" || method == "assertGuardEquals"):
		expr, err := emitter.EmitAssertArrowFunction(schema)
		return expr, false, err, true
	case module == "module" && (method == "validate" || method == "validateEquals"):
		expr, err := emitter.EmitValidateArrowFunction(schema)
		return expr, false, err, true
	case module == "module" && (method == "createIs" || method == "createEquals"):
		expr, err := emitter.EmitIsArrowFunction(schema)
		return expr, true, err, true
	case module == "module" && (method == "createAssert" || method == "createAssertGuard" || method == "createAssertType" || method == "createAssertEquals" || method == "createAssertGuardEquals"):
		expr, err := emitter.EmitAssertArrowFunction(schema)
		return expr, true, err, true
	case module == "module" && (method == "createValidate" || method == "createValidateEquals"):
		// createValidate attaches Standard Schema's `~standard` contract so
		// MCP / Hono / Next.js Server Actions can consume the function.
		expr, err := emitter.EmitCreateValidateWithStandardSchema(schema)
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
	case module == "json" && (method == "parse" || method == "assertParse" || method == "isParse" || method == "validateParse"):
		expr, err := emitter.EmitJsonParseArrowFunction(schema, method)
		return expr, false, err, true
	case module == "json" && method == "createStringify":
		expr, err := emitter.EmitJsonStringifyArrowFunction(schema)
		return expr, true, err, true
	case module == "json" && method == "createAssertStringify":
		expr, err := emitter.EmitAssertStringifyArrowFunction(schema)
		return expr, true, err, true
	case module == "json" && method == "schema":
		// typia.json.schema<T>() takes no args; rewriter consumes the `()`.
		expr, err := emitter.EmitJsonSchemaExpression(schema)
		return expr, true, err, true
	case module == "json" && method == "schemas":
		// typia.json.schemas<[A, B]>() also takes no args and returns the
		// collection value directly.
		expr, err := emitter.EmitJsonSchemasExpression(schema)
		return expr, true, err, true
	case module == "misc" && method == "literals":
		expr, err := emitter.EmitMiscLiteralsExpression(schema)
		return expr, true, err, true
	case module == "misc" && method == "clone":
		expr, err := emitter.EmitMiscCloneArrowFunction(schema)
		return expr, false, err, true
	case module == "misc" && method == "prune":
		expr, err := emitter.EmitMiscPruneArrowFunction(schema)
		return expr, false, err, true
	case module == "notations" && (method == "camel" || method == "pascal" || method == "snake"):
		expr, err := emitter.EmitNotationArrowFunction(schema, method)
		return expr, false, err, true
	case module == "reflect" && method == "schema":
		expr, err := emitter.EmitReflectSchemaExpression(schema)
		return expr, true, err, true
	case module == "reflect" && method == "name":
		expr, err := emitter.EmitReflectNameExpression(schema)
		return expr, true, err, true
	case module == "http" && method == "parameter":
		expr, err := emitter.EmitHttpParameterArrowFunction(schema)
		return expr, false, err, true
	case module == "http" && (method == "query" || method == "queryObject"):
		expr, err := emitter.EmitHttpQueryObjectArrowFunction(schema)
		return expr, false, err, true
	case module == "http" && (method == "headers" || method == "formData"):
		// Headers/FormData share the string-in-structured-out shape; reuse.
		expr, err := emitter.EmitHttpQueryObjectArrowFunction(schema)
		return expr, false, err, true
	case module == "llm" && method == "structuredOutput":
		expr, err := emitter.EmitLlmStructuredOutputExpression(schema)
		return expr, true, err, true
	case module == "llm" && method == "controller":
		expr, err := emitter.EmitLlmControllerArrowFunction(schema)
		return expr, false, err, true
	}
	return "", false, nil, false
}
