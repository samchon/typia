import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

export const test_llm_schema_spec_array = (): void => {
  TestValidator.equals(
    "array of string",
    clean(typia.llm.schema<string[]>({})),
    {
      type: "array",
      items: {
        type: "string",
      },
    },
  );
  TestValidator.equals(
    "array bounds",
    clean(
      typia.llm.schema<
        string[] & tags.MinItems<1> & tags.MaxItems<3> & tags.UniqueItems
      >({}),
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
    "array item union",
    clean(typia.llm.schema<Array<string | number>>({})),
    {
      type: "array",
      items: {
        anyOf: [
          {
            type: "string",
          },
          {
            type: "number",
          },
        ],
      },
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
