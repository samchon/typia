//go:build typia_native_internal
// +build typia_native_internal

package main

import (
	"os"
	"path/filepath"
	"strings"
	"testing"
)

// TestTransformDeclarationSourceProducesNoJavaScript verifies JS transform reports empty emission.
//
// Declaration files can belong to the program while producing no JavaScript
// output. The single-file transform path must detect that empty capture instead
// of returning a successful but blank result.
//
// The file name deliberately spells out "javascript". Go reads a trailing `_js`
// on a source file name as a `GOOS=js` build constraint, so under the earlier
// name `..._produces_no_js_test.go` this case built only for `GOOS=js` -- where
// `main.go` (`//go:build !js`) drops out and the test package does not compile
// at all. It therefore ran on no platform whatsoever, and the tag it carries was
// never the reason. Keep a `_js`, `_windows`, `_linux`, or `_darwin` ending off
// a Go file name unless that constraint is meant.
//
// 1. Create a project that includes only a declaration source file.
// 2. Run single-file transform with JavaScript output.
// 3. Capture the command diagnostics.
// 4. Assert the command reports that no output was produced.
func TestTransformDeclarationSourceProducesNoJavaScript(t *testing.T) {
	root := transformCoverageRepoRoot(t)
	base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
	if err := os.MkdirAll(base, 0o755); err != nil {
		t.Fatalf("mkdir temp base: %v", err)
	}
	project, err := os.MkdirTemp(base, "declaration-source-")
	if err != nil {
		t.Fatalf("create temp fixture: %v", err)
	}
	t.Cleanup(func() {
		_ = os.RemoveAll(project)
	})
	src := filepath.Join(project, "src")
	if err := os.MkdirAll(src, 0o755); err != nil {
		t.Fatalf("mkdir fixture src: %v", err)
	}
	if err := os.WriteFile(filepath.Join(project, "tsconfig.json"), []byte(transformCoverageTSConfig), 0o644); err != nil {
		t.Fatalf("write tsconfig: %v", err)
	}
	if err := os.WriteFile(filepath.Join(src, "main.d.ts"), []byte("export declare const value: string;\n"), 0o644); err != nil {
		t.Fatalf("write declaration source: %v", err)
	}

	_, errText, code := transformCoverageCapture(func() int {
		return runTransform([]string{
			"--cwd", project,
			"--tsconfig", "tsconfig.json",
			"--file", "src/main.d.ts",
			"--output", "js",
			"--rewrite-mode", "none",
		})
	})
	if code != 3 || !strings.Contains(errText, "no output produced") {
		t.Fatalf("declaration transform mismatch: code=%d stderr=%s", code, errText)
	}
}
