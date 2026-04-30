package helpers

import (
	"fmt"
	"sort"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
	nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

type randomJoinerNamespace struct{}

var RandomJoiner = randomJoinerNamespace{}

type RandomJoiner_Decoder func(metadata *nativemetadata.MetadataSchema) *shimast.Node

type RandomJoiner_ArrayProps struct {
	Decode     RandomJoiner_Decoder
	Recursive  bool
	Expression *shimast.Expression
	Array      *nativemetadata.MetadataArrayType
	Schema     map[string]any
}

type RandomJoiner_TupleProps struct {
	Decode   RandomJoiner_Decoder
	Elements []*nativemetadata.MetadataSchema
}

type RandomJoiner_ObjectProps struct {
	Decode RandomJoiner_Decoder
	Object *nativemetadata.MetadataObjectType
}

type randomJoiner_DynamicPropertyProps struct {
	Decode   RandomJoiner_Decoder
	Property *nativemetadata.MetadataProperty
}

var randomJoiner_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (randomJoinerNamespace) Array(props RandomJoiner_ArrayProps) *shimast.Node {
	properties := []*shimast.Node{}
	if props.Schema != nil {
		keys := make([]string, 0, len(props.Schema))
		for key := range props.Schema {
			if key != "items" {
				keys = append(keys, key)
			}
		}
		sort.Strings(keys)
		for _, key := range keys {
			properties = append(properties, randomJoiner_factory.NewPropertyAssignment(
				nil,
				nativefactories.IdentifierFactory.Identifier(key),
				nil,
				nil,
				nativefactories.LiteralFactory.Write(props.Schema[key]),
			))
		}
	} else {
		properties = append(properties, randomJoiner_factory.NewSpreadAssignment(randomJoiner_factory.NewIdentifier("_schema")))
	}
	properties = append(properties, randomJoiner_factory.NewPropertyAssignment(
		nil,
		randomJoiner_factory.NewIdentifier("element"),
		nil,
		nil,
		randomJoiner_factory.NewArrowFunction(
			nil,
			nil,
			randomJoiner_factory.NewNodeList(nil),
			nil,
			nil,
			randomJoiner_factory.NewToken(shimast.KindEqualsGreaterThanToken),
			props.Decode(props.Array.Value),
		),
	))
	call := randomJoiner_factory.NewCallExpression(
		props.Expression,
		nil,
		nil,
		randomJoiner_factory.NewNodeList([]*shimast.Node{
			randomJoiner_factory.NewObjectLiteralExpression(
				randomJoiner_factory.NewNodeList(properties),
				true,
			),
		}),
		shimast.NodeFlagsNone,
	)
	if !props.Recursive {
		return call
	}
	return randomJoiner_factory.NewConditionalExpression(
		randomJoiner_factory.NewBinaryExpression(
			nil,
			nativefactories.ExpressionFactory.Number(5),
			nil,
			randomJoiner_factory.NewToken(shimast.KindGreaterThanEqualsToken),
			randomJoiner_factory.NewIdentifier("_depth"),
		),
		nil,
		call,
		nil,
		randomJoiner_factory.NewArrayLiteralExpression(randomJoiner_factory.NewNodeList(nil), false),
	)
}

func (randomJoinerNamespace) Tuple(props RandomJoiner_TupleProps) *shimast.Node {
	elements := make([]*shimast.Node, 0, len(props.Elements))
	for _, elem := range props.Elements {
		target := elem
		if elem.Rest != nil {
			target = elem.Rest
		}
		elements = append(elements, props.Decode(target))
	}
	return randomJoiner_factory.NewArrayLiteralExpression(
		randomJoiner_factory.NewNodeList(elements),
		true,
	)
}

func (randomJoinerNamespace) Object(props RandomJoiner_ObjectProps) *shimast.Node {
	if len(props.Object.Properties) == 0 {
		return nativefactories.LiteralFactory.Write(map[string]any{})
	}

	properties := []*shimast.Node{}
	for _, property := range props.Object.Properties {
		if !property.Key.IsSoleLiteral() {
			continue
		}
		str := property.Key.GetSoleLiteral()
		properties = append(properties, randomJoiner_factory.NewPropertyAssignment(
			nil,
			nativefactories.IdentifierFactory.Identifier(*str),
			nil,
			nil,
			props.Decode(property.Value),
		))
	}
	for _, property := range props.Object.Properties {
		if property.Key.IsSoleLiteral() {
			continue
		}
		properties = append(properties, randomJoiner_factory.NewSpreadAssignment(randomJoiner_dynamicProperty(randomJoiner_DynamicPropertyProps{
			Decode:   props.Decode,
			Property: property,
		})))
	}
	return randomJoiner_factory.NewObjectLiteralExpression(
		randomJoiner_factory.NewNodeList(properties),
		true,
	)
}

func randomJoiner_dynamicProperty(props randomJoiner_DynamicPropertyProps) *shimast.Node {
	tuple := nativemetadata.MetadataTuple_create(nativemetadata.MetadataTuple{
		Type: nativemetadata.MetadataTupleType_create(nativemetadata.MetadataTupleType{
			Name:      fmt.Sprintf("[%s, %s]", props.Property.Key.GetName(), props.Property.Value.GetName()),
			Elements:  []*nativemetadata.MetadataSchema{props.Property.Key, props.Property.Value},
			Index:     nil,
			Recursive: false,
			Nullables: []bool{false},
		}),
		Tags: [][]nativemetadata.IMetadataTypeTag{},
	})
	value := nativemetadata.MetadataSchema_initialize()
	value.Tuples = []*nativemetadata.MetadataTuple{tuple}
	array := nativemetadata.MetadataArray_create(nativemetadata.MetadataArray{
		Type: nativemetadata.MetadataArrayType_create(nativemetadata.MetadataArrayType{
			Name:      fmt.Sprintf("Array<[%s, %s]>", props.Property.Key.GetName(), props.Property.Value.GetName()),
			Value:     value,
			Nullables: []bool{false},
			Recursive: false,
			Index:     nil,
		}),
		Tags: [][]nativemetadata.IMetadataTypeTag{{}},
	})
	metadata := nativemetadata.MetadataSchema_initialize()
	metadata.Arrays = []*nativemetadata.MetadataArray{array}
	return randomJoiner_factory.NewCallExpression(
		nativefactories.IdentifierFactory.Access(randomJoiner_factory.NewIdentifier("Object"), "fromEntries"),
		nil,
		nil,
		randomJoiner_factory.NewNodeList([]*shimast.Node{
			props.Decode(metadata),
		}),
		shimast.NodeFlagsNone,
	)
}
