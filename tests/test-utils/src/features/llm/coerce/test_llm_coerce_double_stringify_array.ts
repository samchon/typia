import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IArray {
  items: number[];
}

export const test_llm_coerce_double_stringify_array = (): void => {
  const parameters = typia.llm.parameters<IArray>();
  const original: IArray = { items: [1, 2, 3] };

  const corrupted = {
    items: JSON.stringify(original.items) as unknown,
  };

  const result = LlmJson.parse<IArray>(JSON.stringify(corrupted), parameters);
  TestValidator.equals("success", result.success, true);
  if (result.success) {
    TestValidator.equals("items", result.data.items, [1, 2, 3]);
  }
};
