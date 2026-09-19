import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IObjectWithNestedArrays {
  data: {
    items: Array<{
      values: number[];
    }>;
  };
}

export const test_llm_coerce_nested_array_deep = (): void => {
  const parameters = typia.llm.parameters<IObjectWithNestedArrays>();
  const original: IObjectWithNestedArrays = {
    data: {
      items: [{ values: [1, 2, 3] }, { values: [4, 5, 6] }],
    },
  };

  const corrupted = {
    data: JSON.stringify({
      items: original.data.items.map((item) =>
        JSON.stringify({
          values: JSON.stringify(item.values),
        }),
      ),
    }),
  };

  const result = LlmJson.parse<IObjectWithNestedArrays>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals(
      "items[0].values",
      result.data.data.items[0]!.values,
      [1, 2, 3],
    );
    TestEquality.equals(
      "items[1].values",
      result.data.data.items[1]!.values,
      [4, 5, 6],
    );
  }
};
