package functional

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  functionalinternal "github.com/samchon/typia/packages/typia/native/core/programmers/functional/internal"
)

type functionAssertReturnProgrammerNamespace struct{}

var FunctionAssertReturnProgrammer = functionAssertReturnProgrammerNamespace{}

type FunctionAssertReturnProgrammer_IConfig struct {
  Equals bool
}

type FunctionAssertReturnProgrammer_IProps struct {
  Context     nativecontext.ITypiaContext
  Modulo      *shimast.Node
  Config      FunctionAssertReturnProgrammer_IConfig
  Expression  *shimast.Node
  Declaration *shimast.Node
  Init        *shimast.Node
}

type FunctionAssertReturnProgrammer_IDecomposeProps struct {
  Context     nativecontext.ITypiaContext
  Modulo      *shimast.Node
  Config      FunctionAssertReturnProgrammer_IConfig
  Expression  *shimast.Node
  Declaration *shimast.Node
  Wrapper     string
}

type FunctionAssertReturnProgrammer_IDecomposeOutput struct {
  Async     bool
  Functions []*shimast.Node
  Value     *shimast.Node
}

func (functionAssertReturnProgrammerNamespace) Write(props FunctionAssertReturnProgrammer_IProps) *shimast.Node {
  wrapper := FunctionalAssertFunctionProgrammer.ErrorFactoryWrapper(struct {
    Context    nativecontext.ITypiaContext
    Parameters []*shimast.Node
    Init       *shimast.Node
  }{
    Context:    props.Context,
    Parameters: functionalIsProgrammer_parameterNodes(props.Declaration),
    Init:       props.Init,
  })
  result := FunctionAssertReturnProgrammer.Decompose(FunctionAssertReturnProgrammer_IDecomposeProps{
    Context:     props.Context,
    Modulo:      props.Modulo,
    Config:      props.Config,
    Expression:  props.Expression,
    Declaration: props.Declaration,
    Wrapper:     wrapper.Name,
  })
  statements := []*shimast.Node{wrapper.Variable}
  statements = append(statements, result.Functions...)
  statements = append(statements, functionalAssertProgrammer_factory.NewReturnStatement(
    functionalAssertProgrammer_factory.NewArrowFunction(
      functionalIsProgrammer_asyncModifiers(result.Async),
      nil,
      functionalIsProgrammer_parameters(props.Declaration),
      functionalAssertProgrammer_returnType(props.Declaration),
      nil,
      functionalAssertProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
      result.Value,
    ),
  ))
  return nativefactories.ExpressionFactory.SelfCall(
    functionalAssertProgrammer_factory.NewBlock(functionalAssertProgrammer_factory.NewNodeList(statements), true),
  )
}

func (functionAssertReturnProgrammerNamespace) Decompose(props FunctionAssertReturnProgrammer_IDecomposeProps) FunctionAssertReturnProgrammer_IDecomposeOutput {
  output := functionalinternal.FunctionalGeneralProgrammer.GetReturnType(functionalinternal.FunctionalGeneralProgrammer_IProps{
    Checker:     props.Context.Checker,
    Declaration: props.Declaration,
  })
  caller := functionalAssertProgrammer_factory.NewCallExpression(
    props.Expression,
    nil,
    nil,
    functionalAssertProgrammer_factory.NewNodeList(functionalIsProgrammer_parameterIdentifiers(props.Declaration)),
    shimast.NodeFlagsNone,
  )
  value := caller
  if output.Async {
    value = functionalAssertProgrammer_factory.NewAwaitExpression(caller)
  }
  return FunctionAssertReturnProgrammer_IDecomposeOutput{
    Async: output.Async,
    Functions: []*shimast.Node{
      nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
        Name: "__assert_return",
        Value: nativeprogrammers.AssertProgrammer.Write(nativeprogrammers.AssertProgrammer_IProps{
          Context: props.Context,
          Modulo:  props.Modulo,
          Config: nativeprogrammers.AssertProgrammer_IConfig{
            Equals: props.Config.Equals,
            Guard:  false,
          },
          Type: output.Type,
          Init: FunctionalAssertFunctionProgrammer.HookPath(struct {
            Wrapper  string
            Replacer string
          }{
            Wrapper:  props.Wrapper,
            Replacer: "$input.return",
          }),
        }),
      }),
    },
    Value: functionalAssertProgrammer_factory.NewCallExpression(
      functionalAssertProgrammer_factory.NewIdentifier("__assert_return"),
      nil,
      nil,
      functionalAssertProgrammer_factory.NewNodeList([]*shimast.Node{value}),
      shimast.NodeFlagsNone,
    ),
  }
}
