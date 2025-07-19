import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";

export const test_llm_application_3_0_CommentTagDefault =
  _test_llm_applicationEquals({
    model: "3.0",
    name: "CommentTagDefault",
    factory: CommentTagDefault,
  })(
    typia.llm.application<
      CommentTagDefaultApplication,
      "3.0",
      { equal: true }
    >(),
  );

interface CommentTagDefaultApplication {
  insert(p: { first: CommentTagDefault }): Promise<void>;
  reduce(p: {
    first: CommentTagDefault;
    second: CommentTagDefault | null;
  }): Promise<CommentTagDefault>;
  coalesce(p: {
    first: CommentTagDefault | null;
    second: CommentTagDefault | null;
    third?: CommentTagDefault | null;
  }): Promise<CommentTagDefault | null>;
}
