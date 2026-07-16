package main

import (
  "os"
  "path/filepath"
  "reflect"
  "strings"
  "testing"
)

// TestTransformSingleFileFailurePreservesArtifacts verifies single-file atomicity.
//
// The project host returns 3 when typia's analysis produced diagnostics, but both
// single-file hosts used to publish `--out` and exit 0 regardless, shipping the
// untransformed `typia.is<T>(input)` call behind a success code. Publication must
// follow the same decision as the exit code in both output modes, and a failed
// transform must not destroy an artifact a previous run left behind.
//
//  1. Seed `--out` with a byte-sensitive prior artifact beside an unrelated file.
//  2. Run the single-file transform over a typia-invalid source in `ts` and `js`.
//  3. Require exit 3, the diagnostic on stderr, and a byte-identical output tree.
//  4. Require a fresh `--out` parent to stay uncreated, since publishing nothing
//     must also mean creating no directory for it.
func TestTransformSingleFileFailurePreservesArtifacts(t *testing.T) {
  for _, output := range []string{"ts", "js"} {
    t.Run(output, func(t *testing.T) {
      project := transformSingleFileProject(t, transformDiagnosticSource)
      dist := filepath.Join(project, "dist")
      outPath := filepath.Join(dist, "main."+output)
      seeds := map[string]string{
        outPath:                         "previous artifact\n",
        filepath.Join(dist, "keep.txt"): "unrelated output\n",
      }
      for path, body := range seeds {
        if err := os.MkdirAll(filepath.Dir(path), 0o755); err != nil {
          t.Fatalf("mkdir seed parent: %v", err)
        }
        if err := os.WriteFile(path, []byte(body), 0o644); err != nil {
          t.Fatalf("write seed %s: %v", path, err)
        }
      }
      before := buildReadTree(t, dist)

      _, errText, code := ttscTypiaTestCapture(func() int {
        return runTransform([]string{
          "--cwd", project,
          "--tsconfig", "tsconfig.json",
          "--file", filepath.Join("src", "main.ts"),
          "--output", output,
          "--out", outPath,
        })
      })
      if code != 3 {
        t.Fatalf("invalid single-file transform should fail with code 3, got %d\nstderr=%s", code, errText)
      }
      normalized := filepath.ToSlash(errText)
      if !strings.Contains(normalized, "src/main.ts:3:9 - error TS(typia.is):") ||
        !strings.Contains(normalized, "non-specified generic argument") {
        t.Fatalf("single-file diagnostic did not preserve location/code/message:\n%s", errText)
      }
      if after := buildReadTree(t, dist); !reflect.DeepEqual(after, before) {
        t.Fatalf("failed single-file transform mutated output tree:\nbefore=%q\nafter=%q", before, after)
      }

      // writeSingleOutput mkdirs its parent, so a guard placed after publication
      // would leave the directory behind even with no artifact in it.
      fresh := filepath.Join(project, "fresh", "nested")
      _, _, code = ttscTypiaTestCapture(func() int {
        return runTransform([]string{
          "--cwd", project,
          "--tsconfig", "tsconfig.json",
          "--file", filepath.Join("src", "main.ts"),
          "--output", output,
          "--out", filepath.Join(fresh, "main."+output),
        })
      })
      if code != 3 {
        t.Fatalf("invalid single-file transform should fail with code 3, got %d", code)
      }
      if _, err := os.Stat(filepath.Join(project, "fresh")); !os.IsNotExist(err) {
        t.Fatalf("failed single-file transform created the --out directory: %v", err)
      }
    })
  }
}

// transformSingleFileProject writes a one-source project whose `src/main.ts`
// carries the given body, sharing the typia stub the other transform diagnostic
// fixtures use.
//
// It deliberately omits `outDir`/`rootDir`. `--output js` locates its result
// through `sameSourceStem`, which compares whole path stems, so an emitted
// `dist/main.js` never matches its `src/main.ts` and the mode reports "no output
// produced" instead of an artifact. Emitting beside the source keeps `js` mode
// genuinely exercisable here rather than passing for the wrong reason.
func transformSingleFileProject(t *testing.T, source string) string {
  t.Helper()
  project := t.TempDir()
  src := filepath.Join(project, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(project, "tsconfig.json"), []byte(transformSingleFileTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  transformDiagnosticWriteTypiaStub(t, project)
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(source), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return project
}

// transformSingleFileValidSource is the negative twin of
// transformDiagnosticSource: the same call shape with a resolved generic
// argument, which typia can lower without a diagnostic.
const transformSingleFileValidSource = `import typia from "typia";
export function check(input: unknown): boolean {
  return typia.is<{ value: number }>(input);
}
`

// transformSingleFileTSConfig mirrors transformDiagnosticTSConfig without the
// `rootDir`/`outDir` redirection, so `--output js` emits beside the source.
const transformSingleFileTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`
