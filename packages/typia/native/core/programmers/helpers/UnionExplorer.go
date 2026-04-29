package helpers

import (
	"strings"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type unionExplorerNamespace struct{}

var UnionExplorer = unionExplorerNamespace{}

type UnionExplorer_IExplore struct {
	Tracable bool
	Source   string
	From     string
	Postfix  string
	Start    *int
}

type UnionExplorer_ObjectConfig struct {
	Objector UnionExplorer_IObjector
}

type UnionExplorer_IObjector struct {
	Checker   func(props UnionExplorer_ObjectorCheckerProps) *shimast.Node
	Decoder   func(props UnionExplorer_ObjectorDecoderProps) *shimast.Node
	Joiner    any
	Unionizer func(props UnionExplorer_ObjectorUnionizerProps) *shimast.Node
	Failure   func(props UnionExplorer_ObjectorFailureProps) *shimast.Node
	Is        func(exp *shimast.Expression) *shimast.Node
	Required  func(exp *shimast.Expression) *shimast.Node
	Full      func(props UnionExplorer_ObjectorFullProps) *shimast.Node
	Type      *shimast.TypeNode
}

type UnionExplorer_ObjectorCheckerProps struct {
	Metadata *nativemetadata.MetadataSchema
	Input    *shimast.Expression
	Explore  any
}

type UnionExplorer_ObjectorDecoderProps struct {
	Input   *shimast.Expression
	Object  *nativemetadata.MetadataObjectType
	Explore any
}

type UnionExplorer_ObjectorUnionizerProps struct {
	Objects []*nativemetadata.MetadataObjectType
	Input   *shimast.Expression
	Explore any
}

type UnionExplorer_ObjectorFailureProps struct {
	Input    *shimast.Expression
	Expected string
	Explore  any
}

type UnionExplorer_ObjectorFullProps struct {
	Condition *shimast.Expression
	Input     *shimast.Expression
	Expected  string
	Explore   any
}

type UnionExplorer_ObjectProps struct {
	Config  UnionExplorer_ObjectConfig
	Level   int
	Objects []*nativemetadata.MetadataObjectType
	Input   *shimast.Expression
	Explore any
}

type UnionExplorer_ArrayLikeConfig struct {
	Checker func(props UnionExplorer_ArrayLikeCheckerProps) *shimast.Node
	Decoder func(props UnionExplorer_ArrayLikeDecoderProps) *shimast.Node
	Empty   *shimast.Node
	Success *shimast.Expression
	Failure func(props UnionExplorer_ArrayLikeFailureProps) *shimast.Node
}

type UnionExplorer_ArrayLikeCheckerProps struct {
	Input      *shimast.Expression
	Definition any
	Explore    any
	Container  *shimast.Expression
}

type UnionExplorer_ArrayLikeDecoderProps struct {
	Input      *shimast.Expression
	Definition any
	Explore    any
}

type UnionExplorer_ArrayLikeFailureProps struct {
	Input    *shimast.Expression
	Expected string
	Explore  any
}

type UnionExplorer_TupleProps struct {
	Config     UnionExplorer_ArrayLikeConfig
	Parameters []*shimast.Node
	Input      *shimast.Expression
	Tuples     []*nativemetadata.MetadataTuple
	Explore    any
}

type UnionExplorer_ArrayProps struct {
	Config     UnionExplorer_ArrayLikeConfig
	Parameters []*shimast.Node
	Input      *shimast.Expression
	Arrays     []*nativemetadata.MetadataArray
	Explore    any
}

type UnionExplorer_ArrayOrTupleProps struct {
	Config      UnionExplorer_ArrayLikeConfig
	Parameters  []*shimast.Node
	Input       *shimast.Expression
	Definitions []any
	Explore     any
}

type UnionExplorer_SetProps struct {
	Config     UnionExplorer_ArrayLikeConfig
	Parameters []*shimast.Node
	Input      *shimast.Expression
	Sets       []*nativemetadata.MetadataSet
	Explore    any
}

type UnionExplorer_MapProps struct {
	Config     UnionExplorer_ArrayLikeConfig
	Parameters []*shimast.Node
	Input      *shimast.Expression
	Maps       []*nativemetadata.MetadataMap
	Explore    any
}

func (unionExplorerNamespace) Object(props UnionExplorer_ObjectProps) *shimast.Node {
	if len(props.Objects) == 1 {
		return props.Config.Objector.Decoder(UnionExplorer_ObjectorDecoderProps{
			Input:   props.Input,
			Object:  props.Objects[0],
			Explore: props.Explore,
		})
	}

	names := make([]string, 0, len(props.Objects))
	for _, obj := range props.Objects {
		names = append(names, obj.Name)
	}
	expected := "(" + strings.Join(names, " | ") + ")"

	specList := UnionPredicator.Object(props.Objects)
	if len(specList) == 0 {
		condition := props.Config.Objector.Unionizer(UnionExplorer_ObjectorUnionizerProps{
			Objects: props.Objects,
			Input:   props.Input,
			Explore: unionExplorer_with_tracable(props.Explore, false),
		})
		if props.Config.Objector.Full != nil {
			return props.Config.Objector.Full(UnionExplorer_ObjectorFullProps{
				Condition: condition,
				Expected:  expected,
				Explore:   props.Explore,
				Input:     props.Input,
			})
		}
		return condition
	}

	remained := []*nativemetadata.MetadataObjectType{}
	for _, obj := range props.Objects {
		found := false
		for _, spec := range specList {
			if spec.Object == obj {
				found = true
				break
			}
		}
		if found == false {
			remained = append(remained, obj)
		}
	}

	filtered := []UnionPredicator_ISpecialized{}
	for _, spec := range specList {
		if spec.Property.Key.GetSoleLiteral() != nil {
			filtered = append(filtered, spec)
		}
	}
	if len(filtered) == 0 {
		condition := props.Config.Objector.Unionizer(UnionExplorer_ObjectorUnionizerProps{
			Objects: props.Objects,
			Input:   props.Input,
			Explore: unionExplorer_with_tracable(props.Explore, false),
		})
		if props.Config.Objector.Full != nil {
			return props.Config.Objector.Full(UnionExplorer_ObjectorFullProps{
				Condition: condition,
				Expected:  expected,
				Explore:   props.Explore,
				Input:     props.Input,
			})
		}
		return condition
	}

	var condition *shimast.Node
	for i := len(filtered) - 1; i >= 0; i-- {
		spec := filtered[i]
		key := *spec.Property.Key.GetSoleLiteral()
		accessor := nativefactories.IdentifierFactory.Access(props.Input, key)

		var pred *shimast.Node
		if spec.Neighbor {
			pred = props.Config.Objector.Checker(UnionExplorer_ObjectorCheckerProps{
				Input:    accessor,
				Metadata: spec.Property.Value,
				Explore:  unionExplorer_with_postfix(props.Explore, false, nativefactories.IdentifierFactory.Postfix(key)),
			})
		} else {
			pred = nativefactories.ExpressionFactory.IsRequired(accessor)
			if props.Config.Objector.Required != nil {
				pred = props.Config.Objector.Required(pred)
			}
		}
		if props.Config.Objector.Is != nil {
			pred = props.Config.Objector.Is(pred)
		}

		var elseStatement *shimast.Node
		if i == len(filtered)-1 {
			if len(remained) != 0 {
				elseStatement = unionExplorer_factory.NewReturnStatement(UnionExplorer.Object(UnionExplorer_ObjectProps{
					Config:  props.Config,
					Level:   props.Level + 1,
					Input:   props.Input,
					Objects: remained,
					Explore: props.Explore,
				}))
			} else {
				elseStatement = props.Config.Objector.Failure(UnionExplorer_ObjectorFailureProps{
					Input:    props.Input,
					Explore:  props.Explore,
					Expected: expected,
				})
			}
		} else {
			elseStatement = condition
		}

		condition = unionExplorer_factory.NewIfStatement(
			pred,
			unionExplorer_factory.NewReturnStatement(
				props.Config.Objector.Decoder(UnionExplorer_ObjectorDecoderProps{
					Object:  spec.Object,
					Input:   props.Input,
					Explore: props.Explore,
				}),
			),
			elseStatement,
		)
	}

	return unionExplorer_factory.NewCallExpression(
		unionExplorer_factory.NewArrowFunction(
			nil,
			nil,
			unionExplorer_factory.NewNodeList(nil),
			nil,
			nil,
			unionExplorer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			unionExplorer_factory.NewBlock(unionExplorer_factory.NewNodeList([]*shimast.Node{condition}), true),
		),
		nil,
		nil,
		nil,
		shimast.NodeFlagsNone,
	)
}

func (unionExplorerNamespace) Tuple(props UnionExplorer_TupleProps) *shimast.Node {
	definitions := make([]any, 0, len(props.Tuples))
	for _, tuple := range props.Tuples {
		definitions = append(definitions, tuple)
	}
	return unionExplorer_check_union_array_like(unionExplorer_check_union_array_likeProps{
		Config: props.Config,
		Accessor: unionExplorer_check_union_array_likeAccessor{
			Transform: func(x any) any { return x },
			Element:   func(x any) any { return x },
			Size:      func(input *shimast.Expression) *shimast.Node { return nil },
			Front:     func(input *shimast.Expression) *shimast.Node { return input },
			Array:     func(input *shimast.Expression) *shimast.Node { return input },
			Name: func(t any, elem any) string {
				return t.(*nativemetadata.MetadataTuple).Type.Name
			},
		},
		Parameters:  props.Parameters,
		Input:       props.Input,
		Definitions: definitions,
		Explore:     props.Explore,
	})
}

func (unionExplorerNamespace) Array(props UnionExplorer_ArrayProps) *shimast.Node {
	definitions := make([]any, 0, len(props.Arrays))
	for _, array := range props.Arrays {
		definitions = append(definitions, array)
	}
	return unionExplorer_check_union_array_like(unionExplorer_check_union_array_likeProps{
		Config: props.Config,
		Accessor: unionExplorer_check_union_array_likeAccessor{
			Transform: func(x any) any { return x },
			Element: func(x any) any {
				return x.(*nativemetadata.MetadataArray).Type.Value
			},
			Size: func(input *shimast.Expression) *shimast.Node {
				return nativefactories.IdentifierFactory.Access(input, "length")
			},
			Front: func(input *shimast.Expression) *shimast.Node {
				return unionExplorer_factory.NewElementAccessExpression(input, nil, nativefactories.ExpressionFactory.Number(0), shimast.NodeFlagsNone)
			},
			Array: func(input *shimast.Expression) *shimast.Node { return input },
			Name: func(t any, elem any) string {
				return t.(*nativemetadata.MetadataArray).Type.Name
			},
		},
		Parameters:  props.Parameters,
		Input:       props.Input,
		Definitions: definitions,
		Explore:     props.Explore,
	})
}

func (unionExplorerNamespace) Array_or_tuple(props UnionExplorer_ArrayOrTupleProps) *shimast.Node {
	return unionExplorer_check_union_array_like(unionExplorer_check_union_array_likeProps{
		Config: props.Config,
		Accessor: unionExplorer_check_union_array_likeAccessor{
			Transform: func(x any) any { return x },
			Element: func(x any) any {
				if array, ok := x.(*nativemetadata.MetadataArray); ok {
					return array.Type.Value
				}
				return x
			},
			Size: func(input *shimast.Expression) *shimast.Node {
				return nativefactories.IdentifierFactory.Access(input, "length")
			},
			Front: func(input *shimast.Expression) *shimast.Node {
				return unionExplorer_factory.NewElementAccessExpression(input, nil, nativefactories.ExpressionFactory.Number(0), shimast.NodeFlagsNone)
			},
			Array: func(input *shimast.Expression) *shimast.Node { return input },
			Name: func(m any, elem any) string {
				switch v := m.(type) {
				case *nativemetadata.MetadataArray:
					return v.Type.Name
				case *nativemetadata.MetadataTuple:
					return v.Type.Name
				default:
					return "unknown"
				}
			},
		},
		Parameters:  props.Parameters,
		Input:       props.Input,
		Definitions: props.Definitions,
		Explore:     props.Explore,
	})
}

func (unionExplorerNamespace) Set(props UnionExplorer_SetProps) *shimast.Node {
	definitions := make([]any, 0, len(props.Sets))
	for _, set := range props.Sets {
		definitions = append(definitions, set.Value)
	}
	return unionExplorer_check_union_array_like(unionExplorer_check_union_array_likeProps{
		Config: props.Config,
		Accessor: unionExplorer_check_union_array_likeAccessor{
			Transform: func(value any) any {
				meta := value.(*nativemetadata.MetadataSchema)
				return nativemetadata.MetadataArray_create(nativemetadata.MetadataArray{
					Tags: [][]nativemetadata.IMetadataTypeTag{},
					Type: nativemetadata.MetadataArrayType_create(nativemetadata.MetadataArrayType{
						Name:      "Set<" + meta.GetName() + ">",
						Index:     nil,
						Recursive: false,
						Nullables: []bool{},
						Value:     meta,
					}),
				})
			},
			Element: func(array any) any {
				return array.(*nativemetadata.MetadataArray).Type.Value
			},
			Size: func(input *shimast.Expression) *shimast.Node {
				return nativefactories.IdentifierFactory.Access(input, "size")
			},
			Front: func(input *shimast.Expression) *shimast.Node {
				values := unionExplorer_factory.NewCallExpression(
					nativefactories.IdentifierFactory.Access(input, "values"),
					nil,
					nil,
					nil,
					shimast.NodeFlagsNone,
				)
				next := unionExplorer_factory.NewCallExpression(
					nativefactories.IdentifierFactory.Access(values, "next"),
					nil,
					nil,
					nil,
					shimast.NodeFlagsNone,
				)
				return nativefactories.IdentifierFactory.Access(next, "value")
			},
			Array: func(input *shimast.Expression) *shimast.Node {
				return unionExplorer_factory.NewArrayLiteralExpression(
					unionExplorer_factory.NewNodeList([]*shimast.Node{
						unionExplorer_factory.NewSpreadElement(input),
					}),
					false,
				)
			},
			Name: func(_m any, elem any) string {
				return "Set<" + elem.(*nativemetadata.MetadataSchema).GetName() + ">"
			},
		},
		Parameters:  props.Parameters,
		Input:       props.Input,
		Definitions: definitions,
		Explore:     props.Explore,
	})
}

func (unionExplorerNamespace) Map(props UnionExplorer_MapProps) *shimast.Node {
	definitions := make([]any, 0, len(props.Maps))
	for _, m := range props.Maps {
		definitions = append(definitions, m)
	}
	return unionExplorer_check_union_array_like(unionExplorer_check_union_array_likeProps{
		Config: props.Config,
		Accessor: unionExplorer_check_union_array_likeAccessor{
			Element: func(array any) any {
				elements := array.(*nativemetadata.MetadataArray).Type.Value.Tuples[0].Type.Elements
				return []*nativemetadata.MetadataSchema{elements[0], elements[1]}
			},
			Size: func(input *shimast.Expression) *shimast.Node {
				return nativefactories.IdentifierFactory.Access(input, "size")
			},
			Front: func(input *shimast.Expression) *shimast.Node {
				entries := unionExplorer_factory.NewCallExpression(
					nativefactories.IdentifierFactory.Access(input, "entries"),
					nil,
					nil,
					nil,
					shimast.NodeFlagsNone,
				)
				next := unionExplorer_factory.NewCallExpression(
					nativefactories.IdentifierFactory.Access(entries, "next"),
					nil,
					nil,
					nil,
					shimast.NodeFlagsNone,
				)
				return nativefactories.IdentifierFactory.Access(next, "value")
			},
			Array: func(input *shimast.Expression) *shimast.Node {
				return unionExplorer_factory.NewArrayLiteralExpression(
					unionExplorer_factory.NewNodeList([]*shimast.Node{
						unionExplorer_factory.NewSpreadElement(input),
					}),
					false,
				)
			},
			Name: func(_m any, elem any) string {
				pair := elem.([]*nativemetadata.MetadataSchema)
				return "Map<" + pair[0].GetName() + ", " + pair[1].GetName() + ">"
			},
			Transform: func(origin any) any {
				m := origin.(*nativemetadata.MetadataMap)
				ofMap := true
				tuple := nativemetadata.MetadataTuple_create(nativemetadata.MetadataTuple{
					Tags: [][]nativemetadata.IMetadataTypeTag{},
					Type: nativemetadata.MetadataTupleType_create(nativemetadata.MetadataTupleType{
						Name:      "[" + m.Key.GetName() + ", " + m.Value.GetName() + "]",
						Index:     nil,
						Recursive: false,
						Nullables: []bool{},
						Elements:  []*nativemetadata.MetadataSchema{m.Key, m.Value},
					}),
				})
				tuple.Type.Of_map = &ofMap
				return nativemetadata.MetadataArray_create(nativemetadata.MetadataArray{
					Tags: [][]nativemetadata.IMetadataTypeTag{},
					Type: nativemetadata.MetadataArrayType_create(nativemetadata.MetadataArrayType{
						Name:      "Map<" + m.Key.GetName() + ", " + m.Value.GetName() + ">",
						Index:     nil,
						Recursive: false,
						Nullables: []bool{},
						Value: nativemetadata.MetadataSchema_create(nativemetadata.MetadataSchema{
							Any:       false,
							Required:  true,
							Optional:  false,
							Nullable:  false,
							Escaped:   nil,
							Constants: []*nativemetadata.MetadataConstant{},
							Atomics:   []*nativemetadata.MetadataAtomic{},
							Templates: []*nativemetadata.MetadataTemplate{},
							Arrays:    []*nativemetadata.MetadataArray{},
							Tuples:    []*nativemetadata.MetadataTuple{tuple},
							Objects:   []*nativemetadata.MetadataObject{},
							Aliases:   []*nativemetadata.MetadataAlias{},
							Functions: []*nativemetadata.MetadataFunction{},
							Rest:      nil,
							Natives:   []*nativemetadata.MetadataNative{},
							Sets:      []*nativemetadata.MetadataSet{},
							Maps:      []*nativemetadata.MetadataMap{},
						}),
					}),
				})
			},
		},
		Parameters:  props.Parameters,
		Input:       props.Input,
		Definitions: definitions,
		Explore:     props.Explore,
	})
}

type unionExplorer_check_union_array_likeProps struct {
	Config      UnionExplorer_ArrayLikeConfig
	Accessor    unionExplorer_check_union_array_likeAccessor
	Parameters  []*shimast.Node
	Input       *shimast.Expression
	Definitions []any
	Explore     any
}

type unionExplorer_check_union_array_likeAccessor struct {
	Transform func(origin any) any
	Element   func(meta any) any
	Name      func(meta any, elem any) string
	Front     func(input *shimast.Expression) *shimast.Node
	Array     func(input *shimast.Expression) *shimast.Node
	Size      func(input *shimast.Expression) *shimast.Node
}

func unionExplorer_check_union_array_like(props unionExplorer_check_union_array_likeProps) *shimast.Node {
	transform := props.Accessor.Transform
	if transform == nil {
		transform = func(origin any) any { return origin }
	}
	targets := make([]any, 0, len(props.Definitions))
	for _, definition := range props.Definitions {
		targets = append(targets, transform(definition))
	}
	if len(targets) == 1 {
		return unionExplorer_factory.NewArrowFunction(
			nil,
			nil,
			unionExplorer_factory.NewNodeList(props.Parameters),
			nil,
			nil,
			unionExplorer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			props.Config.Decoder(UnionExplorer_ArrayLikeDecoderProps{
				Input:      props.Accessor.Array(props.Input),
				Definition: targets[0],
				Explore:    props.Explore,
			}),
		)
	}

	array := unionExplorer_factory.NewIdentifier("array")
	top := unionExplorer_factory.NewIdentifier("top")
	statements := []*shimast.Node{}
	tupleList := []*nativemetadata.MetadataTuple{}
	arrayList := []*nativemetadata.MetadataArray{}
	for _, target := range targets {
		switch v := target.(type) {
		case *nativemetadata.MetadataTuple:
			tupleList = append(tupleList, v)
		case *nativemetadata.MetadataArray:
			arrayList = append(arrayList, v)
		}
	}

	predicate := func(meta any) *shimast.Node {
		inputType := unionExplorer_factory.NewTypeReferenceNode(unionExplorer_factory.NewIdentifier("any[]"), nil)
		postfix := ""
		if _, ok := meta.(*nativemetadata.MetadataArrayType); ok {
			inputType = nativefactories.TypeFactory.Keyword("any")
			postfix = "\"[0]\""
		}
		return unionExplorer_factory.NewAsExpression(
			unionExplorer_factory.NewArrayLiteralExpression(
				unionExplorer_factory.NewNodeList([]*shimast.Node{
					unionExplorer_factory.NewArrowFunction(
						nil,
						nil,
						unionExplorer_factory.NewNodeList([]*shimast.Node{
							nativefactories.IdentifierFactory.Parameter("top", inputType, nil),
						}),
						nativefactories.TypeFactory.Keyword("any"),
						nil,
						unionExplorer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
						props.Config.Checker(UnionExplorer_ArrayLikeCheckerProps{
							Input:      unionExplorer_factory.NewIdentifier("top"),
							Definition: props.Accessor.Element(meta),
							Explore:    unionExplorer_with_postfix(props.Explore, false, postfix),
							Container:  array,
						}),
					),
					unionExplorer_factory.NewArrowFunction(
						nil,
						nil,
						unionExplorer_factory.NewNodeList([]*shimast.Node{
							nativefactories.IdentifierFactory.Parameter(
								"entire",
								unionExplorer_factory.NewTypeReferenceNode(unionExplorer_factory.NewIdentifier("any[]"), nil),
								nil,
							),
						}),
						nativefactories.TypeFactory.Keyword("any"),
						nil,
						unionExplorer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
						props.Config.Decoder(UnionExplorer_ArrayLikeDecoderProps{
							Input:      unionExplorer_factory.NewIdentifier("entire"),
							Definition: meta,
							Explore:    unionExplorer_with_tracable(props.Explore, true),
						}),
					),
				}),
				true,
			),
			unionExplorer_factory.NewTypeReferenceNode(unionExplorer_factory.NewIdentifier("const"), nil),
		)
	}

	iterate := func(init string, from *shimast.Expression, ifStatement *shimast.Node) *shimast.Node {
		return unionExplorer_factory.NewForInOrOfStatement(
			shimast.KindForOfStatement,
			nil,
			unionExplorer_factory.NewVariableDeclarationList(
				unionExplorer_factory.NewNodeList([]*shimast.Node{
					unionExplorer_factory.NewVariableDeclaration(
						unionExplorer_factory.NewIdentifier(init),
						nil,
						nil,
						nil,
					),
				}),
				shimast.NodeFlagsConst,
			),
			from,
			ifStatement,
		)
	}

	if len(tupleList) != 0 {
		tuplePredicates := make([]*shimast.Node, 0, len(tupleList))
		for _, x := range tupleList {
			tuplePredicates = append(tuplePredicates, predicate(x))
		}
		statements = append(statements,
			nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
				Name:  "array",
				Value: props.Accessor.Array(props.Input),
			}),
			nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
				Name: "tuplePredicators",
				Value: unionExplorer_factory.NewArrayLiteralExpression(
					unionExplorer_factory.NewNodeList(tuplePredicates),
					true,
				),
			}),
			iterate(
				"pred",
				unionExplorer_factory.NewIdentifier("tuplePredicators"),
				unionExplorer_factory.NewIfStatement(
					unionExplorer_factory.NewCallExpression(
						unionExplorer_factory.NewIdentifier("pred[0]"),
						nil,
						nil,
						unionExplorer_factory.NewNodeList([]*shimast.Node{array}),
						shimast.NodeFlagsNone,
					),
					unionExplorer_factory.NewReturnStatement(
						unionExplorer_factory.NewCallExpression(
							unionExplorer_factory.NewIdentifier("pred[1]"),
							nil,
							nil,
							unionExplorer_factory.NewNodeList([]*shimast.Node{array}),
							shimast.NodeFlagsNone,
						),
					),
					nil,
				),
			),
		)
	}
	if len(arrayList) != 0 {
		if len(tupleList) == 0 {
			statements = append(statements, nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
				Name:  "array",
				Value: props.Accessor.Array(props.Input),
			}))
		}
		arrayPredicates := make([]*shimast.Node, 0, len(arrayList))
		for _, x := range arrayList {
			arrayPredicates = append(arrayPredicates, predicate(x))
		}
		statements = append(statements,
			nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
				Name:  "top",
				Value: props.Accessor.Front(props.Input),
			}),
			unionExplorer_factory.NewIfStatement(
				unionExplorer_factory.NewBinaryExpression(
					nil,
					nativefactories.ExpressionFactory.Number(0),
					nil,
					unionExplorer_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
					props.Accessor.Size(props.Input),
				),
				unionExplorer_return_or_statement(props.Config.Empty),
				nil,
			),
			nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
				Name: "arrayPredicators",
				Value: unionExplorer_factory.NewArrayLiteralExpression(
					unionExplorer_factory.NewNodeList(arrayPredicates),
					true,
				),
			}),
			nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
				Name: "passed",
				Value: unionExplorer_factory.NewCallExpression(
					nativefactories.IdentifierFactory.Access(unionExplorer_factory.NewIdentifier("arrayPredicators"), "filter"),
					nil,
					nil,
					unionExplorer_factory.NewNodeList([]*shimast.Node{
						unionExplorer_factory.NewArrowFunction(
							nil,
							nil,
							unionExplorer_factory.NewNodeList([]*shimast.Node{
								nativefactories.IdentifierFactory.Parameter("pred", nil, nil),
							}),
							nil,
							nil,
							unionExplorer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
							unionExplorer_factory.NewCallExpression(
								unionExplorer_factory.NewIdentifier("pred[0]"),
								nil,
								nil,
								unionExplorer_factory.NewNodeList([]*shimast.Node{top}),
								shimast.NodeFlagsNone,
							),
						),
					}),
					shimast.NodeFlagsNone,
				),
			}),
			unionExplorer_array_if(iterate, array, top, props.Config.Success),
		)
	}
	names := make([]string, 0, len(targets))
	for _, target := range targets {
		elem := props.Accessor.Element(target)
		names = append(names, props.Accessor.Name(target, elem))
	}
	statements = append(statements, props.Config.Failure(UnionExplorer_ArrayLikeFailureProps{
		Input:    props.Input,
		Expected: "(" + strings.Join(names, " | ") + ")",
		Explore:  props.Explore,
	}))
	return unionExplorer_factory.NewArrowFunction(
		nil,
		nil,
		unionExplorer_factory.NewNodeList(props.Parameters),
		nil,
		nil,
		unionExplorer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
		unionExplorer_factory.NewBlock(
			unionExplorer_factory.NewNodeList(statements),
			true,
		),
	)
}

