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
	nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
	schemaprotobuf "github.com/samchon/typia/packages/typia/native/core/schemas/protobuf"
)

type protobufEncodeProgrammerNamespace struct{}

var ProtobufEncodeProgrammer = protobufEncodeProgrammerNamespace{}

type ProtobufEncodeProgrammer_IProps struct {
	Context nativecontext.ITypiaContext
	Modulo  *shimast.Node
	Type    *shimchecker.Type
	Name    *string
	Init    *shimast.Node
}

type ProtobufEncodeProgrammer_DecomposeProps struct {
	Context nativecontext.ITypiaContext
	Modulo  *shimast.Node
	Functor *nativehelpers.FunctionProgrammer
	Type    *shimchecker.Type
	Name    *string
}

type protobufEncodeProgrammer_IUnion struct {
	Is    func() *shimast.Node
	Value func() *shimast.Node
}

const protobufEncodeProgrammer_PREFIX = "_pe"

var protobufEncodeProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (protobufEncodeProgrammerNamespace) Decompose(props ProtobufEncodeProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
	collection := schemametadata.NewMetadataCollection()
	metadata := nativefactories.ProtobufFactory.Metadata(nativefactories.ProtobufFactory_IProps{
		Method:      protobufEncodeProgrammer_method_text(props.Modulo),
		Checker:     props.Context.Checker,
		Transformer: props.Context.Transformer,
		Components:  collection,
		Type:        props.Type,
	})

	callEncoder := func(writer string, factory *shimast.Node) *shimast.Node {
		return nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
			Name: writer,
			Value: protobufEncodeProgrammer_factory.NewCallExpression(
				protobufEncodeProgrammer_factory.NewIdentifier("encoder"),
				nil,
				nil,
				protobufEncodeProgrammer_factory.NewNodeList([]*shimast.Node{
					factory,
					protobufEncodeProgrammer_factory.NewIdentifier("input"),
				}),
				shimast.NodeFlagsNone,
			),
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
	return nativeinternal.FeatureProgrammer_IDecomposed{
		Functions: map[string]*shimast.Node{
			"encoder": nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
				Name: props.Functor.UseLocal("encoder"),
				Value: protobufEncodeProgrammer_write_encoder(protobufEncodeProgrammer_writeEncoderProps{
					Context:    props.Context,
					Functor:    props.Functor,
					Collection: collection,
					Metadata:   metadata,
				}),
			}),
		},
		Statements: []*shimast.Node{},
		Arrow: protobufEncodeProgrammer_factory.NewArrowFunction(
			nil,
			nil,
			protobufEncodeProgrammer_factory.NewNodeList([]*shimast.Node{
				nativefactories.IdentifierFactory.Parameter("input", protobufEncodeProgrammer_factory.NewTypeReferenceNode(protobufEncodeProgrammer_factory.NewIdentifier(typeName), nil), nil),
			}),
			protobufEncodeProgrammer_factory.NewTypeReferenceNode(protobufEncodeProgrammer_factory.NewIdentifier("Uint8Array"), nil),
			nil,
			protobufEncodeProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			protobufEncodeProgrammer_factory.NewBlock(protobufEncodeProgrammer_factory.NewNodeList([]*shimast.Node{
				callEncoder("sizer", protobufEncodeProgrammer_factory.NewNewExpression(protobufEncodeProgrammer_internal(props.Context, "ProtobufSizer"), nil, protobufEncodeProgrammer_factory.NewNodeList(nil))),
				callEncoder("writer", protobufEncodeProgrammer_factory.NewNewExpression(
					protobufEncodeProgrammer_internal(props.Context, "ProtobufWriter"),
					nil,
					protobufEncodeProgrammer_factory.NewNodeList([]*shimast.Node{
						protobufEncodeProgrammer_factory.NewIdentifier("sizer"),
					}),
				)),
				protobufEncodeProgrammer_factory.NewReturnStatement(protobufEncodeProgrammer_callWriter("buffer", nil)),
			}), true),
		),
	}
}

func (protobufEncodeProgrammerNamespace) Write(props ProtobufEncodeProgrammer_IProps) *shimast.Node {
	functor := nativehelpers.NewFunctionProgrammer(protobufEncodeProgrammer_method_text(props.Modulo))
	result := ProtobufEncodeProgrammer.Decompose(ProtobufEncodeProgrammer_DecomposeProps{
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

type protobufEncodeProgrammer_writeEncoderProps struct {
	Context    nativecontext.ITypiaContext
	Functor    *nativehelpers.FunctionProgrammer
	Collection *schemametadata.MetadataCollection
	Metadata   *schemametadata.MetadataSchema
}

func protobufEncodeProgrammer_write_encoder(props protobufEncodeProgrammer_writeEncoderProps) *shimast.Node {
	functors := []*shimast.Node{}
	for _, object := range props.Collection.Objects() {
		if nativehelpers.ProtobufUtil.IsStaticObject(object) == false {
			continue
		}
		functors = append(functors, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
			Name: fmt.Sprintf("%so%d", protobufEncodeProgrammer_PREFIX, object.Index),
			Value: protobufEncodeProgrammer_write_object_function(protobufEncodeProgrammer_writeObjectFunctionProps{
				Context: props.Context,
				Functor: props.Functor,
				Input:   protobufEncodeProgrammer_factory.NewIdentifier("input"),
				Object:  object,
				Explore: nativeinternal.FeatureProgrammer_IExplore{
					Source:   "function",
					From:     "object",
					Tracable: false,
					Postfix:  "",
				},
			}),
		}))
	}
	statements := []*shimast.Node{}
	statements = append(statements, props.Functor.DeclareUnions()...)
	statements = append(statements, functors...)
	statements = append(statements, nativeprogrammers.IsProgrammer.Write_function_statements(nativeprogrammers.IsProgrammer_WriteFunctionStatementsProps{
		Context:    props.Context,
		Functor:    props.Functor,
		Collection: props.Collection,
	})...)
	index := 0
	if len(props.Metadata.Objects) != 0 {
		index = props.Metadata.Objects[0].Type.Index
	}
	statements = append(statements,
		protobufEncodeProgrammer_factory.NewExpressionStatement(
			protobufEncodeProgrammer_factory.NewCallExpression(
				protobufEncodeProgrammer_factory.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%so%d", protobufEncodeProgrammer_PREFIX, index))),
				nil,
				nil,
				protobufEncodeProgrammer_factory.NewNodeList([]*shimast.Node{
					protobufEncodeProgrammer_factory.NewIdentifier("input"),
				}),
				shimast.NodeFlagsNone,
			),
		),
		protobufEncodeProgrammer_factory.NewReturnStatement(protobufEncodeProgrammer_factory.NewIdentifier("writer")),
	)
	return protobufEncodeProgrammer_factory.NewArrowFunction(
		nil,
		protobufEncodeProgrammer_factory.NewNodeList([]*shimast.Node{
			protobufEncodeProgrammer_factory.NewTypeParameterDeclaration(
				nil,
				protobufEncodeProgrammer_factory.NewIdentifier("Writer"),
				protobufEncodeProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
					File: "typia/lib/internal/_IProtobufWriter",
					Name: "_IProtobufWriter",
				}),
				nil,
				nil,
			),
		}),
		protobufEncodeProgrammer_factory.NewNodeList([]*shimast.Node{
			nativefactories.IdentifierFactory.Parameter("writer", protobufEncodeProgrammer_factory.NewTypeReferenceNode(protobufEncodeProgrammer_factory.NewIdentifier("Writer"), nil), nil),
			nativefactories.IdentifierFactory.Parameter("input", nil, nil),
		}),
		protobufEncodeProgrammer_factory.NewTypeReferenceNode(protobufEncodeProgrammer_factory.NewIdentifier("Writer"), nil),
		nil,
		protobufEncodeProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
		protobufEncodeProgrammer_factory.NewBlock(protobufEncodeProgrammer_factory.NewNodeList(statements), true),
	)
}

