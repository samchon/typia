package metadata

import "strings"

// IMetadataSchema_ITemplate is the JSON form of a template literal type: the row
// of schemas and the tag rows.
//
// @evidence contracts/common.md#principled-implementation A template has no shared declaration, so its JSON form holds the row and the tags.
// @evidence contracts/common.md#clear-and-simple-design Two fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record holds and which function reads or writes it.
type IMetadataSchema_ITemplate struct {
  Row  []*IMetadataSchema
  Tags [][]IMetadataTypeTag
}

// MetadataTemplate is a template literal type. Row alternates literal text and
// the schemas of the embedded types. The name is cached, so the row and tags
// must be final before the first GetName.
//
// @evidence contracts/common.md#principled-implementation A template is a sequence of text parts and type slots, which the row records in order.
// @evidence contracts/common.md#clear-and-simple-design Two fields and one cache.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The cache limitation is stated.
// @evidence contracts/common.md#meaningful-documentation The doc states the row layout and the cache limitation.
type MetadataTemplate struct {
  Row   []*MetadataSchema
  Tags  [][]IMetadataTypeTag
  name_ string
}

// MetadataTemplate_create builds a template from props, copying every row schema
// and the tag matrix.
//
// @evidence contracts/common.md#principled-implementation The use owns its row and tags, so editing the source does not change the template. Every row entry must be non-nil.
// @evidence contracts/common.md#clear-and-simple-design One loop over the row.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A nil entry is a caller error and is not masked.
// @evidence contracts/common.md#meaningful-documentation The doc states what is copied and the non-nil requirement.
func MetadataTemplate_create(props MetadataTemplate) *MetadataTemplate {
  row := make([]*MetadataSchema, 0, len(props.Row))
  for _, child := range props.Row {
    row = append(row, MetadataSchema_create(*child))
  }
  return &MetadataTemplate{
    Row:  row,
    Tags: cloneTagMatrix(props.Tags),
  }
}

// MetadataTemplate_from builds a template from its JSON form, loading every row
// schema against dict.
//
// @evidence contracts/common.md#principled-implementation Each element is loaded through MetadataSchema_from.
// @evidence contracts/common.md#clear-and-simple-design One loop.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Nothing is added.
// @evidence contracts/common.md#meaningful-documentation The doc states the dictionary use.
func MetadataTemplate_from(json IMetadataSchema_ITemplate, dict IMetadataDictionary) *MetadataTemplate {
  row := make([]*MetadataSchema, 0, len(json.Row))
  for _, elem := range json.Row {
    row = append(row, MetadataSchema_from(elem, dict))
  }
  return &MetadataTemplate{
    Row:  row,
    Tags: cloneTagMatrix(json.Tags),
  }
}

// GetName returns the base name with the tags applied, cached after the first call.
//
// @evidence contracts/common.md#principled-implementation The name is the template text intersected with its tag alternatives.
// @evidence contracts/common.md#clear-and-simple-design A cache check and a call to taggedName.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The cache limitation is documented on the record.
// @evidence contracts/common.md#meaningful-documentation The doc states the composition.
func (obj *MetadataTemplate) GetName() string {
  if obj.name_ == "" {
    obj.name_ = metadataTemplate_getName(obj)
  }
  return obj.name_
}

// GetBaseName returns the template as source text: a slot that is exactly one
// string constant is written as its text and any other slot as `${name}`, with
// backticks escaped.
//
// @evidence contracts/common.md#principled-implementation A constant slot reads as the literal text it stands for and other slots keep their type name, which is how the template type is written.
// @evidence contracts/common.md#clear-and-simple-design One loop and one private helper that answers whether a slot is a string constant.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A slot that is not a string constant is written as a type slot and never assumed to be text.
// @evidence contracts/common.md#meaningful-documentation The doc states the two slot forms and the escaping.
func (obj *MetadataTemplate) GetBaseName() string {
  parts := make([]string, 0, len(obj.Row))
  for _, child := range obj.Row {
    if text, ok := metadataTemplate_constantText(child); ok {
      parts = append(parts, text)
    } else {
      parts = append(parts, "${"+child.GetName()+"}")
    }
  }
  return "`" + strings.ReplaceAll(strings.Join(parts, ""), "`", "\\`") + "`"
}

// ToJSON returns the JSON form of the template with a copy of the tags.
//
// @evidence contracts/common.md#principled-implementation Every row schema is converted by its own ToJSON.
// @evidence contracts/common.md#clear-and-simple-design One loop.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The matrix is copied.
// @evidence contracts/common.md#meaningful-documentation The doc states the copy.
func (obj *MetadataTemplate) ToJSON() IMetadataSchema_ITemplate {
  row := make([]*IMetadataSchema, 0, len(obj.Row))
  for _, elem := range obj.Row {
    row = append(row, elem.ToJSON())
  }
  return IMetadataSchema_ITemplate{
    Row:  row,
    Tags: cloneTagMatrix(obj.Tags),
  }
}

func metadataTemplate_getName(template *MetadataTemplate) string {
  return taggedName(template.GetBaseName(), template.Tags)
}

// metadataTemplate_constantText returns the text of a slot that is exactly one
// string constant, which is spelled in the template as plain text.
func metadataTemplate_constantText(child *MetadataSchema) (string, bool) {
  if child.IsConstant() == false || child.Size() != 1 {
    return "", false
  }
  text, ok := child.Constants[0].Values[0].Value.(string)
  return text, ok
}
