import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

/**
 * Tests that primitive values (numbers, strings, booleans, null)
 * inside markdown code blocks are correctly extracted and parsed.
 *
 * All markdown tests in the suite use objects/arrays inside code blocks.
 * This test verifies the interaction between markdown extraction and
 * primitive parsing.
 */
export const test_llm_json_parse_lenient_markdown_primitive = (): void => {
  // Number in markdown code block
  const r1 = LlmJson.parse("```json\n42\n```");
  TestValidator.equals("md-number-success", r1.success, true);
  if (r1.success) TestValidator.equals("md-number-data", r1.data, 42);

  // Negative number in markdown code block
  const r2 = LlmJson.parse("```json\n-3.14\n```");
  TestValidator.equals("md-neg-number-success", r2.success, true);
  if (r2.success) TestValidator.equals("md-neg-number-data", r2.data, -3.14);

  // String in markdown code block
  const r3 = LlmJson.parse('```json\n"hello world"\n```');
  TestValidator.equals("md-string-success", r3.success, true);
  if (r3.success)
    TestValidator.equals("md-string-data", r3.data, "hello world");

  // Boolean true in markdown code block
  const r4 = LlmJson.parse("```json\ntrue\n```");
  TestValidator.equals("md-true-success", r4.success, true);
  if (r4.success) TestValidator.equals("md-true-data", r4.data, true);

  // Boolean false in markdown code block
  const r5 = LlmJson.parse("```json\nfalse\n```");
  TestValidator.equals("md-false-success", r5.success, true);
  if (r5.success) TestValidator.equals("md-false-data", r5.data, false);

  // null in markdown code block
  const r6 = LlmJson.parse("```json\nnull\n```");
  TestValidator.equals("md-null-success", r6.success, true);
  if (r6.success) TestValidator.equals("md-null-data", r6.data, null);

  // Number with surrounding text
  const r7 = LlmJson.parse("The answer is:\n```json\n42\n```\nDone.");
  TestValidator.equals("md-number-context-success", r7.success, true);
  if (r7.success) TestValidator.equals("md-number-context-data", r7.data, 42);

  // String with escapes in markdown code block
  const r8 = LlmJson.parse('```json\n"line1\\nline2"\n```');
  TestValidator.equals("md-esc-string-success", r8.success, true);
  if (r8.success)
    TestValidator.equals("md-esc-string-data", r8.data, "line1\nline2");
};
