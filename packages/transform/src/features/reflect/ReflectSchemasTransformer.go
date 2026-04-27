package reflect

import internal "github.com/samchon/typia/packages/transform/src/internal"

var ReflectSchemasTransformer = reflectSchemasTransformerNamespace{}

type reflectSchemasTransformerNamespace struct{}

func (reflectSchemasTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return reflectCollection(call.TypeText)
}
