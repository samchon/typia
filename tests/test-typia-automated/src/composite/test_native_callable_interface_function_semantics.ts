import typia from "typia";

interface CallableInterface {
  (value: number): string;
}
interface ConstructableInterface {
  new (value: number): {
    value: number;
  };
}
type CallableAlias = (value: number) => string;
type ConstructableAlias = new (value: number) => {
  value: number;
};
type Assert<T extends true> = T;
type Same<X, Y> = [X] extends [Y] ? ([Y] extends [X] ? true : false) : false;
type _CallableSpellingsAreEquivalent = Assert<
  Same<CallableInterface, CallableAlias>
>;
type _ConstructableSpellingsAreEquivalent = Assert<
  Same<ConstructableInterface, ConstructableAlias>
>;
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
  new (value: number): {
    value: number;
  };
  kind: string;
}
interface IndexedCallable {
  (value: number): string;
  [key: string]: unknown;
}
interface IndexedConstructable {
  new (value: number): {
    value: number;
  };
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
  new (value: number): {
    value: number;
  };
}
interface InheritedIndexedCallable extends InheritedIndexMembers {
  (value: number): string;
}
interface InheritedIndexedConstructable extends InheritedIndexMembers {
  new (value: number): {
    value: number;
  };
}
const directCallableInterface = (input: unknown): boolean =>
  typia.is<CallableInterface>(input);
const factoryCallableInterface = typia.createIs<CallableInterface>();
const directConstructableInterface = (input: unknown): boolean =>
  typia.is<ConstructableInterface>(input);
const factoryConstructableInterface = typia.createIs<ConstructableInterface>();
const directCallableAlias = (input: unknown): boolean =>
  typia.is<CallableAlias>(input);
const factoryCallableAlias = typia.createIs<CallableAlias>();
const directConstructableAlias = (input: unknown): boolean =>
  typia.is<ConstructableAlias>(input);
const factoryConstructableAlias = typia.createIs<ConstructableAlias>();
const directInterfaceHolder = (input: unknown): boolean =>
  typia.is<InterfaceHolder>(input);
const factoryInterfaceHolder = typia.createIs<InterfaceHolder>();
const directAliasHolder = (input: unknown): boolean =>
  typia.is<AliasHolder>(input);
const factoryAliasHolder = typia.createIs<AliasHolder>();
const directHybridCallable = (input: unknown): boolean =>
  typia.is<HybridCallable>(input);
const factoryHybridCallable = typia.createIs<HybridCallable>();
const directHybridConstructable = (input: unknown): boolean =>
  typia.is<HybridConstructable>(input);
const factoryHybridConstructable = typia.createIs<HybridConstructable>();
const directIndexedCallable = (input: unknown): boolean =>
  typia.is<IndexedCallable>(input);
const factoryIndexedCallable = typia.createIs<IndexedCallable>();
const directIndexedConstructable = (input: unknown): boolean =>
  typia.is<IndexedConstructable>(input);
const factoryIndexedConstructable = typia.createIs<IndexedConstructable>();
const directInheritedNamedCallable = (input: unknown): boolean =>
  typia.is<InheritedNamedCallable>(input);
const factoryInheritedNamedCallable = typia.createIs<InheritedNamedCallable>();
const directInheritedNamedConstructable = (input: unknown): boolean =>
  typia.is<InheritedNamedConstructable>(input);
const factoryInheritedNamedConstructable =
  typia.createIs<InheritedNamedConstructable>();
const directInheritedIndexedCallable = (input: unknown): boolean =>
  typia.is<InheritedIndexedCallable>(input);
const factoryInheritedIndexedCallable =
  typia.createIs<InheritedIndexedCallable>();
const directInheritedIndexedConstructable = (input: unknown): boolean =>
  typia.is<InheritedIndexedConstructable>(input);
const factoryInheritedIndexedConstructable =
  typia.createIs<InheritedIndexedConstructable>();
const directGlobalFunction = (input: unknown): boolean =>
  typia.is<Function>(input);
const factoryGlobalFunction = typia.createIs<Function>();
const directGlobalFunctionHolder = (input: unknown): boolean =>
  typia.is<{
    fn: Function;
  }>(input);
