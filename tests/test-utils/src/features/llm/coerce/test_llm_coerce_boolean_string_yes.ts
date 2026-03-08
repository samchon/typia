import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IBool {
  flag: boolean;
}

export const test_llm_coerce_boolean_string_yes = (): void => {
  const parameters = typia.llm.parameters<IBool>();

  // Test "yes" -> true
  const yes = { flag: "yes" as unknown };
  const result1 = LlmJson.coerce<IBool>(parameters, yes);
  TestValidator.equals("yes -> true", result1.flag, true);

  // Test "YES" -> true (case insensitive)
  const YES = { flag: "YES" as unknown };
  const result2 = LlmJson.coerce<IBool>(parameters, YES);
  TestValidator.equals("YES -> true", result2.flag, true);

  // Test "y" -> true
  const y = { flag: "y" as unknown };
  const result3 = LlmJson.coerce<IBool>(parameters, y);
  TestValidator.equals("y -> true", result3.flag, true);

  // Test "on" -> true
  const on = { flag: "on" as unknown };
  const result4 = LlmJson.coerce<IBool>(parameters, on);
  TestValidator.equals("on -> true", result4.flag, true);
};
