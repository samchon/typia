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
// defined integer, float, or numeric-string type by reflection kind.
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
