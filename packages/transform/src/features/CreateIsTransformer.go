package features

import (
	"github.com/samchon/typia/packages/core/src/programmers"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var CreateIsTransformer = createIsTransformerNamespace{}

type createIsTransformerNamespace struct{}

func (createIsTransformerNamespace) Transform(equals bool) internal.Task {
	return internal.GenericTransformer.Factory(programmers.IsProgrammer.Write)
}
