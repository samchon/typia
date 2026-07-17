package iterate

import (
  "reflect"
  "strings"

  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
)

// OpenApiV3Downgrader rewrites an emended (OpenAPI 3.1) schema collection into
// the OpenAPI 3.0 dialect. `json.schema`, `json.schemas`, and `json.application`
// all build their document through json_schema_station, which speaks 3.1 only:
// it emits `const`, `prefixItems`, and a `{"type": "null"}` union member for a
// nullable type. None of those exist in 3.0, which spells the same three things
// as `enum`, `items` + `minItems`/`maxItems`, and the `nullable` flag.
//
// This is a port of `@typia/utils`' OpenApiV3Downgrader, which the TypeScript
// implementation of JsonSchemasProgrammer called through
// `OpenApiConverter.downgradeComponents` / `downgradeSchema` before the Go port
// replaced it. The Go transform cannot call into TypeScript, so the two are
// necessarily separate implementations of one contract; the port is kept
// deliberately literal so the correspondence stays reviewable, and
// `tests/test-typia-schema/src/features/json.schemas/test_json_schemas_v3_0_parity_converter.ts`
// pins the two owners against each other on every emitted construct.
//
// Only the components-and-schemas surface is ported. The TypeScript owner also
// downgrades paths, operations, and security schemes, none of which typia emits.
type OpenApiV3Downgrader_IComponentsCollection struct {
  // Original is the emended 3.1 collection, read to resolve `$ref` targets
  // while deciding nullability. It is never mutated.
  Original *OpenApi_IComponents
  // Downgraded accumulates the 3.0 result, including the `X.Nullable`
  // companion schemas that a nullable reference forces into existence.
  Downgraded *OpenApi_IComponents
}

// OpenApiV3Downgrader_downgrade_components downgrades every schema of the
// collection, preserving the discovery order recorded in Order. A schema is
// downgraded before its own key is registered, so the `X.Nullable` companions
// that its references create land ahead of it exactly as the TypeScript owner's
// argument-evaluation order places them.
func OpenApiV3Downgrader_downgrade_components(input *OpenApi_IComponents) *OpenApiV3Downgrader_IComponentsCollection {
  collection := &OpenApiV3Downgrader_IComponentsCollection{
    Original:   input,
    Downgraded: &OpenApi_IComponents{},
  }
  if input == nil || input.Schemas == nil {
    return collection
  }
  collection.Downgraded.Schemas = map[string]JsonSchema{}
  for _, key := range input.Order {
    value, ok := input.Schemas[key]
    if ok == false {
      continue
    }
    downgraded := OpenApiV3Downgrader_downgrade_schema(collection, value)
    collection.Downgraded.emplaceSchemaKey(key)
    collection.Downgraded.Schemas[key] = downgraded
  }
  return collection
}

