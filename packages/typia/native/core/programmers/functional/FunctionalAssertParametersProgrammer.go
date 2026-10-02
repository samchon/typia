package functional

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  functionalinternal "github.com/samchon/typia/packages/typia/native/core/programmers/functional/internal"
)

type functionalAssertParametersProgrammerNamespace struct{}

var FunctionalAssertParametersProgrammer = functionalAssertParametersProgrammerNamespace{}

// FunctionalAssertParametersProgrammer_IConfig selects the generator's variants:
// Equals is the strict form that also rejects properties the type does not
// declare.
//
// @evidence contracts/common.md#principled-implementation Each variant of the generator is one boolean or option on a record, so the transformers pick a form by naming the field and no second code path is copied.
// @evidence contracts/common.md#clear-and-simple-design A record of 1 field.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what each field selects.
type FunctionalAssertParametersProgrammer_IConfig struct {
  // Equals rejects surplus properties in addition to checking declared values.
  Equals bool
}

// FunctionalAssertParametersProgrammer_IProps is the input of Write for the
// assert parameters generator: Context (the transform context), Modulo (the
// call's callee expression), Config (the configuration), Declaration (the
// function declaration), Expression (the function expression) and Init (the
// optional initializer of the error factory parameter).
//
// @evidence contracts/common.md#principled-implementation Write needs the transform context, the call's callee expression, the configuration, the function declaration, the function expression and the optional initializer of the error factory parameter, and the record carries them in one argument.
// @evidence contracts/common.md#clear-and-simple-design A flat argument record of 6 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type FunctionalAssertParametersProgrammer_IProps struct {
  // Context borrows the checker, emitter and importer for this transform.
  Context nativecontext.ITypiaContext

  // Modulo identifies the typia call for helper naming and diagnostics.
  Modulo *shimast.Node

  // Config selects ordinary validation or rejection of surplus properties.
  Config FunctionalAssertParametersProgrammer_IConfig

  // Declaration supplies parameter bindings and the checker return signature.
  Declaration *shimast.Node

  // Expression is the original callable, invoked with the wrapper receiver.
  Expression *shimast.Node

  // Init initializes the error factory; nil selects the functional default.
  Init *shimast.Node
}

// FunctionalAssertParametersProgrammer_IDecomposeProps is the input of Decompose
// for the assert parameters generator: Context (the transform context), Config
// (the configuration), Modulo (the call's callee expression), Parameters (the
// parameter nodes) and Wrapper (the name of the error factory wrapper variable).
//
// @evidence contracts/common.md#principled-implementation Decompose needs the transform context, the configuration, the call's callee expression, the parameter nodes and the name of the error factory wrapper variable, and the record carries them in one argument.
// @evidence contracts/common.md#clear-and-simple-design A flat argument record of 5 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type FunctionalAssertParametersProgrammer_IDecomposeProps struct {
  // Context borrows the checker, emitter and importer for this transform.
  Context nativecontext.ITypiaContext

  // Config selects ordinary validation or rejection of surplus properties.
  Config FunctionalAssertParametersProgrammer_IConfig

  // Modulo identifies the typia call for helper naming and diagnostics.
  Modulo *shimast.Node

  // Parameters contains runtime arguments in declaration order, excluding erased this.
  Parameters []*shimast.Node

  // Wrapper names the shared error factory binding used to rewrite failure paths.
  Wrapper string
}

// FunctionalAssertParametersProgrammer_IDecomposeOutput is what the generator
// returns: Functions is the helper function statements and Expressions is the
// call expressions.
//
// @evidence contracts/common.md#principled-implementation The generator returns its pieces separately so the caller can place helper functions, statements and values where its own wrapper needs them.
// @evidence contracts/common.md#clear-and-simple-design A record of 2 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states each returned part.
type FunctionalAssertParametersProgrammer_IDecomposeOutput struct {
  // Functions contains helper declarations placed outside the returned wrapper.
  Functions []*shimast.Node

  // Expressions contains argument assertions executed before the original call.
  Expressions []*shimast.Node
}

