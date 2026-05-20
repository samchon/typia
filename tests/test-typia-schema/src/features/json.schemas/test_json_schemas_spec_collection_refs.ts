import { TestValidator } from "@nestia/e2e";
import { OpenApi } from "@typia/interface";
import typia from "typia";

/**
 * Verifies that `typia.json.schemas` emits a tuple of schemas with correct
 * `$ref` and inline `oneOf` entries.
 *
 * A multi-type collection must place named types in `components.schemas` and
 * emit `$ref` entries in the schemas tuple, while primitive unions (`string |
 * null`) are inlined as `oneOf`. A regression could misorder the tuple entries
 * or omit the `oneOf` wrapping.
 *
 * 1. Call `typia.json.schemas<[IMember, IArticle, string | null]>()`.
 * 2. Assert the first two entries are `$ref` to the matching component names.
 * 3. Assert the third entry is a `oneOf` of `null` and `string`
 *    (order-insensitive).
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
  TestValidator.equals("collection version", collection.version, "3.1");
  const schemas = clean(collection.schemas);
  TestValidator.equals("collection schemas length", schemas.length, 3);
  TestValidator.equals("collection schemas[0]", schemas[0], {
    $ref: "#/components/schemas/IMember",
  });
  TestValidator.equals("collection schemas[1]", schemas[1], {
    $ref: "#/components/schemas/IArticle",
  });
  const stringOrNull = schemas[2] as { oneOf: OpenApi.IJsonSchema[] };
  TestValidator.predicate("schemas[2] is oneOf", () =>
    Array.isArray(stringOrNull?.oneOf),
  );
  TestValidator.equals(
    "string|null oneOf",
    sortOneOf(stringOrNull.oneOf),
    sortOneOf([{ type: "null" }, { type: "string" }]),
  );
  TestValidator.equals(
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

const sortOneOf = (items: OpenApi.IJsonSchema[]): OpenApi.IJsonSchema[] =>
  [...items].sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
