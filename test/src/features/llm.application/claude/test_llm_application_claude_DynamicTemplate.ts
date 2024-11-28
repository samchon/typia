import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_llm_application_claude_DynamicTemplate =
  _test_llm_application({
    model: "claude",
    name: "DynamicTemplate",
  })(typia.llm.application<DynamicTemplateApplication, "claude">());

interface DynamicTemplateApplication {
  insert(p: { first: DynamicTemplate }): Promise<void>;
  reduce(p: {
    first: DynamicTemplate;
    second: DynamicTemplate | null;
  }): Promise<DynamicTemplate>;
  coalesce(p: {
    first: DynamicTemplate | null;
    second: DynamicTemplate | null;
    third?: DynamicTemplate | null;
  }): Promise<DynamicTemplate | null>;
}
