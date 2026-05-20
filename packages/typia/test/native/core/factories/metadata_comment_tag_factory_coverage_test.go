//go:build typia_native_internal
// +build typia_native_internal

package factories

import (
  "testing"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataCommentTagFactoryCoverage exercises JSDoc tag parsing.
//
// Comment tags are normally discovered while metadata is being constructed from
// a TypeScript checker. This test keeps the same schema mutation behavior local
// by feeding representative JSDoc tags directly into the comment tag factory.
//
// 1. Parse unknown, missing-value, unique-items, and typed numeric comments.
// 2. Apply array, string, number, and bigint tags to a metadata schema.
// 3. Verify unsupported metadata targets are reported as factory errors.
// 4. Cover parser aliases, invalid numeric values, and date-time fallback paths.
// 5. Confirm exported Get returns typed comment tags and panics on missing tags.
func TestMetadataCommentTagFactoryCoverage(t *testing.T) {
  reports := []string{}
  report := func(msg string) any {
    reports = append(reports, msg)
    return nil
  }

  unknown := metadataCommentTagFactory_parse(struct {
    Report func(msg string) any
    Tag    schemametadata.IJsDocTagInfo
  }{Report: report, Tag: schemametadata.IJsDocTagInfo{Name: "unknown"}})
  if unknown == nil {
    t.Fatal("unknown JSDoc tags should return an empty map, not nil")
  }
  if len(unknown) != 0 {
    t.Fatal("unknown JSDoc tags should parse to an empty tag record")
  }
  missing := metadataCommentTagFactory_parse(struct {
    Report func(msg string) any
    Tag    schemametadata.IJsDocTagInfo
  }{Report: report, Tag: schemametadata.IJsDocTagInfo{Name: "minLength"}})
  if missing != nil || len(reports) == 0 {
    t.Fatal("missing comment values should be reported")
  }
  unique := metadataCommentTagFactory_parse(struct {
    Report func(msg string) any
    Tag    schemametadata.IJsDocTagInfo
  }{Report: report, Tag: schemametadata.IJsDocTagInfo{Name: "uniqueItems"}})
  if len(unique["array"]) != 1 {
    t.Fatal("uniqueItems should not require a text value")
  }
  numeric := metadataCommentTagFactory_parse(struct {
    Report func(msg string) any
    Tag    schemametadata.IJsDocTagInfo
  }{
    Report: report,
    Tag: schemametadata.IJsDocTagInfo{
      Name: "type",
      Text: []schemametadata.IJsDocTagInfo_IText{{Text: "{uint}"}},
    },
  })
  if numeric["number"][0].Value != "uint32" || numeric["bigint"][0].Value != "uint32" {
    t.Fatal("typed numeric comment should normalize uint to uint32")
  }
  for _, tag := range []schemametadata.IJsDocTagInfo{
    {Name: "items", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "2"}}},
    {Name: "maxItems", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "3"}}},
    {Name: "maximum", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "4"}}},
    {Name: "exclusiveMinimum", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "5"}}},
    {Name: "exclusiveMaximum", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "6"}}},
    {Name: "multipleOf", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "7"}}},
    {Name: "format", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "dateTime"}}},
    {Name: "format", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "unknown"}}},
    {Name: "pattern", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "^[a-z]+$"}}},
    {Name: "length", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "8"}}},
    {Name: "maxLength", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "9"}}},
    {Name: "type", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "int64"}}},
    {Name: "type", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "uint64"}}},
    {Name: "type", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "float"}}},
    {Name: "type", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "double"}}},
    {Name: "type", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "unknown"}}},
  } {
    _ = metadataCommentTagFactory_parse(struct {
      Report func(msg string) any
      Tag    schemametadata.IJsDocTagInfo
    }{Report: report, Tag: tag})
  }
  invalidBefore := len(reports)
  _ = metadataCommentTagFactory_parse_number(struct {
    Report func(msg string) any
    Value  string
  }{Report: report, Value: "NaN"})
  _ = metadataCommentTagFactory_parse_number(struct {
    Report func(msg string) any
    Value  string
  }{Report: report, Value: "abc"})
  _ = metadataCommentTagFactory_parse_integer(struct {
    Report   func(msg string) any
    Unsigned bool
    Value    string
  }{Report: report, Unsigned: false, Value: "1.5"})
  _ = metadataCommentTagFactory_parse_integer(struct {
    Report   func(msg string) any
    Unsigned bool
    Value    string
  }{Report: report, Unsigned: true, Value: "-1"})
  if len(reports) <= invalidBefore {
    t.Fatal("invalid comment numeric values should be reported")
  }

  meta := schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{
    Atomics: []*schemametadata.MetadataAtomic{
      schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "string"}),
      schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "number"}),
      schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "bigint"}),
    },
    Arrays: []*schemametadata.MetadataArray{
      schemametadata.MetadataArray_create(schemametadata.MetadataArray{}),
    },
  })
  errors := []MetadataFactory_IError{}
  MetadataCommentTagFactory.Analyze(struct {
    Errors   *[]MetadataFactory_IError
    Metadata *schemametadata.MetadataSchema
    Tags     []schemametadata.IJsDocTagInfo
    Explore  MetadataFactory_IExplore
  }{
    Errors:   &errors,
    Metadata: meta,
    Tags: []schemametadata.IJsDocTagInfo{
      {Name: "minItems", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "1"}}},
      {Name: "minLength", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "2"}}},
      {Name: "minimum", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "3"}}},
      {Name: "format", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "uuid"}}},
    },
  })
  if len(errors) != 0 {
    t.Fatalf("valid comment tags should not report errors: %#v", errors)
  }
  if len(meta.Arrays[0].Tags) == 0 ||
    len(meta.Atomics[0].Tags) == 0 ||
    len(meta.Atomics[1].Tags) == 0 ||
    len(meta.Atomics[2].Tags) == 0 {
    t.Fatal("comment tags were not applied to every supported metadata target")
  }
  oppositeOnly := schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{
    Atomics: []*schemametadata.MetadataAtomic{
      schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "number"}),
    },
  })
  MetadataCommentTagFactory.Analyze(struct {
    Errors   *[]MetadataFactory_IError
    Metadata *schemametadata.MetadataSchema
    Tags     []schemametadata.IJsDocTagInfo
    Explore  MetadataFactory_IExplore
  }{
    Errors:   &errors,
    Metadata: oppositeOnly,
    Tags: []schemametadata.IJsDocTagInfo{
      {Name: "type", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "int64"}}},
      {Name: "format", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "date-time"}}},
    },
  })
  if len(oppositeOnly.Atomics[0].Tags) == 0 {
    t.Fatal("numeric comment tag should apply when only one numeric side exists")
  }

  empty := schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{})
  MetadataCommentTagFactory.Analyze(struct {
    Errors   *[]MetadataFactory_IError
    Metadata *schemametadata.MetadataSchema
    Tags     []schemametadata.IJsDocTagInfo
    Explore  MetadataFactory_IExplore
  }{
    Errors:   &errors,
    Metadata: empty,
    Tags: []schemametadata.IJsDocTagInfo{
      {Name: "pattern", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "^x$"}}},
    },
  })
  if len(errors) == 0 {
    t.Fatal("unsupported comment target should report metadata errors")
  }

  if tag := MetadataCommentTagFactory.Get(struct {
    Kind  string
    Type  string
    Value string
  }{Kind: "type", Type: "number", Value: "int"})[0]; tag.Value != "int32" {
    t.Fatal("exported comment tag getter should normalize integer aliases")
  }
  commentTagFactoryMustPanic(t, func() {
    _ = MetadataCommentTagFactory.Get(struct {
      Kind  string
      Type  string
      Value string
    }{Kind: "unknown", Type: "string", Value: "x"})
  })
}

func commentTagFactoryMustPanic(t *testing.T, run func()) {
  t.Helper()
  defer func() {
    if recover() == nil {
      t.Fatal("expected comment tag factory call to panic")
    }
  }()
  run()
}
