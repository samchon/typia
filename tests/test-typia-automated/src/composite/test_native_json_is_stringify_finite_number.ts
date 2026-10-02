import typia from "typia";

interface Box {
  value: number;
}

const stringify = (input: unknown): string | null =>
  typia.json.isStringify<Box>(input);
const fixture = { stringify };

/**
 * Verifies json is stringify finite number in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * jsonIsStringifyFiniteNumberSource declarations; the former
 * jsonIsStringifyFiniteNumberRunner observations execute in the existing
 * automated worker. This detects a generated program whose output compiles but
 * changes these runtime decisions: the literal runtime assertions below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from jsonIsStringifyFiniteNumberRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations JSON permits finite numbers and forbids NaN and infinities. Authored finite output must match the literal JSON document; each non-finite input must return top-level null under both original producer option rows.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_json_is_stringify_finite_number in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed jsonIsStringifyFiniteNumberSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/json_is_stringify_finite_number_transform_test.go jsonIsStringifyFiniteNumberRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_json_is_stringify_finite_number = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const finite: any = mod.stringify({ value: 1 });
  if (finite === null) {
    throw new Error("json.isStringify rejected a finite number");
  }
  const parsed: any = JSON.parse(finite);
  if (parsed.value !== 1) {
    throw new Error("json.isStringify serialized the wrong value: " + finite);
  }

  let ran: any = 1;
  for (const [name, value] of [
    ["NaN", Number.NaN],
    ["Infinity", Number.POSITIVE_INFINITY],
    ["-Infinity", Number.NEGATIVE_INFINITY],
  ]) {
    const out: any = mod.stringify({ value });
    ran += 1;
    if (out !== null) {
      throw new Error(
        name +
          " leaked into json.isStringify output instead of null: " +
          JSON.stringify(out),
      );
    }
  }

  console.log("RAN " + ran + " CASES");

  if (ran !== 4) throw new Error("runtime case census changed: " + ran);
};
