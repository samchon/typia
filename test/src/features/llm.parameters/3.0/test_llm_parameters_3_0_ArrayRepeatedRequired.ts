import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_llm_parameters_3_0_ArrayRepeatedRequired =
  _test_llm_parameters({
    model: "3.0",
    name: "ArrayRepeatedRequired",
  })(typia.llm.parameters<ArrayRepeatedRequiredParameters, "3.0">());

interface ArrayRepeatedRequiredParameters {
  regular: ArrayRepeatedRequired;
  nullable: ArrayRepeatedRequired | null;
  optional: ArrayRepeatedRequired | undefined;
  faint: ArrayRepeatedRequired | null | undefined;
  array: Array<ArrayRepeatedRequired>;
}
