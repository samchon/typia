package main

import (
  "path/filepath"
  "strings"
  "testing"
)

// TestTransformWasmHostArgvReportsDiagnostics verifies the wasm host contract.
//
// `main_wasm.go` is `js && wasm` only, so its `jsTransform` cannot be called
// here. It carries no decision of its own: it renders the JS options object into
// argv via `transformArgs`, hands that to this same `runTransform`, and returns
// the resulting `{ code, stdout, stderr }`. Driving the exact argv it builds --
// `--cwd=`/`--tsconfig=`/`--file=` with its `--output=ts` default -- therefore
// pins what a playground caller observes: the typia error, not a stub.
//
//  1. Build the argv `transformArgs` produces for a single-file request.
//  2. Run it against a typia-invalid source.
//  3. Require code 3, the diagnostic in stderr, and no stub in stdout.
func TestTransformWasmHostArgvReportsDiagnostics(t *testing.T) {
  project := transformSingleFileProject(t, transformDiagnosticSource)
  argv := []string{
    "--cwd=" + project,
    "--tsconfig=tsconfig.json",
    "--file=" + filepath.Join(project, "src", "main.ts"),
    "--output=ts",
  }
  outText, errText, code := ttscTypiaTestCapture(func() int { return runTransform(argv) })
  if code != 3 {
    t.Fatalf("wasm host argv should surface code 3, got %d\nstdout=%s\nstderr=%s", code, outText, errText)
  }
  if !strings.Contains(errText, "non-specified generic argument") {
    t.Fatalf("wasm host argv did not surface the typia diagnostic:\n%s", errText)
  }
  if outText != "" {
    t.Fatalf("wasm host argv returned an untransformed stub as stdout:\n%s", outText)
  }
}
