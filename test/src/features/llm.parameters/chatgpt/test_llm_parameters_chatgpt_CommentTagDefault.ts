import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";

export const test_llm_parameters_chatgpt_CommentTagDefault =
  _test_llm_parameters({
    model: "chatgpt",
    name: "CommentTagDefault",
  })(typia.llm.parameters<CommentTagDefaultParameters, "chatgpt">());

interface CommentTagDefaultParameters {
  regular: CommentTagDefault;
  nullable: CommentTagDefault | null;
  optional: CommentTagDefault | undefined;
  faint: CommentTagDefault | null | undefined;
  array: Array<CommentTagDefault>;
}
