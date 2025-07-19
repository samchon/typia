import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { CommentTagRange } from "../../../structures/CommentTagRange";

export const test_llm_application_chatgpt_CommentTagRange =
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "CommentTagRange",
    factory: CommentTagRange,
  })(
    typia.llm.application<
      CommentTagRangeApplication,
      "chatgpt",
      { equal: true }
    >(),
  );

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
