import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IKoreanKey {
  이름: number;
}

interface IJapaneseKey {
  名前: number;
}

interface IUnicodeValue {
  text: string;
}

export const test_llm_stringify_unicode_property_names = (): void => {
  // Test case: Property names with unicode characters
  // This tests JSON.stringify behavior for keys and the path generation

  // Test: Korean characters
  const data1: IKoreanKey = { 이름: 123 };
  (data1 as { 이름: unknown }).이름 = "wrong";
  const result1 = typia.validate<IKoreanKey>(data1);
  TestValidator.equals("korean-success", result1.success, false);
  if (!result1.success) {
    const output1: string = LlmJson.stringify(result1);
    TestValidator.equals(
      "korean-code-block",
      output1.includes("```json"),
      true,
    );
    TestValidator.equals(
      "korean-error-marker",
      output1.includes("// ❌"),
      true,
    );
    TestValidator.equals("korean-key", output1.includes("이름"), true);
  }

  // Test: Japanese characters
  const data2: IJapaneseKey = { 名前: 456 };
  (data2 as { 名前: unknown }).名前 = "wrong";
  const result2 = typia.validate<IJapaneseKey>(data2);
  TestValidator.equals("japanese-success", result2.success, false);
  if (!result2.success) {
    const output2: string = LlmJson.stringify(result2);
    TestValidator.equals(
      "japanese-code-block",
      output2.includes("```json"),
      true,
    );
    TestValidator.equals(
      "japanese-error-marker",
      output2.includes("// ❌"),
      true,
    );
    TestValidator.equals("japanese-key", output2.includes("名前"), true);
  }

  // Test: Unicode values with special characters
  const data3: IUnicodeValue = { text: "Hello World" };
  (data3 as { text: unknown }).text = 12345;
  const result3 = typia.validate<IUnicodeValue>(data3);
  TestValidator.equals("value-success", result3.success, false);
  if (!result3.success) {
    const output3: string = LlmJson.stringify(result3);
    TestValidator.equals("value-code-block", output3.includes("```json"), true);
    TestValidator.equals("value-error-marker", output3.includes("// ❌"), true);
  }
};
