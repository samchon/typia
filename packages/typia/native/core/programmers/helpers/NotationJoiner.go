package helpers

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type notationJoinerNamespace struct{}

var NotationJoiner = notationJoinerNamespace{}

type NotationJoiner_ObjectProps struct {
	Rename  func(str string) string
	Input   *shimast.Expression
	Entries []IExpressionEntry
}

type NotationJoiner_TupleProps struct {
	Elements []*shimast.Expression
	Rest     *shimast.Expression
}

type NotationJoiner_ArrayProps struct {
	Input *shimast.Expression
	Arrow *shimast.Expression
}

var notationJoiner_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (notationJoinerNamespace) Object(props NotationJoiner_ObjectProps) *shimast.Node {
	if len(props.Entries) == 0 {
		return notationJoiner_factory.NewIdentifier("{}")
	}

	regular := []IExpressionEntry{}
	dynamic := []IExpressionEntry{}
	for _, entry := range props.Entries {
		if entry.Key.IsSoleLiteral() {
			regular = append(regular, entry)
		} else {
			dynamic = append(dynamic, entry)
		}
	}

	properties := make([]*shimast.Node, 0, len(regular))
	for _, entry := range regular {
		str := props.Rename(*entry.Key.GetSoleLiteral())
		properties = append(properties, notationJoiner_factory.NewPropertyAssignment(
			nil,
			nativefactories.IdentifierFactory.Identifier(str),
			nil,
			nil,
			entry.Expression,
		))
	}
	literal := notationJoiner_factory.NewObjectLiteralExpression(
		notationJoiner_factory.NewNodeList(properties),
		true,
	)
	if len(dynamic) == 0 {
		return literal
	}

	key := notationJoiner_factory.NewIdentifier("key")
	output := notationJoiner_factory.NewIdentifier("output")
	statements := []*shimast.Node{}
	if len(regular) != 0 {
		statements = append(statements, notationJoiner_regular_skip(regular))
	}
	for _, entry := range dynamic {
		statements = append(statements, notationJoiner_factory.NewIfStatement(
			notationJoiner_factory.NewCallExpression(
				notationJoiner_factory.NewIdentifier("RegExp(/"+cloneJoiner_metadata_to_pattern(struct {
					top      bool
					metadata *nativemetadata.MetadataSchema
				}{top: true, metadata: entry.Key})+"/).test"),
				nil,
				nil,
				notationJoiner_factory.NewNodeList([]*shimast.Node{key}),
				shimast.NodeFlagsNone,
			),
			notationJoiner_factory.NewBlock(
				notationJoiner_factory.NewNodeList([]*shimast.Node{
					notationJoiner_factory.NewExpressionStatement(
						notationJoiner_factory.NewBinaryExpression(
							nil,
							notationJoiner_factory.NewElementAccessExpression(output, nil, key, shimast.NodeFlagsNone),
							nil,
							notationJoiner_factory.NewToken(shimast.KindEqualsToken),
							entry.Expression,
						),
					),
					notationJoiner_factory.NewContinueStatement(nil),
				}),
				false,
			),
			nil,
		))
	}

	return notationJoiner_factory.NewBlock(
		notationJoiner_factory.NewNodeList([]*shimast.Node{
			nativefactories.StatementFactory.Constant(nativefactories.StatementFactory_ConstantProps{
				Name: "output",
				Value: notationJoiner_factory.NewAsExpression(
					literal,
					nativefactories.TypeFactory.Keyword("any"),
				),
			}),
			notationJoiner_factory.NewForInOrOfStatement(
				shimast.KindForOfStatement,
				nil,
				nativefactories.StatementFactory.Entry(nativefactories.StatementFactory_EntryProps{Key: "key", Value: "value"}),
				notationJoiner_factory.NewCallExpression(
					notationJoiner_factory.NewIdentifier("Object.entries"),
					nil,
					nil,
					notationJoiner_factory.NewNodeList([]*shimast.Node{props.Input}),
					shimast.NodeFlagsNone,
				),
				notationJoiner_factory.NewBlock(notationJoiner_factory.NewNodeList(statements), false),
			),
			notationJoiner_factory.NewReturnStatement(output),
		}),
		false,
	)
}

func (notationJoinerNamespace) Tuple(props NotationJoiner_TupleProps) *shimast.Node {
	elements := make([]*shimast.Node, 0, len(props.Elements)+1)
	for _, elem := range props.Elements {
		elements = append(elements, elem)
	}
	if props.Rest != nil {
		elements = append(elements, notationJoiner_factory.NewSpreadElement(props.Rest))
	}
	return notationJoiner_factory.NewAsExpression(
		notationJoiner_factory.NewArrayLiteralExpression(
			notationJoiner_factory.NewNodeList(elements),
			true,
		),
		nativefactories.TypeFactory.Keyword("any"),
	)
}

func (notationJoinerNamespace) Array(props NotationJoiner_ArrayProps) *shimast.Node {
	return notationJoiner_factory.NewCallExpression(
		nativefactories.IdentifierFactory.Access(props.Input, "map"),
		nil,
		nil,
		notationJoiner_factory.NewNodeList([]*shimast.Node{props.Arrow}),
		shimast.NodeFlagsNone,
	)
}

func notationJoiner_regular_skip(regular []IExpressionEntry) *shimast.Node {
	elements := make([]*shimast.Node, 0, len(regular))
	for _, entry := range regular {
		elements = append(elements, notationJoiner_factory.NewStringLiteral(*entry.Key.GetSoleLiteral(), shimast.TokenFlagsNone))
	}
	return notationJoiner_factory.NewIfStatement(
		notationJoiner_factory.NewCallExpression(
			nativefactories.IdentifierFactory.Access(
				notationJoiner_factory.NewArrayLiteralExpression(notationJoiner_factory.NewNodeList(elements), false),
				"some",
			),
			nil,
			nil,
			notationJoiner_factory.NewNodeList([]*shimast.Node{
				notationJoiner_factory.NewArrowFunction(
					nil,
					nil,
					notationJoiner_factory.NewNodeList([]*shimast.Node{
						nativefactories.IdentifierFactory.Parameter("regular", nil, nil),
					}),
					nil,
					nil,
					notationJoiner_factory.NewToken(shimast.KindEqualsGreaterThanToken),
					notationJoiner_factory.NewBinaryExpression(
						nil,
						notationJoiner_factory.NewIdentifier("regular"),
						nil,
						notationJoiner_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
						notationJoiner_factory.NewIdentifier("key"),
					),
				),
			}),
			shimast.NodeFlagsNone,
		),
		notationJoiner_factory.NewContinueStatement(nil),
		nil,
	)
}
