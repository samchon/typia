import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { CommentTagType } from "../../../structures/CommentTagType";

export const test_llm_applicationEquals_gemini_CommentTagType = (): void =>
  _test_llm_applicationEquals({
    model: "gemini",
    name: "CommentTagType",
    factory: CommentTagType,
  })(
    typia.llm.application<
      CommentTagTypeApplication,
      "gemini",
      { equals: true }
    >(),
  );

interface CommentTagTypeApplication {
  insert(p: { first: CommentTagType }): Promise<void>;
  reduce(p: {
    first: CommentTagType;
    second: CommentTagType | null;
  }): Promise<CommentTagType>;
  coalesce(p: {
    first: CommentTagType | null;
    second: CommentTagType | null;
    third?: CommentTagType | null;
  }): Promise<CommentTagType | null>;
}