type protobufEncodeProgrammer_writeObjectFunctionProps struct {
	Context nativecontext.ITypiaContext
	Functor *nativehelpers.FunctionProgrammer
	Input   *shimast.Node
	Object  *schemametadata.MetadataObjectType
	Explore nativeinternal.FeatureProgrammer_IExplore
}

func protobufEncodeProgrammer_write_object_function(props protobufEncodeProgrammer_writeObjectFunctionProps) *shimast.Node {
	body := []*shimast.Node{}
	for _, property := range props.Object.Properties {
		if property.Of_protobuf_ == nil {
			nativefactories.ProtobufFactory.EmplaceObject(props.Object)
		}
		literal := property.Key.GetSoleLiteral()
		key := ""
		if literal != nil {
			key = *literal
		}
		block := protobufEncodeProgrammer_decode_property(protobufEncodeProgrammer_decodePropertyProps{
			Context:  props.Context,
			Functor:  props.Functor,
			Explore:  props.Explore,
			Metadata: property.Value,
			Protobuf: property.Of_protobuf_,
			Input:    nativefactories.IdentifierFactory.Access(props.Input, key),
		})
		body = append(body, protobufEncodeProgrammer_factory.NewExpressionStatement(
			protobufEncodeProgrammer_factory.NewIdentifier("// property "+fmt.Sprintf("%q", key)+": "+property.Value.GetName()),
		))
		body = append(body, block.Statements()...)
	}
	return protobufEncodeProgrammer_factory.NewArrowFunction(
		nil,
		nil,
		protobufEncodeProgrammer_factory.NewNodeList([]*shimast.Node{
			nativefactories.IdentifierFactory.Parameter("input", nil, nil),
		}),
		nativefactories.TypeFactory.Keyword("any"),
		nil,
		protobufEncodeProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
		protobufEncodeProgrammer_factory.NewBlock(protobufEncodeProgrammer_factory.NewNodeList(body), true),
	)
}

type protobufEncodeProgrammer_decodePropertyProps struct {
	Context  nativecontext.ITypiaContext
	Functor  *nativehelpers.FunctionProgrammer
	Metadata *schemametadata.MetadataSchema
	Protobuf *schemaprotobuf.IProtobufProperty
	Input    *shimast.Node
	Explore  nativeinternal.FeatureProgrammer_IExplore
}

