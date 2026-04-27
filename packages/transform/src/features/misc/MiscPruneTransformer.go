package misc

import (
	coremisc "github.com/samchon/typia/packages/core/src/programmers/misc"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var MiscPruneTransformer = miscPruneTransformerNamespace{}

type miscPruneTransformerNamespace struct{}

func (miscPruneTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return coremisc.MiscPruneProgrammer.Write(call.TypeText)
}
