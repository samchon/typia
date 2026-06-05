package json

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
)

type jsonIsParseProgrammerNamespace struct{}

var JsonIsParseProgrammer = jsonIsParseProgrammerNamespace{}

type JsonIsParseProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
}

var jsonParseProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (jsonIsParseProgrammerNamespace) Decompose(props JsonIsParseProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  is := nativeprogrammers.IsProgrammer.Decompose(nativeprogrammers.IsProgrammer_DecomposeProps{
    Context: jsonParseProgrammer_context(props.Context, &jsonParseProgrammer_options{
      Functional: jsonParseProgrammer_bool(false),
      Numeric:    jsonParseProgrammer_bool(false),
    }),
    Functor: props.Functor,
    Config:  nativeprogrammers.IsProgrammer_IConfig{Equals: false},
    Type:    props.Type,
    Name:    props.Name,
  })

  f := nativecontext.EmitFactoryOf(jsonParseProgrammer_factory, props.Context.Emit)
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions: is.Functions,
    Statements: append(append([]*shimast.Node{}, is.Statements...), nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name:  "__is",
      Value: is.Arrow,
    }, props.Context.Emit)),
    Arrow: f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("string", props.Context.Emit), nil, props.Context.Emit),
      }),
      f.NewUnionTypeNode(f.NewNodeList([]*shimast.Node{
        jsonProgrammer_import_type(props.Context, nativecontext.ImportProgrammer_TypeProps{
          File: "typia",
          Name: "Primitive",
          Arguments: []*shimast.TypeNode{
            jsonProgrammer_typeReference(props.Context, props.Type, props.Name),
          },
        }),
        f.NewTypeReferenceNode(f.NewIdentifier("null"), nil),
      })),
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewBlock(f.NewNodeList([]*shimast.Node{
        f.NewExpressionStatement(f.NewBinaryExpression(
          nil,
          f.NewIdentifier("input"),
          nil,
          f.NewToken(shimast.KindEqualsToken),
          f.NewCallExpression(
            f.NewIdentifier("JSON.parse"),
            nil,
            nil,
            f.NewNodeList([]*shimast.Node{
              f.NewIdentifier("input"),
            }),
            shimast.NodeFlagsNone,
          ),
        )),
        f.NewReturnStatement(nativefactories.ExpressionFactory.Conditional(
          f.NewCallExpression(
            f.NewIdentifier("__is"),
            nil,
            nil,
            f.NewNodeList([]*shimast.Node{
              f.NewIdentifier("input"),
            }),
            shimast.NodeFlagsNone,
          ),
          f.NewAsExpression(
            f.NewIdentifier("input"),
            nativefactories.TypeFactory.Keyword("any", props.Context.Emit),
          ),
          f.NewKeywordExpression(shimast.KindNullKeyword),
          props.Context.Emit,
        )),
      }), false),
    ),
  }
}

func (jsonIsParseProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  method := nativehelpers.ModuloMethodText(props.Modulo)
  functor := nativehelpers.NewFunctionProgrammer(method, props.Context.Emit)
  result := JsonIsParseProgrammer.Decompose(JsonIsParseProgrammer_DecomposeProps{
    Context: props.Context,
    Functor: functor,
    Type:    props.Type,
    Name:    props.Name,
  })
  return nativeinternal.FeatureProgrammer.WriteDecomposed(nativeinternal.FeatureProgrammer_WriteDecomposedProps{
    Modulo:  props.Modulo,
    Functor: functor,
    Result:  result,
  })
}

type jsonParseProgrammer_options struct {
  Functional *bool
  Numeric    *bool
  Finite     *bool
}

func jsonParseProgrammer_context(context nativecontext.ITypiaContext, options *jsonParseProgrammer_options) nativecontext.ITypiaContext {
  next := context
  next.Options = context.Options
  if options.Functional != nil {
    next.Options.Functional = options.Functional
  }
  if options.Numeric != nil {
    next.Options.Numeric = options.Numeric
  }
  if options.Finite != nil {
    next.Options.Finite = options.Finite
  }
  return next
}

func jsonParseProgrammer_bool(value bool) *bool {
  return &value
}

func jsonProgrammer_import_type(context nativecontext.ITypiaContext, props nativecontext.ImportProgrammer_TypeProps) *shimast.Node {
  if importer := context.Importer; importer != nil {
    return importer.Type(props)
  }
  f := nativecontext.EmitFactoryOf(jsonParseProgrammer_factory, context.Emit)
  if str, ok := props.Name.(string); ok {
    return f.NewTypeReferenceNode(f.NewIdentifier(str), f.NewNodeList(props.Arguments))
  }
  return props.Name.(*shimast.Node)
}

func jsonProgrammer_typeReference(context nativecontext.ITypiaContext, typ *shimchecker.Type, name *string) *shimast.Node {
  f := nativecontext.EmitFactoryOf(jsonParseProgrammer_factory, context.Emit)
  if name != nil {
    return f.NewTypeReferenceNode(f.NewIdentifier(*name), nil)
  }
  return f.NewTypeReferenceNode(f.NewIdentifier(nativefactories.TypeFactory.GetFullName(nativefactories.TypeFactory_GetFullNameProps{
    Checker: context.Checker,
    Type:    typ,
  })), nil)
}
