package protobuf

import (
  "fmt"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimchecker "github.com/microsoft/typescript-go/shim/checker"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
  nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  schemaprotobuf "github.com/samchon/typia/packages/typia/native/core/schemas/protobuf"
)

type protobufDecodeProgrammerNamespace struct{}

var ProtobufDecodeProgrammer = protobufDecodeProgrammerNamespace{}

type ProtobufDecodeProgrammer_IProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Type    *shimchecker.Type
  Name    *string
  Init    *shimast.Node
}

type ProtobufDecodeProgrammer_DecomposeProps struct {
  Context nativecontext.ITypiaContext
  Modulo  *shimast.Node
  Functor *nativehelpers.FunctionProgrammer
  Type    *shimchecker.Type
  Name    *string
}

type protobufDecodeProgrammer_objectBodyProps struct {
  Context   nativecontext.ITypiaContext
  Condition *shimast.Node
  Tag       string
  Output    string
  Object    *schemametadata.MetadataObjectType
}

type protobufDecodeProgrammer_decodePropertyProps struct {
  Context  nativecontext.ITypiaContext
  Metadata *schemametadata.MetadataSchema
  Protobuf *schemaprotobuf.IProtobufProperty
  Accessor *shimast.Node
}

type protobufDecodeProgrammer_decodePropertyTypeProps struct {
  Context  nativecontext.ITypiaContext
  Accessor *shimast.Node
  Schema   schemaprotobuf.IProtobufPropertyType
  Required bool
}

type protobufDecodeProgrammer_decodeArrayProps struct {
  Accessor *shimast.Node
  Schema   schemaprotobuf.IProtobufSchema
  Required bool
}

type protobufDecodeProgrammer_decodeMapProps struct {
  Context     nativecontext.ITypiaContext
  Accessor    *shimast.Node
  Key         *schemametadata.MetadataSchema
  Value       *schemametadata.MetadataSchema
  Schema      schemaprotobuf.IProtobufSchema
  Initializer *shimast.Node
  Required    bool
  Setter      func() *shimast.Node
}

const protobufDecodeProgrammer_PREFIX = "_pd"

var protobufDecodeProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
var protobufDecodeProgrammer_objectSequence = 0

func (protobufDecodeProgrammerNamespace) Decompose(props ProtobufDecodeProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
  f := nativecontext.EmitFactoryOf(protobufDecodeProgrammer_factory, props.Context.Emit)
  collection := schemametadata.NewMetadataCollection()
  meta := nativefactories.ProtobufFactory.Metadata(nativefactories.ProtobufFactory_IProps{
    Method:     protobufDecodeProgrammer_method_text(props.Modulo),
    Checker:    props.Context.Checker,
    Components: collection,
    Type:       props.Type,
  })
  functions := map[string]*shimast.Node{}
  for _, object := range collection.Objects() {
    if nativehelpers.ProtobufUtil.IsStaticObject(object) == false {
      continue
    }
    name := fmt.Sprintf("%so%d", protobufDecodeProgrammer_PREFIX, object.Index)
    functions[name] = nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: props.Functor.UseLocal(name),
      Value: protobufDecodeProgrammer_write_object_function(struct {
        Context nativecontext.ITypiaContext
        Functor *nativehelpers.FunctionProgrammer
        Object  *schemametadata.MetadataObjectType
      }{Context: props.Context, Functor: props.Functor, Object: object}),
    }, props.Context.Emit)
  }
  typeName := ""
  if props.Name != nil {
    typeName = *props.Name
  } else {
    typeName = nativefactories.TypeFactory.GetFullName(nativefactories.TypeFactory_GetFullNameProps{
      Checker: props.Context.Checker,
      Type:    props.Type,
    })
  }
  outputType := protobufDecodeProgrammer_import_type(props.Context, nativecontext.ImportProgrammer_TypeProps{
    File: "typia",
    Name: "Resolved",
    Arguments: []*shimast.TypeNode{
      f.NewTypeReferenceNode(f.NewIdentifier(typeName), nil),
    },
  })
  top := (*schemametadata.MetadataObjectType)(nil)
  if len(meta.Objects) != 0 {
    top = meta.Objects[0].Type
  }
  return nativeinternal.FeatureProgrammer_IDecomposed{
    Functions:  functions,
    Statements: []*shimast.Node{},
    Arrow: f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{
        nativefactories.IdentifierFactory.Parameter("input", f.NewTypeReferenceNode(f.NewIdentifier("Uint8Array"), nil), nil, props.Context.Emit),
      }),
      outputType,
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      f.NewBlock(f.NewNodeList([]*shimast.Node{
        nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
          Name: "reader",
          Value: f.NewNewExpression(
            protobufDecodeProgrammer_internal(props.Context, "ProtobufReader"),
            nil,
            f.NewNodeList([]*shimast.Node{f.NewIdentifier("input")}),
          ),
        }, props.Context.Emit),
        f.NewReturnStatement(protobufDecodeProgrammer_decode_regular_object(struct {
          Top    bool
          Object *schemametadata.MetadataObjectType
        }{Top: true, Object: top}, props.Context.Emit)),
      }), true),
    ),
  }
}

