import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ObjectUnionImplicit } from "../../../structures/ObjectUnionImplicit";

export const test_llm_schema_claude_ObjectUnionImplicit = _test_llm_schema({
  model: "claude",
  name: "ObjectUnionImplicit",
})(typia.llm.schema<ObjectUnionImplicit, "claude">({}));
