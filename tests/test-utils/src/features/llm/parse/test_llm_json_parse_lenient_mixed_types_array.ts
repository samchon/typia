import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_mixed_types_array = (): void => {
  // Array with every JSON type
  const r1 = LlmJson.parse(
    '[1, "string", true, false, null, {"key": "val"}, [2, 3]]',
  );
  TestValidator.equals("all-types-success", r1.success, true);
  if (r1.success)
    TestValidator.equals("all-types-data", r1.data, [
      1,
      "string",
      true,
      false,
      null,
      { key: "val" },
      [2, 3],
    ]);

  // Nested mixed types
  const r2 = LlmJson.parse('[{"a": [1, "b", true]}, [null, {"c": 2}]]');
  TestValidator.equals("nested-mixed-success", r2.success, true);
  if (r2.success)
    TestValidator.equals("nested-mixed-data", r2.data, [
      { a: [1, "b", true] },
      [null, { c: 2 }],
    ]);

  // Array with only null values
  const r3 = LlmJson.parse("[null, null, null]");
  TestValidator.equals("all-nulls-success", r3.success, true);
  if (r3.success)
    TestValidator.equals("all-nulls-data", r3.data, [null, null, null]);

  // Array with only boolean values
  const r4 = LlmJson.parse("[true, false, true, false]");
  TestValidator.equals("all-booleans-success", r4.success, true);
  if (r4.success)
    TestValidator.equals("all-booleans-data", r4.data, [
      true,
      false,
      true,
      false,
    ]);

  // Single element array
  const r5 = LlmJson.parse("[42]");
  TestValidator.equals("single-element-success", r5.success, true);
  if (r5.success) TestValidator.equals("single-element-data", r5.data, [42]);

  // Array with string containing special characters
  const r6 = LlmJson.parse('["hello\\nworld", "tab\\there", "quote\\"here"]');
  TestValidator.equals("special-strings-success", r6.success, true);
  if (r6.success)
    TestValidator.equals("special-strings-data", r6.data, [
      "hello\nworld",
      "tab\there",
      'quote"here',
    ]);
};
