import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { CommentTagLength } from "../../../structures/CommentTagLength";

export const test_llm_applicationEquals_gemini_CommentTagLength = (): void =>
  _test_llm_applicationEquals({
    model: "gemini",
    name: "CommentTagLength",
    factory: CommentTagLength,
  })(
    typia.llm.application<
      CommentTagLengthApplication,
      "gemini",
      { equal: true }
    >(),
  );

interface CommentTagLengthApplication {
  insert(p: { first: CommentTagLength }): Promise<void>;
  reduce(p: {
    first: CommentTagLength;
    second: CommentTagLength | null;
  }): Promise<CommentTagLength>;
  coalesce(p: {
    first: CommentTagLength | null;
    second: CommentTagLength | null;
    third?: CommentTagLength | null;
  }): Promise<CommentTagLength | null>;
}
