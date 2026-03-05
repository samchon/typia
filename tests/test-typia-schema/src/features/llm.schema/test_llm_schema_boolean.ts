import { TestValidator } from "@nestia/e2e";
import { LlmTypeChecker } from "@typia/utils";
import typia from "typia";

export const test_llm_schema_boolean = (): void => {
  const schema = typia.llm.schema<boolean>({});

  TestValidator.predicate("is boolean type", () =>
    LlmTypeChecker.isBoolean(schema),
  );
};
