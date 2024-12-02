import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_llm_schema_claude_DynamicNever = _test_llm_schema({
  model: "claude",
  name: "DynamicNever",
})(typia.llm.schema<DynamicNever, "claude">({}));
