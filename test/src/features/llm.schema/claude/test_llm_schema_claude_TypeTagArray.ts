import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagArray } from "../../../structures/TypeTagArray";

export const test_llm_schema_claude_TypeTagArray = _test_llm_schema({
  model: "claude",
  name: "TypeTagArray",
})(typia.llm.schema<TypeTagArray, "claude">({}));
