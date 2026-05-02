package http

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativehttpprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/http"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type httpAssertQueryTransformerNamespace struct{}

var HttpAssertQueryTransformer = httpAssertQueryTransformerNamespace{}

func (httpAssertQueryTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
  return nativeinternal.GenericTransformer.Scalar(nativeinternal.GenericTransformer_IProps{
    ITransformProps: props,
    Method:          "http.assertQuery",
    Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
      return nativehttpprogrammers.HttpAssertQueryProgrammer.Write(nativehttpprogrammers.HttpAssertQueryProgrammer_IProps{
        Context: x.Context,
        Modulo:  x.Modulo,
        Type:    x.Type,
        Name:    x.Name,
        Init:    x.Init,
      })
    },
  })
}
