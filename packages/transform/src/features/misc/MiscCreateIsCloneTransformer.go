package misc

import internal "github.com/samchon/typia/packages/transform/src/internal"

var MiscCreateIsCloneTransformer = miscCreateIsCloneTransformerNamespace{}

type miscCreateIsCloneTransformerNamespace struct{}

func (miscCreateIsCloneTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return "(input => JSON.parse(JSON.stringify(input)))"
}
