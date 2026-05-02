package misc

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativemiscprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/misc"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type miscCreateAssertPruneTransformerNamespace struct{}

var MiscCreateAssertPruneTransformer = miscCreateAssertPruneTransformerNamespace{}

func (miscCreateAssertPruneTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
  return nativeinternal.GenericTransformer.Factory(nativeinternal.GenericTransformer_IProps{
    ITransformProps: props,
    Method:          "misc.createAssertPrune",
    Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
      return nativemiscprogrammers.MiscAssertPruneProgrammer.Write(x)
    },
  })
}