// OpenApiV3Downgrader_downgrade_schema rewrites one emended schema into 3.0.
//
// The emended dialect expresses a union as `oneOf` and nullability as a
// `{"type": "null"}` member of it. 3.0 has neither, so the schema is flattened
// into a union of concrete members, the null member is dropped, and the
// surviving members carry `nullable: true` instead. Constants collapse into the
// `enum` of a member of the same primitive type.
func OpenApiV3Downgrader_downgrade_schema(collection *OpenApiV3Downgrader_IComponentsCollection, input JsonSchema) JsonSchema {
  nullable := openApiV3Downgrader_is_nullable(map[string]bool{}, collection.Original, input)
  union := []JsonSchema{}

  var discriminator any
  if openApiV3Downgrader_is_one_of(input) {
    if value, ok := input["discriminator"]; ok && openApiV3Downgrader_is_nil(value) == false {
      discriminator = openApiV3Downgrader_clone_value(value)
    }
  }
  // A nullable union cannot keep its discriminator: 3.0 requires every mapped
  // branch to stay a distinct `oneOf` member, and the null member is gone.
  preserveDiscriminator := discriminator != nil && nullable == false

  var visit func(schema JsonSchema)
  visit = func(schema JsonSchema) {
    if openApiV3Downgrader_is_boolean(schema) {
      union = append(union, JsonSchema{"type": "boolean"})
    } else if openApiV3Downgrader_is_integer(schema) ||
      openApiV3Downgrader_is_number(schema) ||
      openApiV3Downgrader_is_string(schema) ||
      openApiV3Downgrader_is_reference(schema) {
      union = append(union, openApiV3Downgrader_omit_examples(schema))
    } else if openApiV3Downgrader_is_array(schema) {
      next := openApiV3Downgrader_omit_examples(schema)
      next["items"] = OpenApiV3Downgrader_downgrade_schema(
        collection,
        openApiV3Downgrader_schema(schema["items"]),
      )
      union = append(union, next)
    } else if openApiV3Downgrader_is_tuple(schema) {
      union = append(union, openApiV3Downgrader_downgrade_tuple(collection, schema))
    } else if openApiV3Downgrader_is_object(schema) {
      union = append(union, openApiV3Downgrader_downgrade_object(collection, schema))
    } else if openApiV3Downgrader_is_one_of(schema) {
      tracked := openApiV3Downgrader_same(schema, input) && discriminator != nil
      for _, branch := range openApiV3Downgrader_schema_array(schema["oneOf"]) {
        previous := len(union)
        visit(branch)
        // A branch that did not contribute exactly one member (a constant,
        // or a nested union) breaks the one-branch-per-mapping rule the
        // discriminator depends on.
        if tracked && len(union) != previous+1 {
          preserveDiscriminator = false
        }
      }
    }
  }

  insertConstant := func(value any) {
    typeName := openApiV3Downgrader_typeof(value)
    for _, member := range union {
      if member["type"] == typeName {
        enum, _ := member["enum"].([]any)
        member["enum"] = append(enum, value)
        return
      }
    }
    union = append(union, JsonSchema{"type": typeName, "enum": []any{value}})
  }
  visitConstant := func(schema JsonSchema) {
    if openApiV3Downgrader_is_constant(schema) {
      insertConstant(schema["const"])
    } else if openApiV3Downgrader_is_one_of(schema) {
      for _, branch := range openApiV3Downgrader_schema_array(schema["oneOf"]) {
        if openApiV3Downgrader_is_constant(branch) {
          insertConstant(branch["const"])
        }
      }
    }
  }

  visit(input)
  visitConstant(input)

  if nullable {
    for _, member := range union {
      // A reference cannot carry `nullable` in 3.0, because the flag would sit
      // beside `$ref` where 3.0 ignores every sibling key. The target is
      // duplicated as an `X.Nullable` companion schema instead.
      if openApiV3Downgrader_is_reference(member) {
        openApiV3Downgrader_downgrade_nullable_reference(map[string]bool{}, collection, member)
      } else {
        member["nullable"] = true
      }
    }
  }
  if nullable && len(union) == 0 {
    output := JsonSchema{"type": "null"}
    openApiV3Downgrader_apply_attribute(output, input)
    return output
  }

  output := JsonSchema{}
  if len(union) == 0 {
    output["type"] = nil
  } else if len(union) == 1 {
    for key, value := range union[0] {
      output[key] = value
    }
  } else {
    output["oneOf"] = union
    if preserveDiscriminator && discriminator != nil {
      output["discriminator"] = discriminator
    }
  }
  openApiV3Downgrader_apply_attribute(output, input)
  return output
}

// openApiV3Downgrader_downgrade_tuple rewrites `prefixItems` into 3.0's single
// `items` schema. 3.0 cannot type each position, so the positional types
// collapse into one `oneOf` and the arity is pinned by minItems/maxItems, which
// is the closest 3.0 gets to a tuple.
func openApiV3Downgrader_downgrade_tuple(collection *OpenApiV3Downgrader_IComponentsCollection, schema JsonSchema) JsonSchema {
  next := openApiV3Downgrader_omit_examples(schema)
  prefixItems := openApiV3Downgrader_schema_array(schema["prefixItems"])
  additional := schema["additionalItems"]

  var items JsonSchema
  if flag, ok := additional.(bool); ok && flag {
    // `additionalItems: true` admits anything at any position.
    items = JsonSchema{}
  } else {
    elements := []JsonSchema{}
    elements = append(elements, prefixItems...)
    if rest := openApiV3Downgrader_schema(additional); rest != nil {
      elements = append(elements, OpenApiV3Downgrader_downgrade_schema(collection, rest))
    }
    if len(elements) == 0 {
      items = JsonSchema{}
    } else {
      oneOf := make([]JsonSchema, 0, len(elements))
      for _, element := range elements {
        oneOf = append(oneOf, OpenApiV3Downgrader_downgrade_schema(collection, element))
      }
      items = JsonSchema{"oneOf": oneOf}
    }
  }

  next["items"] = items
  next["minItems"] = len(prefixItems)
  if openApiV3Downgrader_truthy(additional) {
    // A rest element leaves the tuple unbounded above.
    delete(next, "maxItems")
  } else {
    next["maxItems"] = len(prefixItems)
  }
  delete(next, "prefixItems")
  delete(next, "additionalItems")
  return next
}

