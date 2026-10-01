package metadata

import "strings"

// IMetadataSchema_IObjectType is the JSON form of an object type: name,
// properties, description, JSDoc tags, index, recursion flag and nullability list.
// The class facts of MetadataObjectType are analysis-only and are not part of it.
//
// @evidence contracts/common.md#principled-implementation The JSON form lists what an object needs to be rebuilt as data.
// @evidence contracts/common.md#clear-and-simple-design One flat record.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record holds and which function reads or writes it.
type IMetadataSchema_IObjectType struct {
  Name        string
  Properties  []*IMetadataSchema_IProperty
  Description *string
  JsDocTags   []IJsDocTagInfo
  Index       int
  Recursive   bool
  Nullables   []bool
}

// MetadataObjectType is an object type shared by every use of it: its names,
// properties, documentation, collection index and flags, plus the class facts
// documented on the fields that the `plain.classify` programmer reads in
// process. Those facts, the parent objects and the check properties are not
// serialized and are not copied by MetadataObjectType_create.
//
// @evidence contracts/common.md#principled-implementation Object shape and documentation belong to the type and are kept once; the class facts are collected during analysis for a single consumer and are explained at each field.
// @evidence contracts/common.md#clear-and-simple-design One record with the cached literal and required-literal answers.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The record does not claim that the in-process fields survive create or JSON.
// @evidence contracts/common.md#meaningful-documentation The doc and the field comments state what is serialized and what is not.
type MetadataObjectType struct {
  Name        string
  DisplayName string
  // Source is the absolute-or-as-declared path of the file declaring a named
  // class, captured at analysis time so plain.classify can value-import a
  // cross-module class it reconstructs (Object.create / new / from). nil for
  // anonymous/literal shapes and types with no locatable declaration. Read
  // in-process by the classify programmer; not serialized (classify is
  // single-pass), and ignored by clone/prune.
  Source *string
  // SourceDefault is true when the class is the default export of Source, so a
  // cross-module classify value-import uses a default (not named) import.
  SourceDefault bool
  // PrivateFields is true when the named class declaration carries at least one
  // ES `#private` member (a member named with a PrivateIdentifier). Such slots
  // are installed only by running the constructor; plain.classify's field-copy
  // (Object.create + assign) cannot restore them, so classify rejects any such
  // class at a field-copied position. Read in-process by the classify
  // programmer; ignored by clone/prune, not serialized.
  PrivateFields bool
  // IsClass is true when this object's declaration is a `class` (declaration or
  // expression), so it has a runtime VALUE binding plain.classify can
  // `Object.create(<name>.prototype)`/`new` against. False for an interface, a
  // type alias, or an anonymous object literal — none of which is a runtime
  // value, so classify field-copies a plain {} instead of referencing a
  // type-only name. Read in-process by the classify programmer; ignored by
  // clone/prune, not serialized.
  IsClass bool
  // ValueRef overrides the runtime VALUE-binding name plain.classify uses when
  // the class's metadata Name is not a usable runtime constructor reference —
  // namely a NAMED class EXPRESSION (`const X = class Beast {...}`), whose Name
  // is the inner `Beast` that binds only inside the class body. Holds the
  // enclosing variable binding ("X"). Empty for a class DECLARATION (Name binds)
  // and for an unnamed class expression (Name is already the variable binding).
  // Read in-process by the classify programmer; not serialized, ignored by
  // clone/prune.
  ValueRef          string
  Properties        []*MetadataProperty
  Description       *string
  JsDocTags         []IJsDocTagInfo
  Index             int
  Validated         bool
  Recursive         bool
  Nullables         []bool
  Parent_objects_   []*MetadataObject
  Check_properties_ []*MetadataProperty
  Tagged_           bool
  literal_          *bool
  required_literal_ *bool
}

// MetadataObjectType_create builds an object type from props. Invalid UTF-8 in
// the name becomes `__`. Properties are stored as given, the JSDoc tag slice and
// the nullability list are copied, and the in-process class facts, parent objects
// and check properties are not carried over.
//
// @evidence contracts/common.md#principled-implementation A name with invalid UTF-8 would break emitted identifiers, so it is normalized once at creation, and the slices others append to are copied.
// @evidence contracts/common.md#clear-and-simple-design One constructor.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The dropped in-process fields are listed rather than hidden.
// @evidence contracts/common.md#meaningful-documentation The doc states the normalization and what is not carried.
func MetadataObjectType_create(props MetadataObjectType) *MetadataObjectType {
  name := strings.ToValidUTF8(props.Name, "__")
  name = strings.ReplaceAll(name, "\uFFFD", "__")
  return &MetadataObjectType{
    Name:        name,
    DisplayName: props.DisplayName,
    Properties:  props.Properties,
    Description: props.Description,
    JsDocTags:   append([]IJsDocTagInfo{}, props.JsDocTags...),
    Index:       props.Index,
    Validated:   props.Validated,
    Recursive:   props.Recursive,
    Nullables:   append([]bool{}, props.Nullables...),
    Tagged_:     false,
  }
}

// GetDisplayName returns the human-facing rendering of the type: the
// structural form for anonymous (inline) types, the identifier name otherwise.
// Identity-sensitive logic (function keys, deduplication) must keep using Name.
//
// @evidence contracts/common.md#principled-implementation The display name is used when it was recorded, which is the structural form of an anonymous object type, and otherwise the identifier name, while identity logic keeps reading Name.
// @evidence contracts/common.md#clear-and-simple-design One branch.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The two names are separate fields and the identity name is not overwritten.
// @evidence contracts/common.md#meaningful-documentation The doc states the rule and the identity warning.
func (obj *MetadataObjectType) GetDisplayName() string {
  if obj.DisplayName != "" {
    return obj.DisplayName
  }
  return obj.Name
}

