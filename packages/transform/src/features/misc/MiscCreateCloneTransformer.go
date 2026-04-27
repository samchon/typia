package misc

import internal "github.com/samchon/typia/packages/transform/src/internal"

var MiscCreateCloneTransformer = miscCreateCloneTransformerNamespace{}

type miscCreateCloneTransformerNamespace struct{}

func (miscCreateCloneTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return "(input => JSON.parse(JSON.stringify(input)))"
}
