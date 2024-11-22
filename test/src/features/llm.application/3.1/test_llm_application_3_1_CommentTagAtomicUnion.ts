import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_llm_application_3_1_CommentTagAtomicUnion =
  _test_llm_application({
    model: "3.1",
    name: "CommentTagAtomicUnion",
  })(typia.llm.application<CommentTagAtomicUnionApplication, "3.1">());

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
