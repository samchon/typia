package main

import (
  "os"
  "path/filepath"
  "strings"
  "testing"
)

// TestCompareNonDiscriminableUnionTransform verifies membership helper emission for an unlabeled object union.
//
// Absent a disjoint discriminator, typia must use structural member checks to select a comparison arm. The authored union requires that fallback.
//
// 1. The fixture supplies several overlapping object variants; the assertion pins presence of fallback routing, while functional and native identity negative boundaries are owned by their separate cases.
// 2. The transform succeeds and emits its union member matcher rather than failing to generate the non-discriminated union.
//
// @evidence contracts/testing.md#behavioral-verification The transform succeeds and emits its union member matcher rather than failing to generate the non-discriminated union.
// @evidence contracts/testing.md#independent-expectations Absent a disjoint discriminator, typia must use structural member checks to select a comparison arm. The authored union requires that fallback.
// @evidence contracts/testing.md#distinguishing-cases The fixture supplies several overlapping object variants; the assertion pins presence of fallback routing, while functional and native identity negative boundaries are owned by their separate cases.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestCompareNonDiscriminableUnionTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
func TestCompareNonDiscriminableUnionTransform(t *testing.T) {
  project := compareNonDiscriminableUnionProject(t)
  out, errText, code := ttscTypiaTestCapture(func() int {
    return runTransform([]string{
      "--cwd", project,
      "--tsconfig", "tsconfig.json",
      "--file", "src/main.ts",
      "--output", "js",
    })
  })
  if code != 0 {
    t.Fatalf("compare non-discriminable union transform failed: code=%d stderr=\n%s", code, errText)
  }
  if strings.Contains(out, "_ui0") == false {
    t.Fatalf("expected the is-match member matchers in the emit, got:\n%s", out)
  }
}

func compareNonDiscriminableUnionProject(t *testing.T) string {
  t.Helper()
  root := ttscTypiaTestRepoRoot(t)
  base := filepath.Join(root, "packages", "typia", "native", ".tmp-ttsc-typia-tests")
  if err := os.MkdirAll(base, 0o755); err != nil {
    t.Fatalf("mkdir temp base: %v", err)
  }
  dir, err := os.MkdirTemp(base, "compare-union-nondisc-")
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
  if err := os.WriteFile(filepath.Join(dir, "tsconfig.json"), []byte(compareNonDiscriminableUnionTSConfig), 0o644); err != nil {
    t.Fatalf("write tsconfig: %v", err)
  }
  if err := os.WriteFile(filepath.Join(src, "main.ts"), []byte(compareNonDiscriminableUnionSource), 0o644); err != nil {
    t.Fatalf("write source: %v", err)
  }
  return dir
}

const compareNonDiscriminableUnionTSConfig = `{
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

const compareNonDiscriminableUnionSource = `import typia from "typia";

// 1. the canonical all-optional union: no member has a unique required key
type Opt = { a?: number } | { b?: string };
export const isOpt = typia.createIs<Opt>();
export const eqOpt = typia.compare.createEquals<Opt>();
export const cloneOpt = typia.plain.createClone<Opt>();

// 2. a key shared by both members, still no required discriminant
type Shared = { a?: number; c?: boolean } | { b?: string; c?: boolean };
export const isShared = typia.createIs<Shared>();
export const eqShared = typia.compare.createEquals<Shared>();
export const cloneShared = typia.plain.createClone<Shared>();

// 3. three all-optional members
type Three = { a?: number } | { b?: string } | { c?: boolean };
export const isThree = typia.createIs<Three>();
export const eqThree = typia.compare.createEquals<Three>();
export const cloneThree = typia.plain.createClone<Three>();

// 4. a member that declares nothing, so it matches every object
type WithEmpty = { a?: number } | { [key: string]: never };
export const isWithEmpty = typia.createIs<WithEmpty>();
export const eqWithEmpty = typia.compare.createEquals<WithEmpty>();

// 5. a discriminable member alongside a non-discriminable pair
type Mixed = { type: "a"; x: number } | { p?: number } | { q?: string };
export const isMixed = typia.createIs<Mixed>();
export const eqMixed = typia.compare.createEquals<Mixed>();
export const cloneMixed = typia.plain.createClone<Mixed>();

// 6. a nested non-discriminable union property
type Nested = { wrap: { a?: number } | { b?: string } };
export const isNested = typia.createIs<Nested>();
export const eqNested = typia.compare.createEquals<Nested>();
export const cloneNested = typia.plain.createClone<Nested>();

// 7. container-valued members: the array and tuple checks in the matcher are
//    what routes a value, since the two members share their only key
type Container = { value?: number[] } | { value?: [number, string] };
export const isContainer = typia.createIs<Container>();
export const eqContainer = typia.compare.createEquals<Container>();
export const cloneContainer = typia.plain.createClone<Container>();

// 8. a recursive non-discriminable union (matcher must not recurse forever at
//    generation time, and the comparator still receives its _vctx)
type Rec = { child?: Rec; a?: number } | { b?: string };
export const isRec = typia.createIs<Rec>();
export const eqRec = typia.compare.createEquals<Rec>();

// 9. a native alongside a non-discriminable object union (notNatives guard)
type WithNative = Date | { a?: number } | { b?: string };
export const eqWithNative = typia.compare.createEquals<WithNative>();

// controls that must keep the discriminated / flat forms
export const eqDisc = typia.compare.createEquals<
  { type: "a"; x: number } | { type: "b"; y: string }
>();
export const eqPrim = typia.compare.createEquals<string | number>();
export const eqArrUnion = typia.compare.createEquals<number[] | string[]>();
export const eqObj = typia.compare.createEquals<{ a?: number; b?: string }>();
`