// CheckProperties returns the properties that a validator must check: the
// recorded check properties when set and otherwise all properties.
//
// @evidence contracts/common.md#principled-implementation Intersections can narrow the checked set, so the narrowed list is preferred when present.
// @evidence contracts/common.md#clear-and-simple-design One branch.
// @evidence contracts/common.md#prohibited-implementation-shortcuts No copy is made, so the caller must not modify the returned slice.
// @evidence contracts/common.md#meaningful-documentation The doc states the fallback.
func (obj *MetadataObjectType) CheckProperties() []*MetadataProperty {
  if obj.Check_properties_ != nil {
    return obj.Check_properties_
  }
  return obj.Properties
}

// HasRequiredLiteralProperty reports whether this object or a parent object has
// a required property whose key is a single literal. The answer is computed once
// and cached.
//
// @evidence contracts/common.md#principled-implementation A required literal key is the discriminant a union test can rely on, and parents contribute their own.
// @evidence contracts/common.md#clear-and-simple-design A cached search over parents and checked properties.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The cache is not invalidated, so the properties must be final before the first call.
// @evidence contracts/common.md#meaningful-documentation The doc states the rule and the caching.
func (obj *MetadataObjectType) HasRequiredLiteralProperty() bool {
  if obj.required_literal_ != nil {
    return *obj.required_literal_
  }
  value := false
  for _, parent := range obj.Parent_objects_ {
    if parent.Type.HasRequiredLiteralProperty() {
      value = true
      break
    }
  }
  for _, property := range obj.CheckProperties() {
    if property.Key.IsSoleLiteral() && property.Value.IsRequired() {
      value = true
      break
    }
  }
  obj.required_literal_ = &value
  return value
}

// IsLiteral reports whether the type is an anonymous object literal: not
// recursive and named `__type` or `__object` (or such a name with the
// collection's duplicate suffix) or containing `readonly [`. The answer is cached.
//
// @evidence contracts/common.md#principled-implementation Anonymous types are inlined by the schema generators instead of becoming components, and the check recognizes the names the analysis gives them.
// @evidence contracts/common.md#clear-and-simple-design A cached name test using the collection's suffix constant.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The suffix is read from the same constant the collection writes, not respelled.
// @evidence contracts/common.md#meaningful-documentation The doc states the name rule and the caching.
func (obj *MetadataObjectType) IsLiteral() bool {
  if obj.literal_ != nil {
    return *obj.literal_
  }
  value := false
  if obj.Recursive == false {
    name := strings.ToValidUTF8(obj.Name, "__")
    name = strings.ReplaceAll(name, "\uFFFD", "__")
    value = metadataObjectType_isAnonymousName(name, "__type") ||
      metadataObjectType_isAnonymousName(name, "__object") ||
      strings.Contains(name, "readonly [")
  }
  obj.literal_ = &value
  return value
}

// metadataObjectType_isAnonymousName reports whether an allocated id names an
// anonymous type literal, which the schema generators inline instead of
// emitting as a component.
//
// A second anonymous type is a duplicate of the first, so its id carries the
// collection's disambiguating counter and the bare marker is not enough to
// recognize it. This reads that counter back out of an id, which is why it must
// track `metadataCollection_duplicateSuffix` rather than spell the separator
// again: when the two disagreed, every anonymous type after the first stopped
// being recognized and was emitted as a `__type`-keyed component.
func metadataObjectType_isAnonymousName(name string, marker string) bool {
  return name == marker ||
    strings.HasPrefix(name, marker+metadataCollection_duplicateSuffix)
}

// ToJSON returns the JSON form of the object type. The class facts and the
// display name are not included.
//
// @evidence contracts/common.md#principled-implementation It is the serializable projection of the type.
// @evidence contracts/common.md#clear-and-simple-design One loop and one record construction.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The slices are copied.
// @evidence contracts/common.md#meaningful-documentation The doc states what is omitted.
func (obj *MetadataObjectType) ToJSON() IMetadataSchema_IObjectType {
  properties := make([]*IMetadataSchema_IProperty, 0, len(obj.Properties))
  for _, property := range obj.Properties {
    json := property.ToJSON()
    properties = append(properties, &json)
  }
  return IMetadataSchema_IObjectType{
    Name:        obj.Name,
    Properties:  properties,
    Description: obj.Description,
    JsDocTags:   append([]IJsDocTagInfo{}, obj.JsDocTags...),
    Index:       obj.Index,
    Recursive:   obj.Recursive,
    Nullables:   append([]bool{}, obj.Nullables...),
  }
}

// metadataObjectType_covers reports whether x covers y: x has no fewer
// properties than y, every property key name of x also occurs in y, and the value
// of each property of x covers the value of the property of y with that name. In
// effect both list the same keys and x accepts every value that y does.
func metadataObjectType_covers(x *MetadataObjectType, y *MetadataObjectType, visited map[metadataSchemaCoversPair]struct{}) bool {
  if len(x.Properties) < len(y.Properties) {
    return false
  }
  for _, prop := range x.Properties {
    var opposite *MetadataProperty
    for _, oppo := range y.Properties {
      if prop.Key.GetName() == oppo.Key.GetName() {
        opposite = oppo
        break
      }
    }
    if opposite == nil || metadataSchema_covers(prop.Value, opposite.Value, false, visited) == false {
      return false
    }
  }
  return true
}
