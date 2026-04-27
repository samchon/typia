package json

import (
	corejson "github.com/samchon/typia/packages/core/src/programmers/json"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var JsonApplicationTransformer = jsonApplicationTransformerNamespace{}

type jsonApplicationTransformerNamespace struct{}

func (jsonApplicationTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corejson.JsonApplicationProgrammer.Write(call.TypeText)
}