func protobufEncodeProgrammer_decode_property(props protobufEncodeProgrammer_decodePropertyProps) *shimast.Node {
	union := []protobufEncodeProgrammer_IUnion{}
	for _, schema := range props.Protobuf.Union {
		switch typed := schema.(type) {
		case *schemaprotobuf.IProtobufPropertyType_IBoolean:
			index := typed.Index
			union = append(union, protobufEncodeProgrammer_IUnion{
				Is: func() *shimast.Node {
					return protobufEncodeProgrammer_strict_equal(
						protobufEncodeProgrammer_factory.NewStringLiteral("boolean", shimast.TokenFlagsNone),
						protobufEncodeProgrammer_factory.NewTypeOfExpression(props.Input),
					)
				},
				Value: func() *shimast.Node {
					return protobufEncodeProgrammer_decode_bool(struct {
						Input *shimast.Node
						Index *int
					}{Input: props.Input, Index: index})
				},
			})
		case *schemaprotobuf.IProtobufPropertyType_IBigint:
			union = append(union, protobufEncodeProgrammer_decode_bigint(struct {
				Candidates []string
				Type       string
				Input      *shimast.Node
				Index      *int
			}{
				Input:      props.Input,
				Type:       typed.Name,
				Candidates: protobufEncodeProgrammer_bigintCandidates(props.Protobuf.Union),
				Index:      typed.Index,
			}))
		case *schemaprotobuf.IProtobufPropertyType_INumber:
			union = append(union, protobufEncodeProgrammer_decode_number(struct {
				Candidates []string
				Type       string
				Input      *shimast.Node
				Index      *int
			}{
				Input:      props.Input,
				Type:       typed.Name,
				Candidates: protobufEncodeProgrammer_numberCandidates(props.Protobuf.Union),
				Index:      typed.Index,
			}))
		case *schemaprotobuf.IProtobufPropertyType_IString:
			index := typed.Index
			union = append(union, protobufEncodeProgrammer_IUnion{
				Is: func() *shimast.Node {
					return protobufEncodeProgrammer_strict_equal(
						protobufEncodeProgrammer_factory.NewStringLiteral("string", shimast.TokenFlagsNone),
						protobufEncodeProgrammer_factory.NewTypeOfExpression(props.Input),
					)
				},
				Value: func() *shimast.Node {
					return protobufEncodeProgrammer_decode_bytes(struct {
						Method string
						Index  int
						Input  *shimast.Node
					}{Method: "string", Index: protobufEncodeProgrammer_indexValue(index), Input: props.Input})
				},
			})
		case *schemaprotobuf.IProtobufPropertyType_IByte:
			index := typed.Index
			union = append(union, protobufEncodeProgrammer_IUnion{
				Is: func() *shimast.Node {
					return nativefactories.ExpressionFactory.IsInstanceOf("Uint8Array", props.Input)
				},
				Value: func() *shimast.Node {
					return protobufEncodeProgrammer_decode_bytes(struct {
						Method string
						Index  int
						Input  *shimast.Node
					}{Method: "bytes", Index: protobufEncodeProgrammer_indexValue(index), Input: props.Input})
				},
			})
		case *schemaprotobuf.IProtobufPropertyType_IArray:
			array := typed
			union = append(union, protobufEncodeProgrammer_IUnion{
				Is: func() *shimast.Node {
					return nativefactories.ExpressionFactory.IsArray(props.Input)
				},
				Value: func() *shimast.Node {
					return protobufEncodeProgrammer_decode_array(protobufEncodeProgrammer_decodeArrayProps{
						Context: props.Context,
						Functor: props.Functor,
						Input:   props.Input,
						Schema:  array,
					})
				},
			})
		case *schemaprotobuf.IProtobufPropertyType_IMap:
			if _, ok := typed.Map.(*schemametadata.MetadataMap); ok {
				mapSchema := typed
				union = append(union, protobufEncodeProgrammer_IUnion{
					Is: func() *shimast.Node {
						return nativefactories.ExpressionFactory.IsInstanceOf("Map", props.Input)
					},
					Value: func() *shimast.Node {
						return protobufEncodeProgrammer_decode_map(protobufEncodeProgrammer_decodeMapProps{
							Context: props.Context,
							Functor: props.Functor,
							Schema:  mapSchema,
							Input:   props.Input,
						})
					},
				})
			}
		}
		objectSchemas := protobufEncodeProgrammer_objectSchemas(props.Protobuf.Union)
		if len(objectSchemas) != 0 {
			schemas := objectSchemas
			union = append(union, protobufEncodeProgrammer_IUnion{
				Is: func() *shimast.Node {
					return nativefactories.ExpressionFactory.IsObject(nativefactories.ExpressionFactory_IsObjectProps{
						CheckNull:  true,
						CheckArray: false,
						Input:      props.Input,
					})
				},
				Value: func() *shimast.Node {
					explore := props.Explore
					explore.From = "object"
					return protobufEncodeProgrammer_explore_objects(protobufEncodeProgrammer_exploreObjectsProps{
						Context: props.Context,
						Functor: props.Functor,
						Level:   0,
						Schemas: schemas,
						Explore: explore,
						Input:   props.Input,
					})
				},
			})
		}
	}

	wrapper := func(block *shimast.Node) *shimast.Node { return block }
	required := props.Metadata.IsRequired()
	if required && props.Metadata.Nullable == false {
		wrapper = func(block *shimast.Node) *shimast.Node { return block }
	} else if required == false && props.Metadata.Nullable {
		wrapper = func(block *shimast.Node) *shimast.Node {
			return protobufEncodeProgrammer_factory.NewBlock(protobufEncodeProgrammer_factory.NewNodeList([]*shimast.Node{
				protobufEncodeProgrammer_factory.NewIfStatement(
					protobufEncodeProgrammer_logical_and(
						protobufEncodeProgrammer_strict_not_equal(protobufEncodeProgrammer_factory.NewIdentifier("undefined"), props.Input),
						protobufEncodeProgrammer_strict_not_equal(protobufEncodeProgrammer_factory.NewKeywordExpression(shimast.KindNullKeyword), props.Input),
					),
					block,
					nil,
				),
			}), true)
		}
	} else if required == false {
		wrapper = func(block *shimast.Node) *shimast.Node {
			return protobufEncodeProgrammer_factory.NewBlock(protobufEncodeProgrammer_factory.NewNodeList([]*shimast.Node{
				protobufEncodeProgrammer_factory.NewIfStatement(
					protobufEncodeProgrammer_strict_not_equal(protobufEncodeProgrammer_factory.NewIdentifier("undefined"), props.Input),
					block,
					nil,
				),
			}), true)
		}
	} else {
		wrapper = func(block *shimast.Node) *shimast.Node {
			return protobufEncodeProgrammer_factory.NewBlock(protobufEncodeProgrammer_factory.NewNodeList([]*shimast.Node{
				protobufEncodeProgrammer_factory.NewIfStatement(
					protobufEncodeProgrammer_strict_not_equal(protobufEncodeProgrammer_factory.NewKeywordExpression(shimast.KindNullKeyword), props.Input),
					block,
					nil,
				),
			}), true)
		}
	}
	if len(union) == 0 {
		return wrapper(protobufEncodeProgrammer_factory.NewBlock(protobufEncodeProgrammer_factory.NewNodeList(nil), true))
	}
	if len(union) == 1 {
		return wrapper(union[0].Value())
	}
	condition := protobufEncodeProgrammer_chainUnion(union, props.Context, props.Functor, props.Input, props.Metadata.GetName())
	return wrapper(protobufEncodeProgrammer_factory.NewBlock(protobufEncodeProgrammer_factory.NewNodeList([]*shimast.Node{condition}), true))
}

