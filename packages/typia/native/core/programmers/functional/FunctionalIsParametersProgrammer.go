package functional

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  functionalinternal "github.com/samchon/typia/packages/typia/native/core/programmers/functional/internal"
)

type functionalIsParametersProgrammerNamespace struct{}

var FunctionalIsParametersProgrammer = functionalIsParametersProgrammerNamespace{}

type FunctionalIsParametersProgrammer_IConfig struct {
  Equals bool
}

type FunctionalIsParametersProgrammer_IProps struct {
  Context     nativecontext.ITypiaContext
  Modulo      *shimast.Node
  Config      FunctionalIsParametersProgrammer_IConfig
  Declaration *shimast.Node
  Expression  *shimast.Node
  Init        *shimast.Node
}

type FunctionalIsParametersProgrammer_IDecomposeProps struct {
  Context     nativecontext.ITypiaContext
  Config      FunctionalIsParametersProgrammer_IConfig
  Modulo      *shimast.Node
  Declaration *shimast.Node
}

type FunctionalIsParametersProgrammer_IDecomposeOutput struct {
  Functions  []*shimast.Node
  Statements []*shimast.Node
}

var functionalIsProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (functionalIsParametersProgrammerNamespace) Write(props FunctionalIsParametersProgrammer_IProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(functionalIsProgrammer_factory, props.Context.Emit)
  output := functionalinternal.FunctionalGeneralProgrammer.GetReturnType(functionalinternal.FunctionalGeneralProgrammer_IProps{
    Checker:     props.Context.Checker,
    Declaration: props.Declaration,
  })
  result := FunctionalIsParametersProgrammer.Decompose(FunctionalIsParametersProgrammer_IDecomposeProps{
    Context:     props.Context,
    Config:      props.Config,
    Modulo:      props.Modulo,
    Declaration: props.Declaration,
  })
  statements := append([]*shimast.Node{}, result.Functions...)
  statements = append(statements, f.NewReturnStatement(
    f.NewArrowFunction(
      functionalIsProgrammer_asyncModifiers(output.Async, props.Context.Emit),
      nil,
      functionalIsProgrammer_parameters(props.Declaration, props.Context.Emit),
      FunctionalIsFunctionProgrammer.GetReturnTypeNode(struct {
        Declaration *shimast.Node
        Async       bool
      }{
        Declaration: props.Declaration,
        Async:       output.Async,
      }),
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewBlock(f.NewNodeList(append(
        append([]*shimast.Node{}, result.Statements...),
        f.NewReturnStatement(f.NewCallExpression(
          props.Expression,
          nil,
          nil,
          f.NewNodeList(functionalIsProgrammer_parameterIdentifiers(props.Declaration, props.Context.Emit)),
          shimast.NodeFlagsNone,
        )),
      )), true),
    ),
  ))
  return nativefactories.ExpressionFactory.SelfCall(
    props.Context.Emit,
    f.NewBlock(f.NewNodeList(statements), true),
  )
}

func (functionalIsParametersProgrammerNamespace) Decompose(props FunctionalIsParametersProgrammer_IDecomposeProps) FunctionalIsParametersProgrammer_IDecomposeOutput {
  f := nativecontext.EmitFactoryOf(functionalIsProgrammer_factory, props.Context.Emit)
  parameters := functionalIsProgrammer_parameterNodes(props.Declaration)
  functions := make([]*shimast.Node, 0, len(parameters))
  statements := []*shimast.Node{}
  for i, p := range parameters {
    functions = append(functions, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: "__is_param_" + functionalIsProgrammer_itoa(i),
      Value: nativeprogrammers.IsProgrammer.Write(nativeprogrammers.IsProgrammer_IProps{
        Context: props.Context,
        Modulo:  props.Modulo,
        Config:  nativeprogrammers.IsProgrammer_IConfig{Equals: props.Config.Equals},
        Type: props.Context.Checker.GetTypeFromTypeNode(
          functionalIsProgrammer_parameterType(p, nativefactories.TypeFactory.Keyword("any", props.Context.Emit)),
        ),
      }),
    }, props.Context.Emit))
    statements = append(statements, f.NewIfStatement(
      f.NewBinaryExpression(
        nil,
        f.NewKeywordExpression(shimast.KindFalseKeyword),
        nil,
        f.NewToken(shimast.KindEqualsEqualsEqualsToken),
        f.NewCallExpression(
          f.NewIdentifier("__is_param_"+functionalIsProgrammer_itoa(i)),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{
            f.NewIdentifier(functionalIsProgrammer_parameterName(p)),
          }),
          shimast.NodeFlagsNone,
        ),
      ),
      f.NewReturnStatement(f.NewKeywordExpression(shimast.KindNullKeyword)),
      nil,
    ))
  }
  return FunctionalIsParametersProgrammer_IDecomposeOutput{
    Functions:  functions,
    Statements: statements,
  }
}

