import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { CommentTagLength } from "../../../structures/CommentTagLength";

export const test_llm_applicationOfValidate_3_1_CommentTagLength =
  _test_llm_applicationOfValidate({
    model: "3.1",
    name: "CommentTagLength",
    factory: CommentTagLength,
  })(typia.llm.applicationOfValidate<CommentTagLengthApplication, "3.1">());

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
