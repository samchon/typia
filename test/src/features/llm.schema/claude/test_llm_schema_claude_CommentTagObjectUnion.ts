import typia from "typia";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_claude_CommentTagObjectUnion = (): void =>
  _test_llm_schema({
    model: "claude",
    name: "CommentTagObjectUnion",
  })(typia.llm.schema<CommentTagObjectUnion, "claude">({}));