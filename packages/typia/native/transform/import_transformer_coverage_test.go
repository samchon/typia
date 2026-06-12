//go:build typia_native_internal
// +build typia_native_internal

package transform

import (
	"path/filepath"
	"testing"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimcore "github.com/microsoft/typescript-go/shim/core"
	shimparser "github.com/microsoft/typescript-go/shim/parser"
)

// TestImportTransformerCoverage exercises import rewrite helpers.
//
// Command-level tests use transform output, but the import transformer has
// source-file, declaration-file, relative-path, typia-import cleanup, and helper
// predicate branches that are easier to verify directly. This test keeps those
// branches in the transform package where private AST helpers are visible.
//
// 1. Parse a source file with relative imports and transformable typia calls.
// 2. Run the public import transformer and direct node rewrite helper.
// 3. Exercise typia import detection and identifier/property-chain predicates.
// 4. Verify nil and declaration-file inputs are returned unchanged.
// 5. Cover named typia import cleanup and normalized relative rewrite output.
func TestImportTransformerCoverage(t *testing.T) {
	file := shimparser.ParseSourceFile(
		shimast.SourceFileParseOptions{FileName: filepath.ToSlash(filepath.Join(t.TempDir(), "project", "src", "main.ts"))},
		`import typia from "typia";
import outside from "../outside";
export const value = typia.is<string>("x");
export const kept = outside;
`,
		shimcore.ScriptKindTS,
	)
	if file == nil {
		t.Fatal("source file parse failed")
	}
	transformer := ImportTransformer.Transform(ImportTransformer_TransformProps{
		From: filepath.Join("project", "src"),
		To:   filepath.Join("project", "out"),
	})(nil)
	if transformer(nil) != nil {
		t.Fatal("nil source file should remain nil")
	}
	declFile := *file
	declFile.IsDeclarationFile = true
	if transformer(&declFile) != &declFile {
		t.Fatal("declaration files should remain unchanged")
	}
	if transformed := transformer(file); transformed == nil || len(transformed.Statements.Nodes) == 0 {
		t.Fatal("import transformer returned an empty file")
	}
	defaultOnly := shimparser.ParseSourceFile(
		shimast.SourceFileParseOptions{FileName: filepath.ToSlash(filepath.Join(t.TempDir(), "project", "src", "default.ts"))},
		`import typia from "typia";
export const value = typia.is<string>("x");
`,
		shimcore.ScriptKindTS,
	)
	if cleaned := removeUnusedTypiaImports(defaultOnly); cleaned == nil {
		t.Fatal("default-only cleanup returned nil")
	}
	named := shimparser.ParseSourceFile(
		shimast.SourceFileParseOptions{FileName: filepath.ToSlash(filepath.Join(t.TempDir(), "project", "src", "named.ts"))},
		`import typia, { is, assert as assertTypia } from "typia";
import "typia";
export const kept = typia;
export const alsoKept = is;
export const aliasKept = assertTypia;
`,
		shimcore.ScriptKindTS,
	)
	if cleaned := removeUnusedTypiaImports(named); cleaned == nil || len(cleaned.Statements.Nodes) == 0 {
		t.Fatal("named cleanup returned an empty file")
	}
	if removeUnusedTypiaImports(nil) != nil {
		t.Fatal("nil cleanup should stay nil")
	}

	factory := shimast.NewNodeFactory(shimast.NodeFactoryHooks{})
	importNode := factory.NewImportDeclaration(
		nil,
		nil,
		factory.NewStringLiteral("../shared", shimast.TokenFlagsNone),
		nil,
	)
	rewritten := importTransformer_transform_node(importTransformer_transformNodeProps{
		Top:  filepath.Join("project", "src"),
		From: filepath.Join("project", "src", "nested"),
		To:   filepath.Join("project", "out", "nested"),
		Node: importNode,
	})
	if rewritten == nil {
		t.Fatal("relative import rewrite returned nil")
	}
	addDotImport := factory.NewImportDeclaration(
		nil,
		nil,
		factory.NewStringLiteral("../out/shared", shimast.TokenFlagsNone),
		nil,
	)
	addDot := importTransformer_transform_node(importTransformer_transformNodeProps{
		Top:  filepath.Join("project", "src"),
		From: filepath.Join("project", "src"),
		To:   filepath.Join("project", "out"),
		Node: addDotImport,
	})
	if addDot == nil {
		t.Fatal("relative import rewrite with dot prefix returned nil")
	}
	bareImport := factory.NewImportDeclaration(
		nil,
		nil,
		factory.NewStringLiteral("typia", shimast.TokenFlagsNone),
		nil,
	)
	if importTransformer_transform_node(importTransformer_transformNodeProps{Node: bareImport}) != bareImport {
		t.Fatal("bare import should not be rewritten")
	}
	if importTransformer_transform_node(importTransformer_transformNodeProps{Node: nil}) != nil {
		t.Fatal("nil import node should stay nil")
	}
	if get_directory_path(filepath.Join("a", "b", "file.ts")) != filepath.Clean(filepath.Join("a", "b")) {
		t.Fatal("directory path helper returned unexpected value")
	}
	if importTransformer_typiaImport(file.Statements.Nodes[0]) == nil {
		t.Fatal("typia import was not detected")
	}
	if importTransformer_identifierText(factory.NewIdentifier("typia")) != "typia" ||
		importTransformer_identifierText(nil) != "" {
		t.Fatal("identifier text helper returned unexpected output")
	}
	if importTransformer_typiaImport(bareImport) == nil {
		t.Fatal("bare typia import should still be recognized as typia")
	}
	access := factory.NewPropertyAccessExpression(
		factory.NewIdentifier("typia"),
		nil,
		factory.NewIdentifier("is"),
		shimast.NodeFlagsNone,
	)
	call := factory.NewCallExpression(access, nil, nil, nil, shimast.NodeFlagsNone)
	access.Parent = call
	if !importTransformer_isLikelyTransformableCall(access) ||
		!importTransformer_isTypiaPropertyChain(access) {
		t.Fatal("transformable typia call was not recognized")
	}
	if importTransformer_isLikelyTransformableCall(factory.NewIdentifier("typia")) {
		t.Fatal("standalone identifiers are not transformable calls")
	}
}
