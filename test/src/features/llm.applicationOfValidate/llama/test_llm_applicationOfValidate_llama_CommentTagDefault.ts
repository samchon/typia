import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";

export const test_llm_applicationOfValidate_llama_CommentTagDefault =
  _test_llm_applicationOfValidate({
    model: "llama",
    name: "CommentTagDefault",
    factory: CommentTagDefault,
  })(typia.llm.applicationOfValidate<CommentTagDefaultApplication, "llama">());

interface CommentTagDefaultApplication {
  insert(p: { first: CommentTagDefault }): Promise<void>;
  reduce(p: {
    first: CommentTagDefault;
    second: CommentTagDefault | null;
  }): Promise<CommentTagDefault>;
  coalesce(p: {
    first: CommentTagDefault | null;
    second: CommentTagDefault | null;
    third?: CommentTagDefault | null;
  }): Promise<CommentTagDefault | null>;
}
