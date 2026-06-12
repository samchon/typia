package features

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type createIsLikelyTransformerNamespace struct{}

var CreateIsLikelyTransformer = createIsLikelyTransformerNamespace{}

func (createIsLikelyTransformerNamespace) Transform(config nativeprogrammers.IsProgrammer_IConfig) func(props nativeinternal.ITransformProps) *shimast.Node {
  return func(props nativeinternal.ITransformProps) *shimast.Node {
    depth := isLikelyTransformer_depth(props, "createIsLikely")
    config.Depth = &depth
    return nativeinternal.GenericTransformer.Factory(nativeinternal.GenericTransformer_IProps{
      ITransformProps: props,
      Method:          "createIsLikely",
      Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
        return nativeprogrammers.IsProgrammer.Write(nativeprogrammers.IsProgrammer_IProps{
          Context: x.Context,
          Modulo:  x.Modulo,
          Type:    x.Type,
          Name:    x.Name,
          Init:    x.Init,
          Config:  config,
        })
      },
    })
  }
}
