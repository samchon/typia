import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_llm_schema_claude_CommentTagAtomicUnion = _test_llm_schema({
  model: "claude",
  name: "CommentTagAtomicUnion",
})(typia.llm.schema<CommentTagAtomicUnion, "claude">({}));
