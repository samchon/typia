package http

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
)

type httpIsHeadersProgrammerNamespace struct{}

var HttpIsHeadersProgrammer = httpIsHeadersProgrammerNamespace{}

// HttpIsHeadersProgrammer_DecomposeProps is the argument record of
// HttpIsHeadersProgrammer.Decompose, which builds the headers decoder that
// answers null for an invalid input.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of HttpIsHeadersProgrammer.Decompose, which builds the headers decoder that answers null for an invalid input; its 4 fields (Context, Functor, Type, Name) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 4-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type HttpIsHeadersProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
}

func (httpIsHeadersProgrammerNamespace) Decompose(props HttpIsHeadersProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  is := nativeprogrammers.IsProgrammer.Decompose(nativeprogrammers.IsProgrammer_DecomposeProps{
    Context: httpProgrammer_context(props.Context, false, true),
    Functor: props.Functor,
    Config:  nativeprogrammers.IsProgrammer_IConfig{Equals: false},
    Type:    props.Type,
    Name:    props.Name,
  })
  decode := HttpHeadersProgrammer.Decompose(HttpHeadersProgrammer_DecomposeProps{
    Context: props.Context,
    Functor: props.Functor,
    Type:    props.Type,
    Name:    props.Name,
  })
  return httpProgrammer_is_result(is, decode, props.Context.Emit)
}

func (httpIsHeadersProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(httpProgrammer_method_text(props.Modulo), props.Context.Emit)
  result := HttpIsHeadersProgrammer.Decompose(HttpIsHeadersProgrammer_DecomposeProps{
    Context: props.Context,
    Functor: functor,
    Type:    props.Type,
    Name:    props.Name,
  })
  return nativeinternal.FeatureProgrammer.WriteDecomposed(nativeinternal.FeatureProgrammer_WriteDecomposedProps{
    Modulo:  props.Modulo,
    Functor: functor,
    Result:  result,
  })
}
