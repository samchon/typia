package http

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativehttpprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/http"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type createHttpAssertFormDataTransformerNamespace struct{}

var CreateHttpAssertFormDataTransformer = createHttpAssertFormDataTransformerNamespace{}

func (createHttpAssertFormDataTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
  return nativeinternal.GenericTransformer.Factory(nativeinternal.GenericTransformer_IProps{
    ITransformProps: props,
    Method:          "http.createAssertFormData",
    Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
      return nativehttpprogrammers.HttpAssertFormDataProgrammer.Write(x)
    },
  })
}
