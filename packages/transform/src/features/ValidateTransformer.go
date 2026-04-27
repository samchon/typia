package features

import (
	"github.com/samchon/typia/packages/core/src/programmers"
	internal "github.com/samchon/typia/packages/transform/src/internal"
)

var ValidateTransformer = validateTransformerNamespace{}

type validateTransformerNamespace struct{}

func (validateTransformerNamespace) Transform(equals bool) internal.Task {
	return internal.GenericTransformer.Scalar(programmers.ValidateProgrammer.Write)
}
