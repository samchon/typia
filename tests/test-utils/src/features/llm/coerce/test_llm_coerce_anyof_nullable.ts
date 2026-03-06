import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface INullableObject {
  data: { value: number } | null;
}

export const test_llm_coerce_anyof_nullable = (): void => {
  const parameters = typia.llm.parameters<INullableObject>();
  const original: INullableObject = {
    data: { value: 999 },
  };

  const corrupted = {
    data: JSON.stringify(original.data) as unknown,
  };

  const result = LlmJson.parse<INullableObject>(JSON.stringify(corrupted), parameters);
  TestValidator.equals("success", result.success, true);
  if (result.success) {
    TestValidator.equals("data.value", result.data.data?.value, 999);
  }
};
