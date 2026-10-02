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

// FunctionalValidateReturnProgrammer_IConfig selects the generator's variants:
// Equals is the strict form that also rejects properties the type does not
// declare.
//
// @evidence contracts/common.md#principled-implementation Each variant of the generator is one boolean or option on a record, so the transformers pick a form by naming the field and no second code path is copied.
// @evidence contracts/common.md#clear-and-simple-design A record of 1 field.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what each field selects.
type FunctionalValidateReturnProgrammer_IConfig struct {
  // Equals rejects surplus properties in addition to checking declared values.
  Equals bool
}

// FunctionalValidateReturnProgrammer_IProps is the input of Write for the
// validate return generator: Context (the transform context), Modulo (the
// call's callee expression), Config (the configuration), Declaration (the
// function declaration) and Expression (the function expression).
//
// @evidence contracts/common.md#principled-implementation Write needs the transform context, the call's callee expression, the configuration, the function declaration and the function expression, and the record carries them in one argument.
// @evidence contracts/common.md#clear-and-simple-design A flat argument record of 5 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type FunctionalValidateReturnProgrammer_IProps struct {
  // Context borrows the checker, emitter and importer for this transform.
  Context nativecontext.ITypiaContext

  // Modulo identifies the typia call for helper naming and diagnostics.
  Modulo *shimast.Node

  // Config selects ordinary validation or rejection of surplus properties.
  Config FunctionalValidateReturnProgrammer_IConfig

  // Declaration supplies parameter bindings and the checker return signature.
  Declaration *shimast.Node

  // Expression is the original callable, invoked with the wrapper receiver.
  Expression *shimast.Node
}

// FunctionalValidateReturnProgrammer_IDecomposeProps is the input of Decompose
// for the validate return generator: Context (the transform context), Modulo
// (the call's callee expression), Config (the configuration), Expression (the
// function expression) and Declaration (the function declaration).
//
// @evidence contracts/common.md#principled-implementation Decompose needs the transform context, the call's callee expression, the configuration, the function expression and the function declaration, and the record carries them in one argument.
// @evidence contracts/common.md#clear-and-simple-design A flat argument record of 5 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type FunctionalValidateReturnProgrammer_IDecomposeProps struct {
  // Context borrows the checker, emitter and importer for this transform.
  Context nativecontext.ITypiaContext

  // Modulo identifies the typia call for helper naming and diagnostics.
  Modulo *shimast.Node

  // Config selects ordinary validation or rejection of surplus properties.
  Config FunctionalValidateReturnProgrammer_IConfig

  // Expression is the original callable, invoked with the wrapper receiver.
  Expression *shimast.Node

  // Declaration supplies parameter bindings and the checker return signature.
  Declaration *shimast.Node
}

// FunctionalValidateReturnProgrammer_IDecomposeOutput is what the generator
// returns: Async is whether the wrapped function is asynchronous, Functions is
// the helper function statements and Statements is the body statements.
//
// @evidence contracts/common.md#principled-implementation The generator returns its pieces separately so the caller can place helper functions, statements and values where its own wrapper needs them.
// @evidence contracts/common.md#clear-and-simple-design A record of 3 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states each returned part.
type FunctionalValidateReturnProgrammer_IDecomposeOutput struct {
  // Async requests an async wrapper and awaiting of the original return value.
  Async bool

  // Functions contains helper declarations placed outside the returned wrapper.
  Functions []*shimast.Node

  // Statements contains ordered checks and returns inside the wrapper body.
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
