package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestBuildNoEmitPreservesAnalysisOnlyOptions checks the authored operation results described below.
//
// allowImportingTsExtensions is legal for noEmit analysis; an internal traversal override must not invalidate already-valid user options or publish outputs.
//
// 1. A valid typia call uses noEmit together with the analysis-only option; invalid transform noEmit twins are owned by the neighboring diagnostic case.
// 2. The configured noEmit build succeeds without private emit diagnostics and creates neither dist nor incremental state.
//
// @evidence contracts/testing.md#behavioral-verification The configured noEmit build succeeds without private emit diagnostics and creates neither dist nor incremental state.
// @evidence contracts/testing.md#independent-expectations allowImportingTsExtensions is legal for noEmit analysis; an internal traversal override must not invalidate already-valid user options or publish outputs.
// @evidence contracts/testing.md#distinguishing-cases A valid typia call uses noEmit together with the analysis-only option; invalid transform noEmit twins are owned by the neighboring diagnostic case.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestBuildNoEmitPreservesAnalysisOnlyOptions as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
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
  if strings.TrimSpace(errText) != "" {
    t.Fatalf("valid analysis-only project reported private emit diagnostics:\n%s", errText)
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
