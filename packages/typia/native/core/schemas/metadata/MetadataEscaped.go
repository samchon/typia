package metadata

// IMetadataSchema_IEscaped is the JSON form of an escaped type: the schema of the
// original type and the schema of what its `toJSON` method returns.
//
// @evidence contracts/common.md#principled-implementation A type with `toJSON` has two shapes, the declared one and the serialized one, and both must survive serialization.
// @evidence contracts/common.md#clear-and-simple-design Two fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc distinguishes the declared and serialized shapes, with each public field documented separately.
type IMetadataSchema_IEscaped struct {
  // Original is the serialized metadata of the type before its toJSON call.
  Original *IMetadataSchema

  // Returns is the serialized metadata of the value returned by toJSON.
  Returns *IMetadataSchema
}

// MetadataEscaped is a type with a `toJSON` method: Original is the declared
// schema and Returns is the schema of the value `toJSON` returns, which is what
// JSON serialization actually sees.
//
// @evidence contracts/common.md#principled-implementation The declared type and the value `toJSON` returns are two different shapes, so both are kept side by side.
// @evidence contracts/common.md#clear-and-simple-design Two fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states which schema each field is.
type MetadataEscaped struct {
  // Original is the analyzed type before its toJSON call.
  Original *MetadataSchema

  // Returns is the analyzed return type used for JSON serialization and names.
  Returns *MetadataSchema
}

// MetadataEscaped_create builds an escaped type from props, storing both schemas
// as given.
//
// @evidence contracts/common.md#principled-implementation The two schemas are the definition of the type and are shared with the caller.
// @evidence contracts/common.md#clear-and-simple-design One constructor.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Nothing is dropped.
// @evidence contracts/common.md#meaningful-documentation The doc states that the schemas are stored, not copied.
func MetadataEscaped_create(props MetadataEscaped) *MetadataEscaped {
  return &MetadataEscaped{
    Original: props.Original,
    Returns:  props.Returns,
  }
}

// GetName returns the identity name of the returned schema, which is the name
// that describes the serialized value.
//
// @evidence contracts/common.md#principled-implementation The serialized value is what other code compares and keys on, so the name is the returned schema's.
// @evidence contracts/common.md#clear-and-simple-design One delegation.
// @evidence contracts/common.md#prohibited-implementation-shortcuts No separate cache or alternate spelling.
// @evidence contracts/common.md#meaningful-documentation The doc states which schema it names.
func (obj *MetadataEscaped) GetName() string {
  return obj.Returns.GetName()
}

// GetDisplayName returns the human-facing name of the returned schema.
//
// @evidence contracts/common.md#principled-implementation It mirrors GetName for messages.
// @evidence contracts/common.md#clear-and-simple-design One delegation.
// @evidence contracts/common.md#prohibited-implementation-shortcuts No rewriting.
// @evidence contracts/common.md#meaningful-documentation The doc states which schema it names.
func (obj *MetadataEscaped) GetDisplayName() string {
  return obj.Returns.GetDisplayName()
}

// ToJSON returns the JSON form of the escaped type; both schemas must be set.
//
// @evidence contracts/common.md#principled-implementation Both schemas are converted by MetadataSchema.ToJSON.
// @evidence contracts/common.md#clear-and-simple-design One record construction.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A nil schema is a caller error that the doc states.
// @evidence contracts/common.md#meaningful-documentation The doc states the precondition.
func (obj *MetadataEscaped) ToJSON() IMetadataSchema_IEscaped {
  return IMetadataSchema_IEscaped{
    Original: obj.Original.ToJSON(),
    Returns:  obj.Returns.ToJSON(),
  }
}
