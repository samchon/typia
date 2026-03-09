import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_junk_complex = (): void => {
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
};
