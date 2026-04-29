package json

import (
	"fmt"
	"strings"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimchecker "github.com/microsoft/typescript-go/shim/checker"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativeprogrammers "github.com/samchon/typia/packages/typia/native/core/programmers"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativeinternal "github.com/samchon/typia/packages/typia/native/core/programmers/internal"
	nativeiterate "github.com/samchon/typia/packages/typia/native/core/programmers/iterate"
	schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type jsonStringifyProgrammerNamespace struct{}

var JsonStringifyProgrammer = jsonStringifyProgrammerNamespace{}

type JsonStringifyProgrammer_DecomposeProps struct {
	Validated bool
	Context   nativecontext.ITypiaContext
	Functor   *nativehelpers.FunctionProgrammer
	Type      *shimchecker.Type
	Name      *string
}

const jsonStringifyProgrammer_PREFIX = "_s"

var jsonStringifyProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (jsonStringifyProgrammerNamespace) Decompose(props JsonStringifyProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
	config := jsonStringifyProgrammer_configure(struct {
		Context   nativecontext.ITypiaContext
		Functor   *nativehelpers.FunctionProgrammer
		Validated bool
	}{
		Context:   props.Context,
		Functor:   props.Functor,
		Validated: props.Validated,
	})
	if props.Validated == false {
		config.Addition = func(collection *schemametadata.MetadataCollection) []*shimast.Node {
			return nativeprogrammers.IsProgrammer.Write_function_statements(nativeprogrammers.IsProgrammer_WriteFunctionStatementsProps{
				Context:    props.Context,
				Functor:    props.Functor,
				Collection: collection,
			})
		}
	}
	composed := nativeinternal.FeatureProgrammer.Compose(nativeinternal.FeatureProgrammer_ComposeProps{
		Context: props.Context,
		Config:  config,
		Functor: props.Functor,
		Type:    props.Type,
		Name:    props.Name,
	})
	return nativeinternal.FeatureProgrammer_IDecomposed{
		Functions:  composed.Functions,
		Statements: composed.Statements,
		Arrow: jsonStringifyProgrammer_factory.NewArrowFunction(
			nil,
			nil,
			jsonStringifyProgrammer_factory.NewNodeList(composed.Parameters),
			composed.Response,
			nil,
			jsonStringifyProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			composed.Body,
		),
	}
}

func (jsonStringifyProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
	functor := nativehelpers.NewFunctionProgrammer(jsonStringifyProgrammer_method_text(props.Modulo))
	result := JsonStringifyProgrammer.Decompose(JsonStringifyProgrammer_DecomposeProps{
		Context:   props.Context,
		Functor:   functor,
		Type:      props.Type,
		Name:      props.Name,
		Validated: false,
	})
	return nativeinternal.FeatureProgrammer.WriteDecomposed(nativeinternal.FeatureProgrammer_WriteDecomposedProps{
		Modulo:  props.Modulo,
		Functor: functor,
		Result:  result,
	})
}

func jsonStringifyProgrammer_write_array_functions(props struct {
	Config     nativeinternal.FeatureProgrammer_IConfig
	Functor    *nativehelpers.FunctionProgrammer
	Collection *schemametadata.MetadataCollection
}) []*shimast.Node {
	output := []*shimast.Node{}
	for i, typ := range props.Collection.Arrays() {
		if typ.Recursive == false {
			continue
		}
		output = append(output, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
			Name: fmt.Sprintf("%sa%d", props.Config.Prefix, i),
			Value: jsonStringifyProgrammer_factory.NewArrowFunction(
				nil,
				nil,
				jsonStringifyProgrammer_factory.NewNodeList(nativeinternal.FeatureProgrammer.ParameterDeclarations(nativeinternal.FeatureProgrammer_ParameterDeclarationsProps{
					Config: nativeinternal.FeatureProgrammer_ParameterConfig{Path: props.Config.Path, Trace: props.Config.Trace},
					Type:   nativefactories.TypeFactory.Keyword("any"),
					Input:  jsonStringifyProgrammer_factory.NewIdentifier("input"),
				})),
				nativefactories.TypeFactory.Keyword("any"),
				nil,
				jsonStringifyProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
				jsonStringifyProgrammer_decode_array_inline(jsonStringifyProgrammer_decodeArrayProps{
					Config:  props.Config,
					Functor: props.Functor,
					Input:   jsonStringifyProgrammer_factory.NewIdentifier("input"),
					Array: schemametadata.MetadataArray_create(schemametadata.MetadataArray{
						Type: typ,
						Tags: [][]schemametadata.IMetadataTypeTag{},
					}),
					Explore: nativeinternal.FeatureProgrammer_IExplore{
						Tracable: props.Config.Trace,
						Source:   "function",
						From:     "array",
						Postfix:  "",
					},
				}),
			),
		}))
	}
	return output
}

func jsonStringifyProgrammer_write_tuple_functions(props struct {
	Context    nativecontext.ITypiaContext
	Config     nativeinternal.FeatureProgrammer_IConfig
	Functor    *nativehelpers.FunctionProgrammer
	Collection *schemametadata.MetadataCollection
	Validated  bool
}) []*shimast.Node {
	output := []*shimast.Node{}
	for i, tuple := range props.Collection.Tuples() {
		if tuple.Recursive == false {
			continue
		}
		output = append(output, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
			Name: fmt.Sprintf("%st%d", props.Config.Prefix, i),
			Value: jsonStringifyProgrammer_factory.NewArrowFunction(
				nil,
				nil,
				jsonStringifyProgrammer_factory.NewNodeList(nativeinternal.FeatureProgrammer.ParameterDeclarations(nativeinternal.FeatureProgrammer_ParameterDeclarationsProps{
					Config: nativeinternal.FeatureProgrammer_ParameterConfig{Path: props.Config.Path, Trace: props.Config.Trace},
					Type:   nativefactories.TypeFactory.Keyword("any"),
					Input:  jsonStringifyProgrammer_factory.NewIdentifier("input"),
				})),
				nativefactories.TypeFactory.Keyword("any"),
				nil,
				jsonStringifyProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
				jsonStringifyProgrammer_decode_tuple_inline(jsonStringifyProgrammer_decodeTupleInlineProps{
					Context:   props.Context,
					Config:    props.Config,
					Functor:   props.Functor,
					Input:     jsonStringifyProgrammer_factory.NewIdentifier("input"),
					Tuple:     tuple,
					Explore:   nativeinternal.FeatureProgrammer_IExplore{Tracable: props.Config.Trace, Source: "function", From: "array", Postfix: ""},
					Validated: props.Validated,
				}),
			),
		}))
	}
	return output
}

