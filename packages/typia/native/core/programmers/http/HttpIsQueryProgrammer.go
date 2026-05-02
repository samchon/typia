package http

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
)

type httpIsQueryProgrammerNamespace struct{}

var HttpIsQueryProgrammer = httpIsQueryProgrammerNamespace{}

type HttpIsQueryProgrammer_IProps struct {
  Context       nativecontext.ITypiaContext
  Modulo        *shimast.Node
  Type          *shimchecker.Type
  Name          *string
  Init          *shimast.Node
  AllowOptional bool
}

type HttpIsQueryProgrammer_DecomposeProps struct {
  Context       nativecontext.ITypiaContext
  Functor       *nativehelpers.FunctionProgrammer
  Type          *shimchecker.Type
  Name          *string
  AllowOptional bool
}

func (httpIsQueryProgrammerNamespace) Decompose(props HttpIsQueryProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  is := nativeprogrammers.IsProgrammer.Decompose(nativeprogrammers.IsProgrammer_DecomposeProps{
    Context: httpProgrammer_context(props.Context, false, true),
    Functor: props.Functor,
    Config:  nativeprogrammers.IsProgrammer_IConfig{Equals: false},
    Type:    props.Type,
    Name:    props.Name,
  })
  decode := HttpQueryProgrammer.Decompose(HttpQueryProgrammer_DecomposeProps{
    Context:       props.Context,
    Functor:       props.Functor,
    AllowOptional: props.AllowOptional,
    Type:          props.Type,
    Name:          props.Name,
  })
  return httpProgrammer_is_result(is, decode)
}

func (httpIsQueryProgrammerNamespace) Write(props HttpIsQueryProgrammer_IProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(httpProgrammer_method_text(props.Modulo))
  result := HttpIsQueryProgrammer.Decompose(HttpIsQueryProgrammer_DecomposeProps{
    Context:       props.Context,
    Functor:       functor,
    Type:          props.Type,
    Name:          props.Name,
    AllowOptional: props.AllowOptional,
  })
  return nativeinternal.FeatureProgrammer.WriteDecomposed(nativeinternal.FeatureProgrammer_WriteDecomposedProps{
    Modulo:  props.Modulo,
    Functor: functor,
    Result:  result,
  })
}
