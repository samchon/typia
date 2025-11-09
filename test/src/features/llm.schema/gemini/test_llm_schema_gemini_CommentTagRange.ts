import typia from "typia";
import { CommentTagRange } from "../../../structures/CommentTagRange";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_CommentTagRange = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "CommentTagRange",
  })(typia.llm.schema<CommentTagRange, "gemini">({}));