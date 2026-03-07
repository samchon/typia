import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_unicode_lone_surrogate = (): void => {
  // High surrogate without low surrogate should still work (as lone surrogate)
  // \uD83D is a high surrogate, but not followed by valid low surrogate
  const result = LlmJson.parse('{"text": "\\uD83D"}');
  TestValidator.equals("success", result.success, true);
  if (result.success) {
    // Should produce the lone high surrogate character
    TestValidator.equals("value", result.data, { text: "\uD83D" });
  }
};
