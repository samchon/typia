package misc

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

type miscCloneProgrammerNamespace struct{}

var MiscCloneProgrammer = miscCloneProgrammerNamespace{}

type MiscCloneProgrammer_DecomposeProps struct {
	Validated bool
	Context   nativecontext.ITypiaContext
	Functor   *nativehelpers.FunctionProgrammer
	Type      *shimchecker.Type
	Name      *string
}

const miscCloneProgrammer_PREFIX = "_c"

var miscCloneProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (miscCloneProgrammerNamespace) Decompose(props MiscCloneProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
	config := miscCloneProgrammer_configure(struct {
		Context nativecontext.ITypiaContext
		Functor *nativehelpers.FunctionProgrammer
	}{
		Context: props.Context,
		Functor: props.Functor,
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
		Arrow: miscCloneProgrammer_factory.NewArrowFunction(
			nil,
			nil,
			miscCloneProgrammer_factory.NewNodeList(composed.Parameters),
			composed.Response,
			nil,
			miscCloneProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			composed.Body,
		),
	}
}

func (miscCloneProgrammerNamespace) Write(props nativecontext.IProgrammerProps) *shimast.Node {
	functor := nativehelpers.NewFunctionProgrammer(miscCloneProgrammer_method_text(props.Modulo))
	result := MiscCloneProgrammer.Decompose(MiscCloneProgrammer_DecomposeProps{
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

func miscCloneProgrammer_write_array_functions(props struct {
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
			Value: miscCloneProgrammer_factory.NewArrowFunction(
				nil,
				nil,
				miscCloneProgrammer_factory.NewNodeList(nativeinternal.FeatureProgrammer.ParameterDeclarations(nativeinternal.FeatureProgrammer_ParameterDeclarationsProps{
					Config: nativeinternal.FeatureProgrammer_ParameterConfig{Path: props.Config.Path, Trace: props.Config.Trace},
					Type:   nativefactories.TypeFactory.Keyword("any"),
					Input:  miscCloneProgrammer_factory.NewIdentifier("input"),
				})),
				nativefactories.TypeFactory.Keyword("any"),
				nil,
				miscCloneProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
				miscCloneProgrammer_decode_array_inline(miscCloneProgrammer_decodeArrayProps{
					Config:  props.Config,
					Functor: props.Functor,
					Input:   miscCloneProgrammer_factory.NewIdentifier("input"),
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

func miscCloneProgrammer_write_tuple_functions(props struct {
	Context    nativecontext.ITypiaContext
	Config     nativeinternal.FeatureProgrammer_IConfig
	Functor    *nativehelpers.FunctionProgrammer
	Collection *schemametadata.MetadataCollection
}) []*shimast.Node {
	output := []*shimast.Node{}
	for i, tuple := range props.Collection.Tuples() {
		if tuple.Recursive == false {
			continue
		}
		output = append(output, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
			Name: fmt.Sprintf("%st%d", props.Config.Prefix, i),
			Value: miscCloneProgrammer_factory.NewArrowFunction(
				nil,
				nil,
				miscCloneProgrammer_factory.NewNodeList(nativeinternal.FeatureProgrammer.ParameterDeclarations(nativeinternal.FeatureProgrammer_ParameterDeclarationsProps{
					Config: nativeinternal.FeatureProgrammer_ParameterConfig{Path: props.Config.Path, Trace: props.Config.Trace},
					Type:   nativefactories.TypeFactory.Keyword("any"),
					Input:  miscCloneProgrammer_factory.NewIdentifier("input"),
				})),
				nativefactories.TypeFactory.Keyword("any"),
				nil,
				miscCloneProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
				miscCloneProgrammer_decode_tuple_inline(miscCloneProgrammer_decodeTupleInlineProps{
					Context: props.Context,
					Config:  props.Config,
					Functor: props.Functor,
					Input:   miscCloneProgrammer_factory.NewIdentifier("input"),
					Tuple:   tuple,
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

func miscCloneProgrammer_decode(props struct {
	Context  nativecontext.ITypiaContext
	Config   nativeinternal.FeatureProgrammer_IConfig
	Functor  *nativehelpers.FunctionProgrammer
	Input    *shimast.Node
	Metadata *schemametadata.MetadataSchema
	Explore  nativeinternal.FeatureProgrammer_IExplore
}) *shimast.Node {
	if props.Metadata.Any ||
		miscCloneProgrammer_some_arrays(props.Metadata.Arrays, func(a *schemametadata.MetadataArray) bool { return a.Type.Value.Any }) ||
		miscCloneProgrammer_some_tuples(props.Metadata.Tuples, func(t *schemametadata.MetadataTuple) bool {
			return len(t.Type.Elements) != 0 && miscCloneProgrammer_every_schema(t.Type.Elements, func(e *schemametadata.MetadataSchema) bool { return e.Any })
		}) {
		return miscCloneProgrammer_factory.NewCallExpression(
			miscCloneProgrammer_internal(props.Context, "miscCloneAny"),
			nil,
			nil,
			miscCloneProgrammer_factory.NewNodeList([]*shimast.Node{props.Input}),
			shimast.NodeFlagsNone,
		)
	}

	unions := []miscCloneProgrammer_IUnion{}
	if len(props.Metadata.Functions) != 0 {
		unions = append(unions, miscCloneProgrammer_IUnion{
			Type: "functional",
			Is: func() *shimast.Node {
				return miscCloneProgrammer_factory.NewBinaryExpression(
					nil,
					miscCloneProgrammer_factory.NewStringLiteral("function", shimast.TokenFlagsNone),
					nil,
					miscCloneProgrammer_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
					miscCloneProgrammer_factory.NewTypeOfExpression(props.Input),
				)
			},
			Value: func() *shimast.Node {
				return miscCloneProgrammer_factory.NewIdentifier("undefined")
			},
		})
	}
	for _, tuple := range props.Metadata.Tuples {
		tuple := tuple
		unions = append(unions, miscCloneProgrammer_IUnion{
			Type: "tuple",
			Is: func() *shimast.Node {
				partial := schemametadata.MetadataSchema_initialize()
				partial.Tuples = append(partial.Tuples, tuple)
				return nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
					Context:  props.Context,
					Functor:  props.Functor,
					Metadata: partial,
					Input:    props.Input,
					Explore: nativeinternal.CheckerProgrammer_IExplore{
						Tracable: props.Explore.Tracable,
						Source:   props.Explore.Source,
						From:     props.Explore.From,
						Postfix:  props.Explore.Postfix,
						Start:    props.Explore.Start,
					},
				})
			},
			Value: func() *shimast.Node {
				return miscCloneProgrammer_decode_tuple(miscCloneProgrammer_decodeTupleProps{
					Context: props.Context,
					Config:  props.Config,
					Functor: props.Functor,
					Input:   props.Input,
					Tuple:   tuple,
					Explore: props.Explore,
				})
			},
		})
	}
	if len(props.Metadata.Arrays) != 0 {
		unions = append(unions, miscCloneProgrammer_IUnion{
			Type: "array",
			Is: func() *shimast.Node {
				return nativefactories.ExpressionFactory.IsArray(props.Input)
			},
			Value: func() *shimast.Node {
				explore := props.Explore
				explore.From = "array"
				return miscCloneProgrammer_explore_arrays(miscCloneProgrammer_exploreArraysProps{
					Context: props.Context,
					Config:  props.Config,
					Functor: props.Functor,
					Input:   props.Input,
					Arrays:  props.Metadata.Arrays,
					Explore: explore,
				})
			},
		})
	}
	if len(props.Metadata.Sets) != 0 {
		unions = append(unions, miscCloneProgrammer_IUnion{
			Type: "set",
			Is: func() *shimast.Node {
				return nativefactories.ExpressionFactory.IsInstanceOf("Set", props.Input)
			},
			Value: func() *shimast.Node {
				explore := props.Explore
				explore.From = "array"
				return miscCloneProgrammer_explore_sets(miscCloneProgrammer_exploreSetsProps{
					Context: props.Context,
					Config:  props.Config,
					Functor: props.Functor,
					Input:   props.Input,
					Sets:    props.Metadata.Sets,
					Explore: explore,
				})
			},
		})
	}
	if len(props.Metadata.Maps) != 0 {
		unions = append(unions, miscCloneProgrammer_IUnion{
			Type: "map",
			Is: func() *shimast.Node {
				return nativefactories.ExpressionFactory.IsInstanceOf("Map", props.Input)
			},
			Value: func() *shimast.Node {
				explore := props.Explore
				explore.From = "array"
				return miscCloneProgrammer_explore_maps(miscCloneProgrammer_exploreMapsProps{
					Context: props.Context,
					Config:  props.Config,
					Functor: props.Functor,
					Input:   props.Input,
					Maps:    props.Metadata.Maps,
					Explore: explore,
				})
			},
		})
	}
	for _, native := range props.Metadata.Natives {
		native := native
		unions = append(unions, miscCloneProgrammer_IUnion{
			Type: "native",
			Is: func() *shimast.Node {
				return nativefactories.ExpressionFactory.IsInstanceOf(native.Name, props.Input)
			},
			Value: func() *shimast.Node {
				if native.Name == "Boolean" || native.Name == "Number" || native.Name == "String" {
					return miscCloneProgrammer_factory.NewCallExpression(
						nativefactories.IdentifierFactory.Access(props.Input, "valueOf"),
						nil,
						nil,
						nil,
						shimast.NodeFlagsNone,
					)
				}
				return miscCloneProgrammer_decode_native(struct {
					Type  string
					Input *shimast.Node
				}{Type: native.Name, Input: props.Input})
			},
		})
	}
	if len(props.Metadata.Objects) != 0 {
		unions = append(unions, miscCloneProgrammer_IUnion{
			Type: "object",
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
				return miscCloneProgrammer_explore_objects(miscCloneProgrammer_exploreObjectsProps{
					Config:   props.Config,
					Functor:  props.Functor,
					Input:    props.Input,
					Metadata: props.Metadata,
					Explore:  explore,
				})
			},
		})
	}

	if len(unions) == 0 {
		return props.Input
	}
	if len(unions) == 1 && props.Metadata.Size() == 1 {
		value := unions[0].Value()
		if (props.Metadata.Nullable || props.Metadata.IsRequired() == false) && miscCloneProgrammer_is_instance(props.Metadata) {
			value = miscCloneProgrammer_factory.NewConditionalExpression(
				props.Input,
				nil,
				value,
				nil,
				props.Input,
			)
		}
		return miscCloneProgrammer_factory.NewAsExpression(value, nativefactories.TypeFactory.Keyword("any"))
	}
	last := props.Input
	for i := len(unions) - 1; i >= 0; i-- {
		u := unions[i]
		last = miscCloneProgrammer_factory.NewConditionalExpression(u.Is(), nil, u.Value(), nil, last)
	}
	return miscCloneProgrammer_factory.NewAsExpression(last, nativefactories.TypeFactory.Keyword("any"))
}

type miscCloneProgrammer_IUnion struct {
	Type  string
	Is    func() *shimast.Node
	Value func() *shimast.Node
}

func miscCloneProgrammer_decode_object(props struct {
	Functor *nativehelpers.FunctionProgrammer
	Input   *shimast.Node
	Object  *schemametadata.MetadataObjectType
	Explore nativeinternal.FeatureProgrammer_IExplore
}) *shimast.Node {
	return nativeinternal.FeatureProgrammer.Decode_object(nativeinternal.FeatureProgrammer_DecodeObjectProps{
		Config: nativeinternal.FeatureProgrammer_DecodeObjectConfig{
			Trace:  false,
			Path:   false,
			Prefix: miscCloneProgrammer_PREFIX,
		},
		Functor: props.Functor,
		Input:   props.Input,
		Object:  props.Object,
		Explore: props.Explore,
	})
}

type miscCloneProgrammer_decodeArrayProps struct {
	Config  nativeinternal.FeatureProgrammer_IConfig
	Functor *nativehelpers.FunctionProgrammer
	Input   *shimast.Node
	Array   *schemametadata.MetadataArray
	Explore nativeinternal.FeatureProgrammer_IExplore
}

func miscCloneProgrammer_decode_array(props miscCloneProgrammer_decodeArrayProps) *shimast.Node {
	if props.Array.Type.Recursive {
		return miscCloneProgrammer_factory.NewCallExpression(
			miscCloneProgrammer_factory.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%sa%d", props.Config.Prefix, *props.Array.Type.Index))),
			nil,
			nil,
			miscCloneProgrammer_factory.NewNodeList(nativeinternal.FeatureProgrammer.ArgumentsArray(nativeinternal.FeatureProgrammer_ArgumentsArrayProps{
				Config:  nativeinternal.FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace},
				Explore: miscCloneProgrammer_explore_with(props.Explore, "function", "array"),
				Input:   props.Input,
			})),
			shimast.NodeFlagsNone,
		)
	}
	return miscCloneProgrammer_decode_array_inline(props)
}

func miscCloneProgrammer_decode_array_inline(props miscCloneProgrammer_decodeArrayProps) *shimast.Node {
	return nativeinternal.FeatureProgrammer.Decode_array(nativeinternal.FeatureProgrammer_DecodeArrayProps{
		Config: nativeinternal.FeatureProgrammer_DecodeArrayConfig{
			Trace:   props.Config.Trace,
			Path:    props.Config.Path,
			Prefix:  props.Config.Prefix,
			Decoder: props.Config.Decoder,
		},
		Functor: props.Functor,
		Combiner: func(next struct {
			Input *shimast.Expression
			Arrow *shimast.Node
		}) *shimast.Node {
			return nativehelpers.CloneJoiner.Array(nativehelpers.CloneJoiner_ArrayProps{
				Input: next.Input,
				Arrow: next.Arrow,
			})
		},
		Array:   props.Array,
		Input:   props.Input,
		Explore: props.Explore,
	})
}

type miscCloneProgrammer_decodeTupleProps struct {
	Context nativecontext.ITypiaContext
	Config  nativeinternal.FeatureProgrammer_IConfig
	Functor *nativehelpers.FunctionProgrammer
	Input   *shimast.Node
	Tuple   *schemametadata.MetadataTuple
	Explore nativeinternal.FeatureProgrammer_IExplore
}

func miscCloneProgrammer_decode_tuple(props miscCloneProgrammer_decodeTupleProps) *shimast.Node {
	if props.Tuple.Type.Recursive {
		return miscCloneProgrammer_factory.NewCallExpression(
			miscCloneProgrammer_factory.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%st%d", props.Config.Prefix, *props.Tuple.Type.Index))),
			nil,
			nil,
			miscCloneProgrammer_factory.NewNodeList(nativeinternal.FeatureProgrammer.ArgumentsArray(nativeinternal.FeatureProgrammer_ArgumentsArrayProps{
				Config:  nativeinternal.FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace},
				Explore: miscCloneProgrammer_explore_with(props.Explore, "function", props.Explore.From),
				Input:   props.Input,
			})),
			shimast.NodeFlagsNone,
		)
	}
	return miscCloneProgrammer_decode_tuple_inline(miscCloneProgrammer_decodeTupleInlineProps{
		Context: props.Context,
		Config:  props.Config,
		Functor: props.Functor,
		Input:   props.Input,
		Tuple:   props.Tuple.Type,
		Explore: props.Explore,
	})
}

type miscCloneProgrammer_decodeTupleInlineProps struct {
	Context nativecontext.ITypiaContext
	Config  nativeinternal.FeatureProgrammer_IConfig
	Functor *nativehelpers.FunctionProgrammer
	Input   *shimast.Node
	Tuple   *schemametadata.MetadataTupleType
	Explore nativeinternal.FeatureProgrammer_IExplore
}

func miscCloneProgrammer_decode_tuple_inline(props miscCloneProgrammer_decodeTupleInlineProps) *shimast.Node {
	elements := []*shimast.Node{}
	for index, elem := range props.Tuple.Elements {
		if elem.Rest != nil {
			continue
		}
		postfix := fmt.Sprintf("\"[%d]\"", index)
		if props.Explore.Postfix != "" {
			postfix = fmt.Sprintf("%s[%d]\"", nativeiterate.Postfix_of_tuple_export(props.Explore.Postfix), index)
		}
		explore := props.Explore
		explore.From = "array"
		explore.Postfix = postfix
		elements = append(elements, miscCloneProgrammer_decode(struct {
			Context  nativecontext.ITypiaContext
			Config   nativeinternal.FeatureProgrammer_IConfig
			Functor  *nativehelpers.FunctionProgrammer
			Input    *shimast.Node
			Metadata *schemametadata.MetadataSchema
			Explore  nativeinternal.FeatureProgrammer_IExplore
		}{
			Context:  props.Context,
			Config:   props.Config,
			Functor:  props.Functor,
			Input:    miscCloneProgrammer_factory.NewElementAccessExpression(props.Input, nil, nativefactories.ExpressionFactory.Number(index), shimast.NodeFlagsNone),
			Metadata: elem,
			Explore:  explore,
		}))
	}
	var rest *shimast.Node
	if len(props.Tuple.Elements) != 0 {
		last := props.Tuple.Elements[len(props.Tuple.Elements)-1]
		if last.Rest != nil {
			start := len(props.Tuple.Elements) - 1
			explore := props.Explore
			explore.Start = &start
			rest = miscCloneProgrammer_decode(struct {
				Context  nativecontext.ITypiaContext
				Config   nativeinternal.FeatureProgrammer_IConfig
				Functor  *nativehelpers.FunctionProgrammer
				Input    *shimast.Node
				Metadata *schemametadata.MetadataSchema
				Explore  nativeinternal.FeatureProgrammer_IExplore
			}{
				Context: props.Context,
				Config:  props.Config,
				Functor: props.Functor,
				Input: miscCloneProgrammer_factory.NewCallExpression(
					nativefactories.IdentifierFactory.Access(props.Input, "slice"),
					nil,
					nil,
					miscCloneProgrammer_factory.NewNodeList([]*shimast.Node{nativefactories.ExpressionFactory.Number(start)}),
					shimast.NodeFlagsNone,
				),
				Metadata: nativeiterate.Wrap_metadata_rest_tuple_export(last.Rest),
				Explore:  explore,
			})
		}
	}
	return nativehelpers.CloneJoiner.Tuple(nativehelpers.CloneJoiner_TupleProps{
		Elements: elements,
		Rest:     rest,
	})
}

func miscCloneProgrammer_decode_native(props struct {
	Type  string
	Input *shimast.Node
}) *shimast.Node {
	switch props.Type {
	case "Date", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "BigUint64Array", "Int8Array", "Int16Array", "Int32Array", "BigInt64Array", "Float32Array", "Float64Array", "RegExp":
		return miscCloneProgrammer_factory.NewNewExpression(
			miscCloneProgrammer_factory.NewIdentifier(props.Type),
			nil,
			miscCloneProgrammer_factory.NewNodeList([]*shimast.Node{props.Input}),
		)
	case "ArrayBuffer", "SharedArrayBuffer":
		return miscCloneProgrammer_decode_native_buffer(props.Type, props.Input)
	case "DataView":
		return miscCloneProgrammer_factory.NewNewExpression(
			miscCloneProgrammer_factory.NewIdentifier("DataView"),
			nil,
			miscCloneProgrammer_factory.NewNodeList([]*shimast.Node{nativefactories.IdentifierFactory.Access(props.Input, "buffer")}),
		)
	default:
		return miscCloneProgrammer_factory.NewCallExpression(
			miscCloneProgrammer_factory.NewIdentifier(props.Type),
			nil,
			nil,
			nil,
			shimast.NodeFlagsNone,
		)
	}
}

func miscCloneProgrammer_decode_native_buffer(typ string, input *shimast.Node) *shimast.Node {
	return nativefactories.ExpressionFactory.SelfCall(
		miscCloneProgrammer_factory.NewBlock(miscCloneProgrammer_factory.NewNodeList([]*shimast.Node{
			nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
				Name: "buffer",
				Value: miscCloneProgrammer_factory.NewNewExpression(
					miscCloneProgrammer_factory.NewIdentifier(typ),
					nil,
					miscCloneProgrammer_factory.NewNodeList([]*shimast.Node{nativefactories.IdentifierFactory.Access(input, "byteLength")}),
				),
			}),
			miscCloneProgrammer_factory.NewExpressionStatement(miscCloneProgrammer_factory.NewCallExpression(
				nativefactories.IdentifierFactory.Access(
					miscCloneProgrammer_factory.NewNewExpression(
						miscCloneProgrammer_factory.NewIdentifier("Uint8Array"),
						nil,
						miscCloneProgrammer_factory.NewNodeList([]*shimast.Node{miscCloneProgrammer_factory.NewIdentifier("buffer")}),
					),
					"set",
				),
				nil,
				nil,
				miscCloneProgrammer_factory.NewNodeList([]*shimast.Node{
					miscCloneProgrammer_factory.NewNewExpression(
						miscCloneProgrammer_factory.NewIdentifier("Uint8Array"),
						nil,
						miscCloneProgrammer_factory.NewNodeList([]*shimast.Node{input}),
					),
				}),
				shimast.NodeFlagsNone,
			)),
			miscCloneProgrammer_factory.NewReturnStatement(miscCloneProgrammer_factory.NewIdentifier("buffer")),
		}), true),
	)
}

type miscCloneProgrammer_exploreArraysProps struct {
	Context nativecontext.ITypiaContext
	Config  nativeinternal.FeatureProgrammer_IConfig
	Functor *nativehelpers.FunctionProgrammer
	Input   *shimast.Node
	Arrays  []*schemametadata.MetadataArray
	Explore nativeinternal.FeatureProgrammer_IExplore
}

func miscCloneProgrammer_explore_arrays(props miscCloneProgrammer_exploreArraysProps) *shimast.Node {
	return miscCloneProgrammer_factory.NewCallExpression(
		nativehelpers.UnionExplorer.Array(nativehelpers.UnionExplorer_ArrayProps{
			Config: nativehelpers.UnionExplorer_ArrayLikeConfig{
				Checker: func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node {
					return nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
						Context:  props.Context,
						Functor:  props.Functor,
						Input:    v.Input,
						Metadata: v.Definition.(*schemametadata.MetadataArray).Type.Value,
						Explore:  miscCloneProgrammer_checker_explore(v.Explore),
					})
				},
				Decoder: func(v nativehelpers.UnionExplorer_ArrayLikeDecoderProps) *shimast.Node {
					return miscCloneProgrammer_decode_array(miscCloneProgrammer_decodeArrayProps{
						Config:  props.Config,
						Functor: props.Functor,
						Input:   v.Input,
						Array:   v.Definition.(*schemametadata.MetadataArray),
						Explore: miscCloneProgrammer_feature_explore(v.Explore),
					})
				},
				Empty:   miscCloneProgrammer_factory.NewIdentifier("[]"),
				Success: miscCloneProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword),
				Failure: func(v nativehelpers.UnionExplorer_ArrayLikeFailureProps) *shimast.Node {
					return miscCloneProgrammer_create_throw_error(miscCloneProgrammer_throwProps{
						Context:  props.Context,
						Functor:  props.Functor,
						Expected: v.Expected,
						Input:    v.Input,
					})
				},
			},
			Parameters: nil,
			Input:      props.Input,
			Arrays:     props.Arrays,
			Explore:    props.Explore,
		}),
		nil,
		nil,
		nil,
		shimast.NodeFlagsNone,
	)
}

type miscCloneProgrammer_exploreSetsProps struct {
	Context nativecontext.ITypiaContext
	Config  nativeinternal.FeatureProgrammer_IConfig
	Functor *nativehelpers.FunctionProgrammer
	Input   *shimast.Node
	Sets    []*schemametadata.MetadataSet
	Explore nativeinternal.FeatureProgrammer_IExplore
}

func miscCloneProgrammer_explore_sets(props miscCloneProgrammer_exploreSetsProps) *shimast.Node {
	return miscCloneProgrammer_factory.NewCallExpression(
		nativehelpers.UnionExplorer.Set(nativehelpers.UnionExplorer_SetProps{
			Config: nativehelpers.UnionExplorer_ArrayLikeConfig{
				Checker: func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node {
					return nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
						Context:  props.Context,
						Functor:  props.Functor,
						Input:    v.Input,
						Metadata: v.Definition.(*schemametadata.MetadataArray).Type.Value,
						Explore:  miscCloneProgrammer_checker_explore(v.Explore),
					})
				},
				Decoder: func(v nativehelpers.UnionExplorer_ArrayLikeDecoderProps) *shimast.Node {
					return miscCloneProgrammer_factory.NewNewExpression(
						miscCloneProgrammer_factory.NewIdentifier("Set"),
						miscCloneProgrammer_factory.NewNodeList([]*shimast.Node{nativefactories.TypeFactory.Keyword("any")}),
						miscCloneProgrammer_factory.NewNodeList([]*shimast.Node{
							miscCloneProgrammer_decode_array(miscCloneProgrammer_decodeArrayProps{
								Config:  props.Config,
								Functor: props.Functor,
								Input:   v.Input,
								Array:   v.Definition.(*schemametadata.MetadataArray),
								Explore: miscCloneProgrammer_feature_explore(v.Explore),
							}),
						}),
					)
				},
				Empty: miscCloneProgrammer_factory.NewNewExpression(
					miscCloneProgrammer_factory.NewIdentifier("Set"),
					miscCloneProgrammer_factory.NewNodeList([]*shimast.Node{nativefactories.TypeFactory.Keyword("any")}),
					nil,
				),
				Success: miscCloneProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword),
				Failure: func(v nativehelpers.UnionExplorer_ArrayLikeFailureProps) *shimast.Node {
					return miscCloneProgrammer_create_throw_error(miscCloneProgrammer_throwProps{
						Context:  props.Context,
						Functor:  props.Functor,
						Expected: v.Expected,
						Input:    v.Input,
					})
				},
			},
			Parameters: nil,
			Input:      props.Input,
			Sets:       props.Sets,
			Explore:    props.Explore,
		}),
		nil,
		nil,
		nil,
		shimast.NodeFlagsNone,
	)
}

type miscCloneProgrammer_exploreMapsProps struct {
	Context nativecontext.ITypiaContext
	Config  nativeinternal.FeatureProgrammer_IConfig
	Functor *nativehelpers.FunctionProgrammer
	Input   *shimast.Node
	Maps    []*schemametadata.MetadataMap
	Explore nativeinternal.FeatureProgrammer_IExplore
}

func miscCloneProgrammer_explore_maps(props miscCloneProgrammer_exploreMapsProps) *shimast.Node {
	return miscCloneProgrammer_factory.NewCallExpression(
		nativehelpers.UnionExplorer.Map(nativehelpers.UnionExplorer_MapProps{
			Config: nativehelpers.UnionExplorer_ArrayLikeConfig{
				Checker: func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node {
					pair := v.Definition.(*schemametadata.MetadataArray).Type.Value.Tuples[0].Type.Elements
					first := nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
						Context:  props.Context,
						Functor:  props.Functor,
						Input:    miscCloneProgrammer_factory.NewElementAccessExpression(v.Input, nil, nativefactories.ExpressionFactory.Number(0), shimast.NodeFlagsNone),
						Metadata: pair[0],
						Explore:  miscCloneProgrammer_checker_explore_with_postfix(v.Explore, "[0]"),
					})
					second := nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
						Context:  props.Context,
						Functor:  props.Functor,
						Input:    miscCloneProgrammer_factory.NewElementAccessExpression(v.Input, nil, nativefactories.ExpressionFactory.Number(1), shimast.NodeFlagsNone),
						Metadata: pair[1],
						Explore:  miscCloneProgrammer_checker_explore_with_postfix(v.Explore, "[1]"),
					})
					return miscCloneProgrammer_factory.NewBinaryExpression(nil, first, nil, miscCloneProgrammer_factory.NewToken(shimast.KindAmpersandAmpersandToken), second)
				},
				Decoder: func(v nativehelpers.UnionExplorer_ArrayLikeDecoderProps) *shimast.Node {
					return miscCloneProgrammer_factory.NewNewExpression(
						miscCloneProgrammer_factory.NewIdentifier("Map"),
						miscCloneProgrammer_factory.NewNodeList([]*shimast.Node{
							nativefactories.TypeFactory.Keyword("any"),
							nativefactories.TypeFactory.Keyword("any"),
						}),
						miscCloneProgrammer_factory.NewNodeList([]*shimast.Node{
							miscCloneProgrammer_decode_array(miscCloneProgrammer_decodeArrayProps{
								Config:  props.Config,
								Functor: props.Functor,
								Input:   v.Input,
								Array:   v.Definition.(*schemametadata.MetadataArray),
								Explore: miscCloneProgrammer_feature_explore(v.Explore),
							}),
						}),
					)
				},
				Empty: miscCloneProgrammer_factory.NewNewExpression(
					miscCloneProgrammer_factory.NewIdentifier("Map"),
					miscCloneProgrammer_factory.NewNodeList([]*shimast.Node{
						nativefactories.TypeFactory.Keyword("any"),
						nativefactories.TypeFactory.Keyword("any"),
					}),
					nil,
				),
				Success: miscCloneProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword),
				Failure: func(v nativehelpers.UnionExplorer_ArrayLikeFailureProps) *shimast.Node {
					return miscCloneProgrammer_create_throw_error(miscCloneProgrammer_throwProps{
						Context:  props.Context,
						Functor:  props.Functor,
						Expected: v.Expected,
						Input:    v.Input,
					})
				},
			},
			Parameters: nil,
			Input:      props.Input,
			Maps:       props.Maps,
			Explore:    props.Explore,
		}),
		nil,
		nil,
		nil,
		shimast.NodeFlagsNone,
	)
}

