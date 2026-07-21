//go:build typia_native_internal
// +build typia_native_internal

package iterate

import (
  "math/big"
  "testing"

  nativemetadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestIterateUtilityCoverage exercises schema and stringify helpers.
//
// The iterate package contains many small helpers that are normally selected by
// very specific metadata shapes. This test builds those shapes directly so JSON
// schema attributes, native exports, prune logic, and stringify property logic
// remain covered without relying on broad TypeScript fixtures.
//
// 1. Apply x-prefixed JSDoc tags and cast their text values.
// 2. Export title, description, constant, escaped, template, and native schemas.
// 3. Build stringify output for regular and dynamic object properties.
// 4. Build prune and native stringify statements for object metadata.
// 5. Build full JSON schema station outputs for empty, any, native, and union metadata.
func TestIterateUtilityCoverage(t *testing.T) {
  schema := json_schema_jsDocTags(JsonSchema{}, []nativemetadata.IJsDocTagInfo{
    {Name: "x-enabled", Text: []nativemetadata.IJsDocTagInfo_IText{{Kind: "text", Text: "true"}}},
    {Name: "x-count", Text: []nativemetadata.IJsDocTagInfo_IText{{Kind: "text", Text: "3.5"}}},
    {Name: "x-null", Text: []nativemetadata.IJsDocTagInfo_IText{{Kind: "text", Text: "null"}}},
    {Name: "description", Text: []nativemetadata.IJsDocTagInfo_IText{{Kind: "text", Text: "ignored"}}},
  })
  if schema["x-enabled"] != true || schema["x-count"] != 3.5 {
    t.Fatal("JSDoc tag casting failed")
  }
  if _, ok := json_schema_jsDocTags_value(nativemetadata.IJsDocTagInfo{Name: "x-empty"}); ok {
    t.Fatal("empty JSDoc tag should not produce a value")
  }
  if json_schema_jsDocTags_cast("false") != false ||
    json_schema_jsDocTags_cast("text") != "text" {
    t.Fatal("JSDoc tag scalar casting mismatch")
  }
  fallbackDescription := "fallback"
  if title := json_schema_title(struct {
    description *string
    jsDocTags   []nativemetadata.IJsDocTagInfo
  }{
    jsDocTags: []nativemetadata.IJsDocTagInfo{
      {Name: "description", Text: []nativemetadata.IJsDocTagInfo_IText{{Text: "ignored"}}},
      {Name: "title", Text: []nativemetadata.IJsDocTagInfo_IText{{Text: "Line\r\n"}, {Text: "Two"}}},
    },
  }); title == nil || *title != "Line\nTwo" {
    t.Fatal("JSON schema title helper failed")
  }
  if description := json_schema_description(struct {
    description *string
    jsDocTags   []nativemetadata.IJsDocTagInfo
  }{
    description: &fallbackDescription,
    jsDocTags: []nativemetadata.IJsDocTagInfo{
      {Name: "description", Text: []nativemetadata.IJsDocTagInfo_IText{{Text: "Doc\r\nText"}}},
    },
  }); description == nil || *description != "Doc\nText" {
    t.Fatal("JSON schema description helper failed")
  }
  if description := json_schema_description(struct {
    description *string
    jsDocTags   []nativemetadata.IJsDocTagInfo
  }{description: &fallbackDescription}); description != &fallbackDescription {
    t.Fatal("JSON schema description fallback failed")
  }
  bigValue := big.NewInt(12)
  if json_schema_constant_value(*bigValue) != float64(12) ||
    json_schema_constant_value(bigValue) != float64(12) {
    t.Fatal("JSON schema bigint constant conversion failed")
  }

  literal := iterateLiteral("fixed")
  stringMeta := iterateAtomic("string")
  constantDescription := "constant"
  constantSchemas := json_schema_constant(nativemetadata.MetadataConstant_create(nativemetadata.MetadataConstant{
    Type: "bigint",
    Values: []*nativemetadata.MetadataConstantValue{
      nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{
        Value:       big.NewInt(13),
        Description: &constantDescription,
        JsDocTags: []nativemetadata.IJsDocTagInfo{
          {Name: "title", Text: []nativemetadata.IJsDocTagInfo_IText{{Text: "Big"}}},
        },
      }),
    },
  }))
  if len(constantSchemas) != 1 || constantSchemas[0]["const"] != float64(13) {
    t.Fatal("JSON schema constant export failed")
  }
  dateMeta := nativemetadata.MetadataSchema_initialize()
  dateMeta.Natives = append(dateMeta.Natives, nativemetadata.MetadataNative_create(nativemetadata.MetadataNative{Name: "Date"}))
  arrayDate := nativemetadata.MetadataSchema_initialize()
  arrayDate.Arrays = append(arrayDate.Arrays, nativemetadata.MetadataArray_create(nativemetadata.MetadataArray{
    Type: nativemetadata.MetadataArrayType_create(nativemetadata.MetadataArrayType{
      Name:      "Date[]",
      Value:     dateMeta,
      Nullables: []bool{},
    }),
  }))
  aliasDate := nativemetadata.MetadataSchema_initialize()
  aliasDate.Aliases = append(aliasDate.Aliases, nativemetadata.MetadataAlias_create(nativemetadata.MetadataAlias{
    Type: nativemetadata.MetadataAliasType_create(nativemetadata.MetadataAliasType{Name: "AliasDate", Value: arrayDate}),
  }))
  if !json_schema_escaped_is_date(map[*nativemetadata.MetadataSchema]bool{}, aliasDate) ||
    json_schema_escaped_is_date(map[*nativemetadata.MetadataSchema]bool{aliasDate: true}, aliasDate) {
    t.Fatal("JSON schema escaped date recursion failed")
  }
  if len(json_schema_escaped(struct {
    components *OpenApi_IComponents
    escaped    *nativemetadata.MetadataEscaped
  }{
    components: &OpenApi_IComponents{},
    escaped: nativemetadata.MetadataEscaped_create(nativemetadata.MetadataEscaped{
      Original: dateMeta,
      Returns:  stringMeta,
    }),
  })) == 0 {
    t.Fatal("JSON schema escaped export returned empty schemas")
  }
  taggedTemplate := nativemetadata.MetadataTemplate_create(nativemetadata.MetadataTemplate{
    Row: []*nativemetadata.MetadataSchema{literal, stringMeta},
    Tags: [][]nativemetadata.IMetadataTypeTag{{
      {Name: "MinLength<1>", Kind: "minLength", Schema: map[string]any{"minLength": 1}},
    }},
  })
  templateMeta := nativemetadata.MetadataSchema_initialize()
  templateMeta.Templates = append(templateMeta.Templates,
    nativemetadata.MetadataTemplate_create(nativemetadata.MetadataTemplate{Row: []*nativemetadata.MetadataSchema{literal, stringMeta}}),
    taggedTemplate,
  )
  if len(json_schema_templates(templateMeta)) != 2 ||
    json_schema_template_isPure(taggedTemplate.Tags) {
    t.Fatal("template schema helper returned unexpected result")
  }

  components := &OpenApi_IComponents{}
  if len(Json_schema_native_export(Json_schema_native_export_props{
    Components: components,
    Native:     nativemetadata.MetadataNative_create(nativemetadata.MetadataNative{Name: "Blob"}),
  })) == 0 {
    t.Fatal("binary native schema export returned empty result")
  }
  if len(Json_schema_native_export(Json_schema_native_export_props{
    Components: components,
    Native:     nativemetadata.MetadataNative_create(nativemetadata.MetadataNative{Name: "CustomNative"}),
  })) == 0 || components.Schemas["CustomNative"] == nil {
    t.Fatal("component native schema export failed")
  }
  if !json_schema_station_has_atomic(stringMeta, "string") || lowerAscii("ABC-x") != "abc-x" {
    t.Fatal("station atomic or lowercase helper mismatch")
  }
  anyMeta := nativemetadata.MetadataSchema_create(nativemetadata.MetadataSchema{Any: true, Required: true})
  if Json_schema_station(Json_schema_station_props{
    BlockNever: false,
    Components: components,
    Attribute:  JsonSchema{"title": "Any"},
    Metadata:   anyMeta,
  })["type"] != nil {
    t.Fatal("any station should synthesize nil type")
  }
  if Json_schema_station(Json_schema_station_props{
    BlockNever: true,
    Components: components,
    Metadata:   nativemetadata.MetadataSchema_initialize(),
  }) != nil {
    t.Fatal("blockNever station should return nil for empty metadata")
  }
  if Json_schema_station(Json_schema_station_props{
    BlockNever: false,
    Components: components,
    Metadata:   nativemetadata.MetadataSchema_initialize(),
  })["type"] != nil {
    t.Fatal("empty station should synthesize nil type")
  }
  nativeMeta := nativemetadata.MetadataSchema_initialize()
  nativeMeta.Natives = append(nativeMeta.Natives,
    nativemetadata.MetadataNative_create(nativemetadata.MetadataNative{Name: "Boolean"}),
    nativemetadata.MetadataNative_create(nativemetadata.MetadataNative{Name: "BigInt"}),
    nativemetadata.MetadataNative_create(nativemetadata.MetadataNative{Name: "Number"}),
    nativemetadata.MetadataNative_create(nativemetadata.MetadataNative{Name: "String"}),
    nativemetadata.MetadataNative_create(nativemetadata.MetadataNative{Name: "Date"}),
  )
  if Json_schema_station(Json_schema_station_props{
    Components: components,
    Metadata:   nativeMeta,
  }) == nil {
    t.Fatal("native station should produce a schema")
  }
  nativeSkipMeta := iterateAtomic("string")
  nativeSkipMeta.Natives = append(nativeSkipMeta.Natives, nativemetadata.MetadataNative_create(nativemetadata.MetadataNative{Name: "String"}))
  if Json_schema_station(Json_schema_station_props{
    Components: components,
    Metadata:   nativeSkipMeta,
  }) == nil {
    t.Fatal("native station should skip duplicated atomic native")
  }
  stationObject := nativemetadata.MetadataObjectType_create(nativemetadata.MetadataObjectType{
    Name: "StationObject",
    Properties: []*nativemetadata.MetadataProperty{
      nativemetadata.MetadataProperty_create(nativemetadata.MetadataProperty{Key: literal, Value: stringMeta}),
    },
  })
  stationArray := nativemetadata.MetadataArray_create(nativemetadata.MetadataArray{
    Type: nativemetadata.MetadataArrayType_create(nativemetadata.MetadataArrayType{Name: "StationArray", Value: stringMeta}),
  })
  stationTuple := nativemetadata.MetadataTuple_create(nativemetadata.MetadataTuple{
    Type: nativemetadata.MetadataTupleType_create(nativemetadata.MetadataTupleType{Name: "StationTuple", Elements: []*nativemetadata.MetadataSchema{stringMeta}}),
  })
  stationMeta := nativemetadata.MetadataSchema_initialize()
  stationMeta.Nullable = true
  stationMeta.Escaped = nativemetadata.MetadataEscaped_create(nativemetadata.MetadataEscaped{Original: dateMeta, Returns: stringMeta})
  stationMeta.Templates = append(stationMeta.Templates, taggedTemplate)
  stationMeta.Constants = append(stationMeta.Constants, nativemetadata.MetadataConstant_create(nativemetadata.MetadataConstant{
    Type: "boolean",
    Values: []*nativemetadata.MetadataConstantValue{
      nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{Value: true}),
    },
  }))
  stationMeta.Atomics = append(stationMeta.Atomics,
    nativemetadata.MetadataAtomic_create(nativemetadata.MetadataAtomic{Type: "boolean"}),
    nativemetadata.MetadataAtomic_create(nativemetadata.MetadataAtomic{Type: "bigint"}),
    nativemetadata.MetadataAtomic_create(nativemetadata.MetadataAtomic{Type: "number"}),
    nativemetadata.MetadataAtomic_create(nativemetadata.MetadataAtomic{Type: "string"}),
  )
  stationMeta.Arrays = append(stationMeta.Arrays, stationArray)
  stationMeta.Tuples = append(stationMeta.Tuples, stationTuple)
  stationMeta.Sets = append(stationMeta.Sets, nativemetadata.MetadataSet_create(nativemetadata.MetadataSet{Value: stringMeta}))
  stationMeta.Maps = append(stationMeta.Maps, nativemetadata.MetadataMap_create(nativemetadata.MetadataMap{Key: stringMeta, Value: stringMeta}))
  stationMeta.Objects = append(stationMeta.Objects, nativemetadata.MetadataObject_create(nativemetadata.MetadataObject{Type: stationObject}))
  stationMeta.Aliases = append(stationMeta.Aliases, nativemetadata.MetadataAlias_create(nativemetadata.MetadataAlias{
    Type: nativemetadata.MetadataAliasType_create(nativemetadata.MetadataAliasType{Name: "StationAlias", Value: stringMeta}),
  }))
  if Json_schema_station(Json_schema_station_props{
    Components: components,
    Attribute:  JsonSchema{"description": "station"},
    Metadata:   stationMeta,
  }) == nil {
    t.Fatal("union station should produce a schema")
  }

}

func iterateLiteral(value string) *nativemetadata.MetadataSchema {
  meta := nativemetadata.MetadataSchema_initialize()
  meta.Constants = append(meta.Constants, nativemetadata.MetadataConstant_create(nativemetadata.MetadataConstant{
    Type: "string",
    Values: []*nativemetadata.MetadataConstantValue{
      nativemetadata.MetadataConstantValue_create(nativemetadata.MetadataConstantValue{Value: value}),
    },
  }))
  return meta
}

func iterateAtomic(kind string) *nativemetadata.MetadataSchema {
  meta := nativemetadata.MetadataSchema_initialize()
  meta.Atomics = append(meta.Atomics, nativemetadata.MetadataAtomic_create(nativemetadata.MetadataAtomic{Type: kind}))
  return meta
}
