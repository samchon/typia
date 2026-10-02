package main

import (
  "os"
  "path/filepath"
  "reflect"
  "strings"
  "testing"
)

// TestTransformSingleFileFailurePreservesArtifacts checks the authored operation results described below.
//
// Single-file publication is transactional just like project builds: rejected transforms must not replace earlier artifacts or create partial output trees.
//
// 1. TypeScript and JavaScript modes cover seeded and absent output targets, distinguishing replacement from first-publication failure.
// 2. Each rejected single-file output mode returns status three with detailed diagnostics and preserves existing seeded artifact trees; a missing output directory stays absent.
//
// @evidence contracts/testing.md#behavioral-verification Each rejected single-file output mode returns status three with detailed diagnostics and preserves existing seeded artifact trees; a missing output directory stays absent.
// @evidence contracts/testing.md#independent-expectations Single-file publication is transactional just like project builds: rejected transforms must not replace earlier artifacts or create partial output trees.
// @evidence contracts/testing.md#distinguishing-cases TypeScript and JavaScript modes cover seeded and absent output targets, distinguishing replacement from first-publication failure.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestTransformSingleFileFailurePreservesArtifacts as a unit test. Its helpers call the owning Go operations in process; named subcases retain their fixture inputs, assertions and failure identities. Temporary fixtures and captured output are scoped to the test without a compiler or product-host subprocess.
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
func transformSingleFileProject(t *testing.T, source string) string {
  t.Helper()
  project := t.TempDir()
  src := filepath.Join(project, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(project, "tsconfig.json"), []byte(transformDiagnosticTSConfig), 0o644); err != nil {
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
