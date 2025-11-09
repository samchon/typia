import typia from "typia";
import { CommentTagLength } from "../../../structures/CommentTagLength";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_claude_CommentTagLength = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "CommentTagLength",
  })(
    typia.llm.parameters<CommentTagLengthParameters, "claude">(),
  );

interface CommentTagLengthParameters {
  regular: CommentTagLength;
  nullable: CommentTagLength | null;
  optional: CommentTagLength | undefined;
  faint: CommentTagLength | null | undefined;
  array: Array<CommentTagLength>;
}