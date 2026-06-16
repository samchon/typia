package plain

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativeplainprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/plain"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type plainAssertPruneTransformerNamespace struct{}

var PlainAssertPruneTransformer = plainAssertPruneTransformerNamespace{}

func (plainAssertPruneTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
  return nativeinternal.GenericTransformer.Scalar(nativeinternal.GenericTransformer_IProps{
    ITransformProps: props,
    Method:          "plain.assertPrune",
    Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
      return nativeplainprogrammers.PlainAssertPruneProgrammer.Write(x)
    },
  })
}
