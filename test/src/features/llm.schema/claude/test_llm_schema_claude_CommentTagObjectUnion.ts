import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_llm_schema_claude_CommentTagObjectUnion = _test_llm_schema({
  model: "claude",
  name: "CommentTagObjectUnion",
})(typia.llm.schema<CommentTagObjectUnion, "claude">({}));
