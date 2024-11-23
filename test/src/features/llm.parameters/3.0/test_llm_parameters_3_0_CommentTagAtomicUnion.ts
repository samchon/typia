import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { CommentTagAtomicUnion } from "../../../structures/CommentTagAtomicUnion";

export const test_llm_parameters_3_0_CommentTagAtomicUnion =
  _test_llm_parameters({
    model: "3.0",
    name: "CommentTagAtomicUnion",
  })(typia.llm.parameters<CommentTagAtomicUnionParameters, "3.0">());

interface CommentTagAtomicUnionParameters {
  regular: CommentTagAtomicUnion;
  nullable: CommentTagAtomicUnion | null;
  optional: CommentTagAtomicUnion | undefined;
  faint: CommentTagAtomicUnion | null | undefined;
  array: Array<CommentTagAtomicUnion>;
}
