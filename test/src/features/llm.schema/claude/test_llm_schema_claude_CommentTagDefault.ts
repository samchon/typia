import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";

export const test_llm_schema_claude_CommentTagDefault = _test_llm_schema({
  model: "claude",
  name: "CommentTagDefault",
})(typia.llm.schema<CommentTagDefault, "claude">({}));
