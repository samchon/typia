package json

import (
	corejson "github.com/samchon/typia/packages/core/src/programmers/json"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var JsonCreateIsStringifyTransformer = jsonCreateIsStringifyTransformerNamespace{}

type jsonCreateIsStringifyTransformerNamespace struct{}

func (jsonCreateIsStringifyTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corejson.JsonStringifyProgrammer.Write(call.TypeText)
}
