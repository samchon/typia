package main

import (
  "fmt"
  "strings"
  "testing"
)

// TestCallableInterfaceFunctionSemanticsTransform verifies structural fields on callable interface emissions.
//
// A callable interface may carry required data members; function membership alone cannot erase those declared constraints, regardless of functional option.
//
// 1. Functional true and false emissions retain the same data-member obligations while the fixture compares callable and neighboring member-bearing shapes.
// 2. Both option modes must retain each authored data-property reference in the generated callable-interface validators.
//
// @evidence contracts/testing.md#behavioral-verification Both option modes must retain each authored data-property reference in the generated callable-interface validators.
// @evidence contracts/testing.md#independent-expectations A callable interface may carry required data members; function membership alone cannot erase those declared constraints, regardless of functional option.
// @evidence contracts/testing.md#distinguishing-cases Functional true and false emissions retain the same data-member obligations while the fixture compares callable and neighboring member-bearing shapes.
// @evidence contracts/testing.md#execution-ownership The native Go runner discovers TestCallableInterfaceFunctionSemanticsTransform as a unit test. The fixture and captured Go operation execute in process; helper assertions retain the same source inputs and failure identity without launching a compiler or JavaScript subprocess.
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
