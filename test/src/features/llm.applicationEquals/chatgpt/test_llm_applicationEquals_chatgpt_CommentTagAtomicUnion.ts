import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_llm_application_chatgpt_CommentTagAtomicUnion =
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "CommentTagAtomicUnion",
    factory: CommentTagAtomicUnion,
  })(
    typia.llm.application<
      CommentTagAtomicUnionApplication,
      "chatgpt",
      { equal: true }
    >(),
  );

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
