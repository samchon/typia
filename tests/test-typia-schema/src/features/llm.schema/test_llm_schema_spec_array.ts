import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

export const test_llm_schema_spec_array = (): void => {
  TestEquality.equals(
    "array of string",
    clean(typia.llm.schema<string[]>({})),
    {
      type: "array",
      items: {
        type: "string",
      },
    },
  );
  TestEquality.equals(
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
  TestEquality.equals(
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
