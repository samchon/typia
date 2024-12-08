import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { TemplateConstant } from "../../../structures/TemplateConstant";

export const test_llm_applicationOfValidate_gemini_TemplateConstant =
  _test_llm_applicationOfValidate({
    model: "gemini",
    name: "TemplateConstant",
    factory: TemplateConstant,
  })(typia.llm.applicationOfValidate<TemplateConstantApplication, "gemini">());

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
