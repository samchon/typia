import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_llm_parameters_3_0_DynamicTree = _test_llm_parameters({
  model: "3.0",
  name: "DynamicTree",
})(typia.llm.parameters<DynamicTreeParameters, "3.0">());

interface DynamicTreeParameters {
  regular: DynamicTree;
  nullable: DynamicTree | null;
  optional: DynamicTree | undefined;
  faint: DynamicTree | null | undefined;
  array: Array<DynamicTree>;
}
