package plain

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativeplainprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/plain"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type plainCreateIsCloneTransformerNamespace struct{}

var PlainCreateIsCloneTransformer = plainCreateIsCloneTransformerNamespace{}

func (plainCreateIsCloneTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
  return nativeinternal.GenericTransformer.Factory(nativeinternal.GenericTransformer_IProps{
    ITransformProps: props,
    Method:          "plain.createIsClone",
    Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
      return nativeplainprogrammers.PlainIsCloneProgrammer.Write(x)
    },
  })
}
