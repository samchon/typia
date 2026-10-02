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

// TestJSDocParameterNameReadsQualifiedName verifies dotted JSDoc parameter names.
//
// TypeScript-Go represents `@param input.value` names as QualifiedName nodes,
// and upstream Node.Text panics for that kind. Metadata extraction must read
// the source span instead so generated Nestia/typia metadata can include nested
// JSDoc parameter comments without aborting the native transform.
//
// 1. Parse an interface member with `@param input.value`.
// 2. Walk the parsed JSDoc tags.
// 3. Read each parameter name through the metadata helper.
// 4. Assert the dotted name is returned without a panic.
//
// @evidence contracts/testing.md#behavioral-verification A dotted @param name in an interface member is parsed and the discovered parameter comment must include the qualified name without a panic.
// @evidence contracts/testing.md#independent-expectations The source span of the authored comment is the expectation.
// @evidence contracts/testing.md#distinguishing-cases One qualified name; simple names are exercised by other metadata tests.
// @evidence contracts/testing.md#execution-ownership The typia_native_internal Go command (go -C packages/typia/test test -tags typia_native_internal ../native/...) runs this same-package Test function in process. The tagged test parses in-memory source with the typescript-go parser, with no filesystem fixture or process.
func TestJSDocParameterNameReadsQualifiedName(t *testing.T) {
  file := nativeparser.ParseSourceFile(
    nativeast.SourceFileParseOptions{FileName: filepath.ToSlash(filepath.Join(t.TempDir(), "qualified.ts"))},
    `interface Box {
  /**
   * @param input.value nested value
   */
  field: string;
}
`,
    nativecore.ScriptKindTS,
  )
  member := file.Statements.Nodes[0].AsInterfaceDeclaration().Members.Nodes[0]

  found := false
  for _, jsdoc := range member.JSDoc(nil) {
    doc := jsdoc.AsJSDoc()
    if doc == nil || doc.Tags == nil {
      continue
    }
    for _, tag := range doc.Tags.Nodes {
      if metadata_js_doc_parameter_name(tag) == "input.value" {
        found = true
      }
    }
  }
  if found == false {
    t.Fatal("qualified JSDoc parameter name was not discovered")
  }
}
