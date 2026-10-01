import { TestEquality } from "@typia/oracle/equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies JSON numbers remain root values.
 *
 * The public parser accepts scalar JSON as well as parameter objects. Root
 * numbers must not be lost while searching for an object or array.
 *
 * 1. Parse an integer, a negative decimal and a whitespace-prefixed integer.
 * 2. Assert both successful parsing and each exact numeric value.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse calls must return 42, -123.45 and 99 with successful results rather than requiring a container.
 * @evidence contracts/testing.md#independent-expectations The literal numbers and whitespace follow standard JSON scalar semantics, independent of the parser implementation.
 * @evidence contracts/testing.md#distinguishing-cases Positive integer, negative fractional value and leading whitespace preserve their six assertion outcomes; empty or non-value input rejection is owned by comment_only_input and the existing single_char_inputs matrix.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported function with node:test; it imports the plugin-free oracle and calls the utility directly without a transformed fixture, native artifact, SDK host or process protocol.
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
