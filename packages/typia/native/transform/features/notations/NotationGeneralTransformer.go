package notations

import (
  "strings"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativenotationprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers/notations"
  nativeinternal "github.com/samchon/typia/packages/typia/native/transform/internal"
)

type notationGeneralTransformerNamespace struct{}

var NotationGeneralTransformer = notationGeneralTransformerNamespace{}

func (notationGeneralTransformerNamespace) Transform(rename nativenotationprogrammers.NotationGeneralProgrammer_IRename) func(props nativeinternal.ITransformProps) *shimast.Node {
  return func(props nativeinternal.ITransformProps) *shimast.Node {
    return nativeinternal.GenericTransformer.Scalar(nativeinternal.GenericTransformer_IProps{
      ITransformProps: props,
      Method:          "notations." + rename.Name,
      Write: func(x nativecontext.IProgrammerProps) *shimast.Node {
        return nativenotationprogrammers.NotationGeneralProgrammer.Write(nativenotationprogrammers.NotationGeneralProgrammer_IProps{
          IProgrammerProps: x,
          Rename:           rename,
        })
      },
    })
  }
}

func notationGeneralTransformer_capitalize(str string) string {
  if str == "" {
    return str
  }
  return strings.ToUpper(str[:1]) + str[1:]
}
