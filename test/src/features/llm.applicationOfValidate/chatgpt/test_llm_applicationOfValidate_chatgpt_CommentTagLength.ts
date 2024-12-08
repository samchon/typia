import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { CommentTagLength } from "../../../structures/CommentTagLength";

export const test_llm_applicationOfValidate_chatgpt_CommentTagLength =
  _test_llm_applicationOfValidate({
    model: "chatgpt",
    name: "CommentTagLength",
    factory: CommentTagLength,
  })(typia.llm.applicationOfValidate<CommentTagLengthApplication, "chatgpt">());

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
