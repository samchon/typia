package metadata

import (
  nativechecker "github.com/microsoft/typescript-go/shim/checker"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// Iterate_metadata_coalesce handles the types that set a flag instead of a
// bucket: unknown and any set Any, null sets Nullable, and undefined, never and
// void make the schema not required.
//
// @evidence contracts/common.md#principled-implementation Types that add no bucket are expressed as flags: unknown and any make the schema Any, null makes it Nullable, and undefined, never and void clear Required, so the schema's union members only describe real values.
// @evidence contracts/common.md#clear-and-simple-design One function of three flag tests.
// @evidence contracts/common.md#prohibited-implementation-shortcuts The tests are the checker's flags.
// @evidence contracts/common.md#meaningful-documentation The doc states the three flag effects.
func Iterate_metadata_coalesce(props struct {
  Metadata *schemametadata.MetadataSchema
  Type     *nativechecker.Type
}) bool {
  filter := func(flag nativechecker.TypeFlags) bool {
    return props.Type.Flags()&flag != 0
  }
  if filter(nativechecker.TypeFlagsUnknown) || filter(nativechecker.TypeFlagsAny) {
    props.Metadata.Any = true
    return true
  }
  if filter(nativechecker.TypeFlagsNull) {
    props.Metadata.Nullable = true
    return true
  }
  if filter(nativechecker.TypeFlagsUndefined) ||
    filter(nativechecker.TypeFlagsNever) ||
    filter(nativechecker.TypeFlagsVoid) {
    props.Metadata.Required = false
    return true
  }
  return false
}
