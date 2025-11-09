import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_llm_parameters_3_0_ArrayRepeatedNullable = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "ArrayRepeatedNullable",
  })(typia.llm.parameters<ArrayRepeatedNullableParameters, "3.0">());

interface ArrayRepeatedNullableParameters {
  regular: ArrayRepeatedNullable;
  nullable: ArrayRepeatedNullable | null;
  optional: ArrayRepeatedNullable | undefined;
  faint: ArrayRepeatedNullable | null | undefined;
  array: Array<ArrayRepeatedNullable>;
}
