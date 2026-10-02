import typia from "typia";

type NumericRecord = Record<string, number>;

const assertRecord = typia.createAssert<NumericRecord>();
const assertGuardRecord = typia.createAssertGuard<NumericRecord>();
const validateRecord = typia.createValidate<NumericRecord>();

const capture = (
  task: () => void,
): null | { path?: string; expected?: string } => {
  try {
    task();
    return null;
  } catch (error) {
    return error as { path?: string; expected?: string };
  }
};

const run = () => ({
  assertIdentifier: capture(() =>
    assertRecord({ validKey: "not-number" as any }),
  ),
  assertQuoted: capture(() => assertRecord({ "bad-key": "not-number" as any })),
  guardQuoted: capture(() =>
    assertGuardRecord({ "bad-key": "not-number" as any }),
  ),
  validateQuoted: validateRecord({ "bad-key": "not-number" as any }),
});
const fixture = { run };

/**
 * Verifies dynamic key path helper alias in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * dynamicKeyPathHelperAliasSource declarations; the former
 * dynamicKeyPathHelperAliasRuntimeRunner observations execute in the existing
 * automated worker. This detects a generated program whose output compiles but
 * changes these runtime decisions: the literal runtime assertions below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from dynamicKeyPathHelperAliasRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations The input's exact validKey and bad-key spellings determine dot versus JSON-quoted bracket paths. A string value violates the declared numeric index signature independently of the generated diagnostics.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_dynamic_key_path_helper_alias in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed dynamicKeyPathHelperAliasSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/dynamic_key_path_helper_alias_transform_test.go dynamicKeyPathHelperAliasRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_dynamic_key_path_helper_alias = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const result: any = mod.run();

  if (
    !result.assertIdentifier ||
    result.assertIdentifier.path !== "$input.validKey"
  ) {
    throw new Error(
      "assert identifier key path mismatch: " +
        JSON.stringify(result.assertIdentifier),
    );
  }
  if (
    !result.assertQuoted ||
    result.assertQuoted.path !== '$input["bad-key"]'
  ) {
    throw new Error(
      "assert quoted key path mismatch: " + JSON.stringify(result.assertQuoted),
    );
  }
  if (!result.guardQuoted || result.guardQuoted.path !== '$input["bad-key"]') {
    throw new Error(
      "assertGuard quoted key path mismatch: " +
        JSON.stringify(result.guardQuoted),
    );
  }
  if (result.validateQuoted.success !== false) {
    throw new Error("validate accepted a non-number record value");
  }
  if (
    !result.validateQuoted.errors.some(
      (error: any): any => error.path === '$input["bad-key"]',
    )
  ) {
    throw new Error(
      "validate quoted key path mismatch: " +
        JSON.stringify(result.validateQuoted.errors),
    );
  }
};
