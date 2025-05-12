import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { CommentTagRange } from "../../../structures/CommentTagRange";

export const test_llm_application_gemini_CommentTagRange =
  _test_llm_application({
    model: "gemini",
    name: "CommentTagRange",
    factory: CommentTagRange,
  })(typia.llm.application<CommentTagRangeApplication, "gemini">());

interface CommentTagRangeApplication {
  insert(p: { first: CommentTagRange }): Promise<void>;
  reduce(p: {
    first: CommentTagRange;
    second: CommentTagRange | null;
  }): Promise<CommentTagRange>;
  coalesce(p: {
    first: CommentTagRange | null;
    second: CommentTagRange | null;
    third?: CommentTagRange | null;
  }): Promise<CommentTagRange | null>;
}
