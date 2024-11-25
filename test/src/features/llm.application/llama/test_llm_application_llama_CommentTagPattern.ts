import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_llm_application_llama_CommentTagPattern =
  _test_llm_application({
    model: "llama",
    name: "CommentTagPattern",
  })(typia.llm.application<CommentTagPatternApplication, "llama">());

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