func unionExplorer_array_if(iterate func(init string, from *shimast.Expression, ifStatement *shimast.Node) *shimast.Node, array *shimast.Node, top *shimast.Node, success *shimast.Expression) *shimast.Node {
	return unionExplorer_factory.NewIfStatement(
		unionExplorer_factory.NewBinaryExpression(
			nil,
			nativefactories.ExpressionFactory.Number(1),
			nil,
			unionExplorer_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
			unionExplorer_factory.NewIdentifier("passed.length"),
		),
		unionExplorer_factory.NewReturnStatement(
			unionExplorer_factory.NewCallExpression(
				unionExplorer_factory.NewElementAccessExpression(
					unionExplorer_factory.NewNonNullExpression(
						unionExplorer_factory.NewIdentifier("passed[0]"),
						shimast.NodeFlagsNone,
					),
					nil,
					nativefactories.ExpressionFactory.Number(1),
					shimast.NodeFlagsNone,
				),
				nil,
				nil,
				unionExplorer_factory.NewNodeList([]*shimast.Node{array}),
				shimast.NodeFlagsNone,
			),
		),
		unionExplorer_factory.NewIfStatement(
			unionExplorer_factory.NewBinaryExpression(
				nil,
				nativefactories.ExpressionFactory.Number(1),
				nil,
				unionExplorer_factory.NewToken(shimast.KindLessThanToken),
				unionExplorer_factory.NewIdentifier("passed.length"),
			),
			iterate(
				"pred",
				unionExplorer_factory.NewIdentifier("passed"),
				unionExplorer_factory.NewIfStatement(
					unionExplorer_factory.NewCallExpression(
						nativefactories.IdentifierFactory.Access(array, "every"),
						nil,
						nil,
						unionExplorer_factory.NewNodeList([]*shimast.Node{
							unionExplorer_factory.NewArrowFunction(
								nil,
								nil,
								unionExplorer_factory.NewNodeList([]*shimast.Node{
									nativefactories.IdentifierFactory.Parameter("value", nativefactories.TypeFactory.Keyword("any"), nil),
								}),
								nil,
								nil,
								unionExplorer_factory.NewToken(shimast.KindEqualsGreaterThanToken),
								unionExplorer_factory.NewBinaryExpression(
									nil,
									success,
									nil,
									unionExplorer_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
									unionExplorer_factory.NewCallExpression(
										unionExplorer_factory.NewIdentifier("pred[0]"),
										nil,
										nil,
										unionExplorer_factory.NewNodeList([]*shimast.Node{
											unionExplorer_factory.NewIdentifier("value"),
										}),
										shimast.NodeFlagsNone,
									),
								),
							),
						}),
						shimast.NodeFlagsNone,
					),
					unionExplorer_factory.NewReturnStatement(
						unionExplorer_factory.NewCallExpression(
							unionExplorer_factory.NewIdentifier("pred[1]"),
							nil,
							nil,
							unionExplorer_factory.NewNodeList([]*shimast.Node{
								unionExplorer_factory.NewIdentifier("array"),
							}),
							shimast.NodeFlagsNone,
						),
					),
					nil,
				),
			),
			nil,
		),
	)
}

func unionExplorer_return_or_statement(node *shimast.Node) *shimast.Node {
	if node == nil || node.Kind == shimast.KindReturnStatement {
		return node
	}
	return unionExplorer_factory.NewReturnStatement(node)
}

func unionExplorer_with_tracable(base any, tracable bool) any {
	switch value := base.(type) {
	case UnionExplorer_IExplore:
		value.Tracable = tracable
		return value
	case *UnionExplorer_IExplore:
		next := *value
		next.Tracable = tracable
		return next
	case map[string]any:
		next := map[string]any{}
		for k, v := range value {
			next[k] = v
		}
		next["tracable"] = tracable
		return next
	default:
		return base
	}
}

func unionExplorer_with_postfix(base any, tracable bool, postfix string) any {
	switch value := base.(type) {
	case UnionExplorer_IExplore:
		value.Tracable = tracable
		value.Postfix = postfix
		return value
	case *UnionExplorer_IExplore:
		next := *value
		next.Tracable = tracable
		next.Postfix = postfix
		return next
	case map[string]any:
		next := map[string]any{}
		for k, v := range value {
			next[k] = v
		}
		next["tracable"] = tracable
		next["postfix"] = postfix
		return next
	default:
		return base
	}
}

var unionExplorer_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
