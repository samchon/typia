import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_single_char_inputs = (): void => {
  // Single { → empty object
  const r1 = LlmJson.parse("{");
  TestEquality.equals("brace-success", r1.success, true);
  if (r1.success) TestEquality.equals("brace-data", r1.data, {});

  // Single [ → empty array
  const r2 = LlmJson.parse("[");
  TestEquality.equals("bracket-success", r2.success, true);
  if (r2.success) TestEquality.equals("bracket-data", r2.data, []);

  // Single " → empty unclosed string
  const r3 = LlmJson.parse('"');
  TestEquality.equals("quote-success", r3.success, true);
  if (r3.success) TestEquality.equals("quote-data", r3.data, "");

  // Digits 0-9 → number
  for (let i = 0; i <= 9; i++) {
    const r = LlmJson.parse(String(i));
    TestEquality.equals(`digit-${i}-success`, r.success, true);
    if (r.success) TestEquality.equals(`digit-${i}-data`, r.data, i);
  }

  // Minus → 0 (Number("-") = NaN → 0)
  const r4 = LlmJson.parse("-");
  TestEquality.equals("minus-success", r4.success, true);
  if (r4.success) TestEquality.equals("minus-data", r4.data, 0);

  // "t" → true (partial keyword)
  const r5 = LlmJson.parse("t");
  TestEquality.equals("t-success", r5.success, true);
  if (r5.success) TestEquality.equals("t-data", r5.data, true);

  // "f" → false (partial keyword)
  const r6 = LlmJson.parse("f");
  TestEquality.equals("f-success", r6.success, true);
  if (r6.success) TestEquality.equals("f-data", r6.data, false);

  // "n" → NOT recognized (too short for null, excluded from boolean coercion)
  const r7 = LlmJson.parse("n");
  TestEquality.equals("n-success", r7.success, false);
  if (!r7.success)
    TestEquality.subset("n-errors", [{ expected: "JSON value" }], r7.errors);

  // "y" → true (boolean coercion)
  const r8 = LlmJson.parse("y");
  TestEquality.equals("y-success", r8.success, true);
  if (r8.success) TestEquality.equals("y-data", r8.data, true);

  // } → failure (no opening brace)
  const r9 = LlmJson.parse("}");
  TestEquality.equals("close-brace-success", r9.success, false);
  if (!r9.success)
    TestEquality.subset(
      "close-brace-errors",
      [{ expected: "JSON value" }],
      r9.errors,
    );

  // ] → failure (no opening bracket)
  const r10 = LlmJson.parse("]");
  TestEquality.equals("close-bracket-success", r10.success, false);
  if (!r10.success)
    TestEquality.subset(
      "close-bracket-errors",
      [{ expected: "JSON value" }],
      r10.errors,
    );

  // , → failure
  const r11 = LlmJson.parse(",");
  TestEquality.equals("comma-success", r11.success, false);
  if (!r11.success)
    TestEquality.subset(
      "comma-errors",
      [{ expected: "JSON value" }],
      r11.errors,
    );

  // : → failure
  const r12 = LlmJson.parse(":");
  TestEquality.equals("colon-success", r12.success, false);
  if (!r12.success)
    TestEquality.subset(
      "colon-errors",
      [{ expected: "JSON value" }],
      r12.errors,
    );

  // space → failure (empty after trim)
  const r13 = LlmJson.parse(" ");
  TestEquality.equals("space-success", r13.success, false);
  if (!r13.success)
    TestEquality.subset(
      "space-errors",
      [{ expected: "JSON value" }],
      r13.errors,
    );

  // tab → failure
  const r14 = LlmJson.parse("\t");
  TestEquality.equals("tab-success", r14.success, false);
  if (!r14.success)
    TestEquality.subset("tab-errors", [{ expected: "JSON value" }], r14.errors);

  // newline → failure
  const r15 = LlmJson.parse("\n");
  TestEquality.equals("newline-success", r15.success, false);
  if (!r15.success)
    TestEquality.subset(
      "newline-errors",
      [{ expected: "JSON value" }],
      r15.errors,
    );

  // @ → failure (not a valid JSON start)
  const r16 = LlmJson.parse("@");
  TestEquality.equals("at-success", r16.success, false);
  if (!r16.success)
    TestEquality.subset("at-errors", [{ expected: "JSON value" }], r16.errors);

  // # → failure
  const r17 = LlmJson.parse("#");
  TestEquality.equals("hash-success", r17.success, false);
  if (!r17.success)
    TestEquality.subset(
      "hash-errors",
      [{ expected: "JSON value" }],
      r17.errors,
    );

  // / → failure (single slash, not a comment)
  const r18 = LlmJson.parse("/");
  TestEquality.equals("slash-success", r18.success, false);
  if (!r18.success)
    TestEquality.subset(
      "slash-errors",
      [{ expected: "JSON value" }],
      r18.errors,
    );

  // \ → failure
  const r19 = LlmJson.parse("\\");
  TestEquality.equals("backslash-success", r19.success, false);
  if (!r19.success)
    TestEquality.subset(
      "backslash-errors",
      [{ expected: "JSON value" }],
      r19.errors,
    );

  // ! → failure
  const r20 = LlmJson.parse("!");
  TestEquality.equals("excl-success", r20.success, false);
  if (!r20.success)
    TestEquality.subset(
      "excl-errors",
      [{ expected: "JSON value" }],
      r20.errors,
    );

  // . → failure (not recognized as number start)
  const r21 = LlmJson.parse(".");
  TestEquality.equals("dot-success", r21.success, false);
  if (!r21.success)
    TestEquality.subset("dot-errors", [{ expected: "JSON value" }], r21.errors);

  // + → failure (not recognized as number start)
  const r22 = LlmJson.parse("+");
  TestEquality.equals("plus-success", r22.success, false);
  if (!r22.success)
    TestEquality.subset(
      "plus-errors",
      [{ expected: "JSON value" }],
      r22.errors,
    );

  // .5 → failure (dot doesn't start numbers)
  const r23 = LlmJson.parse(".5");
  TestEquality.equals("dot-five-success", r23.success, false);
  if (!r23.success)
    TestEquality.subset(
      "dot-five-errors",
      [{ expected: "JSON value" }],
      r23.errors,
    );

  // +5 → failure (plus doesn't start numbers)
  const r24 = LlmJson.parse("+5");
  TestEquality.equals("plus-five-success", r24.success, false);
  if (!r24.success)
    TestEquality.subset(
      "plus-five-errors",
      [{ expected: "JSON value" }],
      r24.errors,
    );

  // Empty string → failure
  const r25 = LlmJson.parse("");
  TestEquality.equals("empty-success", r25.success, false);
  if (!r25.success)
    TestEquality.subset(
      "empty-errors",
      [{ expected: "JSON value" }],
      r25.errors,
    );

  // Plain text without JSON → failure
  const r26 = LlmJson.parse("just plain text without any JSON");
  TestEquality.equals("no-json-success", r26.success, false);
  if (!r26.success)
    TestEquality.subset(
      "no-json-errors",
      [{ expected: "JSON value" }],
      r26.errors,
    );
};
