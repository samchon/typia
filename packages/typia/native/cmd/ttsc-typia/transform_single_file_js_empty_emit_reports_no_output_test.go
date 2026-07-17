package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestTransformSingleFileJSEmptyEmitReportsNoOutput verifies the negative twin
// of the `--output js` artifact match.
//
// Teaching the match where an `outDir` puts an artifact must not turn it into a
// match that always succeeds. "No output produced" is a real outcome: a source
// can belong to the program and still have no JavaScript of its own, and the
// caller needs exit 3 rather than an empty file behind exit 0. Every probe puts
// a real artifact for a sibling source through the same write callback, so a
// check that stopped discriminating would capture that neighbor and report
// success. The three probes reach the outcome by different routes -- an emit
// that skips the file, an emit that withholds it, and a file the resolution
// gives no output path at all -- so no one of them stands in for the others.
//
//  1. Ask for the JavaScript of a declaration source, which the emit skips.
//  2. Ask for the JavaScript of a source outside `rootDir`, whose output would
//     land outside `outDir` and is therefore withheld by the emit.
//  3. Ask for the JavaScript of a JSON module that would be emitted over
//     itself, which resolves to no JavaScript output path.
//  4. Require exit 3, the "no output produced" report, and an unwritten `--out`
//     in all three.
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
