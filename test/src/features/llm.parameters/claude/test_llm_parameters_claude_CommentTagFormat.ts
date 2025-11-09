import typia from "typia";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_claude_CommentTagFormat = (): void =>
  _test_llm_parameters({
    model: "claude",
    name: "CommentTagFormat",
  })(
    typia.llm.parameters<CommentTagFormatParameters, "claude">(),
  );

interface CommentTagFormatParameters {
  regular: CommentTagFormat;
  nullable: CommentTagFormat | null;
  optional: CommentTagFormat | undefined;
  faint: CommentTagFormat | null | undefined;
  array: Array<CommentTagFormat>;
}