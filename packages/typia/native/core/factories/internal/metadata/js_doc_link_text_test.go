//go:build typia_native_internal
// +build typia_native_internal

package metadata

import (
  "path/filepath"
  "testing"

  nativeast "github.com/microsoft/typescript-go/shim/ast"
  nativecore "github.com/microsoft/typescript-go/shim/core"
  nativeparser "github.com/microsoft/typescript-go/shim/parser"
)

// TestJsDocLinkText verifies the metadata helper renders visible inline links.
//
// JSDoc link nodes split their entity target into Name() and their optional
// display label into Text(). This test pins the shared renderer directly so all
// metadata consumers keep qualified targets, normalized labels, call suffixes,
// URLs, and tag comments without depending only on an application-programmer
// integration.
//
// 1. Parse a property comment containing plain, qualified, labeled, URL, and
// unresolved and malformed links, empty labels, call suffixes, plus a link
// inside a JSDoc tag.
// 2. Reflect the property's description and tags through the metadata helpers.
// 3. Assert the visible text and punctuation are preserved deterministically.
//
// @evidence contracts/testing.md#behavioral-verification JSDoc is parsed from source and the link renderer returns descriptions and tags with qualified targets, labels, call suffixes, URLs and tag comments; a nil link renders empty.
// @evidence contracts/testing.md#independent-expectations Authored JSDoc text defines the visible output; expected strings are literals.
// @evidence contracts/testing.md#distinguishing-cases Qualified and labeled links, URL links and tag comments are separate rows with a nil control.
// @evidence contracts/testing.md#execution-ownership The typia_native_internal Go command (go -C packages/typia/test test -tags typia_native_internal ../native/...) runs this same-package Test function in process. The tagged test parses an in-memory source with the typescript-go parser and calls the renderer, with no filesystem fixture or process.
func TestJsDocLinkText(t *testing.T) {
  file := nativeparser.ParseSourceFile(
    nativeast.SourceFileParseOptions{FileName: filepath.ToSlash(filepath.Join(t.TempDir(), "links.ts"))},
    `interface ITarget {
  value: string;
}
interface IBox {
  /**
   * Plain; {@link ITarget}; {@link ITarget.value};
   * {@link ITarget | label}; {@linkcode ITarget};
   * {@linkplain ITarget.value}; {@link MissingTarget};
   * {@link https://example.com/docs}; {@link https://example.com/docs | docs}.
   * {@link ITarget | }; {@link makeTarget()}; {@link makeTarget() | maker}.
   * {@link Missing.};
   * @title {@link ITarget titled target}
   */
  field: string;
}
`,
    nativecore.ScriptKindTS,
  )
  member := file.Statements.Nodes[1].AsInterfaceDeclaration().Members.Nodes[0]
  symbol := &nativeast.Symbol{
    Name:             "field",
    ValueDeclaration: member,
    Declarations:     []*nativeast.Node{member},
  }
  description := metadata_node_description(symbol)
  if description == nil {
    t.Fatal("description was not reflected")
  }
  if *description != "Plain; ITarget; ITarget.value;\nlabel; ITarget;\nITarget.value; MissingTarget;\nhttps://example.com/docs; docs.\nITarget; makeTarget(); maker.\nMissing.;" {
    t.Fatalf("unexpected description: %q", *description)
  }
  tags := metadata_node_js_doc_tags(symbol)
  if len(tags) != 1 || tags[0].Name != "title" || len(tags[0].Text) != 1 || tags[0].Text[0].Text != "titled target" {
    t.Fatalf("unexpected tags: %#v", tags)
  }
  if metadata_js_doc_link_text(nil) != "" {
    t.Fatal("nil JSDoc link should render empty text")
  }
}
