package metadata

import (
  "reflect"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// Emend_metadata_atomics removes constants that an atomic of the same type
// already covers and folds a boolean constant of both values into one boolean.
//
// @evidence contracts/common.md#principled-implementation A constant of a type that an atomic of the same type already covers is redundant and is removed, and a boolean constant set with both values is replaced by a boolean atomic, keeping both alternatives if the two values carry different tags; this normalizes unions such as `string | "a"` and `true | false`.
// @evidence contracts/common.md#clear-and-simple-design One function over the metadata's constants and atomics, applied by the explorer to the schema and its escaped halves.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The rules follow set inclusion of values and no consumer type is involved.
// @evidence contracts/common.md#meaningful-documentation The doc states both rewrites.
func Emend_metadata_atomics(meta *schemametadata.MetadataSchema) {
  for _, atomic := range meta.Atomics {
    if is_not_pure(atomic) {
      continue
    }
    index := -1
    for i, constant := range meta.Constants {
      if constant.Type == atomic.Type {
        index = i
        break
      }
    }
    if index != -1 {
      meta.Constants = append(meta.Constants[:index], meta.Constants[index+1:]...)
    }
  }

  index := -1
  for i, constant := range meta.Constants {
    if constant.Type == "boolean" {
      index = i
      break
    }
  }
  if index != -1 && len(meta.Constants[index].Values) == 2 {
    temp := meta.Constants[index]
    meta.Constants = append(meta.Constants[:index], meta.Constants[index+1:]...)
    found := false
    for _, atomic := range meta.Atomics {
      if atomic.Type == "boolean" {
        found = true
        break
      }
    }
    if found == false {
      tags := [][]schemametadata.IMetadataTypeTag{}
      if len(temp.Values) != 0 && temp.Values[0] != nil {
        tags = temp.Values[0].Tags
      }
      // `true` and `false` fold into one boolean; when they carry different
      // tags (`(true & A) | (false & B)`), keep both alternatives instead of
      // silently dropping the second
      if len(temp.Values) == 2 && temp.Values[0] != nil && temp.Values[1] != nil &&
        reflect.DeepEqual(temp.Values[0].Tags, temp.Values[1].Tags) == false {
        tags = [][]schemametadata.IMetadataTypeTag{}
        for _, value := range temp.Values {
          // a literal without tags is an alternative that states nothing
          if len(value.Tags) == 0 {
            tags = append(tags, []schemametadata.IMetadataTypeTag{})
          }
          tags = append(tags, value.Tags...)
        }
      }
      meta.Atomics = append(meta.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{
        Type: "boolean",
        Tags: tags,
      }))
    }
  }

  if len(meta.Templates) != 0 {
    var atomic *schemametadata.MetadataAtomic
    for _, candidate := range meta.Atomics {
      if candidate.Type == "string" {
        atomic = candidate
        break
      }
    }
    if atomic != nil && is_not_pure(atomic) == false {
      meta.Templates = meta.Templates[:0]
    }
  }
}

func is_not_pure(atomic *schemametadata.MetadataAtomic) bool {
  if len(atomic.Tags) == 0 {
    return false
  }
  for _, row := range atomic.Tags {
    if len(row) == 0 {
      return false
    }
    for _, tag := range row {
      if tag.Validate == "" {
        return false
      }
    }
  }
  return true
}
