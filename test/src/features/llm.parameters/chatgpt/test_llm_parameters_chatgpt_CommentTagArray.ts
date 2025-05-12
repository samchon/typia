import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { CommentTagArray } from "../../../structures/CommentTagArray";

export const test_llm_parameters_chatgpt_CommentTagArray = _test_llm_parameters(
  {
    model: "chatgpt",
    name: "CommentTagArray",
  },
)(typia.llm.parameters<CommentTagArrayParameters, "chatgpt">());

interface CommentTagArrayParameters {
  regular: CommentTagArray;
  nullable: CommentTagArray | null;
  optional: CommentTagArray | undefined;
  faint: CommentTagArray | null | undefined;
  array: Array<CommentTagArray>;
}
