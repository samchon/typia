package json

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativejsonprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/json"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type jsonIsStringifyTransformerNamespace struct{}

var JsonIsStringifyTransformer = jsonIsStringifyTransformerNamespace{}

func (jsonIsStringifyTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
  return nativeinternal.GenericTransformer.Scalar(nativeinternal.GenericTransformer_IProps{
    ITransformProps: props,
    Method:          "json.isStringify",
    Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
      return nativejsonprogrammers.JsonIsStringifyProgrammer.Write(x)
    },
  })
}
