import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_llm_application_claude_CommentTagObjectUnion =
  _test_llm_application({
    model: "claude",
    name: "CommentTagObjectUnion",
  })(typia.llm.application<CommentTagObjectUnionApplication, "claude">());

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
