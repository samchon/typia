import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_llm_schema_claude_ToJsonUnion = _test_llm_schema({
  model: "claude",
  name: "ToJsonUnion",
})(typia.llm.schema<ToJsonUnion, "claude">({}));
