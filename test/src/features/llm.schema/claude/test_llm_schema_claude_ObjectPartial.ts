import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectPartial } from "../../../structures/ObjectPartial";

export const test_llm_schema_claude_ObjectPartial = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "ObjectPartial",
  })(typia.llm.schema<ObjectPartial, "claude">({}));
