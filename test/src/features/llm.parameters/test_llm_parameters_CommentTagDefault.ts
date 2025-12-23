import typia from "typia";

import { _test_llm_parameters } from "../../internal/_test_llm_parameters";
import { CommentTagDefault } from "../../structures/CommentTagDefault";

export const test_llm_parameters_CommentTagDefault = (): void =>
  _test_llm_parameters("CommentTagDefault")(
    typia.llm.parameters<CommentTagDefaultParameters>(),
  );

interface CommentTagDefaultParameters {
  regular: CommentTagDefault;
  nullable: CommentTagDefault | null;
  optional: CommentTagDefault | undefined;
  faint: CommentTagDefault | null | undefined;
  array: Array<CommentTagDefault>;
}