func protobufEncodeProgrammer_decode_bool(props struct {
	Input *shimast.Node
	Index *int
}) *shimast.Node {
	expressions := []*shimast.Node{}
	if props.Index != nil {
		expressions = append(expressions, protobufEncodeProgrammer_decode_tag(struct {
			Wire  nativehelpers.ProtobufWire
			Index int
		}{Wire: nativehelpers.VARIANT, Index: *props.Index}))
	}
	expressions = append(expressions, protobufEncodeProgrammer_callWriter("bool", []*shimast.Node{props.Input}))
	return protobufEncodeProgrammer_expressionBlock(expressions)
}

func protobufEncodeProgrammer_decode_bigint(props struct {
	Candidates []string
	Type       string
	Input      *shimast.Node
	Index      *int
}) protobufEncodeProgrammer_IUnion {
	return protobufEncodeProgrammer_IUnion{
		Is: func() *shimast.Node {
			typeof := protobufEncodeProgrammer_strict_equal(
				protobufEncodeProgrammer_factory.NewStringLiteral("bigint", shimast.TokenFlagsNone),
				protobufEncodeProgrammer_factory.NewTypeOfExpression(props.Input),
			)
			if len(props.Candidates) == 1 {
				return typeof
			}
			return protobufEncodeProgrammer_logical_and(typeof, nativefactories.NumericRangeFactory.Bigint(props.Type, props.Input))
		},
		Value: func() *shimast.Node {
			expressions := []*shimast.Node{}
			if props.Index != nil {
				expressions = append(expressions, protobufEncodeProgrammer_decode_tag(struct {
					Wire  nativehelpers.ProtobufWire
					Index int
				}{Wire: nativehelpers.VARIANT, Index: *props.Index}))
			}
			expressions = append(expressions, protobufEncodeProgrammer_callWriter(props.Type, []*shimast.Node{props.Input}))
			return protobufEncodeProgrammer_expressionBlock(expressions)
		},
	}
}

func protobufEncodeProgrammer_decode_number(props struct {
	Candidates []string
	Type       string
	Input      *shimast.Node
	Index      *int
}) protobufEncodeProgrammer_IUnion {
	return protobufEncodeProgrammer_IUnion{
		Is: func() *shimast.Node {
			typeof := protobufEncodeProgrammer_strict_equal(
				protobufEncodeProgrammer_factory.NewStringLiteral("number", shimast.TokenFlagsNone),
				protobufEncodeProgrammer_factory.NewTypeOfExpression(props.Input),
			)
			if len(props.Candidates) == 1 {
				return typeof
			}
			return protobufEncodeProgrammer_logical_and(typeof, nativefactories.NumericRangeFactory.Number(props.Type, props.Input))
		},
		Value: func() *shimast.Node {
			expressions := []*shimast.Node{}
			if props.Index != nil {
				expressions = append(expressions, protobufEncodeProgrammer_decode_tag(struct {
					Wire  nativehelpers.ProtobufWire
					Index int
				}{Wire: protobufEncodeProgrammer_get_numeric_wire(props.Type), Index: *props.Index}))
			}
			expressions = append(expressions, protobufEncodeProgrammer_callWriter(props.Type, []*shimast.Node{props.Input}))
			return protobufEncodeProgrammer_expressionBlock(expressions)
		},
	}
}

func protobufEncodeProgrammer_decode_container_value(props struct {
	Context nativecontext.ITypiaContext
	Functor *nativehelpers.FunctionProgrammer
	Schema  schemaprotobuf.IProtobufSchema
	Index   int
	Kind    string
	Input   *shimast.Node
}) *shimast.Node {
	switch schema := props.Schema.(type) {
	case *schemaprotobuf.IProtobufPropertyType_IBoolean:
		return protobufEncodeProgrammer_decode_bool(struct {
			Input *shimast.Node
			Index *int
		}{Input: props.Input, Index: protobufEncodeProgrammer_containerIndex(props.Kind, props.Index)})
	case schemaprotobuf.IProtobufSchema_IBoolean:
		return protobufEncodeProgrammer_decode_bool(struct {
			Input *shimast.Node
			Index *int
		}{Input: props.Input, Index: protobufEncodeProgrammer_containerIndex(props.Kind, props.Index)})
	case *schemaprotobuf.IProtobufPropertyType_IBigint:
		return protobufEncodeProgrammer_decode_bigint(struct {
			Candidates []string
			Type       string
			Input      *shimast.Node
			Index      *int
		}{Input: props.Input, Type: schema.Name, Candidates: []string{schema.Name}, Index: protobufEncodeProgrammer_containerIndex(props.Kind, props.Index)}).Value()
	case schemaprotobuf.IProtobufSchema_IBigint:
		return protobufEncodeProgrammer_decode_bigint(struct {
			Candidates []string
			Type       string
			Input      *shimast.Node
			Index      *int
		}{Input: props.Input, Type: schema.Name, Candidates: []string{schema.Name}, Index: protobufEncodeProgrammer_containerIndex(props.Kind, props.Index)}).Value()
	case *schemaprotobuf.IProtobufPropertyType_INumber:
		return protobufEncodeProgrammer_decode_number(struct {
			Candidates []string
			Type       string
			Input      *shimast.Node
			Index      *int
		}{Input: props.Input, Type: schema.Name, Candidates: []string{schema.Name}, Index: protobufEncodeProgrammer_containerIndex(props.Kind, props.Index)}).Value()
	case schemaprotobuf.IProtobufSchema_INumber:
		return protobufEncodeProgrammer_decode_number(struct {
			Candidates []string
			Type       string
			Input      *shimast.Node
			Index      *int
		}{Input: props.Input, Type: schema.Name, Candidates: []string{schema.Name}, Index: protobufEncodeProgrammer_containerIndex(props.Kind, props.Index)}).Value()
	}
	if protobufEncodeProgrammer_schemaType(props.Schema) == "string" || protobufEncodeProgrammer_schemaType(props.Schema) == "bytes" {
		return protobufEncodeProgrammer_decode_bytes(struct {
			Method string
			Index  int
			Input  *shimast.Node
		}{Method: protobufEncodeProgrammer_schemaType(props.Schema), Input: props.Input, Index: props.Index})
	}
	return protobufEncodeProgrammer_decode_object(protobufEncodeProgrammer_decodeObjectProps{
		Context: props.Context,
		Functor: props.Functor,
		Schema:  props.Schema,
		Input:   props.Input,
		Index:   props.Index,
	})
}

