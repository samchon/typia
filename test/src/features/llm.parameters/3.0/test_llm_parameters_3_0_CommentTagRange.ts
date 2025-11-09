import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { CommentTagRange } from "../../../structures/CommentTagRange";

export const test_llm_parameters_3_0_CommentTagRange = (): void =>
  _test_llm_parameters({
    model: "3.0",
    name: "CommentTagRange",
  })(typia.llm.parameters<CommentTagRangeParameters, "3.0">());

interface CommentTagRangeParameters {
  regular: CommentTagRange;
  nullable: CommentTagRange | null;
  optional: CommentTagRange | undefined;
  faint: CommentTagRange | null | undefined;
  array: Array<CommentTagRange>;
}
