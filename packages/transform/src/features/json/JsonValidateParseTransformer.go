package json

import (
	"github.com/samchon/typia/packages/core/src/programmers"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var JsonValidateParseTransformer = jsonValidateParseTransformerNamespace{}

type jsonValidateParseTransformerNamespace struct{}

func (jsonValidateParseTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return "(input => { try { return " + programmers.ValidateProgrammer.Write(call.TypeText) + "(JSON.parse(input)); } catch (error) { return { success: false, errors: [{ path: \"$input\", expected: \"json\", value: input }] }; } })"
}
