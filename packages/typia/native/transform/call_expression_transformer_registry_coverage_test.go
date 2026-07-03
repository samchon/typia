//go:build typia_native_internal
// +build typia_native_internal

package transform

import (
	"path/filepath"
	"testing"

	shimast "github.com/microsoft/typescript-go/shim/ast"
	nativecontext "github.com/samchon/typia/packages/typia/native/core/context"
)

// TestCallExpressionTransformerRegistryCoverage exercises registry helpers.
//
// End-to-end transform fixtures cover successful typia calls, but the registry
// includes many method aliases whose closures are only materialized for specific
// API names. This test walks the registry directly and checks early-return
// helpers without requiring a checker-backed TypeScript call signature.
//
// 1. Verify nil expressions return nil from the transformer entrypoint.
// 2. Check target-path matching for typia source, typia declarations, and misses.
// 3. Confirm standalone AST nodes without a source file report no source file.
// 4. Materialize every registered module method transformer closure.
func TestCallExpressionTransformerRegistryCoverage(t *testing.T) {
	if CallExpressionTransformer.Transform(CallExpressionTransformer_TransformProps{
		Context: nativecontext.ITypiaContext{},
	}) != nil {
		t.Fatal("nil call expressions should not transform")
	}
	if module, ok := callExpressionTransformer_targetModule(filepath.Join("node_modules", "typia", "src", "module.ts")); !ok || module != "module" {
		t.Fatalf("typia source module target mismatch: module=%q ok=%v", module, ok)
	}
	if module, ok := callExpressionTransformer_targetModule(filepath.Join("node_modules", "typia", "lib", "json.d.ts")); !ok || module != "json" {
		t.Fatalf("typia declaration target mismatch: module=%q ok=%v", module, ok)
	}
	if _, ok := callExpressionTransformer_targetModule(filepath.Join("node_modules", "other", "src", "module.ts")); ok {
		t.Fatal("typia target path detection mismatch")
	}
	if callExpressionTransformer_sourceFile(shimast.NewNodeFactory(shimast.NodeFactoryHooks{}).NewIdentifier("standalone")) != nil {
		t.Fatal("standalone nodes should not resolve a source file")
	}
	for module, methods := range callExpressionTransformer_FUNCTORS() {
		if len(methods) == 0 {
			t.Fatalf("%s registry should not be empty", module)
		}
		for name, materialize := range methods {
			if materialize == nil || materialize() == nil {
				t.Fatalf("%s.%s registry closure returned nil", module, name)
			}
		}
	}
}
