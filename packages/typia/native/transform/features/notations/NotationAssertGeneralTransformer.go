package notations

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativenotationprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/notations"
	nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type notationAssertGeneralTransformerNamespace struct{}

var NotationAssertGeneralTransformer = notationAssertGeneralTransformerNamespace{}

func (notationAssertGeneralTransformerNamespace) Transform(rename nativenotationprogrammers.NotationGeneralProgrammer_IRename) func(props nativeinternal.ITransformProps) *shimast.Node {
	return func(props nativeinternal.ITransformProps) *shimast.Node {
		return nativeinternal.GenericTransformer.Scalar(nativeinternal.GenericTransformer_IProps{
			ITransformProps: props,
			Method:          "notations.assert" + notationGeneralTransformer_capitalize(rename.Name),
			Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
				return nativenotationprogrammers.NotationAssertGeneralProgrammer.Write(nativenotationprogrammers.NotationAssertGeneralProgrammer_IProps{
					IProgrammerProps: x,
					Rename:           rename,
				})
			},
		})
	}
}
