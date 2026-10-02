package factories

import (
  "reflect"
  "testing"

  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestMetadataCommentTagFactoryExclusivityMatchesInterface pins every JSDoc
// comment tag's `Exclusive` value to the @typia/interface declaration.
//
// The JSDoc path and the type-tag path both feed
// MetadataTypeTagFactory.Validate, which reads a tag's `Exclusive` list to
// reject forbidden combinations. The type-tag path takes that list straight
// from the interface declaration, but the comment factory used to hand-copy it
// per parser, and two copies drifted: `@format` published a bare `true` and
// `@pattern` published `["format"]` (missing its own kind), so `@pattern ^a`
// `@pattern ^b` compiled while `Pattern<...> & Pattern<...>` is a compile error.
// This test transcribes the authority once via
// metadataTypeTagFactoryTestDeclarations -- the same mirror the type-tag tests
// use -- and asserts the comment factory now produces the identical list.
//
//  1. Build the array-form authority (kind -> exclusive kinds) from the shared
//     declaration mirror, and note the kinds that declare a bare `true`.
//  2. Parse one representative JSDoc comment per tag kind through the factory.
//  3. Assert the produced tag's kind and `Exclusive` match the authority exactly,
//     so `@format`/`@pattern` carry `["format", "pattern"]` and no list drifts.
//
// @evidence contracts/testing.md#behavioral-verification Every JSDoc comment tag is parsed and the produced tag key and Exclusive list are compared with the @typia/interface declaration transcribed in the test.
// @evidence contracts/testing.md#independent-expectations The interface declarations are the specification of exclusivity; the transcription is authored separately from the factory's per-parser copies.
// @evidence contracts/testing.md#distinguishing-cases One row per tag, so a drifted exclusive list on any single tag fails; tags added to the interface later are not detected automatically.
// @evidence contracts/testing.md#execution-ownership The canonical native Go command (pnpm test:go:native) runs this same-package Test function in process. It calls the factory in memory with no checker, filesystem fixture or process.
func TestMetadataCommentTagFactoryExclusivityMatchesInterface(t *testing.T) {
  arrayForm := map[string][]string{}
  for _, declaration := range metadataTypeTagFactoryTestDeclarations() {
    arrayForm[declaration.kind] = declaration.exclusive
  }

  report := func(string) any { return nil }
  cases := []struct {
    tag  string
    text string
    kind string
    key  string
  }{
    {tag: "minimum", text: "0", kind: "minimum", key: "number"},
    {tag: "maximum", text: "10", kind: "maximum", key: "number"},
    {tag: "exclusiveMinimum", text: "0", kind: "exclusiveMinimum", key: "number"},
    {tag: "exclusiveMaximum", text: "10", kind: "exclusiveMaximum", key: "number"},
    {tag: "format", text: "uuid", kind: "format", key: "string"},
    {tag: "pattern", text: "^x$", kind: "pattern", key: "string"},
    {tag: "multipleOf", text: "2", kind: "multipleOf", key: "number"},
    {tag: "minItems", text: "1", kind: "minItems", key: "array"},
    {tag: "maxItems", text: "2", kind: "maxItems", key: "array"},
    {tag: "uniqueItems", text: "", kind: "uniqueItems", key: "array"},
    {tag: "minLength", text: "1", kind: "minLength", key: "string"},
    {tag: "maxLength", text: "2", kind: "maxLength", key: "string"},
    {tag: "type", text: "int32", kind: "type", key: "number"},
  }
  for _, tuple := range cases {
    info := schemametadata.IJsDocTagInfo{Name: tuple.tag}
    if tuple.text != "" {
      info.Text = []schemametadata.IJsDocTagInfo_IText{{Text: tuple.text}}
    }
    record := metadataCommentTagFactory_parse(struct {
      Report func(msg string) any
      Tag    schemametadata.IJsDocTagInfo
    }{Report: report, Tag: info})
    tags := record[tuple.key]
    if len(tags) == 0 {
      t.Fatalf("@%s should produce a %q tag", tuple.tag, tuple.key)
    }
    produced := tags[0]
    if produced.Kind != tuple.kind {
      t.Fatalf("@%s should produce kind %q, got %q", tuple.tag, tuple.kind, produced.Kind)
    }
    var expected any = true
    if list, ok := arrayForm[tuple.kind]; ok {
      expected = list
    }
    if reflect.DeepEqual(produced.Exclusive, expected) == false {
      t.Fatalf(
        "@%s exclusive drifted from the interface authority: got %#v, want %#v",
        tuple.tag, produced.Exclusive, expected,
      )
    }
  }
}
