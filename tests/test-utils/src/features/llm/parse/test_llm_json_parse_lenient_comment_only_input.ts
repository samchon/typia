import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_comment_only_input = (): void => {
  // Single-line comment only
  const r1 = LlmJson.parse("// this is a comment");
  TestEquality.equals("single-comment-success", r1.success, false);
  if (!r1.success)
    TestEquality.subset(
      "single-comment-errors",
      [{ expected: "JSON value" }],
      r1.errors,
    );

  // Multi-line comment only
  const r2 = LlmJson.parse("/* this is a comment */");
  TestEquality.equals("multi-comment-success", r2.success, false);
  if (!r2.success)
    TestEquality.subset(
      "multi-comment-errors",
      [{ expected: "JSON value" }],
      r2.errors,
    );

  // Multiple comments, no JSON
  const r3 = LlmJson.parse(
    "// first comment\n// second comment\n/* block comment */",
  );
  TestEquality.equals("multi-comments-success", r3.success, false);
  if (!r3.success)
    TestEquality.subset(
      "multi-comments-errors",
      [{ expected: "JSON value" }],
      r3.errors,
    );

  // Comment followed by JSON
  const r4 = LlmJson.parse('// comment\n{"key": 1}');
  TestEquality.equals("comment-then-json-success", r4.success, true);
  if (r4.success)
    TestEquality.equals("comment-then-json-data", r4.data, { key: 1 });

  // Block comment followed by JSON
  const r5 = LlmJson.parse('/* comment */ {"key": 1}');
  TestEquality.equals("block-then-json-success", r5.success, true);
  if (r5.success)
    TestEquality.equals("block-then-json-data", r5.data, { key: 1 });

  // Unclosed block comment only
  const r6 = LlmJson.parse("/* unclosed comment");
  TestEquality.equals("unclosed-comment-success", r6.success, false);
  if (!r6.success)
    TestEquality.subset(
      "unclosed-comment-errors",
      [{ expected: "JSON value" }],
      r6.errors,
    );

  // Comment followed by primitive
  const r7 = LlmJson.parse("// comment\n42");
  TestEquality.equals("comment-then-num-success", r7.success, true);
  if (r7.success) TestEquality.equals("comment-then-num-data", r7.data, 42);

  // Comment followed by string
  const r8 = LlmJson.parse('// comment\n"hello"');
  TestEquality.equals("comment-then-str-success", r8.success, true);
  if (r8.success)
    TestEquality.equals("comment-then-str-data", r8.data, "hello");

  // Comment followed by boolean
  const r9 = LlmJson.parse("// comment\ntrue");
  TestEquality.equals("comment-then-bool-success", r9.success, true);
  if (r9.success) TestEquality.equals("comment-then-bool-data", r9.data, true);

  // Whitespace + comments + whitespace, no JSON
  const r10 = LlmJson.parse("   // comment\n   /* block */   ");
  TestEquality.equals("ws-comments-ws-success", r10.success, false);
  if (!r10.success)
    TestEquality.subset(
      "ws-comments-ws-errors",
      [{ expected: "JSON value" }],
      r10.errors,
    );

  // Empty single-line comment
  const r11 = LlmJson.parse('//\n{"key": 1}');
  TestEquality.equals("empty-single-comment-success", r11.success, true);
  if (r11.success)
    TestEquality.equals("empty-single-comment-data", r11.data, { key: 1 });

  // Comment with Windows line ending
  const r12 = LlmJson.parse('// comment\r\n{"key": 1}');
  TestEquality.equals("crlf-comment-success", r12.success, true);
  if (r12.success)
    TestEquality.equals("crlf-comment-data", r12.data, { key: 1 });

  // Unclosed multi-line comment in junk prefix absorbs everything
  const r13 = LlmJson.parse('/* unclosed {"key": 1}');
  TestEquality.equals("unclosed-junk-comment-success", r13.success, false);
  if (!r13.success)
    TestEquality.subset(
      "unclosed-junk-comment-errors",
      [{ expected: "JSON value" }],
      r13.errors,
    );

  const r14 = LlmJson.parse("/* unclosed [1, 2]");
  TestEquality.equals("unclosed-junk-comment-arr-success", r14.success, false);
  if (!r14.success)
    TestEquality.subset(
      "unclosed-junk-comment-arr-errors",
      [{ expected: "JSON value" }],
      r14.errors,
    );

  const r15 = LlmJson.parse("/* just a comment");
  TestEquality.equals("unclosed-comment-just-success", r15.success, false);
  if (!r15.success)
    TestEquality.subset(
      "unclosed-comment-just-errors",
      [{ expected: "JSON value" }],
      r15.errors,
    );
};
