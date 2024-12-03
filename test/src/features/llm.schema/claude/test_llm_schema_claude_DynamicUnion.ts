import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicUnion } from "../../../structures/DynamicUnion";

export const test_llm_schema_claude_DynamicUnion = _test_llm_schema({
  model: "claude",
  name: "DynamicUnion",
})(typia.llm.schema<DynamicUnion, "claude">({}));
