import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface ISimple {
  value: number;
}

export const test_llm_coerce_double_stringify = (): void => {
  const parameters = typia.llm.parameters<ISimple>();
  const original: ISimple = { value: 42 };

  const corrupted = {
    value: JSON.stringify(original.value) as unknown,
  };

  const result = LlmJson.parse<ISimple>(JSON.stringify(corrupted), parameters);
  TestValidator.equals("success", result.success, true);
  if (result.success) {
    TestValidator.equals("value", result.data.value, 42);
  }
};