func jsonStringifyProgrammer_decode(props struct {
	Context   nativecontext.ITypiaContext
	Config    nativeinternal.FeatureProgrammer_IConfig
	Functor   *nativehelpers.FunctionProgrammer
	Input     *shimast.Node
	Metadata  *schemametadata.MetadataSchema
	Explore   nativeinternal.FeatureProgrammer_IExplore
	Validated bool
}) *shimast.Node {
	if props.Metadata.Any {
		return jsonStringifyProgrammer_wrap_required(struct {
			Input      *shimast.Node
			Metadata   *schemametadata.MetadataSchema
			Explore    nativeinternal.FeatureProgrammer_IExplore
			Expression *shimast.Node
		}{
			Input:    props.Input,
			Metadata: props.Metadata,
			Explore:  props.Explore,
			Expression: jsonStringifyProgrammer_wrap_functional(struct {
				Input      *shimast.Node
				Metadata   *schemametadata.MetadataSchema
				Explore    nativeinternal.FeatureProgrammer_IExplore
				Expression *shimast.Node
			}{
				Input:    props.Input,
				Metadata: props.Metadata,
				Explore:  props.Explore,
				Expression: jsonStringifyProgrammer_factory.NewCallExpression(
					jsonStringifyProgrammer_factory.NewIdentifier("JSON.stringify"),
					nil,
					nil,
					jsonStringifyProgrammer_factory.NewNodeList([]*shimast.Node{props.Input}),
					shimast.NodeFlagsNone,
				),
			}),
		})
	}

	size := props.Metadata.Size()
	if size == 0 && (props.Metadata.IsRequired() == false || props.Metadata.Nullable) {
		if props.Metadata.IsRequired() == false && props.Metadata.Nullable {
			if props.Explore.From == "array" {
				return jsonStringifyProgrammer_factory.NewStringLiteral("null", shimast.TokenFlagsNone)
			}
			return jsonStringifyProgrammer_factory.NewConditionalExpression(
				jsonStringifyProgrammer_binary(jsonStringifyProgrammer_factory.NewKeywordExpression(shimast.KindNullKeyword), shimast.KindEqualsEqualsEqualsToken, props.Input),
				nil,
				jsonStringifyProgrammer_factory.NewStringLiteral("null", shimast.TokenFlagsNone),
				nil,
				jsonStringifyProgrammer_factory.NewIdentifier("undefined"),
			)
		} else if props.Metadata.IsRequired() == false {
			if props.Explore.From == "array" {
				return jsonStringifyProgrammer_factory.NewStringLiteral("null", shimast.TokenFlagsNone)
			}
			return jsonStringifyProgrammer_factory.NewIdentifier("undefined")
		}
		return jsonStringifyProgrammer_factory.NewStringLiteral("null", shimast.TokenFlagsNone)
	}

	unions := []jsonStringifyProgrammer_IUnion{}
	if props.Metadata.Escaped != nil {
		metadata := props.Metadata.Escaped.Returns
		isDate := props.Metadata.Escaped.Original.Size() == 1 &&
			len(props.Metadata.Escaped.Original.Natives) != 0 &&
			props.Metadata.Escaped.Original.Natives[0].Name == "Date"
		unions = append(unions, jsonStringifyProgrammer_IUnion{
			Type: "resolved",
			Is: func() *shimast.Node {
				if isDate {
					return nativeiterate.Check_native(nativeiterate.Check_nativeProps{
						Name:  "Date",
						Input: props.Input,
					})
				}
				return nativeprogrammers.IsProgrammer.Decode_to_json(struct {
					Input     *shimast.Expression
					CheckNull bool
				}{Input: props.Input, CheckNull: false})
			},
			Value: func() *shimast.Node {
				next := props
				next.Metadata = metadata
				return jsonStringifyProgrammer_decode_to_json(next)
			},
		})
	} else if len(props.Metadata.Functions) != 0 {
		unions = append(unions, jsonStringifyProgrammer_IUnion{
			Type: "functional",
			Is: func() *shimast.Node {
				return nativeprogrammers.IsProgrammer.Decode_functional(props.Input)
			},
			Value: func() *shimast.Node {
				return jsonStringifyProgrammer_decode_functional(props.Explore)
			},
		})
	}

	if len(props.Metadata.Templates) != 0 && nativehelpers.AtomicPredicator.Template(props.Metadata) {
		partial := schemametadata.MetadataSchema_initialize()
		partial.Atomics = append(partial.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{
			Type: "string",
			Tags: [][]schemametadata.IMetadataTypeTag{},
		}))
		unions = append(unions, jsonStringifyProgrammer_IUnion{
			Type: "template literal",
			Is: func() *shimast.Node {
				next := props
				next.Metadata = partial
				return nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
					Context:  next.Context,
					Functor:  next.Functor,
					Metadata: next.Metadata,
					Input:    next.Input,
					Explore:  jsonStringifyProgrammer_checker_explore(next.Explore),
				})
			},
			Value: func() *shimast.Node {
				next := props
				return jsonStringifyProgrammer_decode_atomic(struct {
					Context   nativecontext.ITypiaContext
					Input     *shimast.Node
					Type      string
					Explore   nativeinternal.FeatureProgrammer_IExplore
					Validated bool
				}{Context: next.Context, Input: next.Input, Type: "string", Explore: next.Explore, Validated: next.Validated})
			},
		})
	}

	for _, constant := range props.Metadata.Constants {
		constant := constant
		if nativehelpers.AtomicPredicator.Constant(struct {
			Metadata *schemametadata.MetadataSchema
			Name     string
		}{Metadata: props.Metadata, Name: constant.Type}) == false {
			continue
		}
		if constant.Type != "string" {
			unions = append(unions, jsonStringifyProgrammer_IUnion{
				Type: "atomic",
				Is: func() *shimast.Node {
					partial := schemametadata.MetadataSchema_initialize()
					partial.Atomics = append(partial.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{
						Type: constant.Type,
						Tags: [][]schemametadata.IMetadataTypeTag{},
					}))
					return nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
						Context:  props.Context,
						Functor:  props.Functor,
						Metadata: partial,
						Input:    props.Input,
						Explore:  jsonStringifyProgrammer_checker_explore(props.Explore),
					})
				},
				Value: func() *shimast.Node {
					return jsonStringifyProgrammer_decode_atomic(struct {
						Context   nativecontext.ITypiaContext
						Input     *shimast.Node
						Type      string
						Explore   nativeinternal.FeatureProgrammer_IExplore
						Validated bool
					}{Context: props.Context, Input: props.Input, Type: constant.Type, Explore: props.Explore, Validated: props.Validated})
				},
			})
		} else if len(props.Metadata.Templates) == 0 {
			values := make([]string, 0, len(constant.Values))
			for _, value := range constant.Values {
				if str, ok := value.Value.(string); ok {
					values = append(values, str)
				}
			}
			unions = append(unions, jsonStringifyProgrammer_IUnion{
				Type: "const string",
				Is: func() *shimast.Node {
					partial := schemametadata.MetadataSchema_initialize()
					partial.Atomics = append(partial.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{
						Type: "string",
						Tags: [][]schemametadata.IMetadataTypeTag{},
					}))
					return nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
						Context:  props.Context,
						Functor:  props.Functor,
						Metadata: partial,
						Input:    props.Input,
						Explore:  jsonStringifyProgrammer_checker_explore(props.Explore),
					})
				},
				Value: func() *shimast.Node {
					return jsonStringifyProgrammer_decode_constant_string(struct {
						Context   nativecontext.ITypiaContext
						Functor   *nativehelpers.FunctionProgrammer
						Input     *shimast.Node
						Values    []string
						Explore   nativeinternal.FeatureProgrammer_IExplore
						Validated bool
					}{Context: props.Context, Functor: props.Functor, Input: props.Input, Values: values, Explore: props.Explore, Validated: props.Validated})
				},
			})
		}
	}

	for _, atomic := range props.Metadata.Atomics {
		atomic := atomic
		if nativehelpers.AtomicPredicator.Atomic(struct {
			Metadata *schemametadata.MetadataSchema
			Name     string
		}{Metadata: props.Metadata, Name: atomic.Type}) {
			unions = append(unions, jsonStringifyProgrammer_IUnion{
				Type: "atomic",
				Is: func() *shimast.Node {
					partial := schemametadata.MetadataSchema_initialize()
					partial.Atomics = append(partial.Atomics, atomic)
					return nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
						Context:  props.Context,
						Functor:  props.Functor,
						Metadata: partial,
						Input:    props.Input,
						Explore:  jsonStringifyProgrammer_checker_explore(props.Explore),
					})
				},
				Value: func() *shimast.Node {
					return jsonStringifyProgrammer_decode_atomic(struct {
						Context   nativecontext.ITypiaContext
						Input     *shimast.Node
						Type      string
						Explore   nativeinternal.FeatureProgrammer_IExplore
						Validated bool
					}{Context: props.Context, Input: props.Input, Type: atomic.Type, Explore: props.Explore, Validated: props.Validated})
				},
			})
		}
	}

	for _, tuple := range props.Metadata.Tuples {
		tuple := tuple
		unions = append(unions, jsonStringifyProgrammer_IUnion{
			Type: "tuple",
			Is: func() *shimast.Node {
				partial := schemametadata.MetadataSchema_initialize()
				partial.Tuples = append(partial.Tuples, tuple)
				return nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
					Context:  props.Context,
					Functor:  props.Functor,
					Metadata: partial,
					Input:    props.Input,
					Explore:  jsonStringifyProgrammer_checker_explore(props.Explore),
				})
			},
			Value: func() *shimast.Node {
				return jsonStringifyProgrammer_decode_tuple(jsonStringifyProgrammer_decodeTupleProps{
					Context:   props.Context,
					Config:    props.Config,
					Functor:   props.Functor,
					Input:     props.Input,
					Tuple:     tuple,
					Explore:   props.Explore,
					Validated: props.Validated,
				})
			},
		})
	}

	if len(props.Metadata.Arrays) != 0 {
		value := func() *shimast.Node {
			if len(props.Metadata.Arrays) == 1 {
				explore := props.Explore
				explore.From = "array"
				return jsonStringifyProgrammer_decode_array(jsonStringifyProgrammer_decodeArrayProps{
					Config:  props.Config,
					Functor: props.Functor,
					Input:   props.Input,
					Array:   props.Metadata.Arrays[0],
					Explore: explore,
				})
			}
			if jsonStringifyProgrammer_some_arrays(props.Metadata.Arrays, func(elem *schemametadata.MetadataArray) bool {
				return elem.Type.Value.Any
			}) {
				return jsonStringifyProgrammer_factory.NewCallExpression(
					jsonStringifyProgrammer_factory.NewIdentifier("JSON.stringify"),
					nil,
					nil,
					jsonStringifyProgrammer_factory.NewNodeList([]*shimast.Node{props.Input}),
					shimast.NodeFlagsNone,
				)
			}
			explore := props.Explore
			explore.From = "array"
			return jsonStringifyProgrammer_explore_arrays(jsonStringifyProgrammer_exploreArraysProps{
				Context: props.Context,
				Config:  props.Config,
				Functor: props.Functor,
				Input:   props.Input,
				Arrays:  props.Metadata.Arrays,
				Explore: explore,
			})
		}
		unions = append(unions, jsonStringifyProgrammer_IUnion{
			Type: "array",
			Is: func() *shimast.Node {
				return nativefactories.ExpressionFactory.IsArray(props.Input)
			},
			Value: value,
		})
	}

	for _, native := range props.Metadata.Natives {
		native := native
		unions = append(unions, jsonStringifyProgrammer_IUnion{
			Type: "object",
			Is: func() *shimast.Node {
				return nativeiterate.Check_native(nativeiterate.Check_nativeProps{Name: native.Name, Input: props.Input})
			},
			Value: func() *shimast.Node {
				if nativehelpers.AtomicPredicator.Native(native.Name) {
					return jsonStringifyProgrammer_decode_atomic(struct {
						Context   nativecontext.ITypiaContext
						Input     *shimast.Node
						Type      string
						Explore   nativeinternal.FeatureProgrammer_IExplore
						Validated bool
					}{Context: props.Context, Input: props.Input, Type: strings.ToLower(native.Name), Explore: props.Explore, Validated: props.Validated})
				}
				return jsonStringifyProgrammer_factory.NewStringLiteral("{}", shimast.TokenFlagsNone)
			},
		})
	}

	if len(props.Metadata.Sets) != 0 {
		unions = append(unions, jsonStringifyProgrammer_IUnion{
			Type: "object",
			Is: func() *shimast.Node {
				return nativefactories.ExpressionFactory.IsInstanceOf("Set", props.Input)
			},
			Value: func() *shimast.Node {
				return jsonStringifyProgrammer_factory.NewStringLiteral("{}", shimast.TokenFlagsNone)
			},
		})
	}
	if len(props.Metadata.Maps) != 0 {
		unions = append(unions, jsonStringifyProgrammer_IUnion{
			Type: "object",
			Is: func() *shimast.Node {
				return nativefactories.ExpressionFactory.IsInstanceOf("Map", props.Input)
			},
			Value: func() *shimast.Node {
				return jsonStringifyProgrammer_factory.NewStringLiteral("{}", shimast.TokenFlagsNone)
			},
		})
	}
	if len(props.Metadata.Objects) != 0 {
		unions = append(unions, jsonStringifyProgrammer_IUnion{
			Type: "object",
			Is: func() *shimast.Node {
				return nativefactories.ExpressionFactory.IsObject(nativefactories.ExpressionFactory_IsObjectProps{
					CheckNull: true,
					CheckArray: jsonStringifyProgrammer_some_objects(props.Metadata.Objects, func(object *schemametadata.MetadataObject) bool {
						return jsonStringifyProgrammer_every_properties(object.Type.Properties, func(prop *schemametadata.MetadataProperty) bool {
							return !prop.Key.IsSoleLiteral() || !prop.Value.IsRequired()
						})
					}),
					Input: props.Input,
				})
			},
			Value: func() *shimast.Node {
				explore := props.Explore
				explore.From = "object"
				return jsonStringifyProgrammer_explore_objects(jsonStringifyProgrammer_exploreObjectsProps{
					Config:   props.Config,
					Functor:  props.Functor,
					Input:    props.Input,
					Metadata: props.Metadata,
					Explore:  explore,
				})
			},
		})
	}

	wrapper := func(output *shimast.Node) *shimast.Node {
		return jsonStringifyProgrammer_wrap_required(struct {
			Input      *shimast.Node
			Metadata   *schemametadata.MetadataSchema
			Explore    nativeinternal.FeatureProgrammer_IExplore
			Expression *shimast.Node
		}{
			Input:    props.Input,
			Metadata: props.Metadata,
			Explore:  props.Explore,
			Expression: jsonStringifyProgrammer_wrap_nullable(struct {
				Input      *shimast.Node
				Metadata   *schemametadata.MetadataSchema
				Expression *shimast.Node
			}{Input: props.Input, Metadata: props.Metadata, Expression: output}),
		})
	}
	if len(unions) == 0 {
		return jsonStringifyProgrammer_factory.NewCallExpression(
			jsonStringifyProgrammer_factory.NewIdentifier("JSON.stringify"),
			nil,
			nil,
			jsonStringifyProgrammer_factory.NewNodeList([]*shimast.Node{props.Input}),
			shimast.NodeFlagsNone,
		)
	}
	if len(unions) == 1 {
		return wrapper(unions[0].Value())
	}
	return wrapper(jsonStringifyProgrammer_factory.NewCallExpression(
		jsonStringifyProgrammer_factory.NewArrowFunction(
			nil,
			nil,
			jsonStringifyProgrammer_factory.NewNodeList(nil),
			nil,
			nil,
			jsonStringifyProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			jsonStringifyProgrammer_iterate(jsonStringifyProgrammer_iterateProps{
				Context:  props.Context,
				Functor:  props.Functor,
				Input:    props.Input,
				Expected: props.Metadata.GetName(),
				Unions:   unions,
			}),
		),
		nil,
		nil,
		nil,
		shimast.NodeFlagsNone,
	))
}