func openApiV3Downgrader_downgrade_object(collection *OpenApiV3Downgrader_IComponentsCollection, schema JsonSchema) JsonSchema {
  next := openApiV3Downgrader_omit_examples(schema)
  if properties, ok := schema["properties"]; ok && openApiV3Downgrader_is_nil(properties) == false {
    next["properties"] = openApiV3Downgrader_map_properties(properties, func(value JsonSchema) JsonSchema {
      return OpenApiV3Downgrader_downgrade_schema(collection, value)
    })
  } else {
    delete(next, "properties")
  }
  if additional, ok := schema["additionalProperties"]; ok && openApiV3Downgrader_is_nil(additional) == false {
    if nested := openApiV3Downgrader_schema(additional); nested != nil {
      next["additionalProperties"] = OpenApiV3Downgrader_downgrade_schema(collection, nested)
    } else {
      next["additionalProperties"] = additional
    }
  } else {
    delete(next, "additionalProperties")
  }
  return next
}

// openApiV3Downgrader_downgrade_nullable_reference redirects a nullable `$ref`
// at an `X.Nullable` companion schema, creating it on first demand.
//
// The companion is registered as an empty placeholder before it is built, so a
// self-referential type resolves against the in-progress entry instead of
// recursing forever.
func openApiV3Downgrader_downgrade_nullable_reference(
  visited map[string]bool,
  collection *OpenApiV3Downgrader_IComponentsCollection,
  schema JsonSchema,
) {
  ref, ok := schema["$ref"].(string)
  if ok == false {
    return
  }
  key := openApiV3Downgrader_ref_key(ref)
  if strings.HasSuffix(key, ".Nullable") {
    return
  }
  var found JsonSchema
  if collection.Original != nil && collection.Original.Schemas != nil {
    found = collection.Original.Schemas[key]
  }
  if found == nil {
    return
  }
  // The target already admits null on its own; the plain reference is enough.
  if openApiV3Downgrader_is_nullable(visited, collection.Original, found) {
    return
  }

  nullableKey := key + ".Nullable"
  if collection.Downgraded.Schemas == nil || collection.Downgraded.Schemas[nullableKey] == nil {
    collection.Downgraded.emplaceSchemaKey(nullableKey)
    collection.Downgraded.Schemas[nullableKey] = JsonSchema{}

    var target JsonSchema
    if openApiV3Downgrader_is_one_of(found) {
      target = openApiV3Downgrader_shallow_clone(found)
      branches := openApiV3Downgrader_schema_array(found["oneOf"])
      appended := make([]JsonSchema, 0, len(branches)+1)
      appended = append(appended, branches...)
      appended = append(appended, JsonSchema{"type": "null"})
      target["oneOf"] = appended
    } else {
      target = JsonSchema{
        "oneOf": []JsonSchema{found, {"type": "null"}},
      }
      for _, attribute := range []string{"title", "description", "example", "examples"} {
        if value, ok := found[attribute]; ok && openApiV3Downgrader_is_nil(value) == false {
          target[attribute] = value
        }
      }
      for attribute, value := range found {
        if strings.HasPrefix(attribute, "x-") && openApiV3Downgrader_is_nil(value) == false {
          target[attribute] = value
        }
      }
    }
    collection.Downgraded.Schemas[nullableKey] = OpenApiV3Downgrader_downgrade_schema(collection, target)
  }
  schema["$ref"] = ref + ".Nullable"
}

// openApiV3Downgrader_apply_attribute copies the dialect-independent annotations
// from the source schema onto the rewritten one. An annotation absent from the
// source is deleted rather than left behind, because the rewritten schema may
// have inherited one from a single flattened union member that the source itself
// does not carry.
func openApiV3Downgrader_apply_attribute(output JsonSchema, input JsonSchema) {
  for _, key := range []string{
    "title",
    "description",
    "deprecated",
    "readOnly",
    "writeOnly",
    "example",
  } {
    if value, ok := input[key]; ok && openApiV3Downgrader_is_nil(value) == false {
      output[key] = value
    } else {
      delete(output, key)
    }
  }
  for key, value := range input {
    if strings.HasPrefix(key, "x-") && openApiV3Downgrader_is_nil(value) == false {
      output[key] = value
    }
  }
}

