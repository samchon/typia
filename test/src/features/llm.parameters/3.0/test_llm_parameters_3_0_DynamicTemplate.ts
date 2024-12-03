import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_llm_parameters_3_0_DynamicTemplate = _test_llm_parameters({
  model: "3.0",
  name: "DynamicTemplate",
})(typia.llm.parameters<DynamicTemplateParameters, "3.0">());

interface DynamicTemplateParameters {
  regular: DynamicTemplate;
  nullable: DynamicTemplate | null;
  optional: DynamicTemplate | undefined;
  faint: DynamicTemplate | null | undefined;
  array: Array<DynamicTemplate>;
}
