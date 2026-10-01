import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import typia, { IMetadataSchemaCollection } from "typia";

/**
 * Verifies reflect schemas against the native typia.reflect.schemas output.
 *
 * The case builds its input in this file and asserts schemas count, IMember
 * objects length, IArticle objects length, string atomics length, number
 * atomics length, components has IMember.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.reflect.schemas is evaluated by the native host on the types declared in this case and the result is checked by 7 assertions (schemas count; IMember objects length; IArticle objects length; string atomics length; number atomics length; components has IMember).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (schemas count; IMember objects length; IArticle objects length; string atomics length; number atomics length; components has IMember) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_reflect_schemas is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