func protobufEncodeProgrammer_decode_bytes(props struct {
	Method string
	Index  int
	Input  *shimast.Node
}) *shimast.Node {
	return protobufEncodeProgrammer_expressionBlock([]*shimast.Node{
		protobufEncodeProgrammer_decode_tag(struct {
			Wire  nativehelpers.ProtobufWire
			Index int
		}{Wire: nativehelpers.LEN, Index: props.Index}),
		protobufEncodeProgrammer_callWriter(props.Method, []*shimast.Node{props.Input}),
	})
}

type protobufEncodeProgrammer_decodeArrayProps struct {
	Context nativecontext.ITypiaContext
	Functor *nativehelpers.FunctionProgrammer
	Schema  *schemaprotobuf.IProtobufPropertyType_IArray
	Input   *shimast.Node
}

func protobufEncodeProgrammer_decode_array(props protobufEncodeProgrammer_decodeArrayProps) *shimast.Node {
	value := props.Schema.Value
	wire := nativehelpers.VARIANT
	if protobufEncodeProgrammer_schemaType(value) == "object" || protobufEncodeProgrammer_schemaType(value) == "bytes" || protobufEncodeProgrammer_schemaType(value) == "string" {
		wire = nativehelpers.LEN
	} else if number, ok := protobufEncodeProgrammer_numberSchema(value); ok && number == "float" {
		wire = nativehelpers.I32
	}
	forLoop := func() *shimast.Node {
		return protobufEncodeProgrammer_factory.NewForInOrOfStatement(
			shimast.KindForOfStatement,
			nil,
			protobufEncodeProgrammer_factory.NewVariableDeclarationList(
				protobufEncodeProgrammer_factory.NewNodeList([]*shimast.Node{
					protobufEncodeProgrammer_factory.NewVariableDeclaration(protobufEncodeProgrammer_factory.NewIdentifier("elem"), nil, nil, nil),
				}),
				shimast.NodeFlagsConst,
			),
			props.Input,
			protobufEncodeProgrammer_decode_container_value(struct {
				Context nativecontext.ITypiaContext
				Functor *nativehelpers.FunctionProgrammer
				Schema  schemaprotobuf.IProtobufSchema
				Index   int
				Kind    string
				Input   *shimast.Node
			}{
				Kind:    "array",
				Context: props.Context,
				Functor: props.Functor,
				Input:   protobufEncodeProgrammer_factory.NewIdentifier("elem"),
				Index:   protobufEncodeProgrammer_indexValue(props.Schema.Index),
				Schema:  props.Schema.Value,
			}),
		)
	}
	length := func(block *shimast.Node) *shimast.Node {
		return protobufEncodeProgrammer_factory.NewBlock(protobufEncodeProgrammer_factory.NewNodeList([]*shimast.Node{
			protobufEncodeProgrammer_factory.NewIfStatement(
				protobufEncodeProgrammer_strict_not_equal(
					nativefactories.ExpressionFactory.Number(0),
					nativefactories.IdentifierFactory.Access(props.Input, "length"),
				),
				block,
				nil,
			),
		}), true)
	}
	if wire == nativehelpers.LEN {
		return length(protobufEncodeProgrammer_factory.NewBlock(protobufEncodeProgrammer_factory.NewNodeList([]*shimast.Node{forLoop()}), true))
	}
	return length(protobufEncodeProgrammer_factory.NewBlock(protobufEncodeProgrammer_factory.NewNodeList([]*shimast.Node{
		protobufEncodeProgrammer_factory.NewExpressionStatement(protobufEncodeProgrammer_decode_tag(struct {
			Wire  nativehelpers.ProtobufWire
			Index int
		}{Wire: nativehelpers.LEN, Index: protobufEncodeProgrammer_indexValue(props.Schema.Index)})),
		protobufEncodeProgrammer_factory.NewExpressionStatement(protobufEncodeProgrammer_callWriter("fork", nil)),
		forLoop(),
		protobufEncodeProgrammer_factory.NewExpressionStatement(protobufEncodeProgrammer_callWriter("ldelim", nil)),
	}), true))
}

type protobufEncodeProgrammer_decodeObjectProps struct {
	Context nativecontext.ITypiaContext
	Functor *nativehelpers.FunctionProgrammer
	Schema  schemaprotobuf.IProtobufSchema
	Index   int
	Input   *shimast.Node
}

func protobufEncodeProgrammer_decode_object(props protobufEncodeProgrammer_decodeObjectProps) *shimast.Node {
	object := protobufEncodeProgrammer_objectSchema(props.Schema)
	objectIndex := 0
	if object != nil {
		objectIndex = object.Index
	}
	return protobufEncodeProgrammer_expressionBlock([]*shimast.Node{
		protobufEncodeProgrammer_decode_tag(struct {
			Wire  nativehelpers.ProtobufWire
			Index int
		}{Wire: nativehelpers.LEN, Index: props.Index}),
		protobufEncodeProgrammer_callWriter("fork", nil),
		protobufEncodeProgrammer_factory.NewCallExpression(
			protobufEncodeProgrammer_factory.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%so%d", protobufEncodeProgrammer_PREFIX, objectIndex))),
			nil,
			nil,
			protobufEncodeProgrammer_factory.NewNodeList([]*shimast.Node{props.Input}),
			shimast.NodeFlagsNone,
		),
		protobufEncodeProgrammer_callWriter("ldelim", nil),
	})
}

type protobufEncodeProgrammer_decodeMapProps struct {
	Context nativecontext.ITypiaContext
	Functor *nativehelpers.FunctionProgrammer
	Schema  *schemaprotobuf.IProtobufPropertyType_IMap
	Input   *shimast.Node
}

