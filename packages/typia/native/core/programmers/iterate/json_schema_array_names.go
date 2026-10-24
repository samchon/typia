package iterate

import (
  "encoding/json"
  "strconv"

  metadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// ReserveSchemaNames reserves named definitions reachable from every root before
// generated array-variant names are allocated. Callers sharing components across
// several roots must supply all roots before generating any of them.
//
// @evidence contracts/common.md#principled-implementation A visited-set graph walk reserves aliases, arrays, tuples, objects and native names before variant allocation. Reserving all roots prevents a generated variant from taking a later declaration's name, including through recursive or shared edges.
// @evidence contracts/common.md#clear-and-simple-design Component-local maps own both visited metadata and reserved names; the walk follows only edges consumed by schema generation.
// @evidence contracts/common.md#prohibited-implementation-shortcuts Reservations use metadata identity and names, without fixture names or foreign mutations.
// @evidence contracts/common.md#meaningful-documentation The comment states why reservations precede generation and the obligation for multiple roots.
func (components *OpenApi_IComponents) ReserveSchemaNames(roots []*metadata.MetadataSchema) {
  if components.reservedSchemaNames == nil {
    components.reservedSchemaNames = map[string]bool{}
    components.reservedMetadata = map[*metadata.MetadataSchema]bool{}
  }
  var visit func(*metadata.MetadataSchema)
  visit = func(schema *metadata.MetadataSchema) {
    if schema == nil || components.reservedMetadata[schema] {
      return
    }
    components.reservedMetadata[schema] = true
    for _, alias := range schema.Aliases {
      components.reservedSchemaNames[alias.Type.Name] = true
      visit(alias.Type.Value)
    }
    for _, array := range schema.Arrays {
      components.reservedSchemaNames[array.Type.Name] = true
      visit(array.Type.Value)
    }
    for _, tuple := range schema.Tuples {
      components.reservedSchemaNames[tuple.Type.Name] = true
      for _, element := range tuple.Type.Elements {
        visit(element)
      }
    }
    for _, object := range schema.Objects {
      components.reservedSchemaNames[object.Type.Name] = true
      for _, property := range object.Type.Properties {
        visit(property.Value)
      }
    }
    for _, native := range schema.Natives {
      components.reservedSchemaNames[native.Name] = true
    }
    if schema.Escaped != nil {
      visit(schema.Escaped.Returns)
    }
    visit(schema.Rest)
  }
  for _, root := range roots {
    visit(root)
  }
}

// arraySchemaName distinguishes recursive uses by the JSON schema tag rows that
// actually affect emission. JSON map encoding is key-sorted, so equivalent schema
// maps share an identity independently of their Go insertion order.
func (components *OpenApi_IComponents) arraySchemaName(array *metadata.MetadataArray) string {
  if !array.Type.Recursive {
    return array.Type.Name
  }
  rows := [][]any{}
  for _, row := range array.Tags {
    schemas := []any{}
    for _, tag := range row {
      if tag.Schema != nil {
        schemas = append(schemas, tag.Schema)
      }
    }
    if len(schemas) != 0 {
      rows = append(rows, schemas)
    }
  }
  if len(rows) == 0 {
    return array.Type.Name
  }
  encoded, err := json.Marshal(rows)
  if err != nil {
    panic("array schema tags must be JSON serializable: " + err.Error())
  }
  identity := array.Type.Name + "\x00" + string(encoded)
  if key, ok := components.arraySchemaNames[identity]; ok {
    return key
  }
  components.ReserveSchemaNames([]*metadata.MetadataSchema{{Arrays: []*metadata.MetadataArray{array}}})
  base := array.Type.Name + "-array"
  index := components.arraySchemaCounters[base]
  key := base
  if index != 0 {
    key = base + "-" + strconv.Itoa(index)
  }
  for components.reservedSchemaNames[key] || components.Schemas[key] != nil {
    index++
    key = base + "-" + strconv.Itoa(index)
  }
  components.reservedSchemaNames[key] = true
  if components.arraySchemaNames == nil {
    components.arraySchemaNames = map[string]string{}
  }
  if components.arraySchemaCounters == nil {
    components.arraySchemaCounters = map[string]int{}
  }
  components.arraySchemaNames[identity] = key
  components.arraySchemaCounters[base] = index + 1
  return key
}
