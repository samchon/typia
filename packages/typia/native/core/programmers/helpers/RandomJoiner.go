package helpers

import (
  "fmt"
  "sort"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
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
  Emit       *shimprinter.EmitContext
}

type RandomJoiner_TupleProps struct {
  Decode   RandomJoiner_Decoder
  Elements []*nativemetadata.MetadataSchema
  Emit     *shimprinter.EmitContext
}

type RandomJoiner_ObjectProps struct {
  Decode                  RandomJoiner_Decoder
  Object                  *nativemetadata.MetadataObjectType
  OptionalProperty        func(*nativemetadata.MetadataSchema) bool
  StrictOptionalUndefined func(*nativemetadata.MetadataSchema) bool
  Optional                func() *shimast.Node
  Emit                    *shimprinter.EmitContext
}

type randomJoiner_DynamicPropertyProps struct {
  Decode   RandomJoiner_Decoder
  Property *nativemetadata.MetadataProperty
  Emit     *shimprinter.EmitContext
}

var randomJoiner_factory = shimast.NewNodeFactory(shimast.NodeFactoryHooks{})

func (randomJoinerNamespace) Array(props RandomJoiner_ArrayProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(randomJoiner_factory, props.Emit)
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
      properties = append(properties, f.NewPropertyAssignment(
        nil,
        nativefactories.IdentifierFactory.Identifier(key, props.Emit),
        nil,
        nil,
        nativefactories.LiteralFactory.Write(props.Schema[key], props.Emit),
      ))
    }
  } else {
    properties = append(properties, f.NewSpreadAssignment(f.NewIdentifier("_schema")))
  }
  if RandomJoiner.IsRecursiveArray(props.Array) {
    properties = append(properties, f.NewPropertyAssignment(
      nil,
      f.NewIdentifier("recursive"),
      nil,
      nil,
      f.NewKeywordExpression(shimast.KindTrueKeyword),
    ))
  }
  properties = append(properties, f.NewPropertyAssignment(
    nil,
    f.NewIdentifier("element"),
    nil,
    nil,
    f.NewArrowFunction(
      nil,
      nil,
      f.NewNodeList(nil),
      nil,
      nil,
      f.NewToken(shimast.KindEqualsGreaterThanToken),
      props.Decode(props.Array.Value),
    ),
  ))
  call := f.NewCallExpression(
    props.Expression,
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      f.NewObjectLiteralExpression(
        f.NewNodeList(properties),
        true,
      ),
    }),
    shimast.NodeFlagsNone,
  )
  if !props.Recursive {
    return call
  }
  return nativefactories.ExpressionFactory.Conditional(
    f.NewBinaryExpression(
      nil,
      nativefactories.ExpressionFactory.Number(5, props.Emit),
      nil,
      f.NewToken(shimast.KindGreaterThanEqualsToken),
      f.NewIdentifier("_depth"),
    ),
    call,
    f.NewArrayLiteralExpression(f.NewNodeList(nil), false),
    props.Emit,
  )
}

func (randomJoinerNamespace) IsRecursiveArray(array *nativemetadata.MetadataArrayType) bool {
  return randomJoiner_is_recursive_array_type(
    array,
    map[*nativemetadata.MetadataSchema]bool{},
  )
}

func randomJoiner_is_recursive_array_type(
  array *nativemetadata.MetadataArrayType,
  visited map[*nativemetadata.MetadataSchema]bool,
) bool {
  if array == nil {
    return false
  }
  return array.Recursive || randomJoiner_is_recursive_metadata(array.Value, visited)
}

func randomJoiner_is_recursive_tuple_type(
  tuple *nativemetadata.MetadataTupleType,
  visited map[*nativemetadata.MetadataSchema]bool,
) bool {
  if tuple == nil {
    return false
  } else if tuple.Recursive {
    return true
  }
  for _, elem := range tuple.Elements {
    if randomJoiner_is_recursive_metadata(elem, visited) {
      return true
    }
  }
  return false
}

