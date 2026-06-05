package functional

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
)

type functionalIsFunctionProgrammerNamespace struct{}

var FunctionalIsFunctionProgrammer = functionalIsFunctionProgrammerNamespace{}

type FunctionalIsFunctionProgrammer_IConfig struct {
  Equals bool
}

type FunctionalIsFunctionProgrammer_IProps struct {
  Context     nativecontext.ITypiaContext
  Modulo      *shimast.Node
  Config      FunctionalIsFunctionProgrammer_IConfig
  Declaration *shimast.Node
  Expression  *shimast.Node
  Init        *shimast.Node
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
    f.NewArrowFunction(
      functionalIsProgrammer_asyncModifiers(r.Async, props.Context.Emit),
      nil,
      functionalIsProgrammer_parameters(props.Declaration, props.Context.Emit),
      FunctionalIsFunctionProgrammer.GetReturnTypeNode(struct {
        Declaration *shimast.Node
        Async       bool
      }{
        Declaration: props.Declaration,
        Async:       r.Async,
      }),
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewBlock(f.NewNodeList(body), true),
    ),
  ))
  return nativefactories.ExpressionFactory.SelfCall(
    f.NewBlock(f.NewNodeList(statements), true),
  )
}

func (functionalIsFunctionProgrammerNamespace) GetReturnTypeNode(props struct {
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
  nullType := functionalIsProgrammer_factory.NewTypeReferenceNode(functionalIsProgrammer_factory.NewIdentifier("null"), nil)
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
    return functionalIsProgrammer_factory.NewTypeReferenceNode(
      functionalIsProgrammer_factory.NewIdentifier("Promise"),
      functionalIsProgrammer_factory.NewNodeList([]*shimast.Node{
        functionalIsProgrammer_factory.NewUnionTypeNode(functionalIsProgrammer_factory.NewNodeList([]*shimast.Node{inner, nullType})),
      }),
    )
  }
  return functionalIsProgrammer_factory.NewUnionTypeNode(functionalIsProgrammer_factory.NewNodeList([]*shimast.Node{
    typ,
    nullType,
  }))
}
