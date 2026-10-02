import typia from "typia";

const validate = typia.createValidate<[string, ...number[]]>();
const fixture = { validate };

/**
 * Verifies non trailing rest tuple in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original nonTrailingRestSource
 * declarations; the former nonTrailingRestRuntimeRunner observations execute in
 * the existing automated worker. This detects a generated program whose output
 * compiles but changes these runtime decisions: solo head; head + numbers;
 * empty; wrong head; wrong rest element.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from nonTrailingRestRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations The source declares a required leading string followed by any number of numbers, so the runner's empty/wrong-head/wrong-rest inputs reject and valid lengths accept. Leading/middle-rest rejection remains separately owned by the original Go compiler units.
 * @evidence contracts/testing.md#distinguishing-cases Preserves solo head; head + numbers; empty; wrong head; wrong rest element; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_non_trailing_rest_tuple in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed nonTrailingRestSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/non_trailing_rest_tuple_transform_test.go nonTrailingRestRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_non_trailing_rest_tuple = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const expect: any = (label: any, result: any, success: any): any => {
    if (result.success !== success) {
      throw new Error(
        label +
          " expected success=" +
          success +
          ": " +
          JSON.stringify(result.errors),
      );
    }
  };

  expect("solo head", mod.validate(["head"]), true);
  expect("head + numbers", mod.validate(["head", 1, 2, 3]), true);
  expect("empty", mod.validate([]), false);
  expect("wrong head", mod.validate([1, 2]), false);
  expect("wrong rest element", mod.validate(["head", 1, "x"]), false);
};
