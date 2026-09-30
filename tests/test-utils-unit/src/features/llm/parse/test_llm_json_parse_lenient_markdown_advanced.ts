import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that fence recovery handles whitespace and incomplete content.
 *
 * A fence selects its first content block, while empty content must fail rather
 * than invent a value.
 *
 * 1. Exercise marker/closer whitespace, multiple blocks, empty/whitespace-only
 *    content, incomplete nesting, CRLF and surrounding prose.
 * 2. Compare the retained results and original assertion outcomes.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse calls assert the authored success, data and diagnostic distinctions, preserving every original input, assertion title and outcome.
 * @evidence contracts/testing.md#independent-expectations Authored literal values and the maintained JSON/recovery contract establish expectations independently of parser output. Diagnostic subsets pin selected expected fields rather than every diagnostic detail.
 * @evidence contracts/testing.md#distinguishing-cases This case owns marker/closer whitespace, multiple blocks, empty/whitespace-only content, incomplete nesting, CRLF and surrounding prose; complementary valid/invalid spellings execute in the other direct parser units rather than repeating native preparation.
 * @evidence contracts/testing.md#execution-ownership test-utils-unit start explicitly registers this exported case with node:test. Its portable utility calls use the plugin-free oracle; the former transformed-suite entry is removed and no consumer installation, native producer or host is needed.
 */
export const test_llm_json_parse_lenient_markdown_advanced = (): void => {
  // Markdown with extra whitespace after ```json
  const r1 = LlmJson.parse('```json   \n{"key": 1}\n```');
  TestEquality.equals("extra-ws-success", r1.success, true);
  if (r1.success) TestEquality.equals("extra-ws-data", r1.data, { key: 1 });

  // Multiple code blocks - should extract first
  const r2 = LlmJson.parse(
    'First:\n```json\n{"first": true}\n```\nSecond:\n```json\n{"second": true}\n```',
  );
  TestEquality.equals("multi-block-success", r2.success, true);
  if (r2.success)
    TestEquality.equals("multi-block-data", r2.data, { first: true });

  // Code block with trailing whitespace before closing
  const r3 = LlmJson.parse('```json\n{"key": 1}\n  ```');
  TestEquality.equals("trailing-ws-close-success", r3.success, true);

  // Markdown block with empty content
  const r4 = LlmJson.parse("```json\n\n```");
  TestEquality.equals("empty-block-success", r4.success, false);
  if (!r4.success)
    TestEquality.subset(
      "empty-block-errors",
      [{ expected: "JSON value" }],
      r4.errors,
    );

  // Markdown block with only whitespace content
  const r5 = LlmJson.parse("```json\n   \n```");
  TestEquality.equals("ws-block-success", r5.success, false);
  if (!r5.success)
    TestEquality.subset(
      "ws-block-errors",
      [{ expected: "JSON value" }],
      r5.errors,
    );

  // Markdown block containing incomplete JSON
  const r6 = LlmJson.parse('```json\n{"name": "test", "items": [1, 2\n```');
  TestEquality.equals("incomplete-block-success", r6.success, true);
  if (r6.success)
    TestEquality.equals("incomplete-block-data", r6.data, {
      name: "test",
      items: [1, 2],
    });

  // Markdown block with CRLF line endings
  const r7 = LlmJson.parse('```json\r\n{"key": "value"}\r\n```');
  TestEquality.equals("crlf-block-success", r7.success, true);
  if (r7.success)
    TestEquality.equals("crlf-block-data", r7.data, { key: "value" });

  // Markdown with backtick count after ```json tag
  const r8 = LlmJson.parse("Here is data:\n\n```json\n[1, 2, 3]\n```\n\nDone.");
  TestEquality.equals("surrounded-success", r8.success, true);
  if (r8.success) TestEquality.equals("surrounded-data", r8.data, [1, 2, 3]);
};
