import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectNullable } from "../../../structures/ObjectNullable";

export const test_llm_schema_claude_ObjectNullable = _test_llm_schema({
  model: "claude",
  name: "ObjectNullable",
})(typia.llm.schema<ObjectNullable, "claude">({}));
