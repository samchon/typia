import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_consecutive_commas = (): void => {
  // Double comma in array
  const r1 = LlmJson.parse("[1,,2]");
  TestEquality.equals("double-comma-success", r1.success, true);
  if (r1.success) TestEquality.equals("double-comma-data", r1.data, [1, 2]);

  // Triple comma in array
  const r2 = LlmJson.parse("[1,,,2]");
  TestEquality.equals("triple-comma-success", r2.success, true);
  if (r2.success) TestEquality.equals("triple-comma-data", r2.data, [1, 2]);

  // Leading comma in array
  const r3 = LlmJson.parse("[,1, 2]");
  TestEquality.equals("leading-comma-success", r3.success, true);
  if (r3.success) TestEquality.equals("leading-comma-data", r3.data, [1, 2]);

  // Only commas in array
  const r4 = LlmJson.parse("[,,,]");
  TestEquality.equals("only-commas-success", r4.success, true);
  if (r4.success) TestEquality.equals("only-commas-data", r4.data, []);

  // Double comma in object
  const r5 = LlmJson.parse('{"a": 1,, "b": 2}');
  TestEquality.equals("obj-double-comma-success", r5.success, true);
  if (r5.success)
    TestEquality.equals("obj-double-comma-data", r5.data, { a: 1, b: 2 });

  // Multiple trailing commas mixed with whitespace
  const r6 = LlmJson.parse("[1, , , 2, , ]");
  TestEquality.equals("mixed-commas-whitespace-success", r6.success, true);
  if (r6.success)
    TestEquality.equals("mixed-commas-whitespace-data", r6.data, [1, 2]);

  // Multiple consecutive commas in object (all skipped → empty object)
  const r7 = LlmJson.parse("{,,,,}");
  TestEquality.equals("multi-comma-obj-success", r7.success, true);
  if (r7.success) TestEquality.equals("multi-comma-obj-data", r7.data, {});

  // Commas around a key-value pair
  const r8 = LlmJson.parse("{,,,a:1,,,}");
  TestEquality.equals("comma-around-key-success", r8.success, true);
  if (r8.success)
    TestEquality.equals("comma-around-key-data", r8.data, { a: 1 });

  // Trailing comma in array
  const r9 = LlmJson.parse("[1, 2, 3,]");
  TestEquality.equals("trailing-arr-success", r9.success, true);
  if (r9.success) TestEquality.equals("trailing-arr-data", r9.data, [1, 2, 3]);

  // Multiple trailing commas in array
  const r10 = LlmJson.parse("[1, 2,,]");
  TestEquality.equals("multi-trailing-arr-success", r10.success, true);
  if (r10.success)
    TestEquality.equals("multi-trailing-arr-data", r10.data, [1, 2]);

  // Trailing comma in object
  const r11 = LlmJson.parse('{"a": 1, "b": 2,}');
  TestEquality.equals("trailing-obj-success", r11.success, true);
  if (r11.success)
    TestEquality.equals("trailing-obj-data", r11.data, { a: 1, b: 2 });
};
