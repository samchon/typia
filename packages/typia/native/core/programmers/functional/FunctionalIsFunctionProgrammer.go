package functional

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
)

type functionalIsFunctionProgrammerNamespace struct{}

var FunctionalIsFunctionProgrammer = functionalIsFunctionProgrammerNamespace{}

// FunctionalIsFunctionProgrammer_IConfig selects the generator's variants:
// Equals is the strict form that also rejects properties the type does not
// declare.
//
// @evidence contracts/common.md#principled-implementation Each variant of the generator is one boolean or option on a record, so the transformers pick a form by naming the field and no second code path is copied.
// @evidence contracts/common.md#clear-and-simple-design A record of 1 field.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what each field selects.
type FunctionalIsFunctionProgrammer_IConfig struct {
  // Equals rejects surplus properties in addition to checking declared values.
  Equals bool
}

// FunctionalIsFunctionProgrammer_IProps is the input of Write for the is
// function generator: Context (the transform context), Modulo (the call's
// callee expression), Config (the configuration), Declaration (the function
// declaration) and Expression (the function expression).
//
// @evidence contracts/common.md#principled-implementation Write needs the transform context, the call's callee expression, the configuration, the function declaration and the function expression, and the record carries them in one argument.
// @evidence contracts/common.md#clear-and-simple-design A flat argument record of 5 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type FunctionalIsFunctionProgrammer_IProps struct {
  // Context borrows the checker, emitter and importer for this transform.
  Context nativecontext.ITypiaContext

  // Modulo identifies the typia call for helper naming and diagnostics.
  Modulo *shimast.Node

  // Config selects ordinary validation or rejection of surplus properties.
  Config FunctionalIsFunctionProgrammer_IConfig

  // Declaration supplies parameter bindings and the checker return signature.
  Declaration *shimast.Node

  // Expression is the original callable, invoked with the wrapper receiver.
  Expression *shimast.Node
}

func (functionalIsFunctionProgrammerNamespace) Write(props FunctionalIsFunctionProgrammer_IProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(functionalIsProgrammer_factory, props.Context.Emit)
  p := FunctionalIsParametersProgrammer.Decompose(FunctionalIsParametersProgrammer_IDecomposeProps{
    Context:     props.Context,
    Config:      FunctionalIsParametersProgrammer_IConfig{Equals: props.Config.Equals},
    Modulo:      props.Modulo,
    Declaration: props.Declaration,
  })
  r := FunctionalIsReturnProgrammer.Decompose(FunctionalIsReturnProgrammer_IDecomposeProps{
    Context:     props.Context,
    Modulo:      props.Modulo,
    Config:      FunctionalIsReturnProgrammer_IConfig{Equals: props.Config.Equals},
    Expression:  props.Expression,
    Declaration: props.Declaration,
  })
  statements := append([]*shimast.Node{}, p.Functions...)
  statements = append(statements, r.Functions...)
  body := append([]*shimast.Node{}, p.Statements...)
  body = append(body, r.Statements...)
  statements = append(statements, f.NewReturnStatement(
    functionalIsProgrammer_function(
      props.Context,
      props.Declaration,
      r.Async,
      FunctionalIsFunctionProgrammer.GetReturnTypeNode(struct {
        Context     nativecontext.ITypiaContext
        Declaration *shimast.Node
        Async       bool
      }{
        Context:     props.Context,
        Declaration: props.Declaration,
        Async:       r.Async,
      }),
      f.NewBlock(f.NewNodeList(body), true),
    ),
  ))
  return nativefactories.ExpressionFactory.SelfCall(
    props.Context.Emit,
    f.NewBlock(f.NewNodeList(statements), true),
  )
}

func (functionalIsFunctionProgrammerNamespace) GetReturnTypeNode(props struct {
  Context     nativecontext.ITypiaContext
  Declaration *shimast.Node
  Async       bool
}) *shimast.Node {
  if props.Declaration == nil || props.Declaration.FunctionLikeData() == nil {
    return nil
  }
  typ := props.Declaration.FunctionLikeData().Type
  if typ == nil {
    return nil
  }
  f := nativecontext.EmitFactoryOf(functionalIsProgrammer_factory, props.Context.Emit)
  nullType := f.NewTypeReferenceNode(f.NewIdentifier("null"), nil)
  if props.Async {
    var inner *shimast.Node
    if typ.Kind == shimast.KindTypeReference {
      ref := typ.AsTypeReferenceNode()
      if ref.TypeArguments != nil && len(ref.TypeArguments.Nodes) != 0 {
        inner = ref.TypeArguments.Nodes[0]
      }
    }
    if inner == nil {
      return nil
    }
    return f.NewTypeReferenceNode(
      f.NewIdentifier("Promise"),
      f.NewNodeList([]*shimast.Node{
        f.NewUnionTypeNode(f.NewNodeList([]*shimast.Node{inner, nullType})),
      }),
    )
  }
  return f.NewUnionTypeNode(f.NewNodeList([]*shimast.Node{
    typ,
    nullType,
  }))
}