type miscCloneProgrammer_exploreObjectsProps struct {
	Config   nativeinternal.FeatureProgrammer_IConfig
	Functor  *nativehelpers.FunctionProgrammer
	Input    *shimast.Node
	Metadata *schemametadata.MetadataSchema
	Explore  nativeinternal.FeatureProgrammer_IExplore
}

func miscCloneProgrammer_explore_objects(props miscCloneProgrammer_exploreObjectsProps) *shimast.Node {
	if len(props.Metadata.Objects) == 1 {
		return miscCloneProgrammer_decode_object(struct {
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
	return miscCloneProgrammer_factory.NewCallExpression(
		miscCloneProgrammer_factory.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%su%d", miscCloneProgrammer_PREFIX, index))),
		nil,
		nil,
		miscCloneProgrammer_factory.NewNodeList(nativeinternal.FeatureProgrammer.ArgumentsArray(nativeinternal.FeatureProgrammer_ArgumentsArrayProps{
			Config:  nativeinternal.FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace},
			Input:   props.Input,
			Explore: props.Explore,
		})),
		shimast.NodeFlagsNone,
	)
}

func miscCloneProgrammer_configure(props struct {
	Context nativecontext.ITypiaContext
	Functor *nativehelpers.FunctionProgrammer
}) nativeinternal.FeatureProgrammer_IConfig {
	config := nativeinternal.FeatureProgrammer_IConfig{}
	config.Types = nativeinternal.FeatureProgrammer_IConfig_ITypes{
		Input: func(t *shimchecker.Type, name *string) *shimast.TypeNode {
			return miscCloneProgrammer_factory.NewTypeReferenceNode(miscCloneProgrammer_factory.NewIdentifier(miscCloneProgrammer_type_name(props.Context, t, name)), nil)
		},
		Output: func(t *shimchecker.Type, name *string) *shimast.TypeNode {
			return miscCloneProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
				File: "typia",
				Name: "Resolved",
				Arguments: []*shimast.TypeNode{
					miscCloneProgrammer_factory.NewTypeReferenceNode(miscCloneProgrammer_factory.NewIdentifier(miscCloneProgrammer_type_name(props.Context, t, name)), nil),
				},
			})
		},
	}
	config.Prefix = miscCloneProgrammer_PREFIX
	config.Trace = false
	config.Path = false
	config.Initializer = miscCloneProgrammer_initializer
	config.Decoder = func(next nativeinternal.FeatureProgrammer_DecoderProps) *shimast.Node {
		return miscCloneProgrammer_decode(struct {
			Context  nativecontext.ITypiaContext
			Config   nativeinternal.FeatureProgrammer_IConfig
			Functor  *nativehelpers.FunctionProgrammer
			Input    *shimast.Node
			Metadata *schemametadata.MetadataSchema
			Explore  nativeinternal.FeatureProgrammer_IExplore
		}{
			Context:  props.Context,
			Config:   config,
			Functor:  props.Functor,
			Input:    next.Input,
			Metadata: next.Metadata,
			Explore:  next.Explore,
		})
	}
	config.Objector = nativeinternal.FeatureProgrammer_IConfig_IObjector{
		Checker: func(next nativeinternal.FeatureProgrammer_ObjectorCheckerProps) *shimast.Node {
			return nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
				Context:  props.Context,
				Functor:  props.Functor,
				Input:    next.Input,
				Metadata: next.Metadata,
				Explore:  miscCloneProgrammer_checker_explore(next.Explore),
			})
		},
		Decoder: func(next nativeinternal.FeatureProgrammer_ObjectorDecoderProps) *shimast.Node {
			return miscCloneProgrammer_decode_object(struct {
				Functor *nativehelpers.FunctionProgrammer
				Input   *shimast.Node
				Object  *schemametadata.MetadataObjectType
				Explore nativeinternal.FeatureProgrammer_IExplore
			}{
				Functor: props.Functor,
				Input:   next.Input,
				Object:  next.Object,
				Explore: next.Explore,
			})
		},
		Joiner: func(next nativeinternal.FeatureProgrammer_ObjectorJoinerProps) *shimast.Node {
			return nativehelpers.CloneJoiner.Object(nativehelpers.CloneJoiner_ObjectProps{
				Input:   next.Input,
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
						Explore: miscCloneProgrammer_feature_explore(v.Explore),
					})
				},
				Decoder: func(v nativeiterate.Decode_union_object_next) *shimast.Node {
					return miscCloneProgrammer_decode_object(struct {
						Functor *nativehelpers.FunctionProgrammer
						Input   *shimast.Node
						Object  *schemametadata.MetadataObjectType
						Explore nativeinternal.FeatureProgrammer_IExplore
					}{
						Functor: props.Functor,
						Input:   v.Input,
						Object:  v.Object,
						Explore: miscCloneProgrammer_feature_explore(v.Explore),
					})
				},
				Success: func(exp *shimast.Node) *shimast.Node { return exp },
				Escaper: func(v nativeiterate.Decode_union_object_escape) *shimast.Node {
					return miscCloneProgrammer_create_throw_error(miscCloneProgrammer_throwProps{
						Context:  props.Context,
						Functor:  props.Functor,
						Expected: v.Expected,
						Input:    v.Input,
					})
				},
				Input:   next.Input,
				Objects: next.Objects,
				Explore: next.Explore,
			})
		},
		Failure: func(next nativeinternal.FeatureProgrammer_ObjectorFailureProps) *shimast.Node {
			return miscCloneProgrammer_create_throw_error(miscCloneProgrammer_throwProps{
				Context:  props.Context,
				Functor:  props.Functor,
				Expected: next.Expected,
				Input:    next.Input,
			})
		},
	}
	config.Generator = nativeinternal.FeatureProgrammer_IConfig_IGenerator{
		Arrays: func(collection *schemametadata.MetadataCollection) []*shimast.Node {
			return miscCloneProgrammer_write_array_functions(struct {
				Config     nativeinternal.FeatureProgrammer_IConfig
				Functor    *nativehelpers.FunctionProgrammer
				Collection *schemametadata.MetadataCollection
			}{Config: config, Functor: props.Functor, Collection: collection})
		},
		Tuples: func(collection *schemametadata.MetadataCollection) []*shimast.Node {
			return miscCloneProgrammer_write_tuple_functions(struct {
				Context    nativecontext.ITypiaContext
				Config     nativeinternal.FeatureProgrammer_IConfig
				Functor    *nativehelpers.FunctionProgrammer
				Collection *schemametadata.MetadataCollection
			}{Context: props.Context, Config: config, Functor: props.Functor, Collection: collection})
		},
	}
	return config
}

