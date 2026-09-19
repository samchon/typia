import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IWithoutStringUnion {
  value: number | boolean;
}

export const test_llm_coerce_anyof_without_string = (): void => {
  const parameters = typia.llm.parameters<IWithoutStringUnion>();

  const corrupted = { value: "42" as unknown };

  const result = LlmJson.parse<IWithoutStringUnion>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("value parsed", result.data.value, 42);
  }
};
