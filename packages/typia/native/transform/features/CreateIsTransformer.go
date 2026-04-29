package features

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
	nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type createIsTransformerNamespace struct{}

var CreateIsTransformer = createIsTransformerNamespace{}

func (createIsTransformerNamespace) Transform(config nativeprogrammers.IsProgrammer_IConfig) func(props nativeinternal.ITransformProps) *shimast.Node {
	return func(props nativeinternal.ITransformProps) *shimast.Node {
		method := "is"
		if config.Equals {
			method = "equals"
		}
		return nativeinternal.GenericTransformer.Factory(nativeinternal.GenericTransformer_IProps{
			ITransformProps: props,
			Method:          method,
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
