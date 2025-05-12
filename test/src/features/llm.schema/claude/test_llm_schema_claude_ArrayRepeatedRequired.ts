import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_llm_schema_claude_ArrayRepeatedRequired = _test_llm_schema({
  model: "claude",
  name: "ArrayRepeatedRequired",
})(typia.llm.schema<ArrayRepeatedRequired, "claude">({}));
