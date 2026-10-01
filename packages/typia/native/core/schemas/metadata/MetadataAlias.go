package metadata

// MetadataAlias is one use of a shared alias type in a schema, together with
// the type tag rows that apply at that use. The two cached names are computed on
// first read and are not recomputed when Tags changes later.
//
// @evidence contracts/common.md#principled-implementation A use site carries its own tags while the alias type is shared, so tags live on the reference and the type stays one value; the name caches avoid re-rendering the tagged name on every comparison.
// @evidence contracts/common.md#clear-and-simple-design A reference record with two cached strings.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The record copies nothing from the type and does not hide the cache behavior.
// @evidence contracts/common.md#meaningful-documentation The doc states the shared type, the per-use tags and the cache limitation.
type MetadataAlias struct {
  Type          *MetadataAliasType
  Tags          [][]IMetadataTypeTag
  name_         string
  display_name_ string
}

// MetadataAlias_create references props.Type and copies the tag matrix, so later
// edits of the caller's rows do not reach the new use.
//
// @evidence contracts/common.md#principled-implementation The use owns its tags like every other tagged reference, and the shared alias type is stored by pointer because it is meant to be shared.
// @evidence contracts/common.md#clear-and-simple-design One constructor; cloneTagMatrix keeps nil as nil.
// @evidence contracts/common.md#prohibited-implementation-shortcuts No field is dropped silently: the two name caches start empty on purpose.
// @evidence contracts/common.md#meaningful-documentation The doc states which part is copied and which is shared.
func MetadataAlias_create(props MetadataAlias) *MetadataAlias {
  return &MetadataAlias{
    Type: props.Type,
    Tags: cloneTagMatrix(props.Tags),
  }
}

// GetName returns the identity name of the use: the alias type's Name with the
// tags applied. Identity-sensitive logic such as keys and deduplication reads it.
//
// @evidence contracts/common.md#principled-implementation The identity name is built from the alias's Name and the use's tags once and cached, which is cheap for the repeated comparisons the analysis does.
// @evidence contracts/common.md#clear-and-simple-design One cached call to taggedName.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The cache limitation is documented on the record.
// @evidence contracts/common.md#meaningful-documentation The doc distinguishes it from the display name.
func (obj *MetadataAlias) GetName() string {
  if obj.name_ == "" {
    obj.name_ = taggedName(obj.Type.Name, obj.Tags)
  }
  return obj.name_
}

// GetDisplayName returns the human-facing name of the use: the alias type's
// display name with the tags applied.
//
// @evidence contracts/common.md#principled-implementation Messages should show the structural form of an inline type while identity logic keeps the stable name, so the two are separate and computed from the type's own pair.
// @evidence contracts/common.md#clear-and-simple-design One cached call to taggedName.
// @evidence contracts/common.md#prohibited-implementation-shortcuts No consumer-specific rewriting.
// @evidence contracts/common.md#meaningful-documentation The doc states it is the human-facing counterpart of GetName.
func (obj *MetadataAlias) GetDisplayName() string {
  if obj.display_name_ == "" {
    obj.display_name_ = taggedName(obj.Type.GetDisplayName(), obj.Tags)
  }
  return obj.display_name_
}

// ToJSON returns the by-name reference to the alias type with a copy of the
// tags. The type's own JSON is written once by the components.
//
// @evidence contracts/common.md#principled-implementation A reference in the JSON form is the type name plus tags, because the shared type is serialized once in the components and a copy here would break sharing and recursion.
// @evidence contracts/common.md#clear-and-simple-design One record construction.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The tags are copied, so the caller cannot edit the use through the result.
// @evidence contracts/common.md#meaningful-documentation The doc states the by-name form.
func (obj *MetadataAlias) ToJSON() IMetadataSchema_IReference {
  return IMetadataSchema_IReference{
    Name: obj.Type.Name,
    Tags: cloneTagMatrix(obj.Tags),
  }
}
