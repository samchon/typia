package misc

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativemiscprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/misc"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type miscValidateCloneTransformerNamespace struct{}

var MiscValidateCloneTransformer = miscValidateCloneTransformerNamespace{}

func (miscValidateCloneTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
  return nativeinternal.GenericTransformer.Scalar(nativeinternal.GenericTransformer_IProps{
    ITransformProps: props,
    Method:          "misc.validateClone",
    Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
      return nativemiscprogrammers.MiscValidateCloneProgrammer.Write(x)
    },
  })
}
