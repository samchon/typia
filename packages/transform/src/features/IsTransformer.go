package features

import (
	"github.com/samchon/typia/packages/core/src/programmers"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var IsTransformer = isTransformerNamespace{}

type isTransformerNamespace struct{}

func (isTransformerNamespace) Transform(equals bool) internal.Task {
	return internal.GenericTransformer.Scalar(programmers.IsProgrammer.Write)
}
