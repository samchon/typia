import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { CommentTagLength } from "../../../structures/CommentTagLength";

export const test_llm_parameters_chatgpt_CommentTagLength =
  _test_llm_parameters({
    model: "chatgpt",
    name: "CommentTagLength",
  })(typia.llm.parameters<CommentTagLengthParameters, "chatgpt">());

interface CommentTagLengthParameters {
  regular: CommentTagLength;
  nullable: CommentTagLength | null;
  optional: CommentTagLength | undefined;
  faint: CommentTagLength | null | undefined;
  array: Array<CommentTagLength>;
}
