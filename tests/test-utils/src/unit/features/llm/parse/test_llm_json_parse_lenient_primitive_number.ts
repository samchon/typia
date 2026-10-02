import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies JSON numbers remain root values.
 *
 * The public parser accepts scalar JSON as well as parameter objects. Root
 * numbers must not be lost while searching for an object or array.
 *
 * 1. Parse an integer, a negative decimal and a whitespace-prefixed integer.
 * 2. Assert both successful parsing and each exact numeric value.
 */
export const test_llm_json_parse_lenient_primitive_number = (): void => {
  // Primitive number at root level (no junk skipping)
  const result1 = LlmJson.parse("42");
  TestEquality.equals("success1", result1.success, true);
  if (result1.success) TestEquality.equals("value1", result1.data, 42);

  // Negative number at root
  const result2 = LlmJson.parse("-123.45");
  TestEquality.equals("success2", result2.success, true);
  if (result2.success) TestEquality.equals("value2", result2.data, -123.45);

  // Number with leading whitespace
  const result3 = LlmJson.parse("  99");
  TestEquality.equals("success3", result3.success, true);
  if (result3.success) TestEquality.equals("value3", result3.data, 99);
};
