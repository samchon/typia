import typia from "typia";

interface SourceRecord {
  MAX_COUNT: number;
  HTTP_PORT: number;
  USER_ID: number;
  fooBar_baz: number;
  _MAX_COUNT: number;
  userID: number;
  ID: number;
  nested: { INNER_VALUE: number };
}

type DynamicRecord = Record<string, { DEEP_VALUE: number }>;

const toPascal = typia.notations.createPascal<SourceRecord>();
const isPascal = typia.notations.createIsPascal<SourceRecord>();
const assertPascal = typia.notations.createAssertPascal<SourceRecord>();
const validatePascal = typia.notations.createValidatePascal<SourceRecord>();
const toPascalDynamic = typia.notations.createPascal<DynamicRecord>();
const fixture = {
  toPascal,
  isPascal,
  assertPascal,
  validatePascal,
  toPascalDynamic,
};

/**
 * Verifies notation pascal case in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original notationPascalCaseSource
 * declarations; the former notationPascalCaseRuntimeRunner observations execute
 * in the existing automated worker. This detects a generated program whose
 * output compiles but changes these runtime decisions: the literal runtime
 * assertions below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from notationPascalCaseRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations Authored exact Pascal key sets and seven top-level numeric values establish conversion expectations. Nested and dynamic DeepValue presence are checked, but their numeric contents are not compared. Separate malformed top-level/nested inputs require null, an exception or a nonempty failure record by guarded family; exact diagnostic paths and error identity are not asserted.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_notation_pascal_case in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed notationPascalCaseSource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/notation_pascal_case_transform_test.go notationPascalCaseRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_notation_pascal_case = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const valid: any = {
    MAX_COUNT: 1,
    HTTP_PORT: 2,
    USER_ID: 3,
    fooBar_baz: 4,
    _MAX_COUNT: 5,
    userID: 6,
    ID: 7,
    nested: { INNER_VALUE: 8 },
  };
  // Byte-for-byte the key set of PascalCase<SourceRecord>: multi-word tails
  // lowercase (MAX_COUNT -> MaxCount), single words keep their tail through the
  // plain path (userID -> UserID, ID -> ID).
  const expectedKeys: any = [
    "MaxCount",
    "HttpPort",
    "UserId",
    "FoobarBaz",
    "_MaxCount",
    "UserID",
    "ID",
    "Nested",
  ];

  const converted: any = mod.toPascal(valid);
  const keys: any = Object.keys(converted).sort();
  if (JSON.stringify(keys) !== JSON.stringify([...expectedKeys].sort())) {
    throw new Error(
      "pascal conversion produced unexpected keys: " + JSON.stringify(keys),
    );
  }
  if (
    converted.MaxCount !== 1 ||
    converted.HttpPort !== 2 ||
    converted.UserId !== 3
  ) {
    throw new Error(
      "pascal conversion lost multi-word values: " + JSON.stringify(converted),
    );
  }
  if (converted.FoobarBaz !== 4 || converted._MaxCount !== 5) {
    throw new Error(
      "mixed-case/leading-underscore keys converted incorrectly: " +
        JSON.stringify(converted),
    );
  }
  if (converted.UserID !== 6 || converted.ID !== 7) {
    throw new Error(
      "single-word keys must keep their tail: " + JSON.stringify(converted),
    );
  }
  if (
    JSON.stringify(Object.keys(converted.Nested)) !==
    JSON.stringify(["InnerValue"])
  ) {
    throw new Error(
      "nested keys should recurse into PascalCase: " +
        JSON.stringify(converted.Nested),
    );
  }

  if (mod.isPascal(valid) === null) {
    throw new Error("isPascal should accept the valid input");
  }
  if (mod.isPascal({ ...valid, MAX_COUNT: "x" }) !== null) {
    throw new Error("isPascal should reject an invalid property type");
  }
  if (mod.assertPascal(valid).MaxCount !== 1) {
    throw new Error("assertPascal should return the converted object");
  }
  let thrown: any = null;
  try {
    mod.assertPascal({ ...valid, nested: { INNER_VALUE: "x" } });
  } catch (error: any) {
    thrown = error;
  }
  if (thrown === null) {
    throw new Error("assertPascal should throw on invalid nested input");
  }

  const success: any = mod.validatePascal(valid);
  if (success.success !== true || success.data.HttpPort !== 2) {
    throw new Error(
      "validatePascal should succeed with converted data: " +
        JSON.stringify(success),
    );
  }
  const failure: any = mod.validatePascal({ ...valid, ID: "x" });
  if (failure.success !== false || failure.errors.length === 0) {
    throw new Error(
      "validatePascal should collect errors for invalid input: " +
        JSON.stringify(failure),
    );
  }

  // Dynamic index-signature keys route through the runtime _notationPascal helper
  // rather than statically emitted assignments. Feeding the same all-caps
  // witnesses proves the runtime helper and the compile-time emit agree.
  const dynamic: any = mod.toPascalDynamic({
    MAX_COUNT: { DEEP_VALUE: 1 },
    HTTP_PORT: { DEEP_VALUE: 2 },
  });
  const dynamicKeys: any = Object.keys(dynamic).sort();
  if (
    JSON.stringify(dynamicKeys) !== JSON.stringify(["HttpPort", "MaxCount"])
  ) {
    throw new Error(
      "dynamic pascal keys disagreed with the static emit: " +
        JSON.stringify(dynamicKeys),
    );
  }
  if (
    !Object.hasOwn(dynamic.MaxCount, "DeepValue") ||
    !Object.hasOwn(dynamic.HttpPort, "DeepValue")
  ) {
    throw new Error(
      "dynamic pascal nested keys were not lowercased: " +
        JSON.stringify(dynamic),
    );
  }
};
