import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_llm_application_gemini_CommentTagPattern = (): void =>
  _test_llm_application({
    model: "gemini",
    name: "CommentTagPattern",
    factory: CommentTagPattern,
  })(typia.llm.application<CommentTagPatternApplication, "gemini">());

interface CommentTagPatternApplication {
  insert(p: { first: CommentTagPattern }): Promise<void>;
  reduce(p: {
    first: CommentTagPattern;
    second: CommentTagPattern | null;
  }): Promise<CommentTagPattern>;
  coalesce(p: {
    first: CommentTagPattern | null;
    second: CommentTagPattern | null;
    third?: CommentTagPattern | null;
  }): Promise<CommentTagPattern | null>;
}
