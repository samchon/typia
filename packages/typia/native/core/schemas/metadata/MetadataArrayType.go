package metadata

// IMetadataSchema_IArrayType is the JSON form of an array type: name, element
// schema, nullability list, recursion flag and the optional index.
//
// @evidence contracts/common.md#principled-implementation The JSON form lists what an array type needs to be rebuilt and leaves out the derived display name.
// @evidence contracts/common.md#clear-and-simple-design One flat record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record holds and which function reads or writes it.
type IMetadataSchema_IArrayType struct {
  Name      string
  Value     *IMetadataSchema
  Nullables []bool
  Recursive bool
  Index     *int
}

// MetadataArrayType is an array type shared by every use of it: its name, the
// display name for messages, the element schema, which uses were nullable,
// whether it refers to itself and its index in the collection.
//
// @evidence contracts/common.md#principled-implementation The element schema, flags and index belong to the type and are kept once, while tags belong to each use.
// @evidence contracts/common.md#clear-and-simple-design One flat record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each part.
type MetadataArrayType struct {
  Name        string
  DisplayName string
  Value       *MetadataSchema
  Nullables   []bool
  Recursive   bool
  Index       *int
}

// MetadataArrayType__From_without_value builds the array type of a JSON record
// with Value left nil, to be filled once every type exists. ToJSON must not be
// called before that.
//
// @evidence contracts/common.md#principled-implementation Loading is two-phase so that a recursive array can refer to a type that does not exist yet.
// @evidence contracts/common.md#clear-and-simple-design One constructor reusing MetadataArrayType_create.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The missing value is the documented first phase.
// @evidence contracts/common.md#meaningful-documentation The doc states the first phase and the Value restriction.
func MetadataArrayType__From_without_value(props IMetadataSchema_IArrayType) *MetadataArrayType {
  return MetadataArrayType_create(MetadataArrayType{
    Name:      props.Name,
    Value:     nil,
    Index:     props.Index,
    Recursive: props.Recursive,
    Nullables: append([]bool{}, props.Nullables...),
  })
}

// MetadataArrayType_create builds an array type from props. The nullability list
// is copied; Value and Index are stored as given.
//
// @evidence contracts/common.md#principled-implementation The slice that others append to is copied; the element schema is the type's definition and is shared.
// @evidence contracts/common.md#clear-and-simple-design One constructor.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A nil Value is stored as nil and left to the caller.
// @evidence contracts/common.md#meaningful-documentation The doc states what is copied.
func MetadataArrayType_create(props MetadataArrayType) *MetadataArrayType {
  return &MetadataArrayType{
    Name:        props.Name,
    DisplayName: props.DisplayName,
    Value:       props.Value,
    Index:       props.Index,
    Recursive:   props.Recursive,
    Nullables:   append([]bool{}, props.Nullables...),
  }
}

// GetDisplayName returns the human-facing rendering of the type: the
// structural form for anonymous (inline) types, the identifier name otherwise.
// Identity-sensitive logic (function keys, deduplication) must keep using Name.
//
// @evidence contracts/common.md#principled-implementation The display name is used when it was recorded, which is the structural form of an anonymous array type, and otherwise the identifier name, while identity logic keeps reading Name.
// @evidence contracts/common.md#clear-and-simple-design One branch.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The two names are separate fields and the identity name is not overwritten.
// @evidence contracts/common.md#meaningful-documentation The doc states the rule and the identity warning.
func (obj *MetadataArrayType) GetDisplayName() string {
  if obj.DisplayName != "" {
    return obj.DisplayName
  }
  return obj.Name
}

// ToJSON returns the JSON form of the array type, which requires Value to be set.
//
// @evidence contracts/common.md#principled-implementation It is the serializable projection of the type, with the element schema converted recursively.
// @evidence contracts/common.md#clear-and-simple-design One record construction.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A nil Value is a caller error that the doc states.
// @evidence contracts/common.md#meaningful-documentation The doc states the Value precondition.
func (obj *MetadataArrayType) ToJSON() IMetadataSchema_IArrayType {
  return IMetadataSchema_IArrayType{
    Name:      obj.Name,
    Value:     obj.Value.ToJSON(),
    Nullables: append([]bool{}, obj.Nullables...),
    Recursive: obj.Recursive,
    Index:     obj.Index,
  }
}
