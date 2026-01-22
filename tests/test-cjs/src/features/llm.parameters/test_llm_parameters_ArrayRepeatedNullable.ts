import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_llm_parameters_ArrayRepeatedNullable = (): void =>
  _test_llm_parameters("ArrayRepeatedNullable")(
    typia.llm.parameters<ArrayRepeatedNullableParameters>(),
  );

interface ArrayRepeatedNullableParameters {
  regular: ArrayRepeatedNullable;
  nullable: ArrayRepeatedNullable | null;
  optional: ArrayRepeatedNullable | undefined;
  faint: ArrayRepeatedNullable | null | undefined;
  array: Array<ArrayRepeatedNullable>;
}
