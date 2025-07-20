import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_llm_parameters_llama_CommentTagPattern = (): void =>
  _test_llm_parameters({
    model: "llama",
    name: "CommentTagPattern",
  })(typia.llm.parameters<CommentTagPatternParameters, "llama">());

interface CommentTagPatternParameters {
  regular: CommentTagPattern;
  nullable: CommentTagPattern | null;
  optional: CommentTagPattern | undefined;
  faint: CommentTagPattern | null | undefined;
  array: Array<CommentTagPattern>;
}
