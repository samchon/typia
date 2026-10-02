import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies both string/number atomic alternatives and cat/dog object names
 * survive reflected unions.
 *
 * Native union analysis must publish every atomic and object alternative in
 * public reflection metadata.
 *
 * 1. Invoke the reflection producer on the type arguments declared here.
 * 2. Compare emitted values with their independent source-derived expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification The exported case asserts that both string/number atomic alternatives and cat/dog object names survive reflected unions.
 * @evidence contracts/testing.md#independent-expectations The independent union declarations provide two distinct atomic kinds and two source interface names.
 * @evidence contracts/testing.md#distinguishing-cases Two atomic kinds/count and two named object references/count retain all six checks; this case does not assert complete object member metadata.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_reflect_schema_union in test-typia-schema start. Actual typia.reflect call expressions are transformed in the suite project and their emitted reflection values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Native union analysis must publish every atomic and object alternative in public reflection metadata. Direct metadata/emitter unit calls do not establish public call resolution and evaluation of the emitted JavaScript together.
 * @evidence contracts/e2e.md#shared-execution All inputs in this declaration join the existing ttsx schema-suite project and process; siblings reuse the same content-keyed native plugin artifact. The case adds no compiler subprocess, installation or independent host per variant.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Reflected values, projections and assertion accumulators belong to this invocation. Shared source declarations are read without mutation; ttsc owns plugin artifact invalidation and the suite owns process termination. No cold-cache transition is claimed.
 * @evidence contracts/e2e.md#preserved-coverage Two atomic kinds/count and two named object references/count retain all six checks; this case does not assert complete object member metadata. All original producer invocations and assertions stay enrolled under the unchanged exported case; no meaningful distinction was removed as redundant.
 */
export const test_reflect_schema_union = (): void => {
  // primitive union
  const primitiveUnion = typia.reflect.schema<string | number>();
  TestEquality.equals(
    "atomics length",
    primitiveUnion.schema.atomics.length,
    2,
  );

  const types = primitiveUnion.schema.atomics.map((a) => a.type);
  TestValidator.predicate("has string", () => types.includes("string"));
  TestValidator.predicate("has number", () => types.includes("number"));

  // object union
  interface ICat {
    type: "cat";
    meow: string;
  }
  interface IDog {
    type: "dog";
    bark: string;
  }

  const objectUnion = typia.reflect.schema<ICat | IDog>();
  TestEquality.equals("objects length", objectUnion.schema.objects.length, 2);

  const objectNames = objectUnion.schema.objects.map((o) => o.name);
  TestValidator.predicate("has ICat", () => objectNames.includes("ICat"));
  TestValidator.predicate("has IDog", () => objectNames.includes("IDog"));
};
