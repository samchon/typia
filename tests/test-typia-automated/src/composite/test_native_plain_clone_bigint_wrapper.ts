import typia from "typia";

interface BoxedRecord {
  big_value: BigInt;
}

const cloneInterface = typia.plain.createClone<BigInt>();
const cloneUnion = typia.plain.createClone<bigint | BigInt>();
const assertCloneInterface = typia.plain.createAssertClone<BigInt>();
const camelRecord = typia.notations.createCamel<BoxedRecord>();
const fixture = {
  cloneInterface,
  cloneUnion,
  assertCloneInterface,
  camelRecord,
};

/**
 * Verifies plain clone bigint wrapper in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * plainCloneBigIntWrapperSource declarations; the former
 * plainCloneBigIntWrapperRuntimeRunner observations execute in the existing
 * automated worker. This detects a generated program whose output compiles but
 * changes these runtime decisions: the literal runtime assertions below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from plainCloneBigIntWrapperRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations Boxed and primitive bigint inputs must clone to primitive bigint with exact authored values 1n and 2n. This detects accidental numeric coercion or preservation of a boxed output; it does not require retaining the wrapper prototype.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_plain_clone_bigint_wrapper in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed plainCloneBigIntWrapperSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/plain_clone_bigint_wrapper_transform_test.go plainCloneBigIntWrapperRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_plain_clone_bigint_wrapper = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const boxed: any = Object(1n);
  const expectPrimitive: any = (name: any, value: any, expected: any): any => {
    if (typeof value !== "bigint" || value !== expected) {
      throw new Error(
        name +
          " should produce primitive " +
          expected +
          "n, got " +
          String(value) +
          " (" +
          typeof value +
          ")",
      );
    }
  };

  expectPrimitive("cloneInterface(1n)", mod.cloneInterface(1n), 1n);
  expectPrimitive("cloneInterface(Object(1n))", mod.cloneInterface(boxed), 1n);
  expectPrimitive("cloneUnion(1n)", mod.cloneUnion(1n), 1n);
  expectPrimitive("cloneUnion(Object(1n))", mod.cloneUnion(boxed), 1n);
  expectPrimitive("assertCloneInterface(1n)", mod.assertCloneInterface(1n), 1n);
  expectPrimitive(
    "assertCloneInterface(Object(1n))",
    mod.assertCloneInterface(boxed),
    1n,
  );

  expectPrimitive(
    "camelRecord({big_value: Object(2n)}).bigValue",
    mod.camelRecord({ big_value: Object(2n) }).bigValue,
    2n,
  );
  expectPrimitive(
    "camelRecord({big_value: 3n}).bigValue",
    mod.camelRecord({ big_value: 3n }).bigValue,
    3n,
  );
};
