import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_consecutive_commas = (): void => {
  // Double comma in array
  const r1 = LlmJson.parse("[1,,2]");
  TestValidator.equals("double-comma-success", r1.success, true);
  if (r1.success)
    TestValidator.equals("double-comma-data", r1.data, [1, 2]);

  // Triple comma in array
  const r2 = LlmJson.parse("[1,,,2]");
  TestValidator.equals("triple-comma-success", r2.success, true);
  if (r2.success)
    TestValidator.equals("triple-comma-data", r2.data, [1, 2]);

  // Leading comma in array
  const r3 = LlmJson.parse("[,1, 2]");
  TestValidator.equals("leading-comma-success", r3.success, true);
  if (r3.success)
    TestValidator.equals("leading-comma-data", r3.data, [1, 2]);

  // Only commas in array
  const r4 = LlmJson.parse("[,,,]");
  TestValidator.equals("only-commas-success", r4.success, true);
  if (r4.success) TestValidator.equals("only-commas-data", r4.data, []);

  // Double comma in object
  const r5 = LlmJson.parse('{"a": 1,, "b": 2}');
  TestValidator.equals("obj-double-comma-success", r5.success, true);
  if (r5.success)
    TestValidator.equals("obj-double-comma-data", r5.data, { a: 1, b: 2 });

  // Multiple trailing commas mixed with whitespace
  const r6 = LlmJson.parse("[1, , , 2, , ]");
  TestValidator.equals("mixed-commas-whitespace-success", r6.success, true);
  if (r6.success)
    TestValidator.equals("mixed-commas-whitespace-data", r6.data, [1, 2]);
};
