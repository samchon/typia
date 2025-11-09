import typia from "typia";
import { CommentTagRange } from "../../../structures/CommentTagRange";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_chatgpt_CommentTagRange = (): void =>
  _test_llm_parameters({
    model: "chatgpt",
    name: "CommentTagRange",
  })(
    typia.llm.parameters<CommentTagRangeParameters, "chatgpt">(),
  );

interface CommentTagRangeParameters {
  regular: CommentTagRange;
  nullable: CommentTagRange | null;
  optional: CommentTagRange | undefined;
  faint: CommentTagRange | null | undefined;
  array: Array<CommentTagRange>;
}