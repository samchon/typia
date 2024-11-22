import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { CommentTagRange } from "../../../structures/CommentTagRange";

export const test_llm_application_3_0_CommentTagRange = _test_llm_application({
  model: "3.0",
  name: "CommentTagRange",
})(typia.llm.application<CommentTagRangeApplication, "3.0">());

interface CommentTagRangeApplication {
  insert(first: CommentTagRange): Promise<void>;
  reduce(
    first: CommentTagRange,
    second: CommentTagRange | null,
  ): Promise<CommentTagRange>;
  coalesce(
    first: CommentTagRange | null,
    second: CommentTagRange | null,
    third?: CommentTagRange | null,
  ): Promise<CommentTagRange | null>;
}
