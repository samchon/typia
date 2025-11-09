import typia from "typia";
import { CommentTagType } from "../../../structures/CommentTagType";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_3_1_CommentTagType = (): void =>
  _test_llm_application({
    model: "3.1",
    name: "CommentTagType",
    factory: CommentTagType
  })(
    typia.llm.application<CommentTagTypeApplication, "3.1">(),
  );

interface CommentTagTypeApplication {
  insert(p: { first: CommentTagType }): Promise<void>;
  reduce(p: { first: CommentTagType, second: CommentTagType | null }): Promise<CommentTagType>;
  coalesce(p: {
    first: CommentTagType | null,
    second: CommentTagType | null,
    third?: CommentTagType | null,
  }): Promise<CommentTagType | null>;
}