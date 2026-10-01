package metadata

import (
  "reflect"
  "strconv"
)

// IMetadataTypeTag_getSequence extracts the protobuf field number carried by a
// `Sequence<N>` type tag, or nil when the tag is not a sequence tag.
//
// typescript-go materializes the tag's numeric literal as its internal
// `jsnum.Number` — a defined float64 type living under `typescript-go/internal`
// that typia cannot import — so the conversion must go through reflection
// kinds instead of a closed type switch.
//
// @evidence contracts/common.md#principled-implementation A sequence tag stores its field number in the schema map under the key x-protobuf-sequence, and the number may arrive as a type typescript-go does not export, so it is read through reflection kinds and a missing, non-sequence or unreadable value gives nil, which the callers treat as no assigned number.
// @evidence contracts/common.md#clear-and-simple-design One guard sequence over the tag kind, the schema map and the key, then a call to the converter.
// @evidence contracts/common.md#prohibited-implementation-shortcuts There is no closed type switch to extend for each new numeric type.
// @evidence contracts/common.md#meaningful-documentation The doc explains why reflection is needed and what nil means.
func IMetadataTypeTag_getSequence(tag IMetadataTypeTag) *int {
  if tag.Kind != "sequence" {
    return nil
  }
  schema, ok := tag.Schema.(map[string]any)
  if ok == false {
    return nil
  }
  raw, ok := schema["x-protobuf-sequence"]
  if ok == false {
    return nil
  }
  if value, ok := IMetadataTypeTag_toInt(raw); ok {
    return &value
  }
  return nil
}

// IMetadataTypeTag_toInt coerces a tag schema value to an int, accepting any
// defined integer, float, or numeric-string type by reflection kind. A float is
// truncated toward zero and no range is checked; any other kind reports false.
//
// @evidence contracts/common.md#principled-implementation Any integer or unsigned kind converts directly, a float kind is truncated toward zero, and a string must parse as a base-10 integer; every other kind reports failure, so an unreadable value never becomes a field number by accident.
// @evidence contracts/common.md#clear-and-simple-design One switch over reflection kinds.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Truncation of a float and the lack of range checks are limits that the doc states, not hidden behavior.
// @evidence contracts/common.md#meaningful-documentation The doc states the accepted kinds and the failure result.
func IMetadataTypeTag_toInt(value any) (int, bool) {
  if value == nil {
    return 0, false
  }
  rv := reflect.ValueOf(value)
  switch rv.Kind() {
  case reflect.Int, reflect.Int8, reflect.Int16, reflect.Int32, reflect.Int64:
    return int(rv.Int()), true
  case reflect.Uint, reflect.Uint8, reflect.Uint16, reflect.Uint32, reflect.Uint64:
    return int(rv.Uint()), true
  case reflect.Float32, reflect.Float64:
    return int(rv.Float()), true
  case reflect.String:
    parsed, err := strconv.Atoi(rv.String())
    return parsed, err == nil
  default:
    return 0, false
  }
}
