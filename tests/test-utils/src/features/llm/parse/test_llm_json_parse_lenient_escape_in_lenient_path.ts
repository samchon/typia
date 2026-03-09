import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

/**
 * CRITICAL: Tests escape sequences specifically in the LENIENT parser path.
 *
 * The existing `escape_sequences.ts` test uses valid JSON inputs that pass
 * JSON.parse successfully, meaning the lenient parser's escape switch
 * (parseString lines 659-728) is NEVER exercised. If someone removes or
 * modifies the \t, \b, \f, \r, \n, or \/ cases in the lenient parser,
 * no existing test would catch it.
 *
 * This test forces the lenient parser by using UNCLOSED strings (JSON.parse
 * fails on unclosed strings). The escape sequences in the string are then
 * processed by the lenient parser's own escape switch, not JSON.parse.
 *
 * Note: In TypeScript source, `\\n` produces the two-character sequence
 * backslash + n at runtime, which the parser sees as an escape sequence.
 * This is different from `\n` which is an actual newline character.
 */
export const test_llm_json_parse_lenient_escape_in_lenient_path = (): void => {
  // =========================================================================
  // 1. INDIVIDUAL ESCAPE SEQUENCES (unclosed strings force lenient path)
  // =========================================================================

  // \n → newline (U+000A)
  const n = LlmJson.parse('"hello\\nworld');
  TestValidator.equals("esc-n-success", n.success, true);
  if (n.success) TestValidator.equals("esc-n-data", n.data, "hello\nworld");

  // \t → tab (U+0009)
  const t = LlmJson.parse('"hello\\tworld');
  TestValidator.equals("esc-t-success", t.success, true);
  if (t.success) TestValidator.equals("esc-t-data", t.data, "hello\tworld");

  // \r → carriage return (U+000D)
  const r = LlmJson.parse('"hello\\rworld');
  TestValidator.equals("esc-r-success", r.success, true);
  if (r.success) TestValidator.equals("esc-r-data", r.data, "hello\rworld");

  // \b → backspace (U+0008)
  const b = LlmJson.parse('"hello\\bworld');
  TestValidator.equals("esc-b-success", b.success, true);
  if (b.success) TestValidator.equals("esc-b-data", b.data, "hello\bworld");

  // \f → form feed (U+000C)
  const f = LlmJson.parse('"hello\\fworld');
  TestValidator.equals("esc-f-success", f.success, true);
  if (f.success) TestValidator.equals("esc-f-data", f.data, "hello\fworld");

  // \/ → forward slash (same as /)
  const s = LlmJson.parse('"hello\\/world');
  TestValidator.equals("esc-slash-success", s.success, true);
  if (s.success) TestValidator.equals("esc-slash-data", s.data, "hello/world");

  // =========================================================================
  // 2. MULTIPLE ESCAPES IN ONE UNCLOSED STRING
  // =========================================================================

  // All 6 escape types in one unclosed string
  const multi = LlmJson.parse('"a\\nb\\tc\\rd');
  TestValidator.equals("multi-esc-success", multi.success, true);
  if (multi.success)
    TestValidator.equals("multi-esc-data", multi.data, "a\nb\tc\rd");

  // All escapes combined: \n \t \r \b \f \/
  const all = LlmJson.parse('"\\n\\t\\r\\b\\f\\/');
  TestValidator.equals("all-esc-success", all.success, true);
  if (all.success)
    TestValidator.equals("all-esc-data", all.data, "\n\t\r\b\f/");

  // =========================================================================
  // 3. ESCAPES IN OBJECT VALUES (unquoted keys force lenient path)
  // =========================================================================

  // \t in value with unquoted key
  const ot = LlmJson.parse('{key: "col1\\tcol2"}');
  TestValidator.equals("obj-esc-t-success", ot.success, true);
  if (ot.success)
    TestValidator.equals("obj-esc-t-data", ot.data, { key: "col1\tcol2" });

  // \r\n in value with unquoted key
  const orn = LlmJson.parse('{key: "line1\\r\\nline2"}');
  TestValidator.equals("obj-esc-rn-success", orn.success, true);
  if (orn.success)
    TestValidator.equals("obj-esc-rn-data", orn.data, {
      key: "line1\r\nline2",
    });

  // Unknown escape sequence: \q is stripped to just 'q'
  const unk = LlmJson.parse('{"text": "hello\\qworld');
  TestValidator.equals("esc-unknown-success", unk.success, true);
  if (unk.success)
    TestValidator.equals("esc-unknown-data", unk.data, { text: "helloqworld" });
};
