package functional

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  functionalinternal "github.com/samchon/typia/packages/typia/native/core/programmers/functional/internal"
)

type functionalIsReturnProgrammerNamespace struct{}

var FunctionalIsReturnProgrammer = functionalIsReturnProgrammerNamespace{}

type FunctionalIsReturnProgrammer_IConfig struct {
  Equals bool
}

type FunctionalIsReturnProgrammer_IProps struct {
  Context     nativecontext.ITypiaContext
  Modulo      *shimast.Node
  Config      FunctionalIsReturnProgrammer_IConfig
  Declaration *shimast.Node
  Expression  *shimast.Node
  Init        *shimast.Node
}

type FunctionalIsReturnProgrammer_IDecomposeProps struct {
  Context     nativecontext.ITypiaContext
  Modulo      *shimast.Node
  Config      FunctionalIsReturnProgrammer_IConfig
  Expression  *shimast.Node
  Declaration *shimast.Node
}

type FunctionalIsReturnProgrammer_IDecomposeOutput struct {
  Async      bool
  Functions  []*shimast.Node
  Statements []*shimast.Node
}

func (functionalIsReturnProgrammerNamespace) Write(props FunctionalIsReturnProgrammer_IProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(functionalIsProgrammer_factory, props.Context.Emit)
  result := FunctionalIsReturnProgrammer.Decompose(FunctionalIsReturnProgrammer_IDecomposeProps{
    Context:     props.Context,
    Modulo:      props.Modulo,
    Config:      props.Config,
    Expression:  props.Expression,
    Declaration: props.Declaration,
  })
  statements := append([]*shimast.Node{}, result.Functions...)
  statements = append(statements, f.NewReturnStatement(
    f.NewArrowFunction(
      functionalIsProgrammer_asyncModifiers(result.Async, props.Context.Emit),
      nil,
      functionalIsProgrammer_parameters(props.Declaration, props.Context.Emit),
      FunctionalIsFunctionProgrammer.GetReturnTypeNode(struct {
        Declaration *shimast.Node
        Async       bool
      }{
        Declaration: props.Declaration,
        Async:       result.Async,
      }),
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewBlock(f.NewNodeList(result.Statements), true),
    ),
  ))
  return nativefactories.ExpressionFactory.SelfCall(
    f.NewBlock(f.NewNodeList(statements), true),
  )
}

func (functionalIsReturnProgrammerNamespace) Decompose(props FunctionalIsReturnProgrammer_IDecomposeProps) FunctionalIsReturnProgrammer_IDecomposeOutput {
  f := nativecontext.EmitFactoryOf(functionalIsProgrammer_factory, props.Context.Emit)
  output := functionalinternal.FunctionalGeneralProgrammer.GetReturnType(functionalinternal.FunctionalGeneralProgrammer_IProps{
    Checker:     props.Context.Checker,
    Declaration: props.Declaration,
  })
  caller := f.NewCallExpression(
    props.Expression,
    nil,
    nil,
    f.NewNodeList(functionalIsProgrammer_parameterIdentifiers(props.Declaration, props.Context.Emit)),
    shimast.NodeFlagsNone,
  )
  name := functionalIsProgrammer_escapeDuplicate(functionalIsProgrammer_parameterNames(props.Declaration), "result")
  value := caller
  if output.Async {
    value = f.NewAwaitExpression(caller)
  }
  return FunctionalIsReturnProgrammer_IDecomposeOutput{
    Async: output.Async,
    Functions: []*shimast.Node{
      nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
        Name: "__is_return",
        Value: nativeprogrammers.IsProgrammer.Write(nativeprogrammers.IsProgrammer_IProps{
          Context: props.Context,
          Modulo:  props.Modulo,
          Config:  nativeprogrammers.IsProgrammer_IConfig{Equals: props.Config.Equals},
          Type:    output.Type,
        }),
      }, props.Context.Emit),
    },
    Statements: []*shimast.Node{
      nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
        Name:  name,
        Value: value,
      }, props.Context.Emit),
      f.NewReturnStatement(nativefactories.ExpressionFactory.Conditional(
        f.NewCallExpression(
          f.NewIdentifier("__is_return"),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{
            f.NewIdentifier(name),
          }),
          shimast.NodeFlagsNone,
        ),
        f.NewIdentifier(name),
        f.NewKeywordExpression(shimast.KindNullKeyword),
        props.Context.Emit,
      )),
    },
  }
}
