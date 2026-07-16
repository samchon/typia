package main

import (
  "os"
  "path/filepath"
  "reflect"
  "strings"
  "testing"
)

// TestBuildTransformFailurePreservesArtifacts verifies failed-build atomicity.
//
// A transform failure can arrive after valid siblings have already produced
// JavaScript, declarations, maps, and a manifest candidate. None of those
// buffered results may replace prior artifacts or escape as new files.
//
//  1. Seed output and manifest trees with byte-sensitive prior artifacts.
//  2. Build one valid source beside one typia-invalid generic source.
//  3. Require the diagnostic and compare both trees byte-for-byte.
func TestBuildTransformFailurePreservesArtifacts(t *testing.T) {
  project := buildAtomicityProject(t, true)
  dist := filepath.Join(project, "dist")
  manifest := filepath.Join(project, "artifacts", "manifest.json")
  seeds := map[string]string{
    filepath.Join(dist, "valid.js"):      "previous javascript\n",
    filepath.Join(dist, "existing.d.ts"): "previous declaration\n",
    filepath.Join(dist, "keep.txt"):      "unrelated output\n",
    manifest:                             `["previous.js"]`,
  }
  for path, body := range seeds {
    if err := os.MkdirAll(filepath.Dir(path), 0o755); err != nil {
      t.Fatalf("mkdir seed parent: %v", err)
    }
    if err := os.WriteFile(path, []byte(body), 0o644); err != nil {
      t.Fatalf("write seed %s: %v", path, err)
    }
  }
  beforeDist := buildReadTree(t, dist)
  beforeArtifacts := buildReadTree(t, filepath.Dir(manifest))

  _, errText, code := ttscTypiaTestCapture(func() int {
    return runBuild([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--emit",
      "--manifest", manifest,
    })
  })
  if code != 3 {
    t.Fatalf("invalid multi-file transform should fail with code 3, got %d\nstderr=%s", code, errText)
  }
  normalized := filepath.ToSlash(errText)
  if !strings.Contains(normalized, "src/invalid.ts:3:9 - error TS(typia.is):") {
    t.Fatalf("transform diagnostic missing invalid source location:\n%s", errText)
  }
  if after := buildReadTree(t, dist); !reflect.DeepEqual(after, beforeDist) {
    t.Fatalf("failed transform mutated output tree:\nbefore=%q\nafter=%q", beforeDist, after)
  }
  if after := buildReadTree(t, filepath.Dir(manifest)); !reflect.DeepEqual(after, beforeArtifacts) {
    t.Fatalf("failed transform mutated manifest tree:\nbefore=%q\nafter=%q", beforeArtifacts, after)
  }
}

func buildReadTree(t *testing.T, root string) map[string]string {
  t.Helper()
  files := map[string]string{}
  if err := filepath.WalkDir(root, func(path string, entry os.DirEntry, err error) error {
    if err != nil {
      return err
    }
    if entry.IsDir() {
      return nil
    }
    data, err := os.ReadFile(path)
    if err != nil {
      return err
    }
    rel, err := filepath.Rel(root, path)
    if err != nil {
      return err
    }
    files[filepath.ToSlash(rel)] = string(data)
    return nil
  }); err != nil {
    t.Fatalf("read tree %s: %v", root, err)
  }
  return files
}

func buildAtomicityProject(t *testing.T, invalid bool) string {
  t.Helper()
  project := t.TempDir()
  src := filepath.Join(project, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  config := `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "types": ["*"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true,
    "rootDir": "src",
    "outDir": "dist",
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true
  },
  "include": ["src"]
}
`
  if err := os.WriteFile(filepath.Join(project, "tsconfig.json"), []byte(config), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  transformDiagnosticWriteTypiaStub(t, project)
  validSource := `import typia from "typia";
export const valid = (input: unknown): input is { value: number } =>
  typia.is<{ value: number }>(input);
`
  if err := os.WriteFile(filepath.Join(src, "valid.ts"), []byte(validSource), 0o644); err != nil {
    t.Fatalf("write valid source: %v", err)
  }
  secondSource := `import typia from "typia";
export const second = (input: unknown): input is { name: string } =>
  typia.is<{ name: string }>(input);
`
  if invalid {
    secondSource = transformDiagnosticSource
  }
  if err := os.WriteFile(filepath.Join(src, "invalid.ts"), []byte(secondSource), 0o644); err != nil {
    t.Fatalf("write second source: %v", err)
  }
  return project
}
