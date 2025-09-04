import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ClassMethod } from "../../../structures/ClassMethod";

export const test_llm_schema_claude_ClassMethod = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ClassMethod",
  })(typia.llm.schema<ClassMethod, "claude">({}));
