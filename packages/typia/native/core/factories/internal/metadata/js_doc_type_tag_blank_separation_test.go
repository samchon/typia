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

// TestJsDocTypeTagBlankSeparation verifies blank comment lines preserve tag data.
//
// Formatting separates native JSDoc groups with blank starred lines. Those
// separators are comment syntax, not literal payload added to a type tag;
// genuine asterisks in a tag's description must remain data.
//
//  1. Parse compact, braced and blank-separated tags with native whitespace spellings.
//  2. Extract tags through the same metadata helper used by the native producer.
//  3. Compare exact payloads, keeping literal stars, linked-text separation and
//     Unicode prefixes that the JSDoc scanner treats as content.
//
// @evidence contracts/testing.md#behavioral-verification ParseSourceFile creates actual JSDoc nodes and metadata_node_js_doc_tags extracts their public metadata values; exact tag arrays expose added star payload or dropped legitimate description text.
// @evidence contracts/testing.md#independent-expectations Literal arrays follow the JSDoc scanner's ASCII-started whitespace and CR/LF delimiter rules; Unicode-only prefixes and Unicode line characters remain content, as confirmed against TypeScript's independent JSDoc parser. Expected link labels, integer values and literal stars are authored separately from the metadata helper.
// @evidence contracts/testing.md#distinguishing-cases Compact and braced tags, CRLF and ASCII horizontal whitespace, and ASCII-started mixed Unicode horizontal whitespace retain integer meaning; inline and continuation literal stars, Unicode-only prefix content and Unicode line characters prevent over-removal. Line and paragraph separators after an ASCII space must not be crossed to strip a genuine star. Linked descriptions retain their separating newline. All nineteen spellings report independent subtest identities.
// @evidence contracts/testing.md#execution-ownership This tagged same-package Go unit directly calls the parser and owning private metadata helper in one test process, with an in-memory source and no native plugin host or filesystem fixture; the canonical typia_native_internal Go command executes its Test entry and subtests.
func TestJsDocTypeTagBlankSeparation(t *testing.T) {
  filename, err := filepath.Abs("type-tag.ts")
  if err != nil {
    t.Fatal(err)
  }
  for _, fixture := range []struct {
    name        string
    text        string
    description string
    minimum     string
  }{
    {"adjacent", "* @type int\n * @minimum 3\n * @title literal * marks", "", "3"},
    {"ascii-unicode-line-content", "* @type int\n \u2028*\n * @minimum 3\n * @title literal * marks", "*", "3"},
    {"ascii-unicode-paragraph-content", "* @type int\n \u2029*\n * @minimum 3\n * @title literal * marks", "*", "3"},
    {"separated", "* @type int\n *\n * @minimum 3\n *\n * @title literal * marks", "", "3"},
    {"braced", "* @type {int}\n *\n * @minimum 3\n *\n * @title literal * marks", "", "3"},
    {"inline-star", "* @type int *\n * @minimum 3\n * @title literal * marks", "*", "3"},
    {"next-line-star", "* @type int\n * *\n * @minimum 3\n * @title literal * marks", "*", "3"},
    {"linked-description", "* @type int\n * {@link Left}\n * {@link Right}\n * @minimum 3\n * @title literal * marks", "Left\nRight", "3"},
    {"crlf-separated", "* @type int\r\n *\r\n * @minimum 3\r\n *\r\n * @title literal * marks", "", "3"},
    {"tab-separated", "* @type int\n\t*\n\t* @minimum 3\n\t*\n\t* @title literal * marks", "", "3"},
    {"vertical-tab-separated", "* @type int\n\v*\n\v* @minimum 3\n\v*\n\v* @title literal * marks", "", "3"},
    {"form-feed-separated", "* @type int\n\f*\n\f* @minimum 3\n\f*\n\f* @title literal * marks", "", "3"},
    {"space-nbsp-separated", "* @type int\n \u00a0*\n \u00a0* @minimum 3\n \u00a0*\n \u00a0* @title literal * marks", "", "3"},
    {"space-bom-separated", "* @type int\n \ufeff*\n \ufeff* @minimum 3\n \ufeff*\n \ufeff* @title literal * marks", "", "3"},
    {"space-zero-width-separated", "* @type int\n \u200b*\n \u200b* @minimum 3\n \u200b*\n \u200b* @title literal * marks", "", "3"},
    {"nbsp-content", "* @type int\n\u00a0*\n\u00a0* @minimum 3\n\u00a0*\n\u00a0* @title literal * marks", "*", "3\n\u00a0*\n\u00a0*"},
    {"bom-content", "* @type int\n\ufeff*\n\ufeff* @minimum 3\n\ufeff*\n\ufeff* @title literal * marks", "*", "3\n\ufeff*\n\ufeff*"},
    {"zero-width-content", "* @type int\n\u200b*\n\u200b* @minimum 3\n\u200b*\n\u200b* @title literal * marks", "*", "3\n\u200b*\n\u200b*"},
    {"unicode-line-content", "* @type int\u2028 *\u2028 * @minimum 3\u2029 *\u2029 * @title literal * marks", "*", "3\u2029 *\u2029 *"},
  } {
    t.Run(fixture.name, func(t *testing.T) {
      file := nativeparser.ParseSourceFile(
        nativeast.SourceFileParseOptions{FileName: filepath.ToSlash(filename)},
        "interface Box {\n /**\n "+fixture.text+"\n */\n field: number;\n}\n",
        nativecore.ScriptKindTS,
      )
      member := file.Statements.Nodes[0].AsInterfaceDeclaration().Members.Nodes[0]
      symbol := &nativeast.Symbol{
        Name:             "field",
        ValueDeclaration: member,
        Declarations:     []*nativeast.Node{member},
      }
      wanted := []schemametadata.IJsDocTagInfo{
        {Name: "type", Text: []schemametadata.IJsDocTagInfo_IText{{Kind: "text", Text: "int"}}},
        {Name: "minimum", Text: []schemametadata.IJsDocTagInfo_IText{{Kind: "text", Text: fixture.minimum}}},
        {Name: "title", Text: []schemametadata.IJsDocTagInfo_IText{{Kind: "text", Text: "literal * marks"}}},
      }
      if fixture.description != "" {
        wanted[0].Text = append(wanted[0].Text, schemametadata.IJsDocTagInfo_IText{Kind: "text", Text: fixture.description})
      }
      if actual := metadata_node_js_doc_tags(symbol); !reflect.DeepEqual(actual, wanted) {
        t.Fatalf("tag payload changed: got %#v, want %#v", actual, wanted)
      }
    })
  }
}
