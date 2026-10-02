import { TestEquality } from "@typia/template/oracle-equality";
import { LlmJson } from "@typia/utils";

/**
 * Verifies that large strings and containers retain complete generated content.
 *
 * Long input must not truncate repeated content or omit later keys and array
 * elements.
 *
 * 1. Exercise 10000 literal characters, 500 independently constructed escape
 *    segments, 200 numbered keys and 500 array elements.
 * 2. Compare the retained results with literal expectations.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmJson.parse calls assert the authored success, data and diagnostic distinctions.
 * @evidence contracts/testing.md#independent-expectations Repeated literal characters, authored escape segments, numbered keys and integer sequences construct expectations independently of parsing; no expected value is obtained from LlmJson.
 * @evidence contracts/testing.md#distinguishing-cases This case owns 10000 literal characters, 500 independently constructed escape segments, 200 numbered keys and 500 array elements; complementary valid/invalid spellings execute in the other direct parser units rather than repeating native preparation.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported case with node:test. Its portable utility calls use the plugin-free oracle; no consumer installation, native producer or host is needed.
 */
export const test_llm_json_parse_lenient_string_long = (): void => {
  // Very long string value
  const longStr = "a".repeat(10000);
  const r1 = LlmJson.parse('{"text": "' + longStr + '"}');
  TestEquality.equals("long-string-success", r1.success, true);
  if (r1.success)
    TestEquality.equals("long-string-data", (r1.data as any).text, longStr);

  // Long string with escape sequences every 10 characters
  let escapedStr = "";
  let expectedStr = "";
  for (let i = 0; i < 500; i++) {
    escapedStr += "abcdefghi\\n";
    expectedStr += "abcdefghi\n";
  }
  const r2 = LlmJson.parse('{"text": "' + escapedStr + '"}');
  TestEquality.equals("long-escaped-success", r2.success, true);
  if (r2.success)
    TestEquality.equals(
      "long-escaped-data",
      (r2.data as any).text,
      expectedStr,
    );

  // Many keys
  let manyKeysJson = "{";
  const expectedObj: Record<string, number> = {};
  for (let i = 0; i < 200; i++) {
    if (i > 0) manyKeysJson += ", ";
    manyKeysJson += '"key' + i + '": ' + i;
    expectedObj["key" + i] = i;
  }
  manyKeysJson += "}";
  const r3 = LlmJson.parse(manyKeysJson);
  TestEquality.equals("many-keys-success", r3.success, true);
  if (r3.success) TestEquality.equals("many-keys-data", r3.data, expectedObj);

  // Large array
  let largeArr = "[";
  const expectedArr: number[] = [];
  for (let i = 0; i < 500; i++) {
    if (i > 0) largeArr += ", ";
    largeArr += String(i);
    expectedArr.push(i);
  }
  largeArr += "]";
  const r4 = LlmJson.parse(largeArr);
  TestEquality.equals("large-array-success", r4.success, true);
  if (r4.success) TestEquality.equals("large-array-data", r4.data, expectedArr);
};
