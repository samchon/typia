import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that fallback parsing reports excessive nesting.
 *
 * Malformed input beyond the parser's nesting limit must report a depth error
 * instead of recursing without a bound.
 *
 * 1. Exercise 515 unclosed object levels and the required depth diagnostic;
 *    511/512/513-level twins distinguish the value-depth boundary.
 * 2. Compare the retained results with literal expectations.
 */
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
  TestEquality.equals("success", result.success, false);
  if (!result.success) {
    TestEquality.equals(
      "has_depth_error",
      result.errors.some((e) => e.expected?.includes("max depth")),
      true,
    );
  }
  for (const [levels, accepted] of [
    [511, true],
    [512, false],
    [513, false],
  ] as const) {
    const boundary = LlmJson.parse('{"a":'.repeat(levels) + "1");
    TestEquality.equals(`depth-${levels}-success`, boundary.success, accepted);
    if (!boundary.success)
      TestEquality.equals(
        `depth-${levels}-reason`,
        boundary.errors.some((error) => error.expected?.includes("max depth")),
        true,
      );
  }
};
