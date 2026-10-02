package metadata

import (
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// Iterate_metadata_atomic records boolean, number, bigint and string types and
// their literal forms as one atomic of the matching kind.
//
// @evidence contracts/common.md#principled-implementation The checker's type flags for boolean-like, number-like, bigint-like and string-like types, and their literal forms, select one atomic kind from a fixed table, and the atomic is added once per kind.
// @evidence contracts/common.md#clear-and-simple-design One function over a four-row table.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The table is the language's primitive categories.
// @evidence contracts/common.md#meaningful-documentation The doc states the four kinds.
func Iterate_metadata_atomic(props struct {
  Metadata *schemametadata.MetadataSchema
  Type     *nativechecker.Type
}) bool {
  filter := func(flag nativechecker.TypeFlags) bool {
    return props.Type.Flags()&flag != 0
  }
  for _, info := range iterate_metadata_atomic_atomcs {
    if filter(info.atomic) || filter(info.literal) {
      found := false
      for _, atomic := range props.Metadata.Atomics {
        if atomic.Type == info.name {
          found = true
          break
        }
      }
      if found == false {
        props.Metadata.Atomics = append(props.Metadata.Atomics, schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{
          Type: info.name,
          Tags: [][]schemametadata.IMetadataTypeTag{},
        }))
      }
      return true
    }
  }
  return false
}

type iterate_metadata_atomic_info struct {
  name    string
  atomic  nativechecker.TypeFlags
  literal nativechecker.TypeFlags
}

var iterate_metadata_atomic_atomcs = []iterate_metadata_atomic_info{
  {
    name:    "boolean",
    atomic:  nativechecker.TypeFlagsBooleanLike,
    literal: nativechecker.TypeFlagsBooleanLiteral,
  },
  {
    name:    "number",
    atomic:  nativechecker.TypeFlagsNumberLike,
    literal: nativechecker.TypeFlagsNumberLiteral,
  },
  {
    name:    "bigint",
    atomic:  nativechecker.TypeFlagsBigIntLike,
    literal: nativechecker.TypeFlagsBigIntLiteral,
  },
  {
    name:    "string",
    atomic:  nativechecker.TypeFlagsStringLike,
    literal: nativechecker.TypeFlagsStringLiteral,
  },
}
