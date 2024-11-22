import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { CommentTagArray } from "../../../structures/CommentTagArray";

export const test_llm_application_chatgpt_CommentTagArray =
  _test_llm_application({
    model: "chatgpt",
    name: "CommentTagArray",
  })(typia.llm.application<CommentTagArrayApplication, "chatgpt">());

interface CommentTagArrayApplication {
  insert(first: CommentTagArray): Promise<void>;
  reduce(
    first: CommentTagArray,
    second: CommentTagArray | null,
  ): Promise<CommentTagArray>;
  coalesce(
    first: CommentTagArray | null,
    second: CommentTagArray | null,
    third?: CommentTagArray | null,
  ): Promise<CommentTagArray | null>;
}
