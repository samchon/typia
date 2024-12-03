import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";

export const test_llm_parameters_gemini_CommentTagFormat = _test_llm_parameters(
  {
    model: "gemini",
    name: "CommentTagFormat",
  },
)(typia.llm.parameters<CommentTagFormatParameters, "gemini">());

interface CommentTagFormatParameters {
  regular: CommentTagFormat;
  nullable: CommentTagFormat | null;
  optional: CommentTagFormat | undefined;
  faint: CommentTagFormat | null | undefined;
  array: Array<CommentTagFormat>;
}
