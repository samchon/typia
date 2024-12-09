import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { CommentTagArray } from "../../../structures/CommentTagArray";

export const test_llm_applicationOfValidate_gemini_CommentTagArray =
  _test_llm_applicationOfValidate({
    model: "gemini",
    name: "CommentTagArray",
    factory: CommentTagArray,
  })(typia.llm.applicationOfValidate<CommentTagArrayApplication, "gemini">());

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
