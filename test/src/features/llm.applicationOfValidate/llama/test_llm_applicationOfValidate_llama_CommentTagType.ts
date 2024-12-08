import typia from "typia";

import { _test_llm_applicationOfValidate } from "../../../internal/_test_llm_applicationOfValidate";
import { CommentTagType } from "../../../structures/CommentTagType";

export const test_llm_applicationOfValidate_llama_CommentTagType =
  _test_llm_applicationOfValidate({
    model: "llama",
    name: "CommentTagType",
    factory: CommentTagType,
  })(typia.llm.applicationOfValidate<CommentTagTypeApplication, "llama">());

interface CommentTagTypeApplication {
  insert(p: { first: CommentTagType }): Promise<void>;
  reduce(p: {
    first: CommentTagType;
    second: CommentTagType | null;
  }): Promise<CommentTagType>;
  coalesce(p: {
    first: CommentTagType | null;
    second: CommentTagType | null;
    third?: CommentTagType | null;
  }): Promise<CommentTagType | null>;
}
