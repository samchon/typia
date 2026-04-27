package misc

import internal "github.com/samchon/typia/packages/transform/src/internal"

var MiscCreateAssertCloneTransformer = miscCreateAssertCloneTransformerNamespace{}

type miscCreateAssertCloneTransformerNamespace struct{}

func (miscCreateAssertCloneTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return "(input => JSON.parse(JSON.stringify(input)))"
}
