import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_llm_application_chatgpt_CommentTagAtomicUnion = (): void =>
  _test_llm_application({
    model: "chatgpt",
    name: "CommentTagAtomicUnion",
    factory: CommentTagAtomicUnion,
  })(typia.llm.application<CommentTagAtomicUnionApplication, "chatgpt">());

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
