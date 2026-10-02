package functional

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  functionalinternal "github.com/samchon/typia/packages/typia/native/core/programmers/functional/internal"
)

type functionalIsParametersProgrammerNamespace struct{}

var FunctionalIsParametersProgrammer = functionalIsParametersProgrammerNamespace{}

// FunctionalIsParametersProgrammer_IConfig selects the generator's variants:
// Equals is the strict form that also rejects properties the type does not
// declare.
//
// @evidence contracts/common.md#principled-implementation Each variant of the generator is one boolean or option on a record, so the transformers pick a form by naming the field and no second code path is copied.
// @evidence contracts/common.md#clear-and-simple-design A record of 1 field.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what each field selects.
type FunctionalIsParametersProgrammer_IConfig struct {
  // Equals rejects surplus properties in addition to checking declared values.
  Equals bool
}

// FunctionalIsParametersProgrammer_IProps is the input of Write for the is
// parameters generator: Context (the transform context), Modulo (the call's
// callee expression), Config (the configuration), Declaration (the function
// declaration) and Expression (the function expression).
//
// @evidence contracts/common.md#principled-implementation Write needs the transform context, the call's callee expression, the configuration, the function declaration and the function expression, and the record carries them in one argument.
// @evidence contracts/common.md#clear-and-simple-design A flat argument record of 5 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type FunctionalIsParametersProgrammer_IProps struct {
  // Context borrows the checker, emitter and importer for this transform.
  Context nativecontext.ITypiaContext

  // Modulo identifies the typia call for helper naming and diagnostics.
  Modulo *shimast.Node

  // Config selects ordinary validation or rejection of surplus properties.
  Config FunctionalIsParametersProgrammer_IConfig

  // Declaration supplies parameter bindings and the checker return signature.
  Declaration *shimast.Node

  // Expression is the original callable, invoked with the wrapper receiver.
  Expression *shimast.Node
}

// FunctionalIsParametersProgrammer_IDecomposeProps is the input of Decompose for
// the is parameters generator: Context (the transform context), Config (the
// configuration), Modulo (the call's callee expression) and Declaration (the
// function declaration).
//
// @evidence contracts/common.md#principled-implementation Decompose needs the transform context, the configuration, the call's callee expression and the function declaration, and the record carries them in one argument.
// @evidence contracts/common.md#clear-and-simple-design A flat argument record of 4 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type FunctionalIsParametersProgrammer_IDecomposeProps struct {
  // Context borrows the checker, emitter and importer for this transform.
  Context nativecontext.ITypiaContext

  // Config selects ordinary validation or rejection of surplus properties.
  Config FunctionalIsParametersProgrammer_IConfig

  // Modulo identifies the typia call for helper naming and diagnostics.
  Modulo *shimast.Node

  // Declaration supplies parameter bindings and the checker return signature.
  Declaration *shimast.Node
}

