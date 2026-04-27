package features

import (
	"github.com/samchon/typia/packages/core/src/programmers"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var RandomTransformer = randomTransformerNamespace{}

type randomTransformerNamespace struct{}

func (randomTransformerNamespace) Transform(call internal.ITypiaCallExpression) string {
	return programmers.RandomProgrammer.Write(call.TypeText)
}
