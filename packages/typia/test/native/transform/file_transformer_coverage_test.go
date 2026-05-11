//go:build typia_native_internal
// +build typia_native_internal

package transform

import (
	"path/filepath"
	"testing"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	shimcore "github.com/microsoft/typescript-go/shim/core"
	shimparser "github.com/microsoft/typescript-go/shim/parser"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

// TestFileTransformerCoverage exercises file-level transform scaffolding.
//
// Full command tests cover native rewrites through a compiler program, but the
// file transformer also has nil/declaration guards, import injection ordering,
// diagnostic recovery, and environment type-cast helpers. Those branches can be
// covered with parsed source files and a synthetic context.
//
// 1. Preserve nil and declaration source files through the public transformer.
// 2. Inject import statements after directive prologue expressions.
// 3. Recover transformer diagnostics from a controlled panic path.
// 4. Exercise environment cast helpers and strict-option fallback helpers.
func TestFileTransformerCoverage(t *testing.T) {
	file := shimparser.ParseSourceFile(
		shimast.SourceFileParseOptions{FileName: filepath.Join(t.TempDir(), "file.ts")},
		`"use strict";
export const value = 1;
`,
		shimcore.ScriptKindTS,
	)
	if file == nil {
		t.Fatal("source file parse failed")
	}
	transformer := FileTransformer.Transform(FileTransformer_IEnvironments{})(nil)
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
	if index := fileTransformer_find_import_injection_index(file); index != 1 {
		t.Fatalf("directive prologue injection index mismatch: %d", index)
	}

	count := 0
	context := nativecontext.ITypiaContext{
		Extras: nativecontext.ITypiaContext_Extras{
			AddDiagnostic: func(*shimast.Diagnostic) int {
				count++
				return count
			},
		},
	}
	fileTransformer_addDiagnostic(FileTransformer_TryTransformNodeProps{Context: context})
	if count != 1 {
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
	if Transform(nil, nil, context.Extras)(file) == nil {
		t.Fatal("top-level transform should return a source file")
	}
}
