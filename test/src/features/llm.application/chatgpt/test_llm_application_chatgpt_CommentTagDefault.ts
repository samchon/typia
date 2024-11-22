import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";

export const test_llm_application_chatgpt_CommentTagDefault =
  _test_llm_application({
    model: "chatgpt",
    name: "CommentTagDefault",
  })(typia.llm.application<CommentTagDefaultApplication, "chatgpt">());

interface CommentTagDefaultApplication {
  insert(first: CommentTagDefault): Promise<void>;
  reduce(
    first: CommentTagDefault,
    second: CommentTagDefault | null,
  ): Promise<CommentTagDefault>;
  coalesce(
    first: CommentTagDefault | null,
    second: CommentTagDefault | null,
    third?: CommentTagDefault | null,
  ): Promise<CommentTagDefault | null>;
}
