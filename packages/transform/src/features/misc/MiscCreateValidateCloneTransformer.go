package misc

import internal "github.com/samchon/typia/packages/transform/src/internal"

var MiscCreateValidateCloneTransformer = miscCreateValidateCloneTransformerNamespace{}

type miscCreateValidateCloneTransformerNamespace struct{}

func (miscCreateValidateCloneTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return "((input) => ({ success: true, data: JSON.parse(JSON.stringify(input)) }))"
}
