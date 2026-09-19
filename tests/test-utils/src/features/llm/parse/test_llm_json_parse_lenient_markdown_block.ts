import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_markdown_block = (): void => {
  // Basic markdown code block
  const r1 = LlmJson.parse('```json\n{"name": "test"}\n```');
  TestEquality.equals("basic-markdown-success", r1.success, true);
  if (r1.success)
    TestEquality.equals("basic-markdown-data", r1.data, { name: "test" });

  // Markdown with text before
  const r2 = LlmJson.parse(
    'Here is the result:\n\n```json\n{"value": 42}\n```',
  );
  TestEquality.equals("text-before-success", r2.success, true);
  if (r2.success)
    TestEquality.equals("text-before-data", r2.data, { value: 42 });

  // Markdown with text after
  const r3 = LlmJson.parse('```json\n{"done": true}\n```\nThat is all!');
  TestEquality.equals("text-after-success", r3.success, true);
  if (r3.success)
    TestEquality.equals("text-after-data", r3.data, { done: true });

  // Unclosed markdown block
  const r4 = LlmJson.parse('```json\n{"partial": "data"');
  TestEquality.equals("unclosed-markdown-success", r4.success, true);
  if (r4.success)
    TestEquality.equals("unclosed-markdown-data", r4.data, {
      partial: "data",
    });

  // Markdown inside JSON string - should NOT extract
  const r5 = LlmJson.parse('{"code": "```json\\n{}\\n```"}');
  TestEquality.equals("markdown-in-string-success", r5.success, true);
  if (r5.success)
    TestEquality.equals("markdown-in-string-data", r5.data, {
      code: "```json\n{}\n```",
    });

  // Object starting before markdown - should NOT extract
  const r6 = LlmJson.parse('{"text": "see ```json block"}');
  TestEquality.equals("obj-before-markdown-success", r6.success, true);
  if (r6.success)
    TestEquality.equals("obj-before-markdown-data", r6.data, {
      text: "see ```json block",
    });

  // Array starting before markdown - should NOT extract
  const r7 = LlmJson.parse('["```json", "test"]');
  TestEquality.equals("arr-before-markdown-success", r7.success, true);
  if (r7.success)
    TestEquality.equals("arr-before-markdown-data", r7.data, [
      "```json",
      "test",
    ]);

  // String JSON starting before markdown - should NOT extract
  const r8 = LlmJson.parse('"contains ```json block"');
  TestEquality.equals("str-before-markdown-success", r8.success, true);
  if (r8.success)
    TestEquality.equals(
      "str-before-markdown-data",
      r8.data,
      "contains ```json block",
    );

  // Plain ``` without json - should NOT extract
  const r9 = LlmJson.parse('```\n{"plain": true}\n```');
  TestEquality.equals("plain-backticks-success", r9.success, true);
  // Without ```json, it tries to parse as regular JSON and finds the object
  if (r9.success)
    TestEquality.equals("plain-backticks-data", r9.data, { plain: true });

  // Markdown with array content
  const r10 = LlmJson.parse("Result:\n```json\n[1, 2, 3]\n```");
  TestEquality.equals("markdown-array-success", r10.success, true);
  if (r10.success)
    TestEquality.equals("markdown-array-data", r10.data, [1, 2, 3]);

  // Markdown with nested objects
  const r11 = LlmJson.parse('```json\n{"outer": {"inner": true}}\n```');
  TestEquality.equals("markdown-nested-success", r11.success, true);
  if (r11.success)
    TestEquality.equals("markdown-nested-data", r11.data, {
      outer: { inner: true },
    });

  // Markdown with comments inside
  const r12 = LlmJson.parse('```json\n{\n  // comment\n  "key": 1\n}\n```');
  TestEquality.equals("markdown-with-comments-success", r12.success, true);
  if (r12.success)
    TestEquality.equals("markdown-with-comments-data", r12.data, { key: 1 });

  // Markdown with unquoted keys
  const r13 = LlmJson.parse('```json\n{name: "test"}\n```');
  TestEquality.equals("markdown-unquoted-keys-success", r13.success, true);
  if (r13.success)
    TestEquality.equals("markdown-unquoted-keys-data", r13.data, {
      name: "test",
    });
};
