import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_unquoted_keys_edge = (): void => {
  // Unquoted key that starts with 'true' prefix
  const r1 = LlmJson.parse("{trueValue: 1}");
  TestValidator.equals("true-prefix-key-success", r1.success, true);
  if (r1.success)
    TestValidator.equals("true-prefix-key-data", r1.data, { trueValue: 1 });

  // Unquoted key that starts with 'false' prefix
  const r2 = LlmJson.parse("{falseFlag: 0}");
  TestValidator.equals("false-prefix-key-success", r2.success, true);
  if (r2.success)
    TestValidator.equals("false-prefix-key-data", r2.data, { falseFlag: 0 });

  // Unquoted key that starts with 'null' prefix
  const r3 = LlmJson.parse('{nullable: "yes"}');
  TestValidator.equals("null-prefix-key-success", r3.success, true);
  if (r3.success)
    TestValidator.equals("null-prefix-key-data", r3.data, { nullable: "yes" });

  // Unquoted key with uppercase letters
  const r4 = LlmJson.parse('{MyKey: "value"}');
  TestValidator.equals("uppercase-key-success", r4.success, true);
  if (r4.success)
    TestValidator.equals("uppercase-key-data", r4.data, { MyKey: "value" });

  // Unquoted key with all underscores
  const r5 = LlmJson.parse("{___: 1}");
  TestValidator.equals("underscore-only-success", r5.success, true);
  if (r5.success)
    TestValidator.equals("underscore-only-data", r5.data, { ___: 1 });

  // Unquoted key with dollar signs
  const r6 = LlmJson.parse('{$$key$$: "val"}');
  TestValidator.equals("dollar-key-success", r6.success, true);
  if (r6.success)
    TestValidator.equals("dollar-key-data", r6.data, { $$key$$: "val" });

  // Long unquoted key
  const r7 = LlmJson.parse("{veryLongIdentifierNameUsedAsKey: 42}");
  TestValidator.equals("long-key-success", r7.success, true);
  if (r7.success)
    TestValidator.equals("long-key-data", r7.data, {
      veryLongIdentifierNameUsedAsKey: 42,
    });

  // Unquoted key with number suffix (camelCase style)
  const r8 = LlmJson.parse('{level2Boss: "dragon"}');
  TestValidator.equals("num-suffix-key-success", r8.success, true);
  if (r8.success)
    TestValidator.equals("num-suffix-key-data", r8.data, {
      level2Boss: "dragon",
    });

  // Boolean keyword as unquoted key
  const r9 = LlmJson.parse("{true: 1}");
  TestValidator.equals("bool-key-success", r9.success, true);
  if (r9.success) TestValidator.equals("bool-key-data", r9.data, { true: 1 });

  // Null keyword as unquoted key
  const r10 = LlmJson.parse("{null: 1}");
  TestValidator.equals("null-key-success", r10.success, true);
  if (r10.success) TestValidator.equals("null-key-data", r10.data, { null: 1 });
};