func (protobufDecodeProgrammerNamespace) Write(props ProtobufDecodeProgrammer_IProps) *shimast.Node {
  functor := nativehelpers.NewFunctionProgrammer(protobufDecodeProgrammer_method_text(props.Modulo), props.Context.Emit)
  result := ProtobufDecodeProgrammer.Decompose(ProtobufDecodeProgrammer_DecomposeProps{
    Context: props.Context,
    Modulo:  props.Modulo,
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

func protobufDecodeProgrammer_write_object_function(props struct {
  Context nativecontext.ITypiaContext
  Functor *nativehelpers.FunctionProgrammer
  Object  *schemametadata.MetadataObjectType
}) *shimast.Node {
  f := nativecontext.EmitFactoryOf(protobufDecodeProgrammer_factory, props.Context.Emit)
  body := protobufDecodeProgrammer_write_object_function_body(protobufDecodeProgrammer_objectBodyProps{
    Context:   props.Context,
    Condition: protobufDecodeProgrammer_lessThan(protobufDecodeProgrammer_callReader("index", nil, props.Context.Emit), protobufDecodeProgrammer_callReader("size", nil, props.Context.Emit), props.Context.Emit),
    Tag:       "tag",
    Output:    "output",
    Object:    props.Object,
  })
  body = append(body, f.NewIfStatement(
    protobufDecodeProgrammer_lessThan(nativefactories.ExpressionFactory.Number(-1, props.Context.Emit), f.NewIdentifier("previous"), props.Context.Emit),
    f.NewExpressionStatement(protobufDecodeProgrammer_callReader("close", []*shimast.Node{f.NewIdentifier("previous")}, props.Context.Emit)),
    nil,
  ))
  body = append(body, f.NewReturnStatement(f.NewIdentifier("output")))
  return f.NewArrowFunction(
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      nativefactories.IdentifierFactory.Parameter("reader", nil, nil, props.Context.Emit),
      nativefactories.IdentifierFactory.Parameter("previous", nativefactories.TypeFactory.Keyword("number", props.Context.Emit), nativefactories.ExpressionFactory.Number(-1, props.Context.Emit), props.Context.Emit),
    }),
    nativefactories.TypeFactory.Keyword("any", props.Context.Emit),
    nil,
    f.NewToken(shimast.KindEqualsGreaterThanToken),
    f.NewBlock(f.NewNodeList(body), true),
  )
}

func protobufDecodeProgrammer_write_object_function_body(props protobufDecodeProgrammer_objectBodyProps) []*shimast.Node {
  f := nativecontext.EmitFactoryOf(protobufDecodeProgrammer_factory, props.Context.Emit)
  if protobufDecodeProgrammer_objectNeedsProtobuf(props.Object) {
    nativefactories.ProtobufFactory.EmplaceObject(props.Object)
  }
  clauses := []*shimast.Node{}
  for _, property := range props.Object.Properties {
    literal := property.Key.GetSoleLiteral()
    if literal == nil {
      continue
    }
    clauses = append(clauses, protobufDecodeProgrammer_decode_property(protobufDecodeProgrammer_decodePropertyProps{
      Context:  props.Context,
      Accessor: nativefactories.IdentifierFactory.Access(props.Context.Emit, f.NewIdentifier(props.Output), *literal),
      Protobuf: property.Of_protobuf_,
      Metadata: property.Value,
    })...)
  }
  clauses = append(clauses, f.NewCaseOrDefaultClause(
    shimast.KindDefaultClause,
    nil,
    f.NewNodeList([]*shimast.Node{
      f.NewExpressionStatement(protobufDecodeProgrammer_callReader("skipType", []*shimast.Node{
        protobufDecodeProgrammer_bitwise_and(f.NewIdentifier(props.Tag), nativefactories.ExpressionFactory.Number(7, props.Context.Emit), props.Context.Emit),
      }, props.Context.Emit)),
      f.NewBreakStatement(nil),
    }),
  ))
  properties := []*shimast.Node{}
  exactOptional := props.Context.CompilerOptions != nil && props.Context.CompilerOptions.ExactOptionalPropertyTypes.IsTrue()
  for _, property := range props.Object.Properties {
    if exactOptional && property.Value.Optional {
      continue
    }
    literal := property.Key.GetSoleLiteral()
    if literal == nil {
      continue
    }
    properties = append(properties, f.NewPropertyAssignment(
      nil,
      nativefactories.IdentifierFactory.Identifier(*literal, props.Context.Emit),
      nil,
      nil,
      protobufDecodeProgrammer_write_property_default_value(property.Value, props.Context.Emit),
    ))
  }
  return []*shimast.Node{
    nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
      Name: props.Output,
      Value: f.NewAsExpression(
        f.NewObjectLiteralExpression(f.NewNodeList(properties), true),
        nativefactories.TypeFactory.Keyword("any", props.Context.Emit),
      ),
    }, props.Context.Emit),
    f.NewWhileStatement(
      props.Condition,
      f.NewBlock(f.NewNodeList([]*shimast.Node{
        nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
          Name:  props.Tag,
          Value: protobufDecodeProgrammer_callReader("uint32", nil, props.Context.Emit),
        }, props.Context.Emit),
        f.NewSwitchStatement(
          protobufDecodeProgrammer_unsigned_right_shift(f.NewIdentifier(props.Tag), nativefactories.ExpressionFactory.Number(3, props.Context.Emit), props.Context.Emit),
          f.NewCaseBlock(f.NewNodeList(clauses)),
        ),
      }), true),
    ),
  }
}

