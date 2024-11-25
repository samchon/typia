import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";

export const test_llm_application_llama_CommentTagArrayUnion =
  _test_llm_application({
    model: "llama",
    name: "CommentTagArrayUnion",
  })(typia.llm.application<CommentTagArrayUnionApplication, "llama">());

interface CommentTagArrayUnionApplication {
  insert(first: CommentTagArrayUnion): Promise<void>;
  reduce(
    first: CommentTagArrayUnion,
    second: CommentTagArrayUnion | null,
  ): Promise<CommentTagArrayUnion>;
  coalesce(
    first: CommentTagArrayUnion | null,
    second: CommentTagArrayUnion | null,
    third?: CommentTagArrayUnion | null,
  ): Promise<CommentTagArrayUnion | null>;
}
