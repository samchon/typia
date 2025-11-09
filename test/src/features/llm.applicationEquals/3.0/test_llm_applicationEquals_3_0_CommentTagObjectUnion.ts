import typia from "typia";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_3_0_CommentTagObjectUnion = (): void =>
  _test_llm_applicationEquals({
    model: "3.0",
    name: "CommentTagObjectUnion",
    factory: CommentTagObjectUnion
  })(
    typia.llm.application<CommentTagObjectUnionApplication, "3.0", { equals: true }>(),
  );

interface CommentTagObjectUnionApplication {
  insert(p: { first: CommentTagObjectUnion }): Promise<void>;
  reduce(p: { first: CommentTagObjectUnion, second: CommentTagObjectUnion | null }): Promise<CommentTagObjectUnion>;
  coalesce(p: {
    first: CommentTagObjectUnion | null,
    second: CommentTagObjectUnion | null,
    third?: CommentTagObjectUnion | null,
  }): Promise<CommentTagObjectUnion | null>;
}