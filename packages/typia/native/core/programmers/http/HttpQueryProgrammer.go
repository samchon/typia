package http

import (
  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type httpQueryProgrammerNamespace struct{}

var HttpQueryProgrammer = httpQueryProgrammerNamespace{}

type HttpQueryProgrammer_IProps struct {
  Context       nativecontext.ITypiaContext
  Modulo        *shimast.Node
  Type          *shimchecker.Type
  Name          *string
  Init          *shimast.Node
  AllowOptional bool
}

type HttpQueryProgrammer_DecomposeProps struct {
  Context       nativecontext.ITypiaContext
  Functor       *nativehelpers.FunctionProgrammer
  AllowOptional bool
  Type          *shimchecker.Type
  Name          *string
}

var httpQueryProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (httpQueryProgrammerNamespace) Decompose(props HttpQueryProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  f := nativecontext.EmitFactoryOf(httpQueryProgrammer_factory, props.Context.Emit)
  collection := schemametadata.NewMetadataCollection()
  result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
    Checker: props.Context.Checker,
    Options: nativefactories.MetadataFactory_IOptions{
      Escape:   false,
      Constant: true,
      Absorb:   true,
      Validate: func(next struct {
        Metadata *schemametadata.MetadataSchema
        Explore  nativefactories.MetadataFactory_IExplore
        Top      *schemametadata.MetadataSchema
      }) []string {
        return HttpQueryProgrammer.Validate(struct {
          Metadata      *schemametadata.MetadataSchema
          Explore       nativefactories.MetadataFactory_IExplore
          Top           *schemametadata.MetadataSchema
          AllowOptional bool
        }{
          Metadata:      next.Metadata,
          Explore:       next.Explore,
          Top:           next.Top,
          AllowOptional: props.AllowOptional,
        })
      },
    },
    Components: collection,
    Type:       props.Type,
  })
  if result.Success == false {
    panic(nativecontext.TransformerError_from(struct {
      Code   string
      Errors []nativecontext.TransformerError_MetadataFactory_IError
    }{
      Code:   props.Functor.Method,
      Errors: httpParameterProgrammer_errors(result.Errors),
    }))
  }

  object := result.Data.Objects[0].Type
  statements := httpQueryProgrammer_decode_object(struct {
    Context nativecontext.ITypiaContext
    Object  *schemametadata.MetadataObjectType
  }{
    Context: props.Context,
    Object:  object,
  })
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  map[string]*shimast.Node{},
    Statements: []*shimast.Node{},
    Arrow: f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter(
          "input",
          f.NewUnionTypeNode(f.NewNodeList([]*shimast.Node{
            f.NewTypeReferenceNode(f.NewIdentifier("string"), nil),
            httpProgrammer_import_type(props.Context, nativecontext.ImportProgrammer_TypeProps{
              File: "typia",
              Name: "IReadableURLSearchParams",
            }),
          })),
          nil,
          props.Context.Emit,
        ),
      }),
      httpProgrammer_import_type(props.Context, nativecontext.ImportProgrammer_TypeProps{
        File: "typia",
        Name: "Resolved",
        Arguments: []*shimast.TypeNode{
          httpProgrammer_typeReference(props.Context, props.Type, props.Name),
        },
      }),
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewBlock(f.NewNodeList(statements), true),
    ),
  }
}

func (httpQueryProgrammerNamespace) Write(props HttpQueryProgrammer_IProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(httpProgrammer_method_text(props.Modulo), props.Context.Emit)
  result := HttpQueryProgrammer.Decompose(HttpQueryProgrammer_DecomposeProps{
    Context:       props.Context,
    Functor:       functor,
    AllowOptional: props.AllowOptional,
    Type:          props.Type,
    Name:          props.Name,
  })
  return nativeinternal.FeatureProgrammer.WriteDecomposed(nativeinternal.FeatureProgrammer_WriteDecomposedProps{
    Modulo:  props.Modulo,
    Functor: functor,
    Result:  result,
  })
}