func protobufDecodeProgrammer_write_property_default_value(value *schemametadata.MetadataSchema, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(protobufDecodeProgrammer_factory, emit)
  var expression *shimast.Node
  if value.Nullable {
    expression = f.NewKeywordExpression(shimast.KindNullKeyword)
  } else if value.IsRequired() == false {
    expression = f.NewIdentifier("undefined")
  } else if len(value.Arrays) != 0 {
    expression = f.NewArrayLiteralExpression(nil, false)
  } else if len(value.Maps) != 0 {
    expression = f.NewNewExpression(f.NewIdentifier("Map"), nil, f.NewNodeList(nil))
  } else if len(value.Natives) != 0 {
    expression = f.NewNewExpression(
      f.NewIdentifier("Uint8Array"),
      nil,
      f.NewNodeList([]*shimast.Node{
        f.NewArrayLiteralExpression(nil, false),
      }),
    )
  } else if protobufDecodeProgrammer_hasStringDefault(value) {
    expression = f.NewStringLiteral("", shimast.TokenFlagsNone)
  } else if protobufDecodeProgrammer_hasAtomicDefault(value, "number") {
    expression = f.NewNumericLiteral("0", shimast.TokenFlagsNone)
  } else if protobufDecodeProgrammer_hasAtomicDefault(value, "boolean") {
    expression = f.NewKeywordExpression(shimast.KindFalseKeyword)
  } else if protobufDecodeProgrammer_hasAtomicDefault(value, "bigint") {
    expression = f.NewBigIntLiteral("0n", shimast.TokenFlagsNone)
  } else if protobufDecodeProgrammer_hasDynamicObject(value) {
    expression = f.NewObjectLiteralExpression(nil, false)
  } else {
    expression = f.NewIdentifier("undefined")
  }
  return f.NewAsExpression(expression, nativefactories.TypeFactory.Keyword("any", emit))
}

func protobufDecodeProgrammer_decode_property(props protobufDecodeProgrammer_decodePropertyProps) []*shimast.Node {
  output := []*shimast.Node{}
  if props.Protobuf == nil {
    return output
  }
  for _, schema := range props.Protobuf.Union {
    output = append(output, protobufDecodeProgrammer_decode_property_type(protobufDecodeProgrammer_decodePropertyTypeProps{
      Context:  props.Context,
      Accessor: props.Accessor,
      Schema:   schema,
      Required: props.Metadata.IsRequired() && props.Metadata.Nullable == false,
    }))
  }
  return output
}

