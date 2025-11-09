import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_llm_parameters_chatgpt_TemplateConstant = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "TemplateConstant",
  })(typia.llm.parameters<TemplateConstantParameters, "chatgpt">());

interface TemplateConstantParameters {
  regular: TemplateConstant;
  nullable: TemplateConstant | null;
  optional: TemplateConstant | undefined;
  faint: TemplateConstant | null | undefined;
  array: Array<TemplateConstant>;
}
