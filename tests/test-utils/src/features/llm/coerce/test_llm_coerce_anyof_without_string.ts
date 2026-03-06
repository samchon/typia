import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IWithoutStringUnion {
  value: number | boolean;
}

export const test_llm_coerce_anyof_without_string = (): void => {
  const parameters = typia.llm.parameters<IWithoutStringUnion>();

  const corrupted = { value: "42" as unknown };

  const result = LlmJson.parse<IWithoutStringUnion>(JSON.stringify(corrupted), parameters);
  TestValidator.equals("success", result.success, true);
  if (result.success) {
    TestValidator.equals("value parsed", result.data.value, 42);
  }
};
