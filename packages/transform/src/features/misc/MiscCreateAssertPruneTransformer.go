package misc

import (
	coremisc "github.com/samchon/typia/packages/core/src/programmers/misc"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var MiscCreateAssertPruneTransformer = miscCreateAssertPruneTransformerNamespace{}

type miscCreateAssertPruneTransformerNamespace struct{}

func (miscCreateAssertPruneTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return coremisc.MiscPruneProgrammer.Write(call.TypeText)
}