func miscCloneProgrammer_initializer(props nativeinternal.FeatureProgrammer_InitializerProps) nativeinternal.FeatureProgrammer_InitializerOutput {
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
				output := []string{}
				for _, native := range next.Metadata.Natives {
					if native.Name == "WeakSet" {
						output = append(output, "unable to clone WeakSet")
					} else if native.Name == "WeakMap" {
						output = append(output, "unable to clone WeakMap")
					}
				}
				return output
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
			Errors: miscCloneProgrammer_errors(result.Errors),
		}))
	}
	return nativeinternal.FeatureProgrammer_InitializerOutput{
		Collection: collection,
		Metadata:   result.Data,
	}
}

type miscCloneProgrammer_throwProps struct {
	Context  nativecontext.ITypiaContext
	Functor  *nativehelpers.FunctionProgrammer
	Expected string
	Input    *shimast.Node
}

func miscCloneProgrammer_create_throw_error(props miscCloneProgrammer_throwProps) *shimast.Node {
	return miscCloneProgrammer_factory.NewExpressionStatement(
		miscCloneProgrammer_factory.NewCallExpression(
			miscCloneProgrammer_internal(props.Context, "throwTypeGuardError"),
			nil,
			nil,
			miscCloneProgrammer_factory.NewNodeList([]*shimast.Node{
				miscCloneProgrammer_factory.NewObjectLiteralExpression(
					miscCloneProgrammer_factory.NewNodeList([]*shimast.Node{
						miscCloneProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("method"), nil, nil, miscCloneProgrammer_factory.NewStringLiteral(props.Functor.Method, shimast.TokenFlagsNone)),
						miscCloneProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("expected"), nil, nil, miscCloneProgrammer_factory.NewStringLiteral(props.Expected, shimast.TokenFlagsNone)),
						miscCloneProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("value"), nil, nil, props.Input),
					}),
					true,
				),
			}),
			shimast.NodeFlagsNone,
		),
	)
}

