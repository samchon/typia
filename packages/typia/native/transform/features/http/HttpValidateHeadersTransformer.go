package http

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativehttpprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/http"
	nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type httpValidateHeadersTransformerNamespace struct{}

var HttpValidateHeadersTransformer = httpValidateHeadersTransformerNamespace{}

func (httpValidateHeadersTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
	return nativeinternal.GenericTransformer.Scalar(nativeinternal.GenericTransformer_IProps{
		ITransformProps: props,
		Method:          "http.validateHeaders",
		Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
			return nativehttpprogrammers.HttpValidateHeadersProgrammer.Write(x)
		},
	})
}
