package json

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativejsonprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/json"
	nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type jsonAssertStringifyTransformerNamespace struct{}

var JsonAssertStringifyTransformer = jsonAssertStringifyTransformerNamespace{}

func (jsonAssertStringifyTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
	return nativeinternal.GenericTransformer.Scalar(nativeinternal.GenericTransformer_IProps{
		ITransformProps: props,
		Method:          "json.assertStringify",
		Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
			return nativejsonprogrammers.JsonAssertStringifyProgrammer.Write(x)
		},
	})
}
