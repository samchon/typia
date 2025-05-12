import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_llm_parameters_llama_DynamicTree = _test_llm_parameters({
  model: "llama",
  name: "DynamicTree",
})(typia.llm.parameters<DynamicTreeParameters, "llama">());

interface DynamicTreeParameters {
  regular: DynamicTree;
  nullable: DynamicTree | null;
  optional: DynamicTree | undefined;
  faint: DynamicTree | null | undefined;
  array: Array<DynamicTree>;
}
