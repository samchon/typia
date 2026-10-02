import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies keyword-like and extended unquoted names remain object keys.
 *
 * A name beginning with a JSON keyword must not be parsed as that scalar value
 * when used as an object key. Case, symbol runs and length must retain exact
 * names.
 *
 * 1. Parse true, false and null prefixes and uppercase, symbolic, long and
 *    digit-containing identifiers.
 * 2. Compare complete objects, including true and null used as entire keys.
 *
 * @evidence contracts/testing.md#behavioral-verification Ten direct parse scenarios compare success and exact member names and values, exposing keyword-prefix truncation or scalar misclassification.
 * @evidence contracts/testing.md#independent-expectations Literal expected objects independently establish member identity under the maintained unquoted-key tolerance; keyword spelling in key position does not generate a scalar result.
 * @evidence contracts/testing.md#distinguishing-cases Three keyword prefixes, uppercase, underscore-only and dollar-rich names, a long identifier, internal digit and exact true or null names retain twenty assertions. Ordinary and single-character keys are owned by adjacent units.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit registers this exported function with node:test and calls the utility through the plugin-free oracle. No installation, native artifact, transformed fixture or host is involved.
 */
export const test_llm_json_parse_lenient_unquoted_keys_edge = (): void => {
  // Unquoted key that starts with 'true' prefix
  const r1 = LlmJson.parse("{trueValue: 1}");
  TestEquality.equals("true-prefix-key-success", r1.success, true);
  if (r1.success)
    TestEquality.equals("true-prefix-key-data", r1.data, { trueValue: 1 });

  // Unquoted key that starts with 'false' prefix
  const r2 = LlmJson.parse("{falseFlag: 0}");
  TestEquality.equals("false-prefix-key-success", r2.success, true);
  if (r2.success)
    TestEquality.equals("false-prefix-key-data", r2.data, { falseFlag: 0 });

  // Unquoted key that starts with 'null' prefix
  const r3 = LlmJson.parse('{nullable: "yes"}');
  TestEquality.equals("null-prefix-key-success", r3.success, true);
  if (r3.success)
    TestEquality.equals("null-prefix-key-data", r3.data, { nullable: "yes" });

  // Unquoted key with uppercase letters
  const r4 = LlmJson.parse('{MyKey: "value"}');
  TestEquality.equals("uppercase-key-success", r4.success, true);
  if (r4.success)
    TestEquality.equals("uppercase-key-data", r4.data, { MyKey: "value" });

  // Unquoted key with all underscores
  const r5 = LlmJson.parse("{___: 1}");
  TestEquality.equals("underscore-only-success", r5.success, true);
  if (r5.success)
    TestEquality.equals("underscore-only-data", r5.data, { ___: 1 });

  // Unquoted key with dollar signs
  const r6 = LlmJson.parse('{$$key$$: "val"}');
  TestEquality.equals("dollar-key-success", r6.success, true);
  if (r6.success)
    TestEquality.equals("dollar-key-data", r6.data, { $$key$$: "val" });

  // Long unquoted key
  const r7 = LlmJson.parse("{veryLongIdentifierNameUsedAsKey: 42}");
  TestEquality.equals("long-key-success", r7.success, true);
  if (r7.success)
    TestEquality.equals("long-key-data", r7.data, {
      veryLongIdentifierNameUsedAsKey: 42,
    });

  // Unquoted key with number suffix (camelCase style)
  const r8 = LlmJson.parse('{level2Boss: "dragon"}');
  TestEquality.equals("num-suffix-key-success", r8.success, true);
  if (r8.success)
    TestEquality.equals("num-suffix-key-data", r8.data, {
      level2Boss: "dragon",
    });

  // Boolean keyword as unquoted key
  const r9 = LlmJson.parse("{true: 1}");
  TestEquality.equals("bool-key-success", r9.success, true);
  if (r9.success) TestEquality.equals("bool-key-data", r9.data, { true: 1 });

  // Null keyword as unquoted key
  const r10 = LlmJson.parse("{null: 1}");
  TestEquality.equals("null-key-success", r10.success, true);
  if (r10.success) TestEquality.equals("null-key-data", r10.data, { null: 1 });
};
