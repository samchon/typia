import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IWithSpecialKey1 {
  "my-key": number;
}

interface IWithSpecialKey2 {
  "another.key": number;
}

interface IWithHyphenKey {
  "data-value": string;
}

export const test_llm_stringify_bracket_notation_keys = (): void => {
  // Test case: Keys that require bracket notation (special characters, hyphens, etc.)
  // This tests extractDirectChildKey with bracket notation pattern (lines 395-408)
  // and NamingConvention.variable check (lines 176-178, 196-198)

  // Test 1: Key with hyphen
  const data1: IWithSpecialKey1 = { "my-key": 123 };
  (data1 as { "my-key": unknown })["my-key"] = "wrong";
  const result1 = typia.validate<IWithSpecialKey1>(data1);
  TestValidator.equals("hyphen-success", result1.success, false);
  if (!result1.success) {
    const output1: string = LlmJson.stringify(result1);
    TestValidator.equals(
      "hyphen-code-block",
      output1.includes("```json"),
      true,
    );
    TestValidator.equals(
      "hyphen-error-marker",
      output1.includes("// ❌"),
      true,
    );
    TestValidator.equals("hyphen-key", output1.includes("my-key"), true);
  }

  // Test 2: Key with dot
  const data2: IWithSpecialKey2 = { "another.key": 456 };
  (data2 as { "another.key": unknown })["another.key"] = "wrong";
  const result2 = typia.validate<IWithSpecialKey2>(data2);
  TestValidator.equals("dot-success", result2.success, false);
  if (!result2.success) {
    const output2: string = LlmJson.stringify(result2);
    TestValidator.equals("dot-code-block", output2.includes("```json"), true);
    TestValidator.equals("dot-error-marker", output2.includes("// ❌"), true);
    TestValidator.equals("dot-key", output2.includes("another.key"), true);
  }

  // Test 3: Key with hyphen (string type)
  const data3: IWithHyphenKey = { "data-value": "test" };
  (data3 as { "data-value": unknown })["data-value"] = 12345;
  const result3 = typia.validate<IWithHyphenKey>(data3);
  TestValidator.equals("string-hyphen-success", result3.success, false);
  if (!result3.success) {
    const output3: string = LlmJson.stringify(result3);
    TestValidator.equals(
      "string-hyphen-code-block",
      output3.includes("```json"),
      true,
    );
    TestValidator.equals(
      "string-hyphen-error-marker",
      output3.includes("// ❌"),
      true,
    );
    TestValidator.equals(
      "string-hyphen-key",
      output3.includes("data-value"),
      true,
    );
  }
};