func protobufEncodeProgrammer_decode_map(props protobufEncodeProgrammer_decodeMapProps) *shimast.Node {
	each := []*shimast.Node{
		protobufEncodeProgrammer_factory.NewExpressionStatement(protobufEncodeProgrammer_decode_tag(struct {
			Wire  nativehelpers.ProtobufWire
			Index int
		}{Wire: nativehelpers.LEN, Index: protobufEncodeProgrammer_indexValue(props.Schema.Index)})),
		protobufEncodeProgrammer_factory.NewExpressionStatement(protobufEncodeProgrammer_callWriter("fork", nil)),
	}
	keyBlock := protobufEncodeProgrammer_decode_container_value(struct {
		Context nativecontext.ITypiaContext
		Functor *nativehelpers.FunctionProgrammer
		Schema  schemaprotobuf.IProtobufSchema
		Index   int
		Kind    string
		Input   *shimast.Node
	}{Kind: "map", Context: props.Context, Functor: props.Functor, Index: 1, Input: protobufEncodeProgrammer_factory.NewIdentifier("key"), Schema: props.Schema.Key})
	valueBlock := protobufEncodeProgrammer_decode_container_value(struct {
		Context nativecontext.ITypiaContext
		Functor *nativehelpers.FunctionProgrammer
		Schema  schemaprotobuf.IProtobufSchema
		Index   int
		Kind    string
		Input   *shimast.Node
	}{Kind: "map", Context: props.Context, Functor: props.Functor, Index: 2, Input: protobufEncodeProgrammer_factory.NewIdentifier("value"), Schema: props.Schema.Value})
	each = append(each, keyBlock.Statements()...)
	each = append(each, valueBlock.Statements()...)
	each = append(each, protobufEncodeProgrammer_factory.NewExpressionStatement(protobufEncodeProgrammer_callWriter("ldelim", nil)))
	return protobufEncodeProgrammer_factory.NewBlock(protobufEncodeProgrammer_factory.NewNodeList([]*shimast.Node{
		protobufEncodeProgrammer_factory.NewForInOrOfStatement(
			shimast.KindForOfStatement,
			nil,
			nativefactories.StatementFactory.Entry(nativefactories.StatementFactory_EntryProps{Key: "key", Value: "value"}),
			props.Input,
			protobufEncodeProgrammer_factory.NewBlock(protobufEncodeProgrammer_factory.NewNodeList(each), true),
		),
	}), true)
}

type protobufEncodeProgrammer_exploreObjectsProps struct {
	Context nativecontext.ITypiaContext
	Functor *nativehelpers.FunctionProgrammer
	Level   int
	Input   *shimast.Node
	Schemas []schemaprotobuf.IProtobufPropertyType
	Explore nativeinternal.FeatureProgrammer_IExplore
}

func protobufEncodeProgrammer_explore_objects(props protobufEncodeProgrammer_exploreObjectsProps) *shimast.Node {
	out := func(schema schemaprotobuf.IProtobufPropertyType) *shimast.Node {
		if protobufEncodeProgrammer_schemaType(schema) == "object" {
			return protobufEncodeProgrammer_decode_object(protobufEncodeProgrammer_decodeObjectProps{
				Context: props.Context,
				Functor: props.Functor,
				Schema:  schema,
				Index:   protobufEncodeProgrammer_indexValue(protobufEncodeProgrammer_propertyIndex(schema)),
				Input:   props.Input,
			})
		}
		mapSchema, _ := schema.(*schemaprotobuf.IProtobufPropertyType_IMap)
		return protobufEncodeProgrammer_decode_map(protobufEncodeProgrammer_decodeMapProps{
			Context: props.Context,
			Functor: props.Functor,
			Schema:  mapSchema,
			Input: protobufEncodeProgrammer_factory.NewCallExpression(
				nativefactories.IdentifierFactory.Access(protobufEncodeProgrammer_factory.NewIdentifier("Object"), "entries"),
				nil,
				nil,
				protobufEncodeProgrammer_factory.NewNodeList([]*shimast.Node{props.Input}),
				shimast.NodeFlagsNone,
			),
		})
	}
	if len(props.Schemas) == 1 {
		return out(props.Schemas[0])
	}

	objects := []*schemametadata.MetadataObjectType{}
	indexes := map[*schemametadata.MetadataObjectType]schemaprotobuf.IProtobufPropertyType{}
	for _, schema := range props.Schemas {
		object := protobufEncodeProgrammer_objectSchema(schema)
		if object == nil {
			continue
		}
		objects = append(objects, object)
		indexes[object] = schema
	}
	specifications := nativehelpers.UnionPredicator.Object(objects)
	if len(specifications) == 0 {
		condition := nativeiterate.Decode_union_object(nativeiterate.Decode_union_objectProps{
			Checker: func(v nativeiterate.Decode_union_object_next) *shimast.Node {
				return nativeprogrammers.IsProgrammer.Decode_object(nativeprogrammers.IsProgrammer_DecodeObjectProps{
					Context: props.Context,
					Functor: props.Functor,
					Object:  v.Object,
					Input:   v.Input,
					Explore: protobufEncodeProgrammer_feature_explore(v.Explore),
				})
			},
			Decoder: func(v nativeiterate.Decode_union_object_next) *shimast.Node {
				return nativefactories.ExpressionFactory.SelfCall(out(indexes[v.Object]))
			},
			Success: func(expr *shimast.Expression) *shimast.Node {
				return expr
			},
			Escaper: func(v nativeiterate.Decode_union_object_escape) *shimast.Node {
				return protobufEncodeProgrammer_create_throw_error(protobufEncodeProgrammer_throwProps{
					Context:  props.Context,
					Functor:  props.Functor,
					Expected: v.Expected,
					Input:    v.Input,
				})
			},
			Input:   props.Input,
			Explore: props.Explore,
			Objects: objects,
		})
		return nativefactories.StatementFactory.Block(condition)
	}

	remained := []*schemametadata.MetadataObjectType{}
	for _, object := range objects {
		found := false
		for _, spec := range specifications {
			if spec.Object == object {
				found = true
				break
			}
		}
		if found == false {
			remained = append(remained, object)
		}
	}
	expected := "("
	for i, object := range objects {
		if i != 0 {
			expected += " | "
		}
		expected += object.Name
	}
	expected += ")"

	statements := []*shimast.Node{}
	for i := len(specifications) - 1; i >= 0; i-- {
		spec := specifications[i]
		key := spec.Property.Key.GetSoleLiteral()
		if key == nil {
			continue
		}
		accessor := nativefactories.IdentifierFactory.Access(props.Input, *key)
		var pred *shimast.Node
		if spec.Neighbor {
			explore := props.Explore
			explore.Tracable = false
			explore.Postfix = explore.Postfix + nativefactories.IdentifierFactory.Postfix(*key)
			pred = nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
				Context:  props.Context,
				Functor:  props.Functor,
				Input:    accessor,
				Metadata: spec.Property.Value,
				Explore:  protobufEncodeProgrammer_checker_explore(explore),
			})
		} else {
			pred = nativefactories.ExpressionFactory.IsRequired(accessor)
		}
		var elseStatement *shimast.Node
		if i == len(specifications)-1 {
			if len(remained) != 0 {
				nextSchemas := []schemaprotobuf.IProtobufPropertyType{}
				for _, object := range remained {
					nextSchemas = append(nextSchemas, indexes[object])
				}
				elseStatement = protobufEncodeProgrammer_factory.NewExpressionStatement(
					nativefactories.ExpressionFactory.SelfCall(protobufEncodeProgrammer_explore_objects(protobufEncodeProgrammer_exploreObjectsProps{
						Context: props.Context,
						Functor: props.Functor,
						Level:   props.Level + 1,
						Input:   props.Input,
						Schemas: nextSchemas,
						Explore: props.Explore,
					})),
				)
			} else {
				elseStatement = protobufEncodeProgrammer_create_throw_error(protobufEncodeProgrammer_throwProps{
					Context:  props.Context,
					Functor:  props.Functor,
					Input:    props.Input,
					Expected: expected,
				})
			}
		}
		statement := protobufEncodeProgrammer_factory.NewIfStatement(
			pred,
			protobufEncodeProgrammer_factory.NewExpressionStatement(nativefactories.ExpressionFactory.SelfCall(out(indexes[spec.Object]))),
			elseStatement,
		)
		if len(statements) == 0 {
			statements = append(statements, statement)
		} else {
			statements[0] = protobufEncodeProgrammer_factory.NewIfStatement(pred, protobufEncodeProgrammer_factory.NewExpressionStatement(nativefactories.ExpressionFactory.SelfCall(out(indexes[spec.Object]))), statements[0])
		}
	}
	return protobufEncodeProgrammer_factory.NewBlock(protobufEncodeProgrammer_factory.NewNodeList(statements), true)
}

