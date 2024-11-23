import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_llm_parameters_chatgpt_CommentTagPattern =
  _test_llm_parameters({
    model: "chatgpt",
    name: "CommentTagPattern",
  })(typia.llm.parameters<CommentTagPatternParameters, "chatgpt">());

interface CommentTagPatternParameters {
  regular: CommentTagPattern;
  nullable: CommentTagPattern | null;
  optional: CommentTagPattern | undefined;
  faint: CommentTagPattern | null | undefined;
  array: Array<CommentTagPattern>;
}
