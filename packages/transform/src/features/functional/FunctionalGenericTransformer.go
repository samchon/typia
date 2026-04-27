package functional

import internal "github.com/samchon/typia/packages/transform/src/internal"

var FunctionalGenericTransformer = functionalGenericTransformerNamespace{}

type functionalGenericTransformerNamespace struct{}

func (functionalGenericTransformerNamespace) Transform(write func(string) string) internal.Task {
	return func(call internal.ITypiaCallExpression) string {
		return write(call.TypeText)
	}
}
