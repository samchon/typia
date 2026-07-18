package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestNativeNamedIntersectionUnionTransform verifies a structural intersection
// keeps its object identity when a user declaration shares a native name.
//
// The standalone local Date and Date intersection already use structural
// metadata. Union composition must retain that classification instead of
// pruning the inhabited arm as a native/object conflict. Native-named local
// String and Number declarations must follow the same structural path, while
// genuine native wrappers and impossible intersections retain their existing
// pruning paths.
//
//  1. Transform standalone, union, genuine-native, impossible, and colliding
//     native-name controls.
//  2. Inspect each union factory to prove local structural arms are retained
//     while genuine wrappers and existing collection arms keep their emit.
//  3. Execute both valid arms, invalid near-misses, and pruning controls.
func TestNativeNamedIntersectionUnionTransform(t *testing.T) {
  project := nativeNamedIntersectionUnionProject(t)
  js := nativeNamedIntersectionUnionTransform(t, project)

  localUnion := nativeNamedIntersectionUnionExport(t, js, "isLocalUnion", "isLocalMapUnion")
  for _, retained := range []string{"input.stamp", "input.label", "input.ok"} {
    if !strings.Contains(localUnion, retained) {
      t.Errorf("local structural union lost %q in emitted factory:\n%s", retained, localUnion)
    }
  }
  if strings.Contains(localUnion, "instanceof Date") {
    t.Errorf("local structural union was emitted as a genuine Date:\n%s", localUnion)
  }

  localWrapperUnions := []struct {
    name    string
    next    string
    members []string
    native  string
  }{
    {"isLocalStringUnion", "isLocalNumberUnion", []string{"input.stringValue", "input.label", "input.stringOk"}, "String"},
    {"isLocalNumberUnion", "isLocalMapUnion", []string{"input.numberValue", "input.label", "input.numberOk"}, "Number"},
  }
  for _, control := range localWrapperUnions {
    segment := nativeNamedIntersectionUnionExport(t, js, control.name, control.next)
    for _, retained := range control.members {
      if !strings.Contains(segment, retained) {
        t.Errorf("%s lost structural member %q in emitted factory:\n%s", control.name, retained, segment)
      }
    }
    if strings.Contains(segment, "instanceof "+control.native) {
      t.Errorf("%s was emitted as a genuine %s wrapper:\n%s", control.name, control.native, segment)
    }
  }

  collectionUnions := []struct {
    name    string
    next    string
    members []string
  }{
    {"isLocalMapUnion", "isLocalSetUnion", []string{"input.brandMap", "input.valueMap", "input.label", "input.mapOk"}},
    {"isLocalSetUnion", "isLocalWeakMapUnion", []string{"input.brandSet", "input.label", "input.setOk"}},
    {"isLocalWeakMapUnion", "isLocalWeakSetUnion", []string{"input.brandWeakMap", "input.valueWeakMap", "input.label", "input.weakMapOk"}},
    {"isLocalWeakSetUnion", "isNativeDate", []string{"input.brandWeakSet", "input.label", "input.weakSetOk"}},
  }
  for _, control := range collectionUnions {
    segment := nativeNamedIntersectionUnionExport(t, js, control.name, control.next)
    for _, retained := range control.members {
      if !strings.Contains(segment, retained) {
        t.Fatalf("%s lost structural member %q in emitted factory:\n%s", control.name, retained, segment)
      }
    }
  }

  nativeDate := nativeNamedIntersectionUnionExport(t, js, "isNativeDate", "isNativeIntersectionUnion")
  if !strings.Contains(nativeDate, "instanceof Date") {
    t.Fatalf("genuine Date lost its native identity in emitted factory:\n%s", nativeDate)
  }

  nativeUnion := nativeNamedIntersectionUnionExport(t, js, "isNativeIntersectionUnion", "isNativeStringIntersectionUnion")
  for _, pruned := range []string{"instanceof Date", "input.label"} {
    if strings.Contains(nativeUnion, pruned) {
      t.Fatalf("genuine native intersection unexpectedly survived union pruning as %q:\n%s", pruned, nativeUnion)
    }
  }
  if !strings.Contains(nativeUnion, "input.ok") {
    t.Fatalf("genuine native intersection control lost its inhabited object arm:\n%s", nativeUnion)
  }

  nativeWrapperUnions := []struct {
    name   string
    next   string
    native string
    other  string
  }{
    {"isNativeStringIntersectionUnion", "isNativeNumberIntersectionUnion", "String", "nativeStringOk"},
    {"isNativeNumberIntersectionUnion", "isImpossibleUnion", "Number", "nativeNumberOk"},
  }
  for _, control := range nativeWrapperUnions {
    segment := nativeNamedIntersectionUnionExport(t, js, control.name, control.next)
    for _, pruned := range []string{"instanceof " + control.native, "input.label"} {
      if strings.Contains(segment, pruned) {
        t.Fatalf("genuine %s wrapper intersection unexpectedly survived union pruning as %q:\n%s", control.native, pruned, segment)
      }
    }
    if !strings.Contains(segment, "input."+control.other) {
      t.Fatalf("genuine %s wrapper control lost its inhabited object arm:\n%s", control.native, segment)
    }
  }

  impossibleUnion := nativeNamedIntersectionUnionExport(t, js, "isImpossibleUnion", "")
  if strings.Contains(impossibleUnion, "input.data") {
    t.Fatalf("impossible intersection unexpectedly survived union pruning:\n%s", impossibleUnion)
  }
  if !strings.Contains(impossibleUnion, "input.ok") {
    t.Fatalf("impossible intersection control lost its inhabited object arm:\n%s", impossibleUnion)
  }

  nativeNamedIntersectionUnionRunRuntimeCases(t, project, js)
}

func nativeNamedIntersectionUnionProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "native-named-intersection-union-")
  if err != nil {
    t.Fatalf("create temp fixture: %v", err)
  }
  t.Cleanup(func() { _ = os.RemoveAll(dir) })
  src := filepath.Join(dir, "src")
  if err := os.MkdirAll(src, 0o755); err != nil {
    t.Fatalf("mkdir fixture src: %v", err)
  }
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(nativeNamedIntersectionUnionTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(nativeNamedIntersectionUnionSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

func nativeNamedIntersectionUnionTransform(t *testing.T, project string) string {
  t.Helper()
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("native-named intersection union transform failed: code=%d stderr=\n%s", code, errText)
  }
  return out
}

func nativeNamedIntersectionUnionExport(t *testing.T, js string, name string, next string) string {
  t.Helper()
  marker := "exports." + name + " = (() =>"
  start := strings.Index(js, marker)
  if start == -1 {
    t.Fatalf("emitted JavaScript has no %s factory:\n%s", name, js)
  }
  segment := js[start:]
  if next != "" {
    end := strings.Index(segment, "exports."+next+" = (() =>")
    if end == -1 {
      t.Fatalf("emitted JavaScript has no %s boundary after %s:\n%s", next, name, js)
    }
    segment = segment[:end]
  }
  return segment
}

func nativeNamedIntersectionUnionRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(ttscTypiaTestRewriteCommonJS(t, js)), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(nativeNamedIntersectionUnionRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("native-named intersection union runtime cases failed: %v\n%s", err, output)
  }
  if !strings.Contains(string(output), "RAN 44 CASES") {
    t.Fatalf("runtime runner did not report all cases:\n%s", output)
  }
}

const nativeNamedIntersectionUnionTSConfig = `{
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

const nativeNamedIntersectionUnionSource = `import typia from "typia";

