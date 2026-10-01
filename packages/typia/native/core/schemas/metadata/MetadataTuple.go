package metadata

// MetadataTuple is one use of a shared tuple type in a schema, with the tag rows
// of that use.
//
// @evidence contracts/common.md#principled-implementation Tags are per use while the tuple type is shared.
// @evidence contracts/common.md#clear-and-simple-design Two fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states the sharing.
type MetadataTuple struct {
  Type *MetadataTupleType
  Tags [][]IMetadataTypeTag
}

// MetadataTuple_create references props.Type and copies the tag matrix.
//
// @evidence contracts/common.md#principled-implementation The use owns its tags and shares the tuple type.
// @evidence contracts/common.md#clear-and-simple-design One constructor.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Nothing is dropped.
// @evidence contracts/common.md#meaningful-documentation The doc states what is copied.
func MetadataTuple_create(props MetadataTuple) *MetadataTuple {
  return &MetadataTuple{
    Type: props.Type,
    Tags: cloneTagMatrix(props.Tags),
  }
}

// ToJSON returns the by-name reference to the tuple type with a copy of the tags.
//
// @evidence contracts/common.md#principled-implementation The shared tuple type is serialized once in the components.
// @evidence contracts/common.md#clear-and-simple-design One record construction.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The tags are copied.
// @evidence contracts/common.md#meaningful-documentation The doc states the by-name form.
func (obj *MetadataTuple) ToJSON() IMetadataSchema_IReference {
  return IMetadataSchema_IReference{
    Name: obj.Type.Name,
    Tags: cloneTagMatrix(obj.Tags),
  }
}