func protobufDecodeProgrammer_decode_property_type(props protobufDecodeProgrammer_decodePropertyTypeProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(protobufDecodeProgrammer_factory, props.Context.Emit)
  outExpr := func(title string, value *shimast.Node) *shimast.Node {
    return protobufDecodeProgrammer_caseClause(protobufDecodeProgrammer_indexValue(protobufDecodeProgrammer_propertyIndex(props.Schema)), title, []*shimast.Node{
      f.NewExpressionStatement(protobufDecodeProgrammer_assignment(props.Accessor, shimast.KindEqualsToken, value, props.Context.Emit)),
    }, props.Context.Emit)
  }
  outStatements := func(title string, value []*shimast.Node) *shimast.Node {
    return protobufDecodeProgrammer_caseClause(protobufDecodeProgrammer_indexValue(protobufDecodeProgrammer_propertyIndex(props.Schema)), title, value, props.Context.Emit)
  }
  switch schema := props.Schema.(type) {
  case *schemaprotobuf.IProtobufPropertyType_IByte:
    return outExpr("bytes", protobufDecodeProgrammer_callReader("bytes", nil, props.Context.Emit))
  case *schemaprotobuf.IProtobufPropertyType_IBoolean:
    return outExpr("bool", protobufDecodeProgrammer_callReader("bool", nil, props.Context.Emit))
  case *schemaprotobuf.IProtobufPropertyType_IBigint:
    return outExpr(schema.Name, protobufDecodeProgrammer_callReader(schema.Name, nil, props.Context.Emit))
  case *schemaprotobuf.IProtobufPropertyType_INumber:
    return outExpr(schema.Name, protobufDecodeProgrammer_decode_number(schema, props.Context.Emit))
  case *schemaprotobuf.IProtobufPropertyType_IString:
    return outExpr("string", protobufDecodeProgrammer_callReader("string", nil, props.Context.Emit))
  case *schemaprotobuf.IProtobufPropertyType_IArray:
    return outStatements("Array<"+protobufDecodeProgrammer_arrayValueName(schema)+">", protobufDecodeProgrammer_decode_array(protobufDecodeProgrammer_decodeArrayProps{
      Accessor: props.Accessor,
      Schema:   schema,
      Required: props.Required,
    }, props.Context.Emit))
  case *schemaprotobuf.IProtobufPropertyType_IObject:
    name := "object"
    if obj, ok := schema.Object.(*schemametadata.MetadataObjectType); ok {
      name = obj.Name
    }
    return outExpr(name, protobufDecodeProgrammer_decode_regular_object(struct {
      Top    bool
      Object *schemametadata.MetadataObjectType
    }{Top: false, Object: protobufDecodeProgrammer_objectSchema(schema)}, props.Context.Emit))
  case *schemaprotobuf.IProtobufPropertyType_IMap:
    if obj, ok := schema.Map.(*schemametadata.MetadataObjectType); ok && len(obj.Properties) != 0 {
      key := obj.Properties[0].Key
      value := obj.Properties[0].Value
      return outStatements("Record<"+key.GetName()+", "+value.GetName()+">", protobufDecodeProgrammer_decode_map(protobufDecodeProgrammer_decodeMapProps{
        Context:     props.Context,
        Accessor:    props.Accessor,
        Schema:      schema,
        Required:    props.Required,
        Key:         key,
        Value:       value,
        Initializer: f.NewObjectLiteralExpression(f.NewNodeList(nil), false),
        Setter: func() *shimast.Node {
          return protobufDecodeProgrammer_assignment(
            f.NewElementAccessExpression(props.Accessor, nil, f.NewIdentifier("entry.key"), shimast.NodeFlagsNone),
            shimast.KindEqualsToken,
            f.NewIdentifier("entry.value"),
            props.Context.Emit,
          )
        },
      }))
    }
    if m, ok := schema.Map.(*schemametadata.MetadataMap); ok {
      key := m.Key
      value := m.Value
      return outStatements("Map<"+key.GetName()+", "+value.GetName()+">", protobufDecodeProgrammer_decode_map(protobufDecodeProgrammer_decodeMapProps{
        Context:  props.Context,
        Accessor: props.Accessor,
        Schema:   schema,
        Required: props.Required,
        Key:      key,
        Value:    value,
        Initializer: f.NewNewExpression(
          f.NewIdentifier("Map"),
          f.NewNodeList([]*shimast.Node{nativefactories.TypeFactory.Keyword("any", props.Context.Emit), nativefactories.TypeFactory.Keyword("any", props.Context.Emit)}),
          f.NewNodeList(nil),
        ),
        Setter: func() *shimast.Node {
          return f.NewCallExpression(
            nativefactories.IdentifierFactory.Access(props.Context.Emit, props.Accessor, "set"),
            nil,
            nil,
            f.NewNodeList([]*shimast.Node{
              f.NewIdentifier("entry.key"),
              f.NewIdentifier("entry.value"),
            }),
            shimast.NodeFlagsNone,
          )
        },
      }))
    }
  }
  panic("Error on ProtobufDecodeProgrammer.write(): unknown property type")
}

