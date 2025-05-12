import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_llm_schema_claude_CommentTagPattern = _test_llm_schema({
  model: "claude",
  name: "CommentTagPattern",
})(typia.llm.schema<CommentTagPattern, "claude">({}));
