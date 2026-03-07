import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_trailing_junk = (): void => {
  // LLM may add explanatory text after JSON output
  // The parser should ignore trailing junk and return the valid JSON

  // Trailing text after object
  const result1 = LlmJson.parse('{"name": "test"} and some trailing text');
  TestValidator.equals("success1", result1.success, true);
  if (result1.success) TestValidator.equals("value1", result1.data, { name: "test" });

  // Trailing text after array
  const result2 = LlmJson.parse('[1, 2, 3] extra stuff here');
  TestValidator.equals("success2", result2.success, true);
  if (result2.success) TestValidator.equals("value2", result2.data, [1, 2, 3]);

  // Second JSON after first (should only parse first)
  const result3 = LlmJson.parse('{"a": 1}{"b": 2}');
  TestValidator.equals("success3", result3.success, true);
  if (result3.success) TestValidator.equals("value3", result3.data, { a: 1 });
};
