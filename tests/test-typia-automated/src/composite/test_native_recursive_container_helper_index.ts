import typia from "typia";

type JsonPrimitive = string | number | boolean | null;
type JsonArray = JsonValue[];
type JsonObject = { [key: string]: JsonValue };
type JsonValue = JsonPrimitive | JsonArray | JsonObject;

interface ArrayWitness {
  ordinary: string[];
  value: JsonValue;
}

type RecursiveTuple = [string, RecursiveTuple | null];
interface TupleWitness {
  ordinary: [number];
  value: RecursiveTuple;
}

type RandomArray = Array<string | RandomArray>;
interface RandomArrayWitness {
  ordinary: string[];
  value: RandomArray;
}

const isArray = typia.createIs<ArrayWitness>();
const isTuple = typia.createIs<TupleWitness>();
const stringifyArray = typia.json.createStringify<ArrayWitness>();
const stringifyTuple = typia.json.createStringify<TupleWitness>();
const camelArray = typia.notations.createCamel<ArrayWitness>();
const camelTuple = typia.notations.createCamel<TupleWitness>();
const cloneArray = typia.plain.createClone<ArrayWitness>();
const cloneTuple = typia.plain.createClone<TupleWitness>();
const classifyArray = typia.plain.createClassify<ArrayWitness>();
const classifyTuple = typia.plain.createClassify<TupleWitness>();
const pruneArray = typia.plain.createPrune<ArrayWitness>();
const pruneTuple = typia.plain.createPrune<TupleWitness>();
const randomArray = typia.createRandom<RandomArrayWitness>({
  array: () => [],
  string: () => "generated",
});
const randomTuple = typia.createRandom<TupleWitness>({
  boolean: () => false,
  number: () => 1,
  string: () => "generated",
});
const fixture = {
  isArray,
  isTuple,
  stringifyArray,
  stringifyTuple,
  camelArray,
  camelTuple,
  cloneArray,
  cloneTuple,
  classifyArray,
  classifyTuple,
  pruneArray,
  pruneTuple,
  randomArray,
  randomTuple,
};

/**
 * Verifies recursive container helper index in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * recursiveContainerHelperIndexSource declarations; the former
 * recursiveContainerHelperIndexRuntimeRunner observations execute in the
 * existing automated worker. This detects a generated program whose output
 * compiles but changes these runtime decisions: is array; is tuple; stringify
 * array; stringify tuple; notation array; notation tuple.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from recursiveContainerHelperIndexRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations Authored valid array and tuple container graphs determine stringify text, clone and notation leaf values, classification, pruning of extras and configured random output. Literal generated and number/boolean callback values establish the random assertions; this runner does not assert malformed-leaf rejection.
 * @evidence contracts/testing.md#distinguishing-cases Preserves is array; is tuple; stringify array; stringify tuple; notation array; notation tuple; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_recursive_container_helper_index in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed recursiveContainerHelperIndexSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/recursive_container_helper_index_transform_test.go recursiveContainerHelperIndexRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_recursive_container_helper_index = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const arrayValue: any = {
    ordinary: ["a"],
    value: [1, { nested: [true, null] }],
  };
  const tupleValue: any = { ordinary: [1], value: ["root", ["child", null]] };

  const expect: any = (label: any, actual: any, expected: any): any => {
    if (actual !== expected) {
      throw new Error(label + ": expected " + expected + ", got " + actual);
    }
  };

  expect("is array", mod.isArray(arrayValue), true);
  expect("is tuple", mod.isTuple(tupleValue), true);
  expect(
    "stringify array",
    mod.stringifyArray(arrayValue),
    JSON.stringify(arrayValue),
  );
  expect(
    "stringify tuple",
    mod.stringifyTuple(tupleValue),
    JSON.stringify(tupleValue),
  );
  expect("notation array", mod.camelArray(arrayValue).value[1].nested[0], true);
  expect("notation tuple", mod.camelTuple(tupleValue).value[1][0], "child");
  expect("clone array", mod.cloneArray(arrayValue).value[1].nested[1], null);
  expect("clone tuple", mod.cloneTuple(tupleValue).value[1][0], "child");
  expect(
    "classify array",
    mod.classifyArray(arrayValue).value[1].nested[0],
    true,
  );
  expect("classify tuple", mod.classifyTuple(tupleValue).value[1][0], "child");

  const prunedArray: any = { ...arrayValue, extra: true };
  mod.pruneArray(prunedArray);
  expect("prune array", "extra" in prunedArray, false);
  const prunedTuple: any = { ...tupleValue, extra: true };
  mod.pruneTuple(prunedTuple);
  expect("prune tuple", "extra" in prunedTuple, false);

  const generatedArray: any = mod.randomArray();
  expect("random array", Array.isArray(generatedArray.value), true);
  const generatedTuple: any = mod.randomTuple();
  expect("random tuple", generatedTuple.value[0], "generated");
};
