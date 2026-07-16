package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestBuildNoEmitPreservesAnalysisOnlyOptions verifies forced traversal does
// not invalidate options that are legal precisely because the project emits
// nothing.
//
// `allowImportingTsExtensions` is valid with `noEmit`, but invalid in an
// emitting program. The private emit-enabled traversal must therefore reuse
// the already-proven TypeScript analysis instead of reporting diagnostics
// introduced only by its internal override.
//
//  1. Create a valid no-emit typia project with allowImportingTsExtensions.
//  2. Run the native build command through its configured no-emit path.
//  3. Require success and prove the private traversal publishes no output.
func TestBuildNoEmitPreservesAnalysisOnlyOptions(t *testing.T) {
  project := buildNoEmitDiagnosticProject(t, true)
  configPath := filepath.Join(project, "tsconfig.json")
  config, err := os.ReadFile(configPath)
  if err != nil {
    t.Fatalf("read tsconfig: %v", err)
  }
  configured := strings.Replace(
    string(config),
    `"noEmit": true`,
    `"noEmit": true,
    "allowImportingTsExtensions": true`,
    1,
  )
  if err := os.WriteFile(configPath, []byte(configured), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  source := `import typia from "typia";
export const isValue = (input: unknown): input is { value: number } =>
  typia.is<{ value: number }>(input);
`
  if err := os.WriteFile(filepath.Join(project, "src", "main.ts"), []byte(source), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }

  out, errText, code := ttscTypiaTestCapture(func() int {
    return runBuild([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
    })
  })
  if code != 0 {
    t.Fatalf("valid analysis-only project failed with code %d\nstdout=%s\nstderr=%s", code, out, errText)
  }
  for _, path := range []string{
    filepath.Join(project, "dist"),
    filepath.Join(project, "cache.tsbuildinfo"),
  } {
    if _, err := os.Stat(path); !os.IsNotExist(err) {
      t.Fatalf("analysis-only traversal published %s: %v", path, err)
    }
  }
}
