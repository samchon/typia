package json

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativejsonprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/json"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type jsonCreateAssertParseTransformerNamespace struct{}

var JsonCreateAssertParseTransformer = jsonCreateAssertParseTransformerNamespace{}

func (jsonCreateAssertParseTransformerNamespace) Transform(props nativeinternal.ITransformProps) *shimast.Node {
  return nativeinternal.GenericTransformer.Factory(nativeinternal.GenericTransformer_IProps{
    ITransformProps: props,
    Method:          "json.createAssertParse",
    Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
      return nativejsonprogrammers.JsonAssertParseProgrammer.Write(x)
    },
  })
}
