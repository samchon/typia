package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestNativeCollectionIdentityIsTransform verifies user collection name collisions versus genuine collection natives.
//
// Only the standard native declaration owns collection instance semantics; a user interface with the same name still denotes its explicit structural members.
//
// 1. All four collection-name collisions are paired with genuine Set/Map/weak collections from another fixture source.
// 2. User Set/Map/weak collection data members remain structural and their native paths are absent, while the genuine standard-library fixture keeps each native path.
//
// @evidence contracts/testing.md#behavioral-verification User Set/Map/weak collection data members remain structural and their native paths are absent, while the genuine standard-library fixture keeps each native path.
// @evidence contracts/testing.md#independent-expectations Only the standard native declaration owns collection instance semantics; a user interface with the same name still denotes its explicit structural members.
// @evidence contracts/testing.md#distinguishing-cases All four collection-name collisions are paired with genuine Set/Map/weak collections from another fixture source.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestNativeCollectionIdentityIsTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestNativeCollectionIdentityIsTransform(t *testing.T) {
  project := nativeCollectionIdentityProject(t)
  transform := func(file string) string {
    out, errText, code := ttscTypiaTestCapture(func() int {
      return runTransform([]string{
        "--cwd", project,
        "--tsconfig", "tsconfig.json",
        "--file", file,
        "--output", "js",
      })
    })
    if code != 0 {
      t.Fatalf("collection identity transform %s failed: code=%d stderr=\n%s", file, code, errText)
    }
    return out
  }
  userJS := transform("src/main.ts")
  realJS := transform("src/real.ts")

  // The colliding user types must validate structurally: their own members
  // survive and no native instanceof is emitted for them.
  for _, member := range []string{"brandMap", "brandSet", "brandWeakMap", "brandWeakSet"} {
    if !strings.Contains(userJS, member) {
      t.Fatalf("expected user collection type member %q to survive structurally, but it was dropped in:\n%s", member, userJS)
    }
  }
  for _, gone := range []string{"instanceof Map", "instanceof Set", "instanceof WeakMap", "instanceof WeakSet"} {
    if strings.Contains(userJS, gone) {
      t.Fatalf("expected user collection collision %q to be reclassified structurally, but it survived in:\n%s", gone, userJS)
    }
  }
  // The genuine globals of the same names must stay native.
  for _, kept := range []string{"instanceof Map", "instanceof Set", "instanceof WeakMap", "instanceof WeakSet"} {
    if !strings.Contains(realJS, kept) {
      t.Fatalf("expected genuine native path %q to remain in transform output:\n%s", kept, realJS)
    }
  }
}

func nativeCollectionIdentityProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "native-collection-identity-")
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(finiteOptionNumberLeafTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(nativeCollectionIdentityUserSource), 0o644); err != nil {
    t.Fatalf("write user source: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "real.ts"), []byte(nativeCollectionIdentityRealSource), 0o644); err != nil {
    t.Fatalf("write real source: %v", err)
  }
  return dir
}

// main.ts declares module-scoped interfaces named exactly Map/Set/WeakMap/WeakSet
// that shadow the globals within this module, so their base name is exactly the
// native name (the #2212 collision). Their type parameters are their own.
const nativeCollectionIdentityUserSource = `import typia from "typia";

interface Map<K, V> {
  brandMap: string;
  keyMap: K;
  valMap: V;
}
interface Set<T> {
  brandSet: string;
  elemSet: T;
}
interface WeakMap<K extends object, V> {
  brandWeakMap: string;
}
interface WeakSet<T extends object> {
  brandWeakSet: string;
}

export const isUserMap = typia.createIs<Map<string, number>>();
export const isUserSet = typia.createIs<Set<number>>();
export const isUserWeakMap = typia.createIs<WeakMap<object, number>>();
export const isUserWeakSet = typia.createIs<WeakSet<object>>();
`

// real.ts declares no local shadow, so its Map/Set/WeakMap/WeakSet resolve to the
// genuine globals declared in a lib `.d.ts` and must stay native.
const nativeCollectionIdentityRealSource = `import typia from "typia";

export const isRealMap = typia.createIs<Map<string, number>>();
export const isRealSet = typia.createIs<Set<number>>();
export const isRealWeakMap = typia.createIs<WeakMap<object, number>>();
export const isRealWeakSet = typia.createIs<WeakSet<object>>();
`
