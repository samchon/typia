import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_llm_application_chatgpt_CommentTagPattern =
  _test_llm_application({
    model: "chatgpt",
    name: "CommentTagPattern",
  })(typia.llm.application<CommentTagPatternApplication, "chatgpt">());

interface CommentTagPatternApplication {
  insert(first: CommentTagPattern): Promise<void>;
  reduce(
    first: CommentTagPattern,
    second: CommentTagPattern | null,
  ): Promise<CommentTagPattern>;
  coalesce(
    first: CommentTagPattern | null,
    second: CommentTagPattern | null,
    third?: CommentTagPattern | null,
  ): Promise<CommentTagPattern | null>;
}
