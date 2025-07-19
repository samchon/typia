import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { CommentTagArray } from "../../../structures/CommentTagArray";

export const test_llm_application_llama_CommentTagArray =
  _test_llm_applicationEquals({
    model: "llama",
    name: "CommentTagArray",
    factory: CommentTagArray,
  })(
    typia.llm.application<
      CommentTagArrayApplication,
      "llama",
      { equal: true }
    >(),
  );

interface CommentTagArrayApplication {
  insert(p: { first: CommentTagArray }): Promise<void>;
  reduce(p: {
    first: CommentTagArray;
    second: CommentTagArray | null;
  }): Promise<CommentTagArray>;
  coalesce(p: {
    first: CommentTagArray | null;
    second: CommentTagArray | null;
    third?: CommentTagArray | null;
  }): Promise<CommentTagArray | null>;
}
