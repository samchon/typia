import typia from "typia";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_gemini_ArrayRepeatedNullable = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "ArrayRepeatedNullable",
  })(
    typia.llm.parameters<ArrayRepeatedNullableParameters, "gemini">(),
  );

interface ArrayRepeatedNullableParameters {
  regular: ArrayRepeatedNullable;
  nullable: ArrayRepeatedNullable | null;
  optional: ArrayRepeatedNullable | undefined;
  faint: ArrayRepeatedNullable | null | undefined;
  array: Array<ArrayRepeatedNullable>;
}