func (httpQueryProgrammerNamespace) Validate(props struct {
  Metadata      *schemametadata.MetadataSchema
  Explore       nativefactories.MetadataFactory_IExplore
  Top           *schemametadata.MetadataSchema
  AllowOptional bool
}) []string {
  errors := []string{}
  insert := func(msg string) {
    errors = append(errors, msg)
  }

  if props.Explore.Top == true {
    if len(props.Metadata.Objects) != 1 || props.Metadata.Bucket() != 1 {
      insert("only one object type is allowed.")
    }
    if props.Metadata.Nullable == true {
      insert("query parameters cannot be null.")
    }
    if props.Metadata.IsRequired() == false {
      if props.AllowOptional == true {
        everyPropertiesAreOptional := props.Metadata.Size() == 1 && len(props.Metadata.Objects) == 1
        if everyPropertiesAreOptional {
          for _, p := range props.Metadata.Objects[0].Type.Properties {
            if p.Value.IsRequired() {
              everyPropertiesAreOptional = false
              break
            }
          }
        }
        if everyPropertiesAreOptional == false {
          insert("query parameters can be optional only when every properties are optional.")
        }
      } else {
        insert("query parameters cannot be undefined.")
      }
    }
  } else if _, ok := props.Explore.Nested.(*schemametadata.MetadataArrayType); props.Explore.Nested != nil && ok {
    atomics := nativehelpers.HttpMetadataUtil.Atomics(props.Metadata)
    expected := len(props.Metadata.Atomics) + len(props.Metadata.Templates)
    for _, c := range props.Metadata.Constants {
      expected += len(c.Values)
    }
    if len(atomics) > 1 {
      insert("union type is not allowed in array.")
    }
    if props.Metadata.Size() != expected {
      insert("only atomic or constant types are allowed in array.")
    }
  } else if props.Explore.Object != nil && props.Explore.Property != nil {
    if _, ok := props.Explore.Property.(string); ok == false {
      insert("dynamic property is not allowed.")
    }
    if len(props.Metadata.Tuples) != 0 {
      insert("tuple type is not allowed.")
    }
    if nativehelpers.HttpMetadataUtil.IsUnion(props.Metadata) {
      insert("union type is not allowed.")
    }
    if len(props.Metadata.Objects) != 0 ||
      len(props.Metadata.Sets) != 0 ||
      len(props.Metadata.Maps) != 0 ||
      len(props.Metadata.Natives) != 0 {
      insert("nested object type is not allowed.")
    }
  }
  return errors
}

func httpQueryProgrammer_decode_object(props struct {
  Context nativecontext.ITypiaContext
  Object  *schemametadata.MetadataObjectType
}) []*shimast.Node {
  f := nativecontext.EmitFactoryOf(httpQueryProgrammer_factory, props.Context.Emit)
  input := f.NewIdentifier("input")
  output := f.NewIdentifier("output")
  properties := make([]*shimast.Node, 0, len(props.Object.Properties))
  for _, p := range props.Object.Properties {
    properties = append(properties, httpQueryProgrammer_decode_regular_property(struct {
      Context  nativecontext.ITypiaContext
      Property *schemametadata.MetadataProperty
    }{
      Context:  props.Context,
      Property: p,
    }))
  }
  return []*shimast.Node{
    f.NewExpressionStatement(f.NewBinaryExpression(
      nil,
      input,
      nil,
      f.NewToken(shimast.KindEqualsToken),
      f.NewAsExpression(
        f.NewCallExpression(
          httpParameterProgrammer_internal(props.Context, "httpQueryParseURLSearchParams"),
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{input}),
          shimast.NodeFlagsNone,
        ),
        httpProgrammer_import_type(props.Context, nativecontext.ImportProgrammer_TypeProps{
          File: "typia",
          Name: "IReadableURLSearchParams",
        }),
      ),
    )),
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: "output",
      Value: f.NewObjectLiteralExpression(
        f.NewNodeList(properties),
        true,
      ),
    }, props.Context.Emit),
    f.NewReturnStatement(
      f.NewAsExpression(output, nativefactories.TypeFactory.Keyword("any", props.Context.Emit)),
    ),
  }
}

func httpQueryProgrammer_decode_regular_property(props struct {
  Context  nativecontext.ITypiaContext
  Property *schemametadata.MetadataProperty
}) *shimast.Node {
  f := nativecontext.EmitFactoryOf(httpQueryProgrammer_factory, props.Context.Emit)
  key := httpProgrammer_property_key(props.Property)
  value := props.Property.Value
  typ, isArray := httpProgrammer_decode_type(value, false)
  input := f.NewCallExpression(
    nativefactories.IdentifierFactory.Access(f.NewIdentifier("input"), "get"),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      f.NewStringLiteral(key, shimast.TokenFlagsNone),
    }),
    shimast.NodeFlagsNone,
  )
  if isArray {
    input = f.NewCallExpression(
      nativefactories.IdentifierFactory.Access(f.NewIdentifier("input"), "getAll"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        f.NewStringLiteral(key, shimast.TokenFlagsNone),
      }),
      shimast.NodeFlagsNone,
    )
    if value.IsRequired() {
      input = httpQueryProgrammer_assert_required_array(key, input, props.Context.Emit)
    }
    input = f.NewCallExpression(
      nativefactories.IdentifierFactory.Access(
        input,
        "map",
      ),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        f.NewArrowFunction(
          nil,
          nil,
          f.NewNodeList([]*shimast.Node{
            nativefactories.IdentifierFactory.Parameter("elem", nil, nil, props.Context.Emit),
          }),
          nil,
          nil,
          f.NewToken(shimast.KindEqualsGreaterThanToken),
          httpQueryProgrammer_decode_value(struct {
            Context  nativecontext.ITypiaContext
            Type     string
            Coalesce bool
            Input    *shimast.Node
          }{
            Context:  props.Context,
            Type:     typ,
            Coalesce: false,
            Input:    f.NewIdentifier("elem"),
          }),
        ),
      }),
      shimast.NodeFlagsNone,
    )
    input = httpQueryProgrammer_decode_array(struct {
      Context  nativecontext.ITypiaContext
      Metadata *schemametadata.MetadataSchema
      Input    *shimast.Node
    }{
      Context:  props.Context,
      Metadata: value,
      Input:    input,
    })
  } else {
    if value.IsRequired() {
      input = httpQueryProgrammer_assert_required_value(key, input, props.Context.Emit)
    }
    input = httpQueryProgrammer_decode_value(struct {
      Context  nativecontext.ITypiaContext
      Type     string
      Coalesce bool
      Input    *shimast.Node
    }{
      Context:  props.Context,
      Type:     typ,
      Coalesce: value.Nullable == false && value.IsRequired() == false,
      Input:    input,
    })
  }
  return f.NewPropertyAssignment(
    nil,
    nativefactories.IdentifierFactory.Identifier(key, props.Context.Emit),
    nil,
    nil,
    input,
  )
}

