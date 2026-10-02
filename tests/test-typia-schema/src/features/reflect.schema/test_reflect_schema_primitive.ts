import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies string/number/Boolean/bigint each produce exactly one correctly
 * named atomic.
 *
 * Native type analysis must serialize the correct public atomic representation
 * for each primitive domain.
 *
 * 1. Invoke the reflection producer on the type arguments declared here.
 * 2. Compare emitted values with their independent source-derived expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification The exported case asserts that string/number/Boolean/bigint each produce exactly one correctly named atomic.
 * @evidence contracts/testing.md#independent-expectations Four independent primitive TypeScript domains establish kind and single-atomic count expectations.
 * @evidence contracts/testing.md#distinguishing-cases All eight kind/count comparisons remain; constant rather than unrestricted metadata is independently covered by constant and enum siblings.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_reflect_schema_primitive in test-typia-schema start. Actual typia.reflect call expressions are transformed in the suite project and their emitted reflection values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native type analysis must serialize the correct public atomic representation for each primitive domain. Direct metadata/emitter unit calls do not establish public call resolution and evaluation of the emitted JavaScript together.
 * @evidence contracts/e2e.md#shared-execution All inputs in this declaration join the existing ttsx schema-suite project and process; siblings reuse the same content-keyed native plugin artifact. The case adds no compiler subprocess, installation or independent host per variant.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Reflected values, projections and assertion accumulators belong to this invocation. Shared source declarations are read without mutation; ttsc owns plugin artifact invalidation and the suite owns process termination. No cold-cache transition is claimed.
 * @evidence contracts/e2e.md#preserved-coverage All eight kind/count comparisons remain; constant rather than unrestricted metadata is independently covered by constant and enum siblings. All original producer invocations and assertions stay enrolled under the unchanged exported case; no meaningful distinction was removed as redundant.
 */
export const test_reflect_schema_primitive = (): void => {
  // string
  const stringUnit = typia.reflect.schema<string>();
  TestEquality.equals(
    "string atomics length",
    stringUnit.schema.atomics.length,
    1,
  );
  TestEquality.equals(
    "string atomic type",
    stringUnit.schema.atomics[0]?.type,
    "string",
  );

  // number
  const numberUnit = typia.reflect.schema<number>();
  TestEquality.equals(
    "number atomics length",
    numberUnit.schema.atomics.length,
    1,
  );
  TestEquality.equals(
    "number atomic type",
    numberUnit.schema.atomics[0]?.type,
    "number",
  );

  // boolean
  const booleanUnit = typia.reflect.schema<boolean>();
  TestEquality.equals(
    "boolean atomics length",
    booleanUnit.schema.atomics.length,
    1,
  );
  TestEquality.equals(
    "boolean atomic type",
    booleanUnit.schema.atomics[0]?.type,
    "boolean",
  );

  // bigint
  const bigintUnit = typia.reflect.schema<bigint>();
  TestEquality.equals(
    "bigint atomics length",
    bigintUnit.schema.atomics.length,
    1,
  );
  TestEquality.equals(
    "bigint atomic type",
    bigintUnit.schema.atomics[0]?.type,
    "bigint",
  );
};
