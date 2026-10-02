package main

import (
  "fmt"
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestPackageDeclarationNativeIdentityIsTransform verifies package d.ts collisions versus standard natives.
//
// An arbitrary installed declaration file does not imply native ownership, even when a symbol spells Date or a collection name.
//
// 1. Packaged same-name declarations contrast with genuine standard-library natives, pinning provenance beyond a d.ts suffix.
// 2. External package declarations retain their authored data members without native instanceof overmatch; genuine native controls keep their required checks.
//
// @evidence contracts/testing.md#behavioral-verification External package declarations retain their authored data members without native instanceof overmatch; genuine native controls keep their required checks.
// @evidence contracts/testing.md#independent-expectations An arbitrary installed declaration file does not imply native ownership, even when a symbol spells Date or a collection name.
// @evidence contracts/testing.md#distinguishing-cases Packaged same-name declarations contrast with genuine standard-library natives, pinning provenance beyond a d.ts suffix.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestPackageDeclarationNativeIdentityIsTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestPackageDeclarationNativeIdentityIsTransform(t *testing.T) {
  project := packageDeclarationNativeIdentityProject(t)
  transform := func(file string) string {
    t.Helper()
    out, errText, code := ttscTypiaTestCapture(func() int {
      return runTransform([]string{
        "--cwd", project,
        "--tsconfig", "tsconfig.json",
        "--file", file,
        "--output", "js",
      })
    })
    if code != 0 {
      t.Fatalf("package declaration native identity transform %s failed: code=%d stderr=\n%s", file, code, errText)
    }
    return out
  }

  packageJS := transform("src/package.ts")
  nativeJS := transform("src/native.ts")
  failures := []string{}
  for _, member := range []string{"stamp", "brandMap", "brandSet", "brandWeakMap"} {
    if !strings.Contains(packageJS, member) {
      failures = append(failures, fmt.Sprintf("package declaration member %q was dropped", member))
    }
  }
  for _, gone := range []string{"instanceof Date", "instanceof Map", "instanceof Set", "instanceof WeakMap"} {
    if strings.Contains(packageJS, gone) {
      failures = append(failures, fmt.Sprintf("package declaration collision kept %q", gone))
    }
  }
  for _, kept := range []string{
    "instanceof Date",
    "instanceof Map",
    "instanceof Set",
    "instanceof WeakMap",
    "instanceof WeakSet",
    "instanceof File",
    "instanceof Blob",
  } {
    if !strings.Contains(nativeJS, kept) {
      failures = append(failures, fmt.Sprintf("genuine native path %q was dropped", kept))
    }
  }
  if len(failures) != 0 {
    t.Fatalf("package declaration native identity mismatches:\n%s\n\npackage emit:\n%s\n\nnative emit:\n%s", strings.Join(failures, "\n"), packageJS, nativeJS)
  }
}

func packageDeclarationNativeIdentityProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "package-declaration-native-identity-")

  src := filepath.Join(dir, "src")
  dependency := filepath.Join(dir, "node_modules", "native-name-package")
  for _, path := range []string{src, dependency} {
    if err := os.MkdirAll(path, 0o755); err != nil {
      t.Fatalf("mkdir fixture path %s: %v", path, err)
    }
  }
  files := map[string]string{
    filepath.Join(dir, "tsconfig.json"):       packageDeclarationNativeIdentityTSConfig,
    filepath.Join(dependency, "package.json"): packageDeclarationNativeIdentityPackageJSON,
    filepath.Join(dependency, "index.d.ts"):   packageDeclarationNativeIdentityDeclarations,
    filepath.Join(src, "package.ts"):          packageDeclarationNativeIdentitySource,
    filepath.Join(src, "native.ts"):           packageDeclarationNativeIdentityNativeSource,
  }
  for path, content := range files {
    if err := os.WriteFile(path, []byte(content), 0o644); err != nil {
      t.Fatalf("write fixture file %s: %v", path, err)
    }
  }
  return dir
}

const packageDeclarationNativeIdentityTSConfig = `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "commonjs",
    "moduleResolution": "bundler",
    "ignoreDeprecations": "6.0",
    "lib": ["ES2022"],
    "types": ["node"],
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
`

const packageDeclarationNativeIdentityPackageJSON = `{
  "name": "native-name-package",
  "version": "1.0.0",
  "types": "index.d.ts"
}
`

const packageDeclarationNativeIdentityDeclarations = `export interface Date {
  stamp: number;
}
export interface Map<K, V> {
  brandMap: K;
  valueMap: V;
}
export interface Set<T> {
  brandSet: T;
}
export interface WeakMap<K extends object, V> {
  brandWeakMap: K;
  valueWeakMap: V;
}
`

const packageDeclarationNativeIdentitySource = `import typia from "typia";
import type {
  Date as PackageDate,
  Map as PackageMap,
  Set as PackageSet,
  WeakMap as PackageWeakMap,
} from "native-name-package";

interface LocalDate {
  stamp: number;
}
interface LocalMap<K, V> {
  brandMap: K;
  valueMap: V;
}
interface LocalSet<T> {
  brandSet: T;
}
interface LocalWeakMap<K extends object, V> {
  brandWeakMap: K;
  valueWeakMap: V;
}

type Assert<T extends true> = T;
type Same<X, Y> = [X] extends [Y]
  ? [Y] extends [X]
    ? true
    : false
  : false;
type _PackageDateIsLocal = Assert<Same<PackageDate, LocalDate>>;
type _PackageMapIsLocal = Assert<Same<PackageMap<string, number>, LocalMap<string, number>>>;
type _PackageSetIsLocal = Assert<Same<PackageSet<string>, LocalSet<string>>>;
type _PackageWeakMapIsLocal = Assert<Same<PackageWeakMap<object, string>, LocalWeakMap<object, string>>>;

export const isPackageDate = typia.createIs<PackageDate>();
export const isPackageMap = typia.createIs<PackageMap<string, number>>();
export const isPackageSet = typia.createIs<PackageSet<string>>();
export const isPackageWeakMap = typia.createIs<PackageWeakMap<object, string>>();
export const isLocalDate = typia.createIs<LocalDate>();
export const isLocalMap = typia.createIs<LocalMap<string, number>>();
export const isLocalSet = typia.createIs<LocalSet<string>>();
export const isLocalWeakMap = typia.createIs<LocalWeakMap<object, string>>();
`

const packageDeclarationNativeIdentityNativeSource = `import typia from "typia";

export const isNativeDate = typia.createIs<Date>();
export const isNativeMap = typia.createIs<Map<string, number>>();
export const isNativeSet = typia.createIs<Set<string>>();
export const isNativeWeakMap = typia.createIs<WeakMap<object, string>>();
export const isNativeWeakSet = typia.createIs<WeakSet<object>>();
export const isNativeFile = typia.createIs<File>();
export const isNativeBlob = typia.createIs<Blob>();
`
