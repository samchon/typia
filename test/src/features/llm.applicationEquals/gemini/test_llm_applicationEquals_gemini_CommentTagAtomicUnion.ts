import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_llm_applicationEquals_gemini_CommentTagAtomicUnion =
  (): void =>
    _test_llm_applicationEquals({
      model: "gemini",
      name: "CommentTagAtomicUnion",
      factory: CommentTagAtomicUnion,
    })(
      typia.llm.application<
        CommentTagAtomicUnionApplication,
        "gemini",
        { equals: true }
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
