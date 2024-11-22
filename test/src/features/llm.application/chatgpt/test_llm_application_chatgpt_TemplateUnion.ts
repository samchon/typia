import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TemplateUnion } from "../../../structures/TemplateUnion";

export const test_llm_application_chatgpt_TemplateUnion = _test_llm_application(
  {
    model: "chatgpt",
    name: "TemplateUnion",
  },
)(typia.llm.application<TemplateUnionApplication, "chatgpt">());

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