func functionalIsProgrammer_parameters(declaration *shimast.Node, emit ...*shimprinter.EmitContext) *shimast.ParameterList {
  if declaration == nil || declaration.FunctionLikeData() == nil || declaration.FunctionLikeData().Parameters == nil {
    return nativecontext.EmitFactoryOf(functionalIsProgrammer_factory, emit...).NewNodeList(nil)
  }
  return declaration.FunctionLikeData().Parameters
}

func functionalIsProgrammer_parameterNodes(declaration *shimast.Node) []*shimast.Node {
  if params := functionalIsProgrammer_parameters(declaration); params != nil {
    return params.Nodes
  }
  return nil
}

func functionalIsProgrammer_parameterIdentifiers(declaration *shimast.Node, emit ...*shimprinter.EmitContext) []*shimast.Node {
  f := nativecontext.EmitFactoryOf(functionalIsProgrammer_factory, emit...)
  parameters := functionalIsProgrammer_parameterNodes(declaration)
  output := make([]*shimast.Node, 0, len(parameters))
  for _, p := range parameters {
    output = append(output, f.NewIdentifier(functionalIsProgrammer_parameterName(p)))
  }
  return output
}

func functionalIsProgrammer_parameterName(param *shimast.Node) string {
  if param != nil && param.Name() != nil {
    text := param.Name().Text()
    if text != "" {
      return text
    }
    return nativefactories.IdentifierFactory.GetName(param.Name())
  }
  return "input"
}

func functionalIsProgrammer_parameterType(param *shimast.Node, fallback *shimast.Node) *shimast.Node {
  if param != nil && param.Kind == shimast.KindParameter {
    if typ := param.AsParameterDeclaration().Type; typ != nil {
      return typ
    }
  }
  return fallback
}

func functionalIsProgrammer_asyncModifiers(async bool, emit ...*shimprinter.EmitContext) *shimast.ModifierList {
  if async == false {
    return nil
  }
  f := nativecontext.EmitFactoryOf(functionalIsProgrammer_factory, emit...)
  return f.NewModifierList([]*shimast.Node{
    f.NewModifier(shimast.KindAsyncKeyword),
  })
}

func functionalIsProgrammer_escapeDuplicate(keep []string, input string) string {
  used := map[string]bool{}
  for _, name := range keep {
    used[name] = true
  }
  if used[input] == false {
    return input
  }
  for i := 0; ; i++ {
    next := input + functionalIsProgrammer_itoa(i)
    if used[next] == false {
      return next
    }
  }
}

func functionalIsProgrammer_parameterNames(declaration *shimast.Node) []string {
  parameters := functionalIsProgrammer_parameterNodes(declaration)
  output := make([]string, 0, len(parameters))
  for _, p := range parameters {
    output = append(output, functionalIsProgrammer_parameterName(p))
  }
  return output
}

func functionalIsProgrammer_itoa(value int) string {
  if value == 0 {
    return "0"
  }
  digits := []byte{}
  for value > 0 {
    digits = append([]byte{byte('0' + value%10)}, digits...)
    value /= 10
  }
  return string(digits)
}
