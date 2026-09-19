import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IObject {
  data: {
    id: number;
    name: string;
  };
}

export const test_llm_coerce_triple_stringify_object = (): void => {
  const parameters = typia.llm.parameters<IObject>();
  const original: IObject = { data: { id: 1, name: "test" } };

  const corrupted = {
    data: JSON.stringify(JSON.stringify(original.data)) as unknown,
  };

  const result = LlmJson.parse<IObject>(JSON.stringify(corrupted), parameters);
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("data.id", result.data.data.id, 1);
    TestEquality.equals("data.name", result.data.data.name, "test");
  }
};
