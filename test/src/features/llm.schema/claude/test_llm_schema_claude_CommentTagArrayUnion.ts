import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";

export const test_llm_schema_claude_CommentTagArrayUnion = _test_llm_schema({
  model: "claude",
  name: "CommentTagArrayUnion",
})(typia.llm.schema<CommentTagArrayUnion, "claude">({}));
