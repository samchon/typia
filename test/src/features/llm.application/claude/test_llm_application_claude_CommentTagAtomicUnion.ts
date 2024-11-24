import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_llm_application_claude_CommentTagAtomicUnion =
  _test_llm_application({
    model: "claude",
    name: "CommentTagAtomicUnion",
  })(typia.llm.application<CommentTagAtomicUnionApplication, "claude">());

interface CommentTagAtomicUnionApplication {
  insert(first: CommentTagAtomicUnion): Promise<void>;
  reduce(
    first: CommentTagAtomicUnion,
    second: CommentTagAtomicUnion | null,
  ): Promise<CommentTagAtomicUnion>;
  coalesce(
    first: CommentTagAtomicUnion | null,
    second: CommentTagAtomicUnion | null,
    third?: CommentTagAtomicUnion | null,
  ): Promise<CommentTagAtomicUnion | null>;
}
