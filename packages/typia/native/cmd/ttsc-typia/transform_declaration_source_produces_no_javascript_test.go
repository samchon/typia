//go:build typia_native_internal
// +build typia_native_internal

package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestTransformDeclarationSourceProducesNoJavaScript checks the authored operation results described below.
//
// A d.ts declaration has no executable JavaScript body; selecting JavaScript output cannot fabricate an artifact from its type declarations.
//
// 1. A declaration-only source owns the empty-emit boundary; ordinary valid source publication is covered separately.
// 2. Transforming a declaration-only source to JavaScript reports status three and no output produced.
//
// @evidence contracts/testing.md#behavioral-verification Transforming a declaration-only source to JavaScript reports status three and no output produced.
// @evidence contracts/testing.md#independent-expectations A d.ts declaration has no executable JavaScript body; selecting JavaScript output cannot fabricate an artifact from its type declarations.
// @evidence contracts/testing.md#distinguishing-cases A declaration-only source owns the empty-emit boundary; ordinary valid source publication is covered separately.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestTransformDeclarationSourceProducesNoJavaScript as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
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
