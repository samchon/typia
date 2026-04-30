package protobuf

import (
	"fmt"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
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
	collection := schemametadata.NewMetadataCollection()
	meta := nativefactories.ProtobufFactory.Metadata(nativefactories.ProtobufFactory_IProps{
		Method:      protobufDecodeProgrammer_method_text(props.Modulo),
		Checker:     props.Context.Checker,
		Transformer: props.Context.Transformer,
		Components:  collection,
		Type:        props.Type,
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
		})
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
	outputType := protobufDecodeProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
		File: "typia",
		Name: "Resolved",
		Arguments: []*shimast.TypeNode{
			protobufDecodeProgrammer_factory.NewTypeReferenceNode(protobufDecodeProgrammer_factory.NewIdentifier(typeName), nil),
		},
	})
	top := (*schemametadata.MetadataObjectType)(nil)
	if len(meta.Objects) != 0 {
		top = meta.Objects[0].Type
	}
	return nativeinternal.FeatureProgrammer_IDecomposed{
		Functions:  functions,
		Statements: []*shimast.Node{},
		Arrow: protobufDecodeProgrammer_factory.NewArrowFunction(
			nil,
			nil,
			protobufDecodeProgrammer_factory.NewNodeList([]*shimast.Node{
				nativefactories.IdentifierFactory.Parameter("input", protobufDecodeProgrammer_factory.NewTypeReferenceNode(protobufDecodeProgrammer_factory.NewIdentifier("Uint8Array"), nil), nil),
			}),
			outputType,
			nil,
			protobufDecodeProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			protobufDecodeProgrammer_factory.NewBlock(protobufDecodeProgrammer_factory.NewNodeList([]*shimast.Node{
				nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
					Name: "reader",
					Value: protobufDecodeProgrammer_factory.NewNewExpression(
						protobufDecodeProgrammer_internal(props.Context, "ProtobufReader"),
						nil,
						protobufDecodeProgrammer_factory.NewNodeList([]*shimast.Node{protobufDecodeProgrammer_factory.NewIdentifier("input")}),
					),
				}),
				protobufDecodeProgrammer_factory.NewReturnStatement(protobufDecodeProgrammer_decode_regular_object(struct {
					Top    bool
					Object *schemametadata.MetadataObjectType
				}{Top: true, Object: top})),
			}), true),
		),
	}
}

func (protobufDecodeProgrammerNamespace) Write(props ProtobufDecodeProgrammer_IProps) *shimast.Node {
	functor := nativehelpers.NewFunctionProgrammer(protobufDecodeProgrammer_method_text(props.Modulo))
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
	lengthAssign := protobufDecodeProgrammer_factory.NewExpressionStatement(
		protobufDecodeProgrammer_assignment(
			protobufDecodeProgrammer_factory.NewIdentifier("length"),
			shimast.KindEqualsToken,
			protobufDecodeProgrammer_factory.NewConditionalExpression(
				protobufDecodeProgrammer_lessThan(protobufDecodeProgrammer_factory.NewIdentifier("length"), nativefactories.ExpressionFactory.Number(0)),
				nil,
				protobufDecodeProgrammer_callReader("size", nil),
				nil,
				protobufDecodeProgrammer_add(protobufDecodeProgrammer_callReader("index", nil), protobufDecodeProgrammer_factory.NewIdentifier("length")),
			),
		),
	)
	body := []*shimast.Node{lengthAssign}
	body = append(body, protobufDecodeProgrammer_write_object_function_body(protobufDecodeProgrammer_objectBodyProps{
		Context:   props.Context,
		Condition: protobufDecodeProgrammer_lessThan(protobufDecodeProgrammer_callReader("index", nil), protobufDecodeProgrammer_factory.NewIdentifier("length")),
		Tag:       "tag",
		Output:    "output",
		Object:    props.Object,
	})...)
	body = append(body, protobufDecodeProgrammer_factory.NewReturnStatement(protobufDecodeProgrammer_factory.NewIdentifier("output")))
	return protobufDecodeProgrammer_factory.NewArrowFunction(
		nil,
		nil,
		protobufDecodeProgrammer_factory.NewNodeList([]*shimast.Node{
			nativefactories.IdentifierFactory.Parameter("reader", nil, nil),
			nativefactories.IdentifierFactory.Parameter("length", nativefactories.TypeFactory.Keyword("number"), nativefactories.ExpressionFactory.Number(-1)),
		}),
		nativefactories.TypeFactory.Keyword("any"),
		nil,
		protobufDecodeProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
		protobufDecodeProgrammer_factory.NewBlock(protobufDecodeProgrammer_factory.NewNodeList(body), true),
	)
}

