import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { CommentTagType } from "../../../structures/CommentTagType";

export const test_llm_schema_claude_CommentTagType = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "CommentTagType",
  })(typia.llm.schema<CommentTagType, "claude">({}));
