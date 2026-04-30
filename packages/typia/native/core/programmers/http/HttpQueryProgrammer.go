package http

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
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
	collection := schemametadata.NewMetadataCollection()
	result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
		Checker:     props.Context.Checker,
		Transformer: props.Context.Transformer,
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
		Arrow: httpQueryProgrammer_factory.NewArrowFunction(
			nil,
			nil,
			httpQueryProgrammer_factory.NewNodeList([]*shimast.Node{
				nativefactories.IdentifierFactory.Parameter(
					"input",
					httpQueryProgrammer_factory.NewUnionTypeNode(httpQueryProgrammer_factory.NewNodeList([]*shimast.Node{
						httpQueryProgrammer_factory.NewTypeReferenceNode(httpQueryProgrammer_factory.NewIdentifier("string"), nil),
						httpProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
							File: "typia",
							Name: "IReadableURLSearchParams",
						}),
					})),
					nil,
				),
			}),
			httpProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
				File: "typia",
				Name: "Resolved",
				Arguments: []*shimast.TypeNode{
					httpProgrammer_typeReference(props.Context, props.Type, props.Name),
				},
			}),
			nil,
			httpQueryProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			httpQueryProgrammer_factory.NewBlock(httpQueryProgrammer_factory.NewNodeList(statements), true),
		),
	}
}

func (httpQueryProgrammerNamespace) Write(props HttpQueryProgrammer_IProps) *shimast.Node {
	functor := nativehelpers.NewFunctionProgrammer(httpProgrammer_method_text(props.Modulo))
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
	input := httpQueryProgrammer_factory.NewIdentifier("input")
	output := httpQueryProgrammer_factory.NewIdentifier("output")
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
		httpQueryProgrammer_factory.NewExpressionStatement(httpQueryProgrammer_factory.NewBinaryExpression(
			nil,
			input,
			nil,
			httpQueryProgrammer_factory.NewToken(shimast.KindEqualsToken),
			httpQueryProgrammer_factory.NewAsExpression(
				httpQueryProgrammer_factory.NewCallExpression(
					httpParameterProgrammer_internal(props.Context, "httpQueryParseURLSearchParams"),
					nil,
					nil,
					httpQueryProgrammer_factory.NewNodeList([]*shimast.Node{input}),
					shimast.NodeFlagsNone,
				),
				httpProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
					File: "typia",
					Name: "IReadableURLSearchParams",
				}),
			),
		)),
		nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
			Name: "output",
			Value: httpQueryProgrammer_factory.NewObjectLiteralExpression(
				httpQueryProgrammer_factory.NewNodeList(properties),
				true,
			),
		}),
		httpQueryProgrammer_factory.NewReturnStatement(
			httpQueryProgrammer_factory.NewAsExpression(output, nativefactories.TypeFactory.Keyword("any")),
		),
	}
}

