import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_llm_schema_claude_ArrayRepeatedNullable = _test_llm_schema({
  model: "claude",
  name: "ArrayRepeatedNullable",
})(typia.llm.schema<ArrayRepeatedNullable, "claude">({}));