func jsonStringifyProgrammer_decode_object(props struct {
	Functor *nativehelpers.FunctionProgrammer
	Input   *shimast.Node
	Object  *schemametadata.MetadataObjectType
	Explore nativeinternal.FeatureProgrammer_IExplore
}) *shimast.Node {
	return nativeinternal.FeatureProgrammer.Decode_object(nativeinternal.FeatureProgrammer_DecodeObjectProps{
		Config:  nativeinternal.FeatureProgrammer_DecodeObjectConfig{Trace: false, Path: false, Prefix: jsonStringifyProgrammer_PREFIX},
		Functor: props.Functor,
		Object:  props.Object,
		Input:   props.Input,
		Explore: props.Explore,
	})
}

type jsonStringifyProgrammer_decodeArrayProps struct {
	Config  nativeinternal.FeatureProgrammer_IConfig
	Functor *nativehelpers.FunctionProgrammer
	Input   *shimast.Node
	Array   *schemametadata.MetadataArray
	Explore nativeinternal.FeatureProgrammer_IExplore
}

func jsonStringifyProgrammer_decode_array(props jsonStringifyProgrammer_decodeArrayProps) *shimast.Node {
	if props.Array.Type.Recursive {
		index := 0
		if props.Array.Type.Index != nil {
			index = *props.Array.Type.Index
		}
		return jsonStringifyProgrammer_factory.NewCallExpression(
			jsonStringifyProgrammer_factory.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%sa%d", props.Config.Prefix, index))),
			nil,
			nil,
			jsonStringifyProgrammer_factory.NewNodeList(nativeinternal.FeatureProgrammer.ArgumentsArray(nativeinternal.FeatureProgrammer_ArgumentsArrayProps{
				Config:  nativeinternal.FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace},
				Input:   props.Input,
				Explore: jsonStringifyProgrammer_explore_with(props.Explore, "function", "array"),
			})),
			shimast.NodeFlagsNone,
		)
	}
	return jsonStringifyProgrammer_decode_array_inline(props)
}

