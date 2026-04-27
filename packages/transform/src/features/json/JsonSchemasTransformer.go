package json

import (
	corejson "github.com/samchon/typia/packages/core/src/programmers/json"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var JsonSchemasTransformer = jsonSchemasTransformerNamespace{}

type jsonSchemasTransformerNamespace struct{}

func (jsonSchemasTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return corejson.JsonSchemasProgrammer.Write(call.TypeText)
}
