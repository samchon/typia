package helpers

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type pruneJoinerNamespace struct{}

var PruneJoiner = pruneJoinerNamespace{}

type PruneJoiner_ObjectProps struct {
	Input   *shimast.Expression
	Entries []IExpressionEntry
	Object  *nativemetadata.MetadataObjectType
}

type PruneJoiner_ArrayProps struct {
	Input *shimast.Expression
	Arrow *shimast.Expression
}

type PruneJoiner_TupleProps struct {
	Elements []*shimast.ConciseBody
	Rest     *shimast.ConciseBody
}

var pruneJoiner_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (pruneJoinerNamespace) Object(props PruneJoiner_ObjectProps) *shimast.Node {
	regular := []IExpressionEntry{}
	dynamic := []IExpressionEntry{}
	for _, entry := range props.Entries {
		if entry.Key.IsSoleLiteral() {
			regular = append(regular, entry)
		} else {
			dynamic = append(dynamic, entry)
		}
	}

	statements := []*shimast.Node{}
	for _, entry := range regular {
		statements = append(statements, pruneJoiner_statements(entry.Expression)...)
	}
	if len(dynamic) != 0 {
		statements = append(statements, pruneJoiner_factory.NewExpressionStatement(
			pruneJoiner_iterate_dynamic_properties(pruneJoiner_iterate_dynamic_propertiesProps{
				Regular: regular,
				Dynamic: dynamic,
				Input:   props.Input,
			}),
		))
	}
	statements = append(statements, pruneJoiner_prune_object_properties(props.Object))
	return pruneJoiner_factory.NewBlock(
		pruneJoiner_factory.NewNodeList(statements),
		true,
	)
}

func (pruneJoinerNamespace) Array(props PruneJoiner_ArrayProps) *shimast.Node {
	return pruneJoiner_factory.NewCallExpression(
		nativefactories.IdentifierFactory.Access(props.Input, "forEach"),
		nil,
		nil,
		pruneJoiner_factory.NewNodeList([]*shimast.Node{props.Arrow}),
		shimast.NodeFlagsNone,
	)
}

func (pruneJoinerNamespace) Tuple(props PruneJoiner_TupleProps) *shimast.Node {
	entire := make([]*shimast.Node, 0, len(props.Elements)+1)
	for _, elem := range props.Elements {
		entire = append(entire, elem)
	}
	if props.Rest != nil {
		entire = append(entire, props.Rest)
	}
	statements := []*shimast.Node{}
	for _, elem := range entire {
		statements = append(statements, pruneJoiner_statements(elem)...)
	}
	return pruneJoiner_factory.NewBlock(
		pruneJoiner_factory.NewNodeList(statements),
		true,
	)
}

func pruneJoiner_statements(node *shimast.Node) []*shimast.Node {
	if node != nil && node.Kind == shimast.KindBlock {
		return append([]*shimast.Node{}, node.Statements()...)
	}
	return []*shimast.Node{pruneJoiner_factory.NewExpressionStatement(node)}
}

type pruneJoiner_iterate_dynamic_propertiesProps struct {
	Regular []IExpressionEntry
	Dynamic []IExpressionEntry
	Input   *shimast.Expression
}

func pruneJoiner_iterate_dynamic_properties(props pruneJoiner_iterate_dynamic_propertiesProps) *shimast.Node {
	statements := []*shimast.Node{
		pruneJoiner_factory.NewIfStatement(
			pruneJoiner_factory.NewBinaryExpression(
				nil,
				pruneJoiner_factory.NewIdentifier("undefined"),
				nil,
				pruneJoiner_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
				pruneJoiner_factory.NewIdentifier("value"),
			),
			pruneJoiner_factory.NewReturnStatement(nil),
			nil,
		),
	}
	for _, entry := range props.Regular {
		key := entry.Key.GetSoleLiteral()
		statements = append(statements, pruneJoiner_factory.NewIfStatement(
			pruneJoiner_factory.NewBinaryExpression(
				nil,
				pruneJoiner_factory.NewStringLiteral(*key, shimast.TokenFlagsNone),
				nil,
				pruneJoiner_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
				pruneJoiner_factory.NewIdentifier("key"),
			),
			pruneJoiner_factory.NewReturnStatement(nil),
			nil,
		))
	}
	for _, dynamic := range props.Dynamic {
		body := dynamic.Expression
		if body.Kind != shimast.KindBlock {
			body = pruneJoiner_factory.NewBlock(
				pruneJoiner_factory.NewNodeList([]*shimast.Node{
					pruneJoiner_factory.NewExpressionStatement(body),
				}),
				false,
			)
		}
		statements = append(statements, pruneJoiner_factory.NewIfStatement(
			pruneJoiner_factory.NewCallExpression(
				pruneJoiner_factory.NewIdentifier("RegExp(/"+cloneJoiner_metadata_to_pattern(struct {
					top      bool
					metadata *nativemetadata.MetadataSchema
				}{top: true, metadata: dynamic.Key})+"/).test"),
				nil,
				nil,
				pruneJoiner_factory.NewNodeList([]*shimast.Node{
					pruneJoiner_factory.NewIdentifier("key"),
				}),
				shimast.NodeFlagsNone,
			),
			body,
			nil,
		))
	}
	return pruneJoiner_factory.NewCallExpression(
		nativefactories.IdentifierFactory.Access(
			pruneJoiner_factory.NewCallExpression(
				pruneJoiner_factory.NewIdentifier("Object.entries"),
				nil,
				nil,
				pruneJoiner_factory.NewNodeList([]*shimast.Node{props.Input}),
				shimast.NodeFlagsNone,
			),
			"forEach",
		),
		nil,
		nil,
		pruneJoiner_factory.NewNodeList([]*shimast.Node{
			pruneJoiner_factory.NewArrowFunction(
				nil,
				nil,
				pruneJoiner_factory.NewNodeList([]*shimast.Node{
					nativefactories.IdentifierFactory.Parameter(pruneJoiner_binding_pattern(), nil, nil),
				}),
				nil,
				nil,
				pruneJoiner_factory.NewToken(shimast.KindEqualsGreaterThanToken),
				pruneJoiner_factory.NewBlock(pruneJoiner_factory.NewNodeList(statements), true),
			),
		}),
		shimast.NodeFlagsNone,
	)
}

