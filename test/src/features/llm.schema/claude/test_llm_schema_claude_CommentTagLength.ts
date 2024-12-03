import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagLength } from "../../../structures/CommentTagLength";

export const test_llm_schema_claude_CommentTagLength = _test_llm_schema({
  model: "claude",
  name: "CommentTagLength",
})(typia.llm.schema<CommentTagLength, "claude">({}));