interface Date {
  stamp: number;
}
interface String {
  stringValue: string;
}
interface Number {
  numberValue: number;
}
interface Map<K, V> {
  brandMap: K;
  valueMap: V;
}
interface Set<T> {
  brandSet: T;
}
interface WeakMap<K extends object, V> {
  brandWeakMap: K;
  valueWeakMap: V;
}
interface WeakSet<T extends object> {
  brandWeakSet: T;
}
type LocalIntersection = Date & { label: string };
type LocalUnion = LocalIntersection | { ok: boolean };
type LocalStringUnion =
  | (String & { label: string })
  | { stringOk: boolean };
type LocalNumberUnion =
  | (Number & { label: string })
  | { numberOk: boolean };
type LocalMapUnion =
  | (Map<string, number> & { label: string })
  | { mapOk: boolean };
type LocalSetUnion =
  | (Set<string> & { label: string })
  | { setOk: boolean };
type LocalWeakMapUnion =
  | (WeakMap<object, string> & { label: string })
  | { weakMapOk: boolean };
type LocalWeakSetUnion =
  | (WeakSet<object> & { label: string })
  | { weakSetOk: boolean };

type NativeDate = InstanceType<typeof globalThis.Date>;
type NativeIntersectionUnion =
  | (NativeDate & { label: string })
  | { ok: boolean };
type NativeString = InstanceType<typeof globalThis.String>;
type NativeNumber = InstanceType<typeof globalThis.Number>;
type NativeStringIntersectionUnion =
  | (NativeString & { label: string })
  | { nativeStringOk: boolean };
type NativeNumberIntersectionUnion =
  | (NativeNumber & { label: string })
  | { nativeNumberOk: boolean };
type ImpossibleUnion =
  | (string & { data: number })
  | { ok: boolean };

export const isLocalDate = typia.createIs<Date>();
export const isLocalIntersection = typia.createIs<LocalIntersection>();
export const isLocalUnion = typia.createIs<LocalUnion>();
export const isLocalStringUnion = typia.createIs<LocalStringUnion>();
export const isLocalNumberUnion = typia.createIs<LocalNumberUnion>();
export const isLocalMapUnion = typia.createIs<LocalMapUnion>();
export const isLocalSetUnion = typia.createIs<LocalSetUnion>();
export const isLocalWeakMapUnion = typia.createIs<LocalWeakMapUnion>();
export const isLocalWeakSetUnion = typia.createIs<LocalWeakSetUnion>();
export const isNativeDate = typia.createIs<NativeDate>();
export const isNativeIntersectionUnion =
  typia.createIs<NativeIntersectionUnion>();
export const isNativeStringIntersectionUnion =
  typia.createIs<NativeStringIntersectionUnion>();
export const isNativeNumberIntersectionUnion =
  typia.createIs<NativeNumberIntersectionUnion>();
export const isImpossibleUnion = typia.createIs<ImpossibleUnion>();
`

const nativeNamedIntersectionUnionRuntimeRunner = `const mod = require("./main.cjs");

let ran = 0;
const failures = [];
const check = (label, actual, expected) => {
  ran += 1;
  if (actual !== expected) {
    failures.push(label + ": expected " + expected + " but got " + actual);
  }
};

check("local Date valid", mod.isLocalDate({ stamp: 1 }), true);
check("local Date native", mod.isLocalDate(new Date(0)), false);
check("local Date missing stamp", mod.isLocalDate({}), false);

check("local intersection valid", mod.isLocalIntersection({ stamp: 1, label: "x" }), true);
check("local intersection missing label", mod.isLocalIntersection({ stamp: 1 }), false);
check("local intersection missing stamp", mod.isLocalIntersection({ label: "x" }), false);

check("local union structural arm", mod.isLocalUnion({ stamp: 1, label: "x" }), true);
check("local union other arm", mod.isLocalUnion({ ok: true }), true);
check("local union near-miss", mod.isLocalUnion({ stamp: 1 }), false);
check("local union bad other arm", mod.isLocalUnion({ ok: "yes" }), false);

