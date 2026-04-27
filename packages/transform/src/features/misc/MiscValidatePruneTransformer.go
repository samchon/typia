package misc

import (
	coremisc "github.com/samchon/typia/packages/core/src/programmers/misc"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var MiscValidatePruneTransformer = miscValidatePruneTransformerNamespace{}

type miscValidatePruneTransformerNamespace struct{}

func (miscValidatePruneTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	prune := coremisc.MiscPruneProgrammer.Write(call.TypeText)
	return "((input) => ({ success: true, data: " + prune + "(input) }))"
}
