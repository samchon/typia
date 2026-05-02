package http

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativehttpprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/http"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type httpFormDataTransformerNamespace struct{}

var HttpFormDataTransformer = httpFormDataTransformerNamespace{}

func (httpFormDataTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
  return nativeinternal.GenericTransformer.Scalar(nativeinternal.GenericTransformer_IProps{
    ITransformProps: props,
    Method:          "http.formdata",
    Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
      return nativehttpprogrammers.HttpFormDataProgrammer.Write(x)
    },
  })
}
