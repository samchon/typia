import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_llm_application_gemini_CommentTagFormat =
  _test_llm_application({
    model: "gemini",
    name: "CommentTagFormat",
  })(typia.llm.application<CommentTagFormatApplication, "gemini">());

interface CommentTagFormatApplication {
  insert(first: CommentTagFormat): Promise<void>;
  reduce(
    first: CommentTagFormat,
    second: CommentTagFormat | null,
  ): Promise<CommentTagFormat>;
  coalesce(
    first: CommentTagFormat | null,
    second: CommentTagFormat | null,
    third?: CommentTagFormat | null,
  ): Promise<CommentTagFormat | null>;
}
