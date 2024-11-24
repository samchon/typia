import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectPartialAndRequired } from "../../../structures/ObjectPartialAndRequired";

export const test_llm_schema_claude_ObjectPartialAndRequired = _test_llm_schema(
  {
    model: "claude",
    name: "ObjectPartialAndRequired",
  },
)(typia.llm.schema<ObjectPartialAndRequired, "claude">({}));
