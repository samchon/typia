import typia from "typia";

interface NullablePrimitiveProperties {
  number: number | null;
  string: string | null;
  boolean: boolean | null;
  reversedNumber: null | number;
  nested: {
    value: string | null;
  };
  array: Array<{
    value: boolean | null;
  }>;
}

const isNullablePrimitive = (input: unknown): boolean =>
  typia.is<NullablePrimitiveProperties>(input);
const fixture = { isNullablePrimitive };

/**
 * Verifies nullable primitive property is in the generated JavaScript.
 *
 * The native TypeScript fixture retains the original
 * nullablePrimitivePropertySource declarations; the former
 * nullablePrimitivePropertyRuntimeRunner observations execute in the existing
 * automated worker. This detects a generated program whose output compiles but
 * changes these runtime decisions: the literal runtime assertions below.
 *
 * 1. Transform the typed declarations through the installed native typia plugin.
 * 2. Execute the original inputs, literal expected outcomes, and failure
 *    assertions.
 *
 * @evidence contracts/testing.md#behavioral-verification Runs the actual generated callbacks and retains every branch, input and throw from nullablePrimitivePropertyRuntimeRunner; emitted-text presence alone cannot pass these assertions.
 * @evidence contracts/testing.md#independent-expectations The source's required nullable primitive properties accept their primitive values and null, while missing properties and wrong primitives must reject. Each property is mutated independently so broad object acceptance cannot satisfy the assertions.
 * @evidence contracts/testing.md#distinguishing-cases Preserves the literal runtime assertions below; the rest of the original runner's assertions remain below without dropping or skipping inputs.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_native_nullable_primitive_property_is in the shared automated composite population; its local runner helpers are covered by this function and create no compiler or Node subprocess.
 * @evidence contracts/e2e.md#necessary-boundary Installed typia transforms the fully typed nullablePrimitivePropertySource call sites, and the worker executes their emitted JavaScript; pure Go emitter assertions cannot observe these JavaScript runtime results.
 * @evidence contracts/e2e.md#shared-execution Uses the existing automated project and single suite worker, sharing the plugin artifact and project load with other composites instead of recreating the former temporary project.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Fresh inputs and local runner helpers are created per invocation. Generated callbacks and fixture declarations are reused; the suite owner closes the shared worker.
 * @evidence contracts/e2e.md#preserved-coverage packages/typia/native/cmd/ttsc-typia/nullable_primitive_property_is_transform_test.go nullablePrimitivePropertyRuntimeRunner inputs and assertions are directly retained below; actual callback returns replace the old CommonJS rewrites and handwritten runtime stubs.
 */
export const test_native_nullable_primitive_property_is = (): void => {
  // The original JS runner deliberately supplies invalid static inputs as well.
  // Only its invocation view is widened; every typia source declaration above
  // keeps its original type and all result assertions below remain executable.
  const mod: any = fixture;
  const { isNullablePrimitive }: any = mod;

  const valid: any = {
    number: 1,
    string: "alpha",
    boolean: true,
    reversedNumber: 2,
    nested: { value: "nested" },
    array: [{ value: false }],
  };
  const allNull: any = {
    number: null,
    string: null,
    boolean: null,
    reversedNumber: null,
    nested: { value: null },
    array: [{ value: null }],
  };
  const cases: any = [
    ["valid primitives", valid, true],
    ["all nullable fields are null", allNull, true],
    ["wrong number primitive", { ...valid, number: "1" }, false],
    ["wrong string primitive", { ...valid, string: 1 }, false],
    ["wrong boolean primitive", { ...valid, boolean: "true" }, false],
    ["wrong reversed primitive", { ...valid, reversedNumber: false }, false],
    [
      "wrong nested nullable primitive",
      { ...valid, nested: { value: 1 } },
      false,
    ],
    [
      "wrong array nullable primitive",
      { ...valid, array: [{ value: "false" }] },
      false,
    ],
    [
      "missing required property",
      ((): any => {
        const next: any = { ...valid };
        delete next.number;
        return next;
      })(),
      false,
    ],
    [
      "present undefined required property",
      { ...valid, number: undefined },
      false,
    ],
    [
      "present undefined nested property",
      { ...valid, nested: { value: undefined } },
      false,
    ],
    [
      "present undefined array property",
      { ...valid, array: [{ value: undefined }] },
      false,
    ],
  ];

  for (const [name, input, expected] of cases) {
    const actual: any = isNullablePrimitive(input);
    if (actual !== expected) {
      throw new Error(name + ": expected " + expected + " but got " + actual);
    }
  }
};