func jsonStringifyProgrammer_decode_array_inline(props jsonStringifyProgrammer_decodeArrayProps) *shimast.Node {
	return nativeinternal.FeatureProgrammer.Decode_array(nativeinternal.FeatureProgrammer_DecodeArrayProps{
		Config: nativeinternal.FeatureProgrammer_DecodeArrayConfig{
			Trace:   props.Config.Trace,
			Path:    props.Config.Path,
			Decoder: props.Config.Decoder,
			Prefix:  props.Config.Prefix,
		},
		Functor: props.Functor,
		Combiner: func(next struct {
			Input *shimast.Expression
			Arrow *shimast.Node
		}) *shimast.Node {
			return nativehelpers.StringifyJoiner.Array(nativehelpers.StringifyJoiner_ArrayProps{
				Input: next.Input,
				Arrow: next.Arrow,
			})
		},
		Array:   props.Array,
		Input:   props.Input,
		Explore: props.Explore,
	})
}

type jsonStringifyProgrammer_decodeTupleProps struct {
	Context   nativecontext.ITypiaContext
	Config    nativeinternal.FeatureProgrammer_IConfig
	Functor   *nativehelpers.FunctionProgrammer
	Input     *shimast.Node
	Tuple     *schemametadata.MetadataTuple
	Explore   nativeinternal.FeatureProgrammer_IExplore
	Validated bool
}

func jsonStringifyProgrammer_decode_tuple(props jsonStringifyProgrammer_decodeTupleProps) *shimast.Node {
	if props.Tuple.Type.Recursive {
		index := 0
		if props.Tuple.Type.Index != nil {
			index = *props.Tuple.Type.Index
		}
		return jsonStringifyProgrammer_factory.NewCallExpression(
			jsonStringifyProgrammer_factory.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%st%d", props.Config.Prefix, index))),
			nil,
			nil,
			jsonStringifyProgrammer_factory.NewNodeList(nativeinternal.FeatureProgrammer.ArgumentsArray(nativeinternal.FeatureProgrammer_ArgumentsArrayProps{
				Config:  nativeinternal.FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace},
				Explore: jsonStringifyProgrammer_explore_with(props.Explore, "function", props.Explore.From),
				Input:   props.Input,
			})),
			shimast.NodeFlagsNone,
		)
	}
	return jsonStringifyProgrammer_decode_tuple_inline(jsonStringifyProgrammer_decodeTupleInlineProps{
		Context:   props.Context,
		Config:    props.Config,
		Functor:   props.Functor,
		Input:     props.Input,
		Tuple:     props.Tuple.Type,
		Explore:   props.Explore,
		Validated: props.Validated,
	})
}

type jsonStringifyProgrammer_decodeTupleInlineProps struct {
	Context   nativecontext.ITypiaContext
	Config    nativeinternal.FeatureProgrammer_IConfig
	Functor   *nativehelpers.FunctionProgrammer
	Input     *shimast.Node
	Tuple     *schemametadata.MetadataTupleType
	Explore   nativeinternal.FeatureProgrammer_IExplore
	Validated bool
}