func miscCloneProgrammer_is_instance(metadata *schemametadata.MetadataSchema) bool {
	if len(metadata.Objects) != 0 ||
		len(metadata.Arrays) != 0 ||
		len(metadata.Tuples) != 0 ||
		len(metadata.Sets) != 0 ||
		len(metadata.Maps) != 0 ||
		len(metadata.Natives) != 0 {
		return true
	}
	return metadata.Rest != nil && miscCloneProgrammer_is_instance(metadata.Rest)
}

func miscCloneProgrammer_internal(context nativecontext.ITypiaContext, name string) *shimast.Node {
	if importer, ok := context.Importer.(interface{ Internal(string) *shimast.Node }); ok {
		return importer.Internal(name)
	}
	return miscCloneProgrammer_factory.NewIdentifier(name)
}

func miscCloneProgrammer_import_type(context nativecontext.ITypiaContext, props nativeprogrammers.ImportProgrammer_TypeProps) *shimast.Node {
	if importer, ok := context.Importer.(interface {
		Type(nativeprogrammers.ImportProgrammer_TypeProps) *shimast.Node
	}); ok {
		return importer.Type(props)
	}
	if str, ok := props.Name.(string); ok {
		return miscCloneProgrammer_factory.NewTypeReferenceNode(miscCloneProgrammer_factory.NewIdentifier(str), miscCloneProgrammer_factory.NewNodeList(props.Arguments))
	}
	return props.Name.(*shimast.Node)
}

