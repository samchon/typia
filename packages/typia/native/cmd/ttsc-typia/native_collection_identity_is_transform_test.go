package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestNativeCollectionIdentityIsTransform pins the runtime and emit behavior of
// typia.is for a user type whose name collides with a built-in collection native
// (#2212, the collection half of #2200).
//
// Collection-native classification matched Map/Set (iterate_metadata_map.go /
// iterate_metadata_set.go) and WeakMap/WeakSet (the generics loop in
// iterate_metadata_native.go) by base name alone, so a module-scoped user
// `interface Map<K, V> { brandMap; keyMap; valMap }` yielded the base name "Map"
// and was emitted as `input instanceof Map && [...]` — its own members dropped,
// byte-identical to the real-lib Map. Every valid structural value was rejected
// and the emit could throw where no such global exists.
//
// After the fix, collection-native classification (like the simples path #2200
// already gated) requires the matched symbol to be declared in a `.d.ts`
// declaration file, which a real built-in always is and a user type in a `.ts`
// module never is. A colliding user type then falls through to the structural
// object path and validates against its declared members, while the genuine
// natives keep their `instanceof` check.
//
//  1. Transform is for user interfaces named Map/Set/WeakMap/WeakSet (main.ts,
//     module-scoped, shadowing the globals) and for the genuine globals of the
//     same names (real.ts, unshadowed).
//  2. Assert the user emit is structural (its own brand members survive, no
//     `instanceof`) while the genuine natives keep their `instanceof` path.
//  3. Execute both emitted modules in Node against the boundary matrix, requiring
//     the runner to report the exact executed case count so a runner that
//     silently skipped cases cannot pass as a false green.
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
  nativeCollectionIdentityRunRuntimeCases(t, project, userJS, realJS)
}

func nativeCollectionIdentityProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "native-collection-identity-")
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
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(nativeCollectionIdentityUserSource), 0o644); err != nil {
    t.Fatalf("write user source: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "real.ts"), []byte(nativeCollectionIdentityRealSource), 0o644); err != nil {
    t.Fatalf("write real source: %v", err)
  }
  return dir
}

func nativeCollectionIdentityRunRuntimeCases(t *testing.T, project string, userJS string, realJS string) {
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
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(ttscTypiaTestRewriteCommonJS(t, userJS)), 0o644); err != nil {
    t.Fatalf("write user runtime module: %v", err)
  }
  if err := os.WriteFile(filepath.Join(runtimeDir, "real.cjs"), []byte(ttscTypiaTestRewriteCommonJS(t, realJS)), 0o644); err != nil {
    t.Fatalf("write real runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(nativeCollectionIdentityRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("collection identity runtime cases failed: %v\n%s", err, output)
  }
  const expected = "RAN 27 CASES"
  if !strings.Contains(string(output), expected) {
    t.Fatalf("collection identity runner did not report %q; got:\n%s", expected, output)
  }
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

const nativeCollectionIdentityRuntimeRunner = `const user = require("./main.cjs");
const real = require("./real.cjs");

let ran = 0;
const eq = (name, actual, expected) => {
  ran += 1;
  if (actual !== expected) {
    throw new Error(name + ": expected " + expected + " but got " + actual);
  }
};

// A user interface named Map must validate against its own members, not the
// native Map instanceof path (#2212).
eq("isUserMap valid", user.isUserMap({ brandMap: "x", keyMap: "k", valMap: 1 }), true);
eq("isUserMap missing brand", user.isUserMap({ keyMap: "k", valMap: 1 }), false);
eq("isUserMap wrong valMap type", user.isUserMap({ brandMap: "x", keyMap: "k", valMap: "1" }), false);
eq("isUserMap rejects a real Map", user.isUserMap(new Map([["k", 1]])), false);
eq("isUserMap null", user.isUserMap(null), false);
eq("isUserMap empty object", user.isUserMap({}), false);

// A user interface named Set is structural too.
eq("isUserSet valid", user.isUserSet({ brandSet: "s", elemSet: 2 }), true);
eq("isUserSet missing brand", user.isUserSet({ elemSet: 2 }), false);
eq("isUserSet rejects a real Set", user.isUserSet(new Set([1])), false);

// A user interface named WeakMap is structural, not instanceof WeakMap.
eq("isUserWeakMap valid", user.isUserWeakMap({ brandWeakMap: "w" }), true);
eq("isUserWeakMap missing brand", user.isUserWeakMap({}), false);
eq("isUserWeakMap rejects a real WeakMap", user.isUserWeakMap(new WeakMap()), false);

// A user interface named WeakSet is structural, not instanceof WeakSet.
eq("isUserWeakSet valid", user.isUserWeakSet({ brandWeakSet: "z" }), true);
eq("isUserWeakSet missing brand", user.isUserWeakSet({}), false);
eq("isUserWeakSet rejects a real WeakSet", user.isUserWeakSet(new WeakSet()), false);

// The genuine globals keep their instanceof check and accept a real instance
// while rejecting a plain object of the same shape.
eq("isRealMap real", real.isRealMap(new Map([["a", 1]])), true);
eq("isRealMap empty real", real.isRealMap(new Map()), true);
eq("isRealMap plain object", real.isRealMap({}), false);
eq("isRealMap user Map shape", real.isRealMap({ brandMap: "x", keyMap: "k", valMap: 1 }), false);

eq("isRealSet real", real.isRealSet(new Set([1, 2])), true);
eq("isRealSet plain object", real.isRealSet({}), false);

eq("isRealWeakMap real", real.isRealWeakMap(new WeakMap()), true);
eq("isRealWeakMap plain object", real.isRealWeakMap({}), false);

eq("isRealWeakSet real", real.isRealWeakSet(new WeakSet()), true);
eq("isRealWeakSet plain object", real.isRealWeakSet({}), false);

// Real collections stay disjoint from one another.
eq("isRealMap rejects a real Set", real.isRealMap(new Set()), false);
eq("isRealWeakMap rejects a real WeakSet", real.isRealWeakMap(new WeakSet()), false);

console.log("RAN " + ran + " CASES");
`
