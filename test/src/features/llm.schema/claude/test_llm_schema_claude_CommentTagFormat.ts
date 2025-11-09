import typia from "typia";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_CommentTagFormat = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "CommentTagFormat",
  })(typia.llm.schema<CommentTagFormat, "claude">({}));