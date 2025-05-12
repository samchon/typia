import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_llm_parameters_chatgpt_DynamicTemplate = _test_llm_parameters(
  {
    model: "chatgpt",
    name: "DynamicTemplate",
  },
)(typia.llm.parameters<DynamicTemplateParameters, "chatgpt">());

interface DynamicTemplateParameters {
  regular: DynamicTemplate;
  nullable: DynamicTemplate | null;
  optional: DynamicTemplate | undefined;
  faint: DynamicTemplate | null | undefined;
  array: Array<DynamicTemplate>;
}
