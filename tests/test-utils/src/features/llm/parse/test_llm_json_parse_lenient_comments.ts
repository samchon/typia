import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_comments = (): void => {
  // Single-line comment after value
  const r1 = LlmJson.parse('{"name": "test" // this is a comment\n}');
  TestEquality.equals("single-line-after-value-success", r1.success, true);
  if (r1.success)
    TestEquality.equals("single-line-after-value-data", r1.data, {
      name: "test",
    });

  // Multi-line comment between values
  const r2 = LlmJson.parse('{"name": /* comment */ "test"}');
  TestEquality.equals("multi-line-between-success", r2.success, true);
  if (r2.success)
    TestEquality.equals("multi-line-between-data", r2.data, { name: "test" });

  // Comment between key and colon
  const r3 = LlmJson.parse('{"name" /* key */ : "value"}');
  TestEquality.equals("comment-key-colon-success", r3.success, true);
  if (r3.success)
    TestEquality.equals("comment-key-colon-data", r3.data, { name: "value" });

  // Comment in array
  const r4 = LlmJson.parse("[1, /* comment */ 2, 3]");
  TestEquality.equals("comment-array-success", r4.success, true);
  if (r4.success) TestEquality.equals("comment-array-data", r4.data, [1, 2, 3]);

  // Multiple single-line comments
  const r5 = LlmJson.parse('{// first\n"a": 1 // second\n}');
  TestEquality.equals("multiple-single-success", r5.success, true);
  if (r5.success)
    TestEquality.equals("multiple-single-data", r5.data, { a: 1 });

  // Comment at start of object
  const r6 = LlmJson.parse('{/* comment */ "key": 1}');
  TestEquality.equals("comment-start-success", r6.success, true);
  if (r6.success)
    TestEquality.equals("comment-start-data", r6.data, { key: 1 });

  // Comment at end before closing brace
  const r7 = LlmJson.parse('{"key": 1 /* comment */}');
  TestEquality.equals("comment-end-success", r7.success, true);
  if (r7.success) TestEquality.equals("comment-end-data", r7.data, { key: 1 });

  // Comment inside string should be preserved (not stripped)
  const r8 = LlmJson.parse('{"msg": "hello // not a comment"}');
  TestEquality.equals("comment-in-string-success", r8.success, true);
  if (r8.success)
    TestEquality.equals("comment-in-string-data", r8.data, {
      msg: "hello // not a comment",
    });

  // Multi-line comment inside string should be preserved
  const r9 = LlmJson.parse('{"msg": "hello /* not */ comment"}');
  TestEquality.equals("multiline-in-string-success", r9.success, true);
  if (r9.success)
    TestEquality.equals("multiline-in-string-data", r9.data, {
      msg: "hello /* not */ comment",
    });

  // Unclosed multi-line comment (lenient)
  const r10 = LlmJson.parse('{"a": 1 /* unclosed');
  TestEquality.equals("unclosed-multiline-success", r10.success, true);
  if (r10.success)
    TestEquality.equals("unclosed-multiline-data", r10.data, { a: 1 });

  // Empty comment
  const r11 = LlmJson.parse('{"a": /**/ 1}');
  TestEquality.equals("empty-comment-success", r11.success, true);
  if (r11.success)
    TestEquality.equals("empty-comment-data", r11.data, { a: 1 });

  // Comment only line
  const r12 = LlmJson.parse('{\n// comment only\n"a": 1\n}');
  TestEquality.equals("comment-only-line-success", r12.success, true);
  if (r12.success)
    TestEquality.equals("comment-only-line-data", r12.data, { a: 1 });

  // Consecutive comments
  const r13 = LlmJson.parse('{"a": /* first */ /* second */ 1}');
  TestEquality.equals("consecutive-comments-success", r13.success, true);
  if (r13.success)
    TestEquality.equals("consecutive-comments-data", r13.data, { a: 1 });
};
