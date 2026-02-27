import { TestValidator } from "@nestia/e2e";
import { LlmTypeChecker } from "@typia/utils";
import typia, { tags } from "typia";

export const test_llm_schema_array = (): void => {
  const schema = typia.llm.schema<string[]>({});

  TestValidator.predicate("is array type", () => LlmTypeChecker.isArray(schema));

  if (LlmTypeChecker.isArray(schema)) {
    TestValidator.predicate("items is string", () =>
      LlmTypeChecker.isString(schema.items),
    );
  }

  // array with constraints
  const constrained = typia.llm.schema<
    string[] & tags.MinItems<1> & tags.MaxItems<10>
  >({});
  if (LlmTypeChecker.isArray(constrained)) {
    TestValidator.equals("minItems", constrained.minItems, 1);
    TestValidator.equals("maxItems", constrained.maxItems, 10);
  }
};