func protobufDecodeProgrammer_write_object_function_body(props protobufDecodeProgrammer_objectBodyProps) []*shimast.Node {
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
			Accessor: nativefactories.IdentifierFactory.Access(protobufDecodeProgrammer_factory.NewIdentifier(props.Output), *literal),
			Protobuf: property.Of_protobuf_,
			Metadata: property.Value,
		})...)
	}
	clauses = append(clauses, protobufDecodeProgrammer_factory.NewCaseOrDefaultClause(
		shimast.KindDefaultClause,
		nil,
		protobufDecodeProgrammer_factory.NewNodeList([]*shimast.Node{
			protobufDecodeProgrammer_factory.NewExpressionStatement(protobufDecodeProgrammer_callReader("skipType", []*shimast.Node{
				protobufDecodeProgrammer_bitwise_and(protobufDecodeProgrammer_factory.NewIdentifier(props.Tag), nativefactories.ExpressionFactory.Number(7)),
			})),
			protobufDecodeProgrammer_factory.NewBreakStatement(nil),
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
		properties = append(properties, protobufDecodeProgrammer_factory.NewPropertyAssignment(
			nil,
			nativefactories.IdentifierFactory.Identifier(*literal),
			nil,
			nil,
			protobufDecodeProgrammer_write_property_default_value(property.Value),
		))
	}
	return []*shimast.Node{
		nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
			Name: props.Output,
			Value: protobufDecodeProgrammer_factory.NewAsExpression(
				protobufDecodeProgrammer_factory.NewObjectLiteralExpression(protobufDecodeProgrammer_factory.NewNodeList(properties), true),
				nativefactories.TypeFactory.Keyword("any"),
			),
		}),
		protobufDecodeProgrammer_factory.NewWhileStatement(
			props.Condition,
			protobufDecodeProgrammer_factory.NewBlock(protobufDecodeProgrammer_factory.NewNodeList([]*shimast.Node{
				nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
					Name:  props.Tag,
					Value: protobufDecodeProgrammer_callReader("uint32", nil),
				}),
				protobufDecodeProgrammer_factory.NewSwitchStatement(
					protobufDecodeProgrammer_unsigned_right_shift(protobufDecodeProgrammer_factory.NewIdentifier(props.Tag), nativefactories.ExpressionFactory.Number(3)),
					protobufDecodeProgrammer_factory.NewCaseBlock(protobufDecodeProgrammer_factory.NewNodeList(clauses)),
				),
			}), true),
		),
	}
}

