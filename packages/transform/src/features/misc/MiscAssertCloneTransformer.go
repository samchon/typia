package misc

import internal "github.com/samchon/typia/packages/transform/src/internal"

var MiscAssertCloneTransformer = miscAssertCloneTransformerNamespace{}

type miscAssertCloneTransformerNamespace struct{}

func (miscAssertCloneTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return "(input => JSON.parse(JSON.stringify(input)))"
}
