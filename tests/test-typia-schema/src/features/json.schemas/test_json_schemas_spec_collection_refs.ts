import { TestValidator } from "@nestia/e2e";
import typia from "typia";

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
  TestValidator.equals("collection schemas", clean(collection.schemas), [
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
