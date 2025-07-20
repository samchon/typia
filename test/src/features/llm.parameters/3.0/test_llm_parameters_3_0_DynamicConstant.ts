import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_llm_parameters_3_0_DynamicConstant = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "DynamicConstant",
  })(typia.llm.parameters<DynamicConstantParameters, "3.0">());

interface DynamicConstantParameters {
  regular: DynamicConstant;
  nullable: DynamicConstant | null;
  optional: DynamicConstant | undefined;
  faint: DynamicConstant | null | undefined;
  array: Array<DynamicConstant>;
}
