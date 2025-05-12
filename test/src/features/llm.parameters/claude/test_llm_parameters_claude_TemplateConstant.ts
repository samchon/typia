import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_llm_parameters_claude_TemplateConstant = _test_llm_parameters(
  {
    model: "claude",
    name: "TemplateConstant",
  },
)(typia.llm.parameters<TemplateConstantParameters, "claude">());

interface TemplateConstantParameters {
  regular: TemplateConstant;
  nullable: TemplateConstant | null;
  optional: TemplateConstant | undefined;
  faint: TemplateConstant | null | undefined;
  array: Array<TemplateConstant>;
}
