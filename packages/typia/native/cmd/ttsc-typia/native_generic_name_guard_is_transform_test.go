package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestNativeGenericNameGuardIsTransform verifies native classification despite generic display names.
//
// Native generic specialization can alter a type display name without changing the resolved declaration identity; classification must preserve the native operation under those spellings.
//
// 1. Generic collection/native uses supply specialized-name boundaries; user-name overmatch controls are owned by the native collection and name-collision cases.
// 2. The generated TypeScript must retain the authored genuine native-instance checks.
//
// @evidence contracts/testing.md#behavioral-verification The generated TypeScript must retain the authored genuine native-instance checks.
// @evidence contracts/testing.md#independent-expectations Native generic specialization can alter a type display name without changing the resolved declaration identity; classification must preserve the native operation under those spellings.
// @evidence contracts/testing.md#distinguishing-cases Generic collection/native uses supply specialized-name boundaries; user-name overmatch controls are owned by the native collection and name-collision cases.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestNativeGenericNameGuardIsTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestNativeGenericNameGuardIsTransform(t *testing.T) {
  project := nativeGenericNameGuardProject(t)
  ts := nativeGenericNameGuardTransform(t, project, "ts")
  for _, needle := range []string{"instanceof WeakMap", "instanceof WeakSet"} {
    if !strings.Contains(ts, needle) {
      t.Fatalf("expected genuine native path %q in transform output:\n%s", needle, ts)
    }
  }
}

func nativeGenericNameGuardProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "native-generic-name-guard-")
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(nativeGenericNameGuardTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(nativeGenericNameGuardSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func nativeGenericNameGuardTransform(t *testing.T, project string, output string) string {
  t.Helper()
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", output,
    })
  })
  if code != 0 {
    t.Fatalf("native generic name guard transform failed: output=%s code=%d stderr=\n%s", output, code, errText)
  }
  return out
}

const nativeGenericNameGuardTSConfig = `{
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

const nativeGenericNameGuardSource = `import typia from "typia";

interface WeakMapLike {
  id: number;
  count: number;
}
interface WeakSetLike {
  id: number;
  count: number;
}
interface WeakMapEntry {
  id: number;
  count: number;
}
interface MapLike {
  id: number;
  count: number;
}

export const isWeakMapLike = (input: unknown): boolean =>
  typia.is<WeakMapLike>(input);
export const isWeakSetLike = (input: unknown): boolean =>
  typia.is<WeakSetLike>(input);
export const isWeakMapEntry = (input: unknown): boolean =>
  typia.is<WeakMapEntry>(input);
export const isMapLike = (input: unknown): boolean =>
  typia.is<MapLike>(input);
export const isNativeWeakMap = (input: unknown): boolean =>
  typia.is<WeakMap<object, number>>(input);
export const isNativeWeakSet = (input: unknown): boolean =>
  typia.is<WeakSet<object>>(input);
`
