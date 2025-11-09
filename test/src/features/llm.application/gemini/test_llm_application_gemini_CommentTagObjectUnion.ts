import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_llm_application_gemini_CommentTagObjectUnion = (): void =>
  _test_llm_application({
    model: "gemini",
    name: "CommentTagObjectUnion",
    factory: CommentTagObjectUnion,
  })(typia.llm.application<CommentTagObjectUnionApplication, "gemini">());

interface CommentTagObjectUnionApplication {
  insert(p: { first: CommentTagObjectUnion }): Promise<void>;
  reduce(p: {
    first: CommentTagObjectUnion;
    second: CommentTagObjectUnion | null;
  }): Promise<CommentTagObjectUnion>;
  coalesce(p: {
    first: CommentTagObjectUnion | null;
    second: CommentTagObjectUnion | null;
    third?: CommentTagObjectUnion | null;
  }): Promise<CommentTagObjectUnion | null>;
}