func randomJoiner_is_recursive_metadata(
  meta *nativemetadata.MetadataSchema,
  visited map[*nativemetadata.MetadataSchema]bool,
) bool {
  if meta == nil {
    return false
  } else if visited[meta] {
    return false
  }
  visited[meta] = true
  if meta.Escaped != nil &&
    (randomJoiner_is_recursive_metadata(meta.Escaped.Original, visited) ||
      randomJoiner_is_recursive_metadata(meta.Escaped.Returns, visited)) {
    return true
  } else if randomJoiner_is_recursive_metadata(meta.Rest, visited) {
    return true
  }
  for _, alias := range meta.Aliases {
    if alias.Type != nil &&
      (alias.Type.Recursive ||
        randomJoiner_is_recursive_metadata(alias.Type.Value, visited)) {
      return true
    }
  }
  for _, array := range meta.Arrays {
    if randomJoiner_is_recursive_array_type(array.Type, visited) {
      return true
    }
  }
  for _, tuple := range meta.Tuples {
    if randomJoiner_is_recursive_tuple_type(tuple.Type, visited) {
      return true
    }
  }
  for _, object := range meta.Objects {
    if object.Type != nil && object.Type.Recursive {
      return true
    }
  }
  for _, set := range meta.Sets {
    if randomJoiner_is_recursive_metadata(set.Value, visited) {
      return true
    }
  }
  for _, entry := range meta.Maps {
    if randomJoiner_is_recursive_metadata(entry.Key, visited) ||
      randomJoiner_is_recursive_metadata(entry.Value, visited) {
      return true
    }
  }
  return false
}

func (randomJoinerNamespace) Tuple(props RandomJoiner_TupleProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(randomJoiner_factory, props.Emit)
  elements := make([]*shimast.Node, 0, len(props.Elements))
  for _, elem := range props.Elements {
    target := elem
    if elem.Rest != nil {
      target = elem.Rest
    }
    elements = append(elements, props.Decode(target))
  }
  return f.NewArrayLiteralExpression(
    f.NewNodeList(elements),
    true,
  )
}

func (randomJoinerNamespace) Object(props RandomJoiner_ObjectProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(randomJoiner_factory, props.Emit)
  if len(props.Object.Properties) == 0 {
    return nativefactories.LiteralFactory.Write(map[string]any{}, props.Emit)
  }

  properties := []*shimast.Node{}
  for _, property := range props.Object.Properties {
    if !property.Key.IsSoleLiteral() {
      continue
    }
    str := property.Key.GetSoleLiteral()
    metadata := property.Value
    optionalProperty := props.OptionalProperty != nil && props.OptionalProperty(property.Value)
    strictOptionalUndefined := props.StrictOptionalUndefined != nil && props.StrictOptionalUndefined(property.Value)
    if strictOptionalUndefined {
      metadata = property.Value.ShallowClone()
      metadata.Optional = false
    }
    propertyAssignment := f.NewPropertyAssignment(
      nil,
      nativefactories.IdentifierFactory.Identifier(*str, props.Emit),
      nil,
      nil,
      props.Decode(metadata),
    )
    if optionalProperty {
      condition := f.NewKeywordExpression(shimast.KindTrueKeyword)
      if props.Optional != nil {
        condition = props.Optional()
      }
      properties = append(properties, f.NewSpreadAssignment(
        f.NewParenthesizedExpression(nativefactories.ExpressionFactory.Conditional(
          condition,
          f.NewObjectLiteralExpression(f.NewNodeList([]*shimast.Node{propertyAssignment}), false),
          f.NewObjectLiteralExpression(f.NewNodeList(nil), false),
          props.Emit,
        )),
      ))
    } else {
      properties = append(properties, propertyAssignment)
    }
  }
  for _, property := range props.Object.Properties {
    if property.Key.IsSoleLiteral() {
      continue
    }
    properties = append(properties, f.NewSpreadAssignment(randomJoiner_dynamicProperty(randomJoiner_DynamicPropertyProps{
      Decode:   props.Decode,
      Property: property,
      Emit:     props.Emit,
    })))
  }
  return f.NewObjectLiteralExpression(
    f.NewNodeList(properties),
    true,
  )
}

func randomJoiner_dynamicProperty(props randomJoiner_DynamicPropertyProps) *shimast.Node {
  f := nativecontext.EmitFactoryOf(randomJoiner_factory, props.Emit)
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
  return f.NewCallExpression(
    nativefactories.IdentifierFactory.Access(nil, f.NewIdentifier("Object"), "fromEntries"),
    nil,
    nil,
    f.NewNodeList([]*shimast.Node{
      props.Decode(metadata),
    }),
    shimast.NodeFlagsNone,
  )
}
