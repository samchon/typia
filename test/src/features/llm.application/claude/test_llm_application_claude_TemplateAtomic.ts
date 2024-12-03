import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_llm_application_claude_TemplateAtomic = _test_llm_application(
  {
    model: "claude",
    name: "TemplateAtomic",
  },
)(typia.llm.application<TemplateAtomicApplication, "claude">());

interface TemplateAtomicApplication {
  insert(p: { first: TemplateAtomic }): Promise<void>;
  reduce(p: {
    first: TemplateAtomic;
    second: TemplateAtomic | null;
  }): Promise<TemplateAtomic>;
  coalesce(p: {
    first: TemplateAtomic | null;
    second: TemplateAtomic | null;
    third?: TemplateAtomic | null;
  }): Promise<TemplateAtomic | null>;
}
