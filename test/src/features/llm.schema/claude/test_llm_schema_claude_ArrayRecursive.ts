import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_llm_schema_claude_ArrayRecursive = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ArrayRecursive",
  })(typia.llm.schema<ArrayRecursive, "claude">({}));
