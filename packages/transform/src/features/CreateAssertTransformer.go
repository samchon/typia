package features

import (
	"github.com/samchon/typia/packages/core/src/programmers"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var CreateAssertTransformer = createAssertTransformerNamespace{}

type createAssertTransformerNamespace struct{}

func (createAssertTransformerNamespace) Transform(equals bool, guard bool) internal.Task {
	return internal.GenericTransformer.Factory(programmers.AssertProgrammer.Write)
}