func jsonStringifyProgrammer_decode_tuple_inline(props jsonStringifyProgrammer_decodeTupleInlineProps) *shimast.Node {
	elements := []*shimast.Node{}
	for index, elem := range props.Tuple.Elements {
		if elem.Rest != nil {
			continue
		}
		explore := props.Explore
		explore.From = "array"
		if len(props.Explore.Postfix) != 0 {
			explore.Postfix = fmt.Sprintf("%s[%d]\"", nativeiterate.Postfix_of_tuple_export(props.Explore.Postfix), index)
		} else {
			explore.Postfix = fmt.Sprintf("\"[%d]\"", index)
		}
		elements = append(elements, jsonStringifyProgrammer_decode(struct {
			Context   nativecontext.ITypiaContext
			Config    nativeinternal.FeatureProgrammer_IConfig
			Functor   *nativehelpers.FunctionProgrammer
			Input     *shimast.Node
			Metadata  *schemametadata.MetadataSchema
			Explore   nativeinternal.FeatureProgrammer_IExplore
			Validated bool
		}{
			Context:   props.Context,
			Config:    props.Config,
			Functor:   props.Functor,
			Input:     jsonStringifyProgrammer_factory.NewElementAccessExpression(props.Input, nil, nativefactories.ExpressionFactory.Number(index), shimast.NodeFlagsNone),
			Metadata:  elem,
			Explore:   explore,
			Validated: props.Validated,
		}))
	}
	var rest *shimast.Node
	if len(props.Tuple.Elements) != 0 {
		last := props.Tuple.Elements[len(props.Tuple.Elements)-1]
		if last.Rest != nil {
			explore := props.Explore
			start := len(props.Tuple.Elements) - 1
			explore.Start = &start
			code := jsonStringifyProgrammer_decode(struct {
				Context   nativecontext.ITypiaContext
				Config    nativeinternal.FeatureProgrammer_IConfig
				Functor   *nativehelpers.FunctionProgrammer
				Input     *shimast.Node
				Metadata  *schemametadata.MetadataSchema
				Explore   nativeinternal.FeatureProgrammer_IExplore
				Validated bool
			}{
				Context: props.Context,
				Config:  props.Config,
				Functor: props.Functor,
				Input: jsonStringifyProgrammer_factory.NewCallExpression(
					nativefactories.IdentifierFactory.Access(props.Input, "slice"),
					nil,
					nil,
					jsonStringifyProgrammer_factory.NewNodeList([]*shimast.Node{nativefactories.ExpressionFactory.Number(start)}),
					shimast.NodeFlagsNone,
				),
				Metadata:  nativeiterate.Wrap_metadata_rest_tuple_export(last.Rest),
				Explore:   explore,
				Validated: props.Validated,
			})
			rest = jsonStringifyProgrammer_factory.NewCallExpression(
				jsonStringifyProgrammer_internal(props.Context, "jsonStringifyRest"),
				nil,
				nil,
				jsonStringifyProgrammer_factory.NewNodeList([]*shimast.Node{code}),
				shimast.NodeFlagsNone,
			)
		}
	}
	return nativehelpers.StringifyJoiner.Tuple(nativehelpers.StringifyJoiner_TupleProps{
		Elements: elements,
		Rest:     rest,
	})
}

func jsonStringifyProgrammer_decode_atomic(props struct {
	Context   nativecontext.ITypiaContext
	Input     *shimast.Node
	Type      string
	Explore   nativeinternal.FeatureProgrammer_IExplore
	Validated bool
}) *shimast.Node {
	input := props.Input
	if props.Type == "string" {
		return jsonStringifyProgrammer_factory.NewCallExpression(
			jsonStringifyProgrammer_internal(props.Context, "jsonStringifyString"),
			nil,
			nil,
			jsonStringifyProgrammer_factory.NewNodeList([]*shimast.Node{props.Input}),
			shimast.NodeFlagsNone,
		)
	} else if props.Type == "number" {
		if !(props.Validated && nativehelpers.OptionPredicator.Finite(props.Context.Options)) {
			input = jsonStringifyProgrammer_factory.NewCallExpression(
				jsonStringifyProgrammer_internal(props.Context, "jsonStringifyNumber"),
				nil,
				nil,
				jsonStringifyProgrammer_factory.NewNodeList([]*shimast.Node{props.Input}),
				shimast.NodeFlagsNone,
			)
		}
	}
	return jsonStringifyProgrammer_factory.NewCallExpression(
		jsonStringifyProgrammer_factory.NewIdentifier("String"),
		nil,
		nil,
		jsonStringifyProgrammer_factory.NewNodeList([]*shimast.Node{input}),
		shimast.NodeFlagsNone,
	)
}

func jsonStringifyProgrammer_decode_constant_string(props struct {
	Context   nativecontext.ITypiaContext
	Functor   *nativehelpers.FunctionProgrammer
	Input     *shimast.Node
	Values    []string
	Explore   nativeinternal.FeatureProgrammer_IExplore
	Validated bool
}) *shimast.Node {
	if jsonStringifyProgrammer_every_strings(props.Values, func(value string) bool {
		return nativehelpers.StringifyPredicator.Require_escape(value) == false
	}) {
		return jsonStringifyProgrammer_binary(
			jsonStringifyProgrammer_binary(
				jsonStringifyProgrammer_factory.NewStringLiteral("\"", shimast.TokenFlagsNone),
				shimast.KindPlusToken,
				props.Input,
			),
			shimast.KindPlusToken,
			jsonStringifyProgrammer_factory.NewStringLiteral("\"", shimast.TokenFlagsNone),
		)
	}
	return jsonStringifyProgrammer_decode_atomic(struct {
		Context   nativecontext.ITypiaContext
		Input     *shimast.Node
		Type      string
		Explore   nativeinternal.FeatureProgrammer_IExplore
		Validated bool
	}{Context: props.Context, Input: props.Input, Type: "string", Explore: props.Explore, Validated: props.Validated})
}

func jsonStringifyProgrammer_decode_to_json(props struct {
	Context   nativecontext.ITypiaContext
	Config    nativeinternal.FeatureProgrammer_IConfig
	Functor   *nativehelpers.FunctionProgrammer
	Input     *shimast.Node
	Metadata  *schemametadata.MetadataSchema
	Explore   nativeinternal.FeatureProgrammer_IExplore
	Validated bool
}) *shimast.Node {
	next := props
	next.Input = jsonStringifyProgrammer_factory.NewCallExpression(
		nativefactories.IdentifierFactory.Access(props.Input, "toJSON"),
		nil,
		nil,
		jsonStringifyProgrammer_factory.NewNodeList(nil),
		shimast.NodeFlagsNone,
	)
	return jsonStringifyProgrammer_decode(next)
}

func jsonStringifyProgrammer_decode_functional(explore nativeinternal.FeatureProgrammer_IExplore) *shimast.Node {
	if explore.From == "array" {
		return jsonStringifyProgrammer_factory.NewStringLiteral("null", shimast.TokenFlagsNone)
	}
	return jsonStringifyProgrammer_factory.NewIdentifier("undefined")
}

type jsonStringifyProgrammer_exploreObjectsProps struct {
	Config   nativeinternal.FeatureProgrammer_IConfig
	Functor  *nativehelpers.FunctionProgrammer
	Input    *shimast.Node
	Metadata *schemametadata.MetadataSchema
	Explore  nativeinternal.FeatureProgrammer_IExplore
}

func jsonStringifyProgrammer_explore_objects(props jsonStringifyProgrammer_exploreObjectsProps) *shimast.Node {
	if len(props.Metadata.Objects) == 1 {
		return jsonStringifyProgrammer_decode_object(struct {
			Functor *nativehelpers.FunctionProgrammer
			Input   *shimast.Node
			Object  *schemametadata.MetadataObjectType
			Explore nativeinternal.FeatureProgrammer_IExplore
		}{
			Functor: props.Functor,
			Input:   props.Input,
			Object:  props.Metadata.Objects[0].Type,
			Explore: props.Explore,
		})
	}
	index := 0
	if props.Metadata.Union_index != nil {
		index = *props.Metadata.Union_index
	}
	return jsonStringifyProgrammer_factory.NewCallExpression(
		jsonStringifyProgrammer_factory.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%su%d", jsonStringifyProgrammer_PREFIX, index))),
		nil,
		nil,
		jsonStringifyProgrammer_factory.NewNodeList(nativeinternal.FeatureProgrammer.ArgumentsArray(nativeinternal.FeatureProgrammer_ArgumentsArrayProps{
			Config:  nativeinternal.FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace},
			Input:   props.Input,
			Explore: props.Explore,
		})),
		shimast.NodeFlagsNone,
	)
}

