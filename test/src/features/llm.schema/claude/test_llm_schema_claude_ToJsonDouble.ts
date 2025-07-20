import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_llm_schema_claude_ToJsonDouble = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ToJsonDouble",
  })(typia.llm.schema<ToJsonDouble, "claude">({}));
