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
  functor := nativehelpers.NewFunctionProgrammer(httpProgrammer_method_text(props.Modulo))
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
  decodeArrow := decode.Arrow.AsArrowFunction()
  output := decodeArrow.Type
  if output == nil {
    output = nativefactories.TypeFactory.Keyword("any")
  }
  statements := append([]*shimast.Node{}, validate.Statements...)
  statements = append(statements,
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name:  "__validate",
      Value: validate.Arrow,
    }),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name:  "__decode",
      Value: decode.Arrow,
    }),
  )
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  httpProgrammer_merge_functions(validate.Functions, decode.Functions),
    Statements: statements,
    Arrow: httpValidateProgrammer_factory.NewArrowFunction(
      nil,
      nil,
      decodeArrow.Parameters,
      httpProgrammer_import_type(context, nativeprogrammers.ImportProgrammer_TypeProps{
        File:      "typia",
        Name:      "IValidation",
        Arguments: []*shimast.TypeNode{output},
      }),
      nil,
      httpValidateProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
      httpValidateProgrammer_factory.NewCallExpression(
        httpValidateProgrammer_factory.NewIdentifier("__validate"),
        nil,
        nil,
        httpValidateProgrammer_factory.NewNodeList([]*shimast.Node{
          httpValidateProgrammer_factory.NewCallExpression(
            httpValidateProgrammer_factory.NewIdentifier("__decode"),
            nil,
            nil,
            httpValidateProgrammer_factory.NewNodeList([]*shimast.Node{httpValidateProgrammer_factory.NewIdentifier("input")}),
            shimast.NodeFlagsNone,
          ),
        }),
        shimast.NodeFlagsNone,
      ),
    ),
  }
}
