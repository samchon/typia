package main

import (
  "fmt"
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestLibReplacementNativeIdentityTransform keeps a `libReplacement` project's
// natives native even though their declaration file lives in node_modules
// (#2200).
//
// Runtime-native identity requires a runtime authority to declare the global, so
// which files count as a TypeScript default library became load-bearing. Under
// `libReplacement` the compiler resolves `lib.es2015.collection.d.ts` to
// `@typescript/lib-es2015/collection`, an ordinary package file whose name does
// not even begin with `lib.` — so a file-name rule answers "not a default
// library" and would demote Map, Set, WeakMap, and WeakSet to structural checks
// that accept any object. Only the program's own classification is right here,
// and this fixture is what proves the transform consults it.
//
//  1. Publish `@typescript/lib-es2015/collection.d.ts` carrying the real
//     Map/Set/WeakMap/WeakSet declarations plus a probe interface that exists
//     nowhere else, and enable `libReplacement`.
//  2. Transform validators for the four replaced collection natives, for Date
//     and Uint8Array as bundled-library controls, and for the probe.
//  3. Require the probe to transform at all, which fails unless the replacement
//     file — not the bundled lib — is what the program loaded.
//  4. Require every native to keep its `instanceof` check and execute all of
//     them in Node against real instances and plain objects.
func TestLibReplacementNativeIdentityTransform(t *testing.T) {
  project := libReplacementNativeIdentityProject(t)
  js, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/input.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("lib replacement transform failed: code=%d stderr=\n%s", code, errText)
  }

  failures := []string{}
  if !strings.Contains(js, "libReplacementMarker") {
    failures = append(failures, "emit lost the replacement-only probe member; the project did not load the replaced lib file")
  }
  for _, kept := range []string{
    "instanceof Map",
    "instanceof Set",
    "instanceof WeakMap",
    "instanceof WeakSet",
    "instanceof Date",
    "instanceof Uint8Array",
  } {
    if !strings.Contains(js, kept) {
      failures = append(failures, fmt.Sprintf("replaced or bundled default library native lost %q", kept))
    }
  }

  output, runtimeErr := libReplacementNativeIdentityRun(t, project, js)
  if runtimeErr != nil {
    failures = append(failures, fmt.Sprintf("runtime matrix failed: %v\n%s", runtimeErr, output))
  }
  if expected := "RAN 13 REPLACEMENT CASES"; !strings.Contains(output, expected) {
    failures = append(failures, fmt.Sprintf("replacement runner did not report %q; got:\n%s", expected, output))
  }
  if len(failures) != 0 {
    t.Fatalf("lib replacement native identity mismatches:\n%s\n\nemit:\n%s", strings.Join(failures, "\n"), js)
  }
}

func libReplacementNativeIdentityProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "lib-replacement-native-identity-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() {
    _ = os.RemoveAll(dir)
  })
  for name, content := range map[string]string{
    "tsconfig.json": libReplacementNativeIdentityTSConfig,
    "node_modules/@typescript/lib-es2015/package.json":   libReplacementNativeIdentityPackageJSON,
    "node_modules/@typescript/lib-es2015/collection.d.ts": libReplacementNativeIdentityCollectionLib,
    "src/input.ts": libReplacementNativeIdentitySource,
  } {
    path := filepath.Join(dir, filepath.FromSlash(name))
    if err := os.MkdirAll(filepath.Dir(path), 0o755); err != nil {
      t.Fatalf("mkdir fixture path %s: %v", filepath.Dir(path), err)
    }
    if err := os.WriteFile(path, []byte(content), 0o644); err != nil {
      t.Fatalf("write fixture file %s: %v", path, err)
    }
  }
  return dir
}

func libReplacementNativeIdentityRun(t *testing.T, project string, js string) (string, error) {
  t.Helper()
  node, err := exec.LookPath("node")
  if err != nil {
    t.Skip("node executable not found")
    return "", nil
  }
  runtimeDir := filepath.Join(project, "runtime")
  if err := os.MkdirAll(runtimeDir, 0o755); err != nil {
    t.Fatalf("mkdir runtime dir: %v", err)
  }
  ttscTypiaTestWriteCommonRuntimeStubs(t, runtimeDir)
  for name, content := range map[string]string{
    "input.cjs": ttscTypiaTestRewriteCommonJS(t, js),
    "run.cjs":   libReplacementNativeIdentityRuntimeRunner,
  } {
    if err := os.WriteFile(filepath.Join(runtimeDir, name), []byte(content), 0o644); err != nil {
      t.Fatalf("write runtime file %s: %v", name, err)
    }
  }
  cmd := exec.Command(node, filepath.Join(runtimeDir, "run.cjs"))
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  return string(output), err
}

const libReplacementNativeIdentityTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "lib": ["ES2022"],
    "types": [],
    "libReplacement": true,
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`

const libReplacementNativeIdentityPackageJSON = `{
  "name": "@typescript/lib-es2015",
  "version": "1.0.0"
}
`

// libReplacementNativeIdentityCollectionLib is the replacement TypeScript loads
// instead of its bundled `lib.es2015.collection.d.ts`. The collection
// declarations are transcribed from that file so the rest of the standard
// library still typechecks against them; `LibReplacementProbe` is the one
// addition, and it is what proves the program loaded this file.
const libReplacementNativeIdentityCollectionLib = `interface LibReplacementProbe {
    libReplacementMarker: string;
}

interface Map<K, V> {
    clear(): void;
    delete(key: K): boolean;
    forEach(callbackfn: (value: V, key: K, map: Map<K, V>) => void, thisArg?: any): void;
    get(key: K): V | undefined;
    has(key: K): boolean;
    set(key: K, value: V): this;
    readonly size: number;
}

interface MapConstructor {
    new (): Map<any, any>;
    new <K, V>(entries?: readonly (readonly [K, V])[] | null): Map<K, V>;
    readonly prototype: Map<any, any>;
}
declare var Map: MapConstructor;

interface ReadonlyMap<K, V> {
    forEach(callbackfn: (value: V, key: K, map: ReadonlyMap<K, V>) => void, thisArg?: any): void;
    get(key: K): V | undefined;
    has(key: K): boolean;
    readonly size: number;
}

interface WeakMap<K extends WeakKey, V> {
    delete(key: K): boolean;
    get(key: K): V | undefined;
    has(key: K): boolean;
    set(key: K, value: V): this;
}

interface WeakMapConstructor {
    new <K extends WeakKey = WeakKey, V = any>(entries?: readonly (readonly [K, V])[] | null): WeakMap<K, V>;
    readonly prototype: WeakMap<WeakKey, any>;
}
declare var WeakMap: WeakMapConstructor;

interface Set<T> {
    add(value: T): this;
    clear(): void;
    delete(value: T): boolean;
    forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void, thisArg?: any): void;
    has(value: T): boolean;
    readonly size: number;
}

interface SetConstructor {
    new <T = any>(values?: readonly T[] | null): Set<T>;
    readonly prototype: Set<any>;
}
declare var Set: SetConstructor;

interface ReadonlySet<T> {
    forEach(callbackfn: (value: T, value2: T, set: ReadonlySet<T>) => void, thisArg?: any): void;
    has(value: T): boolean;
    readonly size: number;
}

interface WeakSet<T extends WeakKey> {
    add(value: T): this;
    delete(value: T): boolean;
    has(value: T): boolean;
}

interface WeakSetConstructor {
    new <T extends WeakKey = WeakKey>(values?: readonly T[] | null): WeakSet<T>;
    readonly prototype: WeakSet<WeakKey>;
}
declare var WeakSet: WeakSetConstructor;
`

const libReplacementNativeIdentitySource = `import typia from "typia";

export const createdIsProbe = typia.createIs<LibReplacementProbe>();
export const createdIsMap = typia.createIs<Map<string, number>>();
export const createdIsSet = typia.createIs<Set<string>>();
export const createdIsWeakMap = typia.createIs<WeakMap<object, string>>();
export const createdIsWeakSet = typia.createIs<WeakSet<object>>();
export const createdIsDate = typia.createIs<Date>();
export const createdIsBytes = typia.createIs<Uint8Array>();
`

const libReplacementNativeIdentityRuntimeRunner = `const validators = require("./input.cjs");

let ran = 0;
const failures = [];
const eq = (name, actual, expected) => {
  ran += 1;
  if (actual !== expected) {
    failures.push(name + ": expected " + expected + " but got " + actual);
  }
};

eq("probe structural", validators.createdIsProbe({ libReplacementMarker: "x" }), true);
eq("Map real", validators.createdIsMap(new Map([["x", 1]])), true);
eq("Map plain", validators.createdIsMap({}), false);
eq("Set real", validators.createdIsSet(new Set(["x"])), true);
eq("Set plain", validators.createdIsSet({}), false);
eq("WeakMap real", validators.createdIsWeakMap(new WeakMap()), true);
eq("WeakMap plain", validators.createdIsWeakMap({}), false);
eq("WeakSet real", validators.createdIsWeakSet(new WeakSet()), true);
eq("WeakSet plain", validators.createdIsWeakSet({}), false);
eq("Date real", validators.createdIsDate(new Date()), true);
eq("Date plain", validators.createdIsDate({}), false);
eq("Uint8Array real", validators.createdIsBytes(new Uint8Array(1)), true);
eq("Uint8Array plain", validators.createdIsBytes({}), false);

console.log("RAN " + ran + " REPLACEMENT CASES");
if (failures.length !== 0) {
  throw new Error("MISMATCHES:\n" + failures.join("\n"));
}
`
