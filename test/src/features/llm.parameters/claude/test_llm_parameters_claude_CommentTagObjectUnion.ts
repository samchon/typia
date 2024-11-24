import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_llm_parameters_claude_CommentTagObjectUnion =
  _test_llm_parameters({
    model: "claude",
    name: "CommentTagObjectUnion",
  })(typia.llm.parameters<CommentTagObjectUnionParameters, "claude">());

interface CommentTagObjectUnionParameters {
  regular: CommentTagObjectUnion;
  nullable: CommentTagObjectUnion | null;
  optional: CommentTagObjectUnion | undefined;
  faint: CommentTagObjectUnion | null | undefined;
  array: Array<CommentTagObjectUnion>;
}
