package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestNativeNamedIntersectionUnionTransform verifies structural user-native intersections and impossible native union pruning.
//
// User-named structural intersections retain their members; typia prunes primitive/native intersections outside its supported validation domain while retaining supported object alternatives.
//
// 1. Local names, real Date/boxed native controls and unsupported primitive intersections distinguish typia's identity and supported-domain boundaries.
// 2. User-named structural members survive without native overmatch; real native wrappers and impossible intersections are pruned while inhabited object arms remain.
//
// @evidence contracts/testing.md#behavioral-verification User-named structural members survive without native overmatch; real native wrappers and impossible intersections are pruned while inhabited object arms remain.
// @evidence contracts/testing.md#independent-expectations User-named structural intersections retain their members; typia prunes primitive/native intersections outside its supported validation domain while retaining supported object alternatives.
// @evidence contracts/testing.md#distinguishing-cases Local names, real Date/boxed native controls and unsupported primitive intersections distinguish typia's identity and supported-domain boundaries.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestNativeNamedIntersectionUnionTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
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

}

func nativeNamedIntersectionUnionProject(t *testing.T) string {
  t.Helper()
  dir := ttscTypiaTestFixtureDirectory(t, "native-named-intersection-union-")
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
