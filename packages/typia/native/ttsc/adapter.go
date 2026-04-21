package ttsc

import (
	"fmt"
	"strings"

	"github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"

	"github.com/samchon/typia/packages/typia/native/analyzer"
	"github.com/samchon/typia/packages/typia/native/emitter"
	"github.com/samchon/typia/packages/typia/native/metadata"
)

func AnalyzeType(
	checker *shimchecker.Checker,
	t *shimchecker.Type,
	typeNode *ast.Node,
) (*metadata.Schema, bool) {
	return analyzer.New(checker, analyzer.DefaultOptions(), nil).WalkWithTypeNode(t, typeNode)
}

func EmitCall(
	module string,
	method string,
	schema *metadata.Schema,
) (string, bool, error, bool) {
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
