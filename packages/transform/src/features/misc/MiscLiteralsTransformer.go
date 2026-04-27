package misc

import (
	coremisc "github.com/samchon/typia/packages/core/src/programmers/misc"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var MiscLiteralsTransformer = miscLiteralsTransformerNamespace{}

type miscLiteralsTransformerNamespace struct{}

func (miscLiteralsTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return coremisc.MiscLiteralsProgrammer.Write(call.TypeText)
}