func miscCloneProgrammer_type_name(context nativecontext.ITypiaContext, typ *shimchecker.Type, name *string) string {
	if name != nil {
		return *name
	}
	return nativefactories.TypeFactory.GetFullName(nativefactories.TypeFactory_GetFullNameProps{
		Checker: context.Checker,
		Type:    typ,
	})
}

func miscCloneProgrammer_method_text(modulo *shimast.Node) string {
	if modulo == nil {
		return ""
	}
	return modulo.Text()
}

func miscCloneProgrammer_errors(errors []nativefactories.MetadataFactory_IError) []nativecontext.TransformerError_MetadataFactory_IError {
	output := make([]nativecontext.TransformerError_MetadataFactory_IError, 0, len(errors))
	for _, err := range errors {
		output = append(output, nativecontext.TransformerError_MetadataFactory_IError{
			Name: err.Name,
			Explore: nativecontext.TransformerError_MetadataFactory_IExplore{
				Object:    err.Explore.Object,
				Property:  err.Explore.Property,
				Parameter: err.Explore.Parameter,
				Output:    err.Explore.Output,
			},
			Messages: append([]string{}, err.Messages...),
		})
	}
	return output
}

func miscCloneProgrammer_feature_explore(input any) nativeinternal.FeatureProgrammer_IExplore {
	switch v := input.(type) {
	case nativeinternal.FeatureProgrammer_IExplore:
		return v
	case *nativeinternal.FeatureProgrammer_IExplore:
		return *v
	default:
		return nativeinternal.FeatureProgrammer_IExplore{}
	}
}

