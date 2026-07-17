package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestTransformSingleFileJSLocatesOutputAcrossLayouts verifies `--output js`
// finds its artifact wherever the compiler places the emit.
//
// `transformSingleToJavaScript` captures the emit by matching the write callback
// against the requested source. Comparing whole path stems made that match ask
// whether `dist/main` equals `src/main`, so every project with an `outDir` --
// which is every realistic layout -- reported "no output produced" and exited 3
// over a transform that had in fact succeeded (samchon/typia#2134). `outDir` is
// only one of the settings that reposition an emit, so this pins the whole class
// rather than the reported witness: the match must come from the compiler's own
// output-path resolution, the same one the emitter uses to choose where to
// write, so no combination of `outDir`, `rootDir`, `rootDirs`, or source nesting
// can desynchronize the two.
//
//  1. Build the same typia-valid source under each output-path layout.
//  2. Transform it with `--output js --out`.
//  3. Require exit 0, a silent stderr, and a published artifact carrying the
//     lowered validator rather than the untransformed call.
func TestTransformSingleFileJSLocatesOutputAcrossLayouts(t *testing.T) {
  for _, layout := range []struct {
    name  string
    extra []string
    file  string
  }{
    // The reported regression. With no `rootDir` the common source directory is
    // the tsconfig's own directory, so the emit lands at `dist/src/main.js`.
    {
      name:  "out_dir",
      extra: []string{`"outDir": "dist"`},
      file:  "src/main.ts",
    },
    // `rootDir` re-bases the emit again, to `dist/main.js`, so a fix keyed on
    // `outDir` alone would still put the artifact somewhere else than expected.
    {
      name:  "root_dir_and_out_dir",
      extra: []string{`"rootDir": "src"`, `"outDir": "dist"`},
      file:  "src/main.ts",
    },
    // Nesting below the root dir carries into the output as `dist/deep/nested/
    // main.js`: the emitted path differs from the source path in more than its
    // leading directory.
    {
      name:  "nested_source_directory",
      extra: []string{`"rootDir": "src"`, `"outDir": "dist"`},
      file:  "src/deep/nested/main.ts",
    },
    // `rootDirs` is a module-resolution feature and must not reposition the
    // emit. Pin that the resolution agrees instead of assuming it.
    {
      name:  "root_dirs_and_out_dir",
      extra: []string{`"rootDirs": ["src", "generated"]`, `"outDir": "dist"`},
      file:  "src/main.ts",
    },
    // The one layout that already worked, because the emit lands beside its
    // source. It must keep working.
    {
      name:  "no_out_dir",
      extra: nil,
      file:  "src/main.ts",
    },
  } {
    t.Run(layout.name, func(t *testing.T) {
      project := transformSingleFileLayoutProject(t, layout.extra, map[string]string{
        layout.file: transformSingleFileValidSource,
      })
      outPath := filepath.Join(project, "artifact", "main.js")
      _, errText, code := ttscTypiaTestCapture(func() int {
        return runTransform([]string{
          "--cwd", project,
          "--tsconfig", "tsconfig.json",
          "--file", filepath.FromSlash(layout.file),
          "--output", "js",
          "--out", outPath,
        })
      })
      if code != 0 {
        t.Fatalf("`--output js` should publish under this layout, got %d\nstderr=%s", code, errText)
      }
      if errText != "" {
        t.Fatalf("`--output js` reported diagnostics under this layout:\n%s", errText)
      }
      data, err := os.ReadFile(outPath)
      if err != nil {
        t.Fatalf("`--output js` published no artifact: %v", err)
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

// transformSingleFileLayoutProject writes a project whose tsconfig carries the
// given extra `compilerOptions` entries and whose sources are the given
// project-relative slash paths, sharing the typia stub the other transform
// fixtures use. It exists so one fixture can vary only the output-path settings.
func transformSingleFileLayoutProject(
  t *testing.T,
  extra []string,
  sources map[string]string,
) string {
  t.Helper()
  project := t.TempDir()
  options := append([]string{
    `"target": "ES2022"`,
    `"module": "commonjs"`,
    `"moduleResolution": "bundler"`,
    `"ignoreDeprecations": "6.0"`,
    `"types": ["*"]`,
    `"esModuleInterop": true`,
    `"strict": true`,
    `"skipLibCheck": true`,
  }, extra...)
  tsconfig := "{\n  \"compilerOptions\": {\n    " +
    strings.Join(options, ",\n    ") +
    "\n  },\n  \"include\": [\"src\"]\n}\n"
  if err := os.WriteFile(filepath.Join(project, "tsconfig.json"), []byte(tsconfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  transformDiagnosticWriteTypiaStub(t, project)
  for rel, body := range sources {
    path := filepath.Join(project, filepath.FromSlash(rel))
    if err := os.MkdirAll(filepath.Dir(path), 0o755); err != nil {
      t.Fatalf("mkdir %s: %v", rel, err)
    }
    if err := os.WriteFile(path, []byte(body), 0o644); err != nil {
      t.Fatalf("write %s: %v", rel, err)
    }
  }
  return project
}
