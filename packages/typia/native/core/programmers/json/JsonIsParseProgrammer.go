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

  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions: is.Functions,
    Statements: append(append([]*shimast.Node{}, is.Statements...), nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name:  "__is",
      Value: is.Arrow,
    })),
    Arrow: jsonParseProgrammer_factory.NewArrowFunction(
      nil,
      nil,
      jsonParseProgrammer_factory.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter("input", nativefactories.TypeFactory.Keyword("string"), nil),
      }),
      jsonParseProgrammer_factory.NewUnionTypeNode(jsonParseProgrammer_factory.NewNodeList([]*shimast.Node{
        jsonProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
          File: "typia",
          Name: "Primitive",
          Arguments: []*shimast.TypeNode{
            jsonProgrammer_typeReference(props.Context, props.Type, props.Name),
          },
        }),
        jsonParseProgrammer_factory.NewTypeReferenceNode(jsonParseProgrammer_factory.NewIdentifier("null"), nil),
      })),
      nil,
      jsonParseProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
      jsonParseProgrammer_factory.NewBlock(jsonParseProgrammer_factory.NewNodeList([]*shimast.Node{
        jsonParseProgrammer_factory.NewExpressionStatement(jsonParseProgrammer_factory.NewBinaryExpression(
          nil,
          jsonParseProgrammer_factory.NewIdentifier("input"),
          nil,
          jsonParseProgrammer_factory.NewToken(shimast.KindEqualsToken),
          jsonParseProgrammer_factory.NewCallExpression(
            jsonParseProgrammer_factory.NewIdentifier("JSON.parse"),
            nil,
            nil,
            jsonParseProgrammer_factory.NewNodeList([]*shimast.Node{
              jsonParseProgrammer_factory.NewIdentifier("input"),
            }),
            shimast.NodeFlagsNone,
          ),
        )),
        jsonParseProgrammer_factory.NewReturnStatement(jsonParseProgrammer_factory.NewConditionalExpression(
          jsonParseProgrammer_factory.NewCallExpression(
            jsonParseProgrammer_factory.NewIdentifier("__is"),
            nil,
            nil,
            jsonParseProgrammer_factory.NewNodeList([]*shimast.Node{
              jsonParseProgrammer_factory.NewIdentifier("input"),
            }),
            shimast.NodeFlagsNone,
          ),
          nil,
          jsonParseProgrammer_factory.NewAsExpression(
            jsonParseProgrammer_factory.NewIdentifier("input"),
            nativefactories.TypeFactory.Keyword("any"),
          ),
          nil,
          jsonParseProgrammer_factory.NewKeywordExpression(shimast.KindNullKeyword),
        )),
      }), false),
    ),
  }
}

func (jsonIsParseProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
  method := ""
  if props.Modulo != nil {
    method = props.Modulo.Text()
  }
  functor := nativehelpers.NewFunctionProgrammer(method)
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

func jsonProgrammer_import_type(context nativecontext.ITypiaContext, props nativeprogrammers.ImportProgrammer_TypeProps) *shimast.Node {
  if importer, ok := context.Importer.(interface {
    Type(nativeprogrammers.ImportProgrammer_TypeProps) *shimast.Node
  }); ok {
    return importer.Type(props)
  }
  if str, ok := props.Name.(string); ok {
    return jsonParseProgrammer_factory.NewTypeReferenceNode(jsonParseProgrammer_factory.NewIdentifier(str), jsonParseProgrammer_factory.NewNodeList(props.Arguments))
  }
  return props.Name.(*shimast.Node)
}

func jsonProgrammer_typeReference(context nativecontext.ITypiaContext, typ *shimchecker.Type, name *string) *shimast.Node {
  if name != nil {
    return jsonParseProgrammer_factory.NewTypeReferenceNode(jsonParseProgrammer_factory.NewIdentifier(*name), nil)
  }
  return jsonParseProgrammer_factory.NewTypeReferenceNode(jsonParseProgrammer_factory.NewIdentifier(nativefactories.TypeFactory.GetFullName(nativefactories.TypeFactory_GetFullNameProps{
    Checker: context.Checker,
    Type:    typ,
  })), nil)
}
