package metadata

import "strings"

// IMetadataTypeTag is one type tag read from an intersection such as
// `number & tags.Minimum<1>`. Target is the primitive it applies to, Name its
// text, Kind its tag kind, Exclusive its incompatibility rule, Value its argument,
// Validate the validation expression with `$input` as the subject and Schema the
// JSON schema fragment it adds.
//
// @evidence contracts/common.md#principled-implementation A tag has to carry everything the validator and the schema generators need, so the record holds the target, the identity, the argument, the check expression and the schema fragment.
// @evidence contracts/common.md#clear-and-simple-design One flat record of seven fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The loosely typed fields are as the tag declares them and nothing is guessed.
// @evidence contracts/common.md#meaningful-documentation The doc names each field.
type IMetadataTypeTag struct {
  // Target is the primitive or native category to which the tag applies.
  Target string
  // Name is the rendered type-tag identity used in names and diagnostics.
  Name string
  // Kind identifies the tag constraint kind.
  Kind string
  // Exclusive specifies incompatibility as declared by the tag.
  Exclusive any
  // Value is the argument supplied by the tag.
  Value any
  // Validate is the validation expression with $input as its subject.
  Validate string
  // Schema is the JSON Schema fragment supplied by the tag.
  Schema any
}

// IMetadataSchema_IReference is the JSON form of a use of a named type: the name
// and the tag rows of that use.
//
// @evidence contracts/common.md#principled-implementation A use of a shared or built-in type is serialized as its name and tags.
// @evidence contracts/common.md#clear-and-simple-design Two fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation Each field describes the by-name projection produced by tagged references.
type IMetadataSchema_IReference struct {
  // Name identifies the shared or built-in type referenced by this use.
  Name string
  // Tags contains this use's alternative rows of jointly applied tags.
  Tags [][]IMetadataTypeTag
}

// MetadataNative is a built-in class such as `Date`, a typed array, `Blob` or
// `File`, with the tag rows of the use. Name and Tags must be final before the
// first GetName because the rendered name is cached.
//
// @evidence contracts/common.md#principled-implementation A built-in class is validated by its runtime identity, so the metadata only needs its name and tags.
// @evidence contracts/common.md#clear-and-simple-design Two fields and one cache.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The cache limitation is stated.
// @evidence contracts/common.md#meaningful-documentation The doc states the meaning and the cache limitation.
type MetadataNative struct {
  // Name identifies the built-in class.
  Name string
  // Tags contains this use's alternative rows of jointly applied tags.
  Tags      [][]IMetadataTypeTag
  typeName_ string
}

// MetadataNative_create builds a native from props and copies the tag matrix.
//
// @evidence contracts/common.md#principled-implementation The use owns its tags, as every other tagged member does.
// @evidence contracts/common.md#clear-and-simple-design One constructor using cloneTagMatrix.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Sharing the caller's matrix was the defect this ownership removes, and a unit test pins it.
// @evidence contracts/common.md#meaningful-documentation The doc states that the matrix is copied.
func MetadataNative_create(props MetadataNative) *MetadataNative {
  return &MetadataNative{
    Name: props.Name,
    Tags: cloneTagMatrix(props.Tags),
  }
}

// GetName returns the class name, or `(Name & tag)` for one row, or
// `(Name & (row | row))` for several, cached after the first call.
//
// @evidence contracts/common.md#principled-implementation The name is the class intersected with its tag alternatives.
// @evidence contracts/common.md#clear-and-simple-design A cache check and one private formatter.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The cache limitation is documented on the record.
// @evidence contracts/common.md#meaningful-documentation The doc gives the output forms.
func (obj *MetadataNative) GetName() string {
  if obj.typeName_ == "" {
    obj.typeName_ = metadataNative_getName(obj)
  }
  return obj.typeName_
}

// ToJSON returns the name and independent tag rows. References inside
// individual tag values remain shared.
//
// @evidence contracts/common.md#principled-implementation The name and tag records are projected with copied matrix rows; nested tag payloads remain shared.
// @evidence contracts/common.md#clear-and-simple-design One record construction.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The matrix is copied.
// @evidence contracts/common.md#meaningful-documentation The doc states that the tags are copied.
func (obj *MetadataNative) ToJSON() IMetadataSchema_IReference {
  return IMetadataSchema_IReference{
    Name: obj.Name,
    Tags: cloneTagMatrix(obj.Tags),
  }
}

func metadataNative_getName(obj *MetadataNative) string {
  if len(obj.Tags) == 0 {
    return obj.Name
  }
  if len(obj.Tags) == 1 {
    row := []string{obj.Name}
    for _, tag := range obj.Tags[0] {
      row = append(row, tag.Name)
    }
    return "(" + strings.Join(row, " & ") + ")"
  }
  rows := make([]string, 0, len(obj.Tags))
  for _, row := range obj.Tags {
    names := make([]string, 0, len(row))
    for _, tag := range row {
      names = append(names, tag.Name)
    }
    str := strings.Join(names, " & ")
    if len(row) == 1 {
      rows = append(rows, str)
    } else {
      rows = append(rows, "("+str+")")
    }
  }
  return "(" + obj.Name + " & (" + strings.Join(rows, " | ") + "))"
}
