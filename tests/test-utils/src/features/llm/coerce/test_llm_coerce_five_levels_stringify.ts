import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface ISimple {
  value: number;
}

export const test_llm_coerce_five_levels_stringify = (): void => {
  const parameters = typia.llm.parameters<ISimple>();
  const original: ISimple = { value: 999 };

  const corrupted = {
    value: JSON.stringify(
      JSON.stringify(JSON.stringify(JSON.stringify(original.value))),
    ) as unknown,
  };

  const result = LlmJson.parse<ISimple>(JSON.stringify(corrupted), parameters);
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("value", result.data.value, 999);
  }
};
