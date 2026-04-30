package http

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativehttpprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/http"
	nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type httpIsFormDataTransformerNamespace struct{}

var HttpIsFormDataTransformer = httpIsFormDataTransformerNamespace{}

func (httpIsFormDataTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
	return nativeinternal.GenericTransformer.Scalar(nativeinternal.GenericTransformer_IProps{
		ITransformProps: props,
		Method:          "http.isFormData",
		Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
			return nativehttpprogrammers.HttpIsFormDataProgrammer.Write(x)
		},
	})
}
