import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_llm_schema_claude_DynamicComposite = _test_llm_schema({
  model: "claude",
  name: "DynamicComposite",
})(typia.llm.schema<DynamicComposite, "claude">({}));
