package iterate

import (
  "reflect"
  "strconv"

  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// Json_schema_numeric_width_clip narrows each exported numeric schema to the
// range its `Type<...>` tag enforces.
//
// The width never reaches the schema. A `Type<...>` tag contributes only
// `{"type": "integer"}`, or `{"type": "integer", "minimum": 0}` for an unsigned
// one, while the range itself lives in the tag's `Validate` -- the runtime
// check. So a declaration whose `Minimum` / `Maximum` reach past the width
// produced a schema wider than the validator, and `_randomInteger`, which reads
// only the schema, drew values the generated validator rejects. Measured before
// this clip: `number & Type<"int32"> & Minimum<-1e12> & Maximum<1e12>` failed its
// own `is` on 499 of 500 draws, and `Type<"uint8"> & Maximum<10000>` on 486
// (#2348).
//
// The clip belongs here rather than in the tag's `schema`, because the emitted
// JSON Schema is a separate question: `2n ** 64n - 1n` has no exact JSON number,
// so publishing these bounds is a dialect decision tracked on its own. Random
// generation has no such obstacle -- it needs a window it can draw from, and the
// float64 rounding at the 64-bit maxima is harmless there, since the largest
// draw sits 2048 below the rounded bound.
//
// A declared window outside the width entirely leaves `minimum > maximum`, which
// `_randomInteger` and `_randomNumber` already reject by throwing. That is the
// established answer for an unsatisfiable range, and it stays.
func Json_schema_numeric_width_clip(
  atomic *nativemetadata.MetadataAtomic,
  schemas []JsonSchema,
) []JsonSchema {
  widths := json_schema_numeric_widths(atomic, len(schemas))
  for i, schema := range schemas {
    width, ok := widths[i]
    if ok == false {
      continue
    }
    json_schema_numeric_width_apply(schema, width)
  }
  return schemas
}

type json_schema_numeric_width struct {
  minimum float64
  maximum float64
}

// The inclusive range each `Type<...>` value accepts, as float64.
//
// The 64-bit maxima are not representable: `2**63 - 1` and `2**64 - 1` both
// round up to their power of two. That is the same rounding `_isTypeInt64` and
// `_isTypeUint64` carry, so the clip agrees with the check it exists to satisfy,
// and a draw cannot reach the rounded bound anyway.
var json_schema_numeric_WIDTHS = map[string]json_schema_numeric_width{
  "int8":   {minimum: -128, maximum: 127},
  "uint8":  {minimum: 0, maximum: 255},
  "int16":  {minimum: -32768, maximum: 32767},
  "uint16": {minimum: 0, maximum: 65535},
  "int32":  {minimum: -2147483648, maximum: 2147483647},
  "uint32": {minimum: 0, maximum: 4294967295},
  "int64":  {minimum: -9223372036854775808, maximum: 9223372036854775807},
  "uint64": {minimum: 0, maximum: 18446744073709551615},
  "float":  {minimum: -3.4028235e38, maximum: 3.4028235e38},
}

// json_schema_numeric_widths reports the width for each exported schema, keyed
// by its index.
//
// The alignment has to mirror `json_schema_plugin`: it emits one schema per tag
// row that carries at least one tag with a `Schema`, so a row contributing
// nothing is absent from the output and the indices are not the atomic's row
// indices. When no row contributes -- which is what a `bigint & Type<"int64">`
// does, since its tag publishes no schema at all -- the exporter emits the bare
// base schema, and the width of a single type tag still applies to it.
func json_schema_numeric_widths(
  atomic *nativemetadata.MetadataAtomic,
  count int,
) map[int]json_schema_numeric_width {
  output := map[int]json_schema_numeric_width{}
  index := 0
  contributing := false
  for _, row := range atomic.Tags {
    schemad := false
    for _, tag := range row {
      if tag.Schema != nil {
        schemad = true
      }
    }
    if schemad == false {
      continue
    }
    contributing = true
    if width, ok := json_schema_numeric_row_width(row); ok {
      output[index] = width
    }
    index++
  }
  if contributing {
    return output
  }
  // No row reached the exporter, so it emitted exactly one base schema. Apply a
  // width only when the rows agree on one, so an ambiguous union stays untouched
  // rather than being clipped to an arbitrary member.
  var single *json_schema_numeric_width
  for _, row := range atomic.Tags {
    width, ok := json_schema_numeric_row_width(row)
    if ok == false {
      continue
    }
    if single != nil && (single.minimum != width.minimum || single.maximum != width.maximum) {
      return output
    }
    copied := width
    single = &copied
  }
  if single != nil && count == 1 {
    output[0] = *single
  }
  return output
}

func json_schema_numeric_row_width(
  row []nativemetadata.IMetadataTypeTag,
) (json_schema_numeric_width, bool) {
  for _, tag := range row {
    if tag.Kind != "type" {
      continue
    }
    name, ok := tag.Value.(string)
    if ok == false {
      continue
    }
    if width, found := json_schema_numeric_WIDTHS[name]; found {
      return width, true
    }
  }
  return json_schema_numeric_width{}, false
}

// json_schema_numeric_width_apply narrows one schema in place.
//
// An exclusive bound is left alone where the width is not tighter, because
// replacing it with an inclusive one would widen the window by one representable
// step. Where the width *is* tighter, the exclusive keyword is dropped in favour
// of the inclusive width bound, since the width already excludes everything
// beyond it.
func json_schema_numeric_width_apply(
  schema JsonSchema,
  width json_schema_numeric_width,
) {
  lower, state := json_schema_numeric_bound(schema, "minimum", "exclusiveMinimum")
  if state == json_schema_numeric_absent || (state == json_schema_numeric_read && lower < width.minimum) {
    delete(schema, "exclusiveMinimum")
    schema["minimum"] = width.minimum
  }
  upper, state := json_schema_numeric_bound(schema, "maximum", "exclusiveMaximum")
  if state == json_schema_numeric_absent || (state == json_schema_numeric_read && upper > width.maximum) {
    delete(schema, "exclusiveMaximum")
    schema["maximum"] = width.maximum
  }
}

type json_schema_numeric_state int

const (
  // No bound is declared, so the width is the only one there is.
  json_schema_numeric_absent json_schema_numeric_state = iota
  // A bound is declared and was read, so the two can be compared.
  json_schema_numeric_read
  // A bound is declared in a representation this reader does not recognise.
  // Leaving it alone is the safe answer: replacing it with the width would
  // widen a window the author narrowed, which is the opposite of the point.
  json_schema_numeric_opaque
)

func json_schema_numeric_bound(
  schema JsonSchema,
  inclusive string,
  exclusive string,
) (float64, json_schema_numeric_state) {
  declared := false
  for _, key := range []string{inclusive, exclusive} {
    raw, ok := schema[key]
    if ok == false || raw == nil {
      continue
    }
    declared = true
    if value, parsed := json_schema_numeric_float(raw); parsed {
      return value, json_schema_numeric_read
    }
  }
  if declared {
    return 0, json_schema_numeric_opaque
  }
  return 0, json_schema_numeric_absent
}

// Read any numeric spelling a tag schema can carry. The values arrive as `any`
// from the metadata, and the concrete kind depends on how the literal was
// parsed, so this mirrors `randomProgrammer_is_positive_numeric` in accepting
// every integer, float, and numeric string rather than a fixed set of types.
func json_schema_numeric_float(value any) (float64, bool) {
  if value == nil {
    return 0, false
  }
  rv := reflect.ValueOf(value)
  switch rv.Kind() {
  case reflect.Int, reflect.Int8, reflect.Int16, reflect.Int32, reflect.Int64:
    return float64(rv.Int()), true
  case reflect.Uint, reflect.Uint8, reflect.Uint16, reflect.Uint32, reflect.Uint64:
    return float64(rv.Uint()), true
  case reflect.Float32, reflect.Float64:
    return rv.Float(), true
  case reflect.String:
    parsed, err := strconv.ParseFloat(rv.String(), 64)
    return parsed, err == nil
  default:
    return 0, false
  }
}
