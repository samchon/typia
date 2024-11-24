import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_llm_schema_claude_TypeTagRange = _test_llm_schema({
  model: "claude",
  name: "TypeTagRange",
})(typia.llm.schema<TypeTagRange, "claude">({}));
