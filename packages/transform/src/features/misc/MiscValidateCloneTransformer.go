package misc

import internal "github.com/samchon/typia/packages/transform/src/internal"

var MiscValidateCloneTransformer = miscValidateCloneTransformerNamespace{}

type miscValidateCloneTransformerNamespace struct{}

func (miscValidateCloneTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return "((input) => ({ success: true, data: JSON.parse(JSON.stringify(input)) }))"
}
