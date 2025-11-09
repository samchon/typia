import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";

export const test_llm_schema_claude_TypeTagPattern = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "TypeTagPattern",
  })(typia.llm.schema<TypeTagPattern, "claude">({}));
