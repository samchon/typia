package notations

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

type notationGeneralProgrammerNamespace struct{}

var NotationGeneralProgrammer = notationGeneralProgrammerNamespace{}

type NotationGeneralProgrammer_IRename struct {
	Name string
	Func func(str string) string
}

type NotationGeneralProgrammer_IProps struct {
	nativecontext.IProgrammerProps
	Rename NotationGeneralProgrammer_IRename
}

type NotationGeneralProgrammer_ReturnTypeProps struct {
	Rename  NotationGeneralProgrammer_IRename
	Context nativecontext.ITypiaContext
	Type    string
}

type NotationGeneralProgrammer_DecomposeProps struct {
	Rename    NotationGeneralProgrammer_IRename
	Validated bool
	Context   nativecontext.ITypiaContext
	Functor   *nativehelpers.FunctionProgrammer
	Type      *shimchecker.Type
	Name      *string
}

const notationGeneralProgrammer_PREFIX = "_c"

var notationGeneralProgrammer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (notationGeneralProgrammerNamespace) ReturnType(props NotationGeneralProgrammer_ReturnTypeProps) *shimast.Node {
	return notationGeneralProgrammer_import_type(props.Context, nativeprogrammers.ImportProgrammer_TypeProps{
		File: "typia",
		Name: notationGeneralProgrammer_capitalize(props.Rename.Name) + "Case",
		Arguments: []*shimast.TypeNode{
			notationGeneralProgrammer_factory.NewTypeReferenceNode(notationGeneralProgrammer_factory.NewIdentifier(props.Type), nil),
		},
	})
}

func (notationGeneralProgrammerNamespace) Decompose(props NotationGeneralProgrammer_DecomposeProps) nativeinternal.FeatureProgrammer_IDecomposed {
	config := notationGeneralProgrammer_configure(struct {
		Rename  NotationGeneralProgrammer_IRename
		Context nativecontext.ITypiaContext
		Functor *nativehelpers.FunctionProgrammer
	}{Rename: props.Rename, Context: props.Context, Functor: props.Functor})
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
	typeName := notationGeneralProgrammer_type_name(props.Context, props.Type, props.Name)
	return nativeinternal.FeatureProgrammer_IDecomposed{
		Functions:  composed.Functions,
		Statements: composed.Statements,
		Arrow: notationGeneralProgrammer_factory.NewArrowFunction(
			nil,
			nil,
			notationGeneralProgrammer_factory.NewNodeList(composed.Parameters),
			NotationGeneralProgrammer.ReturnType(NotationGeneralProgrammer_ReturnTypeProps{
				Rename:  props.Rename,
				Context: props.Context,
				Type:    typeName,
			}),
			nil,
			notationGeneralProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			composed.Body,
		),
	}
}

func (notationGeneralProgrammerNamespace) Write(props NotationGeneralProgrammer_IProps) *shimast.Node {
	functor := nativehelpers.NewFunctionProgrammer(notationGeneralProgrammer_method_text(props.Modulo))
	result := NotationGeneralProgrammer.Decompose(NotationGeneralProgrammer_DecomposeProps{
		Rename:    props.Rename,
		Context:   props.Context,
		Functor:   functor,
		Type:      props.Type,
		Name:      props.Name,
		Validated: true,
	})
	return nativeinternal.FeatureProgrammer.WriteDecomposed(nativeinternal.FeatureProgrammer_WriteDecomposedProps{
		Functor: functor,
		Modulo:  props.Modulo,
		Result:  result,
	})
}