const factoryGlobalFunctionHolder = typia.createIs<{
  fn: Function;
}>();
// Keep every original compile-time equivalence assertion checked in this consumer project.
void (null as unknown as [
  _CallableSpellingsAreEquivalent,
  _ConstructableSpellingsAreEquivalent,
]);
/**
 * Verifies callable interfaces and aliases preserve pure and hybrid boundaries.
 *
 * Runs the real native callbacks so correct emitted text cannot hide a runtime
 * routing, receiver, copy or comparison defect.
 *
 * 1. Produce the same typed public callbacks as the original regression.
 * 2. Execute its authored inputs and independent result assertions.
 * 3. Propagate every failed comparison to the shared suite runner.
 *
 * @evidence contracts/testing.md#behavioral-verification Pure call/construct signatures, nested holders, inherited named/indexed hybrid members and global Function controls retain real-function and object-placeholder expectations.
 * @evidence contracts/testing.md#independent-expectations The retained literal expectations encode the authored type/value contract, not emitted-source patterns. Type-level equality assertions, where present, remain compiled independently of runtime comparisons.
 * @evidence contracts/testing.md#distinguishing-cases Pure call/construct signatures, nested holders, inherited named/indexed hybrid members and global Function controls retain real-function and object-placeholder expectations. Each invocation checks one actual transform option. The ordinary suite invokes functional mode; the separate default-option batch must invoke default mode against a project transformed with functional disabled. Both option executions are required to establish preserved coverage.
 * @evidence contracts/testing.md#execution-ownership The matching exported composite is discovered by TestServant in test-typia-automated. Private typed producers and deliberately unchecked JavaScript-style runtime inputs preserve the original test boundary.
 * @evidence contracts/e2e.md#necessary-boundary Real typia public calls are transformed and their callbacks execute in Node. Go unit assertions on metadata or emitted text cannot detect a runtime result, receiver or mutation defect.
 * @evidence contracts/e2e.md#shared-execution This case reuses the suite's generated project and shared worker with other native composites; it starts no compiler project, subprocess or artifact installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Each invocation constructs its own sample inputs and observations. Cases that mutate arrays, objects or recursive graphs retain those values within that invocation, and do not cache verdicts. The suite owns and closes the worker.
 * @evidence contracts/e2e.md#preserved-coverage The original typed fixture, public call forms and runtime input/assertion population are retained here. Each invocation checks one actual transform option. The ordinary suite invokes functional mode; the separate default-option batch must invoke default mode against a project transformed with functional disabled. Both option executions are required to establish preserved coverage. Execution is verified by the canonical suite run, not this comment.
 */
