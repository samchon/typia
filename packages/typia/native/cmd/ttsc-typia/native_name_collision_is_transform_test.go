package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestNativeNameCollisionIsTransform pins the runtime and emit behavior of
// typia.is / assert / validate for a user type whose name collides with a
// built-in native (#2200).
//
// Native classification matched a type against the simples table by name alone,
// so a user `interface File { name; size }` yielded the base name "File", matched
// iterate_metadata_native_simples["File"], and emitted `input instanceof File` —
// ignoring the user's own members. Every valid `File` value was therefore
// rejected, and in a runtime without the DOM/File global the check threw a
// ReferenceError. The same struck `Blob`, `Date`, the typed arrays, and every
// other simples name.
//
// After the fix native classification requires the matched symbol to be declared
// in a `.d.ts` declaration file (a TypeScript default library or an ambient
// package such as @types/node), which a real built-in always is and a user type
// in a `.ts` module never is. A colliding user type then falls through to the
// structural object path and validates against its declared members, while a
// genuine native (`Date`, `Uint8Array`) keeps its native `instanceof` check.
//
//  1. Transform is / validate for user interfaces named File and Blob, a near-miss
//     control (Filer), and the genuine natives Date and Uint8Array.
//  2. Assert the emitted TypeScript drops `instanceof File` / `instanceof Blob`
//     for the user types while keeping `instanceof Date` / `instanceof Uint8Array`
//     for the real natives.
//  3. Execute the emitted validators in Node against the boundary matrix, and
//     require the runner to report the exact executed case count so a runner that
//     silently skipped cases cannot pass as a false green.
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
  nativeNameCollisionRunRuntimeCases(t, project, js)
}

func nativeNameCollisionProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "native-name-collision-")
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

func nativeNameCollisionRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(runner, []byte(nativeNameCollisionRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("native name collision runtime cases failed: %v\n%s", err, output)
  }
  const expected = "RAN 23 CASES"
  if !strings.Contains(string(output), expected) {
    t.Fatalf("native name collision runner did not report %q; got:\n%s", expected, output)
  }
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

const nativeNameCollisionRuntimeRunner = `const mod = require("./main.cjs");

let ran = 0;
const eq = (name, actual, expected) => {
  ran += 1;
  if (actual !== expected) {
    throw new Error(name + ": expected " + expected + " but got " + actual);
  }
};

// A user interface named File must validate against its own members, not the
// native File instanceof path (#2200 core cases).
eq("isFile valid", mod.isFile({ name: "a", size: 1 }), true);
eq("isFile missing size", mod.isFile({ name: "a" }), false);
eq("isFile missing name", mod.isFile({ size: 1 }), false);
eq("isFile wrong size type", mod.isFile({ name: "a", size: "1" }), false);
eq("isFile null", mod.isFile(null), false);
eq("isFile primitive", mod.isFile(5), false);

// validate shares the structural object path, so it agrees with is and names no
// File expected type.
eq("validateFile valid", mod.validateFile({ name: "a", size: 1 }).success, true);
eq("validateFile invalid", mod.validateFile({ name: "a" }).success, false);

// A user interface named Blob is structural too.
eq("isBlob valid", mod.isBlob({ size: 1, type: "x" }), true);
eq("isBlob missing type", mod.isBlob({ size: 1 }), false);
eq("isBlob null", mod.isBlob(null), false);

// A near-miss name that is not a native was always structural and stays so.
eq("isFiler valid", mod.isFiler({ name: "a" }), true);
eq("isFiler invalid", mod.isFiler({}), false);

// Genuine natives keep their instanceof check and accept a real instance while
// rejecting a plain object of the same shape.
eq("isDate real", mod.isDate(new Date()), true);
eq("isDate plain object", mod.isDate({}), false);
eq("isDate null", mod.isDate(null), false);

eq("isU8 real", mod.isU8(new Uint8Array(4)), true);
eq("isU8 plain object", mod.isU8({}), false);
eq("isU8 array", mod.isU8([1, 2, 3]), false);
eq("isU8 null", mod.isU8(null), false);

// A user File/Blob value is not a real native instance, and a real native is not
// a user shape: the two classifications stay disjoint.
eq("isFile rejects a real Date", mod.isFile(new Date()), false);
eq("isDate rejects a user File shape", mod.isDate({ name: "a", size: 1 }), false);
eq("isBlob rejects a real Date", mod.isBlob(new Date()), false);

console.log("RAN " + ran + " CASES");
`
