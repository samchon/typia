package metadata

// IMetadataSchema_IMap is the JSON form of a `Map`: the key and value schemas
// and the tag rows.
//
// @evidence contracts/common.md#principled-implementation A map has no shared declaration, so its JSON form holds both schemas and the tags.
// @evidence contracts/common.md#clear-and-simple-design Three fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record holds and which function reads or writes it.
type IMetadataSchema_IMap struct {
  Key   *IMetadataSchema
  Value *IMetadataSchema
  Tags  [][]IMetadataTypeTag
}

// MetadataMap is the global `Map` type with its key and value schemas and the
// tag rows of the use. The cached names are not recomputed when Tags changes later.
//
// @evidence contracts/common.md#principled-implementation The key and value schemas define the map and the tags belong to the use.
// @evidence contracts/common.md#clear-and-simple-design Three fields and two caches.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The cache limitation is stated.
// @evidence contracts/common.md#meaningful-documentation The doc states the parts and the cache limitation.
type MetadataMap struct {
  Key           *MetadataSchema
  Value         *MetadataSchema
  Tags          [][]IMetadataTypeTag
  name_         string
  display_name_ string
}

// MetadataMap_create builds a map from props, copying the tag matrix and storing
// the key and value schemas as given.
//
// @evidence contracts/common.md#principled-implementation The use owns its tags and the schemas are the definition.
// @evidence contracts/common.md#clear-and-simple-design One constructor.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Nothing is dropped except the empty caches.
// @evidence contracts/common.md#meaningful-documentation The doc states what is copied.
func MetadataMap_create(props MetadataMap) *MetadataMap {
  return &MetadataMap{
    Key:   props.Key,
    Value: props.Value,
    Tags:  cloneTagMatrix(props.Tags),
  }
}

// GetName returns `Map<key, value>` with the tags applied, using the identity
// names of both schemas, cached after the first call.
//
// @evidence contracts/common.md#principled-implementation The name composes the identity names of the parts, so it identifies the map type.
// @evidence contracts/common.md#clear-and-simple-design One cached composition through taggedName.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The cache limitation is documented on the record.
// @evidence contracts/common.md#meaningful-documentation The doc gives the output form.
func (obj *MetadataMap) GetName() string {
  if obj.name_ == "" {
    obj.name_ = taggedName("Map<"+safeMetadataName(obj.Key)+", "+safeMetadataName(obj.Value)+">", obj.Tags)
  }
  return obj.name_
}

// GetDisplayName returns `Map<key, value>` with the tags applied, using the
// display names of both schemas.
//
// @evidence contracts/common.md#principled-implementation It is the human-facing counterpart of GetName.
// @evidence contracts/common.md#clear-and-simple-design One cached composition through taggedName.
// @evidence contracts/common.md#prohibited-implementation-shortcuts No rewriting beyond the part names.
// @evidence contracts/common.md#meaningful-documentation The doc gives the output form.
func (obj *MetadataMap) GetDisplayName() string {
  if obj.display_name_ == "" {
    obj.display_name_ = taggedName("Map<"+safeMetadataDisplayName(obj.Key)+", "+safeMetadataDisplayName(obj.Value)+">", obj.Tags)
  }
  return obj.display_name_
}

// ToJSON returns the JSON form of the map with a copy of the tags; the key and
// value schemas must be set.
//
// @evidence contracts/common.md#principled-implementation Both schemas are converted by their own ToJSON and the matrix is copied.
// @evidence contracts/common.md#clear-and-simple-design One record construction.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A nil schema is a caller error that the doc states.
// @evidence contracts/common.md#meaningful-documentation The doc states the precondition.
func (obj *MetadataMap) ToJSON() IMetadataSchema_IMap {
  return IMetadataSchema_IMap{
    Key:   obj.Key.ToJSON(),
    Value: obj.Value.ToJSON(),
    Tags:  cloneTagMatrix(obj.Tags),
  }
}