func protobufDecodeProgrammer_write_property_default_value(value *schemametadata.MetadataSchema) *shimast.Node {
	var expression *shimast.Node
	if value.Nullable {
		expression = protobufDecodeProgrammer_factory.NewKeywordExpression(shimast.KindNullKeyword)
	} else if value.IsRequired() == false {
		expression = protobufDecodeProgrammer_factory.NewIdentifier("undefined")
	} else if len(value.Arrays) != 0 {
		expression = protobufDecodeProgrammer_factory.NewArrayLiteralExpression(nil, false)
	} else if len(value.Maps) != 0 {
		expression = protobufDecodeProgrammer_factory.NewNewExpression(protobufDecodeProgrammer_factory.NewIdentifier("Map"), nil, protobufDecodeProgrammer_factory.NewNodeList(nil))
	} else if len(value.Natives) != 0 {
		expression = protobufDecodeProgrammer_factory.NewNewExpression(
			protobufDecodeProgrammer_factory.NewIdentifier("Uint8Array"),
			nil,
			protobufDecodeProgrammer_factory.NewNodeList([]*shimast.Node{
				protobufDecodeProgrammer_factory.NewArrayLiteralExpression(nil, false),
			}),
		)
	} else if protobufDecodeProgrammer_hasStringDefault(value) {
		expression = protobufDecodeProgrammer_factory.NewStringLiteral("", shimast.TokenFlagsNone)
	} else if protobufDecodeProgrammer_hasDynamicObject(value) {
		expression = protobufDecodeProgrammer_factory.NewObjectLiteralExpression(nil, false)
	} else {
		expression = protobufDecodeProgrammer_factory.NewIdentifier("undefined")
	}
	return protobufDecodeProgrammer_factory.NewAsExpression(expression, nativefactories.TypeFactory.Keyword("any"))
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
	outExpr := func(title string, value *shimast.Node) *shimast.Node {
		return protobufDecodeProgrammer_caseClause(protobufDecodeProgrammer_indexValue(protobufDecodeProgrammer_propertyIndex(props.Schema)), title, []*shimast.Node{
			protobufDecodeProgrammer_factory.NewExpressionStatement(protobufDecodeProgrammer_assignment(props.Accessor, shimast.KindEqualsToken, value)),
		})
	}
	outStatements := func(title string, value []*shimast.Node) *shimast.Node {
		return protobufDecodeProgrammer_caseClause(protobufDecodeProgrammer_indexValue(protobufDecodeProgrammer_propertyIndex(props.Schema)), title, value)
	}
	switch schema := props.Schema.(type) {
	case *schemaprotobuf.IProtobufPropertyType_IByte:
		return outExpr("bytes", protobufDecodeProgrammer_callReader("bytes", nil))
	case *schemaprotobuf.IProtobufPropertyType_IBoolean:
		return outExpr("bool", protobufDecodeProgrammer_callReader("bool", nil))
	case *schemaprotobuf.IProtobufPropertyType_IBigint:
		return outExpr(schema.Name, protobufDecodeProgrammer_callReader(schema.Name, nil))
	case *schemaprotobuf.IProtobufPropertyType_INumber:
		return outExpr(schema.Name, protobufDecodeProgrammer_decode_number(schema))
	case *schemaprotobuf.IProtobufPropertyType_IString:
		return outExpr("string", protobufDecodeProgrammer_callReader("string", nil))
	case *schemaprotobuf.IProtobufPropertyType_IArray:
		return outStatements("Array<"+protobufDecodeProgrammer_arrayValueName(schema)+">", protobufDecodeProgrammer_decode_array(protobufDecodeProgrammer_decodeArrayProps{
			Accessor: props.Accessor,
			Schema:   schema,
			Required: props.Required,
		}))
	case *schemaprotobuf.IProtobufPropertyType_IObject:
		name := "object"
		if obj, ok := schema.Object.(*schemametadata.MetadataObjectType); ok {
			name = obj.Name
		}
		return outExpr(name, protobufDecodeProgrammer_decode_regular_object(struct {
			Top    bool
			Object *schemametadata.MetadataObjectType
		}{Top: false, Object: protobufDecodeProgrammer_objectSchema(schema)}))
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
				Initializer: protobufDecodeProgrammer_factory.NewObjectLiteralExpression(protobufDecodeProgrammer_factory.NewNodeList(nil), false),
				Setter: func() *shimast.Node {
					return protobufDecodeProgrammer_assignment(
						protobufDecodeProgrammer_factory.NewElementAccessExpression(props.Accessor, nil, protobufDecodeProgrammer_factory.NewIdentifier("entry.key"), shimast.NodeFlagsNone),
						shimast.KindEqualsToken,
						protobufDecodeProgrammer_factory.NewIdentifier("entry.value"),
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
				Initializer: protobufDecodeProgrammer_factory.NewNewExpression(
					protobufDecodeProgrammer_factory.NewIdentifier("Map"),
					protobufDecodeProgrammer_factory.NewNodeList([]*shimast.Node{nativefactories.TypeFactory.Keyword("any"), nativefactories.TypeFactory.Keyword("any")}),
					protobufDecodeProgrammer_factory.NewNodeList(nil),
				),
				Setter: func() *shimast.Node {
					return protobufDecodeProgrammer_factory.NewCallExpression(
						nativefactories.IdentifierFactory.Access(props.Accessor, "set"),
						nil,
						nil,
						protobufDecodeProgrammer_factory.NewNodeList([]*shimast.Node{
							protobufDecodeProgrammer_factory.NewIdentifier("entry.key"),
							protobufDecodeProgrammer_factory.NewIdentifier("entry.value"),
						}),
						shimast.NodeFlagsNone,
					)
				},
			}))
		}
	}
	panic("Error on ProtobufDecodeProgrammer.write(): unknown property type")
}

