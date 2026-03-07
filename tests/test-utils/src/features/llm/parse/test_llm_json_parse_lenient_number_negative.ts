import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_number_negative = (): void => {
  // Negative integer
  const result1 = LlmJson.parse('{"value": -42}');
  TestValidator.equals("success1", result1.success, true);
  if (result1.success) TestValidator.equals("value1", result1.data, { value: -42 });

  // Negative decimal
  const result2 = LlmJson.parse('{"value": -3.14}');
  TestValidator.equals("success2", result2.success, true);
  if (result2.success) TestValidator.equals("value2", result2.data, { value: -3.14 });
};
