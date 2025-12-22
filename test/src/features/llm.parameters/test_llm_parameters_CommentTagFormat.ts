import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { CommentTagFormat } from "../../structures/CommentTagFormat";

export const test_llm_parameters_CommentTagFormat = (): void =>
  _test_llm_parameters("CommentTagFormat")(
    typia.llm.parameters<CommentTagFormatParameters>(),
  );

interface CommentTagFormatParameters {
  regular: CommentTagFormat;
  nullable: CommentTagFormat | null;
  optional: CommentTagFormat | undefined;
  faint: CommentTagFormat | null | undefined;
  array: Array<CommentTagFormat>;
}
