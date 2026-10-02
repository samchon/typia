import typia from "typia";

const isPair = typia.createIs<[string, number?]>();
const equalsPair = typia.compare.createEquals<[string, number?]>();
const clonePair = typia.plain.createClone<[string, number?]>();
const classifyPair = typia.plain.createClassify<[string, number?]>();

const isTriple = typia.createIs<[string, number?, boolean?]>();
const equalsTriple = typia.compare.createEquals<[string, number?, boolean?]>();
const cloneTriple = typia.plain.createClone<[string, number?, boolean?]>();
const classifyTriple =
  typia.plain.createClassify<[string, number?, boolean?]>();

// boundary: a tuple whose only element is optional.
const equalsSolo = typia.compare.createEquals<[value?: number]>();
const cloneSolo = typia.plain.createClone<[value?: number]>();

// boundary: an optional trailing element that is itself a nested tuple.
const equalsNested = typia.compare.createEquals<[string, [number, boolean]?]>();
const cloneNested = typia.plain.createClone<[string, [number, boolean]?]>();

// control: a fully-required tuple must stay byte-identical.
const equalsFixed = typia.compare.createEquals<[string, number]>();
const cloneFixed = typia.plain.createClone<[string, number]>();

// control: a rest tuple must stay byte-identical.
const equalsRest = typia.compare.createEquals<[string, ...number[]]>();
const cloneRest = typia.plain.createClone<[string, ...number[]]>();
const fixture = {
  isPair,
  equalsPair,
  clonePair,
  classifyPair,
  isTriple,
  equalsTriple,
  cloneTriple,
  classifyTriple,
  equalsSolo,
  cloneSolo,
  equalsNested,
  cloneNested,
  equalsFixed,
  cloneFixed,
  equalsRest,
  cloneRest,
};

