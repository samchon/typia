import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectPrimitive } from "../../../structures/ObjectPrimitive";

export const test_llm_schema_claude_ObjectPrimitive = _test_llm_schema({
  model: "claude",
  name: "ObjectPrimitive",
})(typia.llm.schema<ObjectPrimitive, "claude">({}));
