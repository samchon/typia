import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IArray {
  items: number[];
}

export const test_llm_coerce_triple_stringify_array = (): void => {
  const parameters = typia.llm.parameters<IArray>();
  const original: IArray = { items: [10, 20, 30] };

  const corrupted = {
    items: JSON.stringify(JSON.stringify(original.items)) as unknown,
  };

  const result = LlmJson.parse<IArray>(JSON.stringify(corrupted), parameters);
  TestValidator.equals("success", result.success, true);
  if (result.success) {
    TestValidator.equals("items", result.data.items, [10, 20, 30]);
  }
};
