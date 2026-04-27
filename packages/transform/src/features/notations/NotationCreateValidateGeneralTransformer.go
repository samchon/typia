package notations

import (
	corenotations "github.com/samchon/typia/packages/core/src/programmers/notations"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var NotationCreateValidateGeneralTransformer = notationCreateValidateGeneralTransformerNamespace{}

type notationCreateValidateGeneralTransformerNamespace struct{}

func (notationCreateValidateGeneralTransformerNamespace) Transform(rename string) internal.Task {
	return func(call internal.ITypiaCallExpression) string {
		return corenotations.NotationValidateGeneralProgrammer.Write(rename, call.TypeText)
	}
}