func protobufDecodeProgrammer_decode_number(schema schemaprotobuf.IProtobufSchema, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(protobufDecodeProgrammer_factory, emit)
  name := protobufDecodeProgrammer_numberName(schema)
  value := protobufDecodeProgrammer_callReader(name, nil, emit)
  if name == "int64" || name == "uint64" {
    return f.NewCallExpression(
      f.NewIdentifier("Number"),
      nil,
      nil,
      f.NewNodeList([]*shimast.Node{value}),
      shimast.NodeFlagsNone,
    )
  }
  return value
}

func protobufDecodeProgrammer_decode_array(props protobufDecodeProgrammer_decodeArrayProps, emit *shimprinter.EmitContext) []*shimast.Node {
  f := nativecontext.EmitFactoryOf(protobufDecodeProgrammer_factory, emit)
  statements := []*shimast.Node{}
  if props.Required == false {
    statements = append(statements, f.NewExpressionStatement(
      protobufDecodeProgrammer_assignment(
        props.Accessor,
        shimast.KindQuestionQuestionEqualsToken,
        f.NewAsExpression(
          f.NewArrayLiteralExpression(nil, false),
          f.NewTypeReferenceNode(f.NewIdentifier("any[]"), nil),
        ),
        emit,
      ),
    ))
  }
  value := protobufDecodeProgrammer_arrayValue(props.Schema)
  decoder := protobufDecodeProgrammer_decode_array_value(value, emit)
  if protobufDecodeProgrammer_isPackedArrayValue(value) {
    statements = append(statements, f.NewIfStatement(
      protobufDecodeProgrammer_strict_equal(
        nativefactories.ExpressionFactory.Number(2, emit),
        protobufDecodeProgrammer_bitwise_and(f.NewIdentifier("tag"), nativefactories.ExpressionFactory.Number(7, emit), emit),
        emit,
      ),
      f.NewBlock(f.NewNodeList([]*shimast.Node{
        nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
          Name:  "piece",
          Value: protobufDecodeProgrammer_callReader("fork", nil, emit),
        }, emit),
        f.NewWhileStatement(
          protobufDecodeProgrammer_lessThan(protobufDecodeProgrammer_callReader("index", nil, emit), protobufDecodeProgrammer_callReader("size", nil, emit), emit),
          f.NewExpressionStatement(protobufDecodeProgrammer_arrayPush(props.Accessor, decoder, emit)),
        ),
        f.NewExpressionStatement(protobufDecodeProgrammer_callReader("close", []*shimast.Node{f.NewIdentifier("piece")}, emit)),
      }), true),
      f.NewExpressionStatement(protobufDecodeProgrammer_arrayPush(props.Accessor, decoder, emit)),
    ))
  } else {
    statements = append(statements, f.NewExpressionStatement(protobufDecodeProgrammer_arrayPush(props.Accessor, decoder, emit)))
  }
  return statements
}

func protobufDecodeProgrammer_decode_regular_object(props struct {
  Top    bool
  Object *schemametadata.MetadataObjectType
}, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(protobufDecodeProgrammer_factory, emit)
  index := 0
  if props.Object != nil {
    index = props.Object.Index
  }
  args := []*shimast.Node{f.NewIdentifier("reader")}
  if props.Top == false {
    args = append(args, protobufDecodeProgrammer_callReader("fork", nil, emit))
  }
  return f.NewCallExpression(
    f.NewIdentifier(fmt.Sprintf("%so%d", protobufDecodeProgrammer_PREFIX, index)),
    nil,
    nil,
    f.NewNodeList(args),
    shimast.NodeFlagsNone,
  )
}

func protobufDecodeProgrammer_decode_map(props protobufDecodeProgrammer_decodeMapProps) []*shimast.Node {
  f := nativecontext.EmitFactoryOf(protobufDecodeProgrammer_factory, props.Context.Emit)
  statements := []*shimast.Node{}
  if props.Required {
    statements = append(statements, f.NewExpressionStatement(
      protobufDecodeProgrammer_assignment(props.Accessor, shimast.KindQuestionQuestionEqualsToken, props.Initializer, props.Context.Emit),
    ))
  }
  statements = append(statements, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
    Name:  "piece",
    Value: protobufDecodeProgrammer_callReader("fork", nil, props.Context.Emit),
  }, props.Context.Emit))
  statements = append(statements, protobufDecodeProgrammer_write_object_function_body(protobufDecodeProgrammer_objectBodyProps{
    Context:   props.Context,
    Condition: protobufDecodeProgrammer_lessThan(protobufDecodeProgrammer_callReader("index", nil, props.Context.Emit), protobufDecodeProgrammer_callReader("size", nil, props.Context.Emit), props.Context.Emit),
    Tag:       "kind",
    Output:    "entry",
    Object: protobufDecodeProgrammer_createObjectType([]struct {
      Key   string
      Value *schemametadata.MetadataSchema
    }{
      {Key: "key", Value: props.Key},
      {Key: "value", Value: props.Value},
    }),
  })...)
  statements = append(statements, f.NewExpressionStatement(protobufDecodeProgrammer_callReader("close", []*shimast.Node{f.NewIdentifier("piece")}, props.Context.Emit)))
  if props.Required == false {
    statements = append(statements, f.NewExpressionStatement(
      protobufDecodeProgrammer_assignment(props.Accessor, shimast.KindQuestionQuestionEqualsToken, props.Initializer, props.Context.Emit),
    ))
  }
  statements = append(statements, f.NewExpressionStatement(props.Setter()))
  return []*shimast.Node{
    f.NewExpressionStatement(nativefactories.ExpressionFactory.SelfCall(
      props.Context.Emit,
      f.NewBlock(f.NewNodeList(statements), true),
    )),
  }
}

