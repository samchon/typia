import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { CommentTagType } from "../../../structures/CommentTagType";

export const test_llm_parameters_gemini_CommentTagType = (): void =>
  _test_llm_parameters({
    model: "gemini",
    name: "CommentTagType",
  })(typia.llm.parameters<CommentTagTypeParameters, "gemini">());

interface CommentTagTypeParameters {
  regular: CommentTagType;
  nullable: CommentTagType | null;
  optional: CommentTagType | undefined;
  faint: CommentTagType | null | undefined;
  array: Array<CommentTagType>;
}
