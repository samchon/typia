import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IWithDate {
  createdAt: string;
}

export const test_llm_stringify_to_json_method = (): void => {
  // Date has toJSON() method that returns ISO string
  const data = { createdAt: new Date("2024-01-01T00:00:00.000Z") };
  // Force invalid type to trigger validation error
  (data as { createdAt: unknown }).createdAt = 12345;
  const result = typia.validate<IWithDate>(data);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals(
      "contains code block",
      output.includes("```json"),
      true,
    );
    TestValidator.equals(
      "contains error marker",
      output.includes("// ❌"),
      true,
    );
    TestValidator.equals(
      "contains createdAt path",
      output.includes("$input.createdAt"),
      true,
    );
  }

  // Test custom toJSON method
  interface ICustomToJson {
    value: number;
  }

  const customObj = {
    value: {
      toJSON: () => "serialized",
    },
  };
  (customObj as { value: unknown }).value = { toJSON: () => 999 };
  const customResult = typia.validate<ICustomToJson>(customObj);
  TestValidator.equals("custom-success", customResult.success, false);
  if (!customResult.success) {
    const customOutput: string = LlmJson.stringify(customResult);
    TestValidator.equals(
      "custom-contains code block",
      customOutput.includes("```json"),
      true,
    );
  }
};
