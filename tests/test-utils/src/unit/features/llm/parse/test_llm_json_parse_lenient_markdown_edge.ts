import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that fence boundary cases distinguish missing content and available
 * data.
 *
 * Missing or whitespace-only content must fail, while marker-line text must not
 * replace the following content value.
 *
 * 1. Exercise no newline, newline-only, same-line text, spaces, first-of-multiple
 *    blocks, quoted markers, CRLF and empty-gap fences.
 * 2. Compare the retained results and original assertion outcomes.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse calls assert the authored success, data and diagnostic distinctions.
 * @evidence contracts/testing.md#independent-expectations Authored literal values and the maintained JSON/recovery contract establish expectations independently of parser output. Diagnostic subsets pin selected expected fields rather than every diagnostic detail.
 * @evidence contracts/testing.md#distinguishing-cases This case owns no newline, newline-only, same-line text, spaces, first-of-multiple blocks, quoted markers, CRLF and empty-gap fences; complementary valid/invalid spellings execute in the other direct parser units rather than repeating native preparation.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported case with node:test. Its portable utility calls use the plugin-free oracle; no consumer installation, native producer or host is needed.
 */
export const test_llm_json_parse_lenient_markdown_edge = (): void => {
  // "```json" with no newline at all → extractMarkdownCodeBlock returns null
  // (contentStart >= input.length at line 186)
  const r1 = LlmJson.parse("```json");
  TestEquality.equals("no-newline-success", r1.success, false);
  if (!r1.success)
    TestEquality.subset(
      "no-newline-errors",
      [{ expected: "JSON value" }],
      r1.errors,
    );

  // "```json\n" with newline but nothing after → extracts empty string
  const r2 = LlmJson.parse("```json\n");
  TestEquality.equals("newline-only-success", r2.success, false);
  if (!r2.success)
    TestEquality.subset(
      "newline-only-errors",
      [{ expected: "JSON value" }],
      r2.errors,
    );

  // Content on same line as ```json marker (before newline)
  // The parser skips everything until newline, so {"a":1} is skipped
  const r3 = LlmJson.parse('```json {"a":1}\n{"b":2}\n```');
  TestEquality.equals("same-line-content-success", r3.success, true);
  if (r3.success)
    TestEquality.equals("same-line-content-data", r3.data, { b: 2 });

  // ```json followed by spaces then newline → content starts after newline
  const r4 = LlmJson.parse('```json   \n{"key": 1}\n```');
  TestEquality.equals("spaces-after-marker-success", r4.success, true);
  if (r4.success)
    TestEquality.equals("spaces-after-marker-data", r4.data, { key: 1 });

  // Multiple ```json blocks → only first is used
  const r5 = LlmJson.parse(
    '```json\n{"first": 1}\n```\nSome text\n```json\n{"second": 2}\n```',
  );
  TestEquality.equals("multi-block-success", r5.success, true);
  if (r5.success)
    TestEquality.equals("multi-block-data", r5.data, { first: 1 });

  // ```json block when input starts with { → should NOT extract (markdown is inside JSON)
  const r6 = LlmJson.parse('{"msg": "```json\\n{}\\n```"}');
  TestEquality.equals("json-starts-with-brace-success", r6.success, true);
  if (r6.success)
    TestEquality.equals("json-starts-with-brace-data", r6.data, {
      msg: "```json\n{}\n```",
    });

  // ```json with CRLF line endings
  const r7 = LlmJson.parse('```json\r\n{"key": 1}\r\n```');
  TestEquality.equals("crlf-block-success", r7.success, true);
  if (r7.success) TestEquality.equals("crlf-block-data", r7.data, { key: 1 });

  // ```json with only whitespace content → empty trimmed → failure
  const r8 = LlmJson.parse("```json\n   \n```");
  TestEquality.equals("whitespace-content-success", r8.success, false);
  if (!r8.success)
    TestEquality.subset(
      "whitespace-content-errors",
      [{ expected: "JSON value" }],
      r8.errors,
    );

  // ```json immediately followed by ``` on same line (no newline between)
  const r9 = LlmJson.parse("```json```");
  // No newline after ```json, so contentStart reaches end without finding \n
  // Actually "```json```" → contentStart = 7 (after "```json"), input[7]='`',
  // input[8]='`', input[9]='`' → none is '\n', so contentStart goes to 10 = length
  // Returns null (contentStart >= length)
  TestEquality.equals("no-gap-block-success", r9.success, false);
  if (!r9.success)
    TestEquality.subset(
      "no-gap-block-errors",
      [{ expected: "JSON value" }],
      r9.errors,
    );
};
