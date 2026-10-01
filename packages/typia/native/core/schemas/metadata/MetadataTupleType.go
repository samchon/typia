package metadata

// IMetadataSchema_ITupleType is the JSON form of a tuple type: name, element
// schemas, index, recursion flag and nullability list.
//
// @evidence contracts/common.md#principled-implementation The JSON form lists what a tuple needs to be rebuilt as data.
// @evidence contracts/common.md#clear-and-simple-design One flat record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record holds and which function reads or writes it.
type IMetadataSchema_ITupleType struct {
  Name      string
  Elements  []*IMetadataSchema
  Index     *int
  Recursive bool
  Nullables []bool
}

// MetadataTupleType is a tuple type shared by every use of it: names, element
// schemas (the last may be a rest element), index, recursion flag, which uses
// were nullable and Of_map, which marks a tuple standing for a map entry.
//
// @evidence contracts/common.md#principled-implementation Element schemas and flags belong to the type and are kept once, while tags belong to each use.
// @evidence contracts/common.md#clear-and-simple-design One flat record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each part.
type MetadataTupleType struct {
  Name        string
  DisplayName string
  Elements    []*MetadataSchema
  Index       *int
  Recursive   bool
  Nullables   []bool
  Of_map      *bool
}

// MetadataTupleType_create builds a tuple type from props. The nullability list
// is copied; the element slice and the other fields are stored as given.
//
// @evidence contracts/common.md#principled-implementation The slice that others append to is copied and the elements are the definition.
// @evidence contracts/common.md#clear-and-simple-design One constructor.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Nothing is dropped.
// @evidence contracts/common.md#meaningful-documentation The doc states what is copied.
func MetadataTupleType_create(props MetadataTupleType) *MetadataTupleType {
  return &MetadataTupleType{
    Name:        props.Name,
    DisplayName: props.DisplayName,
    Elements:    props.Elements,
    Index:       props.Index,
    Recursive:   props.Recursive,
    Nullables:   append([]bool{}, props.Nullables...),
    Of_map:      props.Of_map,
  }
}

// GetDisplayName returns the human-facing rendering of the type: the
// structural form for anonymous (inline) types, the identifier name otherwise.
// Identity-sensitive logic (function keys, deduplication) must keep using Name.
//
// @evidence contracts/common.md#principled-implementation The display name is used when it was recorded, which is the structural form of an anonymous tuple type, and otherwise the identifier name, while identity logic keeps reading Name.
// @evidence contracts/common.md#clear-and-simple-design One branch.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The two names are separate fields and the identity name is not overwritten.
// @evidence contracts/common.md#meaningful-documentation The doc states the rule and the identity warning.
func (obj *MetadataTupleType) GetDisplayName() string {
  if obj.DisplayName != "" {
    return obj.DisplayName
  }
  return obj.Name
}

// IsRest reports whether the last element is a rest element.
//
// @evidence contracts/common.md#principled-implementation A rest element can only be the last one, so the last element is the only one to inspect.
// @evidence contracts/common.md#clear-and-simple-design One bounds check and one field test.
// @evidence contracts/common.md#prohibited-implementation-shortcuts An empty tuple is not rest.
// @evidence contracts/common.md#meaningful-documentation The doc states the rule.
func (obj *MetadataTupleType) IsRest() bool {
  return len(obj.Elements) > 0 && obj.Elements[len(obj.Elements)-1].Rest != nil
}

// ToJSON returns the JSON form of the tuple type; every element must be set. The
// display name and Of_map are not included.
//
// @evidence contracts/common.md#principled-implementation Every element is converted by its own ToJSON.
// @evidence contracts/common.md#clear-and-simple-design One loop and one record construction.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A nil element is a caller error that the doc states.
// @evidence contracts/common.md#meaningful-documentation The doc states the precondition and the omissions.
func (obj *MetadataTupleType) ToJSON() IMetadataSchema_ITupleType {
  elements := make([]*IMetadataSchema, 0, len(obj.Elements))
  for _, elem := range obj.Elements {
    elements = append(elements, elem.ToJSON())
  }
  return IMetadataSchema_ITupleType{
    Name:      obj.Name,
    Index:     obj.Index,
    Elements:  elements,
    Recursive: obj.Recursive,
    Nullables: append([]bool{}, obj.Nullables...),
  }
}
