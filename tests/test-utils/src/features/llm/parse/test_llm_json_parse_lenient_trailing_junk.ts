import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_trailing_junk = (): void => {
  // LLM may add explanatory text after JSON output
  // The parser should ignore trailing junk and return the valid JSON

  // Trailing text after object
  const result1 = LlmJson.parse('{"name": "test"} and some trailing text');
  TestEquality.equals("success1", result1.success, true);
  if (result1.success)
    TestEquality.equals("value1", result1.data, { name: "test" });

  // Trailing text after array
  const result2 = LlmJson.parse("[1, 2, 3] extra stuff here");
  TestEquality.equals("success2", result2.success, true);
  if (result2.success) TestEquality.equals("value2", result2.data, [1, 2, 3]);

  // Second JSON after first (should only parse first)
  const result3 = LlmJson.parse('{"a": 1}{"b": 2}');
  TestEquality.equals("success3", result3.success, true);
  if (result3.success) TestEquality.equals("value3", result3.data, { a: 1 });

  // Extra closing braces (second } is trailing junk)
  const result4 = LlmJson.parse('{"key": 1}}');
  TestEquality.equals("extra-brace-success", result4.success, true);
  if (result4.success)
    TestEquality.equals("extra-brace-data", result4.data, { key: 1 });

  // Extra closing brackets
  const result5 = LlmJson.parse("[1, 2]]");
  TestEquality.equals("extra-bracket-success", result5.success, true);
  if (result5.success)
    TestEquality.equals("extra-bracket-data", result5.data, [1, 2]);

  // Object then array (two separate JSON values, first wins)
  const result6 = LlmJson.parse('{"a": 1}[2, 3]');
  TestEquality.equals("obj-then-arr-success", result6.success, true);
  if (result6.success)
    TestEquality.equals("obj-then-arr-data", result6.data, { a: 1 });
};
