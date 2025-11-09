import typia from "typia";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_gemini_CommentTagAtomicUnion = (): void =>
  _test_llm_application({
    model: "gemini",
    name: "CommentTagAtomicUnion",
    factory: CommentTagAtomicUnion
  })(
    typia.llm.application<CommentTagAtomicUnionApplication, "gemini">(),
  );

interface CommentTagAtomicUnionApplication {
  insert(p: { first: CommentTagAtomicUnion }): Promise<void>;
  reduce(p: { first: CommentTagAtomicUnion, second: CommentTagAtomicUnion | null }): Promise<CommentTagAtomicUnion>;
  coalesce(p: {
    first: CommentTagAtomicUnion | null,
    second: CommentTagAtomicUnion | null,
    third?: CommentTagAtomicUnion | null,
  }): Promise<CommentTagAtomicUnion | null>;
}