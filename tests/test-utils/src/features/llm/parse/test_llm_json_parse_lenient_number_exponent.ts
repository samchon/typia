import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_number_exponent = (): void => {
  // Exponent with lowercase e
  const result1 = LlmJson.parse('{"value": 1e10}');
  TestValidator.equals("success1", result1.success, true);
  if (result1.success) TestValidator.equals("value1", result1.data, { value: 1e10 });

  // Exponent with uppercase E
  const result2 = LlmJson.parse('{"value": 2.5E-3}');
  TestValidator.equals("success2", result2.success, true);
  if (result2.success) TestValidator.equals("value2", result2.data, { value: 2.5e-3 });

  // Exponent with explicit positive sign
  const result3 = LlmJson.parse('{"value": 1e+5}');
  TestValidator.equals("success3", result3.success, true);
  if (result3.success) TestValidator.equals("value3", result3.data, { value: 1e5 });
};
