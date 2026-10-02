package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestTransformSingleFileSuccessPublishesArtifact checks the authored operation results described below.
//
// Successful single-file transformation must produce the selected lowered artifact, whereas preserving its runtime stub would not implement the API.
//
// 1. Both output formats are positive twins of failure atomicity/no-stdout cases and inspect actual artifact content.
// 2. TypeScript and JavaScript --out modes succeed without diagnostics, publish a numeric validator and remove the generic typia call.
//
// @evidence contracts/testing.md#behavioral-verification TypeScript and JavaScript --out modes succeed without diagnostics, publish a numeric validator and remove the generic typia call.
// @evidence contracts/testing.md#independent-expectations Successful single-file transformation must produce the selected lowered artifact, whereas preserving its runtime stub would not implement the API.
// @evidence contracts/testing.md#distinguishing-cases Both output formats are positive twins of failure atomicity/no-stdout cases and inspect actual artifact content.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestTransformSingleFileSuccessPublishesArtifact as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestTransformSingleFileSuccessPublishesArtifact(t *testing.T) {
  for _, output := range []string{"ts", "js"} {
    t.Run(output, func(t *testing.T) {
      project := transformSingleFileProject(t, transformSingleFileValidSource)
      outPath := filepath.Join(project, "dist", "main."+output)
      _, errText, code := ttscTypiaTestCapture(func() int {
        return runTransform([]string{
          "--cwd", project,
          "--tsconfig", "tsconfig.json",
          "--file", filepath.Join("src", "main.ts"),
          "--output", output,
          "--out", outPath,
        })
      })
      if code != 0 {
        t.Fatalf("valid single-file transform should succeed, got %d\nstderr=%s", code, errText)
      }
      if errText != "" {
        t.Fatalf("valid single-file transform reported diagnostics:\n%s", errText)
      }
      data, err := os.ReadFile(outPath)
      if err != nil {
        t.Fatalf("valid single-file transform published no artifact: %v", err)
      }
      text := string(data)
      if strings.Contains(text, "typia.is<") {
        t.Fatalf("published artifact still carries the untransformed call:\n%s", text)
      }
      if !strings.Contains(text, `"number"`) {
        t.Fatalf("published artifact does not carry the lowered validator:\n%s", text)
      }
    })
  }
}
