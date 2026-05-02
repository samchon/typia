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

type httpIsFormDataProgrammerNamespace struct{}

var HttpIsFormDataProgrammer = httpIsFormDataProgrammerNamespace{}

type HttpIsFormDataProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
}

var httpIsProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (httpIsFormDataProgrammerNamespace) Decompose(props HttpIsFormDataProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  is := nativeprogrammers.IsProgrammer.Decompose(nativeprogrammers.IsProgrammer_DecomposeProps{
    Context: httpProgrammer_context(props.Context, false, false),
    Functor: props.Functor,
    Config:  nativeprogrammers.IsProgrammer_IConfig{Equals: false},
    Type:    props.Type,
    Name:    props.Name,
  })
  decode := HttpFormDataProgrammer.Decompose(HttpFormDataProgrammer_DecomposeProps{
    Context: props.Context,
    Functor: props.Functor,
    Type:    props.Type,
    Name:    props.Name,
  })
  return httpProgrammer_is_result(is, decode)
}

func (httpIsFormDataProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(httpProgrammer_method_text(props.Modulo))
  result := HttpIsFormDataProgrammer.Decompose(HttpIsFormDataProgrammer_DecomposeProps{
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

func httpProgrammer_is_result(is nativeinternal.FeatureProgrammer_IDecomposed, decode nativeinternal.FeatureProgrammer_IDecomposed) nativeinternal.FeatureProgrammer_IDecomposed {
  decodeArrow := decode.Arrow.AsArrowFunction()
  output := decodeArrow.Type
  if output == nil {
    output = nativefactories.TypeFactory.Keyword("any")
  }
  statements := append([]*shimast.Node{}, is.Statements...)
  statements = append(statements, decode.Statements...)
  statements = append(statements,
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name:  "__is",
      Value: is.Arrow,
    }),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name:  "__decode",
      Value: decode.Arrow,
    }),
  )
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  httpProgrammer_merge_functions(is.Functions, decode.Functions),
    Statements: statements,
    Arrow: httpIsProgrammer_factory.NewArrowFunction(
      nil,
      nil,
      decodeArrow.Parameters,
      httpIsProgrammer_factory.NewUnionTypeNode(httpIsProgrammer_factory.NewNodeList([]*shimast.Node{
        output,
        httpIsProgrammer_factory.NewTypeReferenceNode(httpIsProgrammer_factory.NewIdentifier("null"), nil),
      })),
      nil,
      httpIsProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
      httpIsProgrammer_factory.NewBlock(httpIsProgrammer_factory.NewNodeList([]*shimast.Node{
        nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
          Name: "value",
          Value: httpIsProgrammer_factory.NewCallExpression(
            httpIsProgrammer_factory.NewIdentifier("__decode"),
            nil,
            nil,
            httpIsProgrammer_factory.NewNodeList([]*shimast.Node{httpIsProgrammer_factory.NewIdentifier("input")}),
            shimast.NodeFlagsNone,
          ),
        }),
        httpIsProgrammer_factory.NewIfStatement(
          httpIsProgrammer_factory.NewPrefixUnaryExpression(
            shimast.KindExclamationToken,
            httpIsProgrammer_factory.NewCallExpression(
              httpIsProgrammer_factory.NewIdentifier("__is"),
              nil,
              nil,
              httpIsProgrammer_factory.NewNodeList([]*shimast.Node{httpIsProgrammer_factory.NewIdentifier("value")}),
              shimast.NodeFlagsNone,
            ),
          ),
          httpIsProgrammer_factory.NewReturnStatement(httpIsProgrammer_factory.NewKeywordExpression(shimast.KindNullKeyword)),
          nil,
        ),
        httpIsProgrammer_factory.NewReturnStatement(httpIsProgrammer_factory.NewIdentifier("value")),
      }), true),
    ),
  }
}

func httpProgrammer_context(context nativecontext.ITypiaContext, functional bool, numeric bool) nativecontext.ITypiaContext {
  next := context
  next.Options = context.Options
  next.Options.Functional = httpProgrammer_bool(functional)
  next.Options.Numeric = httpProgrammer_bool(numeric)
  return next
}

func httpProgrammer_bool(value bool) *bool {
  return &value
}

func httpProgrammer_merge_functions(groups ...map[string]*shimast.Node) map[string]*shimast.Node {
  output := map[string]*shimast.Node{}
  for _, group := range groups {
    for key, value := range group {
      output[key] = value
    }
  }
  return output
}
