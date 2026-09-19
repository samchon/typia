import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface INestedUnion {
  outer: {
    inner: string | { deep: number };
  };
}

export const test_llm_coerce_anyof_nested_string = (): void => {
  const parameters = typia.llm.parameters<INestedUnion>();
  const original: INestedUnion = {
    outer: { inner: { deep: 777 } },
  };

  const innerStr = JSON.stringify(original.outer.inner);
  const corrupted = {
    outer: JSON.stringify({ inner: innerStr }),
  };

  const result = LlmJson.parse<INestedUnion>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals(
      "inner stays string",
      result.data.outer.inner,
      innerStr,
    );
  }
};