func notationGeneralProgrammer_write_array_functions(props struct {
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
			Value: notationGeneralProgrammer_factory.NewArrowFunction(
				nil,
				nil,
				notationGeneralProgrammer_factory.NewNodeList(nativeinternal.FeatureProgrammer.ParameterDeclarations(nativeinternal.FeatureProgrammer_ParameterDeclarationsProps{
					Config: nativeinternal.FeatureProgrammer_ParameterConfig{Path: props.Config.Path, Trace: props.Config.Trace},
					Type:   nativefactories.TypeFactory.Keyword("any"),
					Input:  notationGeneralProgrammer_factory.NewIdentifier("input"),
				})),
				nativefactories.TypeFactory.Keyword("any"),
				nil,
				notationGeneralProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
				notationGeneralProgrammer_decode_array_inline(notationGeneralProgrammer_decodeArrayProps{
					Config:  props.Config,
					Functor: props.Functor,
					Input:   notationGeneralProgrammer_factory.NewIdentifier("input"),
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

func notationGeneralProgrammer_write_tuple_functions(props struct {
	Config     nativeinternal.FeatureProgrammer_IConfig
	Rename     NotationGeneralProgrammer_IRename
	Context    nativecontext.ITypiaContext
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
			Value: notationGeneralProgrammer_factory.NewArrowFunction(
				nil,
				nil,
				notationGeneralProgrammer_factory.NewNodeList(nativeinternal.FeatureProgrammer.ParameterDeclarations(nativeinternal.FeatureProgrammer_ParameterDeclarationsProps{
					Config: nativeinternal.FeatureProgrammer_ParameterConfig{Path: props.Config.Path, Trace: props.Config.Trace},
					Type:   nativefactories.TypeFactory.Keyword("any"),
					Input:  notationGeneralProgrammer_factory.NewIdentifier("input"),
				})),
				nativefactories.TypeFactory.Keyword("any"),
				nil,
				notationGeneralProgrammer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
				notationGeneralProgrammer_decode_tuple_inline(notationGeneralProgrammer_decodeTupleInlineProps{
					Context: props.Context,
					Rename:  props.Rename,
					Config:  props.Config,
					Functor: props.Functor,
					Input:   notationGeneralProgrammer_factory.NewIdentifier("input"),
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

func notationGeneralProgrammer_decode(props struct {
	Config   nativeinternal.FeatureProgrammer_IConfig
	Rename   NotationGeneralProgrammer_IRename
	Context  nativecontext.ITypiaContext
	Functor  *nativehelpers.FunctionProgrammer
	Metadata *schemametadata.MetadataSchema
	Explore  nativeinternal.FeatureProgrammer_IExplore
	Input    *shimast.Node
}) *shimast.Node {
	if props.Metadata.Any ||
		notationGeneralProgrammer_some_arrays(props.Metadata.Arrays, func(a *schemametadata.MetadataArray) bool { return a.Type.Value.Any }) ||
		notationGeneralProgrammer_some_tuples(props.Metadata.Tuples, func(t *schemametadata.MetadataTuple) bool {
			return len(t.Type.Elements) != 0 && notationGeneralProgrammer_every_schema(t.Type.Elements, func(e *schemametadata.MetadataSchema) bool { return e.Any })
		}) {
		return nativefactories.ExpressionFactory.Currying(nativefactories.ExpressionFactory_CurryingProps{
			Function: notationGeneralProgrammer_internal(props.Context, "notationAny"),
			Arguments: []*shimast.Expression{
				notationGeneralProgrammer_internal(props.Context, "notation"+notationGeneralProgrammer_capitalize(props.Rename.Name)),
				props.Input,
			},
		})
	}

	unions := []notationGeneralProgrammer_IUnion{}
	if len(props.Metadata.Functions) != 0 {
		unions = append(unions, notationGeneralProgrammer_IUnion{
			Type: "functional",
			Is: func() *shimast.Node {
				return notationGeneralProgrammer_binary(
					notationGeneralProgrammer_factory.NewStringLiteral("function", shimast.TokenFlagsNone),
					shimast.KindEqualsEqualsEqualsToken,
					notationGeneralProgrammer_factory.NewTypeOfExpression(props.Input),
				)
			},
			Value: func() *shimast.Node {
				return notationGeneralProgrammer_factory.NewIdentifier("undefined")
			},
		})
	}

	for _, tuple := range props.Metadata.Tuples {
		tuple := tuple
		unions = append(unions, notationGeneralProgrammer_IUnion{
			Type: "tuple",
			Is: func() *shimast.Node {
				partial := schemametadata.MetadataSchema_initialize()
				partial.Tuples = append(partial.Tuples, tuple)
				return nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
					Context:  props.Context,
					Functor:  props.Functor,
					Input:    props.Input,
					Metadata: partial,
					Explore:  notationGeneralProgrammer_checker_explore(props.Explore),
				})
			},
			Value: func() *shimast.Node {
				return notationGeneralProgrammer_decode_tuple(notationGeneralProgrammer_decodeTupleProps{
					Config:  props.Config,
					Rename:  props.Rename,
					Context: props.Context,
					Functor: props.Functor,
					Tuple:   tuple,
					Explore: props.Explore,
					Input:   props.Input,
				})
			},
		})
	}

	if len(props.Metadata.Arrays) != 0 {
		unions = append(unions, notationGeneralProgrammer_IUnion{
			Type: "array",
			Is: func() *shimast.Node {
				return nativefactories.ExpressionFactory.IsArray(props.Input)
			},
			Value: func() *shimast.Node {
				explore := props.Explore
				explore.From = "array"
				return notationGeneralProgrammer_explore_arrays(notationGeneralProgrammer_exploreArraysProps{
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
		unions = append(unions, notationGeneralProgrammer_IUnion{
			Type: "set",
			Is: func() *shimast.Node {
				return nativefactories.ExpressionFactory.IsInstanceOf("Set", props.Input)
			},
			Value: func() *shimast.Node {
				explore := props.Explore
				explore.From = "array"
				return notationGeneralProgrammer_explore_sets(notationGeneralProgrammer_exploreSetsProps{
					Context: props.Context,
					Config:  props.Config,
					Functor: props.Functor,
					Input:   props.Input,
					Explore: explore,
					Sets:    props.Metadata.Sets,
				})
			},
		})
	}

	if len(props.Metadata.Maps) != 0 {
		unions = append(unions, notationGeneralProgrammer_IUnion{
			Type: "map",
			Is: func() *shimast.Node {
				return nativefactories.ExpressionFactory.IsInstanceOf("Map", props.Input)
			},
			Value: func() *shimast.Node {
				explore := props.Explore
				explore.From = "array"
				return notationGeneralProgrammer_explore_maps(notationGeneralProgrammer_exploreMapsProps{
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
		if native.Name == "WeakSet" || native.Name == "WeakMap" {
			continue
		}
		unions = append(unions, notationGeneralProgrammer_IUnion{
			Type: "native",
			Is: func() *shimast.Node {
				return nativefactories.ExpressionFactory.IsInstanceOf(native.Name, props.Input)
			},
			Value: func() *shimast.Node {
				if native.Name == "Boolean" || native.Name == "Number" || native.Name == "String" {
					return notationGeneralProgrammer_factory.NewCallExpression(
						nativefactories.IdentifierFactory.Access(props.Input, "valueOf"),
						nil,
						nil,
						nil,
						shimast.NodeFlagsNone,
					)
				}
				return notationGeneralProgrammer_decode_native(struct {
					Name  string
					Input *shimast.Node
				}{Name: native.Name, Input: props.Input})
			},
		})
	}

	if len(props.Metadata.Objects) != 0 {
		unions = append(unions, notationGeneralProgrammer_IUnion{
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
				return notationGeneralProgrammer_explore_objects(notationGeneralProgrammer_exploreObjectsProps{
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
		if (props.Metadata.Nullable || props.Metadata.IsRequired() == false) && notationGeneralProgrammer_is_instance(props.Metadata) {
			value = notationGeneralProgrammer_factory.NewConditionalExpression(
				props.Input,
				nil,
				value,
				nil,
				props.Input,
			)
		}
		return notationGeneralProgrammer_factory.NewAsExpression(value, nativefactories.TypeFactory.Keyword("any"))
	}
	last := props.Input
	for i := len(unions) - 1; i >= 0; i-- {
		union := unions[i]
		last = notationGeneralProgrammer_factory.NewConditionalExpression(
			union.Is(),
			nil,
			union.Value(),
			nil,
			last,
		)
	}
	return notationGeneralProgrammer_factory.NewAsExpression(last, nativefactories.TypeFactory.Keyword("any"))
}

func notationGeneralProgrammer_decode_object(props struct {
	Functor *nativehelpers.FunctionProgrammer
	Object  *schemametadata.MetadataObjectType
	Input   *shimast.Node
	Explore nativeinternal.FeatureProgrammer_IExplore
}) *shimast.Node {
	return nativeinternal.FeatureProgrammer.Decode_object(nativeinternal.FeatureProgrammer_DecodeObjectProps{
		Config:  nativeinternal.FeatureProgrammer_DecodeObjectConfig{Trace: false, Path: false, Prefix: notationGeneralProgrammer_PREFIX},
		Functor: props.Functor,
		Object:  props.Object,
		Input:   props.Input,
		Explore: props.Explore,
	})
}

type notationGeneralProgrammer_decodeArrayProps struct {
	Config  nativeinternal.FeatureProgrammer_IConfig
	Functor *nativehelpers.FunctionProgrammer
	Input   *shimast.Node
	Array   *schemametadata.MetadataArray
	Explore nativeinternal.FeatureProgrammer_IExplore
}

func notationGeneralProgrammer_decode_array(props notationGeneralProgrammer_decodeArrayProps) *shimast.Node {
	if props.Array.Type.Recursive {
		index := 0
		if props.Array.Type.Index != nil {
			index = *props.Array.Type.Index
		}
		return notationGeneralProgrammer_factory.NewCallExpression(
			notationGeneralProgrammer_factory.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%sa%d", props.Config.Prefix, index))),
			nil,
			nil,
			notationGeneralProgrammer_factory.NewNodeList(nativeinternal.FeatureProgrammer.ArgumentsArray(nativeinternal.FeatureProgrammer_ArgumentsArrayProps{
				Config:  nativeinternal.FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace},
				Explore: notationGeneralProgrammer_explore_with(props.Explore, "function", "array"),
				Input:   props.Input,
			})),
			shimast.NodeFlagsNone,
		)
	}
	return notationGeneralProgrammer_decode_array_inline(props)
}

func notationGeneralProgrammer_decode_array_inline(props notationGeneralProgrammer_decodeArrayProps) *shimast.Node {
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
			return nativehelpers.NotationJoiner.Array(nativehelpers.NotationJoiner_ArrayProps{
				Input: next.Input,
				Arrow: next.Arrow,
			})
		},
		Array:   props.Array,
		Input:   props.Input,
		Explore: props.Explore,
	})
}

type notationGeneralProgrammer_decodeTupleProps struct {
	Config  nativeinternal.FeatureProgrammer_IConfig
	Rename  NotationGeneralProgrammer_IRename
	Context nativecontext.ITypiaContext
	Functor *nativehelpers.FunctionProgrammer
	Tuple   *schemametadata.MetadataTuple
	Explore nativeinternal.FeatureProgrammer_IExplore
	Input   *shimast.Node
}

func notationGeneralProgrammer_decode_tuple(props notationGeneralProgrammer_decodeTupleProps) *shimast.Node {
	if props.Tuple.Type.Recursive {
		index := 0
		if props.Tuple.Type.Index != nil {
			index = *props.Tuple.Type.Index
		}
		return notationGeneralProgrammer_factory.NewCallExpression(
			notationGeneralProgrammer_factory.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%st%d", props.Config.Prefix, index))),
			nil,
			nil,
			notationGeneralProgrammer_factory.NewNodeList(nativeinternal.FeatureProgrammer.ArgumentsArray(nativeinternal.FeatureProgrammer_ArgumentsArrayProps{
				Config:  nativeinternal.FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace},
				Explore: notationGeneralProgrammer_explore_with(props.Explore, "function", props.Explore.From),
				Input:   props.Input,
			})),
			shimast.NodeFlagsNone,
		)
	}
	return notationGeneralProgrammer_decode_tuple_inline(notationGeneralProgrammer_decodeTupleInlineProps{
		Context: props.Context,
		Rename:  props.Rename,
		Config:  props.Config,
		Functor: props.Functor,
		Tuple:   props.Tuple.Type,
		Explore: props.Explore,
		Input:   props.Input,
	})
}

type notationGeneralProgrammer_decodeTupleInlineProps struct {
	Context nativecontext.ITypiaContext
	Rename  NotationGeneralProgrammer_IRename
	Config  nativeinternal.FeatureProgrammer_IConfig
	Functor *nativehelpers.FunctionProgrammer
	Explore nativeinternal.FeatureProgrammer_IExplore
	Tuple   *schemametadata.MetadataTupleType
	Input   *shimast.Node
}

func notationGeneralProgrammer_decode_tuple_inline(props notationGeneralProgrammer_decodeTupleInlineProps) *shimast.Node {
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
		elements = append(elements, notationGeneralProgrammer_decode(struct {
			Config   nativeinternal.FeatureProgrammer_IConfig
			Rename   NotationGeneralProgrammer_IRename
			Context  nativecontext.ITypiaContext
			Functor  *nativehelpers.FunctionProgrammer
			Metadata *schemametadata.MetadataSchema
			Explore  nativeinternal.FeatureProgrammer_IExplore
			Input    *shimast.Node
		}{
			Config:   props.Config,
			Rename:   props.Rename,
			Context:  props.Context,
			Functor:  props.Functor,
			Metadata: elem,
			Explore:  explore,
			Input:    notationGeneralProgrammer_factory.NewElementAccessExpression(props.Input, nil, nativefactories.ExpressionFactory.Number(index), shimast.NodeFlagsNone),
		}))
	}
	var rest *shimast.Node
	if len(props.Tuple.Elements) != 0 {
		last := props.Tuple.Elements[len(props.Tuple.Elements)-1]
		if last.Rest != nil {
			start := len(props.Tuple.Elements) - 1
			explore := props.Explore
			explore.Start = &start
			rest = notationGeneralProgrammer_decode(struct {
				Config   nativeinternal.FeatureProgrammer_IConfig
				Rename   NotationGeneralProgrammer_IRename
				Context  nativecontext.ITypiaContext
				Functor  *nativehelpers.FunctionProgrammer
				Metadata *schemametadata.MetadataSchema
				Explore  nativeinternal.FeatureProgrammer_IExplore
				Input    *shimast.Node
			}{
				Config:  props.Config,
				Rename:  props.Rename,
				Context: props.Context,
				Functor: props.Functor,
				Input: notationGeneralProgrammer_factory.NewCallExpression(
					nativefactories.IdentifierFactory.Access(props.Input, "slice"),
					nil,
					nil,
					notationGeneralProgrammer_factory.NewNodeList([]*shimast.Node{nativefactories.ExpressionFactory.Number(start)}),
					shimast.NodeFlagsNone,
				),
				Metadata: nativeiterate.Wrap_metadata_rest_tuple_export(last.Rest),
				Explore:  explore,
			})
		}
	}
	return nativehelpers.NotationJoiner.Tuple(nativehelpers.NotationJoiner_TupleProps{
		Elements: elements,
		Rest:     rest,
	})
}

func notationGeneralProgrammer_decode_native(props struct {
	Name  string
	Input *shimast.Node
}) *shimast.Node {
	if props.Name == "Date" {
		return notationGeneralProgrammer_factory.NewNewExpression(
			notationGeneralProgrammer_factory.NewIdentifier(props.Name),
			nil,
			notationGeneralProgrammer_factory.NewNodeList([]*shimast.Node{props.Input}),
		)
	}
	return props.Input
}

type notationGeneralProgrammer_exploreSetsProps struct {
	Context nativecontext.ITypiaContext
	Config  nativeinternal.FeatureProgrammer_IConfig
	Functor *nativehelpers.FunctionProgrammer
	Input   *shimast.Node
	Explore nativeinternal.FeatureProgrammer_IExplore
	Sets    []*schemametadata.MetadataSet
}

func notationGeneralProgrammer_explore_sets(props notationGeneralProgrammer_exploreSetsProps) *shimast.Node {
	return notationGeneralProgrammer_factory.NewCallExpression(
		nativehelpers.UnionExplorer.Set(nativehelpers.UnionExplorer_SetProps{
			Config: nativehelpers.UnionExplorer_ArrayLikeConfig{
				Checker: func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node {
					return nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
						Context:  props.Context,
						Functor:  props.Functor,
						Input:    v.Input,
						Metadata: v.Definition.(*schemametadata.MetadataSchema),
						Explore:  notationGeneralProgrammer_checker_explore(v.Explore),
					})
				},
				Decoder: func(v nativehelpers.UnionExplorer_ArrayLikeDecoderProps) *shimast.Node {
					return notationGeneralProgrammer_factory.NewNewExpression(
						notationGeneralProgrammer_factory.NewIdentifier("Set"),
						notationGeneralProgrammer_factory.NewNodeList([]*shimast.Node{nativefactories.TypeFactory.Keyword("any")}),
						notationGeneralProgrammer_factory.NewNodeList([]*shimast.Node{
							notationGeneralProgrammer_decode_array(notationGeneralProgrammer_decodeArrayProps{
								Config:  props.Config,
								Functor: props.Functor,
								Input:   v.Input,
								Array:   v.Definition.(*schemametadata.MetadataArray),
								Explore: notationGeneralProgrammer_feature_explore(v.Explore),
							}),
						}),
					)
				},
				Empty: notationGeneralProgrammer_factory.NewNewExpression(
					notationGeneralProgrammer_factory.NewIdentifier("Set"),
					notationGeneralProgrammer_factory.NewNodeList([]*shimast.Node{nativefactories.TypeFactory.Keyword("any")}),
					nil,
				),
				Success: notationGeneralProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword),
				Failure: func(v nativehelpers.UnionExplorer_ArrayLikeFailureProps) *shimast.Node {
					return notationGeneralProgrammer_create_throw_error(notationGeneralProgrammer_throwProps{
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

type notationGeneralProgrammer_exploreMapsProps struct {
	Context nativecontext.ITypiaContext
	Config  nativeinternal.FeatureProgrammer_IConfig
	Functor *nativehelpers.FunctionProgrammer
	Input   *shimast.Node
	Maps    []*schemametadata.MetadataMap
	Explore nativeinternal.FeatureProgrammer_IExplore
}

func notationGeneralProgrammer_explore_maps(props notationGeneralProgrammer_exploreMapsProps) *shimast.Node {
	return notationGeneralProgrammer_factory.NewCallExpression(
		nativehelpers.UnionExplorer.Map(nativehelpers.UnionExplorer_MapProps{
			Config: nativehelpers.UnionExplorer_ArrayLikeConfig{
				Checker: func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node {
					pair := v.Definition.([]*schemametadata.MetadataSchema)
					first := nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
						Context:  props.Context,
						Functor:  props.Functor,
						Input:    notationGeneralProgrammer_factory.NewElementAccessExpression(v.Input, nil, nativefactories.ExpressionFactory.Number(0), shimast.NodeFlagsNone),
						Metadata: pair[0],
						Explore:  notationGeneralProgrammer_checker_explore_with_postfix(v.Explore, "[0]"),
					})
					second := nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
						Context:  props.Context,
						Functor:  props.Functor,
						Input:    notationGeneralProgrammer_factory.NewElementAccessExpression(v.Input, nil, nativefactories.ExpressionFactory.Number(1), shimast.NodeFlagsNone),
						Metadata: pair[1],
						Explore:  notationGeneralProgrammer_checker_explore_with_postfix(v.Explore, "[1]"),
					})
					return notationGeneralProgrammer_binary(first, shimast.KindAmpersandAmpersandToken, second)
				},
				Decoder: func(v nativehelpers.UnionExplorer_ArrayLikeDecoderProps) *shimast.Node {
					return notationGeneralProgrammer_factory.NewNewExpression(
						notationGeneralProgrammer_factory.NewIdentifier("Map"),
						notationGeneralProgrammer_factory.NewNodeList([]*shimast.Node{
							nativefactories.TypeFactory.Keyword("any"),
							nativefactories.TypeFactory.Keyword("any"),
						}),
						notationGeneralProgrammer_factory.NewNodeList([]*shimast.Node{
							notationGeneralProgrammer_decode_array(notationGeneralProgrammer_decodeArrayProps{
								Config:  props.Config,
								Functor: props.Functor,
								Input:   v.Input,
								Array:   v.Definition.(*schemametadata.MetadataArray),
								Explore: notationGeneralProgrammer_feature_explore(v.Explore),
							}),
						}),
					)
				},
				Empty: notationGeneralProgrammer_factory.NewNewExpression(
					notationGeneralProgrammer_factory.NewIdentifier("Map"),
					notationGeneralProgrammer_factory.NewNodeList([]*shimast.Node{
						nativefactories.TypeFactory.Keyword("any"),
						nativefactories.TypeFactory.Keyword("any"),
					}),
					nil,
				),
				Success: notationGeneralProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword),
				Failure: func(v nativehelpers.UnionExplorer_ArrayLikeFailureProps) *shimast.Node {
					return notationGeneralProgrammer_create_throw_error(notationGeneralProgrammer_throwProps{
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

type notationGeneralProgrammer_exploreObjectsProps struct {
	Config   nativeinternal.FeatureProgrammer_IConfig
	Functor  *nativehelpers.FunctionProgrammer
	Input    *shimast.Node
	Metadata *schemametadata.MetadataSchema
	Explore  nativeinternal.FeatureProgrammer_IExplore
}

func notationGeneralProgrammer_explore_objects(props notationGeneralProgrammer_exploreObjectsProps) *shimast.Node {
	if len(props.Metadata.Objects) == 1 {
		return notationGeneralProgrammer_decode_object(struct {
			Functor *nativehelpers.FunctionProgrammer
			Object  *schemametadata.MetadataObjectType
			Input   *shimast.Node
			Explore nativeinternal.FeatureProgrammer_IExplore
		}{Functor: props.Functor, Object: props.Metadata.Objects[0].Type, Input: props.Input, Explore: props.Explore})
	}
	index := 0
	if props.Metadata.Union_index != nil {
		index = *props.Metadata.Union_index
	}
	return notationGeneralProgrammer_factory.NewCallExpression(
		notationGeneralProgrammer_factory.NewIdentifier(props.Functor.UseLocal(fmt.Sprintf("%su%d", notationGeneralProgrammer_PREFIX, index))),
		nil,
		nil,
		notationGeneralProgrammer_factory.NewNodeList(nativeinternal.FeatureProgrammer.ArgumentsArray(nativeinternal.FeatureProgrammer_ArgumentsArrayProps{
			Config:  nativeinternal.FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace},
			Explore: props.Explore,
			Input:   props.Input,
		})),
		shimast.NodeFlagsNone,
	)
}

type notationGeneralProgrammer_exploreArraysProps struct {
	Context nativecontext.ITypiaContext
	Config  nativeinternal.FeatureProgrammer_IConfig
	Functor *nativehelpers.FunctionProgrammer
	Input   *shimast.Node
	Arrays  []*schemametadata.MetadataArray
	Explore nativeinternal.FeatureProgrammer_IExplore
}

func notationGeneralProgrammer_explore_arrays(props notationGeneralProgrammer_exploreArraysProps) *shimast.Node {
	return notationGeneralProgrammer_explore_array_like_union_types(notationGeneralProgrammer_exploreArrayLikeUnionTypesProps[*schemametadata.MetadataArray]{
		Config:  props.Config,
		Functor: props.Functor,
		Factory: func(next notationGeneralProgrammer_arrayLikeFactoryProps[*schemametadata.MetadataArray]) *shimast.Node {
			return nativehelpers.UnionExplorer.Array(nativehelpers.UnionExplorer_ArrayProps{
				Config: nativehelpers.UnionExplorer_ArrayLikeConfig{
					Checker: func(v nativehelpers.UnionExplorer_ArrayLikeCheckerProps) *shimast.Node {
						return nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
							Context:  props.Context,
							Functor:  props.Functor,
							Input:    v.Input,
							Metadata: v.Definition.(*schemametadata.MetadataSchema),
							Explore:  notationGeneralProgrammer_checker_explore(v.Explore),
						})
					},
					Decoder: func(v nativehelpers.UnionExplorer_ArrayLikeDecoderProps) *shimast.Node {
						return notationGeneralProgrammer_decode_array(notationGeneralProgrammer_decodeArrayProps{
							Config:  props.Config,
							Functor: props.Functor,
							Input:   v.Input,
							Array:   v.Definition.(*schemametadata.MetadataArray),
							Explore: notationGeneralProgrammer_feature_explore(v.Explore),
						})
					},
					Empty:   notationGeneralProgrammer_factory.NewIdentifier("[]"),
					Success: notationGeneralProgrammer_factory.NewKeywordExpression(shimast.KindTrueKeyword),
					Failure: func(v nativehelpers.UnionExplorer_ArrayLikeFailureProps) *shimast.Node {
						return notationGeneralProgrammer_create_throw_error(notationGeneralProgrammer_throwProps{
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
		Definitions: props.Arrays,
		Input:       props.Input,
		Explore:     props.Explore,
	})
}

type notationGeneralProgrammer_arrayLikeFactoryProps[T any] struct {
	Parameters  []*shimast.Node
	Input       *shimast.Node
	Definitions []T
	Explore     nativeinternal.FeatureProgrammer_IExplore
}

type notationGeneralProgrammer_exploreArrayLikeUnionTypesProps[T interface {
	*schemametadata.MetadataArray | *schemametadata.MetadataTuple
}] struct {
	Config      nativeinternal.FeatureProgrammer_IConfig
	Functor     *nativehelpers.FunctionProgrammer
	Factory     func(next notationGeneralProgrammer_arrayLikeFactoryProps[T]) *shimast.Node
	Input       *shimast.Node
	Definitions []T
	Explore     nativeinternal.FeatureProgrammer_IExplore
}

func notationGeneralProgrammer_explore_array_like_union_types[T interface {
	*schemametadata.MetadataArray | *schemametadata.MetadataTuple
}](props notationGeneralProgrammer_exploreArrayLikeUnionTypesProps[T]) *shimast.Node {
	arrow := func(next struct {
		Parameters []*shimast.Node
		Explore    nativeinternal.FeatureProgrammer_IExplore
		Input      *shimast.Node
	}) *shimast.Node {
		return props.Factory(notationGeneralProgrammer_arrayLikeFactoryProps[T]{
			Parameters:  next.Parameters,
			Definitions: props.Definitions,
			Explore:     next.Explore,
			Input:       next.Input,
		})
	}
	arrayExplore := props.Explore
	arrayExplore.Source = "function"
	arrayExplore.From = "array"
	return notationGeneralProgrammer_factory.NewCallExpression(
		notationGeneralProgrammer_factory.NewIdentifier(props.Functor.EmplaceUnion(props.Config.Prefix, notationGeneralProgrammer_array_like_names(props.Definitions), func() *shimast.Node {
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
					Input:  notationGeneralProgrammer_factory.NewIdentifier("input"),
				}),
				Explore: explore,
				Input:   notationGeneralProgrammer_factory.NewIdentifier("input"),
			})
		})),
		nil,
		nil,
		notationGeneralProgrammer_factory.NewNodeList(nativeinternal.FeatureProgrammer.ArgumentsArray(nativeinternal.FeatureProgrammer_ArgumentsArrayProps{
			Config:  nativeinternal.FeatureProgrammer_ArgumentsArrayConfig{Path: props.Config.Path, Trace: props.Config.Trace},
			Explore: arrayExplore,
			Input:   props.Input,
		})),
		shimast.NodeFlagsNone,
	)
}

func notationGeneralProgrammer_configure(props struct {
	Rename  NotationGeneralProgrammer_IRename
	Context nativecontext.ITypiaContext
	Functor *nativehelpers.FunctionProgrammer
}) nativeinternal.FeatureProgrammer_IConfig {
	var config nativeinternal.FeatureProgrammer_IConfig
	config = nativeinternal.FeatureProgrammer_IConfig{
		Types: nativeinternal.FeatureProgrammer_IConfig_ITypes{
			Input: func(t *shimchecker.Type, name *string) *shimast.TypeNode {
				return notationGeneralProgrammer_factory.NewTypeReferenceNode(notationGeneralProgrammer_factory.NewIdentifier(notationGeneralProgrammer_type_name(props.Context, t, name)), nil)
			},
			Output: func(t *shimchecker.Type, name *string) *shimast.TypeNode {
				return NotationGeneralProgrammer.ReturnType(NotationGeneralProgrammer_ReturnTypeProps{
					Rename:  props.Rename,
					Context: props.Context,
					Type:    notationGeneralProgrammer_type_name(props.Context, t, name),
				})
			},
		},
		Prefix:      notationGeneralProgrammer_PREFIX,
		Trace:       false,
		Path:        false,
		Initializer: notationGeneralProgrammer_initializer,
		Decoder: func(next nativeinternal.FeatureProgrammer_DecoderProps) *shimast.Node {
			return notationGeneralProgrammer_decode(struct {
				Config   nativeinternal.FeatureProgrammer_IConfig
				Rename   NotationGeneralProgrammer_IRename
				Context  nativecontext.ITypiaContext
				Functor  *nativehelpers.FunctionProgrammer
				Metadata *schemametadata.MetadataSchema
				Explore  nativeinternal.FeatureProgrammer_IExplore
				Input    *shimast.Node
			}{Config: config, Rename: props.Rename, Context: props.Context, Functor: props.Functor, Metadata: next.Metadata, Explore: next.Explore, Input: next.Input})
		},
		Objector: nativeinternal.FeatureProgrammer_IConfig_IObjector{
			Checker: func(next nativeinternal.FeatureProgrammer_ObjectorCheckerProps) *shimast.Node {
				return nativeprogrammers.IsProgrammer.Decode(nativeprogrammers.IsProgrammer_DecodeProps{
					Context:  props.Context,
					Functor:  props.Functor,
					Input:    next.Input,
					Metadata: next.Metadata,
					Explore:  notationGeneralProgrammer_checker_explore(next.Explore),
				})
			},
			Decoder: func(next nativeinternal.FeatureProgrammer_ObjectorDecoderProps) *shimast.Node {
				return notationGeneralProgrammer_decode_object(struct {
					Functor *nativehelpers.FunctionProgrammer
					Object  *schemametadata.MetadataObjectType
					Input   *shimast.Node
					Explore nativeinternal.FeatureProgrammer_IExplore
				}{Functor: props.Functor, Object: next.Object, Input: next.Input, Explore: next.Explore})
			},
			Joiner: func(next nativeinternal.FeatureProgrammer_ObjectorJoinerProps) *shimast.Node {
				return nativehelpers.NotationJoiner.Object(nativehelpers.NotationJoiner_ObjectProps{
					Rename:  props.Rename.Func,
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
							Object:  v.Object,
							Input:   v.Input,
							Explore: notationGeneralProgrammer_feature_explore(v.Explore),
						})
					},
					Decoder: func(v nativeiterate.Decode_union_object_next) *shimast.Node {
						return notationGeneralProgrammer_decode_object(struct {
							Functor *nativehelpers.FunctionProgrammer
							Object  *schemametadata.MetadataObjectType
							Input   *shimast.Node
							Explore nativeinternal.FeatureProgrammer_IExplore
						}{Functor: props.Functor, Object: v.Object, Input: v.Input, Explore: notationGeneralProgrammer_feature_explore(v.Explore)})
					},
					Success: func(exp *shimast.Expression) *shimast.Node {
						return exp
					},
					Escaper: func(v nativeiterate.Decode_union_object_escape) *shimast.Node {
						return notationGeneralProgrammer_create_throw_error(notationGeneralProgrammer_throwProps{
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
				return notationGeneralProgrammer_create_throw_error(notationGeneralProgrammer_throwProps{
					Context:  props.Context,
					Functor:  props.Functor,
					Expected: next.Expected,
					Input:    next.Input,
				})
			},
		},
		Generator: nativeinternal.FeatureProgrammer_IConfig_IGenerator{
			Arrays: func(collection *schemametadata.MetadataCollection) []*shimast.Node {
				return notationGeneralProgrammer_write_array_functions(struct {
					Config     nativeinternal.FeatureProgrammer_IConfig
					Functor    *nativehelpers.FunctionProgrammer
					Collection *schemametadata.MetadataCollection
				}{Config: config, Functor: props.Functor, Collection: collection})
			},
			Tuples: func(collection *schemametadata.MetadataCollection) []*shimast.Node {
				return notationGeneralProgrammer_write_tuple_functions(struct {
					Config     nativeinternal.FeatureProgrammer_IConfig
					Rename     NotationGeneralProgrammer_IRename
					Context    nativecontext.ITypiaContext
					Functor    *nativehelpers.FunctionProgrammer
					Collection *schemametadata.MetadataCollection
				}{Config: config, Rename: props.Rename, Context: props.Context, Functor: props.Functor, Collection: collection})
			},
		},
	}
	return config
}

func notationGeneralProgrammer_initializer(props nativeinternal.FeatureProgrammer_InitializerProps) nativeinternal.FeatureProgrammer_InitializerOutput {
	collection := schemametadata.NewMetadataCollection()
	result := nativefactories.MetadataFactory.Analyze(nativefactories.MetadataFactory_IProps{
		Checker:     props.Context.Checker,
		Transformer: props.Context.Transformer,
		Options: nativefactories.MetadataFactory_IOptions{
			Escape:   false,
			Constant: true,
			Absorb:   true,
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
			Errors: notationGeneralProgrammer_errors(result.Errors),
		}))
	}
	return nativeinternal.FeatureProgrammer_InitializerOutput{
		Collection: collection,
		Metadata:   result.Data,
	}
}

type notationGeneralProgrammer_throwProps struct {
	Context  nativecontext.ITypiaContext
	Functor  *nativehelpers.FunctionProgrammer
	Expected string
	Input    *shimast.Node
}

func notationGeneralProgrammer_create_throw_error(props notationGeneralProgrammer_throwProps) *shimast.Node {
	return notationGeneralProgrammer_factory.NewExpressionStatement(
		notationGeneralProgrammer_factory.NewCallExpression(
			notationGeneralProgrammer_internal(props.Context, "throwTypeGuardError"),
			nil,
			notationGeneralProgrammer_factory.NewNodeList(nil),
			notationGeneralProgrammer_factory.NewNodeList([]*shimast.Node{
				notationGeneralProgrammer_factory.NewObjectLiteralExpression(
					notationGeneralProgrammer_factory.NewNodeList([]*shimast.Node{
						notationGeneralProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("method"), nil, nil, notationGeneralProgrammer_factory.NewStringLiteral(props.Functor.Method, shimast.TokenFlagsNone)),
						notationGeneralProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("expected"), nil, nil, notationGeneralProgrammer_factory.NewStringLiteral(props.Expected, shimast.TokenFlagsNone)),
						notationGeneralProgrammer_factory.NewPropertyAssignment(nil, nativefactories.IdentifierFactory.Identifier("value"), nil, nil, props.Input),
					}),
					true,
				),
			}),
			shimast.NodeFlagsNone,
		),
	)
}

func notationGeneralProgrammer_is_instance(metadata *schemametadata.MetadataSchema) bool {
	return len(metadata.Objects) != 0 ||
		len(metadata.Arrays) != 0 ||
		len(metadata.Tuples) != 0 ||
		len(metadata.Sets) != 0 ||
		len(metadata.Maps) != 0 ||
		len(metadata.Natives) != 0 ||
		(metadata.Rest != nil && notationGeneralProgrammer_is_instance(metadata.Rest))
}

type notationGeneralProgrammer_IUnion struct {
	Type  string
	Is    func() *shimast.Node
	Value func() *shimast.Node
}

func notationGeneralProgrammer_binary(left *shimast.Node, operator shimast.Kind, right *shimast.Node) *shimast.Node {
	return notationGeneralProgrammer_factory.NewBinaryExpression(nil, left, nil, notationGeneralProgrammer_factory.NewToken(operator), right)
}

func notationGeneralProgrammer_internal(context nativecontext.ITypiaContext, name string) *shimast.Node {
	if importer, ok := context.Importer.(interface{ Internal(string) *shimast.Node }); ok {
		return importer.Internal(name)
	}
	return notationGeneralProgrammer_factory.NewIdentifier(name)
}

func notationGeneralProgrammer_import_type(context nativecontext.ITypiaContext, props nativeprogrammers.ImportProgrammer_TypeProps) *shimast.Node {
	if importer, ok := context.Importer.(interface {
		Type(nativeprogrammers.ImportProgrammer_TypeProps) *shimast.Node
	}); ok {
		return importer.Type(props)
	}
	if str, ok := props.Name.(string); ok {
		return notationGeneralProgrammer_factory.NewTypeReferenceNode(notationGeneralProgrammer_factory.NewIdentifier(str), notationGeneralProgrammer_factory.NewNodeList(props.Arguments))
	}
	return props.Name.(*shimast.Node)
}

func notationGeneralProgrammer_type_name(context nativecontext.ITypiaContext, typ *shimchecker.Type, name *string) string {
	if name != nil {
		return *name
	}
	return nativefactories.TypeFactory.GetFullName(nativefactories.TypeFactory_GetFullNameProps{
		Checker: context.Checker,
		Type:    typ,
	})
}

func notationGeneralProgrammer_method_text(modulo *shimast.Node) string {
	if modulo == nil {
		return ""
	}
	return modulo.Text()
}

func notationGeneralProgrammer_feature_explore(input any) nativeinternal.FeatureProgrammer_IExplore {
	switch v := input.(type) {
	case nativeinternal.FeatureProgrammer_IExplore:
		return v
	case *nativeinternal.FeatureProgrammer_IExplore:
		return *v
	default:
		return nativeinternal.FeatureProgrammer_IExplore{}
	}
}

func notationGeneralProgrammer_checker_explore(input any) nativeinternal.CheckerProgrammer_IExplore {
	v := notationGeneralProgrammer_feature_explore(input)
	return nativeinternal.CheckerProgrammer_IExplore{
		Tracable: v.Tracable,
		Source:   v.Source,
		From:     v.From,
		Postfix:  v.Postfix,
		Start:    v.Start,
	}
}

func notationGeneralProgrammer_checker_explore_with_postfix(input any, postfix string) nativeinternal.CheckerProgrammer_IExplore {
	v := notationGeneralProgrammer_checker_explore(input)
	v.Postfix = v.Postfix + postfix
	return v
}

func notationGeneralProgrammer_explore_with(explore nativeinternal.FeatureProgrammer_IExplore, source string, from string) nativeinternal.FeatureProgrammer_IExplore {
	explore.Source = source
	explore.From = from
	return explore
}

func notationGeneralProgrammer_errors(errors []nativefactories.MetadataFactory_IError) []nativecontext.TransformerError_MetadataFactory_IError {
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

func notationGeneralProgrammer_some_arrays(values []*schemametadata.MetadataArray, pred func(*schemametadata.MetadataArray) bool) bool {
	for _, value := range values {
		if pred(value) {
			return true
		}
	}
	return false
}

func notationGeneralProgrammer_some_tuples(values []*schemametadata.MetadataTuple, pred func(*schemametadata.MetadataTuple) bool) bool {
	for _, value := range values {
		if pred(value) {
			return true
		}
	}
	return false
}

func notationGeneralProgrammer_every_schema(values []*schemametadata.MetadataSchema, pred func(*schemametadata.MetadataSchema) bool) bool {
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

func notationGeneralProgrammer_array_like_names[T interface {
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

func notationGeneralProgrammer_merge_functions(groups ...map[string]*shimast.Node) map[string]*shimast.Node {
	output := map[string]*shimast.Node{}
	for _, group := range groups {
		for key, value := range group {
			output[key] = value
		}
	}
	return output
}

func notationGeneralProgrammer_capitalize(str string) string {
	if str == "" {
		return str
	}
	return strings.ToUpper(str[:1]) + str[1:]
}

var NotationGeneralProgrammer_Camel = NotationGeneralProgrammer_IRename{Name: "camel", Func: notationGeneralProgrammer_camel}
var NotationGeneralProgrammer_Pascal = NotationGeneralProgrammer_IRename{Name: "pascal", Func: notationGeneralProgrammer_pascal}
var NotationGeneralProgrammer_Snake = NotationGeneralProgrammer_IRename{Name: "snake", Func: notationGeneralProgrammer_snake}

func notationGeneralProgrammer_camel(str string) string {
	return notationGeneralProgrammer_unsnake(str, func(value string) string {
		if value == "" {
			return value
		}
		if value == strings.ToUpper(value) {
			return strings.ToLower(value)
		}
		return strings.ToLower(value[:1]) + value[1:]
	}, func(value string, index int) string {
		if index == 0 {
			return strings.ToLower(value)
		}
		return notationGeneralProgrammer_capitalize(strings.ToLower(value))
	})
}

func notationGeneralProgrammer_pascal(str string) string {
	return notationGeneralProgrammer_unsnake(str, func(value string) string {
		if value == "" {
			return value
		}
		return strings.ToUpper(value[:1]) + value[1:]
	}, func(value string, index int) string {
		return notationGeneralProgrammer_capitalize(value)
	})
}

func notationGeneralProgrammer_snake(str string) string {
	if str == "" {
		return str
	}
	prefix := ""
	for len(str) != 0 && str[0] == '_' {
		prefix += "_"
		str = str[1:]
	}
	out := func(value string) string { return prefix + value }
	items := strings.Split(str, "_")
	if len(items) > 1 {
		for i, item := range items {
			items[i] = strings.ToLower(item)
		}
		return out(strings.Join(items, "_"))
	}
	indexes := []int{}
	for i := 0; i < len(str); i++ {
		code := str[i]
		if 'A' <= code && code <= 'Z' {
			indexes = append(indexes, i)
		}
	}
	for i := len(indexes) - 1; i > 0; i-- {
		now := indexes[i]
		prev := indexes[i-1]
		if now-prev == 1 {
			indexes = append(indexes[:i], indexes[i+1:]...)
		}
	}
	if len(indexes) != 0 && indexes[0] == 0 {
		indexes = indexes[1:]
	}
	if len(indexes) == 0 {
		return strings.ToLower(str)
	}
	ret := ""
	for i, last := range indexes {
		first := 0
		if i != 0 {
			first = indexes[i-1]
		}
		ret += strings.ToLower(str[first:last])
		ret += "_"
	}
	ret += strings.ToLower(str[indexes[len(indexes)-1]:])
	return out(ret)
}

func notationGeneralProgrammer_unsnake(str string, plain func(string) string, snake func(string, int) string) string {
	prefix := ""
	for len(str) != 0 && str[0] == '_' {
		prefix += "_"
		str = str[1:]
	}
	out := func(value string) string { return prefix + value }
	if str == "" {
		return out("")
	}
	raw := strings.Split(str, "_")
	items := []string{}
	for _, item := range raw {
		if item != "" {
			items = append(items, item)
		}
	}
	if len(items) == 0 {
		return out("")
	}
	if len(items) == 1 {
		return out(plain(items[0]))
	}
	for i, item := range items {
		items[i] = snake(item, i)
	}
	return out(strings.Join(items, ""))
}
