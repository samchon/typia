import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_llm_application_3_1_TemplateConstant = _test_llm_application({
  model: "3.1",
  name: "TemplateConstant",
})(typia.llm.application<TemplateConstantApplication, "3.1">());

interface TemplateConstantApplication {
  insert(first: TemplateConstant): Promise<void>;
  reduce(
    first: TemplateConstant,
    second: TemplateConstant | null,
  ): Promise<TemplateConstant>;
  coalesce(
    first: TemplateConstant | null,
    second: TemplateConstant | null,
    third?: TemplateConstant | null,
  ): Promise<TemplateConstant | null>;
}
