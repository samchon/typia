import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia, { IMetadataSchemaCollection } from "typia";

/**
 * Verifies the four ordered roots retain IMember/IArticle/string/number
 * identity and shared named components.
 *
 * Plural TypeScript tuple analysis must preserve root order while emitting a
 * shared reflection component collection.
 *
 * 1. Invoke the reflection producer on the type arguments declared here.
 * 2. Compare emitted values with their independent source-derived expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification The exported case asserts that the four ordered roots retain IMember/IArticle/string/number identity and shared named components.
 * @evidence contracts/testing.md#independent-expectations The authored tuple of source types independently fixes root positions, kinds and IMember/IArticle component presence.
 * @evidence contracts/testing.md#distinguishing-cases All original counts/component checks remain; added exact root name/kind comparisons prevent root swapping from passing identical counts.
 * @evidence contracts/testing.md#execution-ownership DynamicExecutor discovers test_reflect_schemas in test-typia-schema start. Actual typia.reflect call expressions are transformed in the suite project and their emitted reflection values are evaluated in the existing runner.
 * @evidence contracts/e2e.md#necessary-boundary Plural TypeScript tuple analysis must preserve root order while emitting a shared reflection component collection. Direct metadata/emitter unit calls do not establish public call resolution and evaluation of the emitted JavaScript together.
 * @evidence contracts/e2e.md#shared-execution All inputs in this declaration join the existing ttsx schema-suite project and process; siblings reuse the same content-keyed native plugin artifact. The case adds no compiler subprocess, installation or independent host per variant.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity Reflected values, projections and assertion accumulators belong to this invocation. Shared source declarations are read without mutation; ttsc owns plugin artifact invalidation and the suite owns process termination. No cold-cache transition is claimed.
 * @evidence contracts/e2e.md#preserved-coverage All original counts/component checks remain; added exact root name/kind comparisons prevent root swapping from passing identical counts. All original producer invocations and assertions stay enrolled under the unchanged exported case; no meaningful distinction was removed as redundant.
 */
export const test_reflect_schemas = (): void => {
  interface IMember {
    id: number;
    name: string;
  }
  interface IArticle {
    title: string;
    body: string;
    author: IMember;
  }

  const collection: IMetadataSchemaCollection =
    typia.reflect.schemas<[IMember, IArticle, string, number]>();

  // schemas array has 4 items
  TestEquality.equals("schemas count", collection.schemas.length, 4);
  TestEquality.equals(
    "first root names IMember",
    collection.schemas[0]?.objects[0]?.name,
    "IMember",
  );
  TestEquality.equals(
    "second root names IArticle",
    collection.schemas[1]?.objects[0]?.name,
    "IArticle",
  );
  TestEquality.equals(
    "third root is string",
    collection.schemas[2]?.atomics[0]?.type,
    "string",
  );
  TestEquality.equals(
    "fourth root is number",
    collection.schemas[3]?.atomics[0]?.type,
    "number",
  );

  // first two are object types
  TestEquality.equals(
    "IMember objects length",
    collection.schemas[0]?.objects.length,
    1,
  );
  TestEquality.equals(
    "IArticle objects length",
    collection.schemas[1]?.objects.length,
    1,
  );

  // last two are primitives
  TestEquality.equals(
    "string atomics length",
    collection.schemas[2]?.atomics.length,
    1,
  );
  TestEquality.equals(
    "number atomics length",
    collection.schemas[3]?.atomics.length,
    1,
  );

  // components has both named object types
  TestValidator.predicate("components has IMember", () =>
    collection.components.objects.some((o) => o.name === "IMember"),
  );
  TestValidator.predicate("components has IArticle", () =>
    collection.components.objects.some((o) => o.name === "IArticle"),
  );
};
