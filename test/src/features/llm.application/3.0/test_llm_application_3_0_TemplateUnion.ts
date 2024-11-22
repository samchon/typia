import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_llm_application_3_0_TemplateUnion = _test_llm_application({
  model: "3.0",
  name: "TemplateUnion",
})(typia.llm.application<TemplateUnionApplication, "3.0">());

interface TemplateUnionApplication {
  insert(first: TemplateUnion): Promise<void>;
  reduce(
    first: TemplateUnion,
    second: TemplateUnion | null,
  ): Promise<TemplateUnion>;
  coalesce(
    first: TemplateUnion | null,
    second: TemplateUnion | null,
    third?: TemplateUnion | null,
  ): Promise<TemplateUnion | null>;
}