/**
 * Verifies tuple optional compare clone in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * tupleOptionalCompareCloneSource declarations; the former
 * tupleOptionalCompareCloneRuntimeRunner observations execute in the existing
 * automated worker. This detects a generated program whose output compiles but
 * changes these runtime decisions: is pair omitted; is pair present; is pair
 * too long; is triple omitted; equals pair omitted reflexive; equals pair
 * omitted vs present.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from tupleOptionalCompareCloneRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations TypeScript optional trailing elements permit omitted lengths without creating own undefined slots. Authored omitted/present/unequal tuples determine comparison, clone length/ownership and nested contents; required/rest controls retain their independent normal behavior.
 * @evidence contracts/testing.md#distinguishing-cases Preserves is pair omitted; is pair present; is pair too long; is triple omitted; equals pair omitted reflexive; equals pair omitted vs present; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_tuple_optional_compare_clone in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed tupleOptionalCompareCloneSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/tuple_optional_compare_clone_transform_test.go tupleOptionalCompareCloneRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_tuple_optional_compare_clone = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const expect: any = (label: any, actual: any, expected: any): any => {
    if (actual !== expected) {
      throw new Error(label + ": expected " + expected + ", got " + actual);
    }
  };

  // A clone must be a distinct array, deep-equal to expected, with no phantom
  // trailing slot (length matches, and the first out-of-range index is absent).
  const expectClone: any = (label: any, result: any, expected: any): any => {
    if (!Array.isArray(result)) throw new Error(label + ": not an array");
    if (result.length !== expected.length)
      throw new Error(
        label + ": length " + result.length + " !== " + expected.length,
      );
    if (expected.length in result)
      throw new Error(label + ": phantom slot at index " + expected.length);
    for (let i: any = 0; i < expected.length; ++i)
      if (result[i] !== expected[i])
        throw new Error(
          label + ": [" + i + "] " + result[i] + " !== " + expected[i],
        );
  };

  // --- is: the reference range semantics (unchanged) ---
  expect("is pair omitted", mod.isPair(["a"]), true);
  expect("is pair present", mod.isPair(["a", 1]), true);
  expect("is pair too long", mod.isPair(["a", 1, 2]), false);
  expect("is triple omitted", mod.isTriple(["a"]), true);

  // --- equals: reflexive over omitted optional; matches is ---
  expect("equals pair omitted reflexive", mod.equalsPair(["a"], ["a"]), true);
  expect(
    "equals pair omitted vs present",
    mod.equalsPair(["a"], ["a", 1]),
    false,
  );
  expect(
    "equals pair present reflexive",
    mod.equalsPair(["a", 1], ["a", 1]),
    true,
  );
  expect(
    "equals pair present differ",
    mod.equalsPair(["a", 1], ["a", 2]),
    false,
  );
  expect(
    "equals triple omitted reflexive",
    mod.equalsTriple(["a"], ["a"]),
    true,
  );
  expect(
    "equals triple mid present reflexive",
    mod.equalsTriple(["a", 1], ["a", 1]),
    true,
  );
  expect(
    "equals triple full reflexive",
    mod.equalsTriple(["a", 1, true], ["a", 1, true]),
    true,
  );
  expect(
    "equals triple omitted vs present",
    mod.equalsTriple(["a"], ["a", 1]),
    false,
  );

  // --- clone: correct length, no phantom undefined ---
  expectClone("clone pair omitted", mod.clonePair(["a"]), ["a"]);
  expectClone("clone pair present", mod.clonePair(["a", 1]), ["a", 1]);
  expectClone("clone triple omitted", mod.cloneTriple(["a"]), ["a"]);
  expectClone("clone triple mid present", mod.cloneTriple(["a", 1]), ["a", 1]);
  expectClone("clone triple full", mod.cloneTriple(["a", 1, true]), [
    "a",
    1,
    true,
  ]);

  // --- classify: same tuple-inline path as clone ---
  expectClone("classify pair omitted", mod.classifyPair(["a"]), ["a"]);
  expectClone("classify triple omitted", mod.classifyTriple(["a"]), ["a"]);

  // --- equals(x, clone(x)) holds for every is-valid x ---
  for (const x of [["a"], ["a", 1]]) {
    if (mod.isPair(x))
      expect(
        "equals pair (x, clone x) " + JSON.stringify(x),
        mod.equalsPair(x, mod.clonePair(x)),
        true,
      );
  }
  for (const x of [["a"], ["a", 1], ["a", 1, true]]) {
    if (mod.isTriple(x))
      expect(
        "equals triple (x, clone x) " + JSON.stringify(x),
        mod.equalsTriple(x, mod.cloneTriple(x)),
        true,
      );
  }

  // --- boundary: only-optional tuple ---
  expect("equals solo empty reflexive", mod.equalsSolo([], []), true);
  expect("equals solo empty vs present", mod.equalsSolo([], [1]), false);
  expect("equals solo present reflexive", mod.equalsSolo([1], [1]), true);
  expectClone("clone solo empty", mod.cloneSolo([]), []);
  expectClone("clone solo present", mod.cloneSolo([1]), [1]);

  // --- boundary: nested tuple as the optional trailing element ---
  expect(
    "equals nested omitted reflexive",
    mod.equalsNested(["a"], ["a"]),
    true,
  );
  expect(
    "equals nested present reflexive",
    mod.equalsNested(["a", [1, true]], ["a", [1, true]]),
    true,
  );
  expect(
    "equals nested omitted vs present",
    mod.equalsNested(["a"], ["a", [1, true]]),
    false,
  );
  expectClone("clone nested omitted", mod.cloneNested(["a"]), ["a"]);
  {
    const nested: any = mod.cloneNested(["a", [1, true]]);
    if (nested.length !== 2)
      throw new Error("clone nested present: outer length " + nested.length);
    if (1 in nested === false)
      throw new Error("clone nested present: missing inner tuple");
    expectClone("clone nested inner", nested[1], [1, true]);
  }

  // --- controls: fully-required and rest tuples unchanged ---
  expect("equals fixed reflexive", mod.equalsFixed(["a", 1], ["a", 1]), true);
  expect("equals fixed differ", mod.equalsFixed(["a", 1], ["a", 2]), false);
  expectClone("clone fixed", mod.cloneFixed(["a", 1]), ["a", 1]);

  expect("equals rest solo", mod.equalsRest(["a"], ["a"]), true);
  expect("equals rest multi", mod.equalsRest(["a", 1, 2], ["a", 1, 2]), true);
  expect(
    "equals rest length differ",
    mod.equalsRest(["a", 1], ["a", 1, 2]),
    false,
  );
  expectClone("clone rest solo", mod.cloneRest(["a"]), ["a"]);
  expectClone("clone rest multi", mod.cloneRest(["a", 1, 2]), ["a", 1, 2]);
};
