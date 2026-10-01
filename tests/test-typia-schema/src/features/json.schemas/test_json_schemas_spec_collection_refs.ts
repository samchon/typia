import { TestEquality } from "@typia/template/equality";
import typia from "typia";

/**
 * Verifies json schemas spec collection refs against the native
 * typia.json.schemas output.
 *
 * The case builds its input in this file and asserts collection version,
 * collection schemas, article component.
 *
 * 1. Generate the value from the types declared in this file.
 * 2. Assert the properties listed above.
 *
 * @evidence contracts/testing.md#behavioral-verification typia.json.schemas is evaluated by the native host on the types declared in this case and the result is checked by 3 assertions (collection version; collection schemas; article component).
 * @evidence contracts/testing.md#independent-expectations Expectations are literals or structural checks written in the case against the declared types; where the case compares two typia producers its titles say so, and properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (collection version; collection schemas; article component) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-typia-schema start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_json_schemas_spec_collection_refs is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
 */
export const test_json_schemas_spec_collection_refs = (): void => {
  interface IMember {
    id: string;
  }
  interface IArticle {
    author: IMember;
    title: string;
  }

  const collection = typia.json.schemas<[IMember, IArticle, string | null]>();
  TestEquality.equals("collection version", collection.version, "3.1");
  TestEquality.equals("collection schemas", clean(collection.schemas), [
    {
      $ref: "#/components/schemas/IMember",
    },
    {
      $ref: "#/components/schemas/IArticle",
    },
    {
      oneOf: [
        {
          type: "null",
        },
        {
          type: "string",
        },
      ],
    },
  ]);
  TestEquality.equals(
    "article component",
    clean(collection.components.schemas?.IArticle),
    {
      type: "object",
      properties: {
        author: {
          $ref: "#/components/schemas/IMember",
        },
        title: {
          type: "string",
        },
      },
      required: ["author", "title"],
      additionalProperties: false,
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
