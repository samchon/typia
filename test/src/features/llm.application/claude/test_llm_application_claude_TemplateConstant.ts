import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_llm_application_claude_TemplateConstant =
  _test_llm_application({
    model: "claude",
    name: "TemplateConstant",
  })(typia.llm.application<TemplateConstantApplication, "claude">());

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
