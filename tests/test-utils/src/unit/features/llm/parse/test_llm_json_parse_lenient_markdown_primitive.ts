import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that fenced primitive values retain their JSON meaning.
 *
 * Fence extraction must permit primitives as well as containers and preserve
 * decoded string characters.
 *
 * 1. Exercise positive/negative numbers, strings, both booleans, null, surrounding
 *    prose and an escaped newline.
 * 2. Compare the retained results with literal expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse calls assert the authored success, data and diagnostic distinctions.
 * @evidence contracts/testing.md#independent-expectations Authored literal values and the maintained JSON/recovery contract establish expectations independently of parser output.
 * @evidence contracts/testing.md#distinguishing-cases This case owns positive/negative numbers, strings, both booleans, null, surrounding prose and an escaped newline; complementary valid/invalid spellings execute in the other direct parser units rather than repeating native preparation.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported case with node:test. Its portable utility calls use the plugin-free oracle; no consumer installation, native producer or host is needed.
 */
export const test_llm_json_parse_lenient_markdown_primitive = (): void => {
  // Number in markdown code block
  const r1 = LlmJson.parse("```json\n42\n```");
  TestEquality.equals("md-number-success", r1.success, true);
  if (r1.success) TestEquality.equals("md-number-data", r1.data, 42);

  // Negative number in markdown code block
  const r2 = LlmJson.parse("```json\n-3.14\n```");
  TestEquality.equals("md-neg-number-success", r2.success, true);
  if (r2.success) TestEquality.equals("md-neg-number-data", r2.data, -3.14);

  // String in markdown code block
  const r3 = LlmJson.parse('```json\n"hello world"\n```');
  TestEquality.equals("md-string-success", r3.success, true);
  if (r3.success) TestEquality.equals("md-string-data", r3.data, "hello world");

  // Boolean true in markdown code block
  const r4 = LlmJson.parse("```json\ntrue\n```");
  TestEquality.equals("md-true-success", r4.success, true);
  if (r4.success) TestEquality.equals("md-true-data", r4.data, true);

  // Boolean false in markdown code block
  const r5 = LlmJson.parse("```json\nfalse\n```");
  TestEquality.equals("md-false-success", r5.success, true);
  if (r5.success) TestEquality.equals("md-false-data", r5.data, false);

  // null in markdown code block
  const r6 = LlmJson.parse("```json\nnull\n```");
  TestEquality.equals("md-null-success", r6.success, true);
  if (r6.success) TestEquality.equals("md-null-data", r6.data, null);

  // Number with surrounding text
  const r7 = LlmJson.parse("The answer is:\n```json\n42\n```\nDone.");
  TestEquality.equals("md-number-context-success", r7.success, true);
  if (r7.success) TestEquality.equals("md-number-context-data", r7.data, 42);

  // String with escapes in markdown code block
  const r8 = LlmJson.parse('```json\n"line1\\nline2"\n```');
  TestEquality.equals("md-esc-string-success", r8.success, true);
  if (r8.success)
    TestEquality.equals("md-esc-string-data", r8.data, "line1\nline2");
};
