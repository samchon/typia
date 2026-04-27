package json

import (
	corejson "github.com/samchon/typia/packages/core/src/programmers/json"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var JsonAssertStringifyTransformer = jsonAssertStringifyTransformerNamespace{}

type jsonAssertStringifyTransformerNamespace struct{}

func (jsonAssertStringifyTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corejson.JsonStringifyProgrammer.Write(call.TypeText)
}