func protobufDecodeProgrammer_decode_array_value(schema schemaprotobuf.IProtobufSchema, emit *shimprinter.EmitContext) *shimast.Node {
  switch protobufDecodeProgrammer_schemaType(schema) {
  case "bytes":
    return protobufDecodeProgrammer_callReader("bytes", nil, emit)
  case "bool":
    return protobufDecodeProgrammer_callReader("bool", nil, emit)
  case "bigint":
    return protobufDecodeProgrammer_callReader(protobufDecodeProgrammer_bigintName(schema), nil, emit)
  case "number":
    return protobufDecodeProgrammer_decode_number(schema, emit)
  case "string":
    return protobufDecodeProgrammer_callReader("string", nil, emit)
  case "object":
    return protobufDecodeProgrammer_decode_regular_object(struct {
      Top    bool
      Object *schemametadata.MetadataObjectType
    }{Top: false, Object: protobufDecodeProgrammer_objectSchema(schema)}, emit)
  default:
    panic("unreachable condition")
  }
}

func protobufDecodeProgrammer_callReader(method string, args []*shimast.Node, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(protobufDecodeProgrammer_factory, emit)
  return f.NewCallExpression(
    nativefactories.IdentifierFactory.Access(emit, f.NewIdentifier("reader"), method),
    nil,
    nil,
    f.NewNodeList(args),
    shimast.NodeFlagsNone,
  )
}

func protobufDecodeProgrammer_caseClause(index int, title string, statements []*shimast.Node, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(protobufDecodeProgrammer_factory, emit)
  body := []*shimast.Node{
    f.NewExpressionStatement(f.NewIdentifier("// " + title)),
  }
  body = append(body, statements...)
  body = append(body, f.NewBreakStatement(nil))
  return f.NewCaseOrDefaultClause(
    shimast.KindCaseClause,
    nativefactories.ExpressionFactory.Number(index, emit),
    f.NewNodeList(body),
  )
}

func protobufDecodeProgrammer_createObjectType(definitions []struct {
  Key   string
  Value *schemametadata.MetadataSchema
}) *schemametadata.MetadataObjectType {
  properties := make([]*schemametadata.MetadataProperty, 0, len(definitions))
  for _, def := range definitions {
    properties = append(properties, schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
      Key:       nativefactories.MetadataFactory.SoleLiteral(def.Key),
      Value:     def.Value,
      JsDocTags: []schemametadata.IJsDocTagInfo{},
    }))
  }
  protobufDecodeProgrammer_objectSequence++
  obj := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
    Name:       fmt.Sprintf("object.o%d", protobufDecodeProgrammer_objectSequence),
    Properties: properties,
    JsDocTags:  []schemametadata.IJsDocTagInfo{},
    Index:      -1,
    Validated:  true,
    Recursive:  false,
    Nullables:  []bool{false},
  })
  nativefactories.ProtobufFactory.EmplaceObject(obj)
  return obj
}

func protobufDecodeProgrammer_hasStringDefault(value *schemametadata.MetadataSchema) bool {
  for _, atomic := range value.Atomics {
    if atomic.Type == "string" {
      return true
    }
  }
  for _, constant := range value.Constants {
    if constant.Type != "string" {
      continue
    }
    for _, v := range constant.Values {
      if str, ok := v.Value.(string); ok && str == "" {
        return true
      }
    }
  }
  for _, template := range value.Templates {
    if len(template.Row) == 1 && template.Row[0].GetName() == "string" {
      return true
    }
  }
  return false
}