func protobufEncodeProgrammer_decode_tag(props struct {
	Wire  nativehelpers.ProtobufWire
	Index int
}) *shimast.Node {
	return protobufEncodeProgrammer_callWriter("uint32", []*shimast.Node{
		nativefactories.ExpressionFactory.Number((props.Index << 3) | int(props.Wire)),
	})
}

func protobufEncodeProgrammer_get_numeric_wire(typ string) nativehelpers.ProtobufWire {
	if typ == "double" {
		return nativehelpers.I64
	}
	if typ == "float" {
		return nativehelpers.I32
	}
	return nativehelpers.VARIANT
}

type protobufEncodeProgrammer_throwProps struct {
	Context  nativecontext.ITypiaContext
	Functor  *nativehelpers.FunctionProgrammer
	Expected string
	Input    *shimast.Node
}

func protobufEncodeProgrammer_create_throw_error(props protobufEncodeProgrammer_throwProps) *shimast.Node {
	return protobufEncodeProgrammer_factory.NewExpressionStatement(
		protobufEncodeProgrammer_factory.NewCallExpression(
			protobufEncodeProgrammer_internal(props.Context, "throwTypeGuardError"),
			nil,
			nil,
			protobufEncodeProgrammer_factory.NewNodeList([]*shimast.Node{
				protobufEncodeProgrammer_factory.NewObjectLiteralExpression(protobufEncodeProgrammer_factory.NewNodeList([]*shimast.Node{
					protobufEncodeProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("method"), nil, nil, protobufEncodeProgrammer_factory.NewStringLiteral(props.Functor.Method, shimast.TokenFlagsNone)),
					protobufEncodeProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("expected"), nil, nil, protobufEncodeProgrammer_factory.NewStringLiteral(props.Expected, shimast.TokenFlagsNone)),
					protobufEncodeProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("value"), nil, nil, props.Input),
				}), true),
			}),
			shimast.NodeFlagsNone,
		),
	)
}

func protobufEncodeProgrammer_callWriter(method string, args []*shimast.Node) *shimast.Node {
	return protobufEncodeProgrammer_factory.NewCallExpression(
		nativefactories.IdentifierFactory.Access(protobufEncodeProgrammer_factory.NewIdentifier("writer"), method),
		nil,
		nil,
		protobufEncodeProgrammer_factory.NewNodeList(args),
		shimast.NodeFlagsNone,
	)
}

func protobufEncodeProgrammer_expressionBlock(expressions []*shimast.Node) *shimast.Node {
	statements := make([]*shimast.Node, 0, len(expressions))
	for _, expr := range expressions {
		statements = append(statements, protobufEncodeProgrammer_factory.NewExpressionStatement(expr))
	}
	return protobufEncodeProgrammer_factory.NewBlock(protobufEncodeProgrammer_factory.NewNodeList(statements), true)
}

func protobufEncodeProgrammer_chainUnion(union []protobufEncodeProgrammer_IUnion, context nativecontext.ITypiaContext, functor *nativehelpers.FunctionProgrammer, input *shimast.Node, expected string) *shimast.Node {
	var next *shimast.Node
	for i := len(union) - 1; i >= 0; i-- {
		var elseStatement *shimast.Node
		if next != nil {
			elseStatement = next
		} else if i == len(union)-1 {
			elseStatement = protobufEncodeProgrammer_create_throw_error(protobufEncodeProgrammer_throwProps{
				Context:  context,
				Functor:  functor,
				Input:    input,
				Expected: expected,
			})
		}
		next = protobufEncodeProgrammer_factory.NewIfStatement(
			union[i].Is(),
			union[i].Value(),
			elseStatement,
		)
	}
	return next
}

