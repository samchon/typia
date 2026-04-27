package features

import (
	"github.com/samchon/typia/packages/core/src/programmers"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var CreateRandomTransformer = createRandomTransformerNamespace{}

type createRandomTransformerNamespace struct{}

func (createRandomTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return programmers.RandomProgrammer.Write(call.TypeText)
}
