package metadata

// IMetadataSchema_IAliasType is the JSON form of an alias type: its name, value
// schema, description, JSDoc tags, recursion flag and nullability list.
//
// @evidence contracts/common.md#principled-implementation The JSON form lists what must survive serialization of an alias and leaves out the display name, which is derived at analysis time.
// @evidence contracts/common.md#clear-and-simple-design One flat record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation Each field describes the alias definition produced by ToJSON.
type IMetadataSchema_IAliasType struct {
  // Name identifies the shared alias definition.
  Name string
  // Value is the serialized aliased schema.
  Value *IMetadataSchema
  // Description is optional documentation attached to the alias.
  Description *string
  // JsDocTags contains the alias's ordered documentation tags.
  JsDocTags []IJsDocTagInfo
  // Recursive marks a recursive alias definition.
  Recursive bool
  // Nullables records the nullability of analyzed uses.
  Nullables []bool
}

// MetadataAliasType is a type alias shared by every use of it: the name that
// identifies it, the display name for messages, the aliased schema, its
// documentation, whether it refers to itself and which uses were nullable.
//
// @evidence contracts/common.md#principled-implementation An alias is the unit that gives recursive and repeated types a name, so its value, flags and documentation are kept once and every use points here.
// @evidence contracts/common.md#clear-and-simple-design One flat record whose uses are MetadataAlias values.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc names each part.
type MetadataAliasType struct {
  // Name identifies the shared alias definition.
  Name string
  // DisplayName is the human-facing rendering, falling back to Name when empty.
  DisplayName string
  // Value is the analyzed aliased schema; it must be set before ToJSON.
  Value *MetadataSchema
  // Description is optional documentation attached to the alias.
  Description *string
  // JsDocTags contains the alias's ordered documentation tags.
  JsDocTags []IJsDocTagInfo
  // Recursive marks a recursive alias definition.
  Recursive bool
  // Nullables records the nullability of analyzed uses.
  Nullables []bool
}

// MetadataAliasType_create builds an alias type from props. The JSDoc tags and
// nullability list are copied; Value and Description are stored as given.
//
// @evidence contracts/common.md#principled-implementation The slices that other code appends to are copied so two types never share a backing array, while the value schema is shared because it is the type's definition.
// @evidence contracts/common.md#clear-and-simple-design One constructor.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A nil Value is stored as nil and is left for the caller or a later load to set.
// @evidence contracts/common.md#meaningful-documentation The doc states which fields are copied.
func MetadataAliasType_create(props MetadataAliasType) *MetadataAliasType {
  return &MetadataAliasType{
    Name:        props.Name,
    DisplayName: props.DisplayName,
    Value:       props.Value,
    Description: props.Description,
    JsDocTags:   append([]IJsDocTagInfo{}, props.JsDocTags...),
    Recursive:   props.Recursive,
    Nullables:   append([]bool{}, props.Nullables...),
  }
}

// GetDisplayName returns the human-facing rendering of the type: the
// structural form for anonymous (inline) types, the identifier name otherwise.
// Identity-sensitive logic (function keys, deduplication) must keep using Name.
//
// @evidence contracts/common.md#principled-implementation The display name is used when it was recorded, which is the structural form of an anonymous alias type, and otherwise the identifier name, while identity logic keeps reading Name.
// @evidence contracts/common.md#clear-and-simple-design One branch.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The two names are separate fields and the identity name is not overwritten.
// @evidence contracts/common.md#meaningful-documentation The doc states the rule and the identity warning.
func (obj *MetadataAliasType) GetDisplayName() string {
  if obj.DisplayName != "" {
    return obj.DisplayName
  }
  return obj.Name
}

// ToJSON returns the JSON form of the alias type, which requires Value to be
// set. The display name is not part of it.
//
// @evidence contracts/common.md#principled-implementation The JSON form is the serializable projection of the type, with the value schema converted recursively and the slices copied.
// @evidence contracts/common.md#clear-and-simple-design One record construction.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A nil Value is a caller error that the doc states and the code does not mask.
// @evidence contracts/common.md#meaningful-documentation The doc states the Value precondition and the omitted display name.
func (obj *MetadataAliasType) ToJSON() IMetadataSchema_IAliasType {
  return IMetadataSchema_IAliasType{
    Name:        obj.Name,
    Value:       obj.Value.ToJSON(),
    Description: obj.Description,
    Recursive:   obj.Recursive,
    JsDocTags:   append([]IJsDocTagInfo{}, obj.JsDocTags...),
    Nullables:   append([]bool{}, obj.Nullables...),
  }
}
