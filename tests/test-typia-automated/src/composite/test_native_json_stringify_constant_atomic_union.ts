import typia from "typia";

interface SerializedRecord {
  kind: "a" | "b";
  flag: 1 | 2;
  count: number;
  name: string;
}

const stringifyRecord = typia.json.createStringify<SerializedRecord>();
const fixture = { stringifyRecord };

/**
 * Verifies json stringify constant atomic union in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * jsonStringifyConstantAtomicUnionSource declarations; the former
 * jsonStringifyConstantAtomicUnionRuntimeRunner observations execute in the
 * existing automated worker. This detects a generated program whose output
 * compiles but changes these runtime decisions: the literal runtime assertions
 * below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from jsonStringifyConstantAtomicUnionRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations Authored records combine kind and flag constants with ordinary count and name fields; parsed values and property counts must match every input field. Original finite=false additionally requires Infinity count to become JSON null in the default producer profile; finite=true primary execution checks the finite records.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_json_stringify_constant_atomic_union in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed jsonStringifyConstantAtomicUnionSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/json_stringify_constant_atomic_union_transform_test.go jsonStringifyConstantAtomicUnionRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_json_stringify_constant_atomic_union = (
  mode: "default" | "finite" = "finite",
): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const expectEqual: any = (name: any, input: any): any => {
    const text: any = mod.stringifyRecord(input);
    const parsed: any = JSON.parse(text);
    for (const key of Object.keys(input)) {
      if (parsed[key] !== input[key]) {
        throw new Error(name + " mismatched property " + key + ": " + text);
      }
    }
    if (Object.keys(parsed).length !== Object.keys(input).length) {
      throw new Error(name + " emitted unexpected property count: " + text);
    }
  };

  expectEqual("kind=a flag=1", {
    kind: "a",
    flag: 1,
    count: 0.5,
    name: "first",
  });
  expectEqual("kind=b flag=2", {
    kind: "b",
    flag: 2,
    count: -3,
    name: "second",
  });

  if (mode === "default") {
    const infinite: any = JSON.parse(
      mod.stringifyRecord({
        kind: "a",
        flag: 1,
        count: Infinity,
        name: "edge",
      }),
    );
    if (infinite.count !== null) {
      throw new Error(
        "non-finite count should serialize as null: " +
          JSON.stringify(infinite),
      );
    }
  }
};
