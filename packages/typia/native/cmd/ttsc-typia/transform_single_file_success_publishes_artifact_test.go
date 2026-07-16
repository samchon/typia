package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestTransformSingleFileSuccessPublishesArtifact verifies the positive twin.
//
// Consulting the diagnostics before publishing must not make a clean transform
// withhold its artifact: the guard has to key on a reported diagnostic, not on
// merely having run. This pins the success side of the same decision in both
// output modes, including that the call was actually rewritten rather than
// copied through as an untransformed stub.
//
//  1. Transform a typia-valid source with `--out` in `ts` and `js`.
//  2. Require exit 0 and a silent stderr.
//  3. Require the published artifact to exist and carry the lowered validator.
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
