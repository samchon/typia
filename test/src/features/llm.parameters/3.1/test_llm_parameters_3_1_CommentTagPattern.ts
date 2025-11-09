import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { CommentTagPattern } from "../../../structures/CommentTagPattern";

export const test_llm_parameters_3_1_CommentTagPattern = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "CommentTagPattern",
  })(typia.llm.parameters<CommentTagPatternParameters, "3.1">());

interface CommentTagPatternParameters {
  regular: CommentTagPattern;
  nullable: CommentTagPattern | null;
  optional: CommentTagPattern | undefined;
  faint: CommentTagPattern | null | undefined;
  array: Array<CommentTagPattern>;
}
