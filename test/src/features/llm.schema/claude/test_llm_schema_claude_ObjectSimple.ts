import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectSimple } from "../../../structures/ObjectSimple";

export const test_llm_schema_claude_ObjectSimple = _test_llm_schema({
  model: "claude",
  name: "ObjectSimple",
})(typia.llm.schema<ObjectSimple, "claude">({}));
