import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_llm_schema_claude_DynamicTemplate = _test_llm_schema({
  model: "claude",
  name: "DynamicTemplate",
})(typia.llm.schema<DynamicTemplate, "claude">({}));
