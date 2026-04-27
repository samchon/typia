package notations

import (
	corenotations "github.com/samchon/typia/packages/core/src/programmers/notations"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var NotationCreateIsGeneralTransformer = notationCreateIsGeneralTransformerNamespace{}

type notationCreateIsGeneralTransformerNamespace struct{}

func (notationCreateIsGeneralTransformerNamespace) Transform(rename string) internal.Task {
	return func(call internal.ITypiaCallExpression) string {
		return corenotations.NotationIsGeneralProgrammer.Write(rename, call.TypeText)
	}
}
