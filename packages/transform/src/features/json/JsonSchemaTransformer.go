package json

import (
	corejson "github.com/samchon/typia/packages/core/src/programmers/json"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var JsonSchemaTransformer = jsonSchemaTransformerNamespace{}

type jsonSchemaTransformerNamespace struct{}

func (jsonSchemaTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corejson.JsonSchemaProgrammer.Write(call.TypeText)
}
