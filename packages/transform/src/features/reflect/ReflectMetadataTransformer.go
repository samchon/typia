package reflect

import internal "github.com/samchon/typia/packages/transform/src/internal"

var ReflectMetadataTransformer = reflectMetadataTransformerNamespace{}

type reflectMetadataTransformerNamespace struct{}

func (reflectMetadataTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return "({})"
}
