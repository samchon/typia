import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { CommentTagArray } from "../../../structures/CommentTagArray";

export const test_llm_applicationOfValidate_3_1_CommentTagArray =
  _test_llm_applicationOfValidate({
    model: "3.1",
    name: "CommentTagArray",
    factory: CommentTagArray,
  })(typia.llm.applicationOfValidate<CommentTagArrayApplication, "3.1">());

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
