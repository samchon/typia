import typia from "typia";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_1_CommentTagObjectUnion = (): void =>
  _test_llm_application({
    model: "3.1",
    name: "CommentTagObjectUnion",
    factory: CommentTagObjectUnion
  })(
    typia.llm.application<CommentTagObjectUnionApplication, "3.1">(),
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