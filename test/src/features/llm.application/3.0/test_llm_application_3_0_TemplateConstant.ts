import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_llm_application_3_0_TemplateConstant = _test_llm_application({
  model: "3.0",
  name: "TemplateConstant",
  factory: TemplateConstant,
})(typia.llm.application<TemplateConstantApplication, "3.0">());

interface TemplateConstantApplication {
  insert(p: { first: TemplateConstant }): Promise<void>;
  reduce(p: {
    first: TemplateConstant;
    second: TemplateConstant | null;
  }): Promise<TemplateConstant>;
  coalesce(p: {
    first: TemplateConstant | null;
    second: TemplateConstant | null;
    third?: TemplateConstant | null;
  }): Promise<TemplateConstant | null>;
}