export const test_native_callable_interface_function_semantics = (
  mode: "default" | "functional" = "functional",
): void => {
  const mod: Record<string, any> = {
    directCallableInterface,
    factoryCallableInterface,
    directConstructableInterface,
    factoryConstructableInterface,
    directCallableAlias,
    factoryCallableAlias,
    directConstructableAlias,
    factoryConstructableAlias,
    directInterfaceHolder,
    factoryInterfaceHolder,
    directAliasHolder,
    factoryAliasHolder,
    directHybridCallable,
    factoryHybridCallable,
    directHybridConstructable,
    factoryHybridConstructable,
    directIndexedCallable,
    factoryIndexedCallable,
    directIndexedConstructable,
    factoryIndexedConstructable,
    directInheritedNamedCallable,
    factoryInheritedNamedCallable,
    directInheritedNamedConstructable,
    factoryInheritedNamedConstructable,
    directInheritedIndexedCallable,
    factoryInheritedIndexedCallable,
    directInheritedIndexedConstructable,
    factoryInheritedIndexedConstructable,
    directGlobalFunction,
    factoryGlobalFunction,
    directGlobalFunctionHolder,
    factoryGlobalFunctionHolder,
  };
  const selectedMode = mode;
  const selected = mod;
  const defaults = mod;
  const functional = mod;
  let ran = 0;
  const failures: string[] = [];
  const eq = (name: string, actual: unknown, expected: unknown) => {
    ran += 1;
    if (actual !== expected) {
      failures.push(name + ": expected " + expected + " but got " + actual);
    }
  };
  const callable = (value: any) => String(value);
  class Constructable {
    constructor(public value: any) {
      this.value = value;
    }
  }
  const holder = { callable, constructable: Constructable };
  const placeholders: any = { callable: {}, constructable: {} };
  const topLevelRows: any = [
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
    if (selectedMode === "default")
      eq("default " + name + " real", defaults[name](real), true);
    if (selectedMode === "default")
      eq("default " + name + " placeholder", defaults[name](placeholder), true);
    if (selectedMode === "functional")
      eq("functional " + name + " real", functional[name](real), true);
    if (selectedMode === "functional")
      eq(
        "functional " + name + " placeholder",
        functional[name](placeholder),
        false,
      );
  }
  for (const name of [
    "directInterfaceHolder",
    "factoryInterfaceHolder",
    "directAliasHolder",
    "factoryAliasHolder",
  ]) {
    if (selectedMode === "default")
      eq("default " + name + " real", defaults[name](holder), true);
    if (selectedMode === "default")
      eq(
        "default " + name + " placeholders",
        defaults[name](placeholders),
        true,
      );
    if (selectedMode === "functional")
      eq("functional " + name + " real", functional[name](holder), true);
    if (selectedMode === "functional")
      eq(
        "functional " + name + " placeholders",
        functional[name](placeholders),
        false,
      );
  }
  // Hybrid interfaces stay outside the pure-function classification. A real
  // function or constructor missing the declared data member and a plain object
  // carrying only that member are both incomplete values. Keeping both negative
  // twins prevents a signature-based fix from erasing the member or the callable
  // side of the TypeScript shape.
  for (const mod of [selected]) {
    for (const name of ["directHybridCallable", "factoryHybridCallable"]) {
      eq(name + " callable missing data member", mod[name](callable), false);
      eq(
        name + " data member without callability",
        mod[name]({ label: "kept" }),
        false,
      );
    }
    for (const name of [
      "directHybridConstructable",
      "factoryHybridConstructable",
    ]) {
      eq(
        name + " constructor missing data member",
        mod[name](Constructable),
        false,
      );
      eq(
        name + " data member without constructability",
        mod[name]({ kind: "kept" }),
        false,
      );
    }
  }
  // Index signatures are an independent hybrid boundary, and both named and
  // indexed boundaries can arrive through interface inheritance. These valid
  // function/class values intentionally omit the full hybrid shape, so existing
  // structural handling rejects them. If either boundary is erased and the type
  // is over-classified as a pure function, default mode skips it and functional
  // mode accepts its typeof-function value.
  const hybridBoundaryRows: any = [
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
  for (const [mode, mod] of [[selectedMode, selected]] as [string, any][]) {
    for (const [name, value] of hybridBoundaryRows) {
      eq(mode + " " + name + " incomplete hybrid", mod[name](value), false);
    }
  }
  // The existing global Function path remains the positive interface control.
  for (const name of ["directGlobalFunction", "factoryGlobalFunction"]) {
    if (selectedMode === "default")
      eq("default " + name + " real", defaults[name](callable), true);
    if (selectedMode === "default")
      eq("default " + name + " placeholder", defaults[name]({}), true);
    if (selectedMode === "functional")
      eq("functional " + name + " real", functional[name](callable), true);
    if (selectedMode === "functional")
      eq("functional " + name + " placeholder", functional[name]({}), false);
  }
  for (const name of [
    "directGlobalFunctionHolder",
    "factoryGlobalFunctionHolder",
  ]) {
    if (selectedMode === "default")
      eq("default " + name + " real", defaults[name]({ fn: callable }), true);
    if (selectedMode === "default")
      eq("default " + name + " placeholder", defaults[name]({ fn: {} }), true);
    if (selectedMode === "functional")
      eq(
        "functional " + name + " real",
        functional[name]({ fn: callable }),
        true,
      );
    if (selectedMode === "functional")
      eq(
        "functional " + name + " placeholder",
        functional[name]({ fn: {} }),
        false,
      );
  }
  if (failures.length !== 0) {
    throw new Error("MISMATCHES:\n" + failures.join("\n"));
  }
  if (ran !== 52)
    throw new Error(
      "callable interface matrix ran " + ran + " instead of 52 observations",
    );
};
