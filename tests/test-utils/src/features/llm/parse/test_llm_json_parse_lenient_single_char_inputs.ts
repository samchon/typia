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

  // "y" → true (boolean coercion)
  const r8 = LlmJson.parse("y");
  TestValidator.equals("y-success", r8.success, true);
  if (r8.success) TestValidator.equals("y-data", r8.data, true);

  // } → failure (no opening brace)
  const r9 = LlmJson.parse("}");
  TestValidator.equals("close-brace-success", r9.success, false);

  // ] → failure (no opening bracket)
  const r10 = LlmJson.parse("]");
  TestValidator.equals("close-bracket-success", r10.success, false);

  // , → failure
  const r11 = LlmJson.parse(",");
  TestValidator.equals("comma-success", r11.success, false);

  // : → failure
  const r12 = LlmJson.parse(":");
  TestValidator.equals("colon-success", r12.success, false);

  // space → failure (empty after trim)
  const r13 = LlmJson.parse(" ");
  TestValidator.equals("space-success", r13.success, false);

  // tab → failure
  const r14 = LlmJson.parse("\t");
  TestValidator.equals("tab-success", r14.success, false);

  // newline → failure
  const r15 = LlmJson.parse("\n");
  TestValidator.equals("newline-success", r15.success, false);

  // @ → failure (not a valid JSON start)
  const r16 = LlmJson.parse("@");
  TestValidator.equals("at-success", r16.success, false);

  // # → failure
  const r17 = LlmJson.parse("#");
  TestValidator.equals("hash-success", r17.success, false);

  // / → failure (single slash, not a comment)
  const r18 = LlmJson.parse("/");
  TestValidator.equals("slash-success", r18.success, false);

  // \ → failure
  const r19 = LlmJson.parse("\\");
  TestValidator.equals("backslash-success", r19.success, false);

  // ! → failure
  const r20 = LlmJson.parse("!");
  TestValidator.equals("excl-success", r20.success, false);
};