type jsonStringifyProgrammer_exploreArraysProps struct {
	Context nativecontext.ITypiaContext
	Config  nativeinternal.FeatureProgrammer_IConfig
	Functor *nativehelpers.FunctionProgrammer
	Input   *shimast.Node
	Arrays  []*schemametadata.MetadataArray
	Explore nativeinternal.FeatureProgrammer_IExplore
}

func jsonStringifyProgrammer_explore_arrays(props jsonStringifyProgrammer_exploreArraysProps) *shimast.Node {
	return jsonStringifyProgrammer_explore_array_like_union_types(jsonStringifyProgrammer_exploreArrayLikeUnionTypesProps[*schemametadata.MetadataArray]{
		Config:  props.Config,
		Functor: props.Functor,
		Factory: func(next jsonStringifyProgrammer_arrayLikeFactoryProps[*schemametadata.MetadataArray]) *shimast.Node {
			return nativehelpers.UnionExplorer.Array(nativehelpers.UnionExplorer_ArrayProps{
				Config: nativehelpers.UnionExplorer_ArrayLikeConfig{
					Checker: func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node {
						return nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
							Context:  props.Context,
							Functor:  props.Functor,
							Metadata: v.Definition.(*schemametadata.MetadataArray).Type.Value,
							Input:    v.Input,
							Explore:  jsonStringifyProgrammer_checker_explore(v.Explore),
						})
					},
					Decoder: func(v nativehelpers.UnionExplorer_ArrayLikeDecoderProps) *shimast.Node {
						return jsonStringifyProgrammer_decode_array(jsonStringifyProgrammer_decodeArrayProps{
							Config:  props.Config,
							Functor: props.Functor,
							Input:   v.Input,
							Array:   v.Definition.(*schemametadata.MetadataArray),
							Explore: jsonStringifyProgrammer_feature_explore(v.Explore),
						})
					},
					Empty:   jsonStringifyProgrammer_factory.NewStringLiteral("[]", shimast.TokenFlagsNone),
					Success: jsonStringifyProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword),
					Failure: func(v nativehelpers.UnionExplorer_ArrayLikeFailureProps) *shimast.Node {
						return jsonStringifyProgrammer_create_throw_error(jsonStringifyProgrammer_throwProps{
							Context:  props.Context,
							Functor:  props.Functor,
							Expected: v.Expected,
							Input:    v.Input,
						})
					},
				},
				Parameters: next.Parameters,
				Input:      next.Input,
				Arrays:     next.Definitions,
				Explore:    next.Explore,
			})
		},
		Input:    props.Input,
		Elements: props.Arrays,
		Explore:  props.Explore,
	})
}

type jsonStringifyProgrammer_arrayLikeFactoryProps[T any] struct {
	Parameters  []*shimast.Node
	Input       *shimast.Node
	Definitions []T
	Explore     nativeinternal.FeatureProgrammer_IExplore
}

type jsonStringifyProgrammer_exploreArrayLikeUnionTypesProps[T interface {
	*schemametadata.MetadataArray | *schemametadata.MetadataTuple
}] struct {
	Config   nativeinternal.FeatureProgrammer_IConfig
	Functor  *nativehelpers.FunctionProgrammer
	Factory  func(next jsonStringifyProgrammer_arrayLikeFactoryProps[T]) *shimast.Node
	Input    *shimast.Node
	Elements []T
	Explore  nativeinternal.FeatureProgrammer_IExplore
}

func jsonStringifyProgrammer_explore_array_like_union_types[T interface {
	*schemametadata.MetadataArray | *schemametadata.MetadataTuple
}](props jsonStringifyProgrammer_exploreArrayLikeUnionTypesProps[T]) *shimast.Node {
	arrow := func(next struct {
		Parameters []*shimast.Node
		Explore    nativeinternal.FeatureProgrammer_IExplore
		Input      *shimast.Node
	}) *shimast.Node {
		return props.Factory(jsonStringifyProgrammer_arrayLikeFactoryProps[T]{
			Definitions: props.Elements,
			Parameters:  next.Parameters,
			Input:       next.Input,
			Explore:     next.Explore,
		})
	}
	arrayExplore := props.Explore
	arrayExplore.Source = "function"
	arrayExplore.From = "array"
	return jsonStringifyProgrammer_factory.NewCallExpression(
		jsonStringifyProgrammer_factory.NewIdentifier(props.Functor.EmplaceUnion(props.Config.Prefix, jsonStringifyProgrammer_array_like_names(props.Elements), func() *shimast.Node {
			explore := arrayExplore
			explore.Postfix = ""
			return arrow(struct {
				Parameters []*shimast.Node
				Explore    nativeinternal.FeatureProgrammer_IExplore
				Input      *shimast.Node
			}{
				Parameters: nativeinternal.FeatureProgrammer.ParameterDeclarations(nativeinternal.FeatureProgrammer_ParameterDeclarationsProps{
					Config: nativeinternal.FeatureProgrammer_ParameterConfig{Path: props.Config.Path, Trace: props.Config.Trace},
					Type:   nativefactories.TypeFactory.Keyword("any"),
					Input:  jsonStringifyProgrammer_factory.NewIdentifier("input"),
				}),
				Explore: explore,
				Input:   jsonStringifyProgrammer_factory.NewIdentifier("input"),
			})
		})),
		nil,
		nil,
		jsonStringifyProgrammer_factory.NewNodeList(nativeinternal.FeatureProgrammer.ArgumentsArray(nativeinternal.FeatureProgrammer_ArgumentsArrayProps{
			Config:  nativeinternal.FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace},
			Explore: arrayExplore,
			Input:   props.Input,
		})),
		shimast.NodeFlagsNone,
	)
}

func jsonStringifyProgrammer_wrap_required(props struct {
	Input      *shimast.Node
	Metadata   *schemametadata.MetadataSchema
	Explore    nativeinternal.FeatureProgrammer_IExplore
	Expression *shimast.Node
}) *shimast.Node {
	if props.Metadata.IsRequired() && props.Metadata.Any == false {
		return props.Expression
	}
	alternate := jsonStringifyProgrammer_factory.NewIdentifier("undefined")
	if props.Explore.From == "array" {
		alternate = jsonStringifyProgrammer_factory.NewStringLiteral("null", shimast.TokenFlagsNone)
	}
	return jsonStringifyProgrammer_factory.NewConditionalExpression(
		jsonStringifyProgrammer_binary(jsonStringifyProgrammer_factory.NewIdentifier("undefined"), shimast.KindExclamationEqualsEqualsToken, props.Input),
		nil,
		props.Expression,
		nil,
		alternate,
	)
}

