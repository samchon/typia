import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagCustom } from "../../../structures/TypeTagCustom";

export const test_llm_schema_claude_TypeTagCustom = _test_llm_schema({
  model: "claude",
  name: "TypeTagCustom",
})(typia.llm.schema<TypeTagCustom, "claude">({}));
