import { TestValidator } from "@nestia/e2e";
import typia, { tags } from "typia";

export const test_llm_schema_spec_strict_number = (): void => {
  TestValidator.equals(
    "strict number shifts constraints",
    clean(
      typia.llm.schema<
        number &
          tags.Minimum<1> &
          tags.ExclusiveMaximum<10> &
          tags.MultipleOf<1> &
          tags.Default<3>,
        { strict: true }
      >({}),
    ),
    {
      type: "number",
      description: ["@minimum 1", "@exclusiveMaximum 10", "@multipleOf 1"].join(
        "\n",
      ),
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
