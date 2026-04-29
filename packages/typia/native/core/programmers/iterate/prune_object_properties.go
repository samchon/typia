package iterate

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func Prune_object_properties(object *nativemetadata.MetadataObjectType) *shimast.Node {
	input := prune_object_properties_factory.NewIdentifier("input")
	key := prune_object_properties_factory.NewIdentifier("key")

	conditions := []*shimast.Node{}
	for _, prop := range object.Properties {
		name := prop.Key.GetSoleLiteral()
		if name != nil {
			conditions = append(conditions, prune_object_properties_factory.NewBinaryExpression(
				nil,
				prune_object_properties_factory.NewStringLiteral(*name, shimast.TokenFlagsNone),
				nil,
				prune_object_properties_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
				prune_object_properties_factory.NewIdentifier("key"),
			))
			continue
		}
		conditions = append(conditions, prune_object_properties_factory.NewCallExpression(
			prune_object_properties_factory.NewIdentifier("RegExp(/"+metadata_to_pattern(struct {
				top      bool
				metadata *nativemetadata.MetadataSchema
			}{
				top:      true,
				metadata: prop.Key,
			})+"/).test"),
			nil,
			nil,
			prune_object_properties_factory.NewNodeList([]*shimast.Node{key}),
			shimast.NodeFlagsNone,
		))
	}

	statements := []*shimast.Node{}
	if len(conditions) != 0 {
		statements = append(statements, prune_object_properties_factory.NewIfStatement(
			prune_object_properties_reduce(conditions, shimast.KindBarBarToken),
			prune_object_properties_factory.NewContinueStatement(nil),
			nil,
		))
	}
	statements = append(statements, prune_object_properties_factory.NewExpressionStatement(
		prune_object_properties_factory.NewDeleteExpression(
			prune_object_properties_factory.NewElementAccessExpression(input, nil, key, shimast.NodeFlagsNone),
		),
	))

	statement := statements[0]
	if len(statements) != 1 {
		statement = prune_object_properties_factory.NewBlock(
			prune_object_properties_factory.NewNodeList(statements),
			true,
		)
	}

	return prune_object_properties_factory.NewForInOrOfStatement(
		shimast.KindForOfStatement,
		nil,
		prune_object_properties_factory.NewVariableDeclarationList(
			prune_object_properties_factory.NewNodeList([]*shimast.Node{
				prune_object_properties_factory.NewVariableDeclaration(
					prune_object_properties_factory.NewIdentifier("key"),
					nil,
					nil,
					nil,
				),
			}),
			shimast.NodeFlagsConst,
		),
		prune_object_properties_factory.NewCallExpression(
			prune_object_properties_factory.NewIdentifier("Object.keys"),
			nil,
			nil,
			prune_object_properties_factory.NewNodeList([]*shimast.Node{input}),
			shimast.NodeFlagsNone,
		),
		statement,
	)
}

func prune_object_properties_reduce(expressions []*shimast.Node, operator shimast.Kind) *shimast.Node {
	output := expressions[0]
	for _, next := range expressions[1:] {
		output = prune_object_properties_factory.NewBinaryExpression(
			nil,
			output,
			nil,
			prune_object_properties_factory.NewToken(operator),
			next,
		)
	}
	return output
}

var prune_object_properties_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
