import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_llm_parameters_llama_DynamicTemplate = _test_llm_parameters({
  model: "llama",
  name: "DynamicTemplate",
})(typia.llm.parameters<DynamicTemplateParameters, "llama">());

interface DynamicTemplateParameters {
  regular: DynamicTemplate;
  nullable: DynamicTemplate | null;
  optional: DynamicTemplate | undefined;
  faint: DynamicTemplate | null | undefined;
  array: Array<DynamicTemplate>;
}
