package iterate

import (
	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativehelpers "github.com/samchon/typia/packages/typia/native/core/programmers/helpers"
	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

func Stringify_dynamic_properties(dynamic []nativehelpers.IExpressionEntry, regular []string) *shimast.Node {
	statements := []*shimast.Node{
		stringify_dynamic_properties_factory.NewIfStatement(
			stringify_dynamic_properties_factory.NewBinaryExpression(
				nil,
				stringify_dynamic_properties_factory.NewIdentifier("undefined"),
				nil,
				stringify_dynamic_properties_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
				stringify_dynamic_properties_factory.NewIdentifier("value"),
			),
			stringify_dynamic_properties_factory.NewReturnStatement(
				stringify_dynamic_properties_factory.NewStringLiteral("", shimast.TokenFlagsNone),
			),
			nil,
		),
	}

	output := func() *shimast.Node {
		mapped := stringify_dynamic_properties_factory.NewCallExpression(
			nativefactories.IdentifierFactory.Access(
				stringify_dynamic_properties_factory.NewCallExpression(
					stringify_dynamic_properties_factory.NewIdentifier("Object.entries"),
					nil,
					nil,
					stringify_dynamic_properties_factory.NewNodeList([]*shimast.Node{
						stringify_dynamic_properties_factory.NewIdentifier("input"),
					}),
					shimast.NodeFlagsNone,
				),
				"map",
			),
			nil,
			nil,
			stringify_dynamic_properties_factory.NewNodeList([]*shimast.Node{
				stringify_dynamic_properties_factory.NewArrowFunction(
					nil,
					nil,
					stringify_dynamic_properties_factory.NewNodeList([]*shimast.Node{
						nativefactories.IdentifierFactory.Parameter(
							stringify_dynamic_properties_binding_pattern(),
							stringify_dynamic_properties_factory.NewTypeReferenceNode(
								stringify_dynamic_properties_factory.NewIdentifier("[string, any]"),
								nil,
							),
							nil,
						),
					}),
					nil,
					nil,
					stringify_dynamic_properties_factory.NewToken(shimast.KindEqualsGreaterThanToken),
					stringify_dynamic_properties_factory.NewBlock(
						stringify_dynamic_properties_factory.NewNodeList(statements),
						false,
					),
				),
			}),
			shimast.NodeFlagsNone,
		)
		filtered := stringify_dynamic_properties_factory.NewCallExpression(
			nativefactories.IdentifierFactory.Access(mapped, "filter"),
			nil,
			nil,
			stringify_dynamic_properties_factory.NewNodeList([]*shimast.Node{
				stringify_dynamic_properties_factory.NewArrowFunction(
					nil,
					nil,
					stringify_dynamic_properties_factory.NewNodeList([]*shimast.Node{
						nativefactories.IdentifierFactory.Parameter("str", nil, nil),
					}),
					nil,
					nil,
					stringify_dynamic_properties_factory.NewToken(shimast.KindEqualsGreaterThanToken),
					stringify_dynamic_properties_factory.NewBinaryExpression(
						nil,
						stringify_dynamic_properties_factory.NewStringLiteral("", shimast.TokenFlagsNone),
						nil,
						stringify_dynamic_properties_factory.NewToken(shimast.KindExclamationEqualsEqualsToken),
						stringify_dynamic_properties_factory.NewIdentifier("str"),
					),
				),
			}),
			shimast.NodeFlagsNone,
		)
		return stringify_dynamic_properties_factory.NewCallExpression(
			nativefactories.IdentifierFactory.Access(filtered, "join"),
			nil,
			nil,
			stringify_dynamic_properties_factory.NewNodeList([]*shimast.Node{
				stringify_dynamic_properties_factory.NewStringLiteral(",", shimast.TokenFlagsNone),
			}),
			shimast.NodeFlagsNone,
		)
	}

	if len(regular) != 0 {
		elements := make([]*shimast.Node, 0, len(regular))
		for _, key := range regular {
			elements = append(elements, stringify_dynamic_properties_factory.NewStringLiteral(key, shimast.TokenFlagsNone))
		}
		statements = append(statements, stringify_dynamic_properties_factory.NewIfStatement(
			stringify_dynamic_properties_factory.NewCallExpression(
				nativefactories.IdentifierFactory.Access(
					stringify_dynamic_properties_factory.NewArrayLiteralExpression(
						stringify_dynamic_properties_factory.NewNodeList(elements),
						false,
					),
					"some",
				),
				nil,
				nil,
				stringify_dynamic_properties_factory.NewNodeList([]*shimast.Node{
					stringify_dynamic_properties_factory.NewArrowFunction(
						nil,
						nil,
						stringify_dynamic_properties_factory.NewNodeList([]*shimast.Node{
							nativefactories.IdentifierFactory.Parameter("regular", nil, nil),
						}),
						nil,
						nil,
						stringify_dynamic_properties_factory.NewToken(shimast.KindEqualsGreaterThanToken),
						stringify_dynamic_properties_factory.NewBinaryExpression(
							nil,
							stringify_dynamic_properties_factory.NewIdentifier("regular"),
							nil,
							stringify_dynamic_properties_factory.NewToken(shimast.KindEqualsEqualsEqualsToken),
							stringify_dynamic_properties_factory.NewIdentifier("key"),
						),
					),
				}),
				shimast.NodeFlagsNone,
			),
			stringify_dynamic_properties_factory.NewReturnStatement(
				stringify_dynamic_properties_factory.NewStringLiteral("", shimast.TokenFlagsNone),
			),
			nil,
		))
	}

	simple := len(dynamic) == 1 &&
		dynamic[0].Key.Size() == 1 &&
		len(dynamic[0].Key.Atomics) != 0 &&
		dynamic[0].Key.Atomics[0].Type == "string"
	if simple {
		statements = append(statements, stringify_dynamic_properties_stringify(dynamic[0]))
		return output()
	}

	for _, entry := range dynamic {
		statements = append(statements, stringify_dynamic_properties_factory.NewIfStatement(
			stringify_dynamic_properties_factory.NewCallExpression(
				stringify_dynamic_properties_factory.NewIdentifier("RegExp(/"+metadata_to_pattern(struct {
					top      bool
					metadata *nativemetadata.MetadataSchema
				}{
					top:      true,
					metadata: entry.Key,
				})+"/).test"),
				nil,
				nil,
				stringify_dynamic_properties_factory.NewNodeList([]*shimast.Node{
					stringify_dynamic_properties_factory.NewIdentifier("key"),
				}),
				shimast.NodeFlagsNone,
			),
			stringify_dynamic_properties_stringify(entry),
			nil,
		))
	}
	statements = append(statements, stringify_dynamic_properties_factory.NewReturnStatement(
		stringify_dynamic_properties_factory.NewStringLiteral("", shimast.TokenFlagsNone),
	))
	return output()
}

func stringify_dynamic_properties_stringify(entry nativehelpers.IExpressionEntry) *shimast.Node {
	return stringify_dynamic_properties_factory.NewReturnStatement(
		nativefactories.TemplateFactory.Generate([]*shimast.Node{
			stringify_dynamic_properties_factory.NewCallExpression(
				stringify_dynamic_properties_factory.NewIdentifier("JSON.stringify"),
				nil,
				stringify_dynamic_properties_factory.NewNodeList(nil),
				stringify_dynamic_properties_factory.NewNodeList([]*shimast.Node{
					stringify_dynamic_properties_factory.NewIdentifier("key"),
				}),
				shimast.NodeFlagsNone,
			),
			stringify_dynamic_properties_factory.NewStringLiteral(":", shimast.TokenFlagsNone),
			entry.Expression,
		}),
	)
}

func stringify_dynamic_properties_binding_pattern() *shimast.Node {
	return stringify_dynamic_properties_factory.NewBindingPattern(
		shimast.KindArrayBindingPattern,
		stringify_dynamic_properties_factory.NewNodeList([]*shimast.Node{
			stringify_dynamic_properties_factory.NewBindingElement(nil, nil, stringify_dynamic_properties_factory.NewIdentifier("key"), nil),
			stringify_dynamic_properties_factory.NewBindingElement(nil, nil, stringify_dynamic_properties_factory.NewIdentifier("value"), nil),
		}),
	)
}

var stringify_dynamic_properties_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