func httpQueryProgrammer_decode_regular_property(props struct {
	Context  nativecontext.ITypiaContext
	Property *schemametadata.MetadataProperty
}) *shimast.Node {
	key := httpProgrammer_property_key(props.Property)
	value := props.Property.Value
	typ, isArray := httpProgrammer_decode_type(value, false)
	input := httpQueryProgrammer_factory.NewCallExpression(
		nativefactories.IdentifierFactory.Access(httpQueryProgrammer_factory.NewIdentifier("input"), "get"),
		nil,
		nil,
		httpQueryProgrammer_factory.NewNodeList([]*shimast.Node{
			httpQueryProgrammer_factory.NewStringLiteral(key, shimast.TokenFlagsNone),
		}),
		shimast.NodeFlagsNone,
	)
	if isArray {
		input = httpQueryProgrammer_factory.NewCallExpression(
			nativefactories.IdentifierFactory.Access(httpQueryProgrammer_factory.NewIdentifier("input"), "getAll"),
			nil,
			nil,
			httpQueryProgrammer_factory.NewNodeList([]*shimast.Node{
				httpQueryProgrammer_factory.NewStringLiteral(key, shimast.TokenFlagsNone),
			}),
			shimast.NodeFlagsNone,
		)
		if value.IsRequired() {
			input = httpQueryProgrammer_assert_required_array(key, input)
		}
		input = httpQueryProgrammer_factory.NewCallExpression(
			nativefactories.IdentifierFactory.Access(
				input,
				"map",
			),
			nil,
			nil,
			httpQueryProgrammer_factory.NewNodeList([]*shimast.Node{
				httpQueryProgrammer_factory.NewArrowFunction(
					nil,
					nil,
					httpQueryProgrammer_factory.NewNodeList([]*shimast.Node{
						nativefactories.IdentifierFactory.Parameter("elem", nil, nil),
					}),
					nil,
					nil,
					httpQueryProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
					httpQueryProgrammer_decode_value(struct {
						Context  nativecontext.ITypiaContext
						Type     string
						Coalesce bool
						Input    *shimast.Node
					}{
						Context:  props.Context,
						Type:     typ,
						Coalesce: false,
						Input:    httpQueryProgrammer_factory.NewIdentifier("elem"),
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
			input = httpQueryProgrammer_assert_required_value(key, input)
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
	return httpQueryProgrammer_factory.NewPropertyAssignment(
		nil,
		nativefactories.IdentifierFactory.Identifier(key),
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
	call := httpQueryProgrammer_factory.NewCallExpression(
		httpParameterProgrammer_internal(props.Context, "httpQueryRead"+httpParameterProgrammer_capitalize(props.Type)),
		nil,
		nil,
		httpQueryProgrammer_factory.NewNodeList([]*shimast.Node{props.Input}),
		shimast.NodeFlagsNone,
	)
	if props.Coalesce == false {
		return call
	}
	return httpQueryProgrammer_factory.NewBinaryExpression(
		nil,
		call,
		nil,
		httpQueryProgrammer_factory.NewToken(shimast.KindQuestionQuestionToken),
		httpQueryProgrammer_factory.NewIdentifier("undefined"),
	)
}

func httpQueryProgrammer_assert_required_value(key string, input *shimast.Node) *shimast.Node {
	value := httpQueryProgrammer_factory.NewIdentifier("value")
	return httpQueryProgrammer_factory.NewCallExpression(
		httpQueryProgrammer_factory.NewArrowFunction(
			nil,
			nil,
			httpQueryProgrammer_factory.NewNodeList(nil),
			nil,
			nil,
			httpQueryProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			httpQueryProgrammer_factory.NewBlock(httpQueryProgrammer_factory.NewNodeList([]*shimast.Node{
				nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
					Name:  "value",
					Value: input,
				}),
				httpQueryProgrammer_factory.NewIfStatement(
					httpQueryProgrammer_factory.NewBinaryExpression(
						nil,
						value,
						nil,
						httpQueryProgrammer_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
						httpQueryProgrammer_factory.NewKeywordExpression(shimast.KindNullKeyword),
					),
					httpQueryProgrammer_factory.NewThrowStatement(httpQueryProgrammer_missing_error(key)),
					nil,
				),
				httpQueryProgrammer_factory.NewReturnStatement(value),
			}), true),
		),
		nil,
		nil,
		nil,
		shimast.NodeFlagsNone,
	)
}

func httpQueryProgrammer_assert_required_array(key string, input *shimast.Node) *shimast.Node {
	value := httpQueryProgrammer_factory.NewIdentifier("value")
	return httpQueryProgrammer_factory.NewCallExpression(
		httpQueryProgrammer_factory.NewArrowFunction(
			nil,
			nil,
			httpQueryProgrammer_factory.NewNodeList(nil),
			nil,
			nil,
			httpQueryProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			httpQueryProgrammer_factory.NewBlock(httpQueryProgrammer_factory.NewNodeList([]*shimast.Node{
				nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
					Name:  "value",
					Value: input,
				}),
				httpQueryProgrammer_factory.NewIfStatement(
					httpQueryProgrammer_factory.NewBinaryExpression(
						nil,
						nativefactories.ExpressionFactory.Number(0),
						nil,
						httpQueryProgrammer_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
						nativefactories.IdentifierFactory.Access(value, "length"),
					),
					httpQueryProgrammer_factory.NewThrowStatement(httpQueryProgrammer_missing_error(key)),
					nil,
				),
				httpQueryProgrammer_factory.NewReturnStatement(value),
			}), true),
		),
		nil,
		nil,
		nil,
		shimast.NodeFlagsNone,
	)
}

func httpQueryProgrammer_missing_error(key string) *shimast.Node {
	return httpQueryProgrammer_factory.NewNewExpression(
		httpQueryProgrammer_factory.NewIdentifier("Error"),
		nil,
		httpQueryProgrammer_factory.NewNodeList([]*shimast.Node{
			httpQueryProgrammer_factory.NewStringLiteral("missing "+key, shimast.TokenFlagsNone),
		}),
	)
}

func httpQueryProgrammer_decode_array(props struct {
	Context  nativecontext.ITypiaContext
	Metadata *schemametadata.MetadataSchema
	Input    *shimast.Node
}) *shimast.Node {
	if props.Metadata.Nullable == false && props.Metadata.IsRequired() == true {
		return props.Input
	}
	fallback := httpQueryProgrammer_factory.NewIdentifier("undefined")
	if props.Metadata.Nullable {
		fallback = httpQueryProgrammer_factory.NewKeywordExpression(shimast.KindNullKeyword)
	}
	return httpQueryProgrammer_factory.NewCallExpression(
		httpParameterProgrammer_internal(props.Context, "httpQueryReadArray"),
		nil,
		nil,
		httpQueryProgrammer_factory.NewNodeList([]*shimast.Node{
			props.Input,
			fallback,
		}),
		shimast.NodeFlagsNone,
	)
}
