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
  f := nativecontext.EmitFactoryOf(functionalAssertProgrammer_factory, props.Context.Emit)
  statements := []*shimast.Node{wrapper.Variable}
  statements = append(statements, result.Functions...)
  statements = append(statements, f.NewReturnStatement(
    functionalIsProgrammer_function(
      props.Context,
      props.Declaration,
      result.Async,
      functionalAssertProgrammer_returnType(props.Declaration),
      f.NewBlock(f.NewNodeList([]*shimast.Node{f.NewReturnStatement(result.Value)}), true),
    ),
  ))
  return nativefactories.ExpressionFactory.SelfCall(
    props.Context.Emit,
    f.NewBlock(f.NewNodeList(statements), true),
  )
}

func (functionAssertReturnProgrammerNamespace) Decompose(props FunctionAssertReturnProgrammer_IDecomposeProps) FunctionAssertReturnProgrammer_IDecomposeOutput {
  f := nativecontext.EmitFactoryOf(functionalAssertProgrammer_factory, props.Context.Emit)
  output := functionalinternal.FunctionalGeneralProgrammer.GetReturnType(functionalinternal.FunctionalGeneralProgrammer_IProps{
    Checker:     props.Context.Checker,
    Declaration: props.Declaration,
  })
  caller := functionalIsProgrammer_call(props.Context, props.Expression, props.Declaration)
  value := caller
  if output.Async {
    value = f.NewAwaitExpression(caller)
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
            Context  nativecontext.ITypiaContext
            Wrapper  string
            Replacer string
          }{
            Context:  props.Context,
            Wrapper:  props.Wrapper,
            Replacer: "$input.return",
          }),
        }),
      }, props.Context.Emit),
    },
    Value: f.NewCallExpression(
      f.NewIdentifier("__assert_return"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{value}),
      shimast.NodeFlagsNone,
    ),
  }
}
