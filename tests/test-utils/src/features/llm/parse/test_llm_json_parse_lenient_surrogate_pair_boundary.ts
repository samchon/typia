import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_surrogate_pair_boundary = (): void => {
  // High surrogate at exact end of closed string
  const r1 = LlmJson.parse('{"t": "\\uD83D"}');
  TestValidator.equals("high-at-end-closed-success", r1.success, true);
  if (r1.success)
    TestValidator.equals("high-at-end-closed-data", r1.data, {
      t: "\uD83D",
    });

  // Complete surrogate pair at end of closed string
  const r2 = LlmJson.parse('{"t": "\\uD83D\\uDE00"}');
  TestValidator.equals("pair-at-end-closed-success", r2.success, true);
  if (r2.success)
    TestValidator.equals("pair-at-end-closed-data", r2.data, {
      t: "😀",
    });

  // Text after surrogate pair
  const r3 = LlmJson.parse('{"t": "\\uD83D\\uDE00 smile"}');
  TestValidator.equals("pair-then-text-success", r3.success, true);
  if (r3.success)
    TestValidator.equals("pair-then-text-data", r3.data, {
      t: "😀 smile",
    });

  // Text before surrogate pair
  const r4 = LlmJson.parse('{"t": "smile \\uD83D\\uDE00"}');
  TestValidator.equals("text-then-pair-success", r4.success, true);
  if (r4.success)
    TestValidator.equals("text-then-pair-data", r4.data, {
      t: "smile 😀",
    });

  // Multiple surrogate pairs with text between
  const r5 = LlmJson.parse(
    '{"t": "\\uD83D\\uDE00 and \\uD83D\\uDE01 and \\uD83D\\uDE02"}',
  );
  TestValidator.equals("multi-pair-text-success", r5.success, true);
  if (r5.success)
    TestValidator.equals("multi-pair-text-data", r5.data, {
      t: "😀 and 😁 and 😂",
    });

  // High surrogate followed by another escape (not \u)
  const r6 = LlmJson.parse('{"t": "\\uD83D\\n"}');
  TestValidator.equals("high-then-escape-success", r6.success, true);
  if (r6.success)
    TestValidator.equals("high-then-escape-data", r6.data, {
      t: "\uD83D\n",
    });

  // High surrogate followed by end of unclosed string
  const r7 = LlmJson.parse('{"t": "\\uD83D');
  TestValidator.equals("high-unclosed-success", r7.success, true);
  if (r7.success)
    TestValidator.equals("high-unclosed-data", r7.data, {
      t: "\uD83D",
    });

  // Low surrogate without preceding high surrogate
  const r8 = LlmJson.parse('{"t": "\\uDC00"}');
  TestValidator.equals("lone-low-success", r8.success, true);
  if (r8.success)
    TestValidator.equals("lone-low-data", r8.data, { t: "\uDC00" });

  // High surrogate followed by invalid low surrogate range (\uDBFF - another high)
  const r9 = LlmJson.parse('{"t": "\\uD83D\\uDBFF"}');
  TestValidator.equals("high-then-high-success", r9.success, true);
  if (r9.success)
    TestValidator.equals("high-then-high-data", r9.data, {
      t: "\uD83D\uDBFF",
    });

  // Surrogate pair where low hex is invalid
  const r10 = LlmJson.parse('{"t": "\\uD83D\\uZZZZ"}');
  TestValidator.equals("high-then-invalid-hex-success", r10.success, true);
  if (r10.success)
    TestValidator.equals("high-then-invalid-hex-data", r10.data, {
      t: "\uD83D\\uZZZZ",
    });

  // Multiple different emoji
  const r11 = LlmJson.parse(
    '{"t": "\\uD83C\\uDF89\\uD83C\\uDF8A\\uD83C\\uDF8B"}',
  );
  TestValidator.equals("multi-emoji-success", r11.success, true);
  if (r11.success)
    TestValidator.equals("multi-emoji-data", r11.data, {
      t: "🎉🎊🎋",
    });

  // Flag emoji (two regional indicator symbols)
  const r12 = LlmJson.parse('{"t": "\\uD83C\\uDDF0\\uD83C\\uDDF7"}');
  TestValidator.equals("flag-emoji-success", r12.success, true);
  if (r12.success)
    TestValidator.equals("flag-emoji-data", r12.data, {
      t: "🇰🇷",
    });
};
