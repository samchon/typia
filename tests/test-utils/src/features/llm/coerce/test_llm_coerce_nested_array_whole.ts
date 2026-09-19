import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface ISimpleArray {
  numbers: number[];
}

export const test_llm_coerce_nested_array_whole = (): void => {
  const parameters = typia.llm.parameters<ISimpleArray>();
  const original: ISimpleArray = {
    numbers: [10, 20, 30, 40],
  };

  const corrupted = {
    numbers: JSON.stringify(original.numbers) as unknown,
  };

  const result = LlmJson.parse<ISimpleArray>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("numbers", result.data.numbers, [10, 20, 30, 40]);
  }
};
