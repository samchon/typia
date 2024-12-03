import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_llm_parameters_3_1_DynamicConstant = _test_llm_parameters({
  model: "3.1",
  name: "DynamicConstant",
})(typia.llm.parameters<DynamicConstantParameters, "3.1">());

interface DynamicConstantParameters {
  regular: DynamicConstant;
  nullable: DynamicConstant | null;
  optional: DynamicConstant | undefined;
  faint: DynamicConstant | null | undefined;
  array: Array<DynamicConstant>;
}
