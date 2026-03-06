import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IWithStringUnion {
  value: string | number;
}

export const test_llm_coerce_anyof_with_string = (): void => {
  const parameters = typia.llm.parameters<IWithStringUnion>();

  const corrupted = { value: "42" };

  const result = LlmJson.parse<IWithStringUnion>(JSON.stringify(corrupted), parameters);
  TestValidator.equals("success", result.success, true);
  if (result.success) {
    TestValidator.equals("value stays string", result.data.value, "42");
  }
};
