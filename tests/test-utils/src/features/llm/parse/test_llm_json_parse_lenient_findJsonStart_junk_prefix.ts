import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_findJsonStart_junk_prefix = (): void => {
  // Junk with parentheses before JSON
  const r1 = LlmJson.parse(
    'The result (as requested) is: {"value": 42}',
  );
  TestValidator.equals("parens-junk-success", r1.success, true);
  if (r1.success)
    TestValidator.equals("parens-junk-data", r1.data, { value: 42 });

  // Junk with colons and equals before JSON
  const r2 = LlmJson.parse(
    'function_name(args) => result = {"answer": true}',
  );
  TestValidator.equals("complex-junk-success", r2.success, true);
  if (r2.success)
    TestValidator.equals("complex-junk-data", r2.data, { answer: true });

  // Junk with numbers before JSON
  const r3 = LlmJson.parse('Step 1 of 3: {"status": "ok"}');
  TestValidator.equals("number-junk-success", r3.success, true);
  if (r3.success)
    TestValidator.equals("number-junk-data", r3.data, { status: "ok" });

  // Junk with quoted strings before JSON object
  const r4 = LlmJson.parse(
    'I said "hello" and then got: {"response": "hi"}',
  );
  TestValidator.equals("quoted-junk-success", r4.success, true);
  if (r4.success)
    TestValidator.equals("quoted-junk-data", r4.data, { response: "hi" });

  // Very long junk prefix
  const longPrefix = "This is a very long explanation about why the following JSON data is important. It contains multiple sentences and goes on for quite a while before finally presenting the actual JSON content. Here it is: ";
  const r5 = LlmJson.parse(longPrefix + '{"data": "found"}');
  TestValidator.equals("long-junk-success", r5.success, true);
  if (r5.success)
    TestValidator.equals("long-junk-data", r5.data, { data: "found" });

  // Junk with array notation that should be skipped
  const r6 = LlmJson.parse(
    'See items at index [0] and [1]: [10, 20, 30]',
  );
  TestValidator.equals("arr-ref-junk-success", r6.success, true);
  // Should find first [ which is [0] - this tests the behavior of findJsonStart
  // findJsonStart finds the first { or [ outside strings

  // Trailing junk after array
  const r7 = LlmJson.parse('[1, 2, 3] and that is all');
  TestValidator.equals("trail-arr-success", r7.success, true);
  if (r7.success)
    TestValidator.equals("trail-arr-data", r7.data, [1, 2, 3]);

  // Trailing JSON-like junk (should not affect result)
  const r8 = LlmJson.parse('{"first": 1} {"second": 2}');
  TestValidator.equals("trailing-obj-success", r8.success, true);
  if (r8.success)
    TestValidator.equals("trailing-obj-data", r8.data, { first: 1 });

  // Junk with newlines and tabs
  const r9 = LlmJson.parse(
    'Result:\n\t\t{"indented": true}',
  );
  TestValidator.equals("indented-junk-success", r9.success, true);
  if (r9.success)
    TestValidator.equals("indented-junk-data", r9.data, { indented: true });

  // Simple explanatory text before object
  const r10 = LlmJson.parse(
    'Here is the JSON you requested: {"name": "John"}',
  );
  TestValidator.equals("simple-obj-prefix-success", r10.success, true);
  if (r10.success)
    TestValidator.equals("simple-obj-prefix-data", r10.data, { name: "John" });

  // Explanatory text before array
  const r11 = LlmJson.parse("Sure! Here's the list: [1, 2, 3]");
  TestValidator.equals("simple-arr-prefix-success", r11.success, true);
  if (r11.success)
    TestValidator.equals("simple-arr-prefix-data", r11.data, [1, 2, 3]);

  // Decorative separators before JSON
  const r12 = LlmJson.parse('\n\n***\n{"key": "value"}');
  TestValidator.equals("decorative-prefix-success", r12.success, true);
  if (r12.success)
    TestValidator.equals("decorative-prefix-data", r12.data, { key: "value" });

  // Japanese text as junk prefix
  const r13 = LlmJson.parse('日本語テキスト {"msg": "hello"}');
  TestValidator.equals("jp-prefix-success", r13.success, true);
  if (r13.success)
    TestValidator.equals("jp-prefix-data", r13.data, { msg: "hello" });

  // Korean text as junk prefix
  const r14 = LlmJson.parse('한국어 텍스트입니다 {"msg": "hello"}');
  TestValidator.equals("kr-prefix-success", r14.success, true);
  if (r14.success)
    TestValidator.equals("kr-prefix-data", r14.data, { msg: "hello" });

  // Chinese text as junk prefix
  const r15 = LlmJson.parse('中文文本 {"msg": "hello"}');
  TestValidator.equals("cn-prefix-success", r15.success, true);
  if (r15.success)
    TestValidator.equals("cn-prefix-data", r15.data, { msg: "hello" });
};
