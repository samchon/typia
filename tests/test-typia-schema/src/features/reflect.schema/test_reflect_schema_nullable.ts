import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies nullability and undefined-requiredness stay independent while string
 * atomic metadata survives.
 *
 * Native null and undefined branches must serialize distinct public metadata
 * flags rather than collapse optionality and nullability.
 *
 * 1. Invoke the reflection producer on the type arguments declared here.
 * 2. Compare emitted values with their independent source-derived expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification The exported case asserts that nullability and undefined-requiredness stay independent while string atomic metadata survives.
 * @evidence contracts/testing.md#independent-expectations The declared string|null and string|undefined types independently require nullable:true/required:true and nullable:false/required:false respectively.
 * @evidence contracts/testing.md#distinguishing-cases Both union spellings keep original atomic/count/flag assertions; opposite flags and undefined-string type are now explicitly asserted.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_reflect_schema_nullable in test-typia-schema start. Actual typia.reflect call expressions are transformed in the suite project and their emitted reflection values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native null and undefined branches must serialize distinct public metadata flags rather than collapse optionality and nullability. Direct metadata/emitter unit calls do not establish public call resolution and evaluation of the emitted JavaScript together.
 * @evidence contracts/e2e.md#shared-execution All inputs in this declaration join the existing ttsx schema-suite project and process; siblings reuse the same content-keyed native plugin artifact. The case adds no compiler subprocess, installation or independent host per variant.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Reflected values, projections and assertion accumulators belong to this invocation. Shared source declarations are read without mutation; ttsc owns plugin artifact invalidation and the suite owns process termination. No cold-cache transition is claimed.
 * @evidence contracts/e2e.md#preserved-coverage Both union spellings keep original atomic/count/flag assertions; opposite flags and undefined-string type are now explicitly asserted. All original producer invocations and assertions stay enrolled under the unchanged exported case; no meaningful distinction was removed as redundant.
 */
export const test_reflect_schema_nullable = (): void => {
  // nullable string
  const nullableUnit = typia.reflect.schema<string | null>();
  TestEquality.equals("nullable is true", nullableUnit.schema.nullable, true);
  TestEquality.equals(
    "nullable remains required",
    nullableUnit.schema.required,
    true,
  );
  TestEquality.equals("atomics length", nullableUnit.schema.atomics.length, 1);
  TestEquality.equals(
    "atomic type is string",
    nullableUnit.schema.atomics[0]?.type,
    "string",
  );

  // string | undefined (not optional, but not required)
  const undefinedUnit = typia.reflect.schema<string | undefined>();
  TestEquality.equals(
    "undefined does not introduce null",
    undefinedUnit.schema.nullable,
    false,
  );
  TestEquality.equals(
    "required is false",
    undefinedUnit.schema.required,
    false,
  );
  TestEquality.equals(
    "atomics length for undefined union",
    undefinedUnit.schema.atomics.length,
    1,
  );
  TestEquality.equals(
    "undefined retains string type",
    undefinedUnit.schema.atomics[0]?.type,
    "string",
  );
};
