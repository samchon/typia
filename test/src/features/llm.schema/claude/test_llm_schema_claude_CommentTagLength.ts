import typia from "typia";
import { CommentTagLength } from "../../../structures/CommentTagLength";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_CommentTagLength = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "CommentTagLength",
  })(typia.llm.schema<CommentTagLength, "claude">({}));