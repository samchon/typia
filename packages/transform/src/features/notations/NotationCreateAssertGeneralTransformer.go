package notations

import (
	corenotations "github.com/samchon/typia/packages/core/src/programmers/notations"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var NotationCreateAssertGeneralTransformer = notationCreateAssertGeneralTransformerNamespace{}

type notationCreateAssertGeneralTransformerNamespace struct{}

func (notationCreateAssertGeneralTransformerNamespace) Transform(rename string) internal.Task {
	return func(call internal.ITypiaCallExpression) string {
		return corenotations.NotationAssertGeneralProgrammer.Write(rename, call.TypeText)
	}
}
