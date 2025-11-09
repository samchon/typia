import typia from "typia";
import { CommentTagFormat } from "../../../structures/CommentTagFormat";
import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";

export const test_llm_parameters_3_1_CommentTagFormat = (): void =>
  _test_llm_parameters({
    model: "3.1",
    name: "CommentTagFormat",
  })(
    typia.llm.parameters<CommentTagFormatParameters, "3.1">(),
  );

interface CommentTagFormatParameters {
  regular: CommentTagFormat;
  nullable: CommentTagFormat | null;
  optional: CommentTagFormat | undefined;
  faint: CommentTagFormat | null | undefined;
  array: Array<CommentTagFormat>;
}