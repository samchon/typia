import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { CommentTagDefault } from "../../../structures/CommentTagDefault";

export const test_llm_parameters_llama_CommentTagDefault = _test_llm_parameters(
  {
    model: "llama",
    name: "CommentTagDefault",
  },
)(typia.llm.parameters<CommentTagDefaultParameters, "llama">());

interface CommentTagDefaultParameters {
  regular: CommentTagDefault;
  nullable: CommentTagDefault | null;
  optional: CommentTagDefault | undefined;
  faint: CommentTagDefault | null | undefined;
  array: Array<CommentTagDefault>;
}
