import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { CommentTagObjectUnion } from "../../../structures/CommentTagObjectUnion";

export const test_llm_applicationEquals_chatgpt_CommentTagObjectUnion =
  (): void =>
    _test_llm_applicationEquals({
      model: "chatgpt",
      name: "CommentTagObjectUnion",
      factory: CommentTagObjectUnion,
    })(
      typia.llm.application<
        CommentTagObjectUnionApplication,
        "chatgpt",
        { equals:; true }
      >(),
    );

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
