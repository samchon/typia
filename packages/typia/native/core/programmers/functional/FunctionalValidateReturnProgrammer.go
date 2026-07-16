package functional

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  functionalinternal "github.com/samchon/typia/packages/typia/native/core/programmers/functional/internal"
)

type functionalValidateReturnProgrammerNamespace struct{}

var FunctionalValidateReturnProgrammer = functionalValidateReturnProgrammerNamespace{}

type FunctionalValidateReturnProgrammer_IConfig struct {
  Equals bool
}

type FunctionalValidateReturnProgrammer_IProps struct {
  Context     nativecontext.ITypiaContext
  Modulo      *shimast.Node
  Config      FunctionalValidateReturnProgrammer_IConfig
  Declaration *shimast.Node
  Expression  *shimast.Node
  Init        *shimast.Node
}

type FunctionalValidateReturnProgrammer_IDecomposeProps struct {
  Context     nativecontext.ITypiaContext
  Modulo      *shimast.Node
  Config      FunctionalValidateReturnProgrammer_IConfig
  Expression  *shimast.Node
  Declaration *shimast.Node
}

type FunctionalValidateReturnProgrammer_IDecomposeOutput struct {
  Async      bool
  Functions  []*shimast.Node
  Statements []*shimast.Node
}

func (functionalValidateReturnProgrammerNamespace) Write(props FunctionalValidateReturnProgrammer_IProps) *shimast.Node {
  result := FunctionalValidateReturnProgrammer.Decompose(FunctionalValidateReturnProgrammer_IDecomposeProps{
    Context:     props.Context,
    Modulo:      props.Modulo,
    Config:      props.Config,
    Expression:  props.Expression,
    Declaration: props.Declaration,
  })
  f := nativecontext.EmitFactoryOf(functionalValidateProgrammer_factory, props.Context.Emit)
  statements := append([]*shimast.Node{}, result.Functions...)
  statements = append(statements, f.NewReturnStatement(
    functionalIsProgrammer_function(
      props.Context,
      props.Declaration,
      result.Async,
      FunctionalValidateFunctionProgrammer.GetReturnTypeNode(struct {
        Context     nativecontext.ITypiaContext
        Declaration *shimast.Node
        Async       bool
      }{
        Context:     props.Context,
        Declaration: props.Declaration,
        Async:       result.Async,
      }),
      f.NewBlock(f.NewNodeList(result.Statements), true),
    ),
  ))
  return nativefactories.ExpressionFactory.SelfCall(
    props.Context.Emit,
    f.NewBlock(f.NewNodeList(statements), true),
  )
}

func (functionalValidateReturnProgrammerNamespace) Decompose(props FunctionalValidateReturnProgrammer_IDecomposeProps) FunctionalValidateReturnProgrammer_IDecomposeOutput {
  f := nativecontext.EmitFactoryOf(functionalValidateProgrammer_factory, props.Context.Emit)
  output := functionalinternal.FunctionalGeneralProgrammer.GetReturnType(functionalinternal.FunctionalGeneralProgrammer_IProps{
    Checker:     props.Context.Checker,
    Declaration: props.Declaration,
  })
  caller := functionalIsProgrammer_call(props.Context, props.Expression, props.Declaration)
  value := caller
  if output.Async {
    value = f.NewAwaitExpression(caller)
  }
  name := functionalIsProgrammer_escapeDuplicate(functionalIsProgrammer_parameterNames(props.Declaration), "result")
  return FunctionalValidateReturnProgrammer_IDecomposeOutput{
    Async: output.Async,
    Functions: []*shimast.Node{
      nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
        Name: "__validate_return",
        Value: nativeprogrammers.ValidateProgrammer.Write(nativeprogrammers.ValidateProgrammer_IProps{
          Context: props.Context,
          Modulo:  props.Modulo,
          Config:  nativeprogrammers.ValidateProgrammer_IConfig{Equals: props.Config.Equals},
          Type:    output.Type,
        }),
      }, props.Context.Emit),
    },
    Statements: []*shimast.Node{
      nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
        Name: name,
        Value: f.NewCallExpression(
          f.NewIdentifier("__validate_return"),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{value}),
          shimast.NodeFlagsNone,
        ),
      }, props.Context.Emit),
      f.NewIfStatement(
        f.NewBinaryExpression(
          nil,
          f.NewKeywordExpression(shimast.KindFalseKeyword),
          nil,
          f.NewToken(shimast.KindEqualsEqualsEqualsToken),
          nativefactories.IdentifierFactory.Access(props.Context.Emit, f.NewIdentifier(name), "success"),
        ),
        f.NewExpressionStatement(f.NewBinaryExpression(
          nil,
          nativefactories.IdentifierFactory.Access(props.Context.Emit, f.NewIdentifier(name), "errors"),
          nil,
          f.NewToken(shimast.KindEqualsToken),
          FunctionalValidateFunctionProgrammer.HookErrors(struct {
            Context    nativecontext.ITypiaContext
            Expression *shimast.Node
            Replacer   *shimast.Node
          }{
            Context:    props.Context,
            Expression: nativefactories.IdentifierFactory.Access(props.Context.Emit, f.NewIdentifier(name), "errors"),
            Replacer:   f.NewStringLiteral("$input.return", shimast.TokenFlagsNone),
          }),
        )),
        nil,
      ),
      f.NewReturnStatement(f.NewIdentifier(name)),
    },
  }
}
