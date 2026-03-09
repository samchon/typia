import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";

export const test_llm_json_parse_lenient_string_long = (): void => {
  // Very long string value
  const longStr = "a".repeat(10000);
  const r1 = LlmJson.parse('{"text": "' + longStr + '"}');
  TestValidator.equals("long-string-success", r1.success, true);
  if (r1.success)
    TestValidator.equals(
      "long-string-data",
      (r1.data as any).text,
      longStr,
    );

  // Long string with escape sequences every 10 characters
  let escapedStr = "";
  let expectedStr = "";
  for (let i = 0; i < 500; i++) {
    escapedStr += "abcdefghi\\n";
    expectedStr += "abcdefghi\n";
  }
  const r2 = LlmJson.parse('{"text": "' + escapedStr + '"}');
  TestValidator.equals("long-escaped-success", r2.success, true);
  if (r2.success)
    TestValidator.equals(
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
  TestValidator.equals("many-keys-success", r3.success, true);
  if (r3.success)
    TestValidator.equals("many-keys-data", r3.data, expectedObj);

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
  TestValidator.equals("large-array-success", r4.success, true);
  if (r4.success)
    TestValidator.equals("large-array-data", r4.data, expectedArr);
};
