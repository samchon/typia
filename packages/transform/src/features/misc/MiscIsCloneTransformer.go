package misc

import internal "github.com/samchon/typia/packages/transform/src/internal"

var MiscIsCloneTransformer = miscIsCloneTransformerNamespace{}

type miscIsCloneTransformerNamespace struct{}

func (miscIsCloneTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return "(input => JSON.parse(JSON.stringify(input)))"
}
