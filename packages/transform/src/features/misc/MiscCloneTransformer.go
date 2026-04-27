package misc

import internal "github.com/samchon/typia/packages/transform/src/internal"

var MiscCloneTransformer = miscCloneTransformerNamespace{}

type miscCloneTransformerNamespace struct{}

func (miscCloneTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return "(input => JSON.parse(JSON.stringify(input)))"
}