func protobufEncodeProgrammer_strict_equal(left *shimast.Node, right *shimast.Node) *shimast.Node {
	return protobufEncodeProgrammer_factory.NewBinaryExpression(nil, left, nil, protobufEncodeProgrammer_factory.NewToken(shimast.KindEqualsEqualsEqualsToken), right)
}

func protobufEncodeProgrammer_strict_not_equal(left *shimast.Node, right *shimast.Node) *shimast.Node {
	return protobufEncodeProgrammer_factory.NewBinaryExpression(nil, left, nil, protobufEncodeProgrammer_factory.NewToken(shimast.KindExclamationEqualsEqualsToken), right)
}

func protobufEncodeProgrammer_logical_and(left *shimast.Node, right *shimast.Node) *shimast.Node {
	return protobufEncodeProgrammer_factory.NewBinaryExpression(nil, left, nil, protobufEncodeProgrammer_factory.NewToken(shimast.KindAmpersandAmpersandToken), right)
}

func protobufEncodeProgrammer_containerIndex(kind string, index int) *int {
	if kind == "array" {
		return nil
	}
	return &index
}

func protobufEncodeProgrammer_indexValue(index *int) int {
	if index == nil {
		return 0
	}
	return *index
}

func protobufEncodeProgrammer_propertyIndex(schema schemaprotobuf.IProtobufPropertyType) *int {
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

func protobufEncodeProgrammer_schemaType(schema schemaprotobuf.IProtobufSchema) string {
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

func protobufEncodeProgrammer_numberSchema(schema schemaprotobuf.IProtobufSchema) (string, bool) {
	switch typed := schema.(type) {
	case *schemaprotobuf.IProtobufPropertyType_INumber:
		return typed.Name, true
	case schemaprotobuf.IProtobufSchema_INumber:
		return typed.Name, true
	default:
		return "", false
	}
}

func protobufEncodeProgrammer_objectSchema(schema schemaprotobuf.IProtobufSchema) *schemametadata.MetadataObjectType {
	switch typed := schema.(type) {
	case *schemaprotobuf.IProtobufPropertyType_IObject:
		if obj, ok := typed.Object.(*schemametadata.MetadataObjectType); ok {
			return obj
		}
	case schemaprotobuf.IProtobufSchema_IObject:
		if obj, ok := typed.Object.(*schemametadata.MetadataObjectType); ok {
			return obj
		}
	case *schemaprotobuf.IProtobufPropertyType_IMap:
		if obj, ok := typed.Map.(*schemametadata.MetadataObjectType); ok {
			return obj
		}
	case schemaprotobuf.IProtobufSchema_IMap:
		if obj, ok := typed.Map.(*schemametadata.MetadataObjectType); ok {
			return obj
		}
	}
	return nil
}

func protobufEncodeProgrammer_objectSchemas(union []schemaprotobuf.IProtobufPropertyType) []schemaprotobuf.IProtobufPropertyType {
	output := []schemaprotobuf.IProtobufPropertyType{}
	for _, schema := range union {
		if protobufEncodeProgrammer_schemaType(schema) == "object" {
			output = append(output, schema)
			continue
		}
		if mapSchema, ok := schema.(*schemaprotobuf.IProtobufPropertyType_IMap); ok {
			if _, ok := mapSchema.Map.(*schemametadata.MetadataObjectType); ok {
				output = append(output, schema)
			}
		}
	}
	return output
}

func protobufEncodeProgrammer_bigintCandidates(union []schemaprotobuf.IProtobufPropertyType) []string {
	output := []string{}
	for _, schema := range union {
		if typed, ok := schema.(*schemaprotobuf.IProtobufPropertyType_IBigint); ok {
			output = append(output, typed.Name)
		}
	}
	return output
}

func protobufEncodeProgrammer_numberCandidates(union []schemaprotobuf.IProtobufPropertyType) []string {
	output := []string{}
	for _, schema := range union {
		if typed, ok := schema.(*schemaprotobuf.IProtobufPropertyType_INumber); ok {
			output = append(output, typed.Name)
		}
	}
	return output
}

func protobufEncodeProgrammer_feature_explore(input any) nativeinternal.FeatureProgrammer_IExplore {
	switch typed := input.(type) {
	case nativeinternal.FeatureProgrammer_IExplore:
		return typed
	case *nativeinternal.FeatureProgrammer_IExplore:
		return *typed
	default:
		return nativeinternal.FeatureProgrammer_IExplore{}
	}
}

func protobufEncodeProgrammer_checker_explore(input any) nativeinternal.CheckerProgrammer_IExplore {
	value := protobufEncodeProgrammer_feature_explore(input)
	return nativeinternal.CheckerProgrammer_IExplore{
		Tracable: value.Tracable,
		Source:   value.Source,
		From:     value.From,
		Postfix:  value.Postfix,
		Start:    value.Start,
	}
}

func protobufEncodeProgrammer_import_type(context nativecontext.ITypiaContext, props nativeprogrammers.ImportProgrammer_TypeProps) *shimast.Node {
	if importer, ok := context.Importer.(interface {
		Type(nativeprogrammers.ImportProgrammer_TypeProps) *shimast.Node
	}); ok {
		return importer.Type(props)
	}
	if str, ok := props.Name.(string); ok {
		return protobufEncodeProgrammer_factory.NewTypeReferenceNode(protobufEncodeProgrammer_factory.NewIdentifier(str), protobufEncodeProgrammer_factory.NewNodeList(props.Arguments))
	}
	return props.Name.(*shimast.Node)
}

func protobufEncodeProgrammer_internal(context nativecontext.ITypiaContext, name string) *shimast.Node {
	if importer, ok := context.Importer.(interface {
		Internal(string) *shimast.Node
	}); ok {
		return importer.Internal(name)
	}
	return protobufEncodeProgrammer_factory.NewIdentifier(name)
}

func protobufEncodeProgrammer_method_text(modulo *shimast.Node) string {
	if modulo == nil {
		return ""
	}
	return modulo.Text()
}
