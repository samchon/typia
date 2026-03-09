import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_markdown_advanced = (): void => {
  // Markdown with extra whitespace after ```json
  const r1 = LlmJson.parse('```json   \n{"key": 1}\n```');
  TestValidator.equals("extra-ws-success", r1.success, true);
  if (r1.success) TestValidator.equals("extra-ws-data", r1.data, { key: 1 });

  // Multiple code blocks - should extract first
  const r2 = LlmJson.parse(
    'First:\n```json\n{"first": true}\n```\nSecond:\n```json\n{"second": true}\n```',
  );
  TestValidator.equals("multi-block-success", r2.success, true);
  if (r2.success)
    TestValidator.equals("multi-block-data", r2.data, { first: true });

  // Code block with trailing whitespace before closing
  const r3 = LlmJson.parse('```json\n{"key": 1}\n  ```');
  TestValidator.equals("trailing-ws-close-success", r3.success, true);

  // Markdown block with empty content
  const r4 = LlmJson.parse("```json\n\n```");
  TestValidator.equals("empty-block-success", r4.success, false);
  if (!r4.success)
    TestValidator.equals("empty-block-errors", [{ expected: "JSON value" }], r4.errors);

  // Markdown block with only whitespace content
  const r5 = LlmJson.parse("```json\n   \n```");
  TestValidator.equals("ws-block-success", r5.success, false);
  if (!r5.success)
    TestValidator.equals("ws-block-errors", [{ expected: "JSON value" }], r5.errors);

  // Markdown block containing incomplete JSON
  const r6 = LlmJson.parse(
    '```json\n{"name": "test", "items": [1, 2\n```',
  );
  TestValidator.equals("incomplete-block-success", r6.success, true);
  if (r6.success)
    TestValidator.equals("incomplete-block-data", r6.data, {
      name: "test",
      items: [1, 2],
    });

  // Markdown block with CRLF line endings
  const r7 = LlmJson.parse('```json\r\n{"key": "value"}\r\n```');
  TestValidator.equals("crlf-block-success", r7.success, true);
  if (r7.success)
    TestValidator.equals("crlf-block-data", r7.data, { key: "value" });

  // Markdown with backtick count after ```json tag
  const r8 = LlmJson.parse(
    'Here is data:\n\n```json\n[1, 2, 3]\n```\n\nDone.',
  );
  TestValidator.equals("surrounded-success", r8.success, true);
  if (r8.success)
    TestValidator.equals("surrounded-data", r8.data, [1, 2, 3]);
};
