import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_llm_schema_claude_ToJsonNull = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ToJsonNull",
  })(typia.llm.schema<ToJsonNull, "claude">({}));
