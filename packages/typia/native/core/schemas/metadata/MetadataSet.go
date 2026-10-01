package metadata

// IMetadataSchema_ISet is the JSON form of a `Set`: the element schema and the
// tag rows.
//
// @evidence contracts/common.md#principled-implementation A set has no shared declaration, so its JSON form holds the schema and tags.
// @evidence contracts/common.md#clear-and-simple-design Two fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record holds and which function reads or writes it.
type IMetadataSchema_ISet struct {
  Value *IMetadataSchema
  Tags  [][]IMetadataTypeTag
}

// MetadataSet is the global `Set` type with its element schema and the tag rows
// of the use. The cached names are not recomputed when Tags changes later.
//
// @evidence contracts/common.md#principled-implementation The element schema defines the set and the tags belong to the use.
// @evidence contracts/common.md#clear-and-simple-design Two fields and two caches.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The cache limitation is stated.
// @evidence contracts/common.md#meaningful-documentation The doc states the parts and the cache limitation.
type MetadataSet struct {
  Value         *MetadataSchema
  Tags          [][]IMetadataTypeTag
  name_         string
  display_name_ string
}

// MetadataSet_create builds a set from props, copying the tag matrix and storing
// the element schema as given.
//
// @evidence contracts/common.md#principled-implementation The use owns its tags and the schema is the definition.
// @evidence contracts/common.md#clear-and-simple-design One constructor.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Nothing is dropped except the empty caches.
// @evidence contracts/common.md#meaningful-documentation The doc states what is copied.
func MetadataSet_create(props MetadataSet) *MetadataSet {
  return &MetadataSet{
    Value: props.Value,
    Tags:  cloneTagMatrix(props.Tags),
  }
}

// GetName returns `Set<value>` with the tags applied, using the identity name
// of the element schema, cached after the first call.
//
// @evidence contracts/common.md#principled-implementation The name composes the identity name of the element.
// @evidence contracts/common.md#clear-and-simple-design One cached composition through taggedName.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The cache limitation is documented on the record.
// @evidence contracts/common.md#meaningful-documentation The doc gives the output form.
func (obj *MetadataSet) GetName() string {
  if obj.name_ == "" {
    obj.name_ = taggedName("Set<"+safeMetadataName(obj.Value)+">", obj.Tags)
  }
  return obj.name_
}

// GetDisplayName returns `Set<value>` with the tags applied, using the display
// name of the element schema.
//
// @evidence contracts/common.md#principled-implementation It is the human-facing counterpart of GetName.
// @evidence contracts/common.md#clear-and-simple-design One cached composition through taggedName.
// @evidence contracts/common.md#prohibited-implementation-shortcuts No rewriting beyond the element name.
// @evidence contracts/common.md#meaningful-documentation The doc gives the output form.
func (obj *MetadataSet) GetDisplayName() string {
  if obj.display_name_ == "" {
    obj.display_name_ = taggedName("Set<"+safeMetadataDisplayName(obj.Value)+">", obj.Tags)
  }
  return obj.display_name_
}

// ToJSON returns the JSON form of the set with a copy of the tags; the element
// schema must be set.
//
// @evidence contracts/common.md#principled-implementation The schema is converted by its own ToJSON and the matrix is copied.
// @evidence contracts/common.md#clear-and-simple-design One record construction.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A nil schema is a caller error that the doc states.
// @evidence contracts/common.md#meaningful-documentation The doc states the precondition.
func (obj *MetadataSet) ToJSON() IMetadataSchema_ISet {
  return IMetadataSchema_ISet{
    Value: obj.Value.ToJSON(),
    Tags:  cloneTagMatrix(obj.Tags),
  }
}
