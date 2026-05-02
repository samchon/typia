package misc

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativemiscprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/misc"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type miscCreateValidatePruneTransformerNamespace struct{}

var MiscCreateValidatePruneTransformer = miscCreateValidatePruneTransformerNamespace{}

func (miscCreateValidatePruneTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
  return nativeinternal.GenericTransformer.Factory(nativeinternal.GenericTransformer_IProps{
    ITransformProps: props,
    Method:          "misc.createValidatePrune",
    Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
      return nativemiscprogrammers.MiscValidatePruneProgrammer.Write(x)
    },
  })
}