// protobufDecodeProgrammer_hasAtomicDefault reports whether an absent required
// field of this schema decodes to the proto3 typed default of the given atomic
// kind. proto3 does not write a singular scalar equal to its default, so an
// absent number/boolean/bigint must seed 0/false/0n the same way an absent
// string seeds "" through protobufDecodeProgrammer_hasStringDefault; the atomic
// kind is read exactly as hasStringDefault reads its own atomic branch.
func protobufDecodeProgrammer_hasAtomicDefault(value *schemametadata.MetadataSchema, typ string) bool {
  for _, atomic := range value.Atomics {
    if atomic.Type == typ {
      return true
    }
  }
  return false
}

func protobufDecodeProgrammer_hasDynamicObject(value *schemametadata.MetadataSchema) bool {
  if len(value.Objects) == 0 {
    return false
  }
  for _, object := range value.Objects {
    if nativehelpers.ProtobufUtil.IsStaticObject(object.Type) == false {
      return true
    }
  }
  return false
}

func protobufDecodeProgrammer_objectNeedsProtobuf(object *schemametadata.MetadataObjectType) bool {
  if object == nil {
    return false
  }
  for _, property := range object.Properties {
    if property.Of_protobuf_ == nil {
      return true
    }
  }
  return false
}

func protobufDecodeProgrammer_arrayPush(accessor *shimast.Node, value *shimast.Node, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(protobufDecodeProgrammer_factory, emit)
  return f.NewCallExpression(
    nativefactories.IdentifierFactory.Access(emit, accessor, "push"),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{value}),
    shimast.NodeFlagsNone,
  )
}

func protobufDecodeProgrammer_assignment(left *shimast.Node, operator shimast.Kind, right *shimast.Node, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(protobufDecodeProgrammer_factory, emit)
  return f.NewBinaryExpression(nil, left, nil, f.NewToken(operator), right)
}

func protobufDecodeProgrammer_lessThan(left *shimast.Node, right *shimast.Node, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(protobufDecodeProgrammer_factory, emit)
  return f.NewBinaryExpression(nil, left, nil, f.NewToken(shimast.KindLessThanToken), right)
}

func protobufDecodeProgrammer_unsigned_right_shift(left *shimast.Node, right *shimast.Node, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(protobufDecodeProgrammer_factory, emit)
  return f.NewBinaryExpression(nil, left, nil, f.NewToken(shimast.KindGreaterThanGreaterThanGreaterThanToken), right)
}

func protobufDecodeProgrammer_bitwise_and(left *shimast.Node, right *shimast.Node, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(protobufDecodeProgrammer_factory, emit)
  return f.NewBinaryExpression(nil, left, nil, f.NewToken(shimast.KindAmpersandToken), right)
}

func protobufDecodeProgrammer_strict_equal(left *shimast.Node, right *shimast.Node, emit *shimprinter.EmitContext) *shimast.Node {
  f := nativecontext.EmitFactoryOf(protobufDecodeProgrammer_factory, emit)
  return f.NewBinaryExpression(nil, left, nil, f.NewToken(shimast.KindEqualsEqualsEqualsToken), right)
}

func protobufDecodeProgrammer_indexValue(index *int) int {
  if index == nil {
    return 0
  }
  return *index
}

func protobufDecodeProgrammer_propertyIndex(schema schemaprotobuf.IProtobufPropertyType) *int {
  switch typed := schema.(type) {
  case *schemaprotobuf.IProtobufPropertyType_IByte:
    return typed.Index
  case *schemaprotobuf.IProtobufPropertyType_IBoolean:
    return typed.Index
  case *schemaprotobuf.IProtobufPropertyType_IBigint:
    return typed.Index
  case *schemaprotobuf.IProtobufPropertyType_INumber:
    return typed.Index
  case *schemaprotobuf.IProtobufPropertyType_IString:
    return typed.Index
  case *schemaprotobuf.IProtobufPropertyType_IArray:
    return typed.Index
  case *schemaprotobuf.IProtobufPropertyType_IObject:
    return typed.Index
  case *schemaprotobuf.IProtobufPropertyType_IMap:
    return typed.Index
  default:
    return nil
  }
}

