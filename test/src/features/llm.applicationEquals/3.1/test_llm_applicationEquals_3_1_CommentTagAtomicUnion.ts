import typia from "typia";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_3_1_CommentTagAtomicUnion = (): void =>
  _test_llm_applicationEquals({
    model: "3.1",
    name: "CommentTagAtomicUnion",
    factory: CommentTagAtomicUnion
  })(
    typia.llm.application<CommentTagAtomicUnionApplication, "3.1", { equals: true }>(),
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