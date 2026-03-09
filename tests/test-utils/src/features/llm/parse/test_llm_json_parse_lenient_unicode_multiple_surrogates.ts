import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_unicode_multiple_surrogates =
  (): void => {
    // Multiple surrogate pairs in sequence (multiple emoji)
    const r1 = LlmJson.parse(
      '{"emoji": "\\uD83D\\uDE00\\uD83D\\uDE01\\uD83D\\uDE02"}',
    );
    TestValidator.equals("multi-emoji-success", r1.success, true);
    if (r1.success)
      TestValidator.equals("multi-emoji-data", r1.data, {
        emoji: "\uD83D\uDE00\uD83D\uDE01\uD83D\uDE02",
      });

    // Surrogate pair mixed with regular text
    const r2 = LlmJson.parse(
      '{"text": "Hello \\uD83D\\uDE00 World \\uD83D\\uDE01!"}',
    );
    TestValidator.equals("mixed-text-emoji-success", r2.success, true);
    if (r2.success)
      TestValidator.equals("mixed-text-emoji-data", r2.data, {
        text: "Hello \uD83D\uDE00 World \uD83D\uDE01!",
      });

    // High surrogate followed by non-low-surrogate unicode
    const r3 = LlmJson.parse('{"text": "\\uD83D\\u0041"}');
    TestValidator.equals("high-then-regular-success", r3.success, true);
    if (r3.success)
      TestValidator.equals("high-then-regular-data", r3.data, {
        text: "\uD83DA",
      });

    // High surrogate followed by another high surrogate
    const r4 = LlmJson.parse('{"text": "\\uD83D\\uD83D\\uDE00"}');
    TestValidator.equals("double-high-success", r4.success, true);
    if (r4.success)
      TestValidator.equals("double-high-data", r4.data, {
        text: "\uD83D\uD83D\uDE00",
      });

    // Low surrogate alone (without high surrogate)
    const r5 = LlmJson.parse('{"text": "\\uDE00"}');
    TestValidator.equals("lone-low-success", r5.success, true);
    if (r5.success)
      TestValidator.equals("lone-low-data", r5.data, { text: "\uDE00" });

    // Surrogate pair at the very end of string (unclosed)
    const r6 = LlmJson.parse('{"text": "\\uD83D\\uDE00');
    TestValidator.equals("surrogate-unclosed-success", r6.success, true);
    if (r6.success)
      TestValidator.equals("surrogate-unclosed-data", r6.data, {
        text: "\uD83D\uDE00",
      });

    // High surrogate at very end of unclosed string
    const r7 = LlmJson.parse('{"text": "abc\\uD83D');
    TestValidator.equals("high-at-end-success", r7.success, true);
    if (r7.success)
      TestValidator.equals("high-at-end-data", r7.data, {
        text: "abc\uD83D",
      });
  };
