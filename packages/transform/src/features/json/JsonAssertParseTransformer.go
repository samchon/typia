package json

import (
	"github.com/samchon/typia/packages/core/src/programmers"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var JsonAssertParseTransformer = jsonAssertParseTransformerNamespace{}

type jsonAssertParseTransformerNamespace struct{}

func (jsonAssertParseTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return "(input => " + programmers.AssertProgrammer.Write(call.TypeText) + "(JSON.parse(input)))"
}
