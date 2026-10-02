import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that fallback decoding handles standard and unknown escapes.
 *
 * Unclosed strings and unquoted keys force fallback decoding, so native JSON
 * parsing cannot hide a missing escape conversion.
 *
 * 1. Exercise individual newline, tab, return, backspace, formfeed and slash
 *    escapes, combined escapes, object values and unknown escape recovery.
 * 2. Compare the retained results with literal expectations.
 */
export const test_llm_json_parse_lenient_escape_in_lenient_path = (): void => {
  // =========================================================================
  // 1. INDIVIDUAL ESCAPE SEQUENCES (unclosed strings force lenient path)
  // =========================================================================

  // \n → newline (U+000A)
  const n = LlmJson.parse('"hello\\nworld');
  TestEquality.equals("esc-n-success", n.success, true);
  if (n.success) TestEquality.equals("esc-n-data", n.data, "hello\nworld");

  // \t → tab (U+0009)
  const t = LlmJson.parse('"hello\\tworld');
  TestEquality.equals("esc-t-success", t.success, true);
  if (t.success) TestEquality.equals("esc-t-data", t.data, "hello\tworld");

  // \r → carriage return (U+000D)
  const r = LlmJson.parse('"hello\\rworld');
  TestEquality.equals("esc-r-success", r.success, true);
  if (r.success) TestEquality.equals("esc-r-data", r.data, "hello\rworld");

  // \b → backspace (U+0008)
  const b = LlmJson.parse('"hello\\bworld');
  TestEquality.equals("esc-b-success", b.success, true);
  if (b.success) TestEquality.equals("esc-b-data", b.data, "hello\bworld");

  // \f → form feed (U+000C)
  const f = LlmJson.parse('"hello\\fworld');
  TestEquality.equals("esc-f-success", f.success, true);
  if (f.success) TestEquality.equals("esc-f-data", f.data, "hello\fworld");

  // \/ → forward slash (same as /)
  const s = LlmJson.parse('"hello\\/world');
  TestEquality.equals("esc-slash-success", s.success, true);
  if (s.success) TestEquality.equals("esc-slash-data", s.data, "hello/world");

  // =========================================================================
  // 2. MULTIPLE ESCAPES IN ONE UNCLOSED STRING
  // =========================================================================

  // All 6 escape types in one unclosed string
  const multi = LlmJson.parse('"a\\nb\\tc\\rd');
  TestEquality.equals("multi-esc-success", multi.success, true);
  if (multi.success)
    TestEquality.equals("multi-esc-data", multi.data, "a\nb\tc\rd");

  // All escapes combined: \n \t \r \b \f \/
  const all = LlmJson.parse('"\\n\\t\\r\\b\\f\\/');
  TestEquality.equals("all-esc-success", all.success, true);
  if (all.success) TestEquality.equals("all-esc-data", all.data, "\n\t\r\b\f/");

  // =========================================================================
  // 3. ESCAPES IN OBJECT VALUES (unquoted keys force lenient path)
  // =========================================================================

  // \t in value with unquoted key
  const unquotedKey = LlmJson.parse('{key: "col1\\tcol2"}');
  TestEquality.equals("obj-esc-t-success", unquotedKey.success, true);
  if (unquotedKey.success)
    TestEquality.equals("obj-esc-t-data", unquotedKey.data, {
      key: "col1\tcol2",
    });

  // \r\n in value with unquoted key
  const orn = LlmJson.parse('{key: "line1\\r\\nline2"}');
  TestEquality.equals("obj-esc-rn-success", orn.success, true);
  if (orn.success)
    TestEquality.equals("obj-esc-rn-data", orn.data, {
      key: "line1\r\nline2",
    });

  // Unknown escape sequence: \q is stripped to just 'q'
  const unk = LlmJson.parse('{"text": "hello\\qworld');
  TestEquality.equals("esc-unknown-success", unk.success, true);
  if (unk.success)
    TestEquality.equals("esc-unknown-data", unk.data, { text: "helloqworld" });
};
