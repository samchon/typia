import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { CommentTagType } from "../../../structures/CommentTagType";

export const test_llm_parameters_3_1_CommentTagType = _test_llm_parameters({
  model: "3.1",
  name: "CommentTagType",
})(typia.llm.parameters<CommentTagTypeParameters, "3.1">());

interface CommentTagTypeParameters {
  regular: CommentTagType;
  nullable: CommentTagType | null;
  optional: CommentTagType | undefined;
  faint: CommentTagType | null | undefined;
  array: Array<CommentTagType>;
}
