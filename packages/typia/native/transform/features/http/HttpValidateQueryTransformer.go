package http

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativehttpprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/http"
	nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type httpValidateQueryTransformerNamespace struct{}

var HttpValidateQueryTransformer = httpValidateQueryTransformerNamespace{}

func (httpValidateQueryTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
	return nativeinternal.GenericTransformer.Scalar(nativeinternal.GenericTransformer_IProps{
		ITransformProps: props,
		Method:          "http.validateQuery",
		Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
			return nativehttpprogrammers.HttpValidateQueryProgrammer.Write(nativehttpprogrammers.HttpValidateQueryProgrammer_IProps{
				Context: x.Context,
				Modulo:  x.Modulo,
				Type:    x.Type,
				Name:    x.Name,
				Init:    x.Init,
			})
		},
	})
}
