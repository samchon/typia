import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { CommentTagType } from "../../../structures/CommentTagType";

export const test_llm_parameters_chatgpt_CommentTagType = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "CommentTagType",
  })(typia.llm.parameters<CommentTagTypeParameters, "chatgpt">());

interface CommentTagTypeParameters {
  regular: CommentTagType;
  nullable: CommentTagType | null;
  optional: CommentTagType | undefined;
  faint: CommentTagType | null | undefined;
  array: Array<CommentTagType>;
}
