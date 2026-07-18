package main

import (
  "fmt"
  "os"
  "os/exec"
  "path/filepath"
  "strings"
  "testing"
)

// TestCallableInterfaceFunctionSemanticsTransform verifies declaration-syntax
// parity for pure callable and constructable types (#2238).
//
// TypeScript considers the call-only and construct-only interfaces in this
// fixture mutually assignable with their function-type aliases. Typia must
// therefore apply the same default and `functional: true` validator semantics
// to both spellings. Hybrid interfaces are a deliberate negative boundary:
// their data members must remain represented rather than disappearing through
// an over-broad signature check. The global `Function` type is the adjacent
// positive control for the pre-existing function-interface path.
//
//  1. Transform one source under the default and functional plugin options.
//  2. Exercise direct and factory validators at top level and inside holders.
//  3. Require alias parity, hybrid-member preservation, and global Function
//     behavior with an exact runtime case count.
func TestCallableInterfaceFunctionSemanticsTransform(t *testing.T) {
  project := compareEqualCoverProject(t, "callable-interface-function-semantics-", callableInterfaceFunctionSemanticsSource)
  defaultJS := callableInterfaceFunctionSemanticsTransform(t, project, false)
  functionalJS := callableInterfaceFunctionSemanticsTransform(t, project, true)

  failures := []string{}
  for name, js := range map[string]string{
    "default":    defaultJS,
    "functional": functionalJS,
  } {
    for _, member := range []string{"label", "kind", "inheritedCallableLabel", "inheritedConstructableKind"} {
      if !strings.Contains(js, member) {
        failures = append(failures, fmt.Sprintf("%s emit erased hybrid member %q", name, member))
      }
    }
  }

  output, runtimeErr := callableInterfaceFunctionSemanticsRun(t, project, defaultJS, functionalJS)
  if runtimeErr != nil {
    failures = append(failures, fmt.Sprintf("runtime matrix failed: %v\n%s", runtimeErr, output))
  }
  const expected = "RAN 104 CASES"
  if !strings.Contains(output, expected) {
    failures = append(failures, fmt.Sprintf("runtime runner did not report %q; got:\n%s", expected, output))
  }
  if len(failures) != 0 {
    t.Fatalf(
      "callable-interface function-semantics mismatches:\n%s\n\ndefault emit:\n%s\n\nfunctional emit:\n%s",
      strings.Join(failures, "\n"),
      defaultJS,
      functionalJS,
    )
  }
}

func callableInterfaceFunctionSemanticsTransform(t *testing.T, project string, functional bool) string {
  t.Helper()
  option := ""
  if functional {
    option = `,"functional":true`
  }
  payload := `[{"config":{"transform":"typia/lib/transform"` + option + `},"name":"typia","stage":"transform"}]`
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
    t.Fatalf("callable-interface transform (functional=%t) failed: code=%d stderr=\n%s", functional, code, errText)
  }
  return out
}

