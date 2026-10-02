import typia from "typia";

interface IHostileKeys {
  'quote"key': number;
  "back\\slash": number;
  "line\nbreak": number;
  "tab\tkey": number;
  "bell\u0007key": number;
  "nul\u0000key": number;
  "sep\u2028key": number;
  "plain-key": number;
  plainIdentifier: number;
}

const KEYS: string[] = [
  'quote"key',
  "back\\slash",
  "line\nbreak",
  "tab\tkey",
  "bell\u0007key",
  "nul\u0000key",
  "sep\u2028key",
  "plain-key",
];

const validateHostile = typia.createValidate<IHostileKeys>();

const run = () => {
  const input: Record<string, unknown> = { plainIdentifier: 1 };
  for (const key of KEYS) input[key] = "not a number";
  return validateHostile(input);
};
const fixture = { KEYS, run };

/**
 * Verifies escaped property key path in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * escapedPropertyKeyPathSource declarations; the former
 * escapedPropertyKeyPathRuntimeRunner observations execute in the existing
 * automated worker. This detects a generated program whose output compiles but
 * changes these runtime decisions: the literal runtime assertions below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from escapedPropertyKeyPathRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations Eight authored keys containing quote, backslash, newline, tab, bell, NUL, line separator or hyphen determine JSON-quoted access paths through JSON.stringify, independently of the native path emitter. Each expected path must occur; the helper does not reject duplicate reports or assert exact total count.
 * @evidence contracts/testing.md#distinguishing-cases All eight invalid numeric fields must report their escaped accessor; the valid plainIdentifier field must produce no report. Empty keys and interpolation syntax are not enrolled in this fixture.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_escaped_property_key_path in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed escapedPropertyKeyPathSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/escaped_property_key_path_transform_test.go escapedPropertyKeyPathRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_escaped_property_key_path = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const result: any = mod.run();

  if (result.success !== false) {
    throw new Error("validate accepted non-number values");
  }
  for (const key of mod.KEYS) {
    const expected: any = "$input[" + JSON.stringify(key) + "]";
    const found: any = result.errors.find(
      (error: any): any => error.path === expected,
    );
    if (!found) {
      throw new Error(
        "missing path for key " +
          JSON.stringify(key) +
          ": expected " +
          JSON.stringify(expected) +
          ", got " +
          JSON.stringify(result.errors.map((error: any): any => error.path)),
      );
    }
  }
  if (
    result.errors.some(
      (error: any): any => error.path === "$input.plainIdentifier",
    )
  ) {
    throw new Error("identifier fast path reported an error for a valid value");
  }
};
