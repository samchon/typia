import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ClassGetter } from "../../../structures/ClassGetter";

export const test_llm_schema_claude_ClassGetter = _test_llm_schema({
  model: "claude",
  name: "ClassGetter",
})(typia.llm.schema<ClassGetter, "claude">({}));
