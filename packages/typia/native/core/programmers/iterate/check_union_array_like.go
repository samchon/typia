package iterate

import (
	"strings"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type Check_union_array_likeProps struct {
	Config      Check_union_array_like_IConfig
	Accessor    Check_union_array_like_IAccessor
	Parameters  []*shimast.Node
	Input       *shimast.Expression
	Definitions []any
	Explore     any
}

type Check_union_array_like_IConfig struct {
	Checker func(props Check_union_array_like_CheckerProps) *shimast.Node
	Decoder func(props Check_union_array_like_DecoderProps) *shimast.Node
	Empty   *shimast.Node
	Success *shimast.Expression
	Failure func(props Check_union_array_like_FailureProps) *shimast.Node
}

type Check_union_array_like_CheckerProps struct {
	Input      *shimast.Expression
	Definition any
	Explore    any
	Container  *shimast.Expression
}

type Check_union_array_like_DecoderProps struct {
	Input      *shimast.Expression
	Definition any
	Explore    any
}

type Check_union_array_like_FailureProps struct {
	Input    *shimast.Expression
	Expected string
	Explore  any
}

type Check_union_array_like_IAccessor struct {
	Transform func(origin any) any
	Element   func(meta any) any
	Name      func(meta any, elem any) string
	Front     func(input *shimast.Expression) *shimast.Node
	Array     func(input *shimast.Expression) *shimast.Node
	Size      func(input *shimast.Expression) *shimast.Node
}

func Check_union_array_like(props Check_union_array_likeProps) *shimast.Node {
	targets := make([]any, 0, len(props.Definitions))
	for _, definition := range props.Definitions {
		targets = append(targets, props.Accessor.Transform(definition))
	}
	if len(targets) == 1 {
		return check_union_array_like_factory.NewArrowFunction(
			nil,
			nil,
			check_union_array_like_factory.NewNodeList(props.Parameters),
			nil,
			nil,
			check_union_array_like_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			props.Config.Decoder(Check_union_array_like_DecoderProps{
				Input:      props.Accessor.Array(props.Input),
				Definition: targets[0],
				Explore:    props.Explore,
			}),
		)
	}

	array := check_union_array_like_factory.NewIdentifier("array")
	top := check_union_array_like_factory.NewIdentifier("top")
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
		inputType := check_union_array_like_factory.NewTypeReferenceNode(check_union_array_like_factory.NewIdentifier("any[]"), nil)
		postfix := ""
		if _, ok := meta.(*nativemetadata.MetadataArrayType); ok {
			inputType = nativefactories.TypeFactory.Keyword("any")
			postfix = "\"[0]\""
		}
		return check_union_array_like_factory.NewAsExpression(
			check_union_array_like_factory.NewArrayLiteralExpression(
				check_union_array_like_factory.NewNodeList([]*shimast.Node{
					check_union_array_like_factory.NewArrowFunction(
						nil,
						nil,
						check_union_array_like_factory.NewNodeList([]*shimast.Node{
							nativefactories.IdentifierFactory.Parameter("top", inputType, nil),
						}),
						nativefactories.TypeFactory.Keyword("any"),
						nil,
						check_union_array_like_factory.NewToken(shimast.KindEqualsGreaterThanToken),
						props.Config.Checker(Check_union_array_like_CheckerProps{
							Input:      check_union_array_like_factory.NewIdentifier("top"),
							Definition: props.Accessor.Element(meta),
							Explore:    check_union_array_like_explore(props.Explore, false, postfix),
							Container:  array,
						}),
					),
					check_union_array_like_factory.NewArrowFunction(
						nil,
						nil,
						check_union_array_like_factory.NewNodeList([]*shimast.Node{
							nativefactories.IdentifierFactory.Parameter(
								"entire",
								check_union_array_like_factory.NewTypeReferenceNode(check_union_array_like_factory.NewIdentifier("any[]"), nil),
								nil,
							),
						}),
						nativefactories.TypeFactory.Keyword("any"),
						nil,
						check_union_array_like_factory.NewToken(shimast.KindEqualsGreaterThanToken),
						props.Config.Decoder(Check_union_array_like_DecoderProps{
							Input:      check_union_array_like_factory.NewIdentifier("entire"),
							Definition: meta,
							Explore:    check_union_array_like_explore_trace(props.Explore, true),
						}),
					),
				}),
				true,
			),
			check_union_array_like_factory.NewTypeReferenceNode(check_union_array_like_factory.NewIdentifier("const"), nil),
		)
	}

	iterate := func(init string, from *shimast.Expression, ifStatement *shimast.Node) *shimast.Node {
		return check_union_array_like_factory.NewForInOrOfStatement(
			shimast.KindForOfStatement,
			nil,
			check_union_array_like_factory.NewVariableDeclarationList(
				check_union_array_like_factory.NewNodeList([]*shimast.Node{
					check_union_array_like_factory.NewVariableDeclaration(
						check_union_array_like_factory.NewIdentifier(init),
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
				Value: check_union_array_like_factory.NewArrayLiteralExpression(
					check_union_array_like_factory.NewNodeList(tuplePredicates),
					true,
				),
			}),
			iterate(
				"pred",
				check_union_array_like_factory.NewIdentifier("tuplePredicators"),
				check_union_array_like_factory.NewIfStatement(
					check_union_array_like_factory.NewCallExpression(
						check_union_array_like_factory.NewIdentifier("pred[0]"),
						nil,
						nil,
						check_union_array_like_factory.NewNodeList([]*shimast.Node{array}),
						shimast.NodeFlagsNone,
					),
					check_union_array_like_factory.NewReturnStatement(
						check_union_array_like_factory.NewCallExpression(
							check_union_array_like_factory.NewIdentifier("pred[1]"),
							nil,
							nil,
							check_union_array_like_factory.NewNodeList([]*shimast.Node{array}),
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
			check_union_array_like_factory.NewIfStatement(
				check_union_array_like_factory.NewBinaryExpression(
					nil,
					nativefactories.ExpressionFactory.Number(0),
					nil,
					check_union_array_like_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
					props.Accessor.Size(props.Input),
				),
				check_union_array_like_return_or_statement(props.Config.Empty),
				nil,
			),
			nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
				Name: "arrayPredicators",
				Value: check_union_array_like_factory.NewArrayLiteralExpression(
					check_union_array_like_factory.NewNodeList(arrayPredicates),
					true,
				),
			}),
			nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
				Name: "passed",
				Value: check_union_array_like_factory.NewCallExpression(
					nativefactories.IdentifierFactory.Access(check_union_array_like_factory.NewIdentifier("arrayPredicators"), "filter"),
					nil,
					nil,
					check_union_array_like_factory.NewNodeList([]*shimast.Node{
						check_union_array_like_factory.NewArrowFunction(
							nil,
							nil,
							check_union_array_like_factory.NewNodeList([]*shimast.Node{
								nativefactories.IdentifierFactory.Parameter("pred", nil, nil),
							}),
							nil,
							nil,
							check_union_array_like_factory.NewToken(shimast.KindEqualsGreaterThanToken),
							check_union_array_like_factory.NewCallExpression(
								check_union_array_like_factory.NewIdentifier("pred[0]"),
								nil,
								nil,
								check_union_array_like_factory.NewNodeList([]*shimast.Node{top}),
								shimast.NodeFlagsNone,
							),
						),
					}),
					shimast.NodeFlagsNone,
				),
			}),
			check_union_array_like_array_if(iterate, array, top, props.Config.Success),
		)
	}
	names := make([]string, 0, len(targets))
	for _, target := range targets {
		elem := props.Accessor.Element(target)
		names = append(names, props.Accessor.Name(target, elem))
	}
	statements = append(statements, props.Config.Failure(Check_union_array_like_FailureProps{
		Input:    props.Input,
		Expected: "(" + strings.Join(names, " | ") + ")",
		Explore:  props.Explore,
	}))
	return check_union_array_like_factory.NewArrowFunction(
		nil,
		nil,
		check_union_array_like_factory.NewNodeList(props.Parameters),
		nil,
		nil,
		check_union_array_like_factory.NewToken(shimast.KindEqualsGreaterThanToken),
		check_union_array_like_factory.NewBlock(
			check_union_array_like_factory.NewNodeList(statements),
			true,
		),
	)
}

func check_union_array_like_array_if(iterate func(init string, from *shimast.Expression, ifStatement *shimast.Node) *shimast.Node, array *shimast.Node, top *shimast.Node, success *shimast.Expression) *shimast.Node {
	return check_union_array_like_factory.NewIfStatement(
		check_union_array_like_factory.NewBinaryExpression(
			nil,
			nativefactories.ExpressionFactory.Number(1),
			nil,
			check_union_array_like_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
			check_union_array_like_factory.NewIdentifier("passed.length"),
		),
		check_union_array_like_factory.NewReturnStatement(
			check_union_array_like_factory.NewCallExpression(
				check_union_array_like_factory.NewElementAccessExpression(
					check_union_array_like_factory.NewNonNullExpression(
						check_union_array_like_factory.NewIdentifier("passed[0]"),
						shimast.NodeFlagsNone,
					),
					nil,
					nativefactories.ExpressionFactory.Number(1),
					shimast.NodeFlagsNone,
				),
				nil,
				nil,
				check_union_array_like_factory.NewNodeList([]*shimast.Node{array}),
				shimast.NodeFlagsNone,
			),
		),
		check_union_array_like_factory.NewIfStatement(
			check_union_array_like_factory.NewBinaryExpression(
				nil,
				nativefactories.ExpressionFactory.Number(1),
				nil,
				check_union_array_like_factory.NewToken(shimast.KindLessThanToken),
				check_union_array_like_factory.NewIdentifier("passed.length"),
			),
			iterate(
				"pred",
				check_union_array_like_factory.NewIdentifier("passed"),
				check_union_array_like_factory.NewIfStatement(
					check_union_array_like_factory.NewCallExpression(
						nativefactories.IdentifierFactory.Access(array, "every"),
						nil,
						nil,
						check_union_array_like_factory.NewNodeList([]*shimast.Node{
							check_union_array_like_factory.NewArrowFunction(
								nil,
								nil,
								check_union_array_like_factory.NewNodeList([]*shimast.Node{
									nativefactories.IdentifierFactory.Parameter("value", nativefactories.TypeFactory.Keyword("any"), nil),
								}),
								nil,
								nil,
								check_union_array_like_factory.NewToken(shimast.KindEqualsGreaterThanToken),
								check_union_array_like_factory.NewBinaryExpression(
									nil,
									success,
									nil,
									check_union_array_like_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
									check_union_array_like_factory.NewCallExpression(
										check_union_array_like_factory.NewIdentifier("pred[0]"),
										nil,
										nil,
										check_union_array_like_factory.NewNodeList([]*shimast.Node{
											check_union_array_like_factory.NewIdentifier("value"),
										}),
										shimast.NodeFlagsNone,
									),
								),
							),
						}),
						shimast.NodeFlagsNone,
					),
					check_union_array_like_factory.NewReturnStatement(
						check_union_array_like_factory.NewCallExpression(
							check_union_array_like_factory.NewIdentifier("pred[1]"),
							nil,
							nil,
							check_union_array_like_factory.NewNodeList([]*shimast.Node{
								check_union_array_like_factory.NewIdentifier("array"),
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

func check_union_array_like_return_or_statement(node *shimast.Node) *shimast.Node {
	if node == nil || node.Kind == shimast.KindReturnStatement {
		return node
	}
	return check_union_array_like_factory.NewReturnStatement(node)
}

func check_union_array_like_explore(base any, tracable bool, postfix string) any {
	if value, ok := base.(map[string]any); ok {
		next := map[string]any{}
		for k, v := range value {
			next[k] = v
		}
		next["tracable"] = tracable
		next["postfix"] = postfix
		return next
	}
	return base
}

func check_union_array_like_explore_trace(base any, tracable bool) any {
	if value, ok := base.(map[string]any); ok {
		next := map[string]any{}
		for k, v := range value {
			next[k] = v
		}
		next["tracable"] = tracable
		return next
	}
	return base
}

var check_union_array_like_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
