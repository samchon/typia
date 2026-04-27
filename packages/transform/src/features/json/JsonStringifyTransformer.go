package json

import (
	corejson "github.com/samchon/typia/packages/core/src/programmers/json"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var JsonStringifyTransformer = jsonStringifyTransformerNamespace{}

type jsonStringifyTransformerNamespace struct{}

func (jsonStringifyTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corejson.JsonStringifyProgrammer.Write(call.TypeText)
}
