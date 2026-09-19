import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IUnionWithNestedCoercion {
  data: { nested: { value: number } } | null;
}

export const test_llm_coerce_anyof_nested_coercion = (): void => {
  const parameters = typia.llm.parameters<IUnionWithNestedCoercion>();
  const original: IUnionWithNestedCoercion = {
    data: { nested: { value: 456 } },
  };

  const corrupted = {
    data: JSON.stringify({
      nested: JSON.stringify(original.data!.nested),
    }),
  };

  const result = LlmJson.parse<IUnionWithNestedCoercion>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals(
      "data.nested.value",
      result.data.data?.nested.value,
      456,
    );
  }
};
