import typia from "typia";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_CommentTagDefault = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "CommentTagDefault",
  })(typia.llm.schema<CommentTagDefault, "claude">({}));