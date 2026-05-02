package notations

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativenotationprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/notations"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type notationValidateGeneralTransformerNamespace struct{}

var NotationValidateGeneralTransformer = notationValidateGeneralTransformerNamespace{}

func (notationValidateGeneralTransformerNamespace) Transform(rename nativenotationprogrammers.NotationGeneralProgrammer_IRename) func(props nativeinternal.ITransformProps) *shimast.Node {
  return func(props nativeinternal.ITransformProps) *shimast.Node {
    return nativeinternal.GenericTransformer.Scalar(nativeinternal.GenericTransformer_IProps{
      ITransformProps: props,
      Method:          "notations.validate" + notationGeneralTransformer_capitalize(rename.Name),
      Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
        return nativenotationprogrammers.NotationValidateGeneralProgrammer.Write(nativenotationprogrammers.NotationValidateGeneralProgrammer_IProps{
          IProgrammerProps: x,
          Rename:           rename,
        })
      },
    })
  }
}
