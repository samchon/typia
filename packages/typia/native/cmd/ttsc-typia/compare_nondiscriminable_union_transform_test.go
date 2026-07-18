package main

import (
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestCompareNonDiscriminableUnionTransform pins compare.equals over an object
// union no discriminant can split (issue #2225).
//
// #2214 discriminated the object unions UnionPredicator can specialize, but left
// every other object union on the pre-#2214 flat OR of member comparators.
// UnionPredicator.Object skips a key that is not required, so a union whose
// distinguishing keys are all optional (`{ a?: number } | { b?: string }`)
// produced no specialization and always took that fallback — which is the very
// defect #2214 removed: the wrong member's comparator matches because the keys
// it declares are absent from both operands and compare `undefined ===
// undefined`, while the keys that actually differ are not declared by that
// member at all. So `equals({ a: 1 }, { a: 2 })` and even `equals({ a: 1 }, {})`
// were `true` for distinct references.
//
// The fix routes such a union through the first-is-match ladder that
// clone/classify/prune reach via Decode_union_object: each operand resolves to
// the first member it structurally matches, distinct members compare false, and
// a shared member's comparator decides the rest. `equals` therefore agrees with
// what `clone` produces for the same value.
//
// All fixtures compare DISTINCT references (fresh object literals) so the
// `x === y` identity fast path never hides the flaw.
//
//  1. Transform is + compare.createEquals + plain.createClone over
//     all-optional, shared-optional-key, three-member, empty-member,
//     discriminable/non-discriminable mixed, nested, recursive, container-valued
//     and native-bearing non-discriminable unions.
//  2. Require distinct-but-different values to compare not-equal (a populated
//     object never equals `{}`), distinct-but-identical values to compare equal.
//  3. Require `equals` to agree with `clone` over every ordered sample pair of
//     `is`-valid values, and to be false whenever either operand fails `is`.
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
  compareNonDiscriminableUnionRunRuntimeCases(t, project, out)
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

func compareNonDiscriminableUnionRunRuntimeCases(t *testing.T, project string, js string) {
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
  if err := os.WriteFile(filepath.Join(runtimeDir, "throw-type-guard-error-stub.cjs"), []byte(compareNonDiscriminableUnionThrowStub), 0o644); err != nil {
    t.Fatalf("write throw stub: %v", err)
  }
  js = strings.ReplaceAll(js, `require("typia/lib/internal/_throwTypeGuardError")`, `require("./throw-type-guard-error-stub.cjs")`)
  runtimeJS := ttscTypiaTestRewriteCommonJS(t, js)
  if err := os.WriteFile(filepath.Join(runtimeDir, "main.cjs"), []byte(runtimeJS), 0o644); err != nil {
    t.Fatalf("write runtime module: %v", err)
  }
  runner := filepath.Join(runtimeDir, "run.cjs")
  if err := os.WriteFile(runner, []byte(compareNonDiscriminableUnionRuntimeRunner), 0o644); err != nil {
    t.Fatalf("write runtime runner: %v", err)
  }
  cmd := exec.Command(node, runner)
  cmd.Dir = runtimeDir
  output, err := cmd.CombinedOutput()
  if err != nil {
    t.Fatalf("compare non-discriminable union runtime cases failed: %v\n%s", err, output)
  }
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

const compareNonDiscriminableUnionThrowStub = `module.exports._throwTypeGuardError = (props) => {
  const error = new Error("guard: " + props.expected);
  error.name = "TypeGuardError";
  throw error;
};
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

const compareNonDiscriminableUnionRuntimeRunner = `const mod = require("./main.cjs");

let failures = 0;
const expect = (label, actual, expected) => {
  if (actual !== expected) {
    console.log("FAIL " + label + ": expected " + expected + ", got " + actual);
    failures++;
  }
};
const copy = (v) => JSON.parse(JSON.stringify(v));
// Serialize a clone so that a key the resolved member declares but the value
// omits stays visible: JSON.stringify drops an undefined-valued key, which would
// make two members that declare different keys look alike.
const shape = (v) => JSON.stringify(v, (_key, value) => (value === undefined ? null : value));

// --- 1. the reported defect: {a?:number} | {b?:string} ---
expect("opt a different", mod.eqOpt({ a: 1 }, { a: 2 }), false);
expect("opt populated vs empty", mod.eqOpt({ a: 1 }, {}), false);
expect("opt empty vs populated", mod.eqOpt({}, { a: 1 }), false);
expect("opt cross member", mod.eqOpt({ a: 1 }, { b: "p" }), false);
expect("opt identical", mod.eqOpt({ a: 1 }, { a: 1 }), true);
expect("opt both empty", mod.eqOpt({}, {}), true);
// both values resolve to the first member, under which "b" is not declared:
// exactly what clone keeps, so equals must agree with clone rather than with
// the raw literals.
expect("opt second-member payload follows clone", mod.eqOpt({ b: "p" }, { b: "q" }), JSON.stringify(mod.cloneOpt({ b: "p" })) === JSON.stringify(mod.cloneOpt({ b: "q" })));
expect("opt member resolution follows clone", mod.eqOpt({}, { a: "x" }), false);
expect("opt invalid operand", mod.eqOpt({ a: "x", b: 1 }, { a: "x", b: 1 }), false);

// --- 2. shared optional key ---
expect("shared c different", mod.eqShared({ c: true }, { c: false }), false);
expect("shared c identical", mod.eqShared({ a: 1, c: true }, { a: 1, c: true }), true);
expect("shared a different", mod.eqShared({ a: 1, c: true }, { a: 2, c: true }), false);
expect("shared populated vs empty", mod.eqShared({ a: 1 }, {}), false);
expect("shared c only vs empty", mod.eqShared({ c: true }, {}), false);

// --- 3. three all-optional members ---
expect("three a different", mod.eqThree({ a: 1 }, { a: 2 }), false);
expect("three populated vs empty", mod.eqThree({ a: 1 }, {}), false);
expect("three identical", mod.eqThree({ a: 1 }, { a: 1 }), true);
expect("three cross member", mod.eqThree({ a: 1 }, { c: true }), false);

// --- 4. member matching everything ---
expect("withempty a different", mod.eqWithEmpty({ a: 1 }, { a: 2 }), false);
expect("withempty populated vs empty", mod.eqWithEmpty({ a: 1 }, {}), false);
expect("withempty identical", mod.eqWithEmpty({ a: 1 }, { a: 1 }), true);

// --- 5. discriminable member beside a non-discriminable pair ---
expect("mixed disc different", mod.eqMixed({ type: "a", x: 1 }, { type: "a", x: 2 }), false);
expect("mixed disc identical", mod.eqMixed({ type: "a", x: 1 }, { type: "a", x: 1 }), true);
expect("mixed disc vs optional", mod.eqMixed({ type: "a", x: 1 }, { p: 1 }), false);
expect("mixed optional different", mod.eqMixed({ p: 1 }, { p: 2 }), false);
expect("mixed optional vs empty", mod.eqMixed({ p: 1 }, {}), false);
expect("mixed optional identical", mod.eqMixed({ p: 1 }, { p: 1 }), true);

// --- 6. nested non-discriminable union property ---
expect("nested inner different", mod.eqNested({ wrap: { a: 1 } }, { wrap: { a: 2 } }), false);
expect("nested inner populated vs empty", mod.eqNested({ wrap: { a: 1 } }, { wrap: {} }), false);
expect("nested inner identical", mod.eqNested({ wrap: { a: 1 } }, { wrap: { a: 1 } }), true);
expect("nested cross member", mod.eqNested({ wrap: { a: 1 } }, { wrap: { b: "p" } }), false);

// --- 7. container-valued members ---
expect("container array different", mod.eqContainer({ value: [1, 2] }, { value: [1, 3] }), false);
expect("container array identical", mod.eqContainer({ value: [1, 2] }, { value: [1, 2] }), true);
expect("container array vs empty", mod.eqContainer({ value: [1] }, {}), false);
expect("container tuple different", mod.eqContainer({ value: [1, "p"] }, { value: [1, "q"] }), false);
expect("container tuple identical", mod.eqContainer({ value: [1, "p"] }, { value: [1, "p"] }), true);
expect("container cross member", mod.eqContainer({ value: [1] }, { value: [1, "p"] }), false);

// --- 8. recursive non-discriminable union ---
const mkRec = () => ({ a: 1, child: { a: 2, child: { a: 3 } } });
expect("rec identical", mod.eqRec(mkRec(), mkRec()), true);
expect("rec deep different", mod.eqRec(mkRec(), { a: 1, child: { a: 2, child: { a: 9 } } }), false);
expect("rec depth different", mod.eqRec(mkRec(), { a: 1, child: { a: 2 } }), false);
expect("rec populated vs empty", mod.eqRec(mkRec(), {}), false);

// --- 9. native beside the non-discriminable union ---
expect("withnative same date", mod.eqWithNative(new Date(0), new Date(0)), true);
expect("withnative diff date", mod.eqWithNative(new Date(0), new Date(5000)), false);
expect("withnative date vs object", mod.eqWithNative(new Date(0), { a: 1 }), false);
expect("withnative object different", mod.eqWithNative({ a: 1 }, { a: 2 }), false);
expect("withnative object identical", mod.eqWithNative({ a: 1 }, { a: 1 }), true);
expect("withnative populated vs empty", mod.eqWithNative({ a: 1 }, {}), false);

// --- controls: the discriminated path and the non-union paths are untouched ---
expect("disc different", mod.eqDisc({ type: "a", x: 1 }, { type: "a", x: 2 }), false);
expect("disc identical", mod.eqDisc({ type: "a", x: 1 }, { type: "a", x: 1 }), true);
expect("disc cross arm", mod.eqDisc({ type: "a", x: 1 }, { type: "b", y: "p" }), false);
expect("prim different", mod.eqPrim(1, 2), false);
expect("prim identical", mod.eqPrim("x", "x"), true);
expect("arrunion different", mod.eqArrUnion([1, 2], [1, 3]), false);
expect("arrunion identical", mod.eqArrUnion([1, 2], [1, 2]), true);
expect("obj optional different", mod.eqObj({ a: 1 }, { a: 2 }), false);
expect("obj optional vs empty", mod.eqObj({ a: 1 }, {}), false);
expect("obj optional identical", mod.eqObj({ a: 1 }, { a: 1 }), true);

// --- equals agrees with is and with the member clone resolves to ---
// For every ordered pair of samples (distinct references throughout):
//   * an operand is rejects is never equal to anything, and
//   * two is-valid operands are equal exactly when their clones are, which is
//     the statement "both resolved to the same member and agree on everything
//     that member declares".
const agree = (label, eq, is, clone, samples) => {
  for (const a of samples)
    for (const b of samples) {
      const x = copy(a);
      const y = copy(b);
      const suffix = " " + JSON.stringify(a) + " | " + JSON.stringify(b);
      if (is(x) === false || is(y) === false) {
        expect(label + " invalid operand not equal" + suffix, eq(x, y), false);
        continue;
      }
      expect(label + " equals agrees with clone" + suffix, eq(x, y), shape(clone(x)) === shape(clone(y)));
    }
};

agree("opt", mod.eqOpt, mod.isOpt, mod.cloneOpt, [
  {}, { a: 1 }, { a: 2 }, { b: "p" }, { b: "q" }, { a: 1, b: "p" }, { a: "x", b: 1 }, { a: "x" },
]);
agree("shared", mod.eqShared, mod.isShared, mod.cloneShared, [
  {}, { a: 1 }, { c: true }, { c: false }, { a: 1, c: true }, { b: "p" }, { b: "p", c: true }, { a: "x", b: 1 },
]);
agree("three", mod.eqThree, mod.isThree, mod.cloneThree, [
  {}, { a: 1 }, { b: "p" }, { c: true }, { c: false }, { a: 1, c: true }, { a: "x", b: 1, c: 2 },
]);
agree("mixed", mod.eqMixed, mod.isMixed, mod.cloneMixed, [
  {}, { type: "a", x: 1 }, { type: "a", x: 2 }, { p: 1 }, { p: 2 }, { q: "z" },
]);
agree("nested", mod.eqNested, mod.isNested, mod.cloneNested, [
  { wrap: {} }, { wrap: { a: 1 } }, { wrap: { a: 2 } }, { wrap: { b: "p" } },
]);
agree("container", mod.eqContainer, mod.isContainer, mod.cloneContainer, [
  {}, { value: [] }, { value: [1] }, { value: [1, 2] }, { value: [1, "p"] }, { value: [2, "p"] },
]);

if (failures > 0) {
  throw new Error(failures + " assertion(s) failed");
}
console.log("all compare-non-discriminable-union cases passed");
`
