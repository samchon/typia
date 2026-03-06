import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IDeepNested {
  level1: {
    level2: {
      level3: {
        value: number;
      };
    };
  };
}

export const test_llm_stringify_deep_nested = (): void => {
  const valid: IDeepNested = { level1: { level2: { level3: { value: 42 } } } };
  (valid.level1.level2.level3 as { value: unknown }).value = "not-a-number";
  const result = typia.validate<IDeepNested>(valid);
  TestValidator.equals("success", result.success, false);
  if (!result.success) {
    const output: string = LlmJson.stringify(result);
    TestValidator.equals("contains code block", output.includes("```json"), true);
    TestValidator.equals("contains error marker", output.includes("// ❌"), true);
    TestValidator.equals("contains deep path", output.includes("$input.level1.level2.level3.value"), true);
  }
};
