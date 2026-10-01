import { TestValidator } from "@nestia/e2e";
import { TestEquality } from "@typia/template/equality";
import { OpenApiTypeChecker } from "@typia/utils";
import typia, { IJsonSchemaCollection } from "typia";

/**
 * Verifies json schemas against the native typia.json.schemas output.
 *
 * The case builds its input in this file and asserts schemas count, IMember is
 * ref, IArticle is ref, string is inline, number is inline, components has
 * IMember.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schemas is evaluated by the native host on the types declared in this case and the result is checked by 7 assertions (schemas count; IMember is ref; IArticle is ref; string is inline; number is inline; components has IMember).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (schemas count; IMember is ref; IArticle is ref; string is inline; number is inline; components has IMember) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schemas is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_json_schemas = (): void => {
  interface IMember {
    id: number;
    name: string;
  }
  interface IArticle {
    title: string;
    body: string;
    author: IMember;
  }

  const collection: IJsonSchemaCollection =
    typia.json.schemas<[IMember, IArticle, string, number]>();

  // schemas array has 4 items
  TestEquality.equals("schemas count", collection.schemas.length, 4);

  // named types use $ref
  TestValidator.predicate("IMember is ref", () =>
    OpenApiTypeChecker.isReference(collection.schemas[0]!),
  );
  TestValidator.predicate("IArticle is ref", () =>
    OpenApiTypeChecker.isReference(collection.schemas[1]!),
  );

  // primitive types are inline
  TestValidator.predicate("string is inline", () =>
    OpenApiTypeChecker.isString(collection.schemas[2]!),
  );
  TestValidator.predicate("number is inline", () =>
    OpenApiTypeChecker.isNumber(collection.schemas[3]!),
  );

  // components has both named types
  TestValidator.predicate(
    "components has IMember",
    () =>
      collection.components.schemas !== undefined &&
      "IMember" in collection.components.schemas,
  );
  TestValidator.predicate(
    "components has IArticle",
    () =>
      collection.components.schemas !== undefined &&
      "IArticle" in collection.components.schemas,
  );
};
