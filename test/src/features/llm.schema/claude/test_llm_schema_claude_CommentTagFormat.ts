import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_llm_schema_claude_CommentTagFormat = _test_llm_schema({
  model: "claude",
  name: "CommentTagFormat",
})(typia.llm.schema<CommentTagFormat, "claude">({}));