func callableInterfaceFunctionSemanticsRun(t *testing.T, project string, defaultJS string, functionalJS string) (string, error) {
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
    "default.cjs":    ttscTypiaTestRewriteCommonJS(t, defaultJS),
    "functional.cjs": ttscTypiaTestRewriteCommonJS(t, functionalJS),
    "run.cjs":        callableInterfaceFunctionSemanticsRuntimeRunner,
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

const callableInterfaceFunctionSemanticsSource = `import typia from "typia";

interface CallableInterface {
  (value: number): string;
}
interface ConstructableInterface {
  new (value: number): { value: number };
}
type CallableAlias = (value: number) => string;
type ConstructableAlias = new (value: number) => { value: number };

type Assert<T extends true> = T;
type Same<X, Y> = [X] extends [Y]
  ? [Y] extends [X]
    ? true
    : false
  : false;
type _CallableSpellingsAreEquivalent = Assert<Same<CallableInterface, CallableAlias>>;
type _ConstructableSpellingsAreEquivalent = Assert<Same<ConstructableInterface, ConstructableAlias>>;

interface InterfaceHolder {
  callable: CallableInterface;
  constructable: ConstructableInterface;
}
interface AliasHolder {
  callable: CallableAlias;
  constructable: ConstructableAlias;
}

interface HybridCallable {
  (value: number): string;
  label: string;
}
interface HybridConstructable {
  new (value: number): { value: number };
  kind: string;
}

interface IndexedCallable {
  (value: number): string;
  [key: string]: unknown;
}
interface IndexedConstructable {
  new (value: number): { value: number };
  [key: string]: unknown;
}

interface InheritedCallableMembers {
  inheritedCallableLabel: string;
}
interface InheritedConstructableMembers {
  inheritedConstructableKind: string;
}
interface InheritedIndexMembers {
  [key: string]: unknown;
}
interface InheritedNamedCallable extends InheritedCallableMembers {
  (value: number): string;
}
interface InheritedNamedConstructable extends InheritedConstructableMembers {
  new (value: number): { value: number };
}
interface InheritedIndexedCallable extends InheritedIndexMembers {
  (value: number): string;
}
interface InheritedIndexedConstructable extends InheritedIndexMembers {
  new (value: number): { value: number };
}

export const directCallableInterface = (input: unknown): boolean => typia.is<CallableInterface>(input);
export const factoryCallableInterface = typia.createIs<CallableInterface>();
export const directConstructableInterface = (input: unknown): boolean => typia.is<ConstructableInterface>(input);
export const factoryConstructableInterface = typia.createIs<ConstructableInterface>();

export const directCallableAlias = (input: unknown): boolean => typia.is<CallableAlias>(input);
export const factoryCallableAlias = typia.createIs<CallableAlias>();
export const directConstructableAlias = (input: unknown): boolean => typia.is<ConstructableAlias>(input);
export const factoryConstructableAlias = typia.createIs<ConstructableAlias>();

export const directInterfaceHolder = (input: unknown): boolean => typia.is<InterfaceHolder>(input);
export const factoryInterfaceHolder = typia.createIs<InterfaceHolder>();
export const directAliasHolder = (input: unknown): boolean => typia.is<AliasHolder>(input);
export const factoryAliasHolder = typia.createIs<AliasHolder>();

export const directHybridCallable = (input: unknown): boolean => typia.is<HybridCallable>(input);
export const factoryHybridCallable = typia.createIs<HybridCallable>();
export const directHybridConstructable = (input: unknown): boolean => typia.is<HybridConstructable>(input);
export const factoryHybridConstructable = typia.createIs<HybridConstructable>();

export const directIndexedCallable = (input: unknown): boolean => typia.is<IndexedCallable>(input);
export const factoryIndexedCallable = typia.createIs<IndexedCallable>();
export const directIndexedConstructable = (input: unknown): boolean => typia.is<IndexedConstructable>(input);
export const factoryIndexedConstructable = typia.createIs<IndexedConstructable>();

export const directInheritedNamedCallable = (input: unknown): boolean => typia.is<InheritedNamedCallable>(input);
export const factoryInheritedNamedCallable = typia.createIs<InheritedNamedCallable>();
export const directInheritedNamedConstructable = (input: unknown): boolean => typia.is<InheritedNamedConstructable>(input);
export const factoryInheritedNamedConstructable = typia.createIs<InheritedNamedConstructable>();
export const directInheritedIndexedCallable = (input: unknown): boolean => typia.is<InheritedIndexedCallable>(input);
export const factoryInheritedIndexedCallable = typia.createIs<InheritedIndexedCallable>();
export const directInheritedIndexedConstructable = (input: unknown): boolean => typia.is<InheritedIndexedConstructable>(input);
export const factoryInheritedIndexedConstructable = typia.createIs<InheritedIndexedConstructable>();

export const directGlobalFunction = (input: unknown): boolean => typia.is<Function>(input);
export const factoryGlobalFunction = typia.createIs<Function>();
export const directGlobalFunctionHolder = (input: unknown): boolean => typia.is<{ fn: Function }>(input);
export const factoryGlobalFunctionHolder = typia.createIs<{ fn: Function }>();
`

const callableInterfaceFunctionSemanticsRuntimeRunner = `const defaults = require("./default.cjs");
const functional = require("./functional.cjs");

let ran = 0;
const failures = [];
const eq = (name, actual, expected) => {
  ran += 1;
  if (actual !== expected) {
    failures.push(name + ": expected " + expected + " but got " + actual);
  }
};

const callable = (value) => String(value);
class Constructable {
  constructor(value) {
    this.value = value;
  }
}
const holder = { callable, constructable: Constructable };
const placeholders = { callable: {}, constructable: {} };

const topLevelRows = [
  ["directCallableInterface", callable, {}],
  ["factoryCallableInterface", callable, {}],
  ["directConstructableInterface", Constructable, {}],
  ["factoryConstructableInterface", Constructable, {}],
  ["directCallableAlias", callable, {}],
  ["factoryCallableAlias", callable, {}],
  ["directConstructableAlias", Constructable, {}],
  ["factoryConstructableAlias", Constructable, {}],
];
for (const [name, real, placeholder] of topLevelRows) {
  eq("default " + name + " real", defaults[name](real), true);
  eq("default " + name + " placeholder", defaults[name](placeholder), true);
  eq("functional " + name + " real", functional[name](real), true);
  eq("functional " + name + " placeholder", functional[name](placeholder), false);
}

for (const name of [
  "directInterfaceHolder",
  "factoryInterfaceHolder",
  "directAliasHolder",
  "factoryAliasHolder",
]) {
  eq("default " + name + " real", defaults[name](holder), true);
  eq("default " + name + " placeholders", defaults[name](placeholders), true);
  eq("functional " + name + " real", functional[name](holder), true);
  eq("functional " + name + " placeholders", functional[name](placeholders), false);
}

// Hybrid interfaces stay outside the pure-function classification. A real
// function or constructor missing the declared data member and a plain object
// carrying only that member are both incomplete values. Keeping both negative
// twins prevents a signature-based fix from erasing the member or the callable
// side of the TypeScript shape.
for (const mod of [defaults, functional]) {
  for (const name of ["directHybridCallable", "factoryHybridCallable"]) {
    eq(name + " callable missing data member", mod[name](callable), false);
    eq(name + " data member without callability", mod[name]({ label: "kept" }), false);
  }
  for (const name of ["directHybridConstructable", "factoryHybridConstructable"]) {
    eq(name + " constructor missing data member", mod[name](Constructable), false);
    eq(name + " data member without constructability", mod[name]({ kind: "kept" }), false);
  }
}

// Index signatures are an independent hybrid boundary, and both named and
// indexed boundaries can arrive through interface inheritance. These valid
// function/class values intentionally omit the full hybrid shape, so existing
// structural handling rejects them. If either boundary is erased and the type
// is over-classified as a pure function, default mode skips it and functional
// mode accepts its typeof-function value.
const hybridBoundaryRows = [
  ["directIndexedCallable", callable],
  ["factoryIndexedCallable", callable],
  ["directIndexedConstructable", Constructable],
  ["factoryIndexedConstructable", Constructable],
  ["directInheritedNamedCallable", callable],
  ["factoryInheritedNamedCallable", callable],
  ["directInheritedNamedConstructable", Constructable],
  ["factoryInheritedNamedConstructable", Constructable],
  ["directInheritedIndexedCallable", callable],
  ["factoryInheritedIndexedCallable", callable],
  ["directInheritedIndexedConstructable", Constructable],
  ["factoryInheritedIndexedConstructable", Constructable],
];
for (const [mode, mod] of [["default", defaults], ["functional", functional]]) {
  for (const [name, value] of hybridBoundaryRows) {
    eq(mode + " " + name + " incomplete hybrid", mod[name](value), false);
  }
}

// The existing global Function path remains the positive interface control.
for (const name of ["directGlobalFunction", "factoryGlobalFunction"]) {
  eq("default " + name + " real", defaults[name](callable), true);
  eq("default " + name + " placeholder", defaults[name]({}), true);
  eq("functional " + name + " real", functional[name](callable), true);
  eq("functional " + name + " placeholder", functional[name]({}), false);
}
for (const name of ["directGlobalFunctionHolder", "factoryGlobalFunctionHolder"]) {
  eq("default " + name + " real", defaults[name]({ fn: callable }), true);
  eq("default " + name + " placeholder", defaults[name]({ fn: {} }), true);
  eq("functional " + name + " real", functional[name]({ fn: callable }), true);
  eq("functional " + name + " placeholder", functional[name]({ fn: {} }), false);
}

console.log("RAN " + ran + " CASES");
if (failures.length !== 0) {
  throw new Error("MISMATCHES:\n" + failures.join("\n"));
}
`
