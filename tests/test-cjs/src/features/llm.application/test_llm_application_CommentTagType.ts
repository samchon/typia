import typia from "typia";

import { _test_llm_application } from "../../internal/_test_llm_application";
import { CommentTagType } from "../../structures/CommentTagType";

export const test_llm_application_CommentTagType = (): void =>
  _test_llm_application({
    name: "CommentTagType",
    factory: CommentTagType,
  })(typia.llm.application<CommentTagTypeApplication>());

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
