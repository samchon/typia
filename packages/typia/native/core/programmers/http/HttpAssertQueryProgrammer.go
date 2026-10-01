package http

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
)

type httpAssertQueryProgrammerNamespace struct{}

var HttpAssertQueryProgrammer = httpAssertQueryProgrammerNamespace{}

// HttpAssertQueryProgrammer_IProps is the argument record of
// HttpAssertQueryProgrammer.Write, which builds the asserting query decoder.
// Init is the default initializer of the generated `errorFactory` parameter, or
// nil; AllowOptional lets the query object be undefined when every property is
// optional.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of HttpAssertQueryProgrammer.Write, which builds the asserting query decoder; its 6 fields (Context, Modulo, Type, Name, Init, AllowOptional) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 6-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is and explains its non-obvious fields.
type HttpAssertQueryProgrammer_IProps struct {
  Context       nativecontext.ITypiaContext
  Modulo        *shimast.Node
  Type          *shimchecker.Type
  Name          *string
  Init          *shimast.Node
  AllowOptional bool
}

// HttpAssertQueryProgrammer_DecomposeProps is the argument record of
// HttpAssertQueryProgrammer.Decompose, which builds the asserting query decoder.
// Init is the default initializer of the generated `errorFactory` parameter, or
// nil; AllowOptional lets the query object be undefined when every property is
// optional.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of HttpAssertQueryProgrammer.Decompose, which builds the asserting query decoder; its 6 fields (Context, Functor, Type, Name, Init, AllowOptional) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 6-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is and explains its non-obvious fields.
type HttpAssertQueryProgrammer_DecomposeProps struct {
  Context       nativecontext.ITypiaContext
  Functor       *nativehelpers.FunctionProgrammer
  Type          *shimchecker.Type
  Name          *string
  Init          *shimast.Node
  AllowOptional bool
}

func (httpAssertQueryProgrammerNamespace) Decompose(props HttpAssertQueryProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  assert := nativeprogrammers.AssertProgrammer.Decompose(nativeprogrammers.AssertProgrammer_DecomposeProps{
    Context: httpProgrammer_context(props.Context, false, false),
    Functor: props.Functor,
    Config: nativeprogrammers.AssertProgrammer_IConfig{
      Equals: false,
      Guard:  false,
    },
    Type: props.Type,
    Name: props.Name,
    Init: props.Init,
  })
  decode := HttpQueryProgrammer.Decompose(HttpQueryProgrammer_DecomposeProps{
    Context:       props.Context,
    Functor:       props.Functor,
    AllowOptional: props.AllowOptional,
    Type:          props.Type,
    Name:          props.Name,
  })
  return httpProgrammer_assert_result(props.Context, props.Init, assert, decode)
}

func (httpAssertQueryProgrammerNamespace) Write(props HttpAssertQueryProgrammer_IProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(httpProgrammer_method_text(props.Modulo), props.Context.Emit)
  result := HttpAssertQueryProgrammer.Decompose(HttpAssertQueryProgrammer_DecomposeProps{
    Context:       props.Context,
    Functor:       functor,
    Type:          props.Type,
    Name:          props.Name,
    Init:          props.Init,
    AllowOptional: props.AllowOptional,
  })
  return nativeinternal.FeatureProgrammer.WriteDecomposed(nativeinternal.FeatureProgrammer_WriteDecomposedProps{
    Modulo:  props.Modulo,
    Functor: functor,
    Result:  result,
  })
}
