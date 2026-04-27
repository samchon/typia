package misc

import (
	coremisc "github.com/samchon/typia/packages/core/src/programmers/misc"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var MiscCreateIsPruneTransformer = miscCreateIsPruneTransformerNamespace{}

type miscCreateIsPruneTransformerNamespace struct{}

func (miscCreateIsPruneTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	prune := coremisc.MiscPruneProgrammer.Write(call.TypeText)
	return "((input) => { " + prune + "(input); return true; })"
}
