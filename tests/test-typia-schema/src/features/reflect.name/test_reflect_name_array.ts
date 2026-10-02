import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies source-spelled names retain string[], number[] and Boolean
 * double-array nesting.
 *
 * Native call-expression replacement must read and emit the actual source type
 * argument text.
 *
 * 1. Invoke the reflection producer on the type arguments declared here.
 * 2. Compare emitted values with their independent source-derived expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification The exported case asserts that source-spelled names retain string[], number[] and Boolean double-array nesting.
 * @evidence contracts/testing.md#independent-expectations The explicit TypeScript type argument text independently determines each expected public name.
 * @evidence contracts/testing.md#distinguishing-cases Two element kinds and one/two array nesting levels retain all three comparisons.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_reflect_name_array in test-typia-schema start. Actual typia.reflect call expressions are transformed in the suite project and their emitted reflection values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native call-expression replacement must read and emit the actual source type argument text. Direct metadata/emitter unit calls do not establish public call resolution and evaluation of the emitted JavaScript together.
 * @evidence contracts/e2e.md#shared-execution All inputs in this declaration join the existing ttsx schema-suite project and process; siblings reuse the same content-keyed native plugin artifact. The case adds no compiler subprocess, installation or independent host per variant.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Reflected values, projections and assertion accumulators belong to this invocation. Shared source declarations are read without mutation; ttsc owns plugin artifact invalidation and the suite owns process termination. No cold-cache transition is claimed.
 * @evidence contracts/e2e.md#preserved-coverage Two element kinds and one/two array nesting levels retain all three comparisons. All original producer invocations and assertions stay enrolled under the unchanged exported case; no meaningful distinction was removed as redundant.
 */
export const test_reflect_name_array = (): void => {
  TestEquality.equals("string[]", typia.reflect.name<string[]>(), "string[]");
  TestEquality.equals("number[]", typia.reflect.name<number[]>(), "number[]");
  TestEquality.equals(
    "boolean[][]",
    typia.reflect.name<boolean[][]>(),
    "boolean[][]",
  );
};
