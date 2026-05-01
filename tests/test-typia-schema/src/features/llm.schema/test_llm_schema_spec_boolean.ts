import { TestValidator } from "@nestia/e2e";
import typia from "typia";

export const test_llm_schema_spec_boolean = (): void => {
  TestValidator.equals("boolean", clean(typia.llm.schema<boolean>({})), {
    type: "boolean",
  });
  TestValidator.equals("true literal", clean(typia.llm.schema<true>({})), {
    type: "boolean",
    enum: [true],
  });
  TestValidator.equals("false literal", clean(typia.llm.schema<false>({})), {
    type: "boolean",
    enum: [false],
  });
  TestValidator.equals(
    "boolean literal union collapses to boolean",
    clean(typia.llm.schema<true | false>({})),
    {
      type: "boolean",
    },
  );
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
