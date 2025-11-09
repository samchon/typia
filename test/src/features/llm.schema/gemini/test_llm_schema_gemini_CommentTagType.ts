import typia from "typia";
import { CommentTagType } from "../../../structures/CommentTagType";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_CommentTagType = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "CommentTagType",
  })(typia.llm.schema<CommentTagType, "gemini">({}));