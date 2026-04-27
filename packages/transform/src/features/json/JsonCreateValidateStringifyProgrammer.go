package json

import (
	corejson "github.com/samchon/typia/packages/core/src/programmers/json"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var JsonCreateValidateStringifyTransformer = jsonCreateValidateStringifyTransformerNamespace{}

type jsonCreateValidateStringifyTransformerNamespace struct{}

func (jsonCreateValidateStringifyTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	stringify := corejson.JsonStringifyProgrammer.Write(call.TypeText)
	return "((input) => ({ success: true, data: " + stringify + "(input) }))"
}
