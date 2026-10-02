package metadata

// MetadataArray is one use of a shared array type in a schema, with the type tag
// rows of that use. Type names and Tags must be final before the first cached
// name lookup; later changes do not invalidate either cache.
//
// @evidence contracts/common.md#principled-implementation Tags are per use while the array type is shared, so the reference owns the tags and points to the type.
// @evidence contracts/common.md#clear-and-simple-design A reference record with two cached strings.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The cache behavior is stated rather than hidden.
// @evidence contracts/common.md#meaningful-documentation The doc states the sharing and the cache limitation.
type MetadataArray struct {
  // Type is the shared array definition referenced by this use.
  Type *MetadataArrayType
  // Tags contains this use's alternative rows of jointly applied tags.
  Tags          [][]IMetadataTypeTag
  name_         string
  display_name_ string
}

// MetadataArray_create references props.Type and copies the tag matrix.
//
// @evidence contracts/common.md#principled-implementation The use owns its tags and shares the array type, which is meant to be shared.
// @evidence contracts/common.md#clear-and-simple-design One constructor.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Nothing is dropped except the caches, which start empty.
// @evidence contracts/common.md#meaningful-documentation The doc states which part is copied.
func MetadataArray_create(props MetadataArray) *MetadataArray {
  return &MetadataArray{
    Type: props.Type,
    Tags: cloneTagMatrix(props.Tags),
  }
}

// GetName returns the identity name of the use: the array type's Name with the
// tags applied, cached after the first call.
//
// @evidence contracts/common.md#principled-implementation Identity logic needs a stable name for the use, built from the type's identity name and the tags.
// @evidence contracts/common.md#clear-and-simple-design One cached call to taggedName.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The cache is documented on the record.
// @evidence contracts/common.md#meaningful-documentation The doc states the identity role and the caching.
func (obj *MetadataArray) GetName() string {
  if obj.name_ == "" {
    obj.name_ = taggedName(obj.Type.Name, obj.Tags)
  }
  return obj.name_
}

// GetDisplayName returns the human-facing name of the use: the array type's
// display name with the tags applied.
//
// @evidence contracts/common.md#principled-implementation Messages use the structural display form while identity logic keeps GetName.
// @evidence contracts/common.md#clear-and-simple-design One cached call to taggedName.
// @evidence contracts/common.md#prohibited-implementation-shortcuts No consumer-specific rewriting.
// @evidence contracts/common.md#meaningful-documentation The doc states it is the human-facing counterpart.
func (obj *MetadataArray) GetDisplayName() string {
  if obj.display_name_ == "" {
    obj.display_name_ = taggedName(obj.Type.GetDisplayName(), obj.Tags)
  }
  return obj.display_name_
}

// ToJSON returns the by-name reference to the array type with a copy of the tags.
//
// @evidence contracts/common.md#principled-implementation The shared array type is serialized once in the components, so a use is written as its name and tags.
// @evidence contracts/common.md#clear-and-simple-design One record construction.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The tags are copied.
// @evidence contracts/common.md#meaningful-documentation The doc states the by-name form.
func (obj *MetadataArray) ToJSON() IMetadataSchema_IReference {
  return IMetadataSchema_IReference{
    Name: obj.Type.Name,
    Tags: cloneTagMatrix(obj.Tags),
  }
}
