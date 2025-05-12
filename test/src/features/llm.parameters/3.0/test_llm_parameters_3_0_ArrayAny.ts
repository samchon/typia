import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArrayAny } from "../../../structures/ArrayAny";

export const test_llm_parameters_3_0_ArrayAny = _test_llm_parameters({
  model: "3.0",
  name: "ArrayAny",
})(typia.llm.parameters<ArrayAnyParameters, "3.0">());

interface ArrayAnyParameters {
  regular: ArrayAny;
  nullable: ArrayAny | null;
  optional: ArrayAny | undefined;
  faint: ArrayAny | null | undefined;
  array: Array<ArrayAny>;
}
