package iterate

import nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"

type JsonSchema map[string]any

func json_schema_plugin(props struct {
  schema JsonSchema
  tags   [][]nativemetadata.IMetadataTypeTag
}) []JsonSchema {
  plugins := make([][]nativemetadata.IMetadataTypeTag, 0)
  for _, row := range props.tags {
    filtered := make([]nativemetadata.IMetadataTypeTag, 0)
    for _, tag := range row {
      if tag.Schema != nil {
        filtered = append(filtered, tag)
      }
    }
    if len(filtered) != 0 {
      plugins = append(plugins, filtered)
    }
  }
  if len(plugins) == 0 {
    return []JsonSchema{props.schema}
  }
  output := make([]JsonSchema, 0, len(plugins))
  for _, row := range plugins {
    base := cloneJsonSchema(props.schema)
    for _, tag := range row {
      if schema, ok := tag.Schema.(map[string]any); ok {
        for key, value := range schema {
          json_schema_plugin_merge(base, key, value)
        }
      }
    }
    json_schema_plugin_prune(base)
    output = append(output, base)
  }
  return output
}

// json_schema_plugin_prune drops a bound the other spelling already subsumes.
//
// An inclusive and an exclusive bound on the same side are different keys, so
// the merge above never sees them collide -- `Type<"uint32"> &
// ExclusiveMaximum<150>` would publish `maximum: 4294967295` beside
// `exclusiveMaximum: 150`. Both are true, and the pair is still correct, but the
// looser one says nothing a reader or a validator can use, so only the binding
// bound survives.
//
// Equal values keep the exclusive one, which is the narrower of the two.
func json_schema_plugin_prune(base JsonSchema) {
  json_schema_plugin_prune_side(base, "minimum", "exclusiveMinimum", true)
  json_schema_plugin_prune_side(base, "maximum", "exclusiveMaximum", false)
}

func json_schema_plugin_prune_side(
  base JsonSchema,
  inclusive string,
  exclusive string,
  lower bool,
) {
  incValue, incOk := json_schema_numeric_float(base[inclusive])
  excValue, excOk := json_schema_numeric_float(base[exclusive])
  if incOk == false || excOk == false {
    return
  }
  tighter := excValue <= incValue
  if lower {
    tighter = excValue >= incValue
  }
  if tighter {
    delete(base, inclusive)
    return
  }
  delete(base, exclusive)
}

// json_schema_plugin_merge folds one tag's contribution into the row's schema.
//
// A numeric bound is intersected rather than overwritten. The tags in a row come
// from one intersection type, so two of them constraining the same axis both
// apply, and the narrower one is what the type means. Overwriting made the
// result depend on tag order, which is why the `Type<...>` widths could not be
// published before: `number & Type<"int32"> & Maximum<10>` would have emitted
// whichever `maximum` came last (#2351).
//
// Every other keyword keeps the last writer. Duplicates of one kind are already
// a compile error through `exclusive`, so the only tags that can meet on a key
// are a width and a range, and those are exactly the numeric bounds.
func json_schema_plugin_merge(base JsonSchema, key string, value any) {
  previous, exists := base[key]
  if exists == false {
    base[key] = value
    return
  }
  switch key {
  case "minimum", "exclusiveMinimum":
    base[key] = json_schema_plugin_tighter(previous, value, true)
  case "maximum", "exclusiveMaximum":
    base[key] = json_schema_plugin_tighter(previous, value, false)
  default:
    base[key] = value
  }
}

// Pick the narrower of two bounds. An unreadable value yields the incoming one,
// preserving the previous overwrite behaviour rather than inventing a bound.
func json_schema_plugin_tighter(previous any, next any, lower bool) any {
  left, okLeft := json_schema_numeric_float(previous)
  right, okRight := json_schema_numeric_float(next)
  if okLeft == false || okRight == false {
    return next
  }
  if lower {
    if left > right {
      return previous
    }
    return next
  }
  if left < right {
    return previous
  }
  return next
}

func cloneJsonSchema(input JsonSchema) JsonSchema {
  output := JsonSchema{}
  for key, value := range input {
    output[key] = value
  }
  return output
}
