import { TestEquality } from "@typia/template/equality";
import typia, { IMetadataSchemaCollection } from "typia";

/**
 * Verifies three ordered array roots share exactly three components whose
 * element kinds are string/number/Boolean.
 *
 * Plural native array analysis must preserve positional root identity and typed
 * component values.
 *
 * 1. Invoke the reflection producer on the type arguments declared here.
 * 2. Compare emitted values with their independent source-derived expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification The exported case asserts that three ordered array roots share exactly three components whose element kinds are string/number/Boolean.
 * @evidence contracts/testing.md#independent-expectations The declared tuple of arrays independently determines root count/order, reference counts and component element types.
 * @evidence contracts/testing.md#distinguishing-cases All original root/component/element comparisons remain, distinguishing the three homogeneous element kinds.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_reflect_schemas_array in test-typia-schema start. Actual typia.reflect call expressions are transformed in the suite project and their emitted reflection values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Plural native array analysis must preserve positional root identity and typed component values. Direct metadata/emitter unit calls do not establish public call resolution and evaluation of the emitted JavaScript together.
 * @evidence contracts/e2e.md#shared-execution All inputs in this declaration join the existing ttsx schema-suite project and process; siblings reuse the same content-keyed native plugin artifact. The case adds no compiler subprocess, installation or independent host per variant.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Reflected values, projections and assertion accumulators belong to this invocation. Shared source declarations are read without mutation; ttsc owns plugin artifact invalidation and the suite owns process termination. No cold-cache transition is claimed.
 * @evidence contracts/e2e.md#preserved-coverage All original root/component/element comparisons remain, distinguishing the three homogeneous element kinds. All original producer invocations and assertions stay enrolled under the unchanged exported case; no meaningful distinction was removed as redundant.
 */
export const test_reflect_schemas_array = (): void => {
  const collection: IMetadataSchemaCollection =
    typia.reflect.schemas<[string[], number[], boolean[]]>();

  TestEquality.equals("schemas count", collection.schemas.length, 3);

  // each schema has arrays reference
  TestEquality.equals(
    "first schema arrays",
    collection.schemas[0]?.arrays.length,
    1,
  );
  TestEquality.equals(
    "second schema arrays",
    collection.schemas[1]?.arrays.length,
    1,
  );
  TestEquality.equals(
    "third schema arrays",
    collection.schemas[2]?.arrays.length,
    1,
  );

  // components has array definitions
  TestEquality.equals(
    "components arrays count",
    collection.components.arrays.length,
    3,
  );

  // check array element types
  TestEquality.equals(
    "first array element",
    collection.components.arrays[0]?.value.atomics[0]?.type,
    "string",
  );
  TestEquality.equals(
    "second array element",
    collection.components.arrays[1]?.value.atomics[0]?.type,
    "number",
  );
  TestEquality.equals(
    "third array element",
    collection.components.arrays[2]?.value.atomics[0]?.type,
    "boolean",
  );
};
