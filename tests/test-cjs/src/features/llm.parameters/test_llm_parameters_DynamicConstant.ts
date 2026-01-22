import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_llm_parameters_DynamicConstant = (): void =>
  _test_llm_parameters("DynamicConstant")(
    typia.llm.parameters<DynamicConstantParameters>(),
  );

interface DynamicConstantParameters {
  regular: DynamicConstant;
  nullable: DynamicConstant | null;
  optional: DynamicConstant | undefined;
  faint: DynamicConstant | null | undefined;
  array: Array<DynamicConstant>;
}
