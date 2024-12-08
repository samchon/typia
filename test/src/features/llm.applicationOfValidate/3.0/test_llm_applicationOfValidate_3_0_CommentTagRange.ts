import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { CommentTagRange } from "../../../structures/CommentTagRange";

export const test_llm_applicationOfValidate_3_0_CommentTagRange =
  _test_llm_applicationOfValidate({
    model: "3.0",
    name: "CommentTagRange",
    factory: CommentTagRange,
  })(typia.llm.applicationOfValidate<CommentTagRangeApplication, "3.0">());

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
