import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectDate } from "../../../structures/ObjectDate";

export const test_llm_schema_claude_ObjectDate = _test_llm_schema({
  model: "claude",
  name: "ObjectDate",
})(typia.llm.schema<ObjectDate, "claude">({}));
