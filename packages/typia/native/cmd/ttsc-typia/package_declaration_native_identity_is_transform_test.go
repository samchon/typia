package main

import (
  "fmt"
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestPackageDeclarationNativeIdentityIsTransform pins runtime-native identity
// across ordinary package declarations and the genuine global controls (#2239).
//
// A declaration file is a normal published TypeScript package surface, so its
// source form cannot by itself establish that a Date/Map/Set/WeakMap symbol is
// the JavaScript native. The package types below are checker-equivalent to local
// structural controls and must keep their own members. Conversely, real global
// Date/Map/Set/WeakMap/WeakSet and Node-provided File/Blob types must retain
// their native checks.
//
//  1. Publish colliding structural declarations through a fixture package's
//     index.d.ts and transform validators for them plus local controls.
//  2. Transform genuine global validators with DOM libraries excluded, making
//     File and Blob come from the installed @types/node declaration package.
//  3. Inspect the emitted classification and execute all validators in Node,
//     requiring an exact case count so an omitted branch cannot pass silently.
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
  output, runtimeErr := packageDeclarationNativeIdentityRun(t, project, packageJS, nativeJS)
  if runtimeErr != nil {
    failures = append(failures, fmt.Sprintf("runtime matrix failed: %v\n%s", runtimeErr, output))
  }
  const expected = "RAN 30 CASES"
  if !strings.Contains(output, expected) {
    failures = append(failures, fmt.Sprintf("runtime runner did not report %q; got:\n%s", expected, output))
  }
  if len(failures) != 0 {
    t.Fatalf("package declaration native identity mismatches:\n%s\n\npackage emit:\n%s\n\nnative emit:\n%s", strings.Join(failures, "\n"), packageJS, nativeJS)
  }
}

func packageDeclarationNativeIdentityProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "package-declaration-native-identity-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() {
    _ = os.RemoveAll(dir)
  })

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

func packageDeclarationNativeIdentityRun(t *testing.T, project string, packageJS string, nativeJS string) (string, error) {
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
  modules := map[string]string{
    "package.cjs": ttscTypiaTestRewriteCommonJS(t, packageJS),
    "native.cjs":  ttscTypiaTestRewriteCommonJS(t, nativeJS),
    "run.cjs":     packageDeclarationNativeIdentityRuntimeRunner,
  }
  for name, content := range modules {
    if err := os.WriteFile(filepath.Join(runtimeDir, name), []byte(content), 0o644); err != nil {
      t.Fatalf("write runtime file %s: %v", name, err)
    }
  }
  cmd := exec.Command(node, filepath.Join(runtimeDir, "run.cjs"))
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  return string(output), err
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

const packageDeclarationNativeIdentityRuntimeRunner = `const packageTypes = require("./package.cjs");
const natives = require("./native.cjs");

let ran = 0;
const failures = [];
const eq = (name, actual, expected) => {
  ran += 1;
  if (actual !== expected) {
    failures.push(name + ": expected " + expected + " but got " + actual);
  }
};

eq("package Date valid", packageTypes.isPackageDate({ stamp: 1 }), true);
eq("package Date invalid", packageTypes.isPackageDate({}), false);
eq("package Date rejects native", packageTypes.isPackageDate(new Date()), false);
eq("package Map valid", packageTypes.isPackageMap({ brandMap: "x", valueMap: 1 }), true);
eq("package Map invalid", packageTypes.isPackageMap({ brandMap: "x" }), false);
eq("package Map rejects native", packageTypes.isPackageMap(new Map([["x", 1]])), false);
eq("package Set valid", packageTypes.isPackageSet({ brandSet: "x" }), true);
eq("package Set invalid", packageTypes.isPackageSet({}), false);
eq("package Set rejects native", packageTypes.isPackageSet(new Set(["x"])), false);
eq("package WeakMap valid", packageTypes.isPackageWeakMap({ brandWeakMap: {}, valueWeakMap: "x" }), true);
eq("package WeakMap invalid", packageTypes.isPackageWeakMap({ brandWeakMap: {} }), false);
eq("package WeakMap rejects native", packageTypes.isPackageWeakMap(new WeakMap()), false);

eq("local Date control", packageTypes.isLocalDate({ stamp: 1 }), true);
eq("local Map control", packageTypes.isLocalMap({ brandMap: "x", valueMap: 1 }), true);
eq("local Set control", packageTypes.isLocalSet({ brandSet: "x" }), true);
eq("local WeakMap control", packageTypes.isLocalWeakMap({ brandWeakMap: {}, valueWeakMap: "x" }), true);

eq("native Date real", natives.isNativeDate(new Date()), true);
eq("native Date plain", natives.isNativeDate({}), false);
eq("native Map real", natives.isNativeMap(new Map([["x", 1]])), true);
eq("native Map plain", natives.isNativeMap({}), false);
eq("native Set real", natives.isNativeSet(new Set(["x"])), true);
eq("native Set plain", natives.isNativeSet({}), false);
eq("native WeakMap real", natives.isNativeWeakMap(new WeakMap()), true);
eq("native WeakMap plain", natives.isNativeWeakMap({}), false);
eq("native WeakSet real", natives.isNativeWeakSet(new WeakSet()), true);
eq("native WeakSet plain", natives.isNativeWeakSet({}), false);
eq("Node File real", natives.isNativeFile(new File(["x"], "x.txt")), true);
eq("Node File plain", natives.isNativeFile({ name: "x.txt", size: 1 }), false);
eq("Node Blob real", natives.isNativeBlob(new Blob(["x"])), true);
eq("Node Blob plain", natives.isNativeBlob({ size: 1, type: "text/plain" }), false);

console.log("RAN " + ran + " CASES");
if (failures.length !== 0) {
  throw new Error("MISMATCHES:\n" + failures.join("\n"));
}
`
