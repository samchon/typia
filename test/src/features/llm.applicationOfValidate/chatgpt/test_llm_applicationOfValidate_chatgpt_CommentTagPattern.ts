import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_llm_applicationOfValidate_chatgpt_CommentTagPattern =
  _test_llm_applicationOfValidate({
    model: "chatgpt",
    name: "CommentTagPattern",
    factory: CommentTagPattern,
  })(
    typia.llm.applicationOfValidate<CommentTagPatternApplication, "chatgpt">(),
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