func miscCloneProgrammer_checker_explore(input any) nativeinternal.CheckerProgrammer_IExplore {
	v := miscCloneProgrammer_feature_explore(input)
	return nativeinternal.CheckerProgrammer_IExplore{
		Tracable: v.Tracable,
		Source:   v.Source,
		From:     v.From,
		Postfix:  v.Postfix,
		Start:    v.Start,
	}
}

func miscCloneProgrammer_checker_explore_with_postfix(input any, postfix string) nativeinternal.CheckerProgrammer_IExplore {
	v := miscCloneProgrammer_checker_explore(input)
	v.Postfix = v.Postfix + postfix
	return v
}

func miscCloneProgrammer_explore_with(explore nativeinternal.FeatureProgrammer_IExplore, source string, from string) nativeinternal.FeatureProgrammer_IExplore {
	explore.Source = source
	explore.From = from
	return explore
}

func miscCloneProgrammer_some_arrays(values []*schemametadata.MetadataArray, pred func(*schemametadata.MetadataArray) bool) bool {
	for _, value := range values {
		if pred(value) {
			return true
		}
	}
	return false
}

func miscCloneProgrammer_some_tuples(values []*schemametadata.MetadataTuple, pred func(*schemametadata.MetadataTuple) bool) bool {
	for _, value := range values {
		if pred(value) {
			return true
		}
	}
	return false
}

func miscCloneProgrammer_every_schema(values []*schemametadata.MetadataSchema, pred func(*schemametadata.MetadataSchema) bool) bool {
	if len(values) == 0 {
		return false
	}
	for _, value := range values {
		if pred(value) == false {
			return false
		}
	}
	return true
}

func miscCloneProgrammer_join_names[T any](values []T, name func(T) string) string {
	names := make([]string, 0, len(values))
	for _, value := range values {
		names = append(names, name(value))
	}
	return strings.Join(names, " | ")
}
