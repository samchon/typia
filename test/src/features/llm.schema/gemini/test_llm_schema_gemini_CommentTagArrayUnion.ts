import typia from "typia";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_CommentTagArrayUnion = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "CommentTagArrayUnion",
  })(typia.llm.schema<CommentTagArrayUnion, "gemini">({}));