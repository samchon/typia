package misc

import (
	coremisc "github.com/samchon/typia/packages/core/src/programmers/misc"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var MiscCreatePruneTransformer = miscCreatePruneTransformerNamespace{}

type miscCreatePruneTransformerNamespace struct{}

func (miscCreatePruneTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return coremisc.MiscPruneProgrammer.Write(call.TypeText)
}
