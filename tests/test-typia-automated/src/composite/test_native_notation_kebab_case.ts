import typia from "typia";

interface SourceRecord {
  userId: string;
  user_name: string;
  _privateValue: number;
  XMLParser: boolean;
  nested: { innerValue: string };
}

const toKebab = typia.notations.createKebab<SourceRecord>();
const isKebab = typia.notations.createIsKebab<SourceRecord>();
const assertKebab = typia.notations.createAssertKebab<SourceRecord>();
const validateKebab = typia.notations.createValidateKebab<SourceRecord>();
const fixture = { toKebab, isKebab, assertKebab, validateKebab };

/**
 * Verifies notation kebab case in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original notationKebabCaseSource
 * declarations; the former notationKebabCaseRuntimeRunner observations execute
 * in the existing automated worker. This detects a generated program whose
 * output compiles but changes these runtime decisions: the literal runtime
 * assertions below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from notationKebabCaseRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations Handwritten exact kebab key sets and four top-level literal values establish expected conversion independently. Nested inner-value key presence is checked, but its deep string content is not compared. Family-specific malformed inputs require null, any exception or a nonempty failed record; exact diagnostic paths and error identity are not asserted.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_notation_kebab_case in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed notationKebabCaseSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/notation_kebab_case_transform_test.go notationKebabCaseRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_notation_kebab_case = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const valid: any = {
    userId: "u-1",
    user_name: "John",
    _privateValue: 3,
    XMLParser: true,
    nested: { innerValue: "deep" },
  };
  const expectedKeys: any = [
    "user-id",
    "user-name",
    "_private-value",
    "xmlparser",
    "nested",
  ];

  const converted: any = mod.toKebab(valid);
  const keys: any = Object.keys(converted).sort();
  if (JSON.stringify(keys) !== JSON.stringify([...expectedKeys].sort())) {
    throw new Error(
      "kebab conversion produced unexpected keys: " + JSON.stringify(keys),
    );
  }
  if (converted["user-id"] !== "u-1" || converted["user-name"] !== "John") {
    throw new Error(
      "kebab conversion lost property values: " + JSON.stringify(converted),
    );
  }
  if (converted["_private-value"] !== 3 || converted["xmlparser"] !== true) {
    throw new Error(
      "prefix/acronym keys converted incorrectly: " + JSON.stringify(converted),
    );
  }
  if (
    JSON.stringify(Object.keys(converted.nested)) !==
    JSON.stringify(["inner-value"])
  ) {
    throw new Error(
      "nested keys should be kebab-cased: " + JSON.stringify(converted.nested),
    );
  }

  if (mod.isKebab(valid) === null) {
    throw new Error("isKebab should accept the valid input");
  }
  if (mod.isKebab({ ...valid, userId: 1 }) !== null) {
    throw new Error("isKebab should reject an invalid property type");
  }
  if (mod.assertKebab(valid)["user-id"] !== "u-1") {
    throw new Error("assertKebab should return the converted object");
  }
  let thrown: any = null;
  try {
    mod.assertKebab({ ...valid, nested: { innerValue: 1 } });
  } catch (error: any) {
    thrown = error;
  }
  if (thrown === null) {
    throw new Error("assertKebab should throw on invalid nested input");
  }

  const success: any = mod.validateKebab(valid);
  if (success.success !== true || success.data["user-name"] !== "John") {
    throw new Error(
      "validateKebab should succeed with converted data: " +
        JSON.stringify(success),
    );
  }
  const failure: any = mod.validateKebab({ ...valid, XMLParser: "yes" });
  if (failure.success !== false || failure.errors.length === 0) {
    throw new Error(
      "validateKebab should collect errors for invalid input: " +
        JSON.stringify(failure),
    );
  }
};
