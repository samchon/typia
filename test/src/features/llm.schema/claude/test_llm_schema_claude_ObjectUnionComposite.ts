import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectUnionComposite } from "../../../structures/ObjectUnionComposite";

export const test_llm_schema_claude_ObjectUnionComposite = _test_llm_schema({
  model: "claude",
  name: "ObjectUnionComposite",
})(typia.llm.schema<ObjectUnionComposite, "claude">({}));
