import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_llm_application_chatgpt_TemplateAtomic =
  _test_llm_application({
    model: "chatgpt",
    name: "TemplateAtomic",
  })(typia.llm.application<TemplateAtomicApplication, "chatgpt">());

interface TemplateAtomicApplication {
  insert(first: TemplateAtomic): Promise<void>;
  reduce(
    first: TemplateAtomic,
    second: TemplateAtomic | null,
  ): Promise<TemplateAtomic>;
  coalesce(
    first: TemplateAtomic | null,
    second: TemplateAtomic | null,
    third?: TemplateAtomic | null,
  ): Promise<TemplateAtomic | null>;
}
