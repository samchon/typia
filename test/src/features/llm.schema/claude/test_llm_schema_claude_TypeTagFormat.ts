import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_llm_schema_claude_TypeTagFormat = _test_llm_schema({
  model: "claude",
  name: "TypeTagFormat",
})(typia.llm.schema<TypeTagFormat, "claude">({}));
