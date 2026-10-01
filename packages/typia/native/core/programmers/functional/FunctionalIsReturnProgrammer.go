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

// FunctionalIsReturnProgrammer_IConfig selects the generator's variants: Equals
// is the strict form that also rejects properties the type does not declare.
//
// @evidence contracts/common.md#principled-implementation Each variant of the generator is one boolean or option on a record, so the transformers pick a form by naming the field and no second code path is copied.
// @evidence contracts/common.md#clear-and-simple-design A record of 1 field.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what each field selects.
type FunctionalIsReturnProgrammer_IConfig struct {
  Equals bool
}

// FunctionalIsReturnProgrammer_IProps is the input of Write for the is return
// generator: Context (the transform context), Modulo (the call's callee
// expression), Config (the configuration), Declaration (the function
// declaration) and Expression (the function expression).
//
// @evidence contracts/common.md#principled-implementation Write needs the transform context, the call's callee expression, the configuration, the function declaration and the function expression, and the record carries them in one argument.
// @evidence contracts/common.md#clear-and-simple-design A flat argument record of 5 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type FunctionalIsReturnProgrammer_IProps struct {
  Context     nativecontext.ITypiaContext
  Modulo      *shimast.Node
  Config      FunctionalIsReturnProgrammer_IConfig
  Declaration *shimast.Node
  Expression  *shimast.Node
}

// FunctionalIsReturnProgrammer_IDecomposeProps is the input of Decompose for the
// is return generator: Context (the transform context), Modulo (the call's
// callee expression), Config (the configuration), Expression (the function
// expression) and Declaration (the function declaration).
//
// @evidence contracts/common.md#principled-implementation Decompose needs the transform context, the call's callee expression, the configuration, the function expression and the function declaration, and the record carries them in one argument.
// @evidence contracts/common.md#clear-and-simple-design A flat argument record of 5 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type FunctionalIsReturnProgrammer_IDecomposeProps struct {
  Context     nativecontext.ITypiaContext
  Modulo      *shimast.Node
  Config      FunctionalIsReturnProgrammer_IConfig
  Expression  *shimast.Node
  Declaration *shimast.Node
}

// FunctionalIsReturnProgrammer_IDecomposeOutput is what the generator returns:
// Async is whether the wrapped function is asynchronous, Functions is the helper
// function statements and Statements is the body statements.
//
// @evidence contracts/common.md#principled-implementation The generator returns its pieces separately so the caller can place helper functions, statements and values where its own wrapper needs them.
// @evidence contracts/common.md#clear-and-simple-design A record of 3 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states each returned part.
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
    functionalIsProgrammer_function(
      props.Context,
      props.Declaration,
      result.Async,
      FunctionalIsFunctionProgrammer.GetReturnTypeNode(struct {
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

func (functionalIsReturnProgrammerNamespace) Decompose(props FunctionalIsReturnProgrammer_IDecomposeProps) FunctionalIsReturnProgrammer_IDecomposeOutput {
  f := nativecontext.EmitFactoryOf(functionalIsProgrammer_factory, props.Context.Emit)
  output := functionalinternal.FunctionalGeneralProgrammer.GetReturnType(functionalinternal.FunctionalGeneralProgrammer_IProps{
    Checker:     props.Context.Checker,
    Declaration: props.Declaration,
  })
  caller := functionalIsProgrammer_call(props.Context, props.Expression, props.Declaration)
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
