package features

import (
	"github.com/samchon/typia/packages/core/src/programmers"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var AssertTransformer = assertTransformerNamespace{}

type assertTransformerNamespace struct{}

func (assertTransformerNamespace) Transform(equals bool, guard bool) internal.Task {
	return internal.GenericTransformer.Scalar(programmers.AssertProgrammer.Write)
}
