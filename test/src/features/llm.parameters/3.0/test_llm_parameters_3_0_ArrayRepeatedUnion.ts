import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";

export const test_llm_parameters_3_0_ArrayRepeatedUnion = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "ArrayRepeatedUnion",
  })(typia.llm.parameters<ArrayRepeatedUnionParameters, "3.0">());

interface ArrayRepeatedUnionParameters {
  regular: ArrayRepeatedUnion;
  nullable: ArrayRepeatedUnion | null;
  optional: ArrayRepeatedUnion | undefined;
  faint: ArrayRepeatedUnion | null | undefined;
  array: Array<ArrayRepeatedUnion>;
}
