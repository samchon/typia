import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_escape_sequences = (): void => {
  // Test all standard escape sequences
  const result = LlmJson.parse('{"quote": "\\"", "backslash": "\\\\", "slash": "\\/", "backspace": "\\b", "formfeed": "\\f", "newline": "\\n", "return": "\\r", "tab": "\\t"}');
  TestValidator.equals("success", result.success, true);
  if (result.success) {
    TestValidator.equals("quote", (result.data as Record<string, string>).quote, '"');
    TestValidator.equals("backslash", (result.data as Record<string, string>).backslash, "\\");
    TestValidator.equals("slash", (result.data as Record<string, string>).slash, "/");
    TestValidator.equals("backspace", (result.data as Record<string, string>).backspace, "\b");
    TestValidator.equals("formfeed", (result.data as Record<string, string>).formfeed, "\f");
    TestValidator.equals("newline", (result.data as Record<string, string>).newline, "\n");
    TestValidator.equals("return", (result.data as Record<string, string>).return, "\r");
    TestValidator.equals("tab", (result.data as Record<string, string>).tab, "\t");
  }
};
