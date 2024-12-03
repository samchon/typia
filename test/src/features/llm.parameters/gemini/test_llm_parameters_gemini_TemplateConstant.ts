import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_llm_parameters_gemini_TemplateConstant = _test_llm_parameters(
  {
    model: "gemini",
    name: "TemplateConstant",
  },
)(typia.llm.parameters<TemplateConstantParameters, "gemini">());

interface TemplateConstantParameters {
  regular: TemplateConstant;
  nullable: TemplateConstant | null;
  optional: TemplateConstant | undefined;
  faint: TemplateConstant | null | undefined;
  array: Array<TemplateConstant>;
}
