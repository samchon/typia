import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_single_char_inputs = (): void => {
  // Single { → empty object
  const r1 = LlmJson.parse("{");
  TestValidator.equals("brace-success", r1.success, true);
  if (r1.success) TestValidator.equals("brace-data", r1.data, {});

  // Single [ → empty array
  const r2 = LlmJson.parse("[");
  TestValidator.equals("bracket-success", r2.success, true);
  if (r2.success) TestValidator.equals("bracket-data", r2.data, []);

  // Single " → empty unclosed string
  const r3 = LlmJson.parse('"');
  TestValidator.equals("quote-success", r3.success, true);
  if (r3.success) TestValidator.equals("quote-data", r3.data, "");

  // Digits 0-9 → number
  for (let i = 0; i <= 9; i++) {
    const r = LlmJson.parse(String(i));
    TestValidator.equals(`digit-${i}-success`, r.success, true);
    if (r.success) TestValidator.equals(`digit-${i}-data`, r.data, i);
  }

  // Minus → 0 (Number("-") = NaN → 0)
  const r4 = LlmJson.parse("-");
  TestValidator.equals("minus-success", r4.success, true);
  if (r4.success) TestValidator.equals("minus-data", r4.data, 0);

  // "t" → true (partial keyword)
  const r5 = LlmJson.parse("t");
  TestValidator.equals("t-success", r5.success, true);
  if (r5.success) TestValidator.equals("t-data", r5.data, true);

  // "f" → false (partial keyword)
  const r6 = LlmJson.parse("f");
  TestValidator.equals("f-success", r6.success, true);
  if (r6.success) TestValidator.equals("f-data", r6.data, false);

  // "n" → NOT recognized (too short for null, excluded from boolean coercion)
  const r7 = LlmJson.parse("n");
  TestValidator.equals("n-success", r7.success, false);
  if (!r7.success) {
    TestValidator.equals("n-errors-len", r7.errors.length, 1);
    TestValidator.equals("n-errors-expected", r7.errors[0]?.expected, "JSON value");
  }

  // "y" → true (boolean coercion)
  const r8 = LlmJson.parse("y");
  TestValidator.equals("y-success", r8.success, true);
  if (r8.success) TestValidator.equals("y-data", r8.data, true);

  // } → failure (no opening brace)
  const r9 = LlmJson.parse("}");
  TestValidator.equals("close-brace-success", r9.success, false);
  if (!r9.success) {
    TestValidator.equals("close-brace-errors-len", r9.errors.length, 1);
    TestValidator.equals("close-brace-errors-expected", r9.errors[0]?.expected, "JSON value");
  }

  // ] → failure (no opening bracket)
  const r10 = LlmJson.parse("]");
  TestValidator.equals("close-bracket-success", r10.success, false);
  if (!r10.success) {
    TestValidator.equals("close-bracket-errors-len", r10.errors.length, 1);
    TestValidator.equals("close-bracket-errors-expected", r10.errors[0]?.expected, "JSON value");
  }

  // , → failure
  const r11 = LlmJson.parse(",");
  TestValidator.equals("comma-success", r11.success, false);
  if (!r11.success) {
    TestValidator.equals("comma-errors-len", r11.errors.length, 1);
    TestValidator.equals("comma-errors-expected", r11.errors[0]?.expected, "JSON value");
  }

  // : → failure
  const r12 = LlmJson.parse(":");
  TestValidator.equals("colon-success", r12.success, false);
  if (!r12.success) {
    TestValidator.equals("colon-errors-len", r12.errors.length, 1);
    TestValidator.equals("colon-errors-expected", r12.errors[0]?.expected, "JSON value");
  }

  // space → failure (empty after trim)
  const r13 = LlmJson.parse(" ");
  TestValidator.equals("space-success", r13.success, false);
  if (!r13.success) {
    TestValidator.equals("space-errors-len", r13.errors.length, 1);
    TestValidator.equals("space-errors-expected", r13.errors[0]?.expected, "JSON value");
  }

  // tab → failure
  const r14 = LlmJson.parse("\t");
  TestValidator.equals("tab-success", r14.success, false);
  if (!r14.success) {
    TestValidator.equals("tab-errors-len", r14.errors.length, 1);
    TestValidator.equals("tab-errors-expected", r14.errors[0]?.expected, "JSON value");
  }

  // newline → failure
  const r15 = LlmJson.parse("\n");
  TestValidator.equals("newline-success", r15.success, false);
  if (!r15.success) {
    TestValidator.equals("newline-errors-len", r15.errors.length, 1);
    TestValidator.equals("newline-errors-expected", r15.errors[0]?.expected, "JSON value");
  }

  // @ → failure (not a valid JSON start)
  const r16 = LlmJson.parse("@");
  TestValidator.equals("at-success", r16.success, false);
  if (!r16.success) {
    TestValidator.equals("at-errors-len", r16.errors.length, 1);
    TestValidator.equals("at-errors-expected", r16.errors[0]?.expected, "JSON value");
  }

  // # → failure
  const r17 = LlmJson.parse("#");
  TestValidator.equals("hash-success", r17.success, false);
  if (!r17.success) {
    TestValidator.equals("hash-errors-len", r17.errors.length, 1);
    TestValidator.equals("hash-errors-expected", r17.errors[0]?.expected, "JSON value");
  }

  // / → failure (single slash, not a comment)
  const r18 = LlmJson.parse("/");
  TestValidator.equals("slash-success", r18.success, false);
  if (!r18.success) {
    TestValidator.equals("slash-errors-len", r18.errors.length, 1);
    TestValidator.equals("slash-errors-expected", r18.errors[0]?.expected, "JSON value");
  }

  // \ → failure
  const r19 = LlmJson.parse("\\");
  TestValidator.equals("backslash-success", r19.success, false);
  if (!r19.success) {
    TestValidator.equals("backslash-errors-len", r19.errors.length, 1);
    TestValidator.equals("backslash-errors-expected", r19.errors[0]?.expected, "JSON value");
  }

  // ! → failure
  const r20 = LlmJson.parse("!");
  TestValidator.equals("excl-success", r20.success, false);
  if (!r20.success) {
    TestValidator.equals("excl-errors-len", r20.errors.length, 1);
    TestValidator.equals("excl-errors-expected", r20.errors[0]?.expected, "JSON value");
  }

  // . → failure (not recognized as number start)
  const r21 = LlmJson.parse(".");
  TestValidator.equals("dot-success", r21.success, false);
  if (!r21.success) {
    TestValidator.equals("dot-errors-len", r21.errors.length, 1);
    TestValidator.equals("dot-errors-expected", r21.errors[0]?.expected, "JSON value");
  }

  // + → failure (not recognized as number start)
  const r22 = LlmJson.parse("+");
  TestValidator.equals("plus-success", r22.success, false);
  if (!r22.success) {
    TestValidator.equals("plus-errors-len", r22.errors.length, 1);
    TestValidator.equals("plus-errors-expected", r22.errors[0]?.expected, "JSON value");
  }

  // .5 → failure (dot doesn't start numbers)
  const r23 = LlmJson.parse(".5");
  TestValidator.equals("dot-five-success", r23.success, false);
  if (!r23.success) {
    TestValidator.equals("dot-five-errors-len", r23.errors.length, 1);
    TestValidator.equals("dot-five-errors-expected", r23.errors[0]?.expected, "JSON value");
  }

  // +5 → failure (plus doesn't start numbers)
  const r24 = LlmJson.parse("+5");
  TestValidator.equals("plus-five-success", r24.success, false);
  if (!r24.success) {
    TestValidator.equals("plus-five-errors-len", r24.errors.length, 1);
    TestValidator.equals("plus-five-errors-expected", r24.errors[0]?.expected, "JSON value");
  }

  // Empty string → failure
  const r25 = LlmJson.parse("");
  TestValidator.equals("empty-success", r25.success, false);
  if (!r25.success) {
    TestValidator.equals("empty-errors-len", r25.errors.length, 1);
    TestValidator.equals("empty-errors-expected", r25.errors[0]?.expected, "JSON value");
  }

  // Plain text without JSON → failure
  const r26 = LlmJson.parse("just plain text without any JSON");
  TestValidator.equals("no-json-success", r26.success, false);
  if (!r26.success) {
    TestValidator.equals("no-json-errors-len", r26.errors.length, 1);
    TestValidator.equals("no-json-errors-expected", r26.errors[0]?.expected, "JSON value");
  }
};
