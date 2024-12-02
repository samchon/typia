import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ConstantEnumeration } from "../../../structures/ConstantEnumeration";

export const test_llm_schema_claude_ConstantEnumeration = _test_llm_schema({
  model: "claude",
  name: "ConstantEnumeration",
})(typia.llm.schema<ConstantEnumeration, "claude">({}));
