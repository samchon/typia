package plain

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativeplainprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/plain"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type plainValidateCloneTransformerNamespace struct{}

var PlainValidateCloneTransformer = plainValidateCloneTransformerNamespace{}

func (plainValidateCloneTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
  return nativeinternal.GenericTransformer.Scalar(nativeinternal.GenericTransformer_IProps{
    ITransformProps: props,
    Method:          "plain.validateClone",
    Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
      return nativeplainprogrammers.PlainValidateCloneProgrammer.Write(x)
    },
  })
}
