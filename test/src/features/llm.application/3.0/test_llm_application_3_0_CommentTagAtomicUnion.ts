import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_llm_application_3_0_CommentTagAtomicUnion = (): void =>
  _test_llm_application({
    model: "3.0",
    name: "CommentTagAtomicUnion",
    factory: CommentTagAtomicUnion,
  })(typia.llm.application<CommentTagAtomicUnionApplication, "3.0">());

interface CommentTagAtomicUnionApplication {
  insert(p: { first: CommentTagAtomicUnion }): Promise<void>;
  reduce(p: {
    first: CommentTagAtomicUnion;
    second: CommentTagAtomicUnion | null;
  }): Promise<CommentTagAtomicUnion>;
  coalesce(p: {
    first: CommentTagAtomicUnion | null;
    second: CommentTagAtomicUnion | null;
    third?: CommentTagAtomicUnion | null;
  }): Promise<CommentTagAtomicUnion | null>;
}
