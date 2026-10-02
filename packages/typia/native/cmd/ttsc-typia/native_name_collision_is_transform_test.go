package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestNativeNameCollisionIsTransform verifies user File and Blob names versus genuine native instances.
//
// A user interface named after a native class has structural meaning, whereas a compiler-owned native declaration retains its instance contract; name spelling alone cannot decide the branch.
//
// 1. File and Blob collisions and a near-miss Filer are paired with genuine Date and Uint8Array natives. This case does not launch Node.
// 2. User File/Blob instanceof paths disappear while Date and Uint8Array instance checks remain.
//
// @evidence contracts/testing.md#behavioral-verification User File/Blob instanceof paths disappear while Date and Uint8Array instance checks remain.
// @evidence contracts/testing.md#independent-expectations A user interface named after a native class has structural meaning, whereas a compiler-owned native declaration retains its instance contract; name spelling alone cannot decide the branch.
// @evidence contracts/testing.md#distinguishing-cases File and Blob collisions and a near-miss Filer are paired with genuine Date and Uint8Array natives. This case does not launch Node.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestNativeNameCollisionIsTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestNativeNameCollisionIsTransform(t *testing.T) {
  project := nativeNameCollisionProject(t)
  js := nativeNameCollisionTransform(t, project)
  for _, gone := range []string{"instanceof File", "instanceof Blob"} {
    if strings.Contains(js, gone) {
      t.Fatalf("expected user type collision %q to be reclassified structurally, but it survived in:\n%s", gone, js)
    }
  }
  for _, kept := range []string{"instanceof Date", "instanceof Uint8Array"} {
    if !strings.Contains(js, kept) {
      t.Fatalf("expected genuine native path %q to remain in transform output:\n%s", kept, js)
    }
  }
}

func nativeNameCollisionProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "native-name-collision-")
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(finiteOptionNumberLeafTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(nativeNameCollisionSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func nativeNameCollisionTransform(t *testing.T, project string) string {
  t.Helper()
  payload := `[{"config":{"transform":"typia/lib/transform"},"name":"typia","stage":"transform"}]`
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
      "--plugins-json", payload,
    })
  })
  if code != 0 {
    t.Fatalf("native name collision transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

const nativeNameCollisionSource = `import typia from "typia";

interface File {
  name: string;
  size: number;
}
interface Blob {
  size: number;
  type: string;
}
interface Filer {
  name: string;
}

export const isFile = typia.createIs<File>();
export const validateFile = typia.createValidate<File>();
export const isBlob = typia.createIs<Blob>();
export const isFiler = typia.createIs<Filer>();

export const isDate = typia.createIs<Date>();
export const isU8 = typia.createIs<Uint8Array>();
`