func jsonStringifyProgrammer_wrap_nullable(props struct {
	Input      *shimast.Node
	Metadata   *schemametadata.MetadataSchema
	Expression *shimast.Node
}) *shimast.Node {
	if props.Metadata.Nullable == false {
		return props.Expression
	}
	return jsonStringifyProgrammer_factory.NewConditionalExpression(
		jsonStringifyProgrammer_binary(jsonStringifyProgrammer_factory.NewKeywordExpression(shimast.KindNullKeyword), shimast.KindExclamationEqualsEqualsToken, props.Input),
		nil,
		props.Expression,
		nil,
		jsonStringifyProgrammer_factory.NewStringLiteral("null", shimast.TokenFlagsNone),
	)
}

func jsonStringifyProgrammer_wrap_functional(props struct {
	Input      *shimast.Node
	Metadata   *schemametadata.MetadataSchema
	Explore    nativeinternal.FeatureProgrammer_IExplore
	Expression *shimast.Node
}) *shimast.Node {
	if len(props.Metadata.Functions) == 0 {
		return props.Expression
	}
	return jsonStringifyProgrammer_factory.NewConditionalExpression(
		jsonStringifyProgrammer_binary(jsonStringifyProgrammer_factory.NewStringLiteral("function", shimast.TokenFlagsNone), shimast.KindExclamationEqualsEqualsToken, nativefactories.ValueFactory.TYPEOF(props.Input)),
		nil,
		props.Expression,
		nil,
		jsonStringifyProgrammer_decode_functional(props.Explore),
	)
}

type jsonStringifyProgrammer_iterateProps struct {
	Context  nativecontext.ITypiaContext
	Functor  *nativehelpers.FunctionProgrammer
	Input    *shimast.Node
	Unions   []jsonStringifyProgrammer_IUnion
	Expected string
}

func jsonStringifyProgrammer_iterate(props jsonStringifyProgrammer_iterateProps) *shimast.Node {
	statements := []*shimast.Node{}
	for _, union := range props.Unions {
		statements = append(statements, jsonStringifyProgrammer_factory.NewIfStatement(
			union.Is(),
			jsonStringifyProgrammer_factory.NewReturnStatement(union.Value()),
			nil,
		))
	}
	statements = append(statements, jsonStringifyProgrammer_create_throw_error(jsonStringifyProgrammer_throwProps{
		Context:  props.Context,
		Functor:  props.Functor,
		Input:    props.Input,
		Expected: props.Expected,
	}))
	return jsonStringifyProgrammer_factory.NewBlock(jsonStringifyProgrammer_factory.NewNodeList(statements), true)
}

func jsonStringifyProgrammer_configure(props struct {
	Context   nativecontext.ITypiaContext
	Functor   *nativehelpers.FunctionProgrammer
	Validated bool
}) nativeinternal.FeatureProgrammer_IConfig {
	var config nativeinternal.FeatureProgrammer_IConfig
	config = nativeinternal.FeatureProgrammer_IConfig{
		Types: nativeinternal.FeatureProgrammer_IConfig_ITypes{
			Input: func(t *shimchecker.Type, name *string) *shimast.TypeNode {
				if name != nil {
					return jsonStringifyProgrammer_factory.NewTypeReferenceNode(jsonStringifyProgrammer_factory.NewIdentifier(*name), nil)
				}
				return jsonStringifyProgrammer_factory.NewTypeReferenceNode(jsonStringifyProgrammer_factory.NewIdentifier(nativefactories.TypeFactory.GetFullName(nativefactories.TypeFactory_GetFullNameProps{
					Checker: props.Context.Checker,
					Type:    t,
				})), nil)
			},
			Output: func(t *shimchecker.Type, name *string) *shimast.TypeNode {
				return nativefactories.TypeFactory.Keyword("string")
			},
		},
		Prefix:      jsonStringifyProgrammer_PREFIX,
		Trace:       false,
		Path:        false,
		Initializer: jsonStringifyProgrammer_initializer,
		Decoder: func(next nativeinternal.FeatureProgrammer_DecoderProps) *shimast.Node {
			return jsonStringifyProgrammer_decode(struct {
				Context   nativecontext.ITypiaContext
				Config    nativeinternal.FeatureProgrammer_IConfig
				Functor   *nativehelpers.FunctionProgrammer
				Input     *shimast.Node
				Metadata  *schemametadata.MetadataSchema
				Explore   nativeinternal.FeatureProgrammer_IExplore
				Validated bool
			}{
				Context:   props.Context,
				Functor:   props.Functor,
				Config:    config,
				Metadata:  next.Metadata,
				Input:     next.Input,
				Explore:   next.Explore,
				Validated: props.Validated,
			})
		},
		Objector: nativeinternal.FeatureProgrammer_IConfig_IObjector{
			Checker: func(next nativeinternal.FeatureProgrammer_ObjectorCheckerProps) *shimast.Node {
				return nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
					Context:  props.Context,
					Functor:  props.Functor,
					Metadata: next.Metadata,
					Input:    next.Input,
					Explore:  jsonStringifyProgrammer_checker_explore(next.Explore),
				})
			},
			Decoder: func(next nativeinternal.FeatureProgrammer_ObjectorDecoderProps) *shimast.Node {
				return jsonStringifyProgrammer_decode_object(struct {
					Functor *nativehelpers.FunctionProgrammer
					Input   *shimast.Node
					Object  *schemametadata.MetadataObjectType
					Explore nativeinternal.FeatureProgrammer_IExplore
				}{Functor: props.Functor, Input: next.Input, Object: next.Object, Explore: next.Explore})
			},
			Joiner: func(next nativeinternal.FeatureProgrammer_ObjectorJoinerProps) *shimast.Node {
				return nativehelpers.StringifyJoiner.Object(nativehelpers.StringifyJoiner_ObjectProps{
					Context: props.Context,
					Entries: next.Entries,
				})
			},
			Unionizer: func(next nativeinternal.FeatureProgrammer_ObjectorUnionizerProps) *shimast.Node {
				return nativeiterate.Decode_union_object(nativeiterate.Decode_union_objectProps{
					Checker: func(v nativeiterate.Decode_union_object_next) *shimast.Node {
						return nativeprogrammers.IsProgrammer.Decode_object(nativeprogrammers.IsProgrammer_DecodeObjectProps{
							Context: props.Context,
							Functor: props.Functor,
							Input:   v.Input,
							Object:  v.Object,
							Explore: jsonStringifyProgrammer_feature_explore(v.Explore),
						})
					},
					Decoder: func(v nativeiterate.Decode_union_object_next) *shimast.Node {
						return jsonStringifyProgrammer_decode_object(struct {
							Functor *nativehelpers.FunctionProgrammer
							Input   *shimast.Node
							Object  *schemametadata.MetadataObjectType
							Explore nativeinternal.FeatureProgrammer_IExplore
						}{Functor: props.Functor, Input: v.Input, Object: v.Object, Explore: jsonStringifyProgrammer_feature_explore(v.Explore)})
					},
					Success: func(exp *shimast.Expression) *shimast.Node {
						return exp
					},
					Escaper: func(v nativeiterate.Decode_union_object_escape) *shimast.Node {
						return jsonStringifyProgrammer_create_throw_error(jsonStringifyProgrammer_throwProps{
							Context:  props.Context,
							Functor:  props.Functor,
							Expected: v.Expected,
							Input:    v.Input,
						})
					},
					Objects: next.Objects,
					Explore: next.Explore,
					Input:   next.Input,
				})
			},
			Failure: func(next nativeinternal.FeatureProgrammer_ObjectorFailureProps) *shimast.Node {
				return jsonStringifyProgrammer_create_throw_error(jsonStringifyProgrammer_throwProps{
					Context:  props.Context,
					Functor:  props.Functor,
					Expected: next.Expected,
					Input:    next.Input,
				})
			},
		},
		Generator: nativeinternal.FeatureProgrammer_IConfig_IGenerator{
			Arrays: func(collection *schemametadata.MetadataCollection) []*shimast.Node {
				return jsonStringifyProgrammer_write_array_functions(struct {
					Config     nativeinternal.FeatureProgrammer_IConfig
					Functor    *nativehelpers.FunctionProgrammer
					Collection *schemametadata.MetadataCollection
				}{Config: config, Functor: props.Functor, Collection: collection})
			},
			Tuples: func(collection *schemametadata.MetadataCollection) []*shimast.Node {
				return jsonStringifyProgrammer_write_tuple_functions(struct {
					Context    nativecontext.ITypiaContext
					Config     nativeinternal.FeatureProgrammer_IConfig
					Functor    *nativehelpers.FunctionProgrammer
					Collection *schemametadata.MetadataCollection
					Validated  bool
				}{Context: props.Context, Config: config, Functor: props.Functor, Collection: collection, Validated: props.Validated})
			},
		},
	}
	return config
}

