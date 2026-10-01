import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that trailing text cannot replace the first recovered value.
 *
 * Extra prose, closers and another JSON value must not be combined with the
 * completed first container.
 *
 * 1. Exercise object/array suffix prose, adjacent objects, extra closers and an
 *    object followed by an array.
 * 2. Compare the retained results and original assertion outcomes.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse calls assert the authored success, data and diagnostic distinctions, preserving every original input, assertion title and outcome.
 * @evidence contracts/testing.md#independent-expectations Authored literal values and the maintained JSON/recovery contract establish expectations independently of parser output.
 * @evidence contracts/testing.md#distinguishing-cases This case owns object/array suffix prose, adjacent objects, extra closers and an object followed by an array; complementary valid/invalid spellings execute in the other direct parser units rather than repeating native preparation.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported case with node:test. Its portable utility calls use the plugin-free oracle; the former transformed-suite entry is removed and no consumer installation, native producer or host is needed.
 */
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
