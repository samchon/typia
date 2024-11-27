import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";

export const test_llm_application_3_1_CommentTagDefault = _test_llm_application(
  {
    model: "3.1",
    name: "CommentTagDefault",
  },
)(typia.llm.application<CommentTagDefaultApplication, "3.1">());

interface CommentTagDefaultApplication {
  insert(p: { first: CommentTagDefault }): Promise<void>;
  reduce(p: {
    first: CommentTagDefault;
    second: CommentTagDefault | null;
  }): Promise<CommentTagDefault>;
  coalesce(p: {
    first: CommentTagDefault | null;
    second: CommentTagDefault | null;
    third?: CommentTagDefault | null;
  }): Promise<CommentTagDefault | null>;
}
