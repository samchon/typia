package http

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
)

type httpValidateQueryProgrammerNamespace struct{}

var HttpValidateQueryProgrammer = httpValidateQueryProgrammerNamespace{}

// HttpValidateQueryProgrammer_IProps is the argument record of
// HttpValidateQueryProgrammer.Write, which builds the query decoder that returns
// an IValidation. AllowOptional lets the query object be undefined when every
// property is optional.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of HttpValidateQueryProgrammer.Write, which builds the query decoder that returns an IValidation; its 6 fields (Context, Modulo, Type, Name, Init, AllowOptional) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 6-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is and explains its non-obvious fields.
type HttpValidateQueryProgrammer_IProps struct {
  Context       nativecontext.ITypiaContext
  Modulo        *shimast.Node
  Type          *shimchecker.Type
  Name          *string
  Init          *shimast.Node
  AllowOptional bool
}

// HttpValidateQueryProgrammer_DecomposeProps is the argument record of
// HttpValidateQueryProgrammer.Decompose, which builds the query decoder that
// returns an IValidation. AllowOptional lets the query object be undefined when
// every property is optional.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of HttpValidateQueryProgrammer.Decompose, which builds the query decoder that returns an IValidation; its 6 fields (Context, Modulo, Functor, Type, Name, AllowOptional) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 6-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is and explains its non-obvious fields.
type HttpValidateQueryProgrammer_DecomposeProps struct {
  Context       nativecontext.ITypiaContext
  Modulo        *shimast.Node
  Functor       *nativehelpers.FunctionProgrammer
  Type          *shimchecker.Type
  Name          *string
  AllowOptional bool
}

func (httpValidateQueryProgrammerNamespace) Decompose(props HttpValidateQueryProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  validate := nativeprogrammers.ValidateProgrammer.Decompose(nativeprogrammers.ValidateProgrammer_DecomposeProps{
    Context: httpProgrammer_context(props.Context, false, false),
    Modulo:  props.Modulo,
    Functor: props.Functor,
    Config:  nativeprogrammers.ValidateProgrammer_IConfig{Equals: false},
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
  return httpProgrammer_validate_result(props.Context, validate, decode)
}

func (httpValidateQueryProgrammerNamespace) Write(props HttpValidateQueryProgrammer_IProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(httpProgrammer_method_text(props.Modulo), props.Context.Emit)
  result := HttpValidateQueryProgrammer.Decompose(HttpValidateQueryProgrammer_DecomposeProps{
    Context:       props.Context,
    Modulo:        props.Modulo,
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
