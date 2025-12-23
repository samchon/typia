import typia from "typia";

import { _test_llm_applicationEquals } from "../../internal/_test_llm_applicationEquals";
import { TemplateConstant } from "../../structures/TemplateConstant";

export const test_llm_applicationEquals_TemplateConstant = (): void =>
  _test_llm_applicationEquals({
    name: "TemplateConstant",
    factory: TemplateConstant,
  })(typia.llm.application<TemplateConstantApplication, { equals: true }>());

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
