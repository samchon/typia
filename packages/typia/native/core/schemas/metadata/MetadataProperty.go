package metadata

import nativeprotobuf "github.com/samchon/typia/packages/typia/native/core/schemas/protobuf"

// IMetadataSchema_IProperty is the JSON form of an object property: key and
// value schemas, description, JSDoc tags and mutability.
//
// @evidence contracts/common.md#principled-implementation The JSON form lists the data a property needs and leaves out the protobuf assignment.
// @evidence contracts/common.md#clear-and-simple-design Five fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation Each field describes the property projection produced by ToJSON.
type IMetadataSchema_IProperty struct {
  // Key is the serialized literal or dynamic property-key schema.
  Key *IMetadataSchema
  // Value is the serialized property-value schema.
  Value *IMetadataSchema
  // Description is optional documentation attached to this property.
  Description *string
  // JsDocTags contains the property's ordered documentation tags.
  JsDocTags []IJsDocTagInfo
  // Mutability records an optional modifier such as readonly.
  Mutability *string
}

// MetadataProperty is a property of an object type: the key schema, the value
// schema, documentation and mutability. Of_protobuf_ is the protobuf assignment
// that the protobuf factory fills in; it is analysis-only and not serialized.
//
// @evidence contracts/common.md#principled-implementation The key is a schema because it may be a literal or a dynamic key type, and the protobuf assignment is stored next to the property it belongs to.
// @evidence contracts/common.md#clear-and-simple-design Six fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The analysis-only field is stated.
// @evidence contracts/common.md#meaningful-documentation The doc states the analysis-only field.
type MetadataProperty struct {
  // Key is the analyzed literal or dynamic property-key schema.
  Key *MetadataSchema
  // Value is the analyzed property-value schema.
  Value *MetadataSchema
  // Description is optional documentation attached to this property.
  Description *string
  // JsDocTags contains the property's ordered documentation tags.
  JsDocTags []IJsDocTagInfo
  // Mutability records an optional modifier such as readonly.
  Mutability *string
  // Of_protobuf_ is the analysis-only protobuf field assignment.
  Of_protobuf_ *nativeprotobuf.IProtobufProperty
}

// MetadataProperty_create builds a property from props, copying the JSDoc tag
// slice and storing the schemas as given. Of_protobuf_ is not carried over.
//
// @evidence contracts/common.md#principled-implementation The slice that others append to is copied and the schemas are shared.
// @evidence contracts/common.md#clear-and-simple-design One constructor.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The dropped field is listed rather than hidden.
// @evidence contracts/common.md#meaningful-documentation The doc states what is copied and what is not carried.
func MetadataProperty_create(props MetadataProperty) *MetadataProperty {
  return &MetadataProperty{
    Key:         props.Key,
    Value:       props.Value,
    Description: props.Description,
    JsDocTags:   append([]IJsDocTagInfo{}, props.JsDocTags...),
    Mutability:  props.Mutability,
  }
}

// ToJSON returns the JSON form of the property; the key and value schemas must
// be set.
//
// @evidence contracts/common.md#principled-implementation Both schemas are converted by their own ToJSON.
// @evidence contracts/common.md#clear-and-simple-design One record construction.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A nil schema is a caller error that the doc states.
// @evidence contracts/common.md#meaningful-documentation The doc states the precondition.
func (obj *MetadataProperty) ToJSON() IMetadataSchema_IProperty {
  return IMetadataSchema_IProperty{
    Key:         obj.Key.ToJSON(),
    Value:       obj.Value.ToJSON(),
    Description: obj.Description,
    JsDocTags:   append([]IJsDocTagInfo{}, obj.JsDocTags...),
    Mutability:  obj.Mutability,
  }
}
