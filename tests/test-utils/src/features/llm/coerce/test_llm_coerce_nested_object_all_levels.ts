import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface ISimpleNested {
  outer: {
    inner: {
      value: number;
    };
  };
}

export const test_llm_coerce_nested_object_all_levels = (): void => {
  const parameters = typia.llm.parameters<ISimpleNested>();
  const original: ISimpleNested = {
    outer: {
      inner: { value: 777 },
    },
  };

  const corrupted = {
    outer: JSON.stringify({
      inner: JSON.stringify(original.outer.inner),
    }),
  };

  const result = LlmJson.parse<ISimpleNested>(
    JSON.stringify(corrupted),
    parameters,
  );
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("value", result.data.outer.inner.value, 777);
  }
};