func protobufDecodeProgrammer_schemaType(schema schemaprotobuf.IProtobufSchema) string {
  switch typed := schema.(type) {
  case *schemaprotobuf.IProtobufPropertyType_IByte:
    return typed.Type
  case *schemaprotobuf.IProtobufPropertyType_IBoolean:
    return typed.Type
  case *schemaprotobuf.IProtobufPropertyType_IBigint:
    return typed.Type
  case *schemaprotobuf.IProtobufPropertyType_INumber:
    return typed.Type
  case *schemaprotobuf.IProtobufPropertyType_IString:
    return typed.Type
  case *schemaprotobuf.IProtobufPropertyType_IArray:
    return typed.Type
  case *schemaprotobuf.IProtobufPropertyType_IObject:
    return typed.Type
  case *schemaprotobuf.IProtobufPropertyType_IMap:
    return typed.Type
  case schemaprotobuf.IProtobufSchema_IByte:
    return typed.Type
  case schemaprotobuf.IProtobufSchema_IBoolean:
    return typed.Type
  case schemaprotobuf.IProtobufSchema_IBigint:
    return typed.Type
  case schemaprotobuf.IProtobufSchema_INumber:
    return typed.Type
  case schemaprotobuf.IProtobufSchema_IString:
    return typed.Type
  case schemaprotobuf.IProtobufSchema_IArray:
    return typed.Type
  case schemaprotobuf.IProtobufSchema_IObject:
    return typed.Type
  case schemaprotobuf.IProtobufSchema_IMap:
    return typed.Type
  default:
    return ""
  }
}

func protobufDecodeProgrammer_numberName(schema schemaprotobuf.IProtobufSchema) string {
  switch typed := schema.(type) {
  case *schemaprotobuf.IProtobufPropertyType_INumber:
    return typed.Name
  case schemaprotobuf.IProtobufSchema_INumber:
    return typed.Name
  default:
    return ""
  }
}

func protobufDecodeProgrammer_bigintName(schema schemaprotobuf.IProtobufSchema) string {
  switch typed := schema.(type) {
  case *schemaprotobuf.IProtobufPropertyType_IBigint:
    return typed.Name
  case schemaprotobuf.IProtobufSchema_IBigint:
    return typed.Name
  default:
    return ""
  }
}

func protobufDecodeProgrammer_arrayValue(schema schemaprotobuf.IProtobufSchema) schemaprotobuf.IProtobufSchema {
  switch typed := schema.(type) {
  case *schemaprotobuf.IProtobufPropertyType_IArray:
    return typed.Value
  case schemaprotobuf.IProtobufSchema_IArray:
    return typed.Value
  default:
    return nil
  }
}

func protobufDecodeProgrammer_arrayValueName(schema schemaprotobuf.IProtobufSchema) string {
  switch typed := schema.(type) {
  case *schemaprotobuf.IProtobufPropertyType_IArray:
    if array, ok := typed.Array.(*schemametadata.MetadataArrayType); ok && array.Value != nil {
      return array.Value.GetName()
    }
  case schemaprotobuf.IProtobufSchema_IArray:
    if array, ok := typed.Array.(*schemametadata.MetadataArrayType); ok && array.Value != nil {
      return array.Value.GetName()
    }
  }
  value := protobufDecodeProgrammer_arrayValue(schema)
  if value == nil {
    return "unknown"
  }
  return protobufDecodeProgrammer_schemaType(value)
}

func protobufDecodeProgrammer_objectSchema(schema schemaprotobuf.IProtobufSchema) *schemametadata.MetadataObjectType {
  switch typed := schema.(type) {
  case *schemaprotobuf.IProtobufPropertyType_IObject:
    if object, ok := typed.Object.(*schemametadata.MetadataObjectType); ok {
      return object
    }
  case schemaprotobuf.IProtobufSchema_IObject:
    if object, ok := typed.Object.(*schemametadata.MetadataObjectType); ok {
      return object
    }
  }
  return nil
}

func protobufDecodeProgrammer_isPackedArrayValue(schema schemaprotobuf.IProtobufSchema) bool {
  typ := protobufDecodeProgrammer_schemaType(schema)
  return typ == "bool" || typ == "bigint" || typ == "number"
}

func protobufDecodeProgrammer_import_type(context nativecontext.ITypiaContext, props nativecontext.ImportProgrammer_TypeProps) *shimast.Node {
  if importer := context.Importer; importer != nil {
    return importer.Type(props)
  }
  f := nativecontext.EmitFactoryOf(protobufDecodeProgrammer_factory, context.Emit)
  if str, ok := props.Name.(string); ok {
    return f.NewTypeReferenceNode(f.NewIdentifier(str), f.NewNodeList(props.Arguments))
  }
  return props.Name.(*shimast.Node)
}

func protobufDecodeProgrammer_internal(context nativecontext.ITypiaContext, name string) *shimast.Node {
  if importer := context.Importer; importer != nil {
    return importer.Internal(name)
  }
  f := nativecontext.EmitFactoryOf(protobufDecodeProgrammer_factory, context.Emit)
  return f.NewIdentifier(name)
}

func protobufDecodeProgrammer_method_text(modulo *shimast.Node) string {
  return nativehelpers.ModuloMethodText(modulo)
}
