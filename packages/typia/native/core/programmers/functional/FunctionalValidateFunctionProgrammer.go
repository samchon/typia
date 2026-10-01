package functional

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
)

type functionalValidateFunctionProgrammerNamespace struct{}

var FunctionalValidateFunctionProgrammer = functionalValidateFunctionProgrammerNamespace{}

// FunctionalValidateFunctionProgrammer_IConfig selects the generator's variants:
// Equals is the strict form that also rejects properties the type does not
// declare.
//
// @evidence contracts/common.md#principled-implementation Each variant of the generator is one boolean or option on a record, so the transformers pick a form by naming the field and no second code path is copied.
// @evidence contracts/common.md#clear-and-simple-design A record of 1 field.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what each field selects.
type FunctionalValidateFunctionProgrammer_IConfig struct {
  Equals bool
}

// FunctionalValidateFunctionProgrammer_IProps is the input of Write for the
// validate function generator: Context (the transform context), Modulo (the
// call's callee expression), Config (the configuration), Declaration (the
// function declaration), Expression (the function expression) and Init
// (forwarded by the transform but not read here, because the generated function
// has no initializer parameter).
//
// @evidence contracts/common.md#principled-implementation Write needs the transform context, the call's callee expression, the configuration, the function declaration and the function expression, and the record carries them in one argument; Init is part of the shape the generic transformer fills for every programmer and is ignored here.
// @evidence contracts/common.md#clear-and-simple-design A flat argument record of 6 fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each field and says that Init is not read.
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
  f := nativecontext.EmitFactoryOf(functionalValidateProgrammer_factory, props.Context.Emit)
  statements := append([]*shimast.Node{}, p.Functions...)
  statements = append(statements, r.Functions...)
  body := append([]*shimast.Node{}, p.Statements...)
  body = append(body, r.Statements...)
  statements = append(statements, f.NewReturnStatement(
    functionalIsProgrammer_function(
      props.Context,
      props.Declaration,
      r.Async,
      FunctionalValidateFunctionProgrammer.GetReturnTypeNode(struct {
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

func (functionalValidateFunctionProgrammerNamespace) HookErrors(props struct {
  Context    nativecontext.ITypiaContext
  Expression *shimast.Node
  Replacer   *shimast.Node
}) *shimast.Node {
  f := nativecontext.EmitFactoryOf(functionalValidateProgrammer_factory, props.Context.Emit)
  return f.NewCallExpression(
    nativefactories.IdentifierFactory.Access(props.Context.Emit, props.Expression, "map"),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      f.NewArrowFunction(
        nil,
        nil,
        f.NewNodeList([]*shimast.Node{
          nativefactories.IdentifierFactory.Parameter("error", nil, nil, props.Context.Emit),
        }),
        nil,
        nil,
        f.NewToken(shimast.KindEqualsGreaterThanToken),
        f.NewObjectLiteralExpression(f.NewNodeList([]*shimast.Node{
          f.NewSpreadAssignment(f.NewIdentifier("error")),
          f.NewPropertyAssignment(
            nil,
            nativefactories.IdentifierFactory.Identifier("path", props.Context.Emit),
            nil,
            nil,
            f.NewCallExpression(
              nativefactories.IdentifierFactory.Access(
                props.Context.Emit,
                nativefactories.IdentifierFactory.Access(props.Context.Emit, f.NewIdentifier("error"), "path"),
                "replace",
              ),
              nil,
              nil,
              f.NewNodeList([]*shimast.Node{
                f.NewStringLiteral("$input", shimast.TokenFlagsNone),
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
  f := nativecontext.EmitFactoryOf(functionalValidateProgrammer_factory, props.Context.Emit)
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
        functionalValidateProgrammer_import_type(props.Context, nativecontext.ImportProgrammer_TypeProps{
          File:      "typia",
          Name:      "IValidation",
          Arguments: []*shimast.TypeNode{inner},
        }),
      }),
    )
  }
  return functionalValidateProgrammer_import_type(props.Context, nativecontext.ImportProgrammer_TypeProps{
    File:      "typia",
    Name:      "IValidation",
    Arguments: []*shimast.TypeNode{typ},
  })
}

func functionalValidateProgrammer_import_type(context nativecontext.ITypiaContext, props nativecontext.ImportProgrammer_TypeProps) *shimast.Node {
  if importer := context.Importer; importer != nil {
    return importer.Type(props)
  }
  if str, ok := props.Name.(string); ok {
    f := nativecontext.EmitFactoryOf(functionalValidateProgrammer_factory, context.Emit)
    return f.NewTypeReferenceNode(f.NewIdentifier(str), f.NewNodeList(props.Arguments))
  }
  return props.Name.(*shimast.Node)
}
