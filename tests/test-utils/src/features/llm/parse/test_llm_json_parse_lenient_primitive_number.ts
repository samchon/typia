import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

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
