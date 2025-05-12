import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";

export const test_llm_parameters_3_0_CommentTagDefault = _test_llm_parameters({
  model: "3.0",
  name: "CommentTagDefault",
})(typia.llm.parameters<CommentTagDefaultParameters, "3.0">());

interface CommentTagDefaultParameters {
  regular: CommentTagDefault;
  nullable: CommentTagDefault | null;
  optional: CommentTagDefault | undefined;
  faint: CommentTagDefault | null | undefined;
  array: Array<CommentTagDefault>;
}
