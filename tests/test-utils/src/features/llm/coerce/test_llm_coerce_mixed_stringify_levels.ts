import { TestEquality } from "@typia/template/equality";
import { LlmJson } from "@typia/utils";
import typia from "typia";

interface IMixed {
  double: number;
  triple: boolean;
  normal: string;
}

export const test_llm_coerce_mixed_stringify_levels = (): void => {
  const parameters = typia.llm.parameters<IMixed>();
  const original: IMixed = { double: 100, triple: false, normal: "hello" };

  const corrupted = {
    double: JSON.stringify(original.double) as unknown,
    triple: JSON.stringify(JSON.stringify(original.triple)) as unknown,
    normal: original.normal,
  };

  const result = LlmJson.parse<IMixed>(JSON.stringify(corrupted), parameters);
  TestEquality.equals("success", result.success, true);
  if (result.success) {
    TestEquality.equals("double", result.data.double, 100);
    TestEquality.equals("triple", result.data.triple, false);
    TestEquality.equals("normal", result.data.normal, "hello");
  }
};