func pruneJoiner_binding_pattern() *shimast.Node {
	return pruneJoiner_factory.NewBindingPattern(
		shimast.KindArrayBindingPattern,
		pruneJoiner_factory.NewNodeList([]*shimast.Node{
			pruneJoiner_factory.NewBindingElement(nil, nil, pruneJoiner_factory.NewIdentifier("key"), nil),
			pruneJoiner_factory.NewBindingElement(nil, nil, pruneJoiner_factory.NewIdentifier("value"), nil),
		}),
	)
}

func pruneJoiner_prune_object_properties(object *nativemetadata.MetadataObjectType) *shimast.Node {
	input := pruneJoiner_factory.NewIdentifier("input")
	key := pruneJoiner_factory.NewIdentifier("key")
	conditions := []*shimast.Node{}
	for _, prop := range object.Properties {
		name := prop.Key.GetSoleLiteral()
		if name != nil {
			conditions = append(conditions, pruneJoiner_factory.NewBinaryExpression(
				nil,
				pruneJoiner_factory.NewStringLiteral(*name, shimast.TokenFlagsNone),
				nil,
				pruneJoiner_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
				key,
			))
		} else {
			conditions = append(conditions, pruneJoiner_factory.NewCallExpression(
				pruneJoiner_factory.NewIdentifier("RegExp(/"+cloneJoiner_metadata_to_pattern(struct {
					top      bool
					metadata *nativemetadata.MetadataSchema
				}{top: true, metadata: prop.Key})+"/).test"),
				nil,
				nil,
				pruneJoiner_factory.NewNodeList([]*shimast.Node{key}),
				shimast.NodeFlagsNone,
			))
		}
	}
	statements := []*shimast.Node{}
	if len(conditions) != 0 {
		statements = append(statements, pruneJoiner_factory.NewIfStatement(
			pruneJoiner_reduce(conditions, shimast.KindBarBarToken),
			pruneJoiner_factory.NewContinueStatement(nil),
			nil,
		))
	}
	statements = append(statements, pruneJoiner_factory.NewExpressionStatement(
		pruneJoiner_factory.NewDeleteExpression(
			pruneJoiner_factory.NewElementAccessExpression(input, nil, key, shimast.NodeFlagsNone),
		),
	))
	statement := statements[0]
	if len(statements) != 1 {
		statement = pruneJoiner_factory.NewBlock(pruneJoiner_factory.NewNodeList(statements), true)
	}
	return pruneJoiner_factory.NewForInOrOfStatement(
		shimast.KindForOfStatement,
		nil,
		pruneJoiner_factory.NewVariableDeclarationList(
			pruneJoiner_factory.NewNodeList([]*shimast.Node{
				pruneJoiner_factory.NewVariableDeclaration(key, nil, nil, nil),
			}),
			shimast.NodeFlagsConst,
		),
		pruneJoiner_factory.NewCallExpression(
			pruneJoiner_factory.NewIdentifier("Object.keys"),
			nil,
			nil,
			pruneJoiner_factory.NewNodeList([]*shimast.Node{input}),
			shimast.NodeFlagsNone,
		),
		statement,
	)
}

func pruneJoiner_reduce(expressions []*shimast.Node, operator shimast.Kind) *shimast.Node {
	output := expressions[0]
	for _, next := range expressions[1:] {
		output = pruneJoiner_factory.NewBinaryExpression(
			nil,
			output,
			nil,
			pruneJoiner_factory.NewToken(operator),
			next,
		)
	}
	return output
}
