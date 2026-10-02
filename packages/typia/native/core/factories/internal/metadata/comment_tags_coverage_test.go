//go:build typia_native_internal
// +build typia_native_internal

package metadata

import (
  "path/filepath"
  "reflect"
  "testing"

  nativeast "github.com/microsoft/typescript-go/shim/ast"
  nativecore "github.com/microsoft/typescript-go/shim/core"
  nativeparser "github.com/microsoft/typescript-go/shim/parser"
  schemametadata "github.com/samchon/typia/packages/typia/native/core/schemas/metadata"
)

// TestCommentTagsCoverage exercises metadata comment tag application.
//
// Comment tags are collected from checker symbols before metadata sorting, so
// synthetic TypeScript fixtures rarely hit every tag kind deterministically.
// This test constructs the target property metadata and JSDoc rows directly.
//
// 1. Install a deterministic test analyzer.
// 2. Verify string, number, bigint, and array tag buckets receive metadata tags.
// 3. Exercise analyzer error reporting and idempotent object tagging.
// 4. Parse JSDoc AST nodes and cover type-expression/comment fallback helpers.
// 5. Cover nil object and nil analyzer fallbacks.
//
// @evidence contracts/testing.md#behavioral-verification The comment-tag dispatcher calls a test analyzer on constructed property metadata. Exactly one callback, its property/location inputs, each exact test tag and one propagated error are asserted, and a repeated call must leave the callback count unchanged. Parsed JSDoc presence and nil-helper fallbacks are also checked; the real analyzer's parsing semantics are not exercised here.
// @evidence contracts/testing.md#independent-expectations Authored callback inputs and marker tags establish the dispatch and once-only contract independently of the dispatcher. The test analyzer deliberately supplies tag/error outputs, so those outputs do not establish real comment-tag parsing; that belongs to factory tests.
// @evidence contracts/testing.md#distinguishing-cases Every tag bucket, repeated application and parsing are exercised once; this test has few negatives.
// @evidence contracts/testing.md#execution-ownership The typia_native_internal Go command (go -C packages/typia/test test -tags typia_native_internal ../native/...) runs this same-package Test function in process. The tagged test calls internal helpers with constructed metadata and an installed analyzer; it needs no program load or process.
func TestCommentTagsCoverage(t *testing.T) {
  oldAnalyzer := MetadataCommentTagAnalyzer
  calls := 0
  var analyzedMetadata *schemametadata.MetadataSchema
  var analyzedObject *schemametadata.MetadataObjectType
  var analyzedProperty any
  var analyzedTags []schemametadata.IJsDocTagInfo
  MetadataCommentTagAnalyzer = func(props struct {
    Errors   *[]MetadataFactory_IError
    Metadata *schemametadata.MetadataSchema
    Tags     []schemametadata.IJsDocTagInfo
    Explore  MetadataFactory_IExplore
  }) {
    calls++
    analyzedMetadata = props.Metadata
    analyzedObject = props.Explore.Object
    analyzedProperty = props.Explore.Property
    analyzedTags = props.Tags
    if props.Metadata == nil {
      return
    }
    tag := schemametadata.IMetadataTypeTag{Name: "testTag"}
    for _, atomic := range props.Metadata.Atomics {
      atomic.Tags = append(atomic.Tags, []schemametadata.IMetadataTypeTag{tag})
    }
    for _, array := range props.Metadata.Arrays {
      array.Tags = append(array.Tags, []schemametadata.IMetadataTypeTag{tag})
    }
    if props.Errors != nil {
      *props.Errors = append(*props.Errors, MetadataFactory_IError{
        Name: "comment tag(s)",
        Explore: MetadataFactory_IExplore{
          Object:   props.Explore.Object,
          Property: props.Explore.Property,
        },
        Messages: []string{"test analyzer error"},
      })
    }
  }
  defer func() {
    MetadataCommentTagAnalyzer = oldAnalyzer
  }()
  value := schemametadata.MetadataSchema_initialize()
  value.Atomics = append(value.Atomics,
    schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "string"}),
    schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "number"}),
    schemametadata.MetadataAtomic_create(schemametadata.MetadataAtomic{Type: "bigint"}),
  )
  value.Arrays = append(value.Arrays, schemametadata.MetadataArray_create(schemametadata.MetadataArray{
    Type: schemametadata.MetadataArrayType_create(schemametadata.MetadataArrayType{
      Name:      "string[]",
      Value:     schemametadata.MetadataSchema_initialize(),
      Nullables: []bool{},
    }),
  }))
  property := schemametadata.MetadataProperty_create(schemametadata.MetadataProperty{
    Key:   commentTagsLiteral("field"),
    Value: value,
    JsDocTags: []schemametadata.IJsDocTagInfo{
      commentTagsText("type", "{uint64}"),
      commentTagsText("format", "dateTime"),
      commentTagsText("pattern", "^[a-z]+$"),
      commentTagsText("length", "3"),
      commentTagsText("minLength", "1"),
      commentTagsText("maxLength", "5"),
      commentTagsText("items", "2"),
      commentTagsText("minItems", "1"),
      commentTagsText("maxItems", "4"),
      {Name: "uniqueItems"},
      commentTagsText("minimum", "1.5"),
      commentTagsText("maximum", "9"),
      commentTagsText("exclusiveMinimum", "0"),
      commentTagsText("exclusiveMaximum", "10"),
      commentTagsText("multipleOf", "2"),
      {Name: "format"},
    },
  })
  object := schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
    Name:       "CommentTagged",
    Properties: []*schemametadata.MetadataProperty{nil, property},
  })
  errors := []MetadataFactory_IError{}
  Iterate_metadata_comment_tags(struct {
    Errors *[]MetadataFactory_IError
    Object *schemametadata.MetadataObjectType
  }{Errors: &errors, Object: object})
  if calls != 1 || analyzedMetadata != value || analyzedObject != object || analyzedProperty != property || !reflect.DeepEqual(analyzedTags, property.JsDocTags) {
    t.Fatal("comment-tag dispatch did not preserve the property and its location")
  }
  for _, rows := range [][][]schemametadata.IMetadataTypeTag{value.Atomics[0].Tags, value.Atomics[1].Tags, value.Atomics[2].Tags, value.Arrays[0].Tags} {
    if len(rows) != 1 || len(rows[0]) != 1 || rows[0][0].Name != "testTag" {
      t.Fatal("comment-tag dispatch did not retain the analyzer's single marker tag")
    }
  }
  if len(errors) != 1 || errors[0].Name != "comment tag(s)" || errors[0].Explore.Object != object || errors[0].Explore.Property != property || len(errors[0].Messages) != 1 || errors[0].Messages[0] != "test analyzer error" {
    t.Fatal("comment-tag dispatch did not propagate the analyzer error")
  }
  Iterate_metadata_comment_tags(struct {
    Errors *[]MetadataFactory_IError
    Object *schemametadata.MetadataObjectType
  }{Errors: &errors, Object: object})
  if calls != 1 {
    t.Fatal("comment tags should not be applied twice to the same object")
  }
  Iterate_metadata_comment_tags(struct {
    Errors *[]MetadataFactory_IError
    Object *schemametadata.MetadataObjectType
  }{Errors: &errors})
  MetadataCommentTagAnalyzer = nil
  Iterate_metadata_comment_tags(struct {
    Errors *[]MetadataFactory_IError
    Object *schemametadata.MetadataObjectType
  }{Errors: &errors, Object: schemametadata.MetadataObjectType_create(schemametadata.MetadataObjectType{
    Name:       "NoAnalyzer",
    Properties: []*schemametadata.MetadataProperty{property},
  })})
  file := nativeparser.ParseSourceFile(
    nativeast.SourceFileParseOptions{FileName: filepath.ToSlash(filepath.Join(t.TempDir(), "comment.ts"))},
    `interface Box {
  /**
   * box description
   * @type {string}
   * @param value parameter description
   */
  field: string;
}
`,
    nativecore.ScriptKindTS,
  )
  member := file.Statements.Nodes[0].AsInterfaceDeclaration().Members.Nodes[0]
  symbol := &nativeast.Symbol{
    Name:             "field",
    ValueDeclaration: member,
    Declarations:     []*nativeast.Node{member},
  }
  if len(metadata_node_js_doc_tags(symbol)) == 0 || metadata_node_description(symbol) == nil {
    t.Fatal("parsed JSDoc tags and description should be discovered")
  }
  for _, jsdoc := range member.JSDoc(nil) {
    doc := jsdoc.AsJSDoc()
    if doc == nil || doc.Tags == nil {
      continue
    }
    for _, tag := range doc.Tags.Nodes {
      _ = metadata_js_doc_type_expression_text(tag)
      _ = metadata_js_doc_parameter_name(tag)
    }
  }
  if metadata_js_doc_type_expression_text(nil) != "" ||
    metadata_js_doc_comment_text(nil) != "" {
    t.Fatal("nil JSDoc helpers should return empty text")
  }
}

func commentTagsText(name string, text string) schemametadata.IJsDocTagInfo {
  return schemametadata.IJsDocTagInfo{
    Name: name,
    Text: []schemametadata.IJsDocTagInfo_IText{{Kind: "text", Text: text}},
  }
}

func commentTagsLiteral(value string) *schemametadata.MetadataSchema {
  meta := schemametadata.MetadataSchema_initialize()
  meta.Constants = append(meta.Constants, schemametadata.MetadataConstant_create(schemametadata.MetadataConstant{
    Type: "string",
    Values: []*schemametadata.MetadataConstantValue{
      schemametadata.MetadataConstantValue_create(schemametadata.MetadataConstantValue{Value: value}),
    },
  }))
  return meta
}
