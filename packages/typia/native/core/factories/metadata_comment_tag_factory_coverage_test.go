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
  if unknown == nil || len(unknown) != 0 {
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
  for _, tuple := range []struct {
    text         string
    value        string
    bigintTarget bool
  }{
    {text: "{int}", value: "int32"},
    {text: "{uint}", value: "uint32"},
    {text: "int8", value: "int8"},
    {text: "uint8", value: "uint8"},
    {text: "int16", value: "int16"},
    {text: "uint16", value: "uint16"},
    {text: "int32", value: "int32"},
    {text: "uint32", value: "uint32"},
    {text: "int64", value: "int64", bigintTarget: true},
    {text: "uint64", value: "uint64", bigintTarget: true},
    {text: "float", value: "float"},
    {text: "double", value: "double"},
  } {
    numeric := metadataCommentTagFactory_parse(struct {
      Report func(msg string) any
      Tag    schemametadata.IJsDocTagInfo
    }{
      Report: report,
      Tag: schemametadata.IJsDocTagInfo{
        Name: "type",
        Text: []schemametadata.IJsDocTagInfo_IText{{Text: tuple.text}},
      },
    })
    if numeric["number"][0].Value != tuple.value {
      t.Fatalf("typed %s comment should normalize to number %s", tuple.text, tuple.value)
    }
    if tuple.bigintTarget {
      if numeric["bigint"][0].Value != tuple.value {
        t.Fatalf("typed %s comment should normalize to bigint %s", tuple.text, tuple.value)
      }
    } else if len(numeric["bigint"]) != 0 {
      t.Fatalf("typed %s comment should not leak into bigint tags", tuple.text)
    }
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
  decimalReportCount := len(reports)
  decimal := metadataCommentTagFactory_parse(struct {
    Report func(msg string) any
    Tag    schemametadata.IJsDocTagInfo
  }{
    Report: report,
    Tag: schemametadata.IJsDocTagInfo{
      Name: "multipleOf",
      Text: []schemametadata.IJsDocTagInfo_IText{{Text: "0.01"}},
    },
  })
  if len(reports) != decimalReportCount || len(decimal["number"]) != 1 || len(decimal["bigint"]) != 0 {
    t.Fatalf("decimal multipleOf must remain a number-only JSDoc tag: %#v, reports=%#v", decimal, reports[decimalReportCount:])
  }
  if decimal["number"][0].Validate != "$importInternal(\"_isMultipleOf\")($input, 0.01)" {
    t.Fatalf("decimal multipleOf must use the shared exact helper: %s", decimal["number"][0].Validate)
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
  oppositeErrors := []MetadataFactory_IError{}
  MetadataCommentTagFactory.Analyze(struct {
    Errors   *[]MetadataFactory_IError
    Metadata *schemametadata.MetadataSchema
    Tags     []schemametadata.IJsDocTagInfo
    Explore  MetadataFactory_IExplore
  }{
    Errors:   &oppositeErrors,
    Metadata: oppositeOnly,
    Tags: []schemametadata.IJsDocTagInfo{
      {Name: "type", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "int64"}}},
      {Name: "format", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "date-time"}}},
    },
  })
  if len(oppositeErrors) != 0 {
    t.Fatalf("opposite numeric comment targets should be skipped without errors: %#v", oppositeErrors)
  }
  if len(oppositeOnly.Atomics[0].Tags) == 0 {
    t.Fatal("numeric comment tag should apply when only one numeric side exists")
  }
  decimalOnly := schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{
    Atomics: []*schemametadata.MetadataAtomic{
      schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "number"}),
    },
  })
  decimalErrors := []MetadataFactory_IError{}
  MetadataCommentTagFactory.Analyze(struct {
    Errors   *[]MetadataFactory_IError
    Metadata *schemametadata.MetadataSchema
    Tags     []schemametadata.IJsDocTagInfo
    Explore  MetadataFactory_IExplore
  }{
    Errors:   &decimalErrors,
    Metadata: decimalOnly,
    Tags: []schemametadata.IJsDocTagInfo{{
      Name: "multipleOf",
      Text: []schemametadata.IJsDocTagInfo_IText{{Text: "0.01"}},
    }},
  })
  if len(decimalErrors) != 0 || len(decimalOnly.Atomics[0].Tags) != 1 {
    t.Fatalf("decimal number JSDoc must analyze without bigint diagnostics: errors=%#v tags=%#v", decimalErrors, decimalOnly.Atomics[0].Tags)
  }

  empty := schemametadata.MetadataSchema_create(schemametadata.MetadataSchema{})
  unsupportedErrors := []MetadataFactory_IError{}
  MetadataCommentTagFactory.Analyze(struct {
    Errors   *[]MetadataFactory_IError
    Metadata *schemametadata.MetadataSchema
    Tags     []schemametadata.IJsDocTagInfo
    Explore  MetadataFactory_IExplore
  }{
    Errors:   &unsupportedErrors,
    Metadata: empty,
    Tags: []schemametadata.IJsDocTagInfo{
      {Name: "pattern", Text: []schemametadata.IJsDocTagInfo_IText{{Text: "^x$"}}},
    },
  })
  if len(unsupportedErrors) == 0 {
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
