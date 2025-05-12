import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_llm_parameters_3_1_ArrayUnion = _test_llm_parameters({
  model: "3.1",
  name: "ArrayUnion",
})(typia.llm.parameters<ArrayUnionParameters, "3.1">());

interface ArrayUnionParameters {
  regular: ArrayUnion;
  nullable: ArrayUnion | null;
  optional: ArrayUnion | undefined;
  faint: ArrayUnion | null | undefined;
  array: Array<ArrayUnion>;
}
