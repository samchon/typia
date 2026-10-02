import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies reflected string/number arrays retain one array reference, a
 * component and the declared element atomic.
 *
 * Actual TypeScript array metadata must serialize into the runtime reflection
 * collection.
 *
 * 1. Invoke the reflection producer on the type arguments declared here.
 * 2. Compare emitted values with their independent source-derived expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification The exported case asserts that reflected string/number arrays retain one array reference, a component and the declared element atomic.
 * @evidence contracts/testing.md#independent-expectations The declarations string[]/number[] independently fix atomic kinds and single component/reference counts.
 * @evidence contracts/testing.md#distinguishing-cases String and number element twins retain all six comparisons; the name check only requires the string spelling to appear.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_reflect_schema_array in test-typia-schema start. Actual typia.reflect call expressions are transformed in the suite project and their emitted reflection values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Actual TypeScript array metadata must serialize into the runtime reflection collection. Direct metadata/emitter unit calls do not establish public call resolution and evaluation of the emitted JavaScript together.
 * @evidence contracts/e2e.md#shared-execution All inputs in this declaration join the existing ttsx schema-suite project and process; siblings reuse the same content-keyed native plugin artifact. The case adds no compiler subprocess, installation or independent host per variant.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Reflected values, projections and assertion accumulators belong to this invocation. Shared source declarations are read without mutation; ttsc owns plugin artifact invalidation and the suite owns process termination. No cold-cache transition is claimed.
 * @evidence contracts/e2e.md#preserved-coverage String and number element twins retain all six comparisons; the name check only requires the string spelling to appear. All original producer invocations and assertions stay enrolled under the unchanged exported case; no meaningful distinction was removed as redundant.
 */
export const test_reflect_schema_array = (): void => {
  // string[]
  const stringArrayUnit = typia.reflect.schema<string[]>();
  TestEquality.equals("arrays length", stringArrayUnit.schema.arrays.length, 1);
  TestValidator.predicate(
    "arrays name",
    () => !!stringArrayUnit.schema.arrays[0]?.name.includes("string"),
  );

  // components has array definition
  TestEquality.equals(
    "components arrays length",
    stringArrayUnit.components.arrays.length,
    1,
  );
  TestEquality.equals(
    "array element is string",
    stringArrayUnit.components.arrays[0]?.value.atomics[0]?.type,
    "string",
  );

  // number[]
  const numberArrayUnit = typia.reflect.schema<number[]>();
  TestEquality.equals(
    "number arrays length",
    numberArrayUnit.schema.arrays.length,
    1,
  );
  TestEquality.equals(
    "number array element",
    numberArrayUnit.components.arrays[0]?.value.atomics[0]?.type,
    "number",
  );
};
