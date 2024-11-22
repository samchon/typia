import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { CommentTagType } from "../../../structures/CommentTagType";

export const test_llm_application_chatgpt_CommentTagType =
  _test_llm_application({
    model: "chatgpt",
    name: "CommentTagType",
  })(typia.llm.application<CommentTagTypeApplication, "chatgpt">());

interface CommentTagTypeApplication {
  insert(first: CommentTagType): Promise<void>;
  reduce(
    first: CommentTagType,
    second: CommentTagType | null,
  ): Promise<CommentTagType>;
  coalesce(
    first: CommentTagType | null,
    second: CommentTagType | null,
    third?: CommentTagType | null,
  ): Promise<CommentTagType | null>;
}
