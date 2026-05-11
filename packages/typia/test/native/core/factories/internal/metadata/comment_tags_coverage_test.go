//go:build typia_native_internal
// +build typia_native_internal

package metadata

import (
	"path/filepath"
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
// 1. Apply type, format, pattern, length, items, uniqueItems, and numeric tags.
// 2. Verify string, number, bigint, and array tag buckets receive metadata tags.
// 3. Exercise error reporting and idempotent object tagging.
// 4. Parse JSDoc AST nodes and cover type-expression/comment fallback helpers.
// 5. Cover helper fallbacks for invalid formats, nil metadata, and numeric parsing.
func TestCommentTagsCoverage(t *testing.T) {
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
	if len(value.Atomics[0].Tags) == 0 ||
		len(value.Atomics[1].Tags) == 0 ||
		len(value.Atomics[2].Tags) == 0 ||
		len(value.Arrays[0].Tags) == 0 ||
		len(errors) == 0 {
		t.Fatal("comment tags were not applied to every metadata bucket")
	}
	before := len(value.Atomics[0].Tags[0])
	Iterate_metadata_comment_tags(struct {
		Errors *[]MetadataFactory_IError
		Object *schemametadata.MetadataObjectType
	}{Errors: &errors, Object: object})
	if len(value.Atomics[0].Tags[0]) != before {
		t.Fatal("comment tags should not be applied twice to the same object")
	}
	Iterate_metadata_comment_tags(struct {
		Errors *[]MetadataFactory_IError
		Object *schemametadata.MetadataObjectType
	}{Errors: &errors})
	if _, ok := iterate_metadata_comment_tags_format("unknown"); ok {
		t.Fatal("unknown format should not produce a metadata tag")
	}
	iterate_metadata_comment_tags_type(value, "int")
	iterate_metadata_comment_tags_type(value, "uint")
	iterate_metadata_comment_tags_type(value, "double")
	iterate_metadata_comment_tags_type(value, "unknown")
	iterate_metadata_comment_tags_add_atomic(nil, "string", schemametadata.IMetadataTypeTag{})
	iterate_metadata_comment_tags_add_array(nil, schemametadata.IMetadataTypeTag{})
	if iterate_metadata_comment_tags_value(commentTagsText("type", "{ int32 }")) != "int32" ||
		iterate_metadata_comment_tags_number("bad") != "bad" ||
		iterate_metadata_comment_tags_uint("bad") != "bad" {
		t.Fatal("comment tag helper fallback parsing failed")
	}
	file := nativeparser.ParseSourceFile(
		nativeast.SourceFileParseOptions{FileName: filepath.Join(t.TempDir(), "comment.ts")},
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
