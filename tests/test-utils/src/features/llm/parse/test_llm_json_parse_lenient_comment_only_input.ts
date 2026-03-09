import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_comment_only_input = (): void => {
  // Single-line comment only
  const r1 = LlmJson.parse("// this is a comment");
  TestValidator.equals("single-comment-success", r1.success, false);

  // Multi-line comment only
  const r2 = LlmJson.parse("/* this is a comment */");
  TestValidator.equals("multi-comment-success", r2.success, false);

  // Multiple comments, no JSON
  const r3 = LlmJson.parse(
    "// first comment\n// second comment\n/* block comment */",
  );
  TestValidator.equals("multi-comments-success", r3.success, false);

  // Comment followed by JSON
  const r4 = LlmJson.parse("// comment\n{\"key\": 1}");
  TestValidator.equals("comment-then-json-success", r4.success, true);
  if (r4.success)
    TestValidator.equals("comment-then-json-data", r4.data, { key: 1 });

  // Block comment followed by JSON
  const r5 = LlmJson.parse("/* comment */ {\"key\": 1}");
  TestValidator.equals("block-then-json-success", r5.success, true);
  if (r5.success)
    TestValidator.equals("block-then-json-data", r5.data, { key: 1 });

  // Unclosed block comment only
  const r6 = LlmJson.parse("/* unclosed comment");
  TestValidator.equals("unclosed-comment-success", r6.success, false);

  // Comment followed by primitive
  const r7 = LlmJson.parse("// comment\n42");
  TestValidator.equals("comment-then-num-success", r7.success, true);
  if (r7.success)
    TestValidator.equals("comment-then-num-data", r7.data, 42);

  // Comment followed by string
  const r8 = LlmJson.parse('// comment\n"hello"');
  TestValidator.equals("comment-then-str-success", r8.success, true);
  if (r8.success)
    TestValidator.equals("comment-then-str-data", r8.data, "hello");

  // Comment followed by boolean
  const r9 = LlmJson.parse("// comment\ntrue");
  TestValidator.equals("comment-then-bool-success", r9.success, true);
  if (r9.success)
    TestValidator.equals("comment-then-bool-data", r9.data, true);

  // Whitespace + comments + whitespace, no JSON
  const r10 = LlmJson.parse("   // comment\n   /* block */   ");
  TestValidator.equals("ws-comments-ws-success", r10.success, false);

  // Empty single-line comment
  const r11 = LlmJson.parse("//\n{\"key\": 1}");
  TestValidator.equals("empty-single-comment-success", r11.success, true);
  if (r11.success)
    TestValidator.equals("empty-single-comment-data", r11.data, {
      key: 1,
    });

  // Comment with Windows line ending
  const r12 = LlmJson.parse("// comment\r\n{\"key\": 1}");
  TestValidator.equals("crlf-comment-success", r12.success, true);
  if (r12.success)
    TestValidator.equals("crlf-comment-data", r12.data, { key: 1 });

  // Unclosed multi-line comment in junk prefix absorbs everything
  const r13 = LlmJson.parse('/* unclosed {"key": 1}');
  TestValidator.equals("unclosed-junk-comment-success", r13.success, false);

  const r14 = LlmJson.parse("/* unclosed [1, 2]");
  TestValidator.equals("unclosed-junk-comment-arr-success", r14.success, false);

  const r15 = LlmJson.parse("/* just a comment");
  TestValidator.equals("unclosed-comment-just-success", r15.success, false);
};
