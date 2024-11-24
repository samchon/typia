import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagRange } from "../../../structures/CommentTagRange";

export const test_llm_schema_claude_CommentTagRange = _test_llm_schema({
  model: "claude",
  name: "CommentTagRange",
})(typia.llm.schema<CommentTagRange, "claude">({}));
