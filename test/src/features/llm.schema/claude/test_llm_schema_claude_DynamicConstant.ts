import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicConstant } from "../../../structures/DynamicConstant";

export const test_llm_schema_claude_DynamicConstant = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "DynamicConstant",
  })(typia.llm.schema<DynamicConstant, "claude">({}));
