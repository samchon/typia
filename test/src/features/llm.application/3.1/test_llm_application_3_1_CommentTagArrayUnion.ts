import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { CommentTagArrayUnion } from "../../../structures/CommentTagArrayUnion";

export const test_llm_application_3_1_CommentTagArrayUnion =
  _test_llm_application({
    model: "3.1",
    name: "CommentTagArrayUnion",
  })(typia.llm.application<CommentTagArrayUnionApplication, "3.1">());

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
