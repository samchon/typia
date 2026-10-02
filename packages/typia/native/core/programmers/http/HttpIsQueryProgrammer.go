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

// HttpIsQueryProgrammer_IProps is the argument record of
// HttpIsQueryProgrammer.Write, which builds the query decoder that answers null
// for an invalid input. AllowOptional permits an optional target query type when
// all properties are optional; it does not make the decoder input optional.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of HttpIsQueryProgrammer.Write, which builds the query decoder that answers null for an invalid input; its 5 fields (Context, Modulo, Type, Name, AllowOptional) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 5-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is and explains its non-obvious fields.
type HttpIsQueryProgrammer_IProps struct {
  Context       nativecontext.ITypiaContext
  Modulo        *shimast.Node
  Type          *shimchecker.Type
  Name          *string
  AllowOptional bool
}

// HttpIsQueryProgrammer_DecomposeProps is the argument record of
// HttpIsQueryProgrammer.Decompose, which builds the query decoder that answers
// null for an invalid input. AllowOptional permits an optional target query
// type when all properties are optional; it does not make the decoder input
// optional.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of HttpIsQueryProgrammer.Decompose, which builds the query decoder that answers null for an invalid input; its 5 fields (Context, Functor, Type, Name, AllowOptional) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 5-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is and explains its non-obvious fields.
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
  return httpProgrammer_is_result(is, decode, props.Context.Emit)
}

func (httpIsQueryProgrammerNamespace) Write(props HttpIsQueryProgrammer_IProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(httpProgrammer_method_text(props.Modulo), props.Context.Emit)
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
