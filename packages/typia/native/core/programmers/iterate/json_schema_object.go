package iterate

import (
  nativefactories "github.com/samchon/typia/packages/typia/native/core/factories"
  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
  nativeutils "github.com/samchon/typia/packages/typia/native/core/utils"
)

func json_schema_object(props struct {
  components *OpenApi_IComponents
  object     *nativemetadata.MetadataObject
}) []JsonSchema {
  return json_schema_plugin(struct {
    schema JsonSchema
    tags   [][]nativemetadata.IMetadataTypeTag
  }{
    schema: json_schema_emplace_object(props),
    tags:   props.object.Tags,
  })
}

func json_schema_emplace_object(props struct {
  components *OpenApi_IComponents
  object     *nativemetadata.MetadataObject
}) JsonSchema {
  if props.object.Type.IsLiteral() {
    return json_schema_create_object_schema(props)
  }
  key := props.object.Type.Name
  ref := "#/components/schemas/" + key
  if props.components.Schemas != nil {
    if _, ok := props.components.Schemas[key]; ok {
      return JsonSchema{"$ref": ref}
    }
  }
  if props.components.Schemas == nil {
    props.components.Schemas = map[string]JsonSchema{}
  }
  lazy := JsonSchema{}
  props.components.emplaceSchemaKey(key)
  props.components.Schemas[key] = lazy
  json_schema_assign(lazy, json_schema_create_object_schema(props))
  return JsonSchema{"$ref": ref}
}

func json_schema_create_object_schema(props struct {
  components *OpenApi_IComponents
  object     *nativemetadata.MetadataObject
}) JsonSchema {
  properties := map[string]any{}
  propertyKeys := []string{}
  extraMeta := json_schema_superfluous{
    patternProperties: map[string]json_schema_metadata_schema_pair{},
  }
  required := []string{}

  for _, property := range props.object.Type.Properties {
    if len(property.Value.Functions) != 0 &&
      property.Value.Nullable == false &&
      property.Value.IsRequired() &&
      property.Value.Size() == 0 {
      continue
    }
    if json_schema_has_any_tag(property.JsDocTags, []string{"hidden", "ignore", "internal"}) {
      continue
    }

    attribute := JsonSchema{}
    if json_schema_has_tag(property.JsDocTags, "deprecated") {
      attribute["deprecated"] = true
    }
    if title := json_schema_title(struct {
      description *string
      jsDocTags   []nativemetadata.IJsDocTagInfo
    }{description: property.Description, jsDocTags: property.JsDocTags}); title != nil {
      attribute["title"] = *title
    }
    if description := json_schema_description(struct {
      description *string
      jsDocTags   []nativemetadata.IJsDocTagInfo
    }{description: property.Description, jsDocTags: property.JsDocTags}); description != nil {
      attribute["description"] = *description
    }
    if property.Mutability != nil && *property.Mutability == "readonly" {
      attribute["readOnly"] = true
    }
    value := json_schema_station(json_schema_station_props{
      blockNever: true,
      components: props.components,
      attribute:  attribute,
      metadata:   property.Value,
    })
    if value == nil {
      continue
    }
    json_schema_jsDocTags(value, property.JsDocTags)

    key := property.Key.GetSoleLiteral()
    if key != nil {
      properties[*key] = value
      propertyKeys = append(propertyKeys, *key)
      if property.Value.IsRequired() {
        required = append(required, *key)
      }
    } else {
      pattern := metadata_to_pattern(struct {
        top      bool
        metadata *nativemetadata.MetadataSchema
      }{top: true, metadata: property.Key})
      pair := json_schema_metadata_schema_pair{metadata: property.Value, schema: value}
      if pattern == nativeutils.PatternUtil.STRING {
        extraMeta.additionalProperties = &pair
      } else {
        extraMeta.setPatternProperty(pattern, pair)
      }
    }
  }

  schema := JsonSchema{
    "type":                 "object",
    "properties":           nativefactories.LiteralFactory_OrderedObject{Keys: propertyKeys, Values: properties},
    "additionalProperties": false,
    "required":             required,
  }
  if title := json_schema_title(struct {
    description *string
    jsDocTags   []nativemetadata.IJsDocTagInfo
  }{description: props.object.Type.Description, jsDocTags: props.object.Type.JsDocTags}); title != nil {
    schema["title"] = *title
  }
  if description := json_schema_description(struct {
    description *string
    jsDocTags   []nativemetadata.IJsDocTagInfo
  }{description: props.object.Type.Description, jsDocTags: props.object.Type.JsDocTags}); description != nil {
    schema["description"] = *description
  }
  if additional := json_schema_join(struct {
    components *OpenApi_IComponents
    extra      json_schema_superfluous
  }{components: props.components, extra: extraMeta}); additional != nil {
    schema["additionalProperties"] = additional
  }
  if len(properties) == 0 && len(required) == 0 && extraMeta.additionalProperties != nil && len(extraMeta.patternProperties) == 0 {
    delete(schema, "properties")
    delete(schema, "required")
  }
  return json_schema_jsDocTags(schema, props.object.Type.JsDocTags)
}

func json_schema_join(props struct {
  components *OpenApi_IComponents
  extra      json_schema_superfluous
}) JsonSchema {
  elements := []json_schema_metadata_schema_pair{}
  for _, key := range props.extra.patternPropertyKeys {
    elements = append(elements, props.extra.patternProperties[key])
  }
  if props.extra.additionalProperties != nil {
    elements = append(elements, *props.extra.additionalProperties)
  }
  if len(elements) == 0 {
    return nil
  }
  if len(elements) == 1 {
    return elements[0].schema
  }
  metadata := elements[0].metadata
  for i := 1; i < len(elements); i++ {
    metadata = nativemetadata.MetadataSchema_merge(metadata, elements[i].metadata)
  }
  return json_schema_station(json_schema_station_props{
    blockNever: true,
    components: props.components,
    attribute:  JsonSchema{},
    metadata:   metadata,
  })
}

type json_schema_superfluous struct {
  additionalProperties *json_schema_metadata_schema_pair
  patternProperties    map[string]json_schema_metadata_schema_pair
  // patternPropertyKeys preserves the first-insertion order of the map while
  // later assignments to an existing pattern replace its value in place.
  patternPropertyKeys []string
}

func (superfluous *json_schema_superfluous) setPatternProperty(pattern string, pair json_schema_metadata_schema_pair) {
  if _, exists := superfluous.patternProperties[pattern]; exists == false {
    superfluous.patternPropertyKeys = append(superfluous.patternPropertyKeys, pattern)
  }
  superfluous.patternProperties[pattern] = pair
}

type json_schema_metadata_schema_pair struct {
  metadata *nativemetadata.MetadataSchema
  schema   JsonSchema
}
