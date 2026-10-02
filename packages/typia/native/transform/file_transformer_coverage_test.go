//go:build typia_native_internal
// +build typia_native_internal

package transform

import (
  "path/filepath"
  "testing"

  shimast "github.com/microsoft/typescript-go/shim/ast"
  shimcore "github.com/microsoft/typescript-go/shim/core"
  shimparser "github.com/microsoft/typescript-go/shim/parser"
  shimprinter "github.com/microsoft/typescript-go/shim/printer"
  nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

// TestFileTransformerCoverage exercises file-level transform scaffolding.
//
// Full command tests cover native rewrites through a compiler program, but the
// file transformer also has nil/declaration guards, import injection ordering,
// diagnostic forwarding, and environment type-cast helpers. Those branches can be
// covered with parsed source files and a synthetic context.
//
// 1. Preserve nil and declaration source files through the public transformer.
// 2. Inject import statements after directive prologue expressions.
// 3. Forward an authored diagnostic through the direct diagnostic hook.
// 4. Exercise environment cast helpers and strict-option fallback helpers.
//
// @evidence contracts/testing.md#behavioral-verification The file transformer is called with nil, declaration and parsed source files; import injection preserves original statement identities around the authored import after the directive, and the direct diagnostic hook forwards the exact authored message once. The top-level transform only requires a non-nil file; panic recovery is not exercised.
// @evidence contracts/testing.md#independent-expectations Authored sources state which files must stay unchanged, the directive/import/export order and the diagnostic text; the final non-nil file check has no independent content oracle.
// @evidence contracts/testing.md#distinguishing-cases Nil, declaration and source inputs give guard negatives and one injection positive.
// @evidence contracts/testing.md#execution-ownership The typia_native_internal Go command (go -C packages/typia/test test -tags typia_native_internal ../native/...) runs this same-package Test function in process. The tagged test parses in-memory sources with the typescript-go parser, with no filesystem fixture or process.
func TestFileTransformerCoverage(t *testing.T) {
  file := shimparser.ParseSourceFile(
    shimast.SourceFileParseOptions{FileName: filepath.ToSlash(filepath.Join(t.TempDir(), "file.ts"))},
    `"use strict";
export const value = 1;
`,
    shimcore.ScriptKindTS,
  )
  if file == nil {
    t.Fatal("source file parse failed")
  }
  if file.Statements == nil || len(file.Statements.Nodes) != 2 {
    t.Fatal("authored directive/export fixture must have two statements")
  }
  transformer := FileTransformer.Transform(FileTransformer_IEnvironments{})
  if transformer(nil) != nil {
    t.Fatal("nil source file should remain nil")
  }
  declFile := *file
  declFile.IsDeclarationFile = true
  if transformer(&declFile) != &declFile {
    t.Fatal("declaration file should remain unchanged")
  }
  factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
  injected := fileTransformer_inject_imports(file, []*shimast.Node{
    factory.NewImportDeclaration(
      nil,
      nil,
      factory.NewStringLiteral("side-effect", shimast.TokenFlagsNone),
      nil,
    ),
  })
  if injected == nil || len(injected.Statements.Nodes) != len(file.Statements.Nodes)+1 {
    t.Fatal("import injection did not add a statement")
  }
  if injected.Statements.Nodes[0] != file.Statements.Nodes[0] ||
    injected.Statements.Nodes[1].Kind != shimast.KindImportDeclaration ||
    injected.Statements.Nodes[1].AsImportDeclaration().ModuleSpecifier.Text() != "side-effect" ||
    injected.Statements.Nodes[2] != file.Statements.Nodes[1] {
    t.Fatal("injected import must follow the original directive and precede the original export")
  }
  if index := fileTransformer_find_import_injection_index(file); index != 1 {
    t.Fatalf("directive prologue injection index mismatch: %d", index)
  }

  count := 0
  message := ""
  context := nativecontext.ITypiaContext{
    Extras: nativecontext.ITypiaContext_Extras{
      AddDiagnostic: func(diag *nativecontext.ITypiaDiagnostic) int {
        count++
        if diag != nil {
          message = diag.Message
        }
        return count
      },
    },
  }
  fileTransformer_addDiagnostic(FileTransformer_TryTransformNodeProps{Context: context}, "typia.test", "details")
  if count != 1 || message != "typia transform error: details" {
    t.Fatalf("diagnostic hook was not called: %d", count)
  }
  if fileTransformer_program("bad") != nil ||
    fileTransformer_compilerOptions("bad") != nil ||
    fileTransformer_checker("bad") != nil {
    t.Fatal("environment cast helpers should return nil for wrong types")
  }
  if transform_compilerOptions(nil) != nil ||
    transform_checker(nil) != nil ||
    !transform_strict(nil) {
    t.Fatal("transform fallback helpers returned unexpected values")
  }
  if Transform(nil, nil, context.Extras, shimprinter.NewEmitContext())(file) == nil {
    t.Fatal("top-level transform should return a source file")
  }
}
