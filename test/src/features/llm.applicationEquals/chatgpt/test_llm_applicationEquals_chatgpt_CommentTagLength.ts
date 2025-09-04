import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { CommentTagLength } from "../../../structures/CommentTagLength";

export const test_llm_applicationEquals_chatgpt_CommentTagLength = (): void =>
  _test_llm_applicationEquals({
    model: "chatgpt",
    name: "CommentTagLength",
    factory: CommentTagLength,
  })(
    typia.llm.application<
      CommentTagLengthApplication,
      "chatgpt",
      { equals: true }
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