// openApiV3Downgrader_is_nullable reports whether the schema admits null,
// following `$ref` targets through the emended components. The visited set stops
// a recursive type from looping.
func openApiV3Downgrader_is_nullable(visited map[string]bool, components *OpenApi_IComponents, schema JsonSchema) bool {
  if openApiV3Downgrader_is_null(schema) {
    return true
  }
  if openApiV3Downgrader_is_reference(schema) {
    ref, ok := schema["$ref"].(string)
    if ok == false {
      return false
    }
    if visited[ref] {
      return false
    }
    visited[ref] = true
    if components == nil || components.Schemas == nil {
      return false
    }
    next, ok := components.Schemas[openApiV3Downgrader_ref_key(ref)]
    if ok == false {
      return false
    }
    return openApiV3Downgrader_is_nullable(visited, components, next)
  }
  if openApiV3Downgrader_is_one_of(schema) {
    for _, branch := range openApiV3Downgrader_schema_array(schema["oneOf"]) {
      if openApiV3Downgrader_is_nullable(visited, components, branch) {
        return true
      }
    }
  }
  return false
}

/* -----------------------------------------------------------
  TYPE CHECKERS
----------------------------------------------------------- */

func openApiV3Downgrader_is_null(schema JsonSchema) bool {
  return schema != nil && schema["type"] == "null"
}

func openApiV3Downgrader_is_constant(schema JsonSchema) bool {
  if schema == nil {
    return false
  }
  value, ok := schema["const"]
  return ok && openApiV3Downgrader_is_nil(value) == false
}

func openApiV3Downgrader_is_boolean(schema JsonSchema) bool {
  return schema != nil && schema["type"] == "boolean"
}

func openApiV3Downgrader_is_integer(schema JsonSchema) bool {
  return schema != nil && schema["type"] == "integer"
}

func openApiV3Downgrader_is_number(schema JsonSchema) bool {
  return schema != nil && schema["type"] == "number"
}

func openApiV3Downgrader_is_string(schema JsonSchema) bool {
  return schema != nil && schema["type"] == "string"
}

func openApiV3Downgrader_is_array(schema JsonSchema) bool {
  if schema == nil || schema["type"] != "array" {
    return false
  }
  value, ok := schema["items"]
  return ok && openApiV3Downgrader_is_nil(value) == false
}

func openApiV3Downgrader_is_tuple(schema JsonSchema) bool {
  if schema == nil || schema["type"] != "array" {
    return false
  }
  value, ok := schema["prefixItems"]
  return ok && openApiV3Downgrader_is_nil(value) == false
}

func openApiV3Downgrader_is_object(schema JsonSchema) bool {
  return schema != nil && schema["type"] == "object"
}

func openApiV3Downgrader_is_reference(schema JsonSchema) bool {
  if schema == nil {
    return false
  }
  value, ok := schema["$ref"]
  return ok && openApiV3Downgrader_is_nil(value) == false
}

func openApiV3Downgrader_is_one_of(schema JsonSchema) bool {
  if schema == nil {
    return false
  }
  value, ok := schema["oneOf"]
  return ok && openApiV3Downgrader_is_nil(value) == false
}

/* -----------------------------------------------------------
  UTILITIES
----------------------------------------------------------- */

// openApiV3Downgrader_omit_examples shallow-copies the schema without
// `examples`, which 3.0 does not define. The copy is what keeps the rewritten
// members from mutating the emended input.
func openApiV3Downgrader_omit_examples(schema JsonSchema) JsonSchema {
  output := JsonSchema{}
  for key, value := range schema {
    if key == "examples" {
      continue
    }
    output[key] = value
  }
  return output
}

// openApiV3Downgrader_shallow_clone copies a schema's own keys, leaving nested
// values shared. It stands in for the object spread the TypeScript owner uses
// when it rebuilds a union with an extra null member.
func openApiV3Downgrader_shallow_clone(schema JsonSchema) JsonSchema {
  output := JsonSchema{}
  for key, value := range schema {
    output[key] = value
  }
  return output
}

// openApiV3Downgrader_map_properties rewrites each property schema while keeping
// the emitted key order. Object properties are carried as an ordered literal
// rather than a Go map precisely because their order is observable in the
// emitted output.
func openApiV3Downgrader_map_properties(value any, mapper func(JsonSchema) JsonSchema) any {
  if ordered, ok := value.(nativefactories.LiteralFactory_OrderedObject); ok {
    values := make(map[string]any, len(ordered.Values))
    keys := make([]string, 0, len(ordered.Keys))
    for _, key := range ordered.Keys {
      entry, ok := ordered.Values[key]
      if ok == false || openApiV3Downgrader_is_nil(entry) {
        continue
      }
      if schema := openApiV3Downgrader_schema(entry); schema != nil {
        values[key] = mapper(schema)
      } else {
        values[key] = entry
      }
      keys = append(keys, key)
    }
    return nativefactories.LiteralFactory_OrderedObject{Keys: keys, Values: values}
  }
  if plain, ok := value.(map[string]any); ok {
    output := map[string]any{}
    for key, entry := range plain {
      if openApiV3Downgrader_is_nil(entry) {
        continue
      }
      if schema := openApiV3Downgrader_schema(entry); schema != nil {
        output[key] = mapper(schema)
      } else {
        output[key] = entry
      }
    }
    return output
  }
  return value
}

