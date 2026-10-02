import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies the source-spelled interface name remains IMember.
 *
 * The public default name mode must replace a resolved typia call with the
 * source identifier string.
 *
 * 1. Invoke the reflection producer on the type arguments declared here.
 * 2. Compare emitted values with their independent source-derived expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification The exported case asserts that the source-spelled interface name remains IMember.
 * @evidence contracts/testing.md#independent-expectations The explicit type argument identifier establishes the independent expected name.
 * @evidence contracts/testing.md#distinguishing-cases The original named-interface comparison remains; regular-mode collision behavior is owned by regular_duplicate_disambiguator.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_reflect_name_object in test-typia-schema start. Actual typia.reflect call expressions are transformed in the suite project and their emitted reflection values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary The public default name mode must replace a resolved typia call with the source identifier string. Direct metadata/emitter unit calls do not establish public call resolution and evaluation of the emitted JavaScript together.
 * @evidence contracts/e2e.md#shared-execution All inputs in this declaration join the existing ttsx schema-suite project and process; siblings reuse the same content-keyed native plugin artifact. The case adds no compiler subprocess, installation or independent host per variant.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Reflected values, projections and assertion accumulators belong to this invocation. Shared source declarations are read without mutation; ttsc owns plugin artifact invalidation and the suite owns process termination. No cold-cache transition is claimed.
 * @evidence contracts/e2e.md#preserved-coverage The original named-interface comparison remains; regular-mode collision behavior is owned by regular_duplicate_disambiguator. All original producer invocations and assertions stay enrolled under the unchanged exported case; no meaningful distinction was removed as redundant.
 */
export const test_reflect_name_object = (): void => {
  interface IMember {
    id: number;
    name: string;
  }

  TestEquality.equals("named object", typia.reflect.name<IMember>(), "IMember");
};
