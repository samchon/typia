package misc

import (
	coremisc "github.com/samchon/typia/packages/core/src/programmers/misc"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var MiscAssertPruneTransformer = miscAssertPruneTransformerNamespace{}

type miscAssertPruneTransformerNamespace struct{}

func (miscAssertPruneTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return coremisc.MiscPruneProgrammer.Write(call.TypeText)
}
