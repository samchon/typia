import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_llm_application_3_1_CommentTagFormat = _test_llm_application({
  model: "3.1",
  name: "CommentTagFormat",
})(typia.llm.application<CommentTagFormatApplication, "3.1">());

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
