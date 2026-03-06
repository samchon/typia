import { TestValidator } from "@nestia/e2e";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IObjectA {
  type: "a";
  valueA: number;
}

interface IObjectB {
  type: "b";
  valueB: string;
}

interface IObjectUnion {
  data: IObjectA | IObjectB;
}

export const test_llm_coerce_anyof_object_union = (): void => {
  const parameters = typia.llm.parameters<IObjectUnion>();
  const original: IObjectUnion = {
    data: { type: "a", valueA: 123 },
  };

  const corrupted = {
    data: JSON.stringify(original.data) as unknown,
  };

  const result = LlmJson.parse<IObjectUnion>(JSON.stringify(corrupted), parameters);
  TestValidator.equals("success", result.success, true);
  if (result.success) {
    const data = result.data.data as IObjectA;
    TestValidator.equals("type", data.type, "a");
    TestValidator.equals("valueA", data.valueA, 123);
  }
};
