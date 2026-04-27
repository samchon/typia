package misc

import (
	coremisc "github.com/samchon/typia/packages/core/src/programmers/misc"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var MiscIsPruneTransformer = miscIsPruneTransformerNamespace{}

type miscIsPruneTransformerNamespace struct{}

func (miscIsPruneTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	prune := coremisc.MiscPruneProgrammer.Write(call.TypeText)
	return "((input) => { " + prune + "(input); return true; })"
}