func protobufDecodeProgrammer_decode_number(schema schemaprotobuf.IProtobufSchema) *shimast.Node {
	name := protobufDecodeProgrammer_numberName(schema)
	value := protobufDecodeProgrammer_callReader(name, nil)
	if name == "int64" || name == "uint64" {
		return protobufDecodeProgrammer_factory.NewCallExpression(
			protobufDecodeProgrammer_factory.NewIdentifier("Number"),
			nil,
			nil,
			protobufDecodeProgrammer_factory.NewNodeList([]*shimast.Node{value}),
			shimast.NodeFlagsNone,
		)
	}
	return value
}

func protobufDecodeProgrammer_decode_array(props protobufDecodeProgrammer_decodeArrayProps) []*shimast.Node {
	statements := []*shimast.Node{}
	if props.Required == false {
		statements = append(statements, protobufDecodeProgrammer_factory.NewExpressionStatement(
			protobufDecodeProgrammer_assignment(
				props.Accessor,
				shimast.KindQuestionQuestionEqualsToken,
				protobufDecodeProgrammer_factory.NewAsExpression(
					protobufDecodeProgrammer_factory.NewArrayLiteralExpression(nil, false),
					protobufDecodeProgrammer_factory.NewTypeReferenceNode(protobufDecodeProgrammer_factory.NewIdentifier("any[]"), nil),
				),
			),
		))
	}
	value := protobufDecodeProgrammer_arrayValue(props.Schema)
	decoder := protobufDecodeProgrammer_decode_array_value(value)
	if protobufDecodeProgrammer_isPackedArrayValue(value) {
		statements = append(statements, protobufDecodeProgrammer_factory.NewIfStatement(
			protobufDecodeProgrammer_strict_equal(
				nativefactories.ExpressionFactory.Number(2),
				protobufDecodeProgrammer_bitwise_and(protobufDecodeProgrammer_factory.NewIdentifier("tag"), nativefactories.ExpressionFactory.Number(7)),
			),
			protobufDecodeProgrammer_factory.NewBlock(protobufDecodeProgrammer_factory.NewNodeList([]*shimast.Node{
				nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
					Name:  "piece",
					Value: protobufDecodeProgrammer_add(protobufDecodeProgrammer_callReader("uint32", nil), protobufDecodeProgrammer_callReader("index", nil)),
				}),
				protobufDecodeProgrammer_factory.NewWhileStatement(
					protobufDecodeProgrammer_lessThan(protobufDecodeProgrammer_callReader("index", nil), protobufDecodeProgrammer_factory.NewIdentifier("piece")),
					protobufDecodeProgrammer_factory.NewExpressionStatement(protobufDecodeProgrammer_arrayPush(props.Accessor, decoder)),
				),
			}), true),
			protobufDecodeProgrammer_factory.NewExpressionStatement(protobufDecodeProgrammer_arrayPush(props.Accessor, decoder)),
		))
	} else {
		statements = append(statements, protobufDecodeProgrammer_factory.NewExpressionStatement(protobufDecodeProgrammer_arrayPush(props.Accessor, decoder)))
	}
	return statements
}

