package functional

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
)

type functionalValidateFunctionProgrammerNamespace struct{}

var FunctionalValidateFunctionProgrammer = functionalValidateFunctionProgrammerNamespace{}

type FunctionalValidateFunctionProgrammer_IConfig struct {
  Equals bool
}

type FunctionalValidateFunctionProgrammer_IProps struct {
  Context     nativecontext.ITypiaContext
  Modulo      *shimast.Node
  Config      FunctionalValidateFunctionProgrammer_IConfig
  Declaration *shimast.Node
  Expression  *shimast.Node
  Init        *shimast.Node
}

var functionalValidateProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (functionalValidateFunctionProgrammerNamespace) Write(props FunctionalValidateFunctionProgrammer_IProps) *shimast.Node {
  p := FunctionalValidateParametersProgrammer.Decompose(FunctionalValidateParametersProgrammer_IDecomposeProps{
    Context:     props.Context,
    Modulo:      props.Modulo,
    Config:      FunctionalValidateParametersProgrammer_IConfig{Equals: props.Config.Equals},
    Declaration: props.Declaration,
  })
  r := FunctionalValidateReturnProgrammer.Decompose(FunctionalValidateReturnProgrammer_IDecomposeProps{
    Context:     props.Context,
    Modulo:      props.Modulo,
    Config:      FunctionalValidateReturnProgrammer_IConfig{Equals: props.Config.Equals},
    Expression:  props.Expression,
    Declaration: props.Declaration,
  })
  statements := append([]*shimast.Node{}, p.Functions...)
  statements = append(statements, r.Functions...)
  body := append([]*shimast.Node{}, p.Statements...)
  body = append(body, r.Statements...)
  statements = append(statements, functionalValidateProgrammer_factory.NewReturnStatement(
    functionalValidateProgrammer_factory.NewArrowFunction(
      functionalIsProgrammer_asyncModifiers(r.Async),
      nil,
      functionalIsProgrammer_parameters(props.Declaration),
      FunctionalValidateFunctionProgrammer.GetReturnTypeNode(struct {
        Context     nativecontext.ITypiaContext
        Declaration *shimast.Node
        Async       bool
      }{
        Context:     props.Context,
        Declaration: props.Declaration,
        Async:       r.Async,
      }),
      nil,
      functionalValidateProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
      functionalValidateProgrammer_factory.NewBlock(functionalValidateProgrammer_factory.NewNodeList(body), true),
    ),
  ))
  return nativefactories.ExpressionFactory.SelfCall(
    functionalValidateProgrammer_factory.NewBlock(functionalValidateProgrammer_factory.NewNodeList(statements), true),
  )
}

func (functionalValidateFunctionProgrammerNamespace) HookErrors(props struct {
  Expression *shimast.Node
  Replacer   *shimast.Node
}) *shimast.Node {
  return functionalValidateProgrammer_factory.NewCallExpression(
    nativefactories.IdentifierFactory.Access(props.Expression, "map"),
    nil,
    nil,
    functionalValidateProgrammer_factory.NewNodeList([]*shimast.Node{
      functionalValidateProgrammer_factory.NewArrowFunction(
        nil,
        nil,
        functionalValidateProgrammer_factory.NewNodeList([]*shimast.Node{
          nativefactories.IdentifierFactory.Parameter("error", nil, nil),
        }),
        nil,
        nil,
        functionalValidateProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
        functionalValidateProgrammer_factory.NewObjectLiteralExpression(functionalValidateProgrammer_factory.NewNodeList([]*shimast.Node{
          functionalValidateProgrammer_factory.NewSpreadAssignment(functionalValidateProgrammer_factory.NewIdentifier("error")),
          functionalValidateProgrammer_factory.NewPropertyAssignment(
            nil,
            nativefactories.IdentifierFactory.Identifier("path"),
            nil,
            nil,
            functionalValidateProgrammer_factory.NewCallExpression(
              nativefactories.IdentifierFactory.Access(
                nativefactories.IdentifierFactory.Access(functionalValidateProgrammer_factory.NewIdentifier("error"), "path"),
                "replace",
              ),
              nil,
              nil,
              functionalValidateProgrammer_factory.NewNodeList([]*shimast.Node{
                functionalValidateProgrammer_factory.NewStringLiteral("$input", shimast.TokenFlagsNone),
                props.Replacer,
              }),
              shimast.NodeFlagsNone,
            ),
          ),
        }), true),
      ),
    }),
    shimast.NodeFlagsNone,
  )
}

func (functionalValidateFunctionProgrammerNamespace) GetReturnTypeNode(props struct {
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
    return functionalValidateProgrammer_factory.NewTypeReferenceNode(
      functionalValidateProgrammer_factory.NewIdentifier("Promise"),
      functionalValidateProgrammer_factory.NewNodeList([]*shimast.Node{
        functionalValidateProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
          File:      "typia",
          Name:      "IValidation",
          Arguments: []*shimast.TypeNode{inner},
        }),
      }),
    )
  }
  return functionalValidateProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
    File:      "typia",
    Name:      "IValidation",
    Arguments: []*shimast.TypeNode{typ},
  })
}

func functionalValidateProgrammer_import_type(context nativecontext.ITypiaContext, props nativeprogrammers.ImportProgrammer_TypeProps) *shimast.Node {
  if importer, ok := context.Importer.(interface {
    Type(nativeprogrammers.ImportProgrammer_TypeProps) *shimast.Node
  }); ok {
    return importer.Type(props)
  }
  if str, ok := props.Name.(string); ok {
    return functionalValidateProgrammer_factory.NewTypeReferenceNode(functionalValidateProgrammer_factory.NewIdentifier(str), functionalValidateProgrammer_factory.NewNodeList(props.Arguments))
  }
  return props.Name.(*shimast.Node)
}
