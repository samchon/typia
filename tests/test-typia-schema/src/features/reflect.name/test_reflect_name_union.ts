import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies heterogeneous and nullable unions retain their source-spelled names.
 *
 * Native source-text name emission must retain the public default spelling of
 * both union forms.
 *
 * 1. Invoke the reflection producer on the type arguments declared here.
 * 2. Compare emitted values with their independent source-derived expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification The exported case asserts that heterogeneous and nullable unions retain their source-spelled names.
 * @evidence contracts/testing.md#independent-expectations The explicit string|number and string|null type argument strings independently fix expected text.
 * @evidence contracts/testing.md#distinguishing-cases Both union comparisons remain, contrasting atomic and null alternatives; no canonical reordering is claimed for source-name mode.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_reflect_name_union in test-typia-schema start. Actual typia.reflect call expressions are transformed in the suite project and their emitted reflection values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native source-text name emission must retain the public default spelling of both union forms. Direct metadata/emitter unit calls do not establish public call resolution and evaluation of the emitted JavaScript together.
 * @evidence contracts/e2e.md#shared-execution All inputs in this declaration join the existing ttsx schema-suite project and process; siblings reuse the same content-keyed native plugin artifact. The case adds no compiler subprocess, installation or independent host per variant.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Reflected values, projections and assertion accumulators belong to this invocation. Shared source declarations are read without mutation; ttsc owns plugin artifact invalidation and the suite owns process termination. No cold-cache transition is claimed.
 * @evidence contracts/e2e.md#preserved-coverage Both union comparisons remain, contrasting atomic and null alternatives; no canonical reordering is claimed for source-name mode. All original producer invocations and assertions stay enrolled under the unchanged exported case; no meaningful distinction was removed as redundant.
 */
export const test_reflect_name_union = (): void => {
  TestEquality.equals(
    "string | number",
    typia.reflect.name<string | number>(),
    "string | number",
  );
  TestEquality.equals(
    "string | null",
    typia.reflect.name<string | null>(),
    "string | null",
  );
};