func protobufDecodeProgrammer_decode_regular_object(props struct {
	Top    bool
	Object *schemametadata.MetadataObjectType
}) *shimast.Node {
	index := 0
	if props.Object != nil {
		index = props.Object.Index
	}
	args := []*shimast.Node{protobufDecodeProgrammer_factory.NewIdentifier("reader")}
	if props.Top == false {
		args = append(args, protobufDecodeProgrammer_callReader("uint32", nil))
	}
	return protobufDecodeProgrammer_factory.NewCallExpression(
		protobufDecodeProgrammer_factory.NewIdentifier(fmt.Sprintf("%so%d", protobufDecodeProgrammer_PREFIX, index)),
		nil,
		nil,
		protobufDecodeProgrammer_factory.NewNodeList(args),
		shimast.NodeFlagsNone,
	)
}

func protobufDecodeProgrammer_decode_map(props protobufDecodeProgrammer_decodeMapProps) []*shimast.Node {
	statements := []*shimast.Node{}
	if props.Required {
		statements = append(statements, protobufDecodeProgrammer_factory.NewExpressionStatement(
			protobufDecodeProgrammer_assignment(props.Accessor, shimast.KindQuestionQuestionEqualsToken, props.Initializer),
		))
	}
	statements = append(statements, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
		Name:  "piece",
		Value: protobufDecodeProgrammer_add(protobufDecodeProgrammer_callReader("uint32", nil), protobufDecodeProgrammer_callReader("index", nil)),
	}))
	statements = append(statements, protobufDecodeProgrammer_write_object_function_body(protobufDecodeProgrammer_objectBodyProps{
		Context:   props.Context,
		Condition: protobufDecodeProgrammer_lessThan(protobufDecodeProgrammer_callReader("index", nil), protobufDecodeProgrammer_factory.NewIdentifier("piece")),
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
	if props.Required == false {
		statements = append(statements, protobufDecodeProgrammer_factory.NewExpressionStatement(
			protobufDecodeProgrammer_assignment(props.Accessor, shimast.KindQuestionQuestionEqualsToken, props.Initializer),
		))
	}
	statements = append(statements, protobufDecodeProgrammer_factory.NewExpressionStatement(props.Setter()))
	return []*shimast.Node{
		protobufDecodeProgrammer_factory.NewExpressionStatement(nativefactories.ExpressionFactory.SelfCall(
			protobufDecodeProgrammer_factory.NewBlock(protobufDecodeProgrammer_factory.NewNodeList(statements), true),
		)),
	}
}

func protobufDecodeProgrammer_decode_array_value(schema schemaprotobuf.IProtobufSchema) *shimast.Node {
	switch protobufDecodeProgrammer_schemaType(schema) {
	case "bytes":
		return protobufDecodeProgrammer_callReader("bytes", nil)
	case "bool":
		return protobufDecodeProgrammer_callReader("bool", nil)
	case "bigint":
		return protobufDecodeProgrammer_callReader(protobufDecodeProgrammer_bigintName(schema), nil)
	case "number":
		return protobufDecodeProgrammer_decode_number(schema)
	case "string":
		return protobufDecodeProgrammer_callReader("string", nil)
	case "object":
		return protobufDecodeProgrammer_decode_regular_object(struct {
			Top    bool
			Object *schemametadata.MetadataObjectType
		}{Top: false, Object: protobufDecodeProgrammer_objectSchema(schema)})
	default:
		panic("unreachable condition")
	}
}

func protobufDecodeProgrammer_callReader(method string, args []*shimast.Node) *shimast.Node {
	return protobufDecodeProgrammer_factory.NewCallExpression(
		nativefactories.IdentifierFactory.Access(protobufDecodeProgrammer_factory.NewIdentifier("reader"), method),
		nil,
		nil,
		protobufDecodeProgrammer_factory.NewNodeList(args),
		shimast.NodeFlagsNone,
	)
}

func protobufDecodeProgrammer_caseClause(index int, title string, statements []*shimast.Node) *shimast.Node {
	body := []*shimast.Node{
		protobufDecodeProgrammer_factory.NewExpressionStatement(protobufDecodeProgrammer_factory.NewIdentifier("// " + title)),
	}
	body = append(body, statements...)
	body = append(body, protobufDecodeProgrammer_factory.NewBreakStatement(nil))
	return protobufDecodeProgrammer_factory.NewCaseOrDefaultClause(
		shimast.KindCaseClause,
		nativefactories.ExpressionFactory.Number(index),
		protobufDecodeProgrammer_factory.NewNodeList(body),
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

func protobufDecodeProgrammer_arrayPush(accessor *shimast.Node, value *shimast.Node) *shimast.Node {
	return protobufDecodeProgrammer_factory.NewCallExpression(
		nativefactories.IdentifierFactory.Access(accessor, "push"),
		nil,
		nil,
		protobufDecodeProgrammer_factory.NewNodeList([]*shimast.Node{value}),
		shimast.NodeFlagsNone,
	)
}

func protobufDecodeProgrammer_assignment(left *shimast.Node, operator shimast.Kind, right *shimast.Node) *shimast.Node {
	return protobufDecodeProgrammer_factory.NewBinaryExpression(nil, left, nil, protobufDecodeProgrammer_factory.NewToken(operator), right)
}

func protobufDecodeProgrammer_lessThan(left *shimast.Node, right *shimast.Node) *shimast.Node {
	return protobufDecodeProgrammer_factory.NewBinaryExpression(nil, left, nil, protobufDecodeProgrammer_factory.NewToken(shimast.KindLessThanToken), right)
}

func protobufDecodeProgrammer_add(left *shimast.Node, right *shimast.Node) *shimast.Node {
	return protobufDecodeProgrammer_factory.NewBinaryExpression(nil, left, nil, protobufDecodeProgrammer_factory.NewToken(shimast.KindPlusToken), right)
}

func protobufDecodeProgrammer_unsigned_right_shift(left *shimast.Node, right *shimast.Node) *shimast.Node {
	return protobufDecodeProgrammer_factory.NewBinaryExpression(nil, left, nil, protobufDecodeProgrammer_factory.NewToken(shimast.KindGreaterThanGreaterThanGreaterThanToken), right)
}

func protobufDecodeProgrammer_bitwise_and(left *shimast.Node, right *shimast.Node) *shimast.Node {
	return protobufDecodeProgrammer_factory.NewBinaryExpression(nil, left, nil, protobufDecodeProgrammer_factory.NewToken(shimast.KindAmpersandToken), right)
}

func protobufDecodeProgrammer_strict_equal(left *shimast.Node, right *shimast.Node) *shimast.Node {
	return protobufDecodeProgrammer_factory.NewBinaryExpression(nil, left, nil, protobufDecodeProgrammer_factory.NewToken(shimast.KindEqualsEqualsEqualsToken), right)
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

func protobufDecodeProgrammer_import_type(context nativecontext.ITypiaContext, props nativeprogrammers.ImportProgrammer_TypeProps) *shimast.Node {
	if importer, ok := context.Importer.(interface {
		Type(nativeprogrammers.ImportProgrammer_TypeProps) *shimast.Node
	}); ok {
		return importer.Type(props)
	}
	if str, ok := props.Name.(string); ok {
		return protobufDecodeProgrammer_factory.NewTypeReferenceNode(protobufDecodeProgrammer_factory.NewIdentifier(str), protobufDecodeProgrammer_factory.NewNodeList(props.Arguments))
	}
	return props.Name.(*shimast.Node)
}

func protobufDecodeProgrammer_internal(context nativecontext.ITypiaContext, name string) *shimast.Node {
	if importer, ok := context.Importer.(interface {
		Internal(string) *shimast.Node
	}); ok {
		return importer.Internal(name)
	}
	return protobufDecodeProgrammer_factory.NewIdentifier(name)
}

func protobufDecodeProgrammer_method_text(modulo *shimast.Node) string {
	if modulo == nil {
		return ""
	}
	return modulo.Text()
}
