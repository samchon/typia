import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

export const test_llm_schema_spec_strict_array = (): void => {
  TestValidator.equals(
    "strict array shifts constraints",
    clean(
      typia.llm.schema<
        (string & tags.MinLength<1>)[] &
          tags.MinItems<1> &
          tags.MaxItems<3> &
          tags.UniqueItems,
        { strict: true }
      >({}),
    ),
    {
      type: "array",
      items: {
        type: "string",
        description: "@minLength 1",
      },
      description: ["@minItems 1", "@maxItems 3", "@uniqueItems"].join("\n"),
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
