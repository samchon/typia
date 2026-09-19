import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_escape_standard_path = (): void => {
  // Test all standard escape sequences
  const result = LlmJson.parse(
    '{"quote": "\\"", "backslash": "\\\\", "slash": "\\/", "backspace": "\\b", "formfeed": "\\f", "newline": "\\n", "return": "\\r", "tab": "\\t"}',
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals(
      "quote",
      (result.data as Record<string, string>).quote,
      '"',
    );
    TestEquality.equals(
      "backslash",
      (result.data as Record<string, string>).backslash,
      "\\",
    );
    TestEquality.equals(
      "slash",
      (result.data as Record<string, string>).slash,
      "/",
    );
    TestEquality.equals(
      "backspace",
      (result.data as Record<string, string>).backspace,
      "\b",
    );
    TestEquality.equals(
      "formfeed",
      (result.data as Record<string, string>).formfeed,
      "\f",
    );
    TestEquality.equals(
      "newline",
      (result.data as Record<string, string>).newline,
      "\n",
    );
    TestEquality.equals(
      "return",
      (result.data as Record<string, string>).return,
      "\r",
    );
    TestEquality.equals(
      "tab",
      (result.data as Record<string, string>).tab,
      "\t",
    );
  }
};
