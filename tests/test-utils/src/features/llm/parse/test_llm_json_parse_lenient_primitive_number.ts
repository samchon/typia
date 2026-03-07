import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_primitive_number = (): void => {
  // Primitive number at root level (no junk skipping)
  const result1 = LlmJson.parse("42");
  TestValidator.equals("success1", result1.success, true);
  if (result1.success) TestValidator.equals("value1", result1.data, 42);

  // Negative number at root
  const result2 = LlmJson.parse("-123.45");
  TestValidator.equals("success2", result2.success, true);
  if (result2.success) TestValidator.equals("value2", result2.data, -123.45);

  // Number with leading whitespace
  const result3 = LlmJson.parse("  99");
  TestValidator.equals("success3", result3.success, true);
  if (result3.success) TestValidator.equals("value3", result3.data, 99);
};
