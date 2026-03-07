import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_markdown_block = (): void => {
  // Basic markdown code block
  const r1 = LlmJson.parse('```json\n{"name": "test"}\n```');
  TestValidator.equals("basic-markdown-success", r1.success, true);
  if (r1.success) TestValidator.equals("basic-markdown-data", r1.data, { name: "test" });

  // Markdown with text before
  const r2 = LlmJson.parse('Here is the result:\n\n```json\n{"value": 42}\n```');
  TestValidator.equals("text-before-success", r2.success, true);
  if (r2.success) TestValidator.equals("text-before-data", r2.data, { value: 42 });

  // Markdown with text after
  const r3 = LlmJson.parse('```json\n{"done": true}\n```\nThat is all!');
  TestValidator.equals("text-after-success", r3.success, true);
  if (r3.success) TestValidator.equals("text-after-data", r3.data, { done: true });

  // Unclosed markdown block
  const r4 = LlmJson.parse('```json\n{"partial": "data"');
  TestValidator.equals("unclosed-markdown-success", r4.success, true);
  if (r4.success) TestValidator.equals("unclosed-markdown-data", r4.data, { partial: "data" });

  // Markdown inside JSON string - should NOT extract
  const r5 = LlmJson.parse('{"code": "```json\\n{}\\n```"}');
  TestValidator.equals("markdown-in-string-success", r5.success, true);
  if (r5.success) TestValidator.equals("markdown-in-string-data", r5.data, { code: "```json\n{}\n```" });

  // Object starting before markdown - should NOT extract
  const r6 = LlmJson.parse('{"text": "see ```json block"}');
  TestValidator.equals("obj-before-markdown-success", r6.success, true);
  if (r6.success) TestValidator.equals("obj-before-markdown-data", r6.data, { text: "see ```json block" });

  // Array starting before markdown - should NOT extract
  const r7 = LlmJson.parse('["```json", "test"]');
  TestValidator.equals("arr-before-markdown-success", r7.success, true);
  if (r7.success) TestValidator.equals("arr-before-markdown-data", r7.data, ["```json", "test"]);

  // String JSON starting before markdown - should NOT extract
  const r8 = LlmJson.parse('"contains ```json block"');
  TestValidator.equals("str-before-markdown-success", r8.success, true);
  if (r8.success) TestValidator.equals("str-before-markdown-data", r8.data, "contains ```json block");

  // Plain ``` without json - should NOT extract
  const r9 = LlmJson.parse('```\n{"plain": true}\n```');
  TestValidator.equals("plain-backticks-success", r9.success, true);
  // Without ```json, it tries to parse as regular JSON and finds the object
  if (r9.success) TestValidator.equals("plain-backticks-data", r9.data, { plain: true });

  // Markdown with array content
  const r10 = LlmJson.parse('Result:\n```json\n[1, 2, 3]\n```');
  TestValidator.equals("markdown-array-success", r10.success, true);
  if (r10.success) TestValidator.equals("markdown-array-data", r10.data, [1, 2, 3]);

  // Markdown with nested objects
  const r11 = LlmJson.parse('```json\n{"outer": {"inner": true}}\n```');
  TestValidator.equals("markdown-nested-success", r11.success, true);
  if (r11.success) TestValidator.equals("markdown-nested-data", r11.data, { outer: { inner: true } });

  // Markdown with comments inside
  const r12 = LlmJson.parse('```json\n{\n  // comment\n  "key": 1\n}\n```');
  TestValidator.equals("markdown-with-comments-success", r12.success, true);
  if (r12.success) TestValidator.equals("markdown-with-comments-data", r12.data, { key: 1 });

  // Markdown with unquoted keys
  const r13 = LlmJson.parse('```json\n{name: "test"}\n```');
  TestValidator.equals("markdown-unquoted-keys-success", r13.success, true);
  if (r13.success) TestValidator.equals("markdown-unquoted-keys-data", r13.data, { name: "test" });
};
