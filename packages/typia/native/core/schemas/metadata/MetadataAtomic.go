package metadata

import "strings"

// IMetadataSchema_IAtomic is the JSON form of an atomic: its primitive type name
// and the tag rows.
//
// @evidence contracts/common.md#principled-implementation An atomic has no shared type, so its JSON form is the type name and the tags themselves.
// @evidence contracts/common.md#clear-and-simple-design Two fields.
// @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
// @evidence contracts/common.md#meaningful-documentation The doc states what the record holds and which function reads or writes it.
type IMetadataSchema_IAtomic struct {
  Type string
  Tags [][]IMetadataTypeTag
}

// MetadataAtomic is a primitive type (`boolean`, `number`, `bigint` or `string`)
// with the rows of type tags that constrain it. Each row is one alternative and
// the tags inside a row apply together. The name is computed once and cached, so
// the tags must be final before the first GetName.
//
// @evidence contracts/common.md#principled-implementation A primitive has no shared declaration, so the record holds the type and the tag alternatives directly, and the name is cached because it is compared and used as a key often.
// @evidence contracts/common.md#clear-and-simple-design Two fields and one cache.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The cache limitation is stated, not hidden.
// @evidence contracts/common.md#meaningful-documentation The doc states the row meaning and the cache limitation.
type MetadataAtomic struct {
  Type  string
  Tags  [][]IMetadataTypeTag
  name_ string
}

// MetadataAtomic_create builds an atomic from props and copies the tag matrix, so
// later edits of the caller's rows do not reach it.
//
// @evidence contracts/common.md#principled-implementation The comment-tag step rewrites atomic tag rows in place, so each atomic must own its rows, as every other tagged member does.
// @evidence contracts/common.md#clear-and-simple-design One constructor using cloneTagMatrix.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Sharing the caller's matrix was the defect this ownership removes, and a unit test pins it.
// @evidence contracts/common.md#meaningful-documentation The doc states that the matrix is copied.
func MetadataAtomic_create(props MetadataAtomic) *MetadataAtomic {
  return &MetadataAtomic{
    Type: props.Type,
    Tags: cloneTagMatrix(props.Tags),
  }
}

// MetadataAtomic_from builds an atomic from its JSON form.
//
// @evidence contracts/common.md#principled-implementation It delegates to the constructor so the copying rule is in one place.
// @evidence contracts/common.md#clear-and-simple-design One call.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Nothing is added or dropped.
// @evidence contracts/common.md#meaningful-documentation The doc states the source.
func MetadataAtomic_from(json IMetadataSchema_IAtomic) *MetadataAtomic {
  return MetadataAtomic_create(MetadataAtomic{
    Type: json.Type,
    Tags: json.Tags,
  })
}

// GetName returns the type, or `(type & tag)` for one row, or
// `(type & (row | row))` for several, with the tags of a row joined by `&`.
//
// @evidence contracts/common.md#principled-implementation The name is the type intersected with the tag alternatives, which is how the tagged type is written in TypeScript, and it is cached after the first call.
// @evidence contracts/common.md#clear-and-simple-design A cache check and one private helper that formats the rows.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The cache limitation is documented on the record.
// @evidence contracts/common.md#meaningful-documentation The doc gives the output forms.
func (obj *MetadataAtomic) GetName() string {
  if obj.name_ == "" {
    obj.name_ = metadataAtomic_getName(obj)
  }
  return obj.name_
}

// ToJSON returns the JSON form of the atomic with a copy of the tag matrix.
//
// @evidence contracts/common.md#principled-implementation The result is a projection that the caller may edit without changing the atomic.
// @evidence contracts/common.md#clear-and-simple-design One record construction.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The matrix is copied.
// @evidence contracts/common.md#meaningful-documentation The doc states that the tags are copied.
func (obj *MetadataAtomic) ToJSON() IMetadataSchema_IAtomic {
  return IMetadataSchema_IAtomic{
    Type: obj.Type,
    Tags: cloneTagMatrix(obj.Tags),
  }
}

func metadataAtomic_getName(obj *MetadataAtomic) string {
  if len(obj.Tags) == 0 {
    return obj.Type
  }
  if len(obj.Tags) == 1 {
    row := []string{obj.Type}
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
  return "(" + obj.Type + " & (" + strings.Join(rows, " | ") + "))"
}
