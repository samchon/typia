import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_llm_application_3_0_CommentTagObjectUnion =
  _test_llm_application({
    model: "3.0",
    name: "CommentTagObjectUnion",
  })(typia.llm.application<CommentTagObjectUnionApplication, "3.0">());

interface CommentTagObjectUnionApplication {
  insert(p: { first: CommentTagObjectUnion }): Promise<void>;
  reduce(p: {
    first: CommentTagObjectUnion;
    second: CommentTagObjectUnion | null;
  }): Promise<CommentTagObjectUnion>;
  coalesce(p: {
    first: CommentTagObjectUnion | null;
    second: CommentTagObjectUnion | null;
    third?: CommentTagObjectUnion | null;
  }): Promise<CommentTagObjectUnion | null>;
}