func httpQueryProgrammer_decode_value(props struct {
  Context  nativecontext.ITypiaContext
  Type     string
  Coalesce bool
  Input    *shimast.Node
}) *shimast.Node {
  f := nativecontext.EmitFactoryOf(httpQueryProgrammer_factory, props.Context.Emit)
  call := f.NewCallExpression(
    httpParameterProgrammer_internal(props.Context, "httpQueryRead"+httpParameterProgrammer_capitalize(props.Type)),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{props.Input}),
    shimast.NodeFlagsNone,
  )
  if props.Coalesce == false {
    return call
  }
  return f.NewBinaryExpression(
    nil,
    call,
    nil,
    f.NewToken(shimast.KindQuestionQuestionToken),
    f.NewIdentifier("undefined"),
  )
}

func httpQueryProgrammer_assert_required_value(key string, input *shimast.Node, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(httpQueryProgrammer_factory, emit...)
  value := f.NewIdentifier("value")
  return f.NewCallExpression(
    f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList(nil),
      nil,
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewBlock(f.NewNodeList([]*shimast.Node{
        nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
          Name:  "value",
          Value: input,
        }, emit...),
        f.NewIfStatement(
          f.NewBinaryExpression(
            nil,
            value,
            nil,
            f.NewToken(shimast.KindEqualsEqualsEqualsToken),
            f.NewKeywordExpression(shimast.KindNullKeyword),
          ),
          f.NewThrowStatement(httpQueryProgrammer_missing_error(key, emit...)),
          nil,
        ),
        f.NewReturnStatement(value),
      }), true),
    ),
    nil,
    nil,
    nil,
    shimast.NodeFlagsNone,
  )
}

func httpQueryProgrammer_assert_required_array(key string, input *shimast.Node, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(httpQueryProgrammer_factory, emit...)
  value := f.NewIdentifier("value")
  return f.NewCallExpression(
    f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList(nil),
      nil,
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewBlock(f.NewNodeList([]*shimast.Node{
        nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
          Name:  "value",
          Value: input,
        }, emit...),
        f.NewIfStatement(
          f.NewBinaryExpression(
            nil,
            nativefactories.ExpressionFactory.Number(0, emit...),
            nil,
            f.NewToken(shimast.KindEqualsEqualsEqualsToken),
            nativefactories.IdentifierFactory.Access(value, "length"),
          ),
          f.NewThrowStatement(httpQueryProgrammer_missing_error(key, emit...)),
          nil,
        ),
        f.NewReturnStatement(value),
      }), true),
    ),
    nil,
    nil,
    nil,
    shimast.NodeFlagsNone,
  )
}

func httpQueryProgrammer_missing_error(key string, emit ...*shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(httpQueryProgrammer_factory, emit...)
  return f.NewNewExpression(
    f.NewIdentifier("Error"),
    nil,
    f.NewNodeList([]*shimast.Node{
      f.NewStringLiteral("missing "+key, shimast.TokenFlagsNone),
    }),
  )
}

func httpQueryProgrammer_decode_array(props struct {
  Context  nativecontext.ITypiaContext
  Metadata *schemametadata.MetadataSchema
  Input    *shimast.Node
}) *shimast.Node {
  f := nativecontext.EmitFactoryOf(httpQueryProgrammer_factory, props.Context.Emit)
  if props.Metadata.Nullable == false && props.Metadata.IsRequired() == true {
    return props.Input
  }
  fallback := f.NewIdentifier("undefined")
  if props.Metadata.Nullable {
    fallback = f.NewKeywordExpression(shimast.KindNullKeyword)
  }
  return f.NewCallExpression(
    httpParameterProgrammer_internal(props.Context, "httpQueryReadArray"),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      props.Input,
      fallback,
    }),
    shimast.NodeFlagsNone,
  )
}
