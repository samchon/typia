import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_llm_parameters_3_0_CommentTagObjectUnion = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "CommentTagObjectUnion",
  })(typia.llm.parameters<CommentTagObjectUnionParameters, "3.0">());

interface CommentTagObjectUnionParameters {
  regular: CommentTagObjectUnion;
  nullable: CommentTagObjectUnion | null;
  optional: CommentTagObjectUnion | undefined;
  faint: CommentTagObjectUnion | null | undefined;
  array: Array<CommentTagObjectUnion>;
}
