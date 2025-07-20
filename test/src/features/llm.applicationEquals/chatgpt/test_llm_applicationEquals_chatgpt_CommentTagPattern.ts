import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_llm_applicationEquals_chatgpt_CommentTagPattern = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "CommentTagPattern",
    factory: CommentTagPattern,
  })(
    typia.llm.application<
      CommentTagPatternApplication,
      "chatgpt",
      { equals:; true }
    >(),
  );

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
