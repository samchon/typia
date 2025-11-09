import typia from "typia";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_CommentTagObjectUnion = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "CommentTagObjectUnion",
  })(typia.llm.schema<CommentTagObjectUnion, "gemini">({}));