func jsonStringifyProgrammer_initializer(props nativeinternal.FeatureProgrammer_InitializerProps) nativeinternal.FeatureProgrammer_InitializerOutput {
	result := nativefactories.JsonMetadataFactory.Analyze(nativefactories.JsonMetadataFactory_IProps{
		Method:      props.Functor.Method,
		Checker:     props.Context.Checker,
		Transformer: props.Context.Transformer,
		Type:        props.Type,
	})
	return nativeinternal.FeatureProgrammer_InitializerOutput{
		Collection: result.Collection,
		Metadata:   result.Metadata,
	}
}

type jsonStringifyProgrammer_throwProps struct {
	Context  nativecontext.ITypiaContext
	Functor  *nativehelpers.FunctionProgrammer
	Expected string
	Input    *shimast.Node
}

func jsonStringifyProgrammer_create_throw_error(props jsonStringifyProgrammer_throwProps) *shimast.Node {
	return jsonStringifyProgrammer_factory.NewExpressionStatement(
		jsonStringifyProgrammer_factory.NewCallExpression(
			jsonStringifyProgrammer_internal(props.Context, "throwTypeGuardError"),
			nil,
			jsonStringifyProgrammer_factory.NewNodeList(nil),
			jsonStringifyProgrammer_factory.NewNodeList([]*shimast.Node{
				jsonStringifyProgrammer_factory.NewObjectLiteralExpression(
					jsonStringifyProgrammer_factory.NewNodeList([]*shimast.Node{
						jsonStringifyProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("method"), nil, nil, jsonStringifyProgrammer_factory.NewStringLiteral(props.Functor.Method, shimast.TokenFlagsNone)),
						jsonStringifyProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("expected"), nil, nil, jsonStringifyProgrammer_factory.NewStringLiteral(props.Expected, shimast.TokenFlagsNone)),
						jsonStringifyProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("value"), nil, nil, props.Input),
					}),
					true,
				),
			}),
			shimast.NodeFlagsNone,
		),
	)
}

type jsonStringifyProgrammer_IUnion struct {
	Type  string
	Is    func() *shimast.Node
	Value func() *shimast.Node
}

func jsonStringifyProgrammer_binary(left *shimast.Node, operator shimast.Kind, right *shimast.Node) *shimast.Node {
	return jsonStringifyProgrammer_factory.NewBinaryExpression(nil, left, nil, jsonStringifyProgrammer_factory.NewToken(operator), right)
}

func jsonStringifyProgrammer_internal(context nativecontext.ITypiaContext, name string) *shimast.Node {
	if importer, ok := context.Importer.(interface{ Internal(string) *shimast.Node }); ok {
		return importer.Internal(name)
	}
	return jsonStringifyProgrammer_factory.NewIdentifier(name)
}

func jsonStringifyProgrammer_method_text(modulo *shimast.Node) string {
	if modulo == nil {
		return ""
	}
	return modulo.Text()
}

func jsonStringifyProgrammer_feature_explore(input any) nativeinternal.FeatureProgrammer_IExplore {
	switch v := input.(type) {
	case nativeinternal.FeatureProgrammer_IExplore:
		return v
	case *nativeinternal.FeatureProgrammer_IExplore:
		return *v
	default:
		return nativeinternal.FeatureProgrammer_IExplore{}
	}
}

func jsonStringifyProgrammer_checker_explore(input any) nativeinternal.CheckerProgrammer_IExplore {
	v := jsonStringifyProgrammer_feature_explore(input)
	return nativeinternal.CheckerProgrammer_IExplore{
		Tracable: v.Tracable,
		Source:   v.Source,
		From:     v.From,
		Postfix:  v.Postfix,
		Start:    v.Start,
	}
}

func jsonStringifyProgrammer_explore_with(explore nativeinternal.FeatureProgrammer_IExplore, source string, from string) nativeinternal.FeatureProgrammer_IExplore {
	explore.Source = source
	explore.From = from
	return explore
}

func jsonStringifyProgrammer_some_arrays(values []*schemametadata.MetadataArray, pred func(*schemametadata.MetadataArray) bool) bool {
	for _, value := range values {
		if pred(value) {
			return true
		}
	}
	return false
}

func jsonStringifyProgrammer_some_objects(values []*schemametadata.MetadataObject, pred func(*schemametadata.MetadataObject) bool) bool {
	for _, value := range values {
		if pred(value) {
			return true
		}
	}
	return false
}

func jsonStringifyProgrammer_every_properties(values []*schemametadata.MetadataProperty, pred func(*schemametadata.MetadataProperty) bool) bool {
	for _, value := range values {
		if pred(value) == false {
			return false
		}
	}
	return true
}

func jsonStringifyProgrammer_every_strings(values []string, pred func(string) bool) bool {
	for _, value := range values {
		if pred(value) == false {
			return false
		}
	}
	return true
}

func jsonStringifyProgrammer_array_like_names[T interface {
	*schemametadata.MetadataArray | *schemametadata.MetadataTuple
}](values []T) string {
	names := make([]string, 0, len(values))
	for _, value := range values {
		switch typed := any(value).(type) {
		case *schemametadata.MetadataArray:
			names = append(names, typed.Type.Name)
		case *schemametadata.MetadataTuple:
			names = append(names, typed.Type.Name)
		}
	}
	return strings.Join(names, " | ")
}

func jsonStringifyProgrammer_merge_functions(groups ...map[string]*shimast.Node) map[string]*shimast.Node {
	output := map[string]*shimast.Node{}
	for _, group := range groups {
		for key, value := range group {
			output[key] = value
		}
	}
	return output
}
