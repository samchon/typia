package metadata

import (
  "encoding/json"
  "fmt"
  "slices"
  "strings"
)

// IJsDocTagInfo is one JSDoc tag: its name and the pieces of its text.
//
// @evidence contracts/common.md#principled-implementation The tag keeps the text as typed pieces because the compiler reports a tag that way and links need their kind.
// @evidence contracts/common.md#clear-and-simple-design Two fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc describes the tag and its text pieces, with each public field documented separately.
type IJsDocTagInfo struct {
  // Name is the JSDoc tag name without its leading at sign.
  Name string

  // Text retains the compiler's ordered text and link pieces.
  Text []IJsDocTagInfo_IText
}

// IJsDocTagInfo_IText is one piece of a JSDoc tag's text with its kind.
//
// @evidence contracts/common.md#principled-implementation The kind distinguishes plain text from names and links.
// @evidence contracts/common.md#clear-and-simple-design Two fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc describes a text piece and its kind, with each public field documented separately.
type IJsDocTagInfo_IText struct {
  // Text is the literal text or link name supplied by the compiler.
  Text string

  // Kind identifies plain text, a link name or another compiler text-piece kind.
  Kind string
}

// IMetadataSchema_IConstant_IValue is the JSON form of one literal value: the
// value, its tag rows, its description and its JSDoc tags.
//
// @evidence contracts/common.md#principled-implementation A literal carries its own documentation, so the JSON form keeps the documentation with the value.
// @evidence contracts/common.md#clear-and-simple-design Four fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc describes the serialization record and each public field.
type IMetadataSchema_IConstant_IValue struct {
  // Value is the literal's scalar value or comparable bigint representation.
  Value any

  // Tags contains alternative rows, each combining its tags by intersection.
  Tags [][]IMetadataTypeTag

  // Description is the declaration's documentation, or nil when absent.
  Description *string

  // JsDocTags retains the declaration's ordered JSDoc tags.
  JsDocTags []IJsDocTagInfo
}

// MetadataConstantValue is one literal value with its tag rows and
// documentation. Duplicated is analysis-only and is never serialized. The name
// is cached, so the value and tags must be final before the first GetName.
//
// @evidence contracts/common.md#principled-implementation A literal needs its tags and the documentation of its declaration, for example an enum member, so those are stored on the value.
// @evidence contracts/common.md#clear-and-simple-design Five fields and one cache.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The cache limitation and the analysis-only flag are stated.
// @evidence contracts/common.md#meaningful-documentation The doc states the flag and the cache limitation.
type MetadataConstantValue struct {
  // Value is the literal's scalar value or comparable bigint representation.
  Value any

  // Tags contains alternative rows, each combining its tags by intersection.
  Tags [][]IMetadataTypeTag

  // Description is the declaration's documentation, or nil when absent.
  Description *string

  // JsDocTags retains the declaration's ordered JSDoc tags.
  JsDocTags []IJsDocTagInfo

  // Duplicated marks that another declaration with the same value was folded
  // into this one. It is analysis-only: it is never serialized.
  Duplicated bool
  name_      string
}

// MetadataConstantValue_create builds a value from props and copies the tag
// matrix rows and the outer JSDoc tag slice. Replacing their elements does not
// affect the source slices; nested tag payloads, JSDoc text slices, the value
// and description pointer remain shared.
//
// @evidence contracts/common.md#principled-implementation cloneTagMatrix copies the matrix and its rows, while slices.Clone copies the outer JSDoc slice. Element replacement is isolated at those levels; nested payloads, text slices, Value and Description retain their supplied references.
// @evidence contracts/common.md#clear-and-simple-design One constructor using cloneTagMatrix and slices.Clone, which keep nil as nil.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A unit test pins that the tag matrix is not shared.
// @evidence contracts/common.md#meaningful-documentation The doc states what is copied.
func MetadataConstantValue_create(props MetadataConstantValue) *MetadataConstantValue {
  return &MetadataConstantValue{
    Value:       props.Value,
    Tags:        cloneTagMatrix(props.Tags),
    Description: props.Description,
    JsDocTags:   slices.Clone(props.JsDocTags),
    Duplicated:  props.Duplicated,
  }
}

// GetName returns the literal as written (a string is JSON-quoted) and, with
// tags, `(literal & (row | row))`, with the tags of a row joined by `&`.
//
// @evidence contracts/common.md#principled-implementation The name is the literal intersected with its tag alternatives, cached after the first call.
// @evidence contracts/common.md#clear-and-simple-design A cache check and a private formatter.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The cache limitation is documented on the record.
// @evidence contracts/common.md#meaningful-documentation The doc gives the output forms.
func (obj *MetadataConstantValue) GetName() string {
  if obj.name_ == "" {
    obj.name_ = metadataConstantValue_getName(obj)
  }
  return obj.name_
}

// ToJSON returns the JSON form of the value with copies of the tag matrix and
// the JSDoc tag slice. Duplicated is not included.
//
// @evidence contracts/common.md#principled-implementation The result omits the analysis-only flag and copies tag matrix rows and the outer JSDoc slice. Nested payloads and text slices, Value and Description remain shared, so this is not a deep-copy contract.
// @evidence contracts/common.md#clear-and-simple-design One record construction.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The slices are copied.
// @evidence contracts/common.md#meaningful-documentation The doc states the copies and the omitted flag.
func (obj *MetadataConstantValue) ToJSON() IMetadataSchema_IConstant_IValue {
  return IMetadataSchema_IConstant_IValue{
    Value:       obj.Value,
    Tags:        cloneTagMatrix(obj.Tags),
    Description: obj.Description,
    JsDocTags:   slices.Clone(obj.JsDocTags),
  }
}

func metadataConstantValue_getName(obj *MetadataConstantValue) string {
  base := metadataConstantValue_base(obj.Value)
  if len(obj.Tags) == 0 {
    return base
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
  return "(" + base + " & (" + strings.Join(rows, " | ") + "))"
}

func metadataConstantValue_base(value any) string {
  if str, ok := value.(string); ok {
    data, err := json.Marshal(str)
    if err == nil {
      return string(data)
    }
  }
  return fmt.Sprint(value)
}
