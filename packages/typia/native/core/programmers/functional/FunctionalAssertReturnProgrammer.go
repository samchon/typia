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

// FunctionAssertReturnProgrammer_IConfig selects the generator's variants:
// Equals is the strict form that also rejects properties the type does not
// declare.
//
// @evidence contracts/common.md#principled-implementation Each variant of the generator is one boolean or option on a record, so the transformers pick a form by naming the field and no second code path is copied.
// @evidence contracts/common.md#clear-and-simple-design A record of 1 field.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what each field selects.
type FunctionAssertReturnProgrammer_IConfig struct {
  Equals bool
}

// FunctionAssertReturnProgrammer_IProps is the input of Write for the assert
// return generator: Context (the transform context), Modulo (the call's callee
// expression), Config (the configuration), Expression (the function expression),
// Declaration (the function declaration) and Init (the optional initializer of
// the error factory parameter).
//
// @evidence contracts/common.md#principled-implementation Write needs the transform context, the call's callee expression, the configuration, the function expression, the function declaration and the optional initializer of the error factory parameter, and the record carries them in one argument.
// @evidence contracts/common.md#clear-and-simple-design A flat argument record of 6 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type FunctionAssertReturnProgrammer_IProps struct {
  Context     nativecontext.ITypiaContext
  Modulo      *shimast.Node
  Config      FunctionAssertReturnProgrammer_IConfig
  Expression  *shimast.Node
  Declaration *shimast.Node
  Init        *shimast.Node
}

// FunctionAssertReturnProgrammer_IDecomposeProps is the input of Decompose for
// the assert return generator: Context (the transform context), Modulo (the
// call's callee expression), Config (the configuration), Expression (the
// function expression), Declaration (the function declaration) and Wrapper (the
// name of the error factory wrapper variable).
//
// @evidence contracts/common.md#principled-implementation Decompose needs the transform context, the call's callee expression, the configuration, the function expression, the function declaration and the name of the error factory wrapper variable, and the record carries them in one argument.
// @evidence contracts/common.md#clear-and-simple-design A flat argument record of 6 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type FunctionAssertReturnProgrammer_IDecomposeProps struct {
  Context     nativecontext.ITypiaContext
  Modulo      *shimast.Node
  Config      FunctionAssertReturnProgrammer_IConfig
  Expression  *shimast.Node
  Declaration *shimast.Node
  Wrapper     string
}

// FunctionAssertReturnProgrammer_IDecomposeOutput is what the generator returns:
// Async is whether the wrapped function is asynchronous, Functions is the helper
// function statements and Value is the generated value expression.
//
// @evidence contracts/common.md#principled-implementation The generator returns its pieces separately so the caller can place helper functions, statements and values where its own wrapper needs them.
// @evidence contracts/common.md#clear-and-simple-design A record of 3 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states each returned part.
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
