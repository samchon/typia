import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_llm_schema_claude_DynamicEnumeration = _test_llm_schema({
  model: "claude",
  name: "DynamicEnumeration",
})(typia.llm.schema<DynamicEnumeration, "claude">({}));
