import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TemplateAtomic } from "../../../structures/TemplateAtomic";

export const test_llm_schema_claude_TemplateAtomic = _test_llm_schema({
  model: "claude",
  name: "TemplateAtomic",
})(typia.llm.schema<TemplateAtomic, "claude">({}));
