import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_llm_application_llama_CommentTagObjectUnion =
  _test_llm_application({
    model: "llama",
    name: "CommentTagObjectUnion",
  })(typia.llm.application<CommentTagObjectUnionApplication, "llama">());

interface CommentTagObjectUnionApplication {
  insert(first: CommentTagObjectUnion): Promise<void>;
  reduce(
    first: CommentTagObjectUnion,
    second: CommentTagObjectUnion | null,
  ): Promise<CommentTagObjectUnion>;
  coalesce(
    first: CommentTagObjectUnion | null,
    second: CommentTagObjectUnion | null,
    third?: CommentTagObjectUnion | null,
  ): Promise<CommentTagObjectUnion | null>;
}
