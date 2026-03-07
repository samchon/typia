import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_max_depth = (): void => {
  // Test that deeply nested structures beyond MAX_DEPTH (512) produce errors
  // Using objects to minimize memory overhead, and keeping it incomplete
  // to ensure lenient parser is used

  // Build a chain of nested objects: {"a":{"a":{"a":...
  const depth = 515;
  let input = "";
  for (let i = 0; i < depth; i++) {
    input += '{"a":';
  }
  input += "1"; // Value at the deepest level, but no closing braces

  const result = LlmJson.parse(input);
  // Should fail due to max depth exceeded
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    TestValidator.equals("has_depth_error", result.errors.some(e => e.expected?.includes("max depth")), true);
  }
};
