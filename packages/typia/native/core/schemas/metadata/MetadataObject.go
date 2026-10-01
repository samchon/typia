package metadata

// MetadataObject is one use of a shared object type in a schema, with the tag
// rows of that use. The cached names are not recomputed when Tags changes later.
//
// @evidence contracts/common.md#principled-implementation Tags are per use while the object type is shared.
// @evidence contracts/common.md#clear-and-simple-design A reference record with two caches.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The cache limitation is stated.
// @evidence contracts/common.md#meaningful-documentation The doc states the sharing and the cache limitation.
type MetadataObject struct {
  Type          *MetadataObjectType
  Tags          [][]IMetadataTypeTag
  name_         string
  display_name_ string
}

// MetadataObject_create references props.Type and copies the tag matrix.
//
// @evidence contracts/common.md#principled-implementation The use owns its tags and shares the object type.
// @evidence contracts/common.md#clear-and-simple-design One constructor.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Nothing is dropped except the empty caches.
// @evidence contracts/common.md#meaningful-documentation The doc states what is copied.
func MetadataObject_create(props MetadataObject) *MetadataObject {
  return &MetadataObject{
    Type: props.Type,
    Tags: cloneTagMatrix(props.Tags),
  }
}

// GetName returns the identity name of the use: the object type's Name with the
// tags applied, cached after the first call.
//
// @evidence contracts/common.md#principled-implementation Identity logic needs a stable name for the use.
// @evidence contracts/common.md#clear-and-simple-design One cached call to taggedName.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The cache limitation is documented on the record.
// @evidence contracts/common.md#meaningful-documentation The doc states the identity role.
func (obj *MetadataObject) GetName() string {
  if obj.name_ == "" {
    obj.name_ = taggedName(obj.Type.Name, obj.Tags)
  }
  return obj.name_
}

// GetDisplayName returns the human-facing name of the use: the object type's
// display name with the tags applied.
//
// @evidence contracts/common.md#principled-implementation Messages show the structural form of an anonymous object while identity logic keeps GetName.
// @evidence contracts/common.md#clear-and-simple-design One cached call to taggedName.
// @evidence contracts/common.md#prohibited-implementation-shortcuts No rewriting.
// @evidence contracts/common.md#meaningful-documentation The doc states it is the human-facing counterpart.
func (obj *MetadataObject) GetDisplayName() string {
  if obj.display_name_ == "" {
    obj.display_name_ = taggedName(obj.Type.GetDisplayName(), obj.Tags)
  }
  return obj.display_name_
}

// ToJSON returns the by-name reference to the object type with a copy of the tags.
//
// @evidence contracts/common.md#principled-implementation The shared object type is serialized once in the components.
// @evidence contracts/common.md#clear-and-simple-design One record construction.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The tags are copied.
// @evidence contracts/common.md#meaningful-documentation The doc states the by-name form.
func (obj *MetadataObject) ToJSON() IMetadataSchema_IReference {
  return IMetadataSchema_IReference{
    Name: obj.Type.Name,
    Tags: cloneTagMatrix(obj.Tags),
  }
}
