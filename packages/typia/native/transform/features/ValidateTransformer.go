package features

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
	nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type validateTransformerNamespace struct{}

var ValidateTransformer = validateTransformerNamespace{}

func (validateTransformerNamespace) Transform(config nativeprogrammers.ValidateProgrammer_IConfig) func(props nativeinternal.ITransformProps) *shimast.Node {
	return func(props nativeinternal.ITransformProps) *shimast.Node {
		method := "validate"
		if config.Equals {
			method = "validateEquals"
		}
		return nativeinternal.GenericTransformer.Scalar(nativeinternal.GenericTransformer_IProps{
			ITransformProps: props,
			Method:          method,
			Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
				return nativeprogrammers.ValidateProgrammer.Write(nativeprogrammers.ValidateProgrammer_IProps{
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
