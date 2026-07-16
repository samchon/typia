package main

import (
  "path/filepath"
  "strings"
  "testing"
)

// TestTransformSingleFileFailureWritesNoStdout verifies the stdout publication path.
//
// Without `--out` the artifact is stdout, so withholding a file is not enough:
// the untransformed source must not reach the stream a caller pipes into a file.
// This is also the shape the wasm host reaches through `jsTransform`, whose
// `{ code, stdout, stderr }` response is exactly these three values.
//
//  1. Transform a typia-invalid source in `ts` and `js` with no `--out`.
//  2. Require exit 3 and the diagnostic on stderr.
//  3. Require stdout to be empty rather than carrying the untransformed call.
func TestTransformSingleFileFailureWritesNoStdout(t *testing.T) {
  for _, output := range []string{"ts", "js"} {
    t.Run(output, func(t *testing.T) {
      project := transformSingleFileProject(t, transformDiagnosticSource)
      outText, errText, code := ttscTypiaTestCapture(func() int {
        return runTransform([]string{
          "--cwd", project,
          "--tsconfig", "tsconfig.json",
          "--file", filepath.Join("src", "main.ts"),
          "--output", output,
        })
      })
      if code != 3 {
        t.Fatalf("invalid single-file transform should fail with code 3, got %d\nstdout=%s\nstderr=%s", code, outText, errText)
      }
      if !strings.Contains(errText, "error TS(typia.is):") {
        t.Fatalf("single-file diagnostic missing from stderr:\n%s", errText)
      }
      // Before the fix this carried the untransformed `typia.is<T>(input)` call.
      if outText != "" {
        t.Fatalf("failed single-file transform published an artifact on stdout:\n%s", outText)
      }
    })
  }
}