// FunctionalIsParametersProgrammer_IDecomposeOutput is what the generator
// returns: Functions is the helper function statements and Statements is the
// body statements.
//
// @evidence contracts/common.md#principled-implementation The generator returns its pieces separately so the caller can place helper functions, statements and values where its own wrapper needs them.
// @evidence contracts/common.md#clear-and-simple-design A record of 2 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states each returned part.
type FunctionalIsParametersProgrammer_IDecomposeOutput struct {
  // Functions contains helper declarations placed outside the returned wrapper.
  Functions []*shimast.Node

  // Statements contains ordered checks and returns inside the wrapper body.
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
    functionalIsProgrammer_function(
      props.Context,
      props.Declaration,
      output.Async,
      FunctionalIsFunctionProgrammer.GetReturnTypeNode(struct {
        Context     nativecontext.ITypiaContext
        Declaration *shimast.Node
        Async       bool
      }{
        Context:     props.Context,
        Declaration: props.Declaration,
        Async:       output.Async,
      }),
      f.NewBlock(f.NewNodeList(append(
        append([]*shimast.Node{}, result.Statements...),
        f.NewReturnStatement(functionalIsProgrammer_call(props.Context, props.Expression, props.Declaration)),
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
        Type:    functionalIsProgrammer_parameterCheckerType(props.Context, p),
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
    output := make([]*shimast.Node, 0, len(params.Nodes))
    for _, param := range params.Nodes {
      // TypeScript's explicit `this` parameter declares a receiver type but is
      // erased at runtime. It is neither validated nor forwarded as an argument.
      if functionalIsProgrammer_parameterName(param) != "this" {
        output = append(output, param)
      }
    }
    return output
  }
  return nil
}

func functionalIsProgrammer_function(
  context nativecontext.ITypiaContext,
  declaration *shimast.Node,
  async bool,
  returnType *shimast.Node,
  body *shimast.Node,
) *shimast.Node {
  f := nativecontext.EmitFactoryOf(functionalIsProgrammer_factory, context.Emit)
  return f.NewFunctionExpression(
    functionalIsProgrammer_asyncModifiers(async, context.Emit),
    nil,
    nil,
    nil,
    functionalIsProgrammer_wrapperParameters(declaration, context.Emit),
    returnType,
    nil,
    body,
  )
}

func functionalIsProgrammer_call(context nativecontext.ITypiaContext, expression *shimast.Node, declaration *shimast.Node) *shimast.Node {
  f := nativecontext.EmitFactoryOf(functionalIsProgrammer_factory, context.Emit)
  return f.NewCallExpression(
    nativefactories.IdentifierFactory.Access(context.Emit, f.NewIdentifier("Reflect"), "apply"),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      expression,
      f.NewKeywordExpression(shimast.KindThisKeyword),
      f.NewArrayLiteralExpression(f.NewNodeList(functionalIsProgrammer_parameterIdentifiers(declaration, context.Emit)), false),
    }),
    shimast.NodeFlagsNone,
  )
}

func functionalIsProgrammer_parameterIdentifiers(declaration *shimast.Node, emit ...*shimprinter.EmitContext) []*shimast.Node {
  f := nativecontext.EmitFactoryOf(functionalIsProgrammer_factory, emit...)
  parameters := functionalIsProgrammer_parameterNodes(declaration)
  output := make([]*shimast.Node, 0, len(parameters))
  for _, p := range parameters {
    identifier := f.NewIdentifier(functionalIsProgrammer_parameterName(p))
    // a rest parameter received its arguments as an array; spread them back
    if p.Kind == shimast.KindParameter && p.AsParameterDeclaration().DotDotDotToken != nil {
      identifier = f.NewSpreadElement(identifier)
    }
    output = append(output, identifier)
  }
  return output
}

// functionalIsProgrammer_wrapperParameters is the declaration's parameter list
// for the wrapper, a destructuring pattern renamed to the identifier
// functionalIsProgrammer_parameterName gives it: the wrapper validates and
// forwards the whole argument, and a pattern names no single value.
func functionalIsProgrammer_wrapperParameters(declaration *shimast.Node, emit ...*shimprinter.EmitContext) *shimast.ParameterList {
  f := nativecontext.EmitFactoryOf(functionalIsProgrammer_factory, emit...)
  list := functionalIsProgrammer_parameters(declaration, emit...)
  if list == nil {
    return list
  }
  if functionalIsProgrammer_hasBindingPattern(declaration) == false {
    return list
  }
  // A default may read a name an earlier pattern binds (`({ a }, b = a)`),
  // which the renamed wrapper no longer binds. So no default is copied: the
  // wrapper forwards what it received, the function applies its own
  // defaults, and a defaulted argument may be `undefined`; see
  // functionalIsProgrammer_parameterCheckerType.
  output := make([]*shimast.Node, 0, len(list.Nodes))
  for _, param := range list.Nodes {
    if param.Kind == shimast.KindParameter && param.Name() != nil && functionalIsProgrammer_parameterName(param) != "this" {
      data := param.AsParameterDeclaration()
      param = f.NewParameterDeclaration(
        nil,
        data.DotDotDotToken,
        f.NewIdentifier(functionalIsProgrammer_parameterName(param)),
        data.QuestionToken,
        data.Type,
        nil,
      )
    }
    output = append(output, param)
  }
  return f.NewNodeList(output)
}

// functionalIsProgrammer_hasBindingPattern reports whether any parameter of
// declaration destructures its argument.
func functionalIsProgrammer_hasBindingPattern(declaration *shimast.Node) bool {
  if list := functionalIsProgrammer_parameters(declaration); list != nil {
    for _, param := range list.Nodes {
      if param.Name() != nil && functionalIsProgrammer_isBindingPattern(param.Name()) {
        return true
      }
    }
  }
  return false
}

func functionalIsProgrammer_parameterName(param *shimast.Node) string {
  if param != nil && param.Name() != nil {
    // A destructuring pattern has no name; the wrapper gives it one by its
    // position (samchon/typia#2461), apart from every other parameter's name,
    // or the wrapper would declare it twice.
    if functionalIsProgrammer_isBindingPattern(param.Name()) {
      index := 0
      names := []string{}
      if parent := param.Parent; parent != nil && parent.FunctionLikeData() != nil && parent.FunctionLikeData().Parameters != nil {
        for i, sibling := range parent.FunctionLikeData().Parameters.Nodes {
          if sibling == param {
            index = i
          } else if sibling.Name() != nil && functionalIsProgrammer_isBindingPattern(sibling.Name()) == false {
            names = append(names, sibling.Name().Text())
          }
        }
      }
      return functionalIsProgrammer_escapeDuplicate(names, "__param"+functionalIsProgrammer_itoa(index))
    }
    text := param.Name().Text()
    if text != "" {
      return text
    }
    return nativefactories.IdentifierFactory.GetName(param.Name())
  }
  return "input"
}

// functionalIsProgrammer_parameterCheckerType is the type an argument must
// satisfy: the parameter symbol's type, which adds `undefined` to an optional
// parameter and reads a type inferred from a default. The written annotation
// alone made `y?: string` require a `string` (samchon/typia#2461).
func functionalIsProgrammer_parameterCheckerType(context nativecontext.ITypiaContext, param *shimast.Node) *shimchecker.Type {
  typ := functionalIsProgrammer_declaredType(context, param)
  // A wrapper beside a destructured parameter copies no default, so a
  // defaulted argument arrives as sent, `undefined` included.
  if param.Kind == shimast.KindParameter &&
    param.AsParameterDeclaration().Initializer != nil &&
    functionalIsProgrammer_hasBindingPattern(param.Parent) {
    return context.Checker.GetUnionType([]*shimchecker.Type{typ, context.Checker.GetUndefinedType()})
  }
  return typ
}

func functionalIsProgrammer_declaredType(context nativecontext.ITypiaContext, param *shimast.Node) *shimchecker.Type {
  if symbol := param.Symbol(); symbol != nil {
    if typ := context.Checker.GetTypeOfSymbol(symbol); typ != nil {
      return typ
    }
  }
  if param.Kind == shimast.KindParameter {
    if typ := param.AsParameterDeclaration().Type; typ != nil {
      return context.Checker.GetTypeFromTypeNode(typ)
    }
  }
  return context.Checker.GetAnyType()
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

// functionalIsProgrammer_isBindingPattern reports whether name destructures
// an object or an array. It compares the kind itself because the shim of the
// oldest supported ttsc exports no IsBindingPattern.
func functionalIsProgrammer_isBindingPattern(name *shimast.Node) bool {
  return name.Kind == shimast.KindObjectBindingPattern || name.Kind == shimast.KindArrayBindingPattern
}
