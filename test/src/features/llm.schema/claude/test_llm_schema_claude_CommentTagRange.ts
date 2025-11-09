import typia from "typia";
import { CommentTagRange } from "../../../structures/CommentTagRange";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_CommentTagRange = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "CommentTagRange",
  })(typia.llm.schema<CommentTagRange, "claude">({}));