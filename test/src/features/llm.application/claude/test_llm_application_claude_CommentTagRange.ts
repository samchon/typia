import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { CommentTagRange } from "../../../structures/CommentTagRange";

export const test_llm_application_claude_CommentTagRange =
  _test_llm_application({
    model: "claude",
    name: "CommentTagRange",
  })(typia.llm.application<CommentTagRangeApplication, "claude">());

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
