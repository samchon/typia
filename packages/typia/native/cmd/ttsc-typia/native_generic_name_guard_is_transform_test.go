package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestNativeGenericNameGuardIsTransform verifies that a user type whose name
// begins with WeakMap/WeakSet is not misdetected as the native generic.
//
// Native generic detection matched WeakMap/WeakSet with a bare
// strings.HasPrefix(name, generic.Name) while the Map/Set siblings require the
// name to be exactly the generic. A user interface named WeakMapLike therefore
// took the native path and emitted `input instanceof WeakMap`, so
// typia.is<WeakMapLike>({...}) returned false (issue #2181). The guard now
// admits a native only when the stripped name equals the generic, so a genuine
// WeakMap<K, V>/WeakSet<T> stays native while WeakMapLike validates its shape.
//
//  1. Transform typia.is calls for WeakMapLike, WeakSetLike, WeakMapEntry, a
//     MapLike control, and genuine WeakMap<object, number>/WeakSet<object>.
//  2. Assert the emitted TypeScript keeps the native `instanceof` path for the
//     genuine generics.
//  3. Execute the emitted validators so the user-named objects validate as
//     their shape while the genuine natives still accept only their instance.
func TestNativeGenericNameGuardIsTransform(t *testing.T) {
  project := nativeGenericNameGuardProject(t)
  ts := nativeGenericNameGuardTransform(t, project, "ts")
  for _, needle := range []string{"instanceof WeakMap", "instanceof WeakSet"} {
    if !strings.Contains(ts, needle) {
      t.Fatalf("expected genuine native path %q in transform output:\n%s", needle, ts)
    }
  }
  nativeGenericNameGuardRunRuntimeCases(t, project, nativeGenericNameGuardTransform(t, project, "js"))
}

func nativeGenericNameGuardProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "native-generic-name-guard-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() {
    _ = os.RemoveAll(dir)
  })
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

func nativeGenericNameGuardRunRuntimeCases(t *testing.T, project string, js string) {
  t.Helper()
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
  }
  runtimeDir := filepath.Join(project, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  runtimeJS := ttscTypiaTestRewriteCommonJS(t, js)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(nativeGenericNameGuardRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  if output, err := cmd.CombinedOutput(); err != nil {
    t.Fatalf("native generic name guard runtime cases failed: %v\n%s", err, output)
  }
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

const nativeGenericNameGuardRuntimeRunner = `const mod = require("./main.cjs");

const expect = (label, actual, expected) => {
  if (actual !== expected) {
    throw new Error(label + ": expected " + expected + ", got " + actual);
  }
};

const shaped = { id: 1, count: 2 };

// A user interface whose name is merely prefixed by a native generic must
// validate against its declared shape, not the native instanceof path.
expect("WeakMapLike accepts its shape", mod.isWeakMapLike(shaped), true);
expect("WeakMapLike rejects a missing property", mod.isWeakMapLike({ id: 1 }), false);
expect("WeakMapLike rejects a wrong property type", mod.isWeakMapLike({ id: 1, count: "2" }), false);
expect("WeakMapLike rejects a real WeakMap", mod.isWeakMapLike(new WeakMap()), false);

expect("WeakSetLike accepts its shape", mod.isWeakSetLike(shaped), true);
expect("WeakSetLike rejects a missing property", mod.isWeakSetLike({ id: 1 }), false);
expect("WeakSetLike rejects a real WeakSet", mod.isWeakSetLike(new WeakSet()), false);

expect("WeakMapEntry accepts its shape", mod.isWeakMapEntry(shaped), true);
expect("WeakMapEntry rejects a missing property", mod.isWeakMapEntry({ id: 1 }), false);

// MapLike is the already-guarded control: it stays a plain object exactly as
// the WeakMap*/WeakSet* names now do.
expect("MapLike control accepts its shape", mod.isMapLike(shaped), true);
expect("MapLike control rejects a missing property", mod.isMapLike({ id: 1 }), false);

// Genuine native generics always carry angle brackets, so the exact-name guard
// keeps them on the native instanceof path unchanged.
expect("native WeakMap accepts an instance", mod.isNativeWeakMap(new WeakMap()), true);
expect("native WeakMap rejects a plain object", mod.isNativeWeakMap(shaped), false);
expect("native WeakMap rejects a WeakSet", mod.isNativeWeakMap(new WeakSet()), false);

expect("native WeakSet accepts an instance", mod.isNativeWeakSet(new WeakSet()), true);
expect("native WeakSet rejects a plain object", mod.isNativeWeakSet(shaped), false);
expect("native WeakSet rejects a WeakMap", mod.isNativeWeakSet(new WeakMap()), false);
`
