import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { CommentTagRange } from "../../../structures/CommentTagRange";

export const test_llm_applicationOfValidate_gemini_CommentTagRange =
  _test_llm_applicationOfValidate({
    model: "gemini",
    name: "CommentTagRange",
    factory: CommentTagRange,
  })(typia.llm.applicationOfValidate<CommentTagRangeApplication, "gemini">());

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