// openApiV3Downgrader_schema coerces a schema-valued map to JsonSchema, whether
// it arrived already named or as a bare map. It returns nil for anything that is
// not a schema, which is how the tuple and additionalProperties paths tell an
// object apart from a boolean flag.
func openApiV3Downgrader_schema(value any) JsonSchema {
  switch typed := value.(type) {
  case JsonSchema:
    return typed
  case map[string]any:
    return JsonSchema(typed)
  }
  return nil
}

func openApiV3Downgrader_schema_array(value any) []JsonSchema {
  switch typed := value.(type) {
  case []JsonSchema:
    return typed
  case []any:
    output := make([]JsonSchema, 0, len(typed))
    for _, element := range typed {
      if schema := openApiV3Downgrader_schema(element); schema != nil {
        output = append(output, schema)
      }
    }
    return output
  }
  return nil
}

// openApiV3Downgrader_typeof names the 3.0 primitive type of a constant value,
// mirroring the JavaScript `typeof` the TypeScript owner keys its enum merge on.
//
// A numeric literal arrives as the compiler's `jsnum.Number` (defined `type
// Number float64`), a named type an explicit `case float64` does not match, so
// numbers are classified by reflected kind rather than by concrete type. Getting
// this wrong labels a numeric literal `object`, which then fails to merge with a
// sibling number member and mislabels the union branch.
func openApiV3Downgrader_typeof(value any) string {
  switch value.(type) {
  case string:
    return "string"
  case bool:
    return "boolean"
  }
  if value != nil {
    switch reflect.ValueOf(value).Kind() {
    case reflect.Int, reflect.Int8, reflect.Int16, reflect.Int32, reflect.Int64,
      reflect.Uint, reflect.Uint8, reflect.Uint16, reflect.Uint32, reflect.Uint64,
      reflect.Float32, reflect.Float64:
      return "number"
    }
  }
  return "object"
}

// openApiV3Downgrader_truthy mirrors the JavaScript truthiness the tuple path
// tests `additionalItems` for: an absent or `false` rest closes the tuple, while
// `true` or a schema leaves it open.
func openApiV3Downgrader_truthy(value any) bool {
  if openApiV3Downgrader_is_nil(value) {
    return false
  }
  if flag, ok := value.(bool); ok {
    return flag
  }
  return true
}

// openApiV3Downgrader_is_nil treats a typed nil pointer, map, or slice as absent,
// matching how LiteralFactory decides a value is not emitted. A plain `value ==
// nil` misses a nil *string held in an interface, which is what the schema
// builders store for an absent title or description.
func openApiV3Downgrader_is_nil(value any) bool {
  if value == nil {
    return true
  }
  reflected := reflect.ValueOf(value)
  switch reflected.Kind() {
  case reflect.Chan, reflect.Func, reflect.Interface, reflect.Map, reflect.Pointer, reflect.Slice:
    return reflected.IsNil()
  default:
    return false
  }
}

// openApiV3Downgrader_same reports whether two schemas are the same underlying
// map, standing in for the identity comparison the TypeScript owner uses to tell
// the root union apart from a nested one.
func openApiV3Downgrader_same(x JsonSchema, y JsonSchema) bool {
  if x == nil || y == nil {
    return false
  }
  return reflect.ValueOf(x).Pointer() == reflect.ValueOf(y).Pointer()
}

func openApiV3Downgrader_ref_key(ref string) string {
  if index := strings.LastIndex(ref, "/"); index != -1 {
    return ref[index+1:]
  }
  return ref
}

func openApiV3Downgrader_clone_value(value any) any {
  switch typed := value.(type) {
  case JsonSchema:
    output := JsonSchema{}
    for key, entry := range typed {
      output[key] = openApiV3Downgrader_clone_value(entry)
    }
    return output
  case map[string]any:
    output := map[string]any{}
    for key, entry := range typed {
      output[key] = openApiV3Downgrader_clone_value(entry)
    }
    return output
  case []JsonSchema:
    output := make([]JsonSchema, 0, len(typed))
    for _, entry := range typed {
      output = append(output, openApiV3Downgrader_schema(openApiV3Downgrader_clone_value(entry)))
    }
    return output
  case []any:
    output := make([]any, 0, len(typed))
    for _, entry := range typed {
      output = append(output, openApiV3Downgrader_clone_value(entry))
    }
    return output
  }
  return value
}
