import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IArrayUnion {
  items: number[] | string[];
}

export const test_llm_coerce_anyof_array_union = (): void => {
  const parameters = typia.llm.parameters<IArrayUnion>();
  const original: IArrayUnion = {
    items: [1, 2, 3],
  };

  const corrupted = {
    items: JSON.stringify(original.items) as unknown,
  };

  const result = LlmJson.parse<IArrayUnion>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("items", result.data.items, [1, 2, 3]);
  }
};