func (functionalAssertParametersProgrammerNamespace) Write(props FunctionalAssertParametersProgrammer_IProps) *shimast.Node {
  wrapper := FunctionalAssertFunctionProgrammer.ErrorFactoryWrapper(struct {
    Context    nativecontext.ITypiaContext
    Parameters []*shimast.Node
    Init       *shimast.Node
  }{
    Context:    props.Context,
    Parameters: functionalIsProgrammer_parameterNodes(props.Declaration),
    Init:       props.Init,
  })
  f := nativecontext.EmitFactoryOf(functionalAssertProgrammer_factory, props.Context.Emit)
  output := functionalinternal.FunctionalGeneralProgrammer.GetReturnType(functionalinternal.FunctionalGeneralProgrammer_IProps{
    Checker:     props.Context.Checker,
    Declaration: props.Declaration,
  })
  result := FunctionalAssertParametersProgrammer.Decompose(FunctionalAssertParametersProgrammer_IDecomposeProps{
    Context:    props.Context,
    Modulo:     props.Modulo,
    Config:     props.Config,
    Parameters: functionalIsProgrammer_parameterNodes(props.Declaration),
    Wrapper:    wrapper.Name,
  })
  statements := []*shimast.Node{wrapper.Variable}
  statements = append(statements, result.Functions...)
  body := []*shimast.Node{}
  for _, exp := range result.Expressions {
    body = append(body, f.NewExpressionStatement(exp))
  }
  body = append(body, f.NewReturnStatement(functionalIsProgrammer_call(props.Context, props.Expression, props.Declaration)))
  statements = append(statements, f.NewReturnStatement(
    functionalIsProgrammer_function(
      props.Context,
      props.Declaration,
      output.Async,
      functionalAssertProgrammer_returnType(props.Declaration),
      f.NewBlock(f.NewNodeList(body), true),
    ),
  ))
  return nativefactories.ExpressionFactory.SelfCall(
    props.Context.Emit,
    f.NewBlock(f.NewNodeList(statements), true),
  )
}

func (functionalAssertParametersProgrammerNamespace) Decompose(props FunctionalAssertParametersProgrammer_IDecomposeProps) FunctionalAssertParametersProgrammer_IDecomposeOutput {
  f := nativecontext.EmitFactoryOf(functionalAssertProgrammer_factory, props.Context.Emit)
  functions := make([]*shimast.Node, 0, len(props.Parameters))
  expressions := make([]*shimast.Node, 0, len(props.Parameters))
  for i, p := range props.Parameters {
    functions = append(functions, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: "__assert_param_" + functionalIsProgrammer_itoa(i),
      Value: nativeprogrammers.AssertProgrammer.Write(nativeprogrammers.AssertProgrammer_IProps{
        Context: props.Context,
        Modulo:  props.Modulo,
        Config: nativeprogrammers.AssertProgrammer_IConfig{
          Equals: props.Config.Equals,
          Guard:  false,
        },
        Type: functionalIsProgrammer_parameterCheckerType(props.Context, p),
        Init: FunctionalAssertFunctionProgrammer.HookPath(struct {
          Context  nativecontext.ITypiaContext
          Wrapper  string
          Replacer string
        }{
          Context:  props.Context,
          Wrapper:  props.Wrapper,
          Replacer: "$input.parameters[" + functionalIsProgrammer_itoa(i) + "]",
        }),
      }),
    }, props.Context.Emit))
    expressions = append(expressions, f.NewCallExpression(
      f.NewIdentifier("__assert_param_"+functionalIsProgrammer_itoa(i)),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        f.NewIdentifier(functionalIsProgrammer_parameterName(p)),
      }),
      shimast.NodeFlagsNone,
    ))
  }
  return FunctionalAssertParametersProgrammer_IDecomposeOutput{
    Functions:   functions,
    Expressions: expressions,
  }
}
