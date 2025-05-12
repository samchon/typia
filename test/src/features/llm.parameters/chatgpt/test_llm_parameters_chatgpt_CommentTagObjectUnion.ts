import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_llm_parameters_chatgpt_CommentTagObjectUnion =
  _test_llm_parameters({
    model: "chatgpt",
    name: "CommentTagObjectUnion",
  })(typia.llm.parameters<CommentTagObjectUnionParameters, "chatgpt">());

interface CommentTagObjectUnionParameters {
  regular: CommentTagObjectUnion;
  nullable: CommentTagObjectUnion | null;
  optional: CommentTagObjectUnion | undefined;
  faint: CommentTagObjectUnion | null | undefined;
  array: Array<CommentTagObjectUnion>;
}
