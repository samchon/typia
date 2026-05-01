import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

export const test_json_schema_spec_array_tuple = (): void => {
  TestValidator.equals("array", clean(typia.json.schema<string[]>().schema), {
    type: "array",
    items: {
      type: "string",
    },
  });
  TestValidator.equals(
    "array bounds",
    clean(
      typia.json.schema<
        string[] & tags.MinItems<1> & tags.MaxItems<3> & tags.UniqueItems
      >().schema,
    ),
    {
      type: "array",
      items: {
        type: "string",
      },
      minItems: 1,
      maxItems: 3,
      uniqueItems: true,
    },
  );
  TestValidator.equals(
    "tuple",
    clean(typia.json.schema<[string, number, boolean]>().schema),
    {
      type: "array",
      prefixItems: [
        {
          type: "string",
        },
        {
          type: "number",
        },
        {
          type: "boolean",
        },
      ],
      additionalItems: false,
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
