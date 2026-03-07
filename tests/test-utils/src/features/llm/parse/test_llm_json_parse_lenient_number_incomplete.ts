import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_number_incomplete = (): void => {
  // Incomplete negative (just minus sign) - Number("-") = NaN -> 0
  const result1 = LlmJson.parse('{"value": -');
  TestValidator.equals("success1", result1.success, true);
  if (result1.success) TestValidator.equals("value1", result1.data, { value: 0 });

  // Incomplete decimal (trailing dot) - Number("1.") = 1
  const result2 = LlmJson.parse('{"value": 1.');
  TestValidator.equals("success2", result2.success, true);
  if (result2.success) TestValidator.equals("value2", result2.data, { value: 1 });

  // Incomplete exponent - Number("1e") = NaN -> 0
  const result3 = LlmJson.parse('{"value": 1e');
  TestValidator.equals("success3", result3.success, true);
  if (result3.success) TestValidator.equals("value3", result3.data, { value: 0 });

  // Incomplete exponent with sign - Number("1e-") = NaN -> 0
  const result4 = LlmJson.parse('{"value": 1e-');
  TestValidator.equals("success4", result4.success, true);
  if (result4.success) TestValidator.equals("value4", result4.data, { value: 0 });
};
