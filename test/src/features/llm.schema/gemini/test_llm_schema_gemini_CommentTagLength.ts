import typia from "typia";
import { CommentTagLength } from "../../../structures/CommentTagLength";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_CommentTagLength = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "CommentTagLength",
  })(typia.llm.schema<CommentTagLength, "gemini">({}));