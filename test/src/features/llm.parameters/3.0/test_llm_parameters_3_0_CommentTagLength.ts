import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { CommentTagLength } from "../../../structures/CommentTagLength";

export const test_llm_parameters_3_0_CommentTagLength = _test_llm_parameters({
  model: "3.0",
  name: "CommentTagLength",
})(typia.llm.parameters<CommentTagLengthParameters, "3.0">());

interface CommentTagLengthParameters {
  regular: CommentTagLength;
  nullable: CommentTagLength | null;
  optional: CommentTagLength | undefined;
  faint: CommentTagLength | null | undefined;
  array: Array<CommentTagLength>;
}
