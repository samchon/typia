package main

import (
  "fmt"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestLibReplacementNativeIdentityTransform verifies native ownership in an installed default-library replacement.
//
// Compiler-recognized replacement libraries carry the supported standard native declaration ownership; the authored probe proves the replacement file is actually loaded.
//
// 1. An installed collection replacement is paired with bundled native controls and a replacement-only probe, avoiding a filename-only identity assumption.
// 2. Emission retains the replacement probe member while Date, Uint8Array and Map retain their genuine native paths.
//
// @evidence contracts/testing.md#behavioral-verification Emission retains the replacement probe member while Date, Uint8Array and Map retain their genuine native paths.
// @evidence contracts/testing.md#independent-expectations Compiler-recognized replacement libraries carry the supported standard native declaration ownership; the authored probe proves the replacement file is actually loaded.
// @evidence contracts/testing.md#distinguishing-cases An installed collection replacement is paired with bundled native controls and a replacement-only probe, avoiding a filename-only identity assumption.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestLibReplacementNativeIdentityTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
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

  if len(failures) != 0 {
    t.Fatalf("lib replacement native identity mismatches:\n%s\n\nemit:\n%s", strings.Join(failures, "\n"), js)
  }
}

func libReplacementNativeIdentityProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "lib-replacement-native-identity-")
  for name, content := range map[string]string{
    "tsconfig.json": libReplacementNativeIdentityTSConfig,
    "node_modules/@typescript/lib-es2015/package.json":    libReplacementNativeIdentityPackageJSON,
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
