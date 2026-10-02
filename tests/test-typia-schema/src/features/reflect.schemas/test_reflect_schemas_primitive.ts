import { TestEquality } from "@typia/template/equality";
import typia, { IMetadataSchemaCollection } from "typia";

/**
 * Verifies four ordered primitive roots have their declared kinds and allocate
 * no components.
 *
 * Plural native primitive analysis must preserve root ordering without
 * publishing unrelated component state.
 *
 * 1. Invoke the reflection producer on the type arguments declared here.
 * 2. Compare emitted values with their independent source-derived expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification The exported case asserts that four ordered primitive roots have their declared kinds and allocate no components.
 * @evidence contracts/testing.md#independent-expectations The independent primitive tuple determines four root types; primitive domains need no object/array/tuple/alias components.
 * @evidence contracts/testing.md#distinguishing-cases String/number/Boolean/bigint kind comparisons and all four empty component arrays remain.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_reflect_schemas_primitive in test-typia-schema start. Actual typia.reflect call expressions are transformed in the suite project and their emitted reflection values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Plural native primitive analysis must preserve root ordering without publishing unrelated component state. Direct metadata/emitter unit calls do not establish public call resolution and evaluation of the emitted JavaScript together.
 * @evidence contracts/e2e.md#shared-execution All inputs in this declaration join the existing ttsx schema-suite project and process; siblings reuse the same content-keyed native plugin artifact. The case adds no compiler subprocess, installation or independent host per variant.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Reflected values, projections and assertion accumulators belong to this invocation. Shared source declarations are read without mutation; ttsc owns plugin artifact invalidation and the suite owns process termination. No cold-cache transition is claimed.
 * @evidence contracts/e2e.md#preserved-coverage String/number/Boolean/bigint kind comparisons and all four empty component arrays remain. All original producer invocations and assertions stay enrolled under the unchanged exported case; no meaningful distinction was removed as redundant.
 */
export const test_reflect_schemas_primitive = (): void => {
  const collection: IMetadataSchemaCollection =
    typia.reflect.schemas<[string, number, boolean, bigint]>();

  TestEquality.equals("schemas count", collection.schemas.length, 4);

  TestEquality.equals(
    "string type",
    collection.schemas[0]?.atomics[0]?.type,
    "string",
  );
  TestEquality.equals(
    "number type",
    collection.schemas[1]?.atomics[0]?.type,
    "number",
  );
  TestEquality.equals(
    "boolean type",
    collection.schemas[2]?.atomics[0]?.type,
    "boolean",
  );
  TestEquality.equals(
    "bigint type",
    collection.schemas[3]?.atomics[0]?.type,
    "bigint",
  );

  // primitives don't create components
  TestEquality.equals("objects count", collection.components.objects.length, 0);
  TestEquality.equals("arrays count", collection.components.arrays.length, 0);
  TestEquality.equals("tuples count", collection.components.tuples.length, 0);
  TestEquality.equals("aliases count", collection.components.aliases.length, 0);
};
