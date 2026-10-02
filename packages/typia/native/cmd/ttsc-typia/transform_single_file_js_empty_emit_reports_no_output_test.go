package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestTransformSingleFileJSEmptyEmitReportsNoOutput checks the authored operation results described below.
//
// An emit with no executable output cannot report successful publication or manufacture an empty requested artifact.
//
// 1. Several empty-emission configurations distinguish that cause from transform diagnostic failures and from valid layout publication.
// 2. Each empty-emit layout returns status three with no output produced and leaves the requested --out path absent.
//
// @evidence contracts/testing.md#behavioral-verification Each empty-emit layout returns status three with no output produced and leaves the requested --out path absent.
// @evidence contracts/testing.md#independent-expectations An emit with no executable output cannot report successful publication or manufacture an empty requested artifact.
// @evidence contracts/testing.md#distinguishing-cases Several empty-emission configurations distinguish that cause from transform diagnostic failures and from valid layout publication.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestTransformSingleFileJSEmptyEmitReportsNoOutput as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
func TestTransformSingleFileJSEmptyEmitReportsNoOutput(t *testing.T) {
  for _, probe := range []struct {
    name    string
    extra   []string
    sources map[string]string
    file    string
  }{
    // A declaration source is in the program but never emitted, so no write
    // ever arrives for the path it resolves to.
    {
      name:  "declaration_source",
      extra: []string{`"rootDir": "src"`, `"outDir": "dist"`},
      sources: map[string]string{
        "src/types.d.ts": "export declare const value: string;\n",
        "src/main.ts":    transformSingleFileValidSource,
      },
      file: "src/types.d.ts",
    },
    // A source outside `rootDir` resolves to an output outside `outDir`, which
    // the emit refuses to write rather than escaping the output tree. The
    // source is ordinary TypeScript that transforms fine, so only the absent
    // write distinguishes it -- exactly the state the check exists to report.
    {
      name:  "output_escapes_out_dir",
      extra: []string{`"rootDir": "src/deep"`, `"outDir": "dist"`},
      sources: map[string]string{
        "src/deep/main.ts": transformSingleFileValidSource,
        "src/stray.ts":     transformSingleFileValidSource,
      },
      file: "src/stray.ts",
    },
    // A JSON module with no `outDir` would be emitted over its own source, so
    // the compiler resolves it to no JavaScript output path at all. This is the
    // one route that reaches the empty-path guard rather than an absent write.
    {
      name:  "json_module_emitted_over_itself",
      extra: []string{`"resolveJsonModule": true`},
      sources: map[string]string{
        "src/data.json": "{ \"value\": 1 }\n",
        "src/main.ts":   "import data from \"./data.json\";\nexport const value = data.value;\n",
      },
      file: "src/data.json",
    },
  } {
    t.Run(probe.name, func(t *testing.T) {
      project := transformSingleFileLayoutProject(t, probe.extra, probe.sources)
      outPath := filepath.Join(project, "artifact", "main.js")
      _, errText, code := ttscTypiaTestCapture(func() int {
        return runTransform([]string{
          "--cwd", project,
          "--tsconfig", "tsconfig.json",
          "--file", filepath.FromSlash(probe.file),
          "--output", "js",
          "--out", outPath,
        })
      })
      if code != 3 {
        t.Fatalf("an empty emit must still fail with code 3, got %d\nstderr=%s", code, errText)
      }
      if !strings.Contains(errText, "no output produced") {
        t.Fatalf("an empty emit must still report the cause:\n%s", errText)
      }
      // An empty emit leaves runTransformSingle through `if code != 0`, a
      // different branch than the diagnostic route the atomicity case pins, so
      // withholding the artifact needs its own check here.
      if _, err := os.Stat(outPath); !os.IsNotExist(err) {
        t.Fatalf("an empty emit must publish nothing, but --out exists: %v", err)
      }
    })
  }
}
