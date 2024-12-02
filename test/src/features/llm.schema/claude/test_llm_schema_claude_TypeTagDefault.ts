import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_llm_schema_claude_TypeTagDefault = _test_llm_schema({
  model: "claude",
  name: "TypeTagDefault",
})(typia.llm.schema<TypeTagDefault, "claude">({}));
