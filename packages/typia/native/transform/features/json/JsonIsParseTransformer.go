package json

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativejsonprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/json"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type jsonIsParseTransformerNamespace struct{}

var JsonIsParseTransformer = jsonIsParseTransformerNamespace{}

func (jsonIsParseTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
  return nativeinternal.GenericTransformer.Scalar(nativeinternal.GenericTransformer_IProps{
    ITransformProps: props,
    Method:          "json.isParse",
    Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
      return nativejsonprogrammers.JsonIsParseProgrammer.Write(x)
    },
  })
}
