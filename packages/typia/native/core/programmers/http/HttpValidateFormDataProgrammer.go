package http

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
)

type httpValidateFormDataProgrammerNamespace struct{}

var HttpValidateFormDataProgrammer = httpValidateFormDataProgrammerNamespace{}

// HttpValidateFormDataProgrammer_DecomposeProps is the argument record of
// HttpValidateFormDataProgrammer.Decompose, which builds the form-data decoder
// that returns an IValidation.
//
// @evidence contracts/common.md#principled-implementation It is the argument record of HttpValidateFormDataProgrammer.Decompose, which builds the form-data decoder that returns an IValidation; its 5 fields (Context, Modulo, Functor, Type, Name) are named so that a producer and a consumer cannot transpose them.
// @evidence contracts/common.md#clear-and-simple-design A 5-field record with no methods.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record: it derives, defaults and validates nothing.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record is.
type HttpValidateFormDataProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
}

var httpValidateProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (httpValidateFormDataProgrammerNamespace) Decompose(props HttpValidateFormDataProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  validate := nativeprogrammers.ValidateProgrammer.Decompose(nativeprogrammers.ValidateProgrammer_DecomposeProps{
    Context: httpProgrammer_context(props.Context, false, false),
    Modulo:  props.Modulo,
    Functor: props.Functor,
    Config:  nativeprogrammers.ValidateProgrammer_IConfig{Equals: false},
    Type:    props.Type,
    Name:    props.Name,
  })
  decode := HttpFormDataProgrammer.Decompose(HttpFormDataProgrammer_DecomposeProps{
    Context: props.Context,
    Functor: props.Functor,
    Type:    props.Type,
    Name:    props.Name,
  })
  return httpProgrammer_validate_result(props.Context, validate, decode)
}

func (httpValidateFormDataProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(httpProgrammer_method_text(props.Modulo), props.Context.Emit)
  result := HttpValidateFormDataProgrammer.Decompose(HttpValidateFormDataProgrammer_DecomposeProps{
    Context: props.Context,
    Modulo:  props.Modulo,
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

func httpProgrammer_validate_result(context nativecontext.ITypiaContext, validate nativeinternal.FeatureProgrammer_IDecomposed, decode nativeinternal.FeatureProgrammer_IDecomposed) nativeinternal.FeatureProgrammer_IDecomposed {
  f := nativecontext.EmitFactoryOf(httpValidateProgrammer_factory, context.Emit)
  decodeArrow := decode.Arrow.AsArrowFunction()
  output := decodeArrow.Type
  if output == nil {
    output = nativefactories.TypeFactory.Keyword("any", context.Emit)
  }
  statements := append([]*shimast.Node{}, validate.Statements...)
  statements = append(statements,
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name:  "__validate",
      Value: validate.Arrow,
    }, context.Emit),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name:  "__decode",
      Value: decode.Arrow,
    }, context.Emit),
  )
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  httpProgrammer_merge_functions(validate.Functions, decode.Functions),
    Statements: statements,
    Arrow: f.NewArrowFunction(
      nil,
      nil,
      decodeArrow.Parameters,
      httpProgrammer_import_type(context, nativecontext.ImportProgrammer_TypeProps{
        File:      "typia",
        Name:      "IValidation",
        Arguments: []*shimast.TypeNode{output},
      }),
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewCallExpression(
        f.NewIdentifier("__validate"),
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          f.NewCallExpression(
            f.NewIdentifier("__decode"),
            nil,
            nil,
            f.NewNodeList([]*shimast.Node{f.NewIdentifier("input")}),
            shimast.NodeFlagsNone,
          ),
        }),
        shimast.NodeFlagsNone,
      ),
    ),
  }
}