check("local String union structural arm", mod.isLocalStringUnion({ stringValue: "x", label: "s" }), true);
check("local String union other arm", mod.isLocalStringUnion({ stringOk: true }), true);
check("local String union near-miss", mod.isLocalStringUnion({ stringValue: "x" }), false);
check("local String union bad other arm", mod.isLocalStringUnion({ stringOk: "yes" }), false);
check("local Number union structural arm", mod.isLocalNumberUnion({ numberValue: 1, label: "n" }), true);
check("local Number union other arm", mod.isLocalNumberUnion({ numberOk: true }), true);
check("local Number union near-miss", mod.isLocalNumberUnion({ numberValue: 1 }), false);
check("local Number union bad other arm", mod.isLocalNumberUnion({ numberOk: "yes" }), false);

check("local Map union structural arm", mod.isLocalMapUnion({ brandMap: "x", valueMap: 1, label: "m" }), true);
check("local Map union other arm", mod.isLocalMapUnion({ mapOk: true }), true);
check("local Map union near-miss", mod.isLocalMapUnion({ brandMap: "x", valueMap: 1 }), false);
check("local Set union structural arm", mod.isLocalSetUnion({ brandSet: "x", label: "s" }), true);
check("local Set union other arm", mod.isLocalSetUnion({ setOk: true }), true);
check("local Set union near-miss", mod.isLocalSetUnion({ brandSet: "x" }), false);
check("local WeakMap union structural arm", mod.isLocalWeakMapUnion({ brandWeakMap: {}, valueWeakMap: "x", label: "wm" }), true);
check("local WeakMap union other arm", mod.isLocalWeakMapUnion({ weakMapOk: true }), true);
check("local WeakMap union near-miss", mod.isLocalWeakMapUnion({ brandWeakMap: {}, valueWeakMap: "x" }), false);
check("local WeakSet union structural arm", mod.isLocalWeakSetUnion({ brandWeakSet: {}, label: "ws" }), true);
check("local WeakSet union other arm", mod.isLocalWeakSetUnion({ weakSetOk: true }), true);
check("local WeakSet union near-miss", mod.isLocalWeakSetUnion({ brandWeakSet: {} }), false);

check("genuine Date", mod.isNativeDate(new Date(0)), true);
check("genuine Date plain object", mod.isNativeDate({}), false);
check(
  "genuine native intersection pruned",
  mod.isNativeIntersectionUnion(Object.assign(new Date(0), { label: "x" })),
  false,
);
check("genuine native union other arm", mod.isNativeIntersectionUnion({ ok: true }), true);
check("genuine native plain near-miss", mod.isNativeIntersectionUnion({ label: "x" }), false);

check(
  "genuine String wrapper intersection pruned",
  mod.isNativeStringIntersectionUnion(Object.assign(new String("x"), { label: "s" })),
  false,
);
check("genuine String wrapper union other arm", mod.isNativeStringIntersectionUnion({ nativeStringOk: true }), true);
check("genuine String wrapper plain near-miss", mod.isNativeStringIntersectionUnion({ label: "s" }), false);
check(
  "genuine Number wrapper intersection pruned",
  mod.isNativeNumberIntersectionUnion(Object.assign(new Number(1), { label: "n" })),
  false,
);
check("genuine Number wrapper union other arm", mod.isNativeNumberIntersectionUnion({ nativeNumberOk: true }), true);
check("genuine Number wrapper plain near-miss", mod.isNativeNumberIntersectionUnion({ label: "n" }), false);

check("impossible union other arm", mod.isImpossibleUnion({ ok: true }), true);
check("impossible union primitive", mod.isImpossibleUnion("x"), false);
check("impossible union object", mod.isImpossibleUnion({ data: 1 }), false);

console.log("RAN " + ran + " CASES");
if (failures.length !== 0) {
  throw new Error("MISMATCHES:\n" + failures.join("\n"));
}
`
