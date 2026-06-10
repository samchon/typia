package functional

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
)

type functionalAssertFunctionProgrammerNamespace struct{}

var FunctionalAssertFunctionProgrammer = functionalAssertFunctionProgrammerNamespace{}

type FunctionalAssertFunctionProgrammer_IConfig struct {
  Equals bool
}

type FunctionalAssertFunctionProgrammer_IProps struct {
  Context     nativecontext.ITypiaContext
  Modulo      *shimast.Node
  Config      FunctionalAssertFunctionProgrammer_IConfig
  Declaration *shimast.Node
  Expression  *shimast.Node
  Init        *shimast.Node
}

type FunctionalAssertFunctionProgrammer_ErrorFactoryWrapperOutput struct {
  Name     string
  Variable *shimast.Node
}

var functionalAssertProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (functionalAssertFunctionProgrammerNamespace) Write(props FunctionalAssertFunctionProgrammer_IProps) *shimast.Node {
  wrapper := FunctionalAssertFunctionProgrammer.ErrorFactoryWrapper(struct {
    Context    nativecontext.ITypiaContext
    Parameters []*shimast.Node
    Init       *shimast.Node
  }{
    Context:    props.Context,
    Parameters: functionalIsProgrammer_parameterNodes(props.Declaration),
    Init:       props.Init,
  })
  p := FunctionalAssertParametersProgrammer.Decompose(FunctionalAssertParametersProgrammer_IDecomposeProps{
    Context:    props.Context,
    Modulo:     props.Modulo,
    Config:     FunctionalAssertParametersProgrammer_IConfig{Equals: props.Config.Equals},
    Parameters: functionalIsProgrammer_parameterNodes(props.Declaration),
    Wrapper:    wrapper.Name,
  })
  r := FunctionAssertReturnProgrammer.Decompose(FunctionAssertReturnProgrammer_IDecomposeProps{
    Context:     props.Context,
    Modulo:      props.Modulo,
    Config:      FunctionAssertReturnProgrammer_IConfig{Equals: props.Config.Equals},
    Expression:  props.Expression,
    Declaration: props.Declaration,
    Wrapper:     wrapper.Name,
  })
  f := nativecontext.EmitFactoryOf(functionalAssertProgrammer_factory, props.Context.Emit)
  statements := []*shimast.Node{wrapper.Variable}
  statements = append(statements, p.Functions...)
  statements = append(statements, r.Functions...)
  body := []*shimast.Node{}
  for _, exp := range p.Expressions {
    body = append(body, f.NewExpressionStatement(exp))
  }
  body = append(body, f.NewReturnStatement(r.Value))
  statements = append(statements, f.NewReturnStatement(
    f.NewArrowFunction(
      functionalIsProgrammer_asyncModifiers(r.Async, props.Context.Emit),
      nil,
      functionalIsProgrammer_parameters(props.Declaration, props.Context.Emit),
      functionalAssertProgrammer_returnType(props.Declaration),
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewBlock(f.NewNodeList(body), true),
    ),
  ))
  return nativefactories.ExpressionFactory.SelfCall(
    props.Context.Emit,
    f.NewBlock(f.NewNodeList(statements), true),
  )
}

func (functionalAssertFunctionProgrammerNamespace) ErrorFactoryWrapper(props struct {
  Context    nativecontext.ITypiaContext
  Parameters []*shimast.Node
  Init       *shimast.Node
}) FunctionalAssertFunctionProgrammer_ErrorFactoryWrapperOutput {
  names := make([]string, 0, len(props.Parameters))
  for _, p := range props.Parameters {
    names = append(names, functionalIsProgrammer_parameterName(p))
  }
  name := functionalIsProgrammer_escapeDuplicate(names, "errorFactoryWrapper")
  init := props.Init
  if init == nil {
    init = functionalAssertProgrammer_internal(props.Context, "functionalTypeGuardErrorFactory")
  }
  return FunctionalAssertFunctionProgrammer_ErrorFactoryWrapperOutput{
    Name: name,
    Variable: nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name:  name,
      Type:  nativeprogrammers.Guardian.Type(props.Context),
      Value: init,
    }, props.Context.Emit),
  }
}

func (functionalAssertFunctionProgrammerNamespace) HookPath(props struct {
  Context  nativecontext.ITypiaContext
  Wrapper  string
  Replacer string
}) *shimast.Node {
  f := nativecontext.EmitFactoryOf(functionalAssertProgrammer_factory, props.Context.Emit)
  path := nativefactories.IdentifierFactory.Access(props.Context.Emit, f.NewIdentifier("p"), "path")
  return f.NewArrowFunction(
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      nativefactories.IdentifierFactory.Parameter("p", nil, nil, props.Context.Emit),
    }),
    nil,
    nil,
    f.NewToken(shimast.KindEqualsGreaterThanToken),
    f.NewCallExpression(
      f.NewIdentifier(props.Wrapper),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        f.NewObjectLiteralExpression(f.NewNodeList([]*shimast.Node{
          f.NewSpreadAssignment(f.NewIdentifier("p")),
          f.NewPropertyAssignment(
            nil,
            nativefactories.IdentifierFactory.Identifier("path", props.Context.Emit),
            nil,
            nil,
            nativefactories.ExpressionFactory.Conditional(
              path,
              f.NewCallExpression(
                nativefactories.IdentifierFactory.Access(props.Context.Emit, path, "replace"),
                nil,
                nil,
                f.NewNodeList([]*shimast.Node{
                  f.NewStringLiteral("$input", shimast.TokenFlagsNone),
                  f.NewStringLiteral(props.Replacer, shimast.TokenFlagsNone),
                }),
                shimast.NodeFlagsNone,
              ),
              f.NewIdentifier("undefined"),
              props.Context.Emit,
            ),
          ),
        }), false),
      }),
      shimast.NodeFlagsNone,
    ),
  )
}

func functionalAssertProgrammer_returnType(declaration *shimast.Node) *shimast.Node {
  if declaration == nil || declaration.FunctionLikeData() == nil {
    return nil
  }
  return declaration.FunctionLikeData().Type
}

func functionalAssertProgrammer_internal(context nativecontext.ITypiaContext, name string) *shimast.Node {
  if importer := context.Importer; importer != nil {
    return importer.Internal(name)
  }
  return nativecontext.EmitFactoryOf(functionalAssertProgrammer_factory, context.Emit).NewIdentifier(name)
